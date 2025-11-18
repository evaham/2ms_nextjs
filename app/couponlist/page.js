
"use client";
import Link from "next/link";
import { useState } from 'react';

export default function CouponList() {
  const [showPopup4, setShowPopup4] = useState(true);
  const [showPopup5, setShowPopup5] = useState(false);
  const [showPopup6, setShowPopup6] = useState(false);

  const list = [
    { id: 1, },
    { id: 2, },
  ];


  return (
    <div className="sample min-h-screen bg-[#f7f7f7] pb-20">
      <div className="sticky top-0 z-50">
        <div className="sample__name clearfix relative flex justify-center items-center h-16 bg-[#21409a] text-xl text-white font-bold" style={{ color: "", background: "" }}>
          <Link href={"/"} className="sample__back flex justify-center items-center absolute top-0 left-0 w-13 h-full text-white no-underline" >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
          </Link>
          <span className="js_fontsize" style={{ fontSize: "20px" }}>쿠폰함</span>
        </div>
      </div>

      {/* 사용가능쿠폰 - 데이터없음 */}
      <div class="empty-div">
          <div class="flex flex-col items-center my-20 text-xl text-center font-bold text-[#868e96]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-25 h-25 mb-5" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cbd5e1"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Zm0-80v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"></path></svg>
              사용 가능한 쿠폰이 없어요.
          </div>
      </div>



      {/* 받은쿠폰 */}
      <div className="downloaded-coupon">
        <div className="flex mt-2 mb-1 px-2.5">
          <span className="panel__tit text-red-500 font-bold">받은 쿠폰</span>
          <span className="downloaded-count ml-auto text-sm text-slate-500">받은 쿠폰: <span className="text-red-500 font-bold">01</span> 개</span>
        </div>
        <div className="downloaded-none m-0.5 p-7.5 border border-[#d1d1d6] rounded-lg text-center bg-white">
          <p>받은 쿠폰이 없습니다.</p>
        </div>
        <div className="downloaded-none m-0.5 p-7.5 border border-[#d1d1d6] rounded-lg text-center bg-white">
          <p>받은 쿠폰이 없습니다.</p>
          <button className="user-registration text-blue-500 text-sm underline">사용자 등록하기</button>
        </div>


        <ul className="downloaded-list coupons__list px-0.5 pb-2.5 group flex flex-col gap-2">
          {list.map((item, index) => (
            <li key={index} className="ec" data-code="166">
              <input type="hidden" className="coupons__code" value="2705" />
              <div className="coupons__card overflow-hidden flex flex-col w-full border rounded-lg border-[#d1d1d6] bg-white"
                style={{ display: 'flex', borderWidth: '2px', borderColor: 'rgb(244,63,94)' }}
              >
                <div className="coupons__header flex p-2 items-center bg-[rgb(0,0,0,.03)]">
                  <button className="zzimbtn js_zzimbtn flex items-center justify-center px-2.5 py-1 text-sm text-[rgb(244,63,94)] border border-[rgb(244,63,94)] rounded-full
                      active [&.active]:bg-[rgb(244,63,94)] [&.active]:text-white [&.active_svg]:fill-white [&.active_.empty-heart]:hidden [&.active_.filled-heart]:inline-block
                    ">
                    <svg className="empty-heart" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(244,63,94)">
                      <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path>
                    </svg>
                    <svg className="filled-heart hidden" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(244,63,94)">
                      <path d="M382-320 155-547l57-57 170 170 366-366 57 57-423 423ZM200-160v-80h560v80H200Z"></path>
                    </svg>
                    <span>받기완료</span>
                  </button>
                  <div className="flex items-center ml-auto px-0 py-1 rounded-full text-xs">
                    <span className="text-[rgb(100, 116, 139)] leading-tight tracking-tight">상세보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(100 116 139)">
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex p-1.5 gap-1.5">
                  <div className="coupons__imgbox relative overflow-hidden flex justify-center items-center w-[36%] h-32 bg-[#f8f9fa]">
                    <img className="lazyload max-w-full w-auto max-h-full h-auto" data-src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/농심_신라면-4입_8801043012225_1.png" data-code="166" src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/농심_신라면-4입_8801043012225_1.png" />
                    <input type="hidden" className="igfCode" value="0" />
                  </div>
                  <div className="coupons__info relative flex-1 flex flex-col">
                    <div className="coupons__price text-[#fa5252]">
                      <span className="discount__price text-[2.6rem] tracking-tight font-extrabold">200</span>원 할인
                    </div>
                    <span className="coupons__name line-clamp-2 leading-tight font-bold break-all">신라면블랙</span>
                    <span className="coupons__barcode text-sm" style={{ display: "none" }} >8801043012225</span>
                    <span className="coupons__barcode__88 text-sm">8801043 012225</span>
                    <span className="coupons__date mt-auto text-sm">
                      <input className="coupons__expire" type="hidden" value="2025-12-31T00:00" />
                      2025.10.23
                      ~
                      12.31
                      <span>(49일 남음)</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
          {list.map((item, index) => (
            <li className="oc" key={index} data-code="275">
              <input type="hidden" className="coupons__code" value="275" />
              <div className="coupons__card overflow-hidden flex flex-col w-full border rounded-lg border-[#d1d1d6] bg-white"
                style={{ display: 'flex', borderWidth: '2px', borderColor: 'rgb(244,63,94)' }}
              >
                <div className="coupons__header flex p-2 items-center bg-[rgb(0,0,0,.03)]">
                  <button className="zzimbtn js_zzimbtn flex items-center justify-center px-2.5 py-1 text-sm text-[rgb(244,63,94)] border border-[rgb(244,63,94)] rounded-full
                        active [&.active]:bg-[rgb(244,63,94)] [&.active]:text-white [&.active_svg]:fill-white [&.active_.empty-heart]:hidden [&.active_.filled-heart]:inline-block
                        ">
                    <svg className="empty-heart" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(244,63,94)">
                      <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path>
                    </svg>
                    <svg className="filled-heart hidden" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(244,63,94)">
                      <path d="M382-320 155-547l57-57 170 170 366-366 57 57-423 423ZM200-160v-80h560v80H200Z"></path>
                    </svg>
                    <span>받기완료</span>
                  </button>
                  <div className="flex items-center ml-auto px-0 py-1 rounded-full text-xs">
                    <span className="text-[rgb(100, 116, 139)]">상세보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(100 116 139)">
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-center p-1.5">
                  <div className="coupons__imgbox overflow-hidden flex justify-center items-center w-[90%] min-h-48 h-auto bg-[#f8f9fa] mb-2.5">
                    <picture>
                      {/* <source type="image/webp" srcset="http://tdc-api-dev-4.togethers.kr:8083/onecoupon/8809824051289.webp" /> */}
                      {/* <source type="image/jpeg" srcset="http://tdc-api-dev-4.togethers.kr:8083/onecoupon/8809824051289.jpg" /> */}
                      <img data-src="http://tdc-api-dev-4.togethers.kr:8083/onecoupon/8809824051289.jpg" alt="바코드쿠폰이미지" className="max-w-full w-auto max-h-full h-auto" width="100%" src="http://tdc-api-dev-4.togethers.kr:8083/onecoupon/8809824051289.jpg" />
                    </picture>
                  </div>
                  <div className="coupons__info relative flex flex-col items-center">
                    <span className="coupons__name line-clamp-2 text-center font-bold leading-tight" title="하나야구 준마이 900ml">
                      하나야구 준마이 900ml 준마이 900ml 준마이 900ml 준마이 900ml 준마이 900ml 준마이 900ml 준마이 900ml 준마이 900ml 준마이 900ml
                    </span>
                    <span className="coupons__date">
                      2025.11.01
                      ~
                      11.30
                      <span>(14일 남음)</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>


          ))}
        </ul>
      </div>

      {/* 사용가능쿠폰 */}
      <div className="coupon-list">
        <div className="flex mt-2 mb-1 px-2.5">
          <span className="panel__tit font-bold">사용가능 쿠폰</span>
        </div>
        <ul id="js_changeList" className="coupons__list px-0.5 pb-2.5 group flex flex-col gap-2">
          {list.map((item, index) => (
            <li className="ec" key={index} data-code="166">
              <input type="hidden" className="coupons__code" value="2705" />
              <div className="coupons__card overflow-hidden flex flex-col w-full border-1 rounded-lg border-[#d1d1d6] bg-white">
                <div className="coupons__header flex p-2 items-center bg-[rgb(0,0,0,.03)]">
                  <button className="zzimbtn js_zzimbtn flex items-center justify-center px-2.5 py-1 text-sm text-[rgb(244,63,94)] border border-[rgb(244,63,94)] rounded-full
                      [&.active]:bg-[rgb(244,63,94)] [&.active]:text-white [&.active_svg]:fill-white [&.active_.empty-heart]:hidden [&.active_.filled-heart]:inline-block
                    ">
                    <svg className="empty-heart" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(244,63,94)">
                      <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path>
                    </svg>
                    <svg className="filled-heart hidden" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(244,63,94)">
                      <path d="M382-320 155-547l57-57 170 170 366-366 57 57-423 423ZM200-160v-80h560v80H200Z"></path>
                    </svg>
                    <span>쿠폰받기</span>
                  </button>
                  <div className="flex items-center ml-auto px-0 py-1 rounded-full text-xs">
                    <span className="text-[rgb(100, 116, 139)]">상세보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(100 116 139)">
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex p-1.5 gap-1.5">
                  <div className="coupons__imgbox relative overflow-hidden flex justify-center items-center w-[36%] h-32 bg-[#f8f9fa]">
                    <img className="max-w-full w-auto max-h-full h-auto" data-src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/농심_신라면-4입_8801043012225_1.png" data-code="166" src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/농심_신라면-4입_8801043012225_1.png" />
                    <input type="hidden" className="igfCode" value="0" />
                  </div>
                  <div className="coupons__info relative flex-1 flex flex-col">
                    <div className="coupons__price text-[#fa5252]">
                      <em className="discount__price text-[2.6rem] tracking-tight font-extrabold">200</em>원 할인
                    </div>
                    <span className="coupons__name line-clamp-2 leading-tight font-bold break-words">신라면블랙</span>
                    <span className="coupons__barcode text-sm" style={{ display: "none" }} >8801043012225</span>
                    <span className="coupons__barcode__88 text-sm">8801043 012225</span>
                    <span className="coupons__date mt-auto text-sm">
                      <input className="coupons__expire" type="hidden" value="2025-12-31T00:00" />
                      2025.10.23
                      ~
                      12.31
                      <span>(49일 남음)</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="one-coupon">
        <div className="flex flex-col mt-2 mb-1 px-2.5">
          <span className="panel__tit font-bold">원쿠폰</span>
          <span className="text-sm text-red-500">※ 매장에 입점되지 않은 상품이 있을 수 있습니다.</span>
        </div>
      </div>

      <div className="couponlist">
        <div className="text__nodata hidden m-0.5 p-7.5 border border-[#d1d1d6] rounded-lg text-center bg-white" onClick={() => setShowPopup4(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Zm0-80v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z" /></svg>
          사용 가능한 쿠폰이 없어요.
        </div>
        <ul className="coupons__list px-0.5 pb-2.5 group flex flex-col gap-2">
          {list.map((item, index) => (
            <li className="oc" key={index} data-code="275">
              <input type="hidden" className="coupons__code" value="275" />
              <div className="coupons__card overflow-hidden flex flex-col w-full border-1 rounded-lg border-[#d1d1d6] bg-white">
                <div className="coupons__header flex p-2 items-center bg-[rgb(0,0,0,.03)]">
                  <button className="zzimbtn js_zzimbtn flex items-center justify-center px-2.5 py-1 text-sm text-[rgb(244,63,94)] border border-[rgb(244,63,94)] rounded-full
                          [&.active]:bg-[rgb(244,63,94)] [&.active]:text-white [&.active_svg]:fill-white [&.active_.empty-heart]:hidden [&.active_.filled-heart]:inline-block
                        ">
                    <svg className="empty-heart" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(244,63,94)">
                      <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path>
                    </svg>
                    <svg className="filled-heart hidden" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(244,63,94)">
                      <path d="M382-320 155-547l57-57 170 170 366-366 57 57-423 423ZM200-160v-80h560v80H200Z"></path>
                    </svg>
                    <span>쿠폰받기</span>
                  </button>
                  <div className="flex items-center ml-auto px-0 py-1 rounded-full text-xs">
                    <span className="text-[rgb(100, 116, 139)]">상세보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(100 116 139)">
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-center p-1.5">
                  <div className="coupons__imgbox overflow-hidden flex justify-center items-center w-[90%] min-h-48 h-auto bg-[#f8f9fa] mb-2.5">
                    <picture>
                      {/* <source type="image/webp" srcset="http://tdc-api-dev-4.togethers.kr:8083/onecoupon/8809824051289.webp" /> */}
                      {/* <source type="image/jpeg" srcset="http://tdc-api-dev-4.togethers.kr:8083/onecoupon/8809824051289.jpg" /> */}
                      <img data-src="http://tdc-api-dev-4.togethers.kr:8083/onecoupon/8809824051289.jpg" alt="바코드쿠폰이미지" className="max-w-full w-auto max-h-full h-auto" width="100%" src="http://tdc-api-dev-4.togethers.kr:8083/onecoupon/8809824051289.jpg" />
                    </picture>
                  </div>
                  <div className="coupons__info relative flex flex-col items-center">
                    <span className="coupons__name line-clamp-2 text-center font-bold leading-tight" title="하나야구 준마이 900ml">
                      하나야구 준마이 900ml 준마이 900ml 준마이 900ml 준마이 900ml 준마이 900ml 준마이 900ml 준마이 900ml 준마이 900ml 준마이 900ml
                    </span>
                    <span className="coupons__date">
                      2025.11.01
                      ~
                      11.30
                      <span>(14일 남음)</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>

      </div>


      {showPopup4 && (
        <div className="modalbox" >
          <div className="modalbox__bg"></div>
          <div className="modalbox__panel registration" >
            <a className="modalbox__close">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </a>
            <h3>매장에서 쿠폰을 사용하기 위해<br />휴대폰번호를 입력해 주세요.</h3>
            <p className="mobile">
              010-
              <input type="text" maxlength="9" />
            </p>
            <p>쿠폰사용 시, 입력하신 휴대폰번호를 계산대<br />직원에게 말씀해주세요.</p>
            <label>
              <input type="checkbox" className="mobile-check" />
              <a href="#" className="mobile-popup">개인정보 수집·이용</a>
              에 동의합니다.
            </label>
            <button className="mobile-btn">개인정보 수집·이용 동의 후 시작하기</button>
            <div className="popup-bg">
              <div className="modalbox__panel popup">
                <a className="modalbox__close">
                  <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                </a>
                <div className="popup-div">
                  <h3>개인정보 수집·이용 동의서</h3>
                  <br />
                  ㈜투게더스는 『개인정보보호법』 제15조 개인정보의 수집·이용에 따라 귀하의 개인정보를 수집하고자 합니다.
                  <br /><br />
                  귀하께서는 아래 개인정보의 수집 항목, 이용 목적, 이용기간을 확인하고, 이용동의서에 체크해 주시기 바랍니다.
                  <br />
                  <table className="tbl_comm">
                    <tbody><tr>
                      <td>수집 항목</td>
                      <td>이용 목적</td>
                      <td>이용 기간</td>
                    </tr>
                      <tr>
                        <td>휴대폰번호</td>
                        <td>동의자가 다운받은 쿠폰을 포스 프로그램에 적용시 활용</td>
                        <td>쿠폰 다운 받은 해당월</td>
                      </tr>
                    </tbody></table>
                  <br />
                  <h4>1. 개인정보 수집 및 이용목적</h4>
                  <br />
                  ① POS프로그램에서 전송된 쿠폰을 다운 받아 사용시 다운받은 정보와 사용자를 확인하는 목적으로 개인정보에 해당하는 휴대폰번호를 수집합니다.
                  <br /><br />
                  ② 개인정보 수집·이용에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 매장에서 제공하는 서비스(이벤트 등)에 제약이 있을 수 있습니다.
                  <br /><br />
                  ③ 상기 이용목적 이외는 개인정보를 사용하지 않습니다.
                  <br /><br />
                  <h4>2. 개인정보 처리 및 보유기간</h4>
                  <br />
                  ① 수집한 개인정보의 수집목적이 모두 달성될 때까지 해당 개인정보를 보유합니다.
                  <br /><br />
                  ② 수집한 개인정보는 매장에서 제공하는 이벤트(쿠폰 등) 사용 시 활용되며, 쿠폰을 다운받은 해당월까지 안전하게 보관 후 파기합니다.
                  <br /><br />
                  <h4>3. 개인정보의 3자 제공</h4>
                  <br />
                  귀하의 별도 동의가 있거나 다른 법률에 특별한 규정이 존재하는 경우 이외에는 개인정보를 3자에게 제공하지 않습니다.
                </div>
              </div>
            </div>
          </div>
          <div className="modalbox__panel detailView">
            <a className="modalbox__close">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </a>
            <p className="modalbox__tit">쿠폰 상세보기</p>
            <dl className="modalbox__dl">
              <dt>쿠폰상품</dt>
              <dd className="product__name">디펜드 가나다라마바사 일이삼사오육칠팔ㅇ구십</dd>
              <dd className="product__barcode">8801136 501773</dd>
            </dl>
            <dl className="modalbox__dl">
              <dt>사용조건</dt>
              <dd>
                상품 <span className="coupons__unit">1</span>개마다 <span><span className="coupons__price">1,000</span><span className="coupons__type">원</span> 할인</span>
                <br />
                <span className="coupons__option">123123</span>
              </dd>
            </dl>
            <dl className="modalbox__dl">
              <dt>사용기간</dt>
              <dd>
                <span className="coupons__date">
                  2025.10.22 ~12.31(45일 남음)
                </span>
                <span className="coupons__deadline"></span>
              </dd>
            </dl>
            <div className="modalbox__group">
              {/* <!--
                <a className="modalbox__zzimbtn">
                  <svg className="empty-heart" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                  </svg>
                  <svg className="filled-heart" style="width: 18px; height: 18px; margin-right: 2px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="레이어_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                    <path d="M12,21l-1.45-1.3c-1.683-1.517-3.075-2.825-4.175-3.925S4.4,13.688,3.75,12.812  S2.646,11.133,2.388,10.4S2,8.917,2,8.15c0-1.567,0.525-2.875,1.575-3.925S5.933,2.65,7.5,2.65c0.867,0,1.692,0.183,2.475,0.55  S11.433,4.083,12,4.75c0.567-0.667,1.242-1.183,2.025-1.55s1.608-0.55,2.475-0.55c1.567,0,2.875,0.525,3.925,1.575  C21.475,5.275,22,6.583,22,8.15c0,0.767-0.129,1.517-0.387,2.25c-0.258,0.733-0.713,1.538-1.363,2.413s-1.525,1.863-2.625,2.962  s-2.492,2.408-4.175,3.925L12,21z" />
                  </svg>
                  <span>찜하기</span>
                </a>&nbsp;
              --> */}

            </div>
          </div>
          <div className="modalbox__panel useCoupon">
            <a className="modalbox__close">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </a>
            <p className="modalbox__tit">받은 쿠폰 사용하기</p>
            <div>
              <span>바코드 유효시간 <span id="expiryTime"></span></span>
              <span>다운받은 쿠폰: <span className="wishListLength">02</span> 개</span>
            </div>
            <div className="barcode-container">
              <svg id="barcode"></svg>
              <div id="barcode_number"></div>
              <a className="btn_comm btn_comm--blue" id="refreshBarcode">쿠폰 바코드 새로고침</a>
            </div>
            <div className="scrollbox">
              <div className="coupons">
                <ul className="coupons__list useCouponView">
                </ul>
              </div>
              {/* <!--
                <div>
                  <span>찜한 쿠폰이 없습니다.<br /> 먼저 쿠폰 찜 후 이용해주세요</span>
                </div>
              --> */}
              <div className="modalbox__guide">
                <p>쿠폰 유의사항</p>
                <ul>
                  <li>계산대 직원에게 대표바코드를 보여주세요.</li>
                  <li>대표바코드를 제시하면, 받은 쿠폰 전체 사용이 가능합니다.</li>
                  <li>대표바코드 유효시간 내에 사용 가능하며, 유효시간 만료시 쿠폰바코드 새로고침을 눌러주세요. </li>
                  <li>사용기간이 만료된 쿠폰은 자동으로 삭제됩니다.</li>
                  <li>사용기간 만료 후, 교환/환불로 인한 재결제 시 쿠폰 적용이 어렵습니다.</li>
                  <li>매장의 사정에 의해 중단 또는 변경될 수 있습니다. </li>
                  <li>쿠폰의 상품 및 상세조건(할인금액, 사용기간, 사용조건 등)은 변동될 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {showPopup5 && (
        <div className="layer__wrap">
          <div className="layer__bg"></div>
          <div className="layer__panel">
            <p className="layer__tit">개인정보 수집·이용 동의</p>
            <div className="layer__privacyinfo">
              ㈜투게더스는 『개인정보보호법』 제15조 개인정보의 수집·이용에 따라 귀하의 개인정보를 수집하고자 합니다. 귀하께서는 아래 개인정보의 수집 항목, 이용 목적, 이용기간을 확인하고, 이용동의서에 체크해 주시기 바랍니다.<strong>1. 개인정보 수집 및 이용목적</strong>① 회원 식별, 공동구매 상품구매 시 사용자를 확인하는 목적으로 개인정보에 해당하는 휴대폰번호를 수집합니다.② 개인정보 수집·이용에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 매장에서 제공하는 서비스에 제약이 있을 수 있습니다.③ 상기 이용목적 이외는 개인정보를 사용하지 않습니다.<strong>2. 개인정보 처리 및 보유기간</strong>① 수집한 개인정보의 수집목적이 모두 달성될 때까지 해당 개인정보를 보유합니다.② 수집한 개인정보는 매장에서 제공하는 공동구매 서비스 이용 시 활용되며, 공동구매 상품구매 후 00일까지 안전하게 보관 후 파기합니다.<strong>3. 개인정보 제공 및 공유</strong>① 수집된 개인정보는 법령에 의거하거나 귀하의 동의가 있는 경우를 제외하고 제3자에게 제공되지 않습니다.② 귀하의 동의가 필요한 경우, 제공받는 자, 제공 목적, 제공 항목 등을 사전에 안내하고 동의를 받습니다.<strong>4. 개인정보의 안전성 확보 조치</strong>① 수집된 개인정보는 암호화되어 안전하게 저장 및 관리됩니다.② 개인정보의 접근 권한을 최소화하고, 개인정보 유출 방지를 위한 보안 시스템을 운영합니다.5. 개인정보 처리에 대한 권리① 귀하는 언제든지 개인정보 열람, 정정, 삭제를 요청할 수 있습니다.② 개인정보 처리에 대한 문의는 고객센터를 통해 가능합니다.

              <button onClick={() => setShowPopup5(false)} className="layer__close">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {showPopup6 && (
        <div className="modalbox" >
          <div className="modalbox__bg"></div>
          <div className="modalbox__panel registration">
            <a className="modalbox__close">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </a>
            <h3>매장에서 쿠폰을 사용하기 위해<br />휴대폰번호를 입력해 주세요.</h3>
            <p className="mobile">
              010-
              <input type="text" maxlength="9" />
            </p>
            <p>쿠폰사용 시, 입력하신 휴대폰번호를 계산대<br />직원에게 말씀해주세요.</p>
            <label>
              <input type="checkbox" className="mobile-check" />
              <a href="#" className="mobile-popup">개인정보 수집·이용</a>
              에 동의합니다.
            </label>
            <button className="mobile-btn">개인정보 수집·이용 동의 후 시작하기</button>
            <div className="popup-bg">
              <div className="modalbox__panel popup">
                <a className="modalbox__close">
                  <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                </a>
                <div className="popup-div">
                  <h3>개인정보 수집·이용 동의서</h3>
                  <br />
                  ㈜투게더스는 『개인정보보호법』 제15조 개인정보의 수집·이용에 따라 귀하의 개인정보를 수집하고자 합니다.
                  <br /><br />
                  귀하께서는 아래 개인정보의 수집 항목, 이용 목적, 이용기간을 확인하고, 이용동의서에 체크해 주시기 바랍니다.
                  <br />
                  <table className="tbl_comm">
                    <tbody><tr>
                      <td>수집 항목</td>
                      <td>이용 목적</td>
                      <td>이용 기간</td>
                    </tr>
                      <tr>
                        <td>휴대폰번호</td>
                        <td>동의자가 다운받은 쿠폰을 포스 프로그램에 적용시 활용</td>
                        <td>쿠폰 다운 받은 해당월</td>
                      </tr>
                    </tbody></table>
                  <br />
                  <h4>1. 개인정보 수집 및 이용목적</h4>
                  <br />
                  ① POS프로그램에서 전송된 쿠폰을 다운 받아 사용시 다운받은 정보와 사용자를 확인하는 목적으로 개인정보에 해당하는 휴대폰번호를 수집합니다.
                  <br /><br />
                  ② 개인정보 수집·이용에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 매장에서 제공하는 서비스(이벤트 등)에 제약이 있을 수 있습니다.
                  <br /><br />
                  ③ 상기 이용목적 이외는 개인정보를 사용하지 않습니다.
                  <br /><br />
                  <h4>2. 개인정보 처리 및 보유기간</h4>
                  <br />
                  ① 수집한 개인정보의 수집목적이 모두 달성될 때까지 해당 개인정보를 보유합니다.
                  <br /><br />
                  ② 수집한 개인정보는 매장에서 제공하는 이벤트(쿠폰 등) 사용 시 활용되며, 쿠폰을 다운받은 해당월까지 안전하게 보관 후 파기합니다.
                  <br /><br />
                  <h4>3. 개인정보의 3자 제공</h4>
                  <br />
                  귀하의 별도 동의가 있거나 다른 법률에 특별한 규정이 존재하는 경우 이외에는 개인정보를 3자에게 제공하지 않습니다.
                </div>
              </div>
            </div>
          </div>
          <div className="modalbox__panel detailView" >
            <a className="modalbox__close">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </a>
            <p className="modalbox__tit">쿠폰 상세보기</p>
            <dl className="modalbox__dl"><dt>쿠폰상품</dt><dd className="product__name" title="">처음처럼(부드러운) 360ML*6병</dd>
              <dd className="product__barcode">8801152 135242</dd></dl>
            <dl className="modalbox__dl">
              <dt>사용조건</dt>
              <dd>
                상품 <span className="coupons__unit">1</span>개마다 <span>
                  <span className="coupons__price">500</span><span className="coupons__type">원</span> 할인</span>
                <br />
                <span className="coupons__option"></span>
              </dd>
            </dl>
            <dl className="modalbox__dl">
              <dt>사용기간</dt>
              <dd>
                <span className="coupons__date">

                  2025.11.01
                  ~
                  11.30



                  (14일 남음)


                </span>
                <span className="coupons__deadline"></span>
              </dd>
            </dl>
            <div className="modalbox__group">
              {/* <!--
                  <a className="modalbox__zzimbtn">
                    <svg className="empty-heart" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                    </svg>
                    <svg className="filled-heart" style="width: 18px; height: 18px; margin-right: 2px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="레이어_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                        <path d="M12,21l-1.45-1.3c-1.683-1.517-3.075-2.825-4.175-3.925S4.4,13.688,3.75,12.812  S2.646,11.133,2.388,10.4S2,8.917,2,8.15c0-1.567,0.525-2.875,1.575-3.925S5.933,2.65,7.5,2.65c0.867,0,1.692,0.183,2.475,0.55  S11.433,4.083,12,4.75c0.567-0.667,1.242-1.183,2.025-1.55s1.608-0.55,2.475-0.55c1.567,0,2.875,0.525,3.925,1.575  C21.475,5.275,22,6.583,22,8.15c0,0.767-0.129,1.517-0.387,2.25c-0.258,0.733-0.713,1.538-1.363,2.413s-1.525,1.863-2.625,2.962  s-2.492,2.408-4.175,3.925L12,21z"/>
                    </svg>
                    <span>찜하기</span>
                  </a>&nbsp;
              --> */}

            </div>
          </div>
          <div className="modalbox__panel useCoupon">
            <a className="modalbox__close">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </a>
            <p className="modalbox__tit">받은 쿠폰 사용하기</p>
            <div>
              <span>바코드 유효시간 <span id="expiryTime"></span></span>
              <span>다운받은 쿠폰: <span className="wishListLength">02</span> 개</span>
            </div>
            <div className="barcode-container">
              <svg id="barcode"></svg>
              <div id="barcode_number"></div>
              <a className="btn_comm btn_comm--blue" id="refreshBarcode">쿠폰 바코드 새로고침</a>
            </div>
            <div className="scrollbox">
              <div className="coupons">
                <ul className="coupons__list useCouponView">
                </ul>
              </div>
              {/* <!--
                <div>
                  <span>찜한 쿠폰이 없습니다.<br /> 먼저 쿠폰 찜 후 이용해주세요</span>
                </div>
                 --> */}
              <div className="modalbox__guide">
                <p>쿠폰 유의사항</p>
                <ul>
                  <li>계산대 직원에게 대표바코드를 보여주세요.</li>
                  <li>대표바코드를 제시하면, 받은 쿠폰 전체 사용이 가능합니다.</li>
                  <li>대표바코드 유효시간 내에 사용 가능하며, 유효시간 만료시 쿠폰바코드 새로고침을 눌러주세요. </li>
                  <li>사용기간이 만료된 쿠폰은 자동으로 삭제됩니다.</li>
                  <li>사용기간 만료 후, 교환/환불로 인한 재결제 시 쿠폰 적용이 어렵습니다.</li>
                  <li>매장의 사정에 의해 중단 또는 변경될 수 있습니다. </li>
                  <li>쿠폰의 상품 및 상세조건(할인금액, 사용기간, 사용조건 등)은 변동될 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}