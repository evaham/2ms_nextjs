
"use client";
import Link from "next/link";
import { useState } from 'react';

export default function CouponList() {
	const [showPopup4, setShowPopup4] = useState(true);
	const [showPopup5, setShowPopup5] = useState(false);
	const [showPopup6, setShowPopup6] = useState(false);

	const list = [
		{ id: 1, },
	];

	// 쿠폰 노출 여부
	const couponActive = true;
	
	// 사용가능 쿠폰 리스트
	const availableCoupons = [
		{ id: 1, name: '쿠폰1', barcode: '8801062 632978', discount: 1000, quantity: 2, Date: '2026.01.12 ~ 02.28 (25일 남음)' },
		{ id: 2, name: '쿠폰2', barcode: '8801062 250691', discount: 2000, quantity: 1, Date: '2026.02.01 ~ 03.15 (40일 남음)' },
		{ id: 3, name: '쿠폰3', barcode: '8801062 789456', discount: 1500, quantity: 5, Date: '2026.03.01 ~ 04.10 (55일 남음)' },
	]
	// 원쿠폰 리스트
	const oneCoupons = [
		
	]





	return (
		<>
			<div className='sample relative flex flex-col min-h-screen pb-20 bg-slate-50'>
				<div className="sticky top-0 z-50">
					<div className="sample__name clearfix relative flex justify-center items-center h-16 bg-[#21409a] text-xl text-white font-bold" style={{ color: "", background: "" }}>
						<Link href={"/"} className="sample__back flex justify-center items-center absolute top-0 left-0 w-13 h-full text-white no-underline" >
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
						</Link>
						<span className="js_fontsize" style={{ fontSize: "20px" }}>쿠폰함</span>
					</div>
				</div>

				{/* 사용가능쿠폰 - 데이터없음 */}
				<div className="empty-div flex flex-col justify-center items-center min-h-60">
					<div className="flex flex-col items-center my-20 text-xl text-center font-bold text-slate-400">
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
					<div className="downloaded-none m-1 p-7.5 border border-slate-300 rounded-lg text-center bg-white">
						<p>받은 쿠폰이 없습니다.</p>

						<button className="user-registration text-blue-500 text-sm underline">사용자 등록하기</button>
					</div>
					<ul className="downloaded-list coupons__list flex flex-col mt-1.5 px-1 pb-2.5 gap-0.5">
						{/* 받은 ec 마트쿠폰 */}

						{list.map((item, index) => (
							<li key={index} className="ec w-full" data-code="166">
								<input type="hidden" className="coupons__code" value="2705" />
								<div className="coupons__card relative overflow-hidden flex flex-col w-full border border-slate-300 rounded-lg bg-white"
									style={{ display: 'flex', borderWidth: '2px', borderColor: 'rgb(244,63,94)' }}
								>
									<div className="coupons__header flex p-2 items-center bg-slate-200/20">
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
										<div className="flex items-center ml-auto px-0 py-1 rounded-full text-sm">
											<span className="text-slate-500 leading-none tracking-tight">상세보기</span>
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
												<em className="discount__price text-[2.6rem] tracking-tight font-extrabold not-italic">200</em>원 할인
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
						{/* 받은 oc 원쿠폰 */}
						{list.map((item, index) => (
							<li className="oc w-full" key={index} data-code="275">
								<input type="hidden" className="coupons__code" value="275" />
								<div className="coupons__card overflow-hidden flex flex-col w-full border border-slate-300 rounded-lg bg-white"
									style={{ display: 'flex', borderWidth: '2px', borderColor: 'rgb(244,63,94)' }}
								>
									<div className="coupons__header flex p-2 items-center bg-slate-200/20">
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
										<div className="flex items-center ml-auto px-0 py-1 rounded-full text-sm">
											<span className="text-slate-500 leading-none tracking-tight">상세보기</span>
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
					<ul id="js_changeList" className="coupons__list group flex flex-col mt-1.5 px-1 pb-2.5 gap-0.5">
						{/* 사용가능 ec 마트쿠폰 */}
						{availableCoupons.map((item) => (
							<li className="ec" key={item.id} data-code="166">
								<input type="hidden" className="coupons__code" value="2705" />
								<div className="coupons__card overflow-hidden flex flex-col w-full border border-slate-300 rounded-lg bg-white">
									<div className="coupons__header flex p-2 items-center bg-slate-200/20">
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
										<div className="flex items-center ml-auto px-0 py-1 rounded-full text-sm">
											<span className="text-slate-500 leading-none tracking-tight">상세보기</span>
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
												<em className="discount__price text-[2.6rem] tracking-tight font-extrabold not-italic">200</em>원 할인
											</div>
											<span className="coupons__name line-clamp-2 leading-tight font-bold break-words">{item.name}</span>
											<span className="coupons__barcode text-sm" style={{ display: "none" }} >{item.barcode.replace(/\s/g, "")}</span>
											<span className="coupons__barcode__88 text-sm">{item.barcode}</span>
											<span className="coupons__quantity text-sm text-slate-500">수량 {item.quantity}개</span>
											<span className="coupons__date mt-auto text-sm">
												<input className="coupons__expire" type="hidden" value="2025-12-31T00:00" />
												{item.Date}
											</span>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
				{/* 발급예정쿠폰 */}
				<div className="">
					<div className="flex mt-2 mb-1 px-2.5">
						<span className="panel__tit font-bold">발급 예정 쿠폰</span>
					</div>
					<ul className="coupons__list flex flex-col mt-1.5 px-1 pb-2.5 gap-0.5">
						{/* 마트쿠폰 dc 마트쿠폰 */}
						{list.map((item, index) => (
							<li key={index} className="w-full" data-code="166">
								<input type="hidden" className="coupons__code" value="2705" />
								<div className="coupons__card relative overflow-hidden flex flex-col w-full border border-slate-300 rounded-lg bg-white"
								// style={{ display: 'flex', borderWidth: '2px', borderColor: 'rgb(244,63,94)' }}
								>
									<div className="coupons__header flex p-2 items-center bg-slate-200/20">
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
										<div className="flex items-center ml-auto px-0 py-1 rounded-full text-sm">
											<span className="text-slate-500 leading-none tracking-tight">상세보기</span>
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
												<em className="discount__price text-[2.6rem] tracking-tight font-extrabold not-italic">200</em>원 할인
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
									{/* <!-- dark background --> */}
									<div className="coupons__darkbg absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-5">
										<p className="font-bold">
											<span>
												2002.12.01
											</span>
											부터 사용가능
										</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>

				{/* 원쿠폰 */}
				<div className="one-coupon">
					<div className="flex flex-col mt-2 mb-1 px-2.5">
						<span className="panel__tit font-bold">원쿠폰</span>
						<span className="text-sm text-red-500">※ 매장에 입점되지 않은 상품이 있을 수 있습니다.</span>
					</div>
					<ul className="js_changeList coupons__list ocList flex flex-col mt-1.5 px-1 pb-2.5 gap-0.5">
						{list.map((item, index) => (
							<li className="oc w-full" key={index} data-code="275">
								<input type="hidden" className="coupons__code" value="275" />
								<div className="coupons__card overflow-hidden flex flex-col w-full border border-slate-300 rounded-lg bg-white">
									<div className="coupons__header flex p-2 items-center bg-slate-200/20">
										<button className="zzimbtn js_zzimbtn flex items-center justify-center px-2.5 py-1 text-sm text-[rgb(244,63,94)] border border-[rgb(244,63,94)] rounded-full
											[&.active]:bg-[rgb(244,63,94)] [&.active]:text-white [&.active_svg]:fill-white [&.active_.empty-heart]:hidden [&.active_.filled-heart]:inline-block
										">
											<svg className="empty-heart" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(244,63,94)">
												<path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path>
											</svg>
											<svg className="filled-heart hidden" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(244,63,94)">
												<path d="M382-320 155-547l57-57 170 170 366-366 57 57-423 423ZM200-160v-80h560v80H200Z"></path>
											</svg>
											<span>받기완료</span>
										</button>
										<div className="flex items-center ml-auto px-0 py-1 rounded-full text-sm">
											<span className="text-slate-500 leading-none tracking-tight">상세보기</span>
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
				{/* 리스트종료 */}

				<div className="wrap_stickyfooter overflow-x-hidden fixed right-0 bottom-23 z-50">
					<a className="scroll_top btn_movetop flex flex-col items-center justify-center w-15 h-15 ml-auto mr-2.5 rounded-full bg-black/70 hover:bg-[#333] ">
						<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff"><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path></svg>
						<span className="text-xs text-white tracking-tight">맨위로</span>
					</a>
				</div>

				{/* <!-- 모달 팝업 --> */}
				<div className="modalbox flex justify-center items-center fixed inset-0 p-3 z-50" style={{ display: 'none' }}>
					<div className="modalbox__bg absolute inset-0 bg-black/40"></div>
					<div className="modalbox__panel registration relative overflow-hidden flex flex-col w-full p-4 bg-slate-50 rounded-2xl z-50" style={{ display: 'none' }}>
						<a className="modalbox__close absolute top-3 right-3 flex justify-center items-center">
							<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg>
						</a>
						<p className="encrypt-title mb-2 text-xl text-center font-bold leading-tight">고객정보</p>
						<div className="overflow-y-auto flex flex-col max-h-96 rounded-lg bg-white p-4">
							<h3 className="mb-2 text-lg font-bold leading-tight">매장에서 쿠폰을 사용하기 위해<br />휴대폰번호를 입력해 주세요.</h3>
							<p className="mobile flex px-2.5 py-1.5 bg-white border border-black/10 rounded-lg text-lg tracking-widest">
								010-
								<input type="text" maxLength="9" className="w-full text-lg tracking-widest" />
							</p>
							<p className="mt-2 text-slate-600">쿠폰사용 시, 입력하신 휴대폰번호를 계산대 직원에게 말씀해주세요.</p>

							<div className="flex mx-auto my-6">
								<label className="flex">
									<input type="checkbox" className="mobile-check size-5 mr-2" />
									<a href="#" className="mobile-popup text-blue-500">개인정보 수집·이용</a>
									에 동의합니다.
								</label>
							</div>
							<button className="mobile-btn flex justify-center items-center h-12 rounded-lg text-lg text-white font-bold bg-rose-500">개인정보 수집·이용 동의 후 시작하기</button>
							<div className="popup-bg fixed inset-0 flex justify-center items-center w-full h-full p-2.5 bg-black/50 z-10" style={{ display: 'none' }}>
								<div className="modalbox__panel popup relative flex flex-col w-full p-2.5 rounded-2xl bg-slate-50">
									<a className="modalbox__close absolute top-3 right-3 flex justify-center items-center">
										<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg>
									</a>
									<div className="popup-div overflow-y-auto h-120 mt-8
										[&_h3,&_h4]:font-bold [&_h3]:text-lg [&_h4]:text-md 
										[&_table]:w-full [&_table]:border [&_table]:text-sm [&_table_td]:border [&_table_td]:border-slate-400 [&_table_td]:p-2
									">
										<h3>개인정보 수집·이용 동의서</h3>
										<br />
										㈜투게더스는 『개인정보보호법』 제15조 개인정보의 수집·이용에 따라 귀하의 개인정보를 수집하고자 합니다.
										<br /><br />
										귀하께서는 아래 개인정보의 수집 항목, 이용 목적, 이용기간을 확인하고, 이용동의서에 체크해 주시기 바랍니다.
										<br />
										<table className="tbl_comm">
											<tbody>
												<tr>
													<td>수집 항목</td>
													<td>이용 목적</td>
													<td>이용 기간</td>
												</tr>
												<tr>
													<td>휴대폰번호</td>
													<td>동의자가 다운받은 쿠폰을 포스 프로그램에 적용시 활용</td>
													<td>쿠폰 다운 받은 해당월</td>
												</tr>
											</tbody>
										</table>
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
					</div>

					<div className="modalbox__panel detailView relative overflow-hidden flex flex-col w-full p-4 bg-slate-50 rounded-2xl z-50" style={{ display: 'none' }}>
						<a className="modalbox__close absolute top-3 right-3 flex justify-center items-center">
							<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg>
						</a>
						<p className="modalbox__tit mb-2 text-xl text-center font-bold leading-tight">쿠폰 상세보기</p>
						<dl className="modalbox__dl mt-2.5 p-2.5 rounded-lg bg-white">
							<dt className="text-sm text-slate-500">쿠폰상품</dt>
							<dd className="product__name mt-1 font-bold">신라면블랙</dd>
							<dd className="product__barcode text-sm text-slate-400 font-bold">8801043 012225</dd>
						</dl>
						<dl className="modalbox__dl mt-2.5 p-2.5 rounded-lg bg-white">
							<dt className="text-sm text-slate-500">사용조건</dt>
							<dd className="font-bold">
								상품 <span className="coupons__unit">1</span>개마다 <span className="text-rose-600">
									<span className="coupons__price text-3xl">200</span><span className="coupons__type">원</span> 할인</span>
								<br />
								<span className="coupons__option"></span>
							</dd>
						</dl>
						<dl className="modalbox__dl mt-2.5 p-2.5 rounded-lg bg-white">
							<dt className="text-sm text-slate-500">사용기간</dt>
							<dd className="flex gap-2 mt-2.5 font-bold">
								<span className="coupons__date text-slate-600">2025.10.23 ~ 12.21</span>
								<span className="coupons__deadline text-rose-500">(00일 남음)</span>
							</dd>
						</dl>
						<div className="modalbox__group">

						</div>
					</div>
					<div className="modalbox__panel useCoupon relative overflow-hidden flex flex-col w-full p-4 bg-slate-50 rounded-2xl z-50" style={{ display: 'none' }}>
						<a className="modalbox__close absolute top-3 right-3 flex justify-center items-center">
							<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg>
						</a>
						<p className="modalbox__tit mb-2 text-xl text-center font-bold leading-tight">받은 쿠폰 사용하기</p>
						<div className="flex">
							<span>바코드 유효시간 <span id="expiryTime"></span></span>
							<span className="ml-auto">다운받은 쿠폰: <span className="wishListLength">02</span> 개</span>
						</div>
						<div className="barcode-container my-2.5">
							<svg id="barcode" className="w-75"></svg>
							<div id="barcode_number" className="-mt-1 text-lg text-center tracking-tight"></div>
							<a className="btn_comm btn_comm--blue block w-full p-1.5 text-center font-bold" id="refreshBarcode">쿠폰 바코드 새로고침</a>
						</div>
						<div className="scrollbox">
							<div className="coupons">
								<ul className="coupons__list useCouponView">
								</ul>
							</div>
							<div className="modalbox__guide mt-5 border-t border-slate-200">
								<p className="mt-5 font-bold">쿠폰 유의사항</p>
								<ul className="mt-2.5 ml-5 list-disc leading-tight">
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
			</div>
		</>
	)
}