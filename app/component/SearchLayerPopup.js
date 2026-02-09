"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function SearchLayerPopup({ open, onClose, list }) {
    // 최근 검색어 저장 키
    const RECENT_KEYWORDS_STORAGE_KEY = "recentKeywords";
    const [searchQuery, setSearchQuery] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [recentKeywords, setRecentKeywords] = useState([
        "일이삼사오육칠팔구십일이삼사오육칠팔구십",
        "일이삼사오육칠팔구십",
        "김밥",
        "1",
        "일이삼사오육칠팔구십",
    ]);
    const [showRecentKeywords, setShowRecentKeywords] = useState(false);
    const [isLargeSearchImage, setIsLargeSearchImage] = useState(false);
    const [activeCartKeys, setActiveCartKeys] = useState(new Set());
    const searchInputRef = useRef(null);
    // 내부 컨텐츠 높이를 측정하기 위한 ref
    const contentRef = useRef(null);
    // 높이 트랜지션에 사용할 현재 컨텐츠 높이
    const [contentHeight, setContentHeight] = useState(0);

    // 팝업 오픈 시 최근 검색어 로드 및 입력 초기화
    useEffect(() => {
        if (!open) return;
        if (typeof window !== "undefined") {
            try {
                const stored = window.localStorage.getItem(RECENT_KEYWORDS_STORAGE_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed)) {
                        setRecentKeywords(parsed.slice(0, 5));
                        setShowRecentKeywords(parsed.length > 0);
                    }
                }
            } catch {
                // ignore storage errors
            }
        }
        setSearchQuery("");
        setSearchInput("");
    }, [open]);

    // 최근 검색어를 localStorage에 저장
    const persistRecentKeywords = (nextKeywords) => {
        try {
            window.localStorage.setItem(
                RECENT_KEYWORDS_STORAGE_KEY,
                JSON.stringify(nextKeywords)
            );
        } catch {
            // ignore storage errors
        }
    };

    // 검색 실행 및 최근 검색어 갱신(최대 5개 유지)
    const submitSearch = (value) => {
        const keyword = value.trim();
        if (!keyword) return;

        setSearchQuery(keyword);
        setRecentKeywords((prev) => {
            const next = [keyword, ...prev.filter((item) => item !== keyword)].slice(0, 5);
            persistRecentKeywords(next);
            return next;
        });
        setShowRecentKeywords(true);
    };

    const filteredList = useMemo(
        () =>
            (list || []).filter((item) =>
                item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
            ),
        [list, searchQuery]
    );

    // 렌더링 직후 실제 높이를 측정해 자연스럽게 늘어나도록 처리
    useEffect(() => {
        if (!open) return;
        const rafId = requestAnimationFrame(() => {
            if (!contentRef.current) return;
            setContentHeight(contentRef.current.scrollHeight);
        });

        return () => cancelAnimationFrame(rafId);
    }, [open, searchQuery, filteredList.length, showRecentKeywords, recentKeywords.length, isLargeSearchImage]);

    // 컨텐츠 크기 변화(이미지 토글, 검색결과 등)를 감지해 높이 갱신
    useEffect(() => {
        if (!open || !contentRef.current) return;
        const element = contentRef.current;
        const observer = new ResizeObserver(() => {
            setContentHeight(element.scrollHeight);
        });

        observer.observe(element);
        return () => observer.disconnect();
    }, [open]);

    const hasQuery = searchQuery.trim() !== "";

    if (!open) return null;

    return (
        <div className="layer__wrap flex justify-center items-start fixed inset-0 p-3 pt-10 z-50">
            <div className="layer__bg absolute inset-0 bg-black/40" onClick={onClose}></div>
            <div className="layer__panel relative overflow-hidden flex flex-col w-full p-4 bg-slate-50 rounded-2xl z-50">
                <p className="layer__tit mb-3 text-xl text-center font-bold leading-tight">상품 검색</p>
                <div className="relative mb-3 w-full h-10 pl-4 pr-10 border border-slate-400 rounded-full text-base bg-white focus-within:border-slate-700">
                    <input
                        ref={searchInputRef}
                        className="w-full h-full pr-10 text-base outline-none"
                        placeholder="상품명을 입력하세요"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                submitSearch(searchInput);
                                e.currentTarget.blur();
                            }
                        }}
                        autoFocus
                    />
                    {searchInput && (
                        <button
                            type="button"
                            aria-label="검색어 지우기"
                            className="absolute right-11 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                            onClick={() => {
                                setSearchInput("");
                                requestAnimationFrame(() => {
                                    searchInputRef.current?.focus();
                                });
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-400" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="m336-293.85 144-144 144 144L666.15-336l-144-144 144-144L624-666.15l-144 144-144-144L293.85-624l144 144-144 144L336-293.85ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Z"/></svg>
                        </button>
                    )}
                    <button
                        type="button"
                        aria-label="검색"
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                        onClick={() => {
                            if (document.activeElement instanceof HTMLElement) {
                                document.activeElement.blur();
                            }
                            submitSearch(searchInput);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                    </button>
                </div>
                {/* 검색 결과영역 */}
                {/* contentHeight로 감싼 래퍼에 height 트랜지션 적용 */}
                <div className="overflow-hidden transition-[height] duration-300 ease-in-out"
                    style={{ height: contentHeight ? `${contentHeight}px` : "auto" }}
                >
                    {/* 실제 컨텐츠 영역(높이 측정 대상) */}
                    <div ref={contentRef} className="flex flex-col rounded-lg bg-white">

                    {searchQuery.trim() === "" ? (
                      <div className="flex flex-col p-2">
                          <div className="text-slate-500">최근 검색어</div>
                          <p className="mb-2 text-sm text-slate-400">검색어는 최대5개, 30일동안 저장합니다.</p>
                          {!showRecentKeywords ? (
                              <div className="px-2 py-10 text-center text-slate-500">
                                  <p className="text-lg font-bold">최근 검색 내역이 없습니다</p>
                                  {/* <button
                                      type="button"
                                      className="block mx-auto text-blue-500 hover:text-blue-600"
                                      onClick={() => setShowRecentKeywords(true)}
                                  >
                                      최근검색어 추가
                                  </button> */}
                              </div>
                          ) : (
                              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                                  {recentKeywords.map((keyword, index) => (
                                      <li key={`${keyword}-${index}`} className="flex items-center rounded-full bg-white border border-slate-400">
                                          <button
                                              type="button"
                                              className="flex max-w-56 pl-3 pr-1 py-1 text-slate-600 rounded-l-full"
                                              onClick={() => setSearchInput(keyword)}
                                          >
                                              <span className="line-clamp-1">{keyword}</span>
                                          </button>
                                          <button
                                              type="button"
                                              aria-label="최근 검색어 삭제"
                                              className="pr-2 pl-1 py-1 text-slate-600"
                                              onClick={() =>
                                                  setRecentKeywords((prev) => {
                                                      // 개별 삭제 후 localStorage 동기화
                                                      const next = prev.filter((_, prevIndex) => prevIndex !== index);
                                                      persistRecentKeywords(next);
                                                      setShowRecentKeywords(next.length > 0);
                                                      return next;
                                                  })
                                              }
                                          >
                                              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                                          </button>
                                      </li>
                                  ))}
                              </ul>
                          )}
                      </div>
                    ) : filteredList.length === 0 ? (
                        <div className="flex flex-col items-center justify-center min-h-40 p-4 text-center text-slate-500">
                            <p className="text-lg font-bold">검색 결과가 없습니다.</p>
                            <p className="mt-5">
                                찾으시는 상품이 없으신가요? <br />
                                주문서 작성 시 요청사항에 기재해 주세요
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col h-[65svh]">
                            {/* <div className="flex justify-end px-2 py-2">
                                <button
                                    type="button"
                                    className="text-sm text-slate-500 hover:text-slate-700"
                                    onClick={() => setIsLargeSearchImage((prev) => !prev)}
                                >
                                    이미지크기 변경
                                </button>
                            </div> */}
                            <ul className="flex-1 divide-y divide-slate-200 overflow-y-auto">
                                {filteredList.map((item, index) => {
                                    const cartKey = `${item.id}-${index}`;
                                    const isActive = activeCartKeys.has(cartKey);

                                    return (
                                    <li
                                        key={`${item.id}-${index}`}
                                        className="p-1 flex items-center gap-3"
                                    >
                                        <div className="flex flex-col justify-center items-center size-32">
                                            <img className="max-w-full max-h-full size-auto" src={item.image} alt="상품 이미지" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm">오늘만</div>
                                            <div className="text-xl text-rose-500 font-bold">{item.price.toLocaleString()}</div>
                                            <div className="font-bold leading-tight line-clamp-2">{item.name}</div>
                                        </div>
                                        <div className="pr-2">
                                            <button
                                                type="button"
                                                aria-pressed={isActive}
                                                className={`icon__cartbox flex items-center justify-center w-10 h-10 bg-white border rounded-full ${
                                                    isActive ? "border-blue-300" : "border-black/15"
                                                }`}
                                                onClick={() =>
                                                    setActiveCartKeys((prev) => {
                                                        const next = new Set(prev);
                                                        if (next.has(cartKey)) {
                                                            next.delete(cartKey);
                                                        } else {
                                                            next.add(cartKey);
                                                        }
                                                        return next;
                                                    })
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="60%"
                                                    viewBox="0 -960 960 960"
                                                    width="60%"
                                                    className={isActive ? "fill-blue-500" : "fill-slate-400"}
                                                >
                                                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                                                </svg>
                                            </button>

                                        </div>
                                    </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="layer__close absolute top-3 right-3 flex justify-center items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#64748b"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                </button>
            </div>
        </div>
    );
}