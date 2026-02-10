"use client";

import { useEffect, useState } from "react";

export default function ProductPopup({
  open,
  orderSystem,
  item,
  fallbackImage,
  onClose,
  onAddToCart,
}) {
  const [quantity, setQuantity] = useState(1);

  // 이미지 경로가 절대경로일 경우, basePath를 붙여주는 함수
  const resolveImageSrc = (src) =>
    src && src.startsWith("/")
      ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`
      : src;

  
  useEffect(() => {
    if (!open) return;
    setQuantity(item?.quantity ?? 1);
  }, [item, open]);

  if (!open) return null;

  const imageSrc = item?.image || fallbackImage || "";
  const name = item?.name || "";
  const priceText = typeof item?.price === "number" ? item.price.toLocaleString() : "";

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityChange = (event) => {
    const nextValue = Number(event.target.value);
    if (Number.isNaN(nextValue)) return;
    setQuantity(Math.max(1, nextValue));
  };

  return (
    <>
      {orderSystem ? (
        // 주문기능이 있을경우
        <div className="product-wrap flex justify-center items-center fixed inset-0 p-3 z-50">
          <div className="product-bg absolute inset-0 bg-black/40"></div>
          <div className="product-panel relative overflow-hidden flex flex-col w-full p-4 bg-white rounded-2xl z-50">
            <p className="product-tit mb-2 text-xl text-center font-bold leading-tight">상품정보</p>
            <div className="product-img overflow-hidden flex justify-center items-center h-55 -mx-4">
              <img className="w-auto h-6/5" src={resolveImageSrc(imageSrc)} alt={name} />
            </div>
            <div className="layer__goodsinfo flex flex-col">
              <p className="layer__goodstxt mx-auto my-2 text-sm">※수량을 선택해서 장바구니에 담아주세요</p>
              <div className="layer__quantity flex items-center relative w-33 h-10 mx-auto my-2 border border-slate-400 rounded-full bg-white">
                <button
                  className="layer__quantitybtn layer__quantitybtn--left flex justify-center items-center w-10 h-full cursor-pointer"
                  onClick={handleDecrease}
                  aria-label="수량 감소"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M200-440v-80h560v80H200Z"></path></svg>
                </button>
                <input
                  className="layer__quantitynum flex w-13 mx-auto text-lg text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <button
                  className="layer__quantitybtn quantity__btn--right flex justify-center items-center w-10 h-full cursor-pointer"
                  onClick={handleIncrease}
                  aria-label="수량 증가"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>
                </button>
              </div>
              <div className="layer__goodsdelprice previewEtc1 mt-2.5 mx-auto text-lg font-bold line-through" style={{ fontSize: "18px" }}>센터이미지</div>
              <div className="layer__goodsprice mx-auto text-3xl text-[#fa5252] font-bold tracking-tight">{priceText}</div>
              <div className="layer__goodsname mx-auto text-lg font-bold">{name}</div>
              <button
                className="layer__goodsbtn flex justify-center items-center w-50 h-11 mx-auto my-4 rounded-lg text-lg text-white font-bold bg-rose-500"
                onClick={() => onAddToCart?.(quantity)}
              >
                장바구니 담기
              </button>
            </div>
            <button onClick={onClose} className="layer__close absolute top-3 right-3 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#64748b"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
            </button>
          </div>
        </div>
      ) : (
        // 주문기능이 없을 경우
        <div className="layer__wrap flex justify-center items-center fixed inset-0 p-3 z-50">
          <div className="layer__bg absolute inset-0 bg-black/40"></div>
          <div className="layer__panel layer__panel--white overflow-hidden fixed flex top-[10%] left-0 flex-col w-full h-auto p-4 rounded-2xl z-50">
            <ul className="block py-2.5 px-0.5">
              <li className="p-6">
                <div className="goods__card overflow-hidden relative flex flex-col px-[2%] py-[6%] rounded-lg bg-white">
                  <div className="goods__imgbox overflow-hidden flex justify-center items-center h-55 mx-auto">
                    <img className="max-w-[75%] w-auto h-auto" src={resolveImageSrc(imageSrc)} alt={name} />
                  </div>
                  <div className="layer__goodsinfo flex flex-col mt-[8%]">
                    <div className="layer__goodsdelprice previewEtc1 mt-2.5 mx-auto text-lg font-bold line-through" style={{ fontSize: "18px" }}>센터이미지</div>
                    <div className="layer__goodsprice mx-auto text-4xl text-rose-500 font-bold tracking-tight">{priceText}</div>
                    <div className="layer__goodsname mx-auto text-lg font-bold">{name}</div>
                  </div>
                  <button onClick={onClose} className="layer__close absolute top-3 right-3 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#64748b"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
