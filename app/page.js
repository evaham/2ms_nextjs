"use client";
import {useState} from "react";
import GoodsList from "./component/goodsList";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
        <div className="sample__name clearfix" style={{ color: "", background: "" }}>
          <span className="js_fontsize" style={{ fontSize: "1.9em" }} onClick={()=> setShowPopup(true)}>투게더마트</span>
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

      <div className="wrap_stickyfooter">
        <a className="scroll_top btn_movetop">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff"><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path></svg>
          <span>맨위로</span>
        </a>
      </div>
      {/* 레이어 팝업 안내창 */}
      {showPopup && (
        <div className="layer__popup">
          <div className="layer__bg"></div>
          <div className="layer__panel">
            <p className="layer__tit">공지사항</p>
            <div className="layer__body">오후2시 까지 배달 주문 시 당일 저녁에 배송 드립니다..</div>
            <button onClick={() => setShowPopup(false)} className="layer__close">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
         .layer__popup {display:flex; position:fixed; inset:0; padding:12px; align-items: center; justify-conent:center; z-index:999;}
         .layer__bg {position:absolute; inset:0; background:rgba(0,0,0,.5);}
         .layer__panel {position:relative; display:flex; flex-direction:column; width:100%; height:288px; padding:12px; border-radius:16px; background:#f8fafc; overflow:hidden; z-index:1000}
         .layer__tit { margin-block:8px; text-align:center; font-size:18px; font-weight:bold}
         .layer__body { display:flex; flex-direction:column; gap:16px; height:240px; padding:16px; overflow-y:scroll; border:1px solid f1f5f9; border-radius:8px; font-size:16px; background: #fff;}
         .layer__close {position:absolute; top:12px; right:12px; fill:#62748e}
              
      `}
      </style>


    </>
  );
}
