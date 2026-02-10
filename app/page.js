"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SearchLayerPopup from "./component/SearchLayerPopup";
import ProductPopup from "./component/ProductPopup";
import FloatingAdBanner from "./component/FloatingAdBanner";
import AdPopup from "./component/AdPopup";
import EventCornerList from "./component/EventCornerList";
import martData from "./data/martData.json";

export default function Home() {
  // 이미지 경로가 절대경로일 경우, basePath를 붙여주는 함수
  const resolveImageSrc = (src) =>
    src && src.startsWith("/")
      ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`
      : src;


  // 팝업창 여닫기
  const [isNoticePopupOpen, setIsNoticePopupOpen] = useState(false);
  const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [isFloatingAdOpen, setIsFloatingAdOpen] = useState(true);
  const [isAdPopupOpen, setIsAdPopupOpen] = useState(false);
  const [isAdPopupHiddenToday, setIsAdPopupHiddenToday] = useState(false);

  // 검색팝업 여닫기
  const [isSearchPopupOpen, setisSearchPopupOpen] = useState(false);

  // 행사코너 높이 조정
  const [stickyHeight, setStickyHeight] = useState(0);
  const stickyRef = useRef(null);
  const eventMenuRef = useRef(null);
  const [currentCornerId, setCurrentCornerId] = useState(null);
  // 행사코너 메뉴 가로 스크롤(드래그) 상태
  const eventScrollRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);

  const {
    useOrderSystem,
    martName,
    eventTitle,
    eventPeriod,
    titleBannerImg,
    useEventCorner,
    useGroupPurchaseBanner,
    groupPurchaseBannerLink,
    groupPurchaseBannerImg,
    useFloatingAdBanner,
    floatingAdBanner,
    adPopupImage,
    fallbackImage,
    eventGroupList,
  } = martData;

  const handleScrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    setCurrentCornerId(sectionId);

    const menuHeight = eventMenuRef.current?.offsetHeight || 0;
    const headerOffset = stickyHeight + menuHeight;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  // 행사코너 메뉴 드래그 시작
  const handleEventMenuMouseDown = (event) => {
    if (!eventScrollRef.current) return;
    isDraggingRef.current = true;
    dragStartXRef.current = event.pageX - eventScrollRef.current.offsetLeft;
    dragScrollLeftRef.current = eventScrollRef.current.scrollLeft;
  };

  // 행사코너 메뉴 드래그 이동
  const handleEventMenuMouseMove = (event) => {
    if (!isDraggingRef.current || !eventScrollRef.current) return;
    event.preventDefault();
    const x = event.pageX - eventScrollRef.current.offsetLeft;
    const walk = x - dragStartXRef.current;
    eventScrollRef.current.scrollLeft = dragScrollLeftRef.current - walk;
  };

  // 행사코너 메뉴 드래그 종료
  const handleEventMenuMouseUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const refreshEffect = () => {
      if (window.effectJs?.refreshHard) {
        window.effectJs.refreshHard();
        return;
      }
      if (window.effectJs?.refresh) {
        window.effectJs.refresh();
      }
    };

    requestAnimationFrame(refreshEffect);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const todayKey = new Date().toISOString().slice(0, 10);
    const stored = window.localStorage.getItem("hideAdPopupDate");
    if (stored === todayKey) {
      setIsAdPopupHiddenToday(true);
    }
  }, []);

  // 스크롤 위치에 따라 활성 코너 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateActiveCorner = () => {
      const menuHeight = eventMenuRef.current?.offsetHeight || 0;
      const offset = stickyHeight + menuHeight + 1;
      let currentId = null;
      let currentTop = -Infinity;

      eventGroupList.forEach((corner) => {
        const element = document.getElementById(corner.id);
        if (!element) return;

        const top = element.getBoundingClientRect().top - offset;
        if (top <= 0 && top > currentTop) {
          currentTop = top;
          currentId = corner.id;
        }
      });

      if (!currentId) {
        const firstVisible = eventGroupList.find((corner) => document.getElementById(corner.id));
        currentId = firstVisible ? firstVisible.id : null;
      }

      setCurrentCornerId(currentId);
    };

    updateActiveCorner();
    window.addEventListener("scroll", updateActiveCorner, { passive: true });
    window.addEventListener("resize", updateActiveCorner);

    return () => {
      window.removeEventListener("scroll", updateActiveCorner);
      window.removeEventListener("resize", updateActiveCorner);
    };
  }, [stickyHeight, eventGroupList]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateStickyHeight = () => {
      if (!stickyRef.current) return;
      setStickyHeight(stickyRef.current.offsetHeight || 0);
    };

    updateStickyHeight();

    let observer;
    if (window.ResizeObserver) {
      observer = new ResizeObserver(updateStickyHeight);
      observer.observe(stickyRef.current);
    }

    window.addEventListener("resize", updateStickyHeight);

    return () => {
      window.removeEventListener("resize", updateStickyHeight);
      if (observer) observer.disconnect();
    };
  }, []);

  // 행사코너 상태(장바구니/수량 반영용)
  const [eventGroups, setEventGroups] = useState(eventGroupList);
  // 검색용 상품 목록(모든 코너 products 합치기)
  const searchList = eventGroups.flatMap((corner) => corner.products || []);
  
  // 선택 상품 선택 상태
  const [selectedItem, setSelectedItem] = useState(null);
  // 선택 상품이 속한 코너 key
  const [selectedListKey, setSelectedListKey] = useState(null);

  // 팝업창 전부 닫기
  const handleClosePopup = () => {
    setIsProductPopupOpen(false);
    setSelectedItem(null);
    setSelectedListKey(null);
  };

  // 장바구니 담기(선택 상품의 cart/quantity 갱신)
  const handleAddToCart = (quantity) => {
    const nextQuantity = Math.max(1, Number(quantity) || 1);

    if (!selectedItem || !selectedListKey) {
      handleClosePopup();
      return;
    }

    setEventGroups((prev) => prev.map((corner) => {
      if (corner.id !== selectedListKey || !corner.products) {
        return corner;
      }

      return {
        ...corner,
        products: corner.products.map((item) =>
          item.id === selectedItem.id
            ? { ...item, cart: true, quantity: nextQuantity }
            : item
        ),
      };
    }));

    handleClosePopup();
  };

  const handleSelectItem = (item, listKey) => {
    setSelectedItem(item);
    setSelectedListKey(listKey);
    setIsProductPopupOpen(true);
  };
  return (
    <>
      <div className='sample relative flex flex-col min-h-screen pb-20 bg-slate-50'>
        <div ref={stickyRef} className="js_sticky sticky top-0 z-50">
          <div className="sample__name clearfix relative flex items-center gap-1.5 h-16 p-2.5 bg-[#21409a] text-[20px] text-white font-bold" style={{ color: "", background: "" }}>
            <span onClick={() => setIsNoticePopupOpen(true)}
              className="js_fontsize mart-info relative flex mr-auto pr-8 items-center leading-tight cursor-pointer"
            >
              {martName}
              <span className="absolute right-0 top-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fafafa" height="32px" viewBox="0 -960 960 960" width="32px"><path d="M460-300h40v-220h-40v220Zm20-276.92q10.46 0 17.54-7.08 7.08-7.08 7.08-17.54 0-10.46-7.08-17.54-7.08-7.07-17.54-7.07-10.46 0-17.54 7.07-7.08 7.08-7.08 17.54 0 10.46 7.08 17.54 7.08 7.08 17.54 7.08Zm.13 456.92q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>
              </span>
            </span>
            <button onClick={() => setisSearchPopupOpen(true)} className="sample__tel block size-8 p-1 rounded-full bg-[#fafafa]">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
            </button>
            <Link href={"/"} onClick={() => window.location.href = 'tel:1577-4550'} className="sample__tel block size-8 p-1 rounded-full bg-[#fafafa]">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333">
                <path d="m720-560-58-56 64-64H520v-80h206l-62-62 56-58 160 162-160 158Zm78 440q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
            </Link>
          </div>
          <div className="sample__tit p-2.5 text-center bg-slate-100 text-black">
            <span className="block text-xl">{eventTitle}</span>
            <span className="sample__date popStartDate block text-lg">{eventPeriod}</span>
            <span className="popExDate block text-lg"></span>
          </div>
        </div>

        {/* 배너이미지 */}
        { titleBannerImg ?(
          <div className="sample__banner flex text-center bg-slate-400">
            <img className="size-full" src={resolveImageSrc(titleBannerImg)} alt="배너이미지" />
          </div>
        ) : null }


        {/* 행사코너 이동 */}
        { useEventCorner ? (
          <div ref={eventMenuRef} className="sticky flex w-full h-10 border-b border-slate-300 bg-white z-40" style={{ top: stickyHeight }}>
            <div
              ref={eventScrollRef}
              className="flex items-center gap-2 overflow-x-auto whitespace-nowrap px-2"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                cursor: isDraggingRef.current ? "grabbing" : "grab",
              }}
              onMouseDown={handleEventMenuMouseDown}
              onMouseMove={handleEventMenuMouseMove}
              onMouseUp={handleEventMenuMouseUp}
              onMouseLeave={handleEventMenuMouseUp}
              aria-live="polite"
            >
              {eventGroupList.map((corner, index) => (
                <button
                  type="button"
                  key={corner.id}
                  className={`flex items-center h-8 px-3 border border-gray-500 rounded-full text-sm text-gray-500 font-bold cursor-pointer active:bg-blue-800 active:text-white`}
                  onClick={() => handleScrollToSection(corner.id)}
                  role="group"
                  aria-label={`${index + 1} / ${eventGroupList.length}`}
                >
                  {corner.title}
                </button>
              ))}
            </div>
            <style jsx>{`
              .scroll_btn::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        ) : null }

        {/* 공동구매 배너 */}
        { useGroupPurchaseBanner ? (
          <div className="group-purchase animate-slide-in-left">
            <a href={groupPurchaseBannerLink}>
              <img className="w-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${groupPurchaseBannerImg}`} alt="공동구매 배너" />
            </a>
          </div>
        ): null }

        {/* 행사코너 리스트 시작 */}
        <EventCornerList
          eventGroups={eventGroups}
          useOrderSystem={useOrderSystem}
          resolveImageSrc={resolveImageSrc}
          onSelectItem={handleSelectItem}
        />
        {/* 행사코너 리스트 종료 */}

        {/* 플로팅 버튼 */}
        <div className="wrap_stickyfooter fixed right-0 bottom-23 w-auto h-auto z-50 flex flex-col gap-2">
          <a className="scroll_top btn_movetop flex border flex-col items-center justify-center size-16.5 ml-auto mr-2.5 rounded-full bg-black/70 hover:bg-[#333] shadow-md shadow-black/50"
            onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });}}
            role="button"
            aria-label="맨위로 이동"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="#fff"><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path></svg>
            <span className="text-xs text-white tracking-tight">맨위로</span>
          </a>
          {!isAdPopupHiddenToday && (
            <a className="btn_receipt flex border flex-col items-center justify-center size-16.5 ml-auto mr-2.5 rounded-full bg-black/70 hover:bg-[#333] shadow-md shadow-black/50"
              onClick={() => setIsAdPopupOpen(true)}
              role="button"
              aria-label="전자영수증"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M18.7168 2.25C18.7351 2.29114 21.9368 9.48676 20.2363 14.6084C19.1627 17.8415 16.3905 19.4765 14.4844 20.2451C12.067 21.5346 8.7468 22.065 3.87013 21.5625C3.49831 21.5241 3.22969 21.1936 3.26954 20.8242C3.30987 20.4545 3.64447 20.1853 4.01661 20.2236C7.01193 20.5323 9.31751 20.4267 11.1358 20.0283C11.1319 20.0255 11.1279 20.0224 11.124 20.0195C12.019 19.8789 12.8362 19.6588 13.5752 19.3691C16.3617 18.2769 18.0104 16.2327 18.5234 14.0742C18.595 13.773 18.4056 13.4708 18.1016 13.4004C17.7977 13.3302 17.4936 13.5174 17.4219 13.8184C16.9995 15.596 15.6254 17.3619 13.1602 18.3281C12.2671 18.6781 11.2261 18.922 10.0322 19.0225C9.00271 17.8526 8.22249 16.0849 9.04298 13.6133C9.76333 11.4438 10.3559 10.4395 14.0693 8.21875C17.7805 5.99905 18.7158 2.25393 18.7168 2.25Z" fill="white"/>
              </svg>
              <span className="my-1 text-xs text-white tracking-tighter">전자영수증</span>
            </a>
          )}
        </div>
      </div>

      {/* 플로팅 광고 배너 */}
      <FloatingAdBanner
        enabled={useFloatingAdBanner}
        isOpen={isFloatingAdOpen}
        banner={floatingAdBanner}
        onToggle={() => setIsFloatingAdOpen((prev) => !prev)}
      />

      {/* 안내 레이어 팝업 */}
      {isNoticePopupOpen && (
        <div className="layer__wrap flex justify-center items-center fixed inset-0 p-3 z-50">
          <div className="layer__bg absolute inset-0 bg-black/40"></div>
          <div className="layer__panel relative overflow-hidden flex flex-col w-full p-4 bg-slate-50 rounded-2xl z-50">
            <p className="layer__tit mb-2 text-xl text-center font-bold leading-tight">공지사항</p>
            <div className="layer__notice overflow-y-auto flex flex-col h-60 p-4 rounded-lg text-base bg-white">
              오후2시 까지 배달 주문 시 당일 저녁에 배송 드립니다..<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />asdf<br /><br /><br /><br /><br /></div>
            <button onClick={() => setIsNoticePopupOpen(false)} className="layer__close absolute top-3 right-3 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#64748b"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </button>
          </div>
        </div>
      )}
      {/* 검색 레이어 팝업 */}
      <SearchLayerPopup
        open={isSearchPopupOpen}
        onClose={() => setisSearchPopupOpen(false)}
        list={searchList}
      />
      {/* 상품 레이어 팝업 */}
      <ProductPopup
        open={isProductPopupOpen}
        orderSystem={useOrderSystem} //주문기능의 유무
        item={selectedItem}
        fallbackImage={fallbackImage}
        onClose={handleClosePopup}
        onAddToCart={handleAddToCart}
      />
      {/* 전자영수증 레이어 팝업 */}
      <AdPopup
        open={isAdPopupOpen}
        adPopData={adPopupImage}
        onClose={() => setIsAdPopupOpen(false)}
        onHideToday={() => {
          const todayKey = new Date().toISOString().slice(0, 10);
          window.localStorage.setItem("hideAdPopupDate", todayKey);
          setIsAdPopupHiddenToday(true);
          setIsAdPopupOpen(false);
        }}
      />
    </>
  );
}
