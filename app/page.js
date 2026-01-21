"use client";
import {useState} from "react";
import Link from "next/link";

export default function Home() {
    const [orderSystem, setOrderSystem] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);
    const [showSearchPopup, setShowSearchPopup] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [recentKeywords, setRecentKeywords] = useState(["일이삼사오육칠팔구십", "일이삼사오육칠팔구십", "일이삼사오육칠팔구십", "계란", "김치"]);

    const bannerImg = "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/prod/26a4f3e8-5f26-4f9d-9404-18aa4680fa79_fixing_v2.png";

    const sampleImg = "https://image6.coupangcdn.com/image/mypromotion/CPI90_banner.png";
    const bannerImg2 = "http://tdc-api-dev-3.togethers.kr:8082/2ms/static/img/group_purchase.png";
    const eventImg = "//thumbnail.coupangcdn.com/thumbnails/remote/292x292ex/image/retail/images/77063589846760-dcd9d195-fbe6-49cb-b171-c2de956fac70.jpg";
    const badgeImg = "http://tdc-api-dev-3.togethers.kr:2004/WebLink/641/20221111_174111_272.png";
    const testImg = "http://tdc-api-dev-3.togethers.kr:2004/WebLink/641/d-abcc9566-cb5e-4767-bb01-10cdd49182b5.png";

    const list = [
        { id: 1, name: "자연그린 김밥단무지1", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 2, name: "자연그린 김밥단무지2", cart: false, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/985469858334630-fdaa7339-3b98-4d84-b358-8d62bbf3c84b.jpg" },
        { id: 4, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 5, name: "자연그린 김밥단무지4단무지4단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
    ];

    const filteredList = list.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

  return (
    <>
        <div className='sample relative flex flex-col min-h-screen pb-20 bg-slate-50'>
            <div className="sticky top-0 z-50">
                <div className="sample__name clearfix relative flex justify-center items-center h-16 bg-[#21409a] text-xl text-white font-bold" style={{ color: "", background: "" }}>
                <span className="js_fontsize mart-info flex items-center cursor-pointer" style={{ fontSize: "2rem" }} onClick={() => setShowPopup(true)}>투게더마트
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fafafa" height="32px" viewBox="0 -960 960 960" width="32px"><path d="M460-300h40v-220h-40v220Zm20-276.92q10.46 0 17.54-7.08 7.08-7.08 7.08-17.54 0-10.46-7.08-17.54-7.08-7.07-17.54-7.07-10.46 0-17.54 7.07-7.08 7.08-7.08 17.54 0 10.46 7.08 17.54 7.08 7.08 17.54 7.08Zm.13 456.92q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>
                </span>
                <button onClick={() => {setSearchQuery(""); setShowSearchPopup(true);}} className="sample__tel block absolute top-3.5 right-12 size-8 p-1 rounded-full bg-[#fafafa]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                </button>
                <Link href={"/"} onClick={() => window.location.href = 'tel:1577-4550'} className="sample__tel block absolute top-3.5 right-1.5 size-8 p-1 rounded-full bg-[#fafafa]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333">
                    <path d="m720-560-58-56 64-64H520v-80h206l-62-62 56-58 160 162-160 158Zm78 440q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                    </svg>
                </Link>
                </div>
                <div className="sample__tit p-2.5 text-center bg-slate-100 text-black">
                    <span className="block text-xl">11</span>
                    <span className="sample__date popStartDate block text-lg"></span>
                    <span className="popExDate block text-lg"></span>
                </div>
            </div>
            <div className="sample__banner flex text-center bg-slate-400">
                <img className="size-full" src={bannerImg} alt="배너이미지" />
            </div>

            <div className="swiper mySwiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden sticky w-full h-10 border-b border-slate-300 bg-white z-40" style={{ top: 110 }}>
                <div className="scroll_btn swiper-wrapper" style={{ height: "80%" }} id="swiper-wrapper-d43ae10c1abe2cef9" aria-live="polite">
                <div className="btn_comm btn_0 swiper-slide swiper-slide-active" onClick={() => scrollBubble(0)} role="group" aria-label="1 / 2" style={{ marginRight: "5px" }}>행사코너1</div>
                <div className="btn_comm btn_1 swiper-slide swiper-slide-next" onClick={() => scrollBubble(1)} role="group" aria-label="2 / 2" style={{ marginRight: "5px" }}>행사코너2</div>
                </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>

            <div className="group-purchase animate-slide-in-left">
                <a href="http://naver.com">
                <img className="w-full" src={bannerImg2} alt="공동구매 배너" />
                </a>
            </div>

            {/* <!-- 행사코너 --> */}
            <div style={{ background: "#fff382" }}>
                {/* <!-- <span>행사코너1 배너</span> --> */}
                <div className="sample__banner sample__banner--type2 flex items-center justify-center min-h-20 bg-slate-300">
                    <img className="size-full" src={eventImg} alt="행사코너 배너" />
                </div>
                <div className="goods w-full">
                {/* <!--템플릿 유형 가로형 --> */}
                <ul id="" className="goods__list goods__list--type2 grid px-0.5 py-2.5 group grid-cols-1 gap-px overflow-hidden">
                    {list.map((item, index) => (
                    <li key={index} onClick={() => {setShowPopup2(true); setOrderSystem(true);}} data-effectjs="fade-up">
                        <div className="goods__card relative overflow-hidden w-full p-1 border border-[#d1d1d6] rounded-lg bg-white">
                        <div className="goods__imgbox relative flex flex-col justify-center items-center mx-auto bg-white group-[.grid-cols-2]:h-36 group-[.grid-cols-3]:h-23 group-[.grid-cols-4]:h-18" style={{ background: "white" }}>
                            <div className="goods__badge absolute flex top-0 left-0 size-17 
                                group-[.grid-cols-2]:size-12 group-[.grid-cols-3]:size-8 group-[.grid-cols-4]:size-6
                            ">
                            <img className="max-w-full max-h-full size-auto" src={badgeImg} alt="뱃지 이미지" />
                            </div>
                            <img className="lazyload max-w-full max-h-full size-auto" src={item.image} alt="상품 이미지" />

                            <div className="icon__cartbox active flex items-center justify-center absolute right-1/20 bottom-1/20 bg-white border border-black/15 rounded-full shadow-[0_0_3px_rgba(0,0,0,0.2)] 
                                group-[.grid-cols-1]:size-11 group-[.grid-cols-2]:size-11 group-[.grid-cols-3]:size-8 group-[.grid-cols-4]:size-7 [&.active]:border-blue-300 [&.active_svg]:fill-blue-500
                            ">
                            <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#94a3b8">
                                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                            </svg>
                            </div>
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
               
                {/* <!--템플릿 유형 세로형 --> */}
                <ul id="" className={`goods__list goods__list--style2 flex flex-col px-0.5 py-2.5 gap-px overflow-hidden`}>
                    {list.map((item, index) => (
                    <li key={index} onClick={() => setShowPopup2(true)} data-effectjs={index % 2 === 0 ? 'slide-left' : 'slide-right'} data-effectjs-duration="500">
                        <div className="goods__card overflow-hidden flex w-full p-1 gap-3 border border-[#d1d1d6] rounded-lg bg-white">
                        <div className="goods__imgbox relative flex flex-col justify-center items-center w-2/5 h-32 mx-auto bg-white">
                            <div className="goods__badge absolute flex top-0 left-0 size-11">
                                <img className="max-w-full max-h-full size-auto" src={badgeImg} alt="뱃지 이미지" />
                            </div>
                            <img className="lazyload max-w-full max-h-full size-auto" src={item.image} alt="상품 이미지" />
                            <div className="icon__cartbox flex items-center justify-center absolute right-1/20 bottom-1/20 size-9 bg-white border border-black/15 rounded-full shadow-[0_0_3px_rgba(0,0,0,0.2)]
                                [&.active]:border-blue-300 [&.active_svg]:fill-blue-500
                            ">
                                <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#94a3b8">
                                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                                </svg>
                            </div>
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

                {/* <!--템플릿 유형 텍스트형 --> */}
                <ul id="js_changeList" className="goods__list goods__list--style3 flex flex-col px-0.5 py-2.5 gap-px">
                    {list.map((item, index) => (
                    <li key={index} onClick={() => {setShowPopup2(true),setOrderSystem()}}>
                        <div className="goods__card relative overflow-hidden flex flex-col w-full p-1 gap-3 border border-[#d1d1d6] rounded-lg bg-white">
                        {/* 이미지 안보임 */}
                        <div className="goods__imgbox relative flex flex-col justify-center items-center w-2/5 h-32 mx-auto bg-white" style={{ display: 'none'}}>
                            <div className="goods__badge absolute flex top-0 left-0 size-11">
                                <img className="max-w-full max-h-full size-auto" src={badgeImg} alt="뱃지 이미지" />
                            </div>
                            <img data-src=""  className="lazyload max-w-full max-h-full size-auto" src={item.image} />
                        </div>
                        <div className="icon__cartbox flex items-center justify-center absolute left-1/20 bottom-1/20 size-9 bg-white border border-black/15 rounded-full shadow-[0_0_3px_rgba(0,0,0,0.2)]
                            [&.active]:border-blue-300 [&.active_svg]:fill-blue-500
                        ">
                            <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#94a3b8">
                            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                            </svg>
                        </div>
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

                {/* <!--템플릿 유형 장문편집형 --> */}
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
                        <h1><span style={{ color: "#f40e32" }}>&lt;&lt; 양곡/잡곡 &gt;&gt;</span></h1>
                        <h2><span style={{ color: "#0e22f4" }}>신동진옥토쌀20kg 47900</span></h2>
                        <h3><span style={{ color: "#0e22f4" }}>황토미인쌀20kg 44500</span></h3>
                        <h4><span style={{ color: "#0e22f4" }}>맛좋은영양쌀20kg 44500</span></h4>
                        <h5><span style={{ color: "#0e22f4" }}>옥구농협공기밥쌀20kg 43500</span></h5>
                        <h6><span style={{ color: "#0e22f4" }}>왕란30구*3판 20150</span></h6>
                        <p><br /></p><h4><span style={{ color: "#f40e32" }}>&lt;&lt; 계란 &gt;&gt;</span></h4>
                        <h4><span style={{ color: "#0e22f4" }}>대란30구*3판 18550</span></h4>
                        <h4><span style={{ color: "#0e22f4" }}>특란1판 6850</span></h4>
                        <h4><span style={{ color: "#0e22f4" }}>메추리알20구 1550</span></h4>
                        <h4><span style={{ color: "#0e22f4" }}>화인깐메추리알1kg 6980</span></h4>
                        <p><br /></p><h4><span style={{ color: "#f40e32" }}>&lt;&lt;김치 / 반찬&gt;&gt;</span></h4>
                        <h4><span style={{ color: "#0e22f4" }}>명품김치10kg 12900</span></h4>
                        <h4><span style={{ color: "#0e22f4" }}>처가애김치10kg 11900</span></h4>
                        </pre>
                    </div>
                    </li>
                </ul>

                {/* <!--이미지 직접추가형 --> */}
                <ul id="js_changeList5" className="goods__list flex flex-col p-0 gap-px">
                    <li className="mb-3.5">
                    <div className="goods__card flex flex-col">
                        <div className="goods__imgbox goods__imgbox--only flex felx-col w-full h-auto mx-auto bg-white">
                            <img className="lazyload w-full max-h-full ${fn:contains(f, 'thumb_') ? 'thumb cursor-pointer' : ''}" src={testImg} alt="이미지"  />
                        </div>
                    </div>
                    </li>
                </ul>
                </div>
            </div>

            <div className="wrap_stickyfooter overflow-x-hidden fixed right-0 bottom-23 z-50">
                <a className="scroll_top btn_movetop flex flex-col items-center justify-center w-15 h-15 ml-auto mr-2.5 rounded-full bg-black/70 hover:bg-[#333] ">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff"><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path></svg>
                <span className="text-xs text-white tracking-tight">맨위로</span>
                </a>
            </div>
            {/* 레이어 팝업 안내창 */}
            {showPopup && (
                <div className="layer__wrap flex justify-center items-center fixed inset-0 p-3 z-50">
                    <div className="layer__bg absolute inset-0 bg-black/40"></div>
                    <div className="layer__panel relative overflow-hidden flex flex-col w-full p-4 bg-slate-50 rounded-2xl z-50">
                        <p className="layer__tit mb-2 text-xl text-center font-bold leading-tight">공지사항</p>
                        <div className="layer__notice overflow-y-auto flex flex-col h-60 p-4 rounded-lg text-base bg-white">
                        오후2시 까지 배달 주문 시 당일 저녁에 배송 드립니다..<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />asdf<br /><br /><br /><br /><br /></div>
                        <button onClick={() => setShowPopup(false)} className="layer__close absolute top-3 right-3 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#64748b"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                        </button>
                    </div>
                </div>
            )}
            {/* 검색 레이어 팝업 */}
            {showSearchPopup && (
                <div className="layer__wrap flex justify-center items-start fixed inset-0 p-3 pt-10 z-50">
                    <div
                        className="layer__bg absolute inset-0 bg-black/40"
                        onClick={() => setShowSearchPopup(false)}
                    ></div>
                    <div className="layer__panel relative overflow-hidden flex flex-col w-full p-4 bg-white rounded-2xl z-50">
                        <p className="layer__tit mb-3 text-xl text-center font-bold leading-tight">상품 검색</p>
                        <div className="relative mb-3">
                            <input
                                className="w-full h-10 pl-4 pr-20 border border-slate-300 rounded-lg text-base"
                                placeholder="상품명을 입력하세요"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        e.currentTarget.blur();
                                    }
                                }}
                                autoFocus
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    aria-label="검색어 지우기"
                                    className="absolute right-11 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                                    onClick={() => setSearchQuery("")}
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
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                            </button>
                        </div>
                        <div className="overflow-y-auto border border-slate-200 rounded-lg bg-slate-50">
                            {searchQuery.trim() === "" ? (
                                <div className="h-50 p-2">
                                    <div className="text-slate-600">최근 검색어</div>
                                    <p className="mb-2 text-sm text-slate-400">검색어는 최대5개, 30일동안 저장합니다.</p>
                                    <div className="h-30">
                                        <ul className="flex flex-wrap gap-x-2 gap-y-2">
                                            {recentKeywords.map((keyword, index) => (
                                                <li key={`${keyword}-${index}`} className="flex items-center rounded-full bg-white border border-slate-200">
                                                    <button
                                                        type="button"
                                                        className="pl-3 pr-1 py-1.5 text-sm text-slate-600 hover:bg-slate-100 rounded-l-full"
                                                        onClick={() => setSearchQuery(keyword)}
                                                    >
                                                        {keyword}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        aria-label="최근 검색어 삭제"
                                                        className="pr-2 pl-1 py-1.5 text-slate-400 hover:text-slate-600"
                                                        onClick={() =>
                                                            setRecentKeywords((prev) =>
                                                                prev.filter((_, prevIndex) => prevIndex !== index)
                                                            )
                                                        }
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>


                                    </div>

                                </div>
                            ) : filteredList.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-50 p-4 text-center text-slate-500">검색 결과가 없습니다.</div>
                            ) : (
                                <ul className="h-[70svh] divide-y divide-slate-200">
                                    {filteredList.map((item, index) => (
                                        <li
                                            key={`${item.id}-${index}`}
                                            className="p-1 flex items-center gap-3 cursor-pointer hover:bg-white"
                                            onClick={() => {
                                                setShowSearchPopup(false);
                                                setShowPopup2(true);
                                                setOrderSystem(true);
                                            }}
                                        >
                                            <img className="size-20 rounded-md object-cover" src={item.image} alt="상품 이미지" />
                                            <div className="flex-1">
                                                <div className="font-bold line-clamp-1">{item.name}</div>
                                                <div className="text-rose-500 font-bold">{item.price.toLocaleString()}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <button
                            onClick={() => setShowSearchPopup(false)}
                            className="layer__close absolute top-3 right-3 flex justify-center items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#64748b"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
        {/* 상품 팝업 */}
        {showPopup2 && (
            <>
            {orderSystem ? (
                // 주문기능 on
                <div className="product-wrap flex justify-center items-center fixed inset-0 p-3 z-50">
                    <div className="product-bg absolute inset-0 bg-black/40"></div>
                    <div className="product-panel relative overflow-hidden flex flex-col w-full p-4 bg-white rounded-2xl z-50">
                        <p className="product-tit mb-2 text-xl text-center font-bold leading-tight">상품정보</p>
                        <div className="product-img overflow-hidden flex justify-center items-center h-55 -mx-4">
                            <img className="w-auto h-6/5" src={sampleImg} />
                        </div>
                        <div className="layer__goodsinfo flex flex-col">
                            <p className="layer__goodstxt mx-auto my-2 text-sm">※수량을 선택해서 장바구니에 담아주세요</p>
                            <div className="layer__quantity flex items-center relative w-33 h-10 mx-auto my-2 border border-slate-400 rounded-full bg-white">
                                <button className="layer__quantitybtn layer__quantitybtn--left flex justify-center items-center w-10 h-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M200-440v-80h560v80H200Z"></path></svg>
                                </button>
                                <input className="layer__quantitynum block w-13 mx-auto text-lg text-center" defaultValue={1} />
                                <button className="layer__quantitybtn quantity__btn--right flex justify-center items-center w-10 h-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>
                                </button>
                            </div>
                            <div className="layer__goodsdelprice previewEtc1 mt-2.5 mx-auto text-lg font-bold line-through" style={{ fontSize: "18px" }}>센터이미지</div>
                            <div className="layer__goodsprice mx-auto text-3xl text-[#fa5252] font-bold tracking-tight">999,999,999,999</div>
                            <div className="layer__goodsname mx-auto text-lg font-bold">크라운 쿠크다스 144g 1입</div>
                            <button className="layer__goodsbtn flex justify-center items-center w-50 h-11 mx-auto my-4 rounded-lg text-lg text-white font-bold bg-rose-500" onClick={() => setShowPopup2(false)}>장바구니 담기</button>
                        </div>
                        <button onClick={() => setShowPopup2(false)} className="layer__close absolute top-3 right-3 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#64748b"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                        </button>
                    </div>
                </div>
            ) : (
                // 주문기능 off
                <div className="layer__wrap flex justify-center items-center fixed inset-0 p-3 z-50">
                    <div className="layer__bg absolute inset-0 bg-black/40"></div>
                    <div className="layer__panel layer__panel--white overflow-hidden fixed flex top-[10%] left-0 flex-col w-full h-auto p-4 rounded-2xl z-50">
                        <ul className="block py-2.5 px-0.5">
                            <li className="p-6">
                                <div className="goods__card overflow-hidden relative flex flex-col px-[2%] py-[6%] rounded-lg bg-white">
                                    <div className="goods__imgbox overflow-hidden flex justify-center items-center h-55 mx-auto">
                                        <img className="max-w-[75%] w-auto h-auto" src={sampleImg} />
                                    </div>
                                    <div className="layer__goodsinfo flex flex-col mt-[8%]">
                                        <div className="layer__goodsdelprice previewEtc1 mt-2.5 mx-auto text-lg font-bold line-through" style={{ fontSize: "18px" }}>센터이미지</div>
                                        <div className="layer__goodsprice mx-auto text-4xl text-rose-500 font-bold tracking-tight">999,999,999,999</div>
                                        <div className="layer__goodsname mx-auto text-lg font-bold">크라운 쿠크다스 144g 1입</div>
                                    </div>
                                    <button onClick={() => setShowPopup2(false)} className="layer__close absolute top-3 right-3 flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#64748b"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            </>
        )}

        <div className="notice-div">
            <div className="background"></div>
            <div>
            <p>공지사항</p>
            <div>
                오후2시 까지 배달 주문 시 당일 저녁에 배송 드립니다..
            </div>
            <button className="notice-close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </button>
            </div>
        </div>

    </>
  );
}
