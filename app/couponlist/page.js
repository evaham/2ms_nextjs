
"use client";
import Link from "next/link";
import { useState } from 'react';
import CouponCard from './component/CouponCard';
import OneCouponCard from './component/OneCouponCard';
import CouponDetailModal from './component/CouponDetailModal';
import OneCouponDetailModal from './component/OneCouponDetailModal';

export default function CouponList() {
	const [showPopup4, setShowPopup4] = useState(true);
	const [showPopup5, setShowPopup5] = useState(false);
	const [showPopup6, setShowPopup6] = useState(false);
	const [receivedCoupons, setReceivedCoupons] = useState(new Set());
	const [receivedOneCoupons, setReceivedOneCoupons] = useState(new Set());
	const [selectedCoupon, setSelectedCoupon] = useState(null);
	const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
	const [selectedOneCoupon, setSelectedOneCoupon] = useState(null);
	const [isOneCouponDetailOpen, setIsOneCouponDetailOpen] = useState(false);

	const list = [
		{ id: 1, },
	];

	// 쿠폰 받기 클릭 핸들러 (토글)
	const handleReceiveCoupon = (couponId) => {
		const newReceivedCoupons = new Set(receivedCoupons);
		if (newReceivedCoupons.has(couponId)) {
			newReceivedCoupons.delete(couponId);
		} else {
			newReceivedCoupons.add(couponId);
		}
		setReceivedCoupons(newReceivedCoupons);
	};

	// 원쿠폰 받기 클릭 핸들러 (토글)
	const handleReceiveOneCoupon = (couponId) => {
		const newReceivedOneCoupons = new Set(receivedOneCoupons);
		if (newReceivedOneCoupons.has(couponId)) {
			newReceivedOneCoupons.delete(couponId);
		} else {
			newReceivedOneCoupons.add(couponId);
		}
		setReceivedOneCoupons(newReceivedOneCoupons);
	};

	// 상세보기 클릭 핸들러
	const handleOpenDetailModal = (coupon) => {
		setSelectedCoupon(coupon);
		setIsDetailModalOpen(true);
	};

	// 상세보기 모달 닫기
	const handleCloseDetailModal = () => {
		setIsDetailModalOpen(false);
		setSelectedCoupon(null);
	};

	const handleOpenOneCouponDetail = (coupon) => {
		setSelectedOneCoupon(coupon);
		setIsOneCouponDetailOpen(true);
	};

	const handleCloseOneCouponDetail = () => {
		setIsOneCouponDetailOpen(false);
		setSelectedOneCoupon(null);
	};

	// 쿠폰 노출 여부
	// true: 노출, false: 미노출
	const couponActive = true;
	// 원쿠폰 노출여부
	const oneCouponActive = true;
	// 발급예정쿠폰 노출여부
	const upcomingCouponActive = true;




	// 사용가능 쿠폰 리스트
	const availableCoupons = [
		{ id: 1, name: '쿠폰1', barcode: '8801062 632978', discount: 100, quantity: 2, Date: '2026.01.12 ~ 02.28 (25일 남음)' },
		{ id: 2, name: '쿠폰2', barcode: '8801062 250691', discount: 200, quantity: 1, Date: '2026.02.01 ~ 03.15 (40일 남음)' },
		{ id: 3, name: '쿠폰3', barcode: '8801062 789456', discount: 150, quantity: 5, Date: '2026.03.01 ~ 04.10 (55일 남음)' },
	]



	// 원쿠폰 리스트
	const oneCoupons = [
		{ id: 1, name: '원쿠폰1', barcode: '8809824 051289', discount: 500, Date: '2025.12.01 ~ 12.31 (10일 남음)' },
	]
	// 발급예정 쿠폰 일자
	const upcomingDate = '2026.01.15';

	// 발급예정 쿠폰 리스트
	const upcomingCoupons = [
		{ id: 1, name: '발급예정쿠폰1', barcode: '8801062 123456', discount: 800, Date: '2026.01.15 ~ 02.15' },
	]

	const availableCouponList = availableCoupons.filter(
		(coupon) => !receivedCoupons.has(coupon.id)
	);
	const oneCouponList = oneCoupons.filter(
		(coupon) => !receivedOneCoupons.has(coupon.id)
	);

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

				{/* 쿠폰서비스 false 일때 보여짐 */}
				{!couponActive && (
					<div className="empty-div flex flex-col justify-center items-center min-h-60">
						<div className="flex flex-col items-center my-20 text-xl text-center font-bold text-slate-400">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-25 h-25 mb-5" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cbd5e1"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Zm0-80v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"></path></svg>
							사용 가능한 쿠폰이 없어요.
						</div>
					</div>
				)}

				{/* 쿠폰서비스 true 일때 보여짐 */}
				{couponActive && (
					<div>
						{/* 받은쿠폰 */}
						<div className="downloaded-coupon">
							{(() => {
								const totalReceived = receivedCoupons.size + receivedOneCoupons.size;
								return (
							<div className="flex mt-2 mb-1 px-2.5">
								<span className="panel__tit text-red-500 font-bold">받은 쿠폰</span>
								<span className="downloaded-count ml-auto text-sm text-slate-500">받은 쿠폰: <span className="text-red-500 font-bold">{String(totalReceived).padStart(2, '0')}</span> 개</span>
							</div>
							);
							})()}
							{receivedCoupons.size === 0 && receivedOneCoupons.size === 0 && (
								<div className="downloaded-none m-1 p-7.5 border border-slate-300 rounded-lg text-center bg-white">
									<p>받은 쿠폰이 없습니다.</p>
								</div>
							)}
							{/* 쿠폰받기를 했을때 여기에 표시 */}
							{(receivedCoupons.size > 0 || receivedOneCoupons.size > 0) && (
								<ul className="downloaded-list coupons__list flex flex-col mt-1.5 px-1 pb-2.5 gap-0.5">
									{availableCoupons.filter(coupon => receivedCoupons.has(coupon.id)).map((item) => (
										<CouponCard 
											key={item.id}
											coupon={item}
											isReceived={true}
											onReceive={handleReceiveCoupon}
										/>
									))}
									{oneCoupons.filter(coupon => receivedOneCoupons.has(coupon.id)).map((item) => (
										<OneCouponCard
											key={item.id}
											coupon={item}
											isReceived={true}
											onReceive={handleReceiveOneCoupon}
											onDetailClick={handleOpenOneCouponDetail}
										/>
									))}
								</ul>
							)}
						</div>

						{/* 사용가능쿠폰 */}
						{availableCouponList.length > 0 && (
							<div className="coupon-list">
								<div className="flex mt-2 mb-1 px-2.5">
									<span className="panel__tit font-bold">사용가능 쿠폰</span>
								</div>
								<ul id="js_changeList" className="coupons__list group flex flex-col mt-1.5 px-1 pb-2.5 gap-0.5">
									{/* 사용가능 ec 마트쿠폰 */}
									{availableCouponList.map((item) => (
										<CouponCard 
											key={item.id}
											coupon={item}
											isReceived={false}
											onReceive={handleReceiveCoupon}
											showQuantity={true}
											onDetailClick={handleOpenDetailModal}
										/>
									))}
								</ul>
							</div>
						)}

						{/* 발급예정쿠폰 */}
						{upcomingCouponActive && (
							<div className="">
								<div className="flex mt-2 mb-1 px-2.5">
									<span className="panel__tit font-bold">발급 예정 쿠폰</span>
								</div>
								<ul className="coupons__list flex flex-col mt-1.5 px-1 pb-2.5 gap-0.5">
									{/* 마트쿠폰 dc 마트쿠폰 */}
									{upcomingCoupons.map((item) => (
										<CouponCard 
											key={item.id}
											coupon={item}
											isUpcoming={true}
											upcomingDate={upcomingDate}
											onDetailClick={handleOpenDetailModal}
										/>
									))}
								</ul>
							</div>
						)}

						{/* 원쿠폰 */}
						{oneCouponActive && oneCouponList.length > 0 && (
							<div className="one-coupon">
								<div className="flex flex-col mt-2 mb-1 px-2.5">
									<span className="panel__tit font-bold">원쿠폰</span>
									<span className="text-sm text-red-500">※ 매장에 입점되지 않은 상품이 있을 수 있습니다.</span>
								</div>
								<ul className="js_changeList coupons__list ocList flex flex-col mt-1.5 px-1 pb-2.5 gap-0.5">
									{oneCouponList.map((item) => (
										<OneCouponCard 
											key={item.id}
											coupon={item}
											isReceived={false}
											onReceive={handleReceiveOneCoupon}
											onDetailClick={handleOpenOneCouponDetail}
										/>
									))}
								</ul>
							</div>
						)}
					</div>
				)}
				{/* 리스트종료 */}

				<div className="wrap_stickyfooter fixed right-0 bottom-23 w-auto h-auto z-50 flex flex-col gap-2">
          <a className="scroll_top btn_movetop flex border flex-col items-center justify-center size-16.5 ml-auto mr-2.5 rounded-full bg-black/70 hover:bg-[#333] shadow-md shadow-black/50"
            onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });}}
            role="button"
            aria-label="맨위로 이동"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="#fff"><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path></svg>
            <span className="text-xs text-white tracking-tight">맨위로</span>
          </a>
				</div>
				<div className="modalbox flex justify-center items-center fixed inset-0 p-3 z-50" style={{ display: 'none' }}>
					<div className="modalbox__bg absolute inset-0 bg-black/40"></div>
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

			{/* 쿠폰 상세보기 모달 */}
			<CouponDetailModal
				isOpen={isDetailModalOpen}
				onClose={handleCloseDetailModal}
				coupon={selectedCoupon}
			/>
			<OneCouponDetailModal
				isOpen={isOneCouponDetailOpen}
				onClose={handleCloseOneCouponDetail}
				coupon={selectedOneCoupon}
			/>
		</>
	)
}