"use client";
import Image from "next/image";
import FooterMenu from "./component/footerMenu";

export default function Home() {
  return (
    <>
      <style>
        {`.goods__pre h1{font - size:35px; line-height:40px;}
        .goods__pre h2{font - size:30px; line-height:40px;}
        .goods__pre h3{font - size:25px; line-height:40px;}
        .goods__pre h4{font - size:20px; line-height:30px;}
        .goods__pre h5{font - size:18px; line-height:30px;}
        .goods__pre h6{font - size:16px; line-height:30px;}
        pre{font - family:"Helvetica Neue", Helvetica, Arial, sans-serif;}
        .sample__name{padding: 16px 8px; font-weight: bold; color:#fff; text-align: center; font-size:1.1em;}

        .swiper {background: #fff; border-bottom: 1px solid #c1c1c1; width:100%; height:40px;}
        .swiper-slide {width: auto; /* 슬라이드 너비 설정 */}

        .scroll_btn .btn_comm {padding: 6px 15px; border: 1px solid #636363; background: #fff; border-radius: 20px; margin-bottom: 4px; margin-top:4px; color: #636363; font-weight:bold;}

        .scroll_btn .btn_comm:active {margin - bottom: 4px; margin-top:4px; border: 1px solid #21409a; border-radius: 20px; background: #21409a; font-weight: bold; color: #fff; box-shadow: 0 1px 3px 0 rgba(0,0,0,.06); }
        .scroll_btn .btn_comm:hover{margin - bottom: 4px; margin-top:4px; border: 1px solid #21409a; border-radius: 20px; background: #21409a; font-weight: bold; color: #fff; box-shadow: 0 1px 3px 0 rgba(0,0,0,.06); }

        .cnList .btn_comm {margin - right: 8px; margin-bottom: 4px; border: 1px solid #636363; background: #fff; border-radius: 20px; color: #636363; font-weight:bold;}
        .cnList .btn_comm:hover {border: 1px solid #21409a; border-radius: 20px; background: #21409a; font-weight: bold; color: #fff; box-shadow: 0 1px 3px 0 rgba(0,0,0,.06); }
        .radio_comm input[type=radio] {margin - left: 4px; margin-right: 4px;}
        .thumb {cursor: pointer; }
        .layer__wrap {display: none; }

        .layer__bg {
          position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url(/static/img/bg_block_50.png);
        z-index: 1000;
	}

        .layer__box {
          position: absolute;
        top: 10%;
        left: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        z-index: 1001;
	}
        @media (min-width:512px), (max-width:717px) screen and (orientation:portrait){
		.layer.goods__list {padding:0px 190px}
        .layer__image{max - height: 283px !important;}
	}

        .layer__goods__name{
          position: relative;
        overflow: hidden;
        width: 250px;
        margin: 5px auto 0;
        font-size: 19px;
        font-weight: 600;
        line-height: 1.2;
        word-break: break-all;
	}
        .layer__image{max - height:300px !important;}

        /* 하단 sticky 버튼그룹 */
        .wrap_stickyfooter {display: block; position: sticky; bottom: 0; z-index:11; overflow-x: hidden;}
        .btn_movetop {display: flex; flex-direction: column; align-items: center; justify-content: center; width: 60px; height:60px; margin:0 10px 10px auto;  font-size: 11px; font-weight: normal; line-height: 1; letter-spacing: -1px; border-radius: 30px; background: rgba(0, 0, 0, .7); color: #fff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .3)}
        .btn_movetop:hover {background: #333; text-decoration: none;}
        .btn_movecoupon {
          display: flex;
        width: 150px;
        height: auto;
        margin: 10px 0 10px auto;
        opacity: 0;
        transform: translateX(100%);
        transition: opacity 1s ease, transform 1s ease;
	}
        .btn_movecoupon:hover {text - decoration: none;}
	.btn_movecoupon > span {font - size: 16px; font-weight: 600; line-height: 1.2; letter-spacing: -1px;}
	.btn_movecoupon > span > span {font - size: 12px; font-weight: normal; color: #ffebeb;}
        .btn_couponuse {display: flex; align-items: center; justify-content: center; border-radius: 5px; margin: 4px; padding: 8px; border: 1px solid rgb(253 164 175); background-color: rgb(255, 228, 230);}
        .btn_couponuse:hover {text - decoration: none;}
	.btn_couponuse > span {margin - left: 5px; font-size: 16px; font-weight: 600; letter-spacing: -1px;}
        /* 애니메이션 적용을 위한 클래스 */
        @keyframes slideIn {
          from {
          transform: translateX(100%);
        opacity: 0;
	    }
        to {
          transform: translateX(0);
        opacity: 1;
	    }
	}
        .btn_movecoupon.slide-in {
          opacity: 1;
        transform: translateX(0);
	}
      `}</style>
      <div className="sample" data-code="33121">
        <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
          <div className="sample__name clearfix" style={{ color: "", background: "" }}>
            <span className="js_fontsize" style={{ fontSize: "1.9em" }}>투게더마트</span>
            <a onClick={() => window.location.href='tel:1577-4550'} className="sample__tel">
              <img src="/static/img/ico_call.png" />
            </a>
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
            <ul id="js_changeList" className="goods__list goods__list--type4">

              <li>
                <div className="goods__card" onClick={() => jsLargerView("a6ac2a5a-b919-40f5-979c-e7376e0c0eff.jpg", "자연그린 김밥단무지", "공유이미지", "", "2558", "")}>
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="http://file.2ms.kr/WebLink/33121/a6ac2a5a-b919-40f5-979c-e7376e0c0eff.jpg" onError={(e) => { e.target.onerror=null; e.target.src='/static/img/no_image_color.png'; }} className="" src="/static/img/no_image_color.png" />
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">공유이미지</div>
                    <div className="goods__price">2,558</div>
                    <div className="goods__name">자연그린 김밥단무지</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="goods__card" onClick={() => jsLargerView("264fee74-a287-425f-966c-c7501c14f4b9.jpg", "트리퐁", "공유이미지", "", "102680", "")}>
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="http://file.2ms.kr/WebLink/33121/264fee74-a287-425f-966c-c7501c14f4b9.jpg" onError={(e) => { e.target.onerror=null; e.target.src='/static/img/no_image_color.png'; }} className="" src="/static/img/no_image_color.png" />
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">공유이미지</div>
                    <div className="goods__price">102,680</div>
                    <div className="goods__name">트리퐁</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="goods__card" onClick={() => jsLargerView("5a24d00c-b4d2-4c45-a770-c14e98f21e8f.jpg", "새콤쌈무", "공유이미지", "", "2558", "")}>
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="http://file.2ms.kr/WebLink/33121/5a24d00c-b4d2-4c45-a770-c14e98f21e8f.jpg" onError={(e) => { e.target.onerror=null; e.target.src='/static/img/no_image_color.png'; }} className="" src="/static/img/no_image_color.png" />
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">공유이미지</div>
                    <div className="goods__price">2,558</div>
                    <div className="goods__name">새콤쌈무</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="goods__card" onClick={() => jsLargerView("26455637-bf96-43ab-9eae-56d0336062d7.jpg", "덴마크 그릭", "공유이미지", "", "104160", "")}>
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="http://file.2ms.kr/WebLink/33121/26455637-bf96-43ab-9eae-56d0336062d7.jpg" onError={(e) => { e.target.onerror=null; e.target.src='/static/img/no_image_color.png'; }} className="" src="/static/img/no_image_color.png" />
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">공유이미지</div>
                    <div className="goods__price">104,160</div>
                    <div className="goods__name">덴마크 그릭</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="goods__card" onClick={() => jsLargerView("6ac65e94-20d7-40ff-a1c6-af56419a2a86.jpg", "도브 바디워시", "센터이미지", "", "11", "")}>
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="http://file.2ms.kr/WebLink/33121/6ac65e94-20d7-40ff-a1c6-af56419a2a86.jpg" onError={(e) => { e.target.onerror=null; e.target.src='/static/img/no_image_color.png'; }} className="" src="/static/img/no_image_color.png" />
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">센터이미지</div>
                    <div className="goods__price">11</div>
                    <div className="goods__name">도브 바디워시</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="goods__card" onClick={() => jsLargerView("e3988119-1480-4179-affd-b6c47ef420c0.jpg", "버터링 골드", "센터이미지", "", "1", "")}>
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="http://file.2ms.kr/WebLink/33121/e3988119-1480-4179-affd-b6c47ef420c0.jpg" onError={(e) => { e.target.onerror=null; e.target.src='/static/img/no_image_color.png'; }} className="" src="/static/img/no_image_color.png" />
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">센터이미지</div>
                    <div className="goods__price">1</div>
                    <div className="goods__name">버터링 골드</div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

        <div style={{ background: "" }}>
          {/* <!-- <span>행사코너1 배너</span> --> */}
          <div className="goods">
            {/* <!--템플릿 유형 가로형 --> */}
            <ul id="js_changeList" className="goods__list goods__list--type2">

              <li>
                <div className="goods__card" onClick={() => jsLargerView("81e54e41-64b3-4a63-828d-492019ab7ba0.jpg", "사과주스", "센터", "", "1", "")}>
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="http://file.2ms.kr/WebLink/33121/81e54e41-64b3-4a63-828d-492019ab7ba0.jpg" onError={(e) => { e.target.onerror=null; e.target.src='/static/img/no_image_color.png'; }} className="" src="/static/img/no_image_color.png" />
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">센터</div>
                    <div className="goods__price">1</div>
                    <div className="goods__name">사과주스</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="goods__card" onClick={() => jsLargerView("", "오렌지주스", "슈켓", "", "1", "https://s3.ap-northeast-2.amazonaws.com/products.key/main/돈시몬_착즙오렌지주스-1L_8410261608112_1.png")}>
                  <div className="goods__imgbox" style={{ background: "white" }}>
                    <img data-src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/돈시몬_착즙오렌지주스-1L_8410261608112_1.png" onError={(e) => { e.target.onerror=null; e.target.src='/static/img/no_image_color.png'; }} className="" src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/돈시몬_착즙오렌지주스-1L_8410261608112_1.png" />
                  </div>
                  <div className="goods__info">
                    <div className="goods__delprice previewEtc1">슈켓</div>
                    <div className="goods__price">1</div>
                    <div className="goods__name">오렌지주스</div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

        <div className="wrap_stickyfooter">
          <a className="scroll_top btn_movetop">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff"><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path></svg>
            <span>맨위로</span>
          </a>
          <FooterMenu />
        </div>
      </div>


      <div className="layer layer__wrap" style={{ display: "none" }}>
        <div className="layer__bg"></div>
        <div className="goods layer__box" style={{ position: "fixed" }} onClick={() => document.querySelector('.layer').style.display = 'none'}>
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
                <div align="right" style={{ margin: "30 10 0 0" }}>
                  <p>한번 더 터치 시 닫습니다.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
