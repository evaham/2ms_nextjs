"use client";
import {useState} from "react";
import Link from "next/link";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const sampleImg = "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg";

  const list = [
    { id: 1, name: "자연그린 김밥단무지1", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
    { id: 2, name: "자연그린 김밥단무지2", cart: false, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
    { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
    { id: 4, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
    { id: 5, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
  ];

  return (
    <>
      <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
        <div className="sample__name clearfix" style={{ color: "", background: "" }}>
          <span className="js_fontsize" style={{ fontSize: "2rem" }} onClick={() => setShowPopup(true)}>투게더마트
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="M460-300h40v-220h-40v220Zm20-276.92q10.46 0 17.54-7.08 7.08-7.08 7.08-17.54 0-10.46-7.08-17.54-7.08-7.07-17.54-7.07-10.46 0-17.54 7.07-7.08 7.08-7.08 17.54 0 10.46 7.08 17.54 7.08 7.08 17.54 7.08Zm.13 456.92q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>
          </span>
          <Link href={"/"} onClick={() => window.location.href = 'tel:1577-4550'} className="sample__tel">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333">
              <path d="m720-560-58-56 64-64H520v-80h206l-62-62 56-58 160 162-160 158Zm78 440q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
          </Link>
        </div>
        <div className="sample__tit">
          <span>11</span>
          <span className="sample__date popStartDate"></span>
          <span className="popExDate"></span>
        </div>
      </div>
      <div className="swiper mySwiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden" style={{ position: "sticky", zIndex: 999, top: 110 }}>
        <div className="scroll_btn swiper-wrapper" style={{ height: "80%" }} id="swiper-wrapper-d43ae10c1abe2cef9" aria-live="polite">
          <div className="btn_comm btn_0 swiper-slide swiper-slide-active" onClick={() => scrollBubble(0)} role="group" aria-label="1 / 2" style={{ marginRight: "5px" }}>행사코너1</div>
          <div className="btn_comm btn_1 swiper-slide swiper-slide-next" onClick={() => scrollBubble(1)} role="group" aria-label="2 / 2" style={{ marginRight: "5px" }}>행사코너2</div>
        </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>

      {/* <!-- 행사코너 --> */}
      <div style={{ background: "" }}>
        {/* <!-- <span>행사코너1 배너</span> --> */}
        <div className="goods">
          {/* <!--템플릿 유형 가로형 --> */}
          <ul id="js_changeList" className={`goods__list goods__list--type4`}>
            {list.map((item, index) => (
              <li key={index} onClick={() => setShowPopup2(true)}>
                <div className="goods__card">
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="" className="" src={item.image} />
                    <div className="icon__cartbox">
                      <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#666">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">공유이미지</div>
                    <div className="goods__price">{item.price.toLocaleString()}</div>
                    <div className="goods__name">{item.name}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* <!--템플릿 유형 가로형 --> */}
          <ul id="js_changeList" className={`goods__list goods__list--type3`}>
            {list.map((item, index) => (
              <li key={index} onClick={() => setShowPopup2(true)}>
                <div className="goods__card">
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="" className="" src={item.image} />
                    <div className="icon__cartbox">
                      <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">공유이미지</div>
                    <div className="goods__price">{item.price.toLocaleString()}</div>
                    <div className="goods__name">{item.name}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* <!--템플릿 유형 가로형 --> */}
          <ul id="js_changeList" className={`goods__list goods__list--type2`}>
            {list.map((item, index) => (
              <li key={index} onClick={() => setShowPopup2(true)}>
                <div className="goods__card">
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="" className="" src={item.image} />
                    <div className="icon__cartbox">
                      <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">공유이미지</div>
                    <div className="goods__price">{item.price.toLocaleString()}</div>
                    <div className="goods__name">{item.name}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* <!--템플릿 유형 가로형 --> */}
          <ul id="js_changeList" className={`goods__list goods__list--type`}>
            {list.map((item, index) => (
              <li key={index} onClick={() => setShowPopup2(true)}>
                <div className="goods__card">
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="" className="" src={item.image} />
                    <div className="icon__cartbox active">
                      <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">공유이미지</div>
                    <div className="goods__price">{item.price.toLocaleString()}</div>
                    <div className="goods__name">{item.name}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* <!--템플릿 유형 세로형 --> */}
          <ul id="js_changeList" className={`goods__list goods__list--style2`}>
            {list.map((item, index) => (
              <li key={index} onClick={() => setShowPopup2(true)}>
                <div className="goods__card">
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="" className="" src={item.image} />
                    <div className="icon__cartbox">
                      <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">공유이미지</div>
                    <div className="goods__price">{item.price.toLocaleString()}</div>
                    <div className="goods__name">{item.name}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* <!--템플릿 유형 텍스트형 --> */}
          <ul id="js_changeList" className={`goods__list goods__list--style3`}>
            {list.map((item, index) => (
              <li key={index} onClick={() => setShowPopup3(true)}>
                <div className="goods__card">
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="" className="" src={item.image} />
                    <div className="icon__cartbox active">
                      <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="goods__info">
                    <div className="goods__name">{item.name}</div>
                    <div className="goods__delprice previewEtc1">공유이미지</div>
                    <div className="goods__price">{item.price.toLocaleString()}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>


        </div>
      </div>

      <div className="wrap_stickyfooter">
        <a className="scroll_top btn_movetop">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff"><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path></svg>
          <span>맨위로</span>
        </a>
      </div>
      {/* 레이어 팝업 안내창 */}
      {showPopup && (
        <div className="layer__wrap">
          <div className="layer__bg"></div>
          <div className="layer__panel">
            <p className="layer__tit">공지사항</p>
            <div className="layer__notice">오후2시 까지 배달 주문 시 당일 저녁에 배송 드립니다..<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />asdf<br /><br /><br /><br /><br /></div>
            <button onClick={() => setShowPopup(false)} className="layer__close">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </button>
          </div>
        </div>
      )}
      {/* 주문 작성 팝업 */}
      {showPopup2 &&(
        <div className="layer__wrap">
          <div className="layer__bg"></div>
          <div className="layer__panel layer__panel--white">
            <p className="layer__tit">상품정보</p>
            <div className="layer__goodsimgbox">
              <img src={sampleImg} />
            </div>
            <div className="layer__goodsinfo">
              <p className="layer__goodstxt">※수량을 선택해서 장바구니에 담아주세요</p>
              <div className="layer__quantity">
                <button className="layer__quantitybtn layer__quantitybtn--left">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M200-440v-80h560v80H200Z"></path></svg>
                </button>
                <span className="layer__quantitynum">1</span>
                <button className="layer__quantitybtn quantity__btn--right">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>
                </button>
              </div>
              <div className="layer__goodsdelprice previewEtc1" style={{ fontSize: "18px" }}>센터이미지</div>
              <div className="layer__goodsprice">999,999,999,999</div>
              <div className="layer__goodsname">크라운 쿠크다스 144g 1입</div>
              <button className="layer__goodsbtn" onClick={() => setShowPopup2(false)}>장바구니 담기</button>
            </div>
            <button onClick={() => setShowPopup2(false)} className="layer__close">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </button>
          </div>
        </div>
      )}
      {showPopup3 && (
        <div className="layer__wrap">
          <div className="layer__bg"></div>
          <div className="layer__panel layer__panel--white">
            <p className="layer__tit">상품정보</p>

            <div className="layer__goodsinfo">
              <p className="layer__goodstxt">※수량을 선택해서 장바구니에 담아주세요</p>
              <div className="layer__quantity">
                <button className="layer__quantitybtn layer__quantitybtn--left">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M200-440v-80h560v80H200Z"></path></svg>
                </button>
                <span className="layer__quantitynum">1</span>
                <button className="layer__quantitybtn quantity__btn--right">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>
                </button>
              </div>
              <div className="layer__goodsdelprice previewEtc1" style={{ fontSize: "18px" }}>센터이미지</div>
              <div className="layer__goodsprice">999,999,999,999</div>
              <div className="layer__goodsname">크라운 쿠크다스 144g 1입</div>
              <button className="layer__goodsbtn" onClick={() => setShowPopup3(false)}>장바구니 담기</button>
            </div>
            <button onClick={() => setShowPopup3(false)} className="layer__close">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
