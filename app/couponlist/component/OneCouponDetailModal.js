export default function OneCouponDetailModal({ isOpen, onClose, coupon }) {
  if (!isOpen || !coupon) return null;

  return (
    <>
      <div className="modalbox flex justify-center items-center fixed inset-0 p-3 z-50">
        <div
          className="modalbox__bg absolute inset-0 bg-black/40"
          onClick={onClose}
        ></div>
        <div className="modalbox__panel useCoupon relative overflow-hidden flex flex-col w-full p-4 bg-slate-50 rounded-2xl z-50">
          <button
            className="modalbox__close absolute top-3 right-3 flex justify-center items-center"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg>
          </button>
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
                <li>대표바코드를 유효시간 내에 사용 가능하며, 유효시간 만료시 쿠폰바코드 새로고침을 눌러주세요. </li>
                <li>사용기간이 만료된 쿠폰은 자동으로 삭제됩니다.</li>
                <li>사용기간 만료 후, 교환/환불로 인한 재결제 시 쿠폰 적용이 어렵습니다.</li>
                <li>매장의 사정에 의해 중단 또는 변경될 수 있습니다. </li>
                <li>쿠폰의 상품 및 상세조건(할인금액, 사용기간, 사용조건 등)은 변동될 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
