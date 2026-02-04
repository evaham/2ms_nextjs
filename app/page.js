"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SearchLayerPopup from "./component/SearchLayerPopup";
import ProductPopup from "./component/ProductPopup";

export default function Home() {
  // 팝업창 여닫기
  const [isNoticePopupOpen, setIsNoticePopupOpen] = useState(false);
  const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [isFloatingAdOpen, setIsFloatingAdOpen] = useState(true);

  // 검색팝업 여닫기
  const [isSearchPopupOpen, setisSearchPopupOpen] = useState(false);

  // 행사코너 높이 조정
  const [stickyHeight, setStickyHeight] = useState(0);
  const stickyRef = useRef(null);
  const [currentCornerId, setCurrentCornerId] = useState(null);
  // 행사코너 메뉴 가로 스크롤(드래그) 상태
  const eventScrollRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);

  // 맨 위로 이동
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    setCurrentCornerId(sectionId);

    const headerOffset = stickyHeight;
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

  // 스크롤 위치에 따라 활성 코너 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateActiveCorner = () => {
      const offset = stickyHeight + 1;
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
  }, [stickyHeight]);

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

  const getTitleFontSize = (length) => {
    if (length < 11) return "1rem";
    if (length >= 11 && length < 13) return "1.6em";
    if (length >= 13 && length < 15) return "1.4em";
    if (length >= 15 && length < 17) return "1.2em";
    if (length >= 17 && length < 19) return "1em";
    return "0.98em";
  };

  // 주문기능 사용여부
  const useOrderSystem = true;
  // 매장명
  const martName = "투게더DEV 마트(인천점)";
  // 행사제목
  const eventTitle = "투게더 DEV 마트 인천점 오픈기념 행사";
  // 기간
  const eventPeriod = "06.01(월) ~ 06.30(목),한달간";
  // 타이틀 배너이미지
  const titleBannerImg = "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/prod/26a4f3e8-5f26-4f9d-9404-18aa4680fa79_fixing_v2.png";
  // 행사코너 이동 사용여부
  const useEventCorner = true;
  // 공동구매 배너 사용여부
  const useGroupPurchaseBanner = true;
  // 공동구매 배너 링크
  const groupPurchaseBannerLink = "/group-purchase";
  // 공동구매 배너 이미지
  const groupPurchaseBannerImg = "/img/group_purchase.png";
  // 플로팅 광고 배너 사용여부
  const useFloatingAdBanner = true;
  // 플로팅 광고 배너 데이터
  const floatingAdBanner = {
    title: "이번 주 특가",
    description: "인기 상품 최대 30% 할인",
    cta: "자세히 보기",
    link: "https://www.naver.com",
    image: "/img/group_purchase.png",
  };
  // 행사코너 리스트(데이터)
  const eventGroupList = [
    {
      "id": "event-corner-1",
      "title": "행사코너1",
      "bgColor": "#ff6f61",
      "eventImg": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/prod/26a4f3e8-5f26-4f9d-9404-18aa4680fa79_fixing_v2.png",
      // 템플릿 타입 "typeA" : 가로형, "typeB" :세로형, "typeC" : 텍스트형, "typeD" : 장문편집형, "typeE" : 이미지형
      "templateType": "typeA",
      // 레이아웃 타입 "type1" : 1단레이아웃, "type2" : 2단레이아웃, "type3" : 3단레이아웃, "type4" : 4단레이아웃, "none" : 레이아웃
      "layoutType": "type4",
      "products": [
        { "id": 1, "name": "p자연그린 김밥단무지1", "cart": true, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { "id": 2, "name": "p자연그린 김밥단무지2", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { "id": 3, "name": "p자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "https://nng-phinf.pstatic.net/MjAyNjAxMjBfMjc3/MDAxNzY4ODkzNzkzMTA2.9FWLw-05xDx5QgZPw4sbTGC-j-MmFlyxewyXHsxqCoog.I-SPCydKgS_UYn9YhAckfPiF255iHdbEuB7fBtUvXgUg.JPEG/main.jpg" },
        { "id": 4, "name": "p자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 5, "name": "p자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 6, "name": "p자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 7, "name": "p자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 8, "name": "p자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTEwMjFfMjkz%2FMDAxNzYxMDE2MTEyMzAx.CkjID8Nc3fHBStIqQvLBok5-5QZWjUcgILDM852Sx2kg.swrY1ik00q-fnn6-JbUMsOOAEXUYYBKMS1i3EJET2qwg.JPEG%2FKakaoTalk_20251021_115627207_06.jpg" },
        { "id": 9, "name": "p자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 10, "name": "p자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 11, "name": "p자연그린 김밥단무지4", "cart": true, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { "id": 12, "name": "p자연그린 김밥단무지4단무지4단무지4", "cart": true, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" }
      ]
    },
    {
      "id": "event-corner-2",
      "title": "행사코너2",
      "bgColor": "#ddd",
      "eventImg": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/prod/26a4f3e8-5f26-4f9d-9404-18aa4680fa79_fixing_v2.png",

      // 템플릿 타입 "typeA" : 가로형, "typeB" :세로형, "typeC" : 텍스트형, "typeD" : 장문편집형, "typeE" : 이미지형
      "templateType": "typeB",
      // 레이아웃 타입 "type1" : 1단레이아웃, "type2" : 2단레이아웃, "type3" : 3단레이아웃, "type4" : 4단레이아웃, "none" : 레이아웃
      "layoutType": "none",
      "products": [
        { "id": 1, "name": "자연그린 김밥단무지1", "cart": true, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { "id": 2, "name": "자연그린 김밥단무지2", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { "id": 3, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "https://nng-phinf.pstatic.net/MjAyNjAxMjBfMjc3/MDAxNzY4ODkzNzkzMTA2.9FWLw-05xDx5QgZPw4sbTGC-j-MmFlyxewyXHsxqCoog.I-SPCydKgS_UYn9YhAckfPiF255iHdbEuB7fBtUvXgUg.JPEG/main.jpg" },
        { "id": 4, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 5, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 6, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 7, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 8, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTEwMjFfMjkz%2FMDAxNzYxMDE2MTEyMzAx.CkjID8Nc3fHBStIqQvLBok5-5QZWjUcgILDM852Sx2kg.swrY1ik00q-fnn6-JbUMsOOAEXUYYBKMS1i3EJET2qwg.JPEG%2FKakaoTalk_20251021_115627207_06.jpg" },
        { "id": 9, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 10, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 11, "name": "자연그린 김밥단무지4", "cart": true, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { "id": 12, "name": "자연그린 김밥단무지4단무지4단무지4", "cart": true, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" }
      ]
    },
    {
      "id": "event-corner-3",
      "title": "행사코너3",
      "bgColor": "#333",
      "eventImg": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/prod/26a4f3e8-5f26-4f9d-9404-18aa4680fa79_fixing_v2.png",
      // 템플릿 타입 "typeA" : 가로형, "typeB" :세로형, "typeC" : 텍스트형, "typeD" : 장문편집형, "typeE" : 이미지형
      "templateType": "typeC",
      // 레이아웃 타입 "type1" : 1단레이아웃, "type2" : 2단레이아웃, "type3" : 3단레이아웃, "type4" : 4단레이아웃, "none" : 레이아웃
      "layoutType": "none",
      "products": [
        { "id": 1, "name": "자연그린 김밥단무지1", "cart": true, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { "id": 2, "name": "자연그린 김밥단무지2", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { "id": 3, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "https://nng-phinf.pstatic.net/MjAyNjAxMjBfMjc3/MDAxNzY4ODkzNzkzMTA2.9FWLw-05xDx5QgZPw4sbTGC-j-MmFlyxewyXHsxqCoog.I-SPCydKgS_UYn9YhAckfPiF255iHdbEuB7fBtUvXgUg.JPEG/main.jpg" },
        { "id": 4, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 5, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 6, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 7, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 8, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTEwMjFfMjkz%2FMDAxNzYxMDE2MTEyMzAx.CkjID8Nc3fHBStIqQvLBok5-5QZWjUcgILDM852Sx2kg.swrY1ik00q-fnn6-JbUMsOOAEXUYYBKMS1i3EJET2qwg.JPEG%2FKakaoTalk_20251021_115627207_06.jpg" },
        { "id": 9, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 10, "name": "자연그린 김밥단무지3", "cart": false, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { "id": 11, "name": "자연그린 김밥단무지4", "cart": true, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { "id": 12, "name": "자연그린 김밥단무지4단무지4단무지4", "cart": true, "badgeImg": "/img/123.jpg", "price": 2558, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" }
      ]
    },
    {
      "id": "event-corner-4",
      "title": "행사코너4",
      "bgColor": "#fafafa",
      "eventImg": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/prod/26a4f3e8-5f26-4f9d-9404-18aa4680fa79_fixing_v2.png",
      // 템플릿 타입 "typeA" : 가로형, "typeB" :세로형, "typeC" : 텍스트형, "typeD" : 장문편집형, "typeE" : 이미지형
      "templateType": "typeD",
      // 레이아웃 타입 "type1" : 1단레이아웃, "type2" : 2단레이아웃, "type3" : 3단레이아웃, "type4" : 4단레이아웃, "none" : 레이아웃
      "layoutType": "none",
      "textContent": "행사코너3 텍스트형 코너입니다. 텍스트로 내용을 입력할 수 있습니다. 행사코너3 텍스트형 코너입니다. 텍스트로 내용을 입력할 수 있습니다. 행사코너3 텍스트형 코너입니다. 텍스트로 내용을 입력할 수 있습니다.",
    },
    {
      "id": "event-corner-5",
      "title": "행사코너5",
      "bgColor": "#f5f5f5",
      "eventImg": "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/prod/26a4f3e8-5f26-4f9d-9404-18aa4680fa79_fixing_v2.png",
      // 템플릿 타입 "typeA" : 가로형, "typeB" :세로형, "typeC" : 텍스트형, "typeD" : 장문편집형, "typeE" : 이미지형
      "templateType": "typeE",
      // 레이아웃 타입 "type1" : 1단레이아웃, "type2" : 2단레이아웃, "type3" : 3단레이아웃, "type4" : 4단레이아웃, "none" : 레이아웃
      "layoutType": "none",
      "imageContent": [
        { "id": 1, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { "id": 2, "image": "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
      ]
    },
  ]
  // 행사코너 상태(장바구니/수량 반영용)
  const [eventGroups, setEventGroups] = useState(eventGroupList);
  // 검색용 상품 목록(모든 코너 products 합치기)
  const searchList = eventGroups.flatMap((corner) => corner.products || []);
  
  // 샘플이미지 불러오기 실패시 대체이미지
  const emptyImg= "https://image6.coupangcdn.com/image/mypromotion/CPI90_banner.png";
  
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
            <img className="size-full" src={titleBannerImg} alt="배너이미지" />
          </div>
        ) : null }


        {/* 행사코너 이동 */}
        { useEventCorner ? (
          <div className="sticky flex w-full h-10 border-b border-slate-300 bg-white z-40" style={{ top: stickyHeight }}>
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
            <a href="http://naver.com">
              <img className="w-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${groupPurchaseBannerImg}`} alt="공동구매 배너" />
            </a>
          </div>
        ): null }


        {eventGroups.map(corner => (

          <div id={corner.id} key={corner.id} style={{ background: corner.bgColor }}>
            {/* <!-- <span>행사코너1 배너</span> --> */}
            {corner.eventImg ? (
              <div className="sample__banner sample__banner--type2 flex items-center justify-center min-h-20 bg-slate-300">
                <img className="size-full" src={corner.eventImg} alt="행사코너 배너" />
              </div>
            ) : null}

            <div className="goods w-full">
              {/* <!--템플릿 유형 가로형 --> */}
              {corner.templateType === "typeA" && (
                <ul className={`goods__list goods__list--type2 grid px-0.5 py-2.5 group gap-px overflow-hidden
                  ${corner.layoutType === "type1" ? "grid-cols-1" : ""} ${corner.layoutType === "type2" ? "grid-cols-2" : ""} ${corner.layoutType === "type3" ? "grid-cols-3" : ""} ${corner.layoutType === "type4" ? "grid-cols-4" : ""}
                `}>
                  {corner.products.map((item, index) => (
                    <li key={index} onClick={() => { setSelectedItem(item); setSelectedListKey(corner.id); setIsProductPopupOpen(true); }} data-effectjs="fade-up">
                      <div className="goods__card relative overflow-hidden w-full p-1 border border-[#d1d1d6] rounded-lg bg-white">
                        <div className="goods__imgbox relative flex flex-col justify-center items-center mx-auto bg-white group-[.grid-cols-2]:h-36 group-[.grid-cols-3]:h-23 group-[.grid-cols-4]:h-18" style={{ background: "white" }}>
                          <div className="goods__badge absolute flex top-0 left-0 size-17 
                            group-[.grid-cols-2]:size-12 group-[.grid-cols-3]:size-8 group-[.grid-cols-4]:size-6">
                            <img className="max-w-full max-h-full size-auto" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.badgeImg}`} alt="뱃지 이미지" />
                          </div>
                          <img className="lazyload max-w-full max-h-full size-auto" src={item.image} alt="상품 이미지" />
                          {useOrderSystem ? (
                            <div className={`icon__cartbox ${item.cart ? "active" : ""} flex items-center justify-center absolute right-1/20 bottom-1/20 bg-white border border-black/15 rounded-full shadow-[0_0_3px_rgba(0,0,0,0.2)] 
                              group-[.grid-cols-1]:size-11 group-[.grid-cols-2]:size-11 group-[.grid-cols-3]:size-8 group-[.grid-cols-4]:size-7 [&.active]:border-blue-300 [&.active_svg]:fill-blue-500
                            `}>
                              <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#94a3b8">
                                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                              </svg>
                            </div>
                          ) : null}

                        </div>


                        <div className="goods__info text-center">
                          <div className="goods__delprice previewEtc1 h-4 text-sm text-[#999] line-through leading-tight
                            group-[.grid-cols-1]:text-base
                            group-[.grid-cols-2]:text-sm
                            group-[.grid-cols-3]:text-xs
                            group-[.grid-cols-4]:text-xs
                          ">공유이미지</div>
                          <div className="goods__price font-bold text-[#fa5252] tracking-tight leading-tight
                            group-[.grid-cols-1]:text-[300%] 
                            group-[.grid-cols-2]:text-[190%] 
                            group-[.grid-cols-3]:text-[135%] 
                            group-[.grid-cols-4]:text-[100%]
                          ">{item.price.toLocaleString()}</div>
                          <div className="goods__name line-clamp-2 max-w-64 h-12 mt-0.5 mb-auto mx-auto font-bold break-all leading-tight
                            group-[.grid-cols-1]:text-xl group-[.grid-cols-1]:h-12
                            group-[.grid-cols-2]:text-lg group-[.grid-cols-2]:h-11
                            group-[.grid-cols-3]:text-sm group-[.grid-cols-3]:h-9
                            group-[.grid-cols-4]:text-xs group-[.grid-cols-4]:h-8
                          ">{item.name}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* <!--템플릿 유형 세로형 --> */}
              {corner.templateType === "typeB" && (
                <ul id="" className={`goods__list goods__list--style2 flex flex-col px-0.5 py-2.5 gap-px overflow-hidden`}>
                  {corner.products.map((item, index) => (
                    <li key={index} onClick={() => { setSelectedItem(item); setSelectedListKey(corner.id); setIsProductPopupOpen(true); }} data-effectjs={index % 2 === 0 ? 'slide-left' : 'slide-right'} data-effectjs-duration="500">
                      <div className="goods__card overflow-hidden flex w-full p-1 gap-3 border border-[#d1d1d6] rounded-lg bg-white">
                        <div className="goods__imgbox relative flex flex-col justify-center items-center w-2/5 h-32 mx-auto bg-white">
                          <div className="goods__badge absolute flex top-0 left-0 size-11">
                            <img className="max-w-full max-h-full size-auto" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.badgeImg}`} alt="뱃지 이미지" />
                          </div>
                          <img className="lazyload max-w-full max-h-full size-auto" src={item.image} alt="상품 이미지" />
                          
                          {useOrderSystem ? (
                            <div className={`icon__cartbox ${item.cart ? "active" : ""} flex items-center justify-center absolute right-1/20 bottom-1/20 size-9 bg-white border border-black/15 rounded-full shadow-[0_0_3px_rgba(0,0,0,0.2)]
                              [&.active]:border-blue-300 [&.active_svg]:fill-blue-500
                            `}>
                              <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#94a3b8">
                                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                              </svg>
                            </div>
                          ) : null}
                        
                        </div>
                        <div className="goods__info flex-1 flex flex-col justify-center">
                          <div className="goods__delprice previewEtc1 h-4 text-sm text-[#999] line-through leading-tight [&.previewEtc1]:text-[#517dfb] [&.previewEtc1]:font-bold [&.previewEtc1]:no-underline">공유이미지</div>
                          <div className="goods__price text-[#fa5252] text-[195%] font-bold tracking-tight leading-tight">{item.price.toLocaleString()}</div>
                          <div className="goods__name line-clamp-2 h-11 text-lg font-bold break-all leading-tight">{item.name}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* <!--템플릿 유형 텍스트형 --> */}
              { corner.templateType === "typeC" && (
                <ul id="js_changeList" className="goods__list goods__list--style3 flex flex-col px-0.5 py-2.5 gap-px">
                  {corner.products.map((item, index) => (
                    <li key={index} onClick={() => { setSelectedItem(item); setSelectedListKey(corner.id); setIsProductPopupOpen(true);}}>
                      <div className="goods__card relative overflow-hidden flex flex-col w-full p-1 gap-3 border border-[#d1d1d6] rounded-lg bg-white">
                        {/* 이미지 안보임 */}
                        <div className="goods__imgbox relative flex flex-col justify-center items-center w-2/5 h-32 mx-auto bg-white" style={{ display: 'none' }}>
                          <div className="goods__badge absolute flex top-0 left-0 size-11">
                            <img className="max-w-full max-h-full size-auto" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.badgeImg}`} alt="뱃지 이미지" />
                          </div>
                          <img data-src="" className="lazyload max-w-full max-h-full size-auto" src={item.image} />
                        </div>

                        {useOrderSystem ? (
                        <div className={`icon__cartbox ${item.cart ? "active" : ""} flex items-center justify-center absolute left-1/20 bottom-1/20 size-9 bg-white border border-black/15 rounded-full shadow-[0_0_3px_rgba(0,0,0,0.2)]
                        [&.active]:border-blue-300 [&.active_svg]:fill-blue-500
                        `}>
                          <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#94a3b8">
                            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                          </svg>
                        </div>
                        ) : null}


                        <div className="goods__info flex flex-col">
                          <div className="goods__name line-clamp-2 h-9.5 mt-1 font-bold break-all leading-tight">{item.name}</div>
                          <div className="flex items-center justify-end gap-2">
                            <div className="goods__delprice previewEtc1 mt-3 text-sm leading-tight">공유이미지</div>
                            <div className="goods__price text-[#fa5252] text-[195%] font-bold tracking-tight leading-tight">{item.price.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {/* <!--템플릿 유형 장문편집형 --> */}
              { corner.templateType === "typeD" && (
                <ul className="goods__list flex flex-col px-0.5 py-2.5 gap-px">
                  <li>
                    <div className="goods__card relative overflow-hidden flex flex-col w-full p-1 gap-3 border border-[#d1d1d6] rounded-lg bg-white">
                      <pre className="goods__pre text-sm text-left p-1.5 font-sans
                        [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:font-bold
                        [&_h1,&_h2,&_h3]:leading-10
                        [&_h4,&_h5,&_h6]:leading-7.5
                        [&_h1]:text-[35px]
                        [&_h2]:text-[30px]
                        [&_h3]:text-[25px]
                        [&_h4]:text-[20px]
                        [&_h5]:text-[18px]
                        [&_h6]:text-[16px]
                      ">
                        {corner.textContent}
                      </pre>
                    </div>
                  </li>
                </ul>
              )}
              {/* <!--이미지 직접추가형 --> */}
              { corner.templateType === "typeE" && (
              <ul id="js_changeList5" className="goods__list flex flex-col p-0 gap-px">
                <li className="mb-3.5">
                  <div className="goods__card flex flex-col">
                    {corner.imageContent.map((item, index) => (

                      <div key={index} className="goods__imgbox goods__imgbox--only flex felx-col w-full h-auto mx-auto bg-white">
                        <img src={item.image} alt="이미지" className="lazyload w-full max-h-full ${fn:contains(f, 'thumb_') ? 'thumb cursor-pointer' : ''}" />
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
              )}
            </div>
          </div>
        ))}
        {/* 플로팅 광고 배너 샘플 */}
        {useFloatingAdBanner ? (
          <div className="fixed right-2 top-48 z-50">
            <div
              className="relative transition-transform duration-300"
              style={{
                transform: isFloatingAdOpen ? "translateX(0)" : "translateX(calc(100% - 2.5rem))",
              }}
            >
              <div className="relative flex items-center gap-3 rounded-2xl border border-amber-200 bg-white px-3 py-2 shadow-lg">
                <a href={floatingAdBanner.link} className="flex items-center gap-3">
                  <div className="flex size-14 items-center justify-center overflow-hidden rounded-xl bg-amber-50">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${floatingAdBanner.image}`}
                      alt="광고 배너"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">{floatingAdBanner.title}</span>
                    <span className="text-xs text-slate-500">{floatingAdBanner.description}</span>
                    <span className="mt-1 inline-flex w-fit rounded-full bg-amber-400 px-2 py-0.5 text-xs font-bold text-white">
                      {floatingAdBanner.cta}
                    </span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => setIsFloatingAdOpen((prev) => !prev)}
                  className="absolute -left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white shadow"
                  aria-label="플로팅 광고 토글"
                >
                  {isFloatingAdOpen ? "닫기" : "열기"}
                </button>
              </div>
            </div>
          </div>
        ) : null}


        {/* 맨위로 이동 버튼 */}
        <div className="wrap_stickyfooter fixed right-0 bottom-23 w-auto h-auto z-50">
          <a className="scroll_top btn_movetop flex border flex-col items-center justify-center w-15 h-15 ml-auto mr-2.5 rounded-full bg-black/70 hover:bg-[#333] shadow-md shadow-black/50"
            onClick={handleScrollTop}
            role="button"
            aria-label="맨위로 이동"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff"><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path></svg>
            <span className="text-xs text-white tracking-tight">맨위로</span>
          </a>
        </div>
        {/* 레이어 팝업 안내창 */}
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
      </div>
      <ProductPopup
        open={isProductPopupOpen}
        orderSystem={useOrderSystem} //주문기능의 유무
        item={selectedItem}
        fallbackImage={emptyImg}
        onClose={handleClosePopup}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}
