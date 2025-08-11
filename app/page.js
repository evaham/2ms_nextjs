"use client";
import Image from "next/image";
import GoodsList from "./component/goodsList";

export default function Home() {
  return (
    <>
      <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
        <div className="sample__name clearfix" style={{ color: "", background: "" }}>
          <span className="js_fontsize" style={{ fontSize: "1.9em" }}>투게더마트</span>
          <a onClick={() => window.location.href = 'tel:1577-4550'} className="sample__tel">
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
      <GoodsList listType={"type4"} />
      <GoodsList listType={"type3"} />
      <GoodsList listType={"type2"} />
      <GoodsList listType={"type1"} />

      <div class="wrap_stickyfooter">
        <a class="scroll_top btn_movetop">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff"><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path></svg>
          <span>맨위로</span>
        </a>
      </div>

    </>
  );
}
