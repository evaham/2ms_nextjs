
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
      <div className="empty-div">
          <div className="flex flex-col items-center my-20 text-xl text-center font-bold text-[#868e96]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-25 h-25 mb-5" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cbd5e1"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Zm0-80v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"></path></svg>
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
    </div>
  )
}