import resolveImageSrc from "@/app/lib/resolveImageSrc";

export default function CouponCard({ 
	
	coupon, 
	isReceived = false, 
	isUpcoming = false,
	upcomingDate = '',
	onReceive,
	onDetailClick,
	showQuantity = false 
	
}) {
	return (
		<li className="ec w-full" data-code="166">
			<input type="hidden" className="coupons__code" value="2705" />
			<div 
				className="coupons__card relative overflow-hidden flex flex-col w-full border border-slate-300 rounded-lg bg-white"
				style={isReceived ? { display: 'flex', borderWidth: '2px', borderColor: 'rgb(244,63,94)' } : {}}
			>
				<div className="coupons__header flex p-2 items-center bg-slate-200/20">
					<button 
						onClick={() => onReceive && onReceive(coupon.id)}
						className={`zzimbtn js_zzimbtn flex items-center justify-center px-2.5 py-1 text-sm text-[rgb(244,63,94)] border border-[rgb(244,63,94)] rounded-full
							${isReceived ? 'active bg-[rgb(244,63,94)] text-white' : ''}
							${!isReceived ? '[&.active]:bg-[rgb(244,63,94)] [&.active]:text-white [&.active_svg]:fill-white [&.active_.empty-heart]:hidden [&.active_.filled-heart]:inline-block' : ''}
						`}
					>
						{isReceived ? (
							<>
								<svg className="filled-heart" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#fff">
									<path d="M382-320 155-547l57-57 170 170 366-366 57 57-423 423ZM200-160v-80h560v80H200Z"></path>
								</svg>
								<span>받기완료</span>
							</>
						) : (
							<>
								<svg className="empty-heart" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(244,63,94)">
									<path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path>
								</svg>
								<svg className="filled-heart hidden" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(244,63,94)">
									<path d="M382-320 155-547l57-57 170 170 366-366 57 57-423 423ZM200-160v-80h560v80H200Z"></path>
								</svg>
								<span>쿠폰받기</span>
							</>
						)}
					</button>
					<button 
						onClick={() => onDetailClick && onDetailClick(coupon)}
						className="flex items-center ml-auto px-0 py-1 rounded-full text-sm"
					>
						<span className="text-slate-500 leading-none tracking-tight">상세보기</span>
						<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="rgb(100 116 139)">
							<path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"></path>
						</svg>
					</button>
				</div>
				<div className="flex p-1.5 gap-1.5">
					<div className="coupons__imgbox relative overflow-hidden flex justify-center items-center w-[36%] h-32 bg-[#f8f9fa]">
						<img 
							className="lazyload max-w-full w-auto max-h-full h-auto" 
							data-src={resolveImageSrc(coupon.image)} 
							data-code="166" 
							src={resolveImageSrc(coupon.image)} 
						/>
						<input type="hidden" className="igfCode" value="0" />
					</div>
					<div className="coupons__info relative flex-1 flex flex-col">
						<div className="coupons__price text-[#fa5252]">
							<em className="discount__price text-[2.6rem] tracking-tight font-extrabold not-italic">{coupon.discount}</em>원 할인
						</div>
						<span className="coupons__name line-clamp-2 leading-tight font-bold break-words">{coupon.name}</span>
						<span className="coupons__barcode text-sm" style={{ display: "none" }}>{coupon.barcode.replace(/\s/g, "")}</span>
						<span className="coupons__barcode__88 text-sm">{coupon.barcode}</span>
						<span className="coupons__date mt-auto text-sm">
							<input className="coupons__expire" type="hidden" value="2025-12-31T00:00" />
							{coupon.Date}
						</span>
					</div>
				</div>

				{/* 발급예정 쿠폰 오버레이 */}
				{isUpcoming && upcomingDate && (
					<div className="coupons__darkbg absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-5">
						<p className="font-bold">
							<span className="mr-1">{upcomingDate}</span>
							부터 사용가능
						</p>
					</div>
				)}
			</div>
		</li>
	);
}
