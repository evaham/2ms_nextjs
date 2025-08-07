"use client";
import Image from "next/image";
import FooterMenu from "./component/footerMenu";
import GoodsList from "./component/goodsList";
import HeaderMenu from "./component/headerMenu";

export default function Home() {
  return (
    <>
      <style>
        {`
        html, body {touch-action: manipulation;} 
        .goods__pre h1{font - size:35px; line-height:40px;}
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
      <HeaderMenu />
      <div style={{ position: "sticky", zIndex: 999, top: 67 }}>
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
      <GoodsList listType={"type4"} />

      {/* <!-- 행사코너2 --> */}

      <GoodsList listType={"type3"} />
      <GoodsList listType={"type2"} />
      <GoodsList listType={"type1"} />
    </>
  );
}
