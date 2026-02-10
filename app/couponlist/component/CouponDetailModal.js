export default function CouponDetailModal({ isOpen, onClose, coupon }) {
  if (!isOpen || !coupon) return null;

  return (
    <>
      {/* <!-- 쿠폰 상세보기 --> */}
      <div className="modalbox flex justify-center items-center fixed inset-0 p-3 z-50">
        <div 
          className="modalbox__bg absolute inset-0 bg-black/40"
          onClick={onClose}
        ></div>
        <div className="modalbox__panel detailView relative overflow-hidden flex flex-col w-full p-4 bg-slate-50 rounded-2xl z-50">
          <button 
            className="modalbox__close absolute top-3 right-3 flex justify-center items-center"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg>
          </button>
          <p className="modalbox__tit mb-2 text-xl text-center font-bold leading-tight">쿠폰 상세보기</p>
          <dl className="modalbox__dl mt-2.5 p-2.5 rounded-lg bg-white">
            <dt className="text-sm text-slate-500">쿠폰상품</dt>
            <dd className="product__name mt-1 font-bold">{coupon.name}</dd>
            <dd className="product__barcode text-sm text-slate-400 font-bold">{coupon.barcode}</dd>
          </dl>
          <dl className="modalbox__dl mt-2.5 p-2.5 rounded-lg bg-white">
            <dt className="text-sm text-slate-500">사용조건</dt>
            <dd className="font-bold">
              상품 <span className="coupons__unit">{coupon.quantity || 1}</span>개마다 <span className="text-rose-600">
                <span className="coupons__price text-3xl">{coupon.discount}</span><span className="coupons__type">원</span> 할인</span>
              <br />
              <span className="coupons__option"></span>
            </dd>
          </dl>
          <dl className="modalbox__dl mt-2.5 p-2.5 rounded-lg bg-white">
            <dt className="text-sm text-slate-500">사용기간</dt>
            <dd className="flex gap-2 mt-2.5 font-bold">
              <span className="coupons__date text-slate-600">{coupon.Date}</span>
            </dd>
          </dl>
          <div className="modalbox__group">
          </div>
        </div>
      </div>
    </>
  );
}
