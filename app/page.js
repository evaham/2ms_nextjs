"use client";
import {useState} from "react";
import Link from "next/link";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
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
          <span className="js_fontsize" style={{ fontSize: "1.9em" }} onClick={()=> setShowPopup(true)}>투게더마트</span>
          <Link href={"/"} onClick={() => window.location.href = 'tel:1577-4550'} className="sample__tel">
            <img src="/static/img/ico_call.png" />
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
                      <svg xmlns="http://www.w3.org/2000/svg" height="70%" viewBox="0 -960 960 960" width="70%" fill="#666">
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
                      <svg xmlns="http://www.w3.org/2000/svg" height="70%" viewBox="0 -960 960 960" width="70%" fill="#666">
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
                      <svg xmlns="http://www.w3.org/2000/svg" height="70%" viewBox="0 -960 960 960" width="70%" fill="#666">
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
                    <div className="icon__cartbox">
                      <svg xmlns="http://www.w3.org/2000/svg" height="70%" viewBox="0 -960 960 960" width="70%" fill="#666">
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
            <div className="layer__header">
              <p className="layer__tit">공지사항</p>
            </div>
            <div className="layer__body">
              <div className="layer__notice">오후2시 까지 배달 주문 시 당일 저녁에 배송 드립니다..</div>
            </div>
            <div className="layer__footer"></div>
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
          <div className="layer__panel">
            <div className="layer__body">
              <img src={sampleImg} className="layer__goodsimg" />
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
                <div className="layer__goodsprice">999,999,999,999</div>
                <div className="layer__goodsname">크라운 쿠크다스 144g 1입</div>
                <button className="layer__goodsbtn">장바구니 담기</button>
              </div>
            </div>

            <button onClick={() => setShowPopup2(false)} className="layer__close">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </button>
          </div>
        </div>
      )}
      {showPopup3 && (
        <div className="layer layer__wrap" style={{ display: "block" }}>
          <div className="layer__bg"></div>
          <div className="goods layer__box" onClick={() => document.querySelector('.layer').style.display = 'none'}>
            <ul id="js_changeList" className="goods__list">
              <li style={{ padding: "25px" }}>
                <div className="goods__card" style={{ padding: "6% 2%" }}>
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img className="layer__image" style={{ maxWidth: "75%" }} src="http://file.2ms.kr/WebLink/33121/e3988119-1480-4179-affd-b6c47ef420c0.jpg" />
                  </div>
                  <div className="goods__info" style={{ marginTop: "8%" }}>
                    <div className="goods__delPrice previewEtc1" style={{ fontSize: "18px" }}>센터이미지</div>
                    <div className="goods__price" style={{ fontSize: "45px", marginTop: "10px" }}>1</div>
                    <div className="layer__goods__name" style={{ width: "auto", height: "auto", marginBottom: "5%" }}>버터링 골드</div>
                  </div>
                  <button onClick={() => setShowPopup(false)} className="layer__close">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}





    </>
  );
}
