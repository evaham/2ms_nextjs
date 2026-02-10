'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import resolveImageSrc from "../lib/resolveImageSrc";

export default function CartList(){
    const [showbtn, setShowbtn] = useState(false);
    const router = useRouter();
    const [list, setList] = useState([]);
    const [allChecked, setAllChecked] = useState(true);
    const [selectedIds, setSelectedIds] = useState(new Set());

    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = window.localStorage.getItem("cartItems");
        const parsed = stored ? JSON.parse(stored) : [];
        setList(parsed);
        setSelectedIds(new Set(parsed.map((item) => item.id)));
        setAllChecked(parsed.length > 0);
    }, []);

    useEffect(() => {
        setAllChecked(list.length > 0 && selectedIds.size === list.length);
    }, [list, selectedIds]);

    const persistCart = (nextList) => {
        if (typeof window === "undefined") return;
        window.localStorage.setItem("cartItems", JSON.stringify(nextList));
        window.dispatchEvent(new Event("cartItemsUpdated"));
    };

    const handleToggleAll = (event) => {
        const checked = event.target.checked;
        setAllChecked(checked);
        setSelectedIds(checked ? new Set(list.map((item) => item.id)) : new Set());
    };

    const handleToggleItem = (id) => (event) => {
        const checked = event.target.checked;
        setSelectedIds((prev) => {
            const next = new Set(prev);
            if (checked) {
                next.add(id);
            } else {
                next.delete(id);
            }
            return next;
        });
    };

    const handleDeleteSelected = () => {
        if (selectedIds.size === 0) return;
        const nextList = list.filter((item) => !selectedIds.has(item.id));
        setList(nextList);
        persistCart(nextList);
        setSelectedIds(new Set());
        setAllChecked(false);
    };

    const handleDeleteOne = (id) => {
        const nextList = list.filter((item) => item.id !== id);
        setList(nextList);
        persistCart(nextList);
        setSelectedIds((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
        });
    };

    const handleQuantityChange = (id) => (event) => {
        const rawValue = Number(event.target.value);
        if (Number.isNaN(rawValue)) return;
        const nextQuantity = Math.min(999, Math.max(1, rawValue));
        const nextList = list.map((item) =>
            item.id === id ? { ...item, quantity: nextQuantity } : item
        );
        setList(nextList);
        persistCart(nextList);
    };

    const selectedItems = list.filter((item) => selectedIds.has(item.id));
    const selectedCount = selectedItems.length;
    const selectedTotal = selectedItems.reduce(
        (total, item) => total + (item.price || 0) * (item.quantity || 1),
        0
    );
    const minOrderAmount = 20000;
    const remainingAmount = Math.max(minOrderAmount - selectedTotal, 0);

    const handleProceedOrder = () => {
        if (typeof window === "undefined") return;
        window.localStorage.setItem("orderItems", JSON.stringify(selectedItems));
    };

    return (
        <>
            <div className='sample relative flex flex-col min-h-screen pb-20 bg-slate-50'>
                <div className="sticky top-0 z-50">
                    <div className="sample__name clearfix relative flex justify-center items-center h-16 bg-[#21409a] text-xl text-white font-bold"  
                        style={{ color: "", background: "" }}
                    >
                        <Link href={"/"} className="sample__back flex justify-center items-center absolute top-0 left-0 w-13 h-full text-white no-underline" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                        </Link>
                        <span className="js_fontsize" style={{ fontSize: "20px" }}>장바구니</span>
                    </div>
                </div>
                <div className="info-div flex justify-center items-center min-h-8 text-sm text-red-600 bg-red-50">
                    ⓘ 행사를 종료한 상품은 장바구니에서 자동 삭제합니다.
                </div>

                {list.length === 0 ? (
                    <div className="empty-div flex flex-col justify-center items-center min-h-60">
                        <div className='flex flex-col items-center my-20 text-xl text-center font-bold text-slate-400'>
                            장바구니가 비어 있습니다.
                        </div>
                    </div>
                ) : (
                    <>
                    <div className="control-div flex items-center min-h-10 px-2.5 bg-white">
                        <label className="flex gap-1 text-sm">
                            <input
                                id="checkboxall"
                                type="checkbox"
                                className="chkAll size-5"
                                checked={allChecked}
                                onChange={handleToggleAll}
                            />
                            전체 선택
                        </label>
                        <button
                            className="delete-all flex ml-auto px-1 border rounded text-sm items-center"
                            onClick={handleDeleteSelected}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                            선택 삭제
                        </button>
                    </div>
                    <div className="cart-list flex-1 flex flex-col mt-1.5 px-1 pb-2.5 gap-0.5">
                        {list.map((item, index) => (
                            <div key={index} className="cart-div relative flex gap-2 px-2.5 py-5 rounded  border border-slate-200 bg-white">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="chkChoose size-5"
                                        checked={selectedIds.has(item.id)}
                                        onChange={handleToggleItem(item.id)}
                                    />
                                </div>
                                <img src={resolveImageSrc(item.image)} alt={item.name} className="cartitem__img size-20 object-cover aspect-square" />
                                <div className="product-info flex-1 flex flex-col">
                                    <div className="product-name line-clamp-2 pr-8 leading-tight">{item.name}</div>
                                    <div className="product-price-div flex mt-auto">
                                        <div className="product-price">
                                            <span className="mr-1 text-lg font-bold text-slate-700">{item.price.toLocaleString()}</span>원
                                        </div>
                                        <div className="product-quantity relative flex justify-center w-18 h-8 px-1 border border-slate-500 rounded-lg ml-auto">
                                            <select
                                                className="quantity-num w-full h-full border-0 text-lg text-center"
                                                value={item.quantity || 1}
                                                onChange={handleQuantityChange(item.id)}
                                            >
                                                {Array.from({ length: 999 }, (_, index) => {
                                                    const value = index + 1;
                                                    return (
                                                        <option key={value} value={value}>
                                                            {value}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        className="cart-delete-btn absolute top-1.5 right-1.5"
                                        onClick={() => handleDeleteOne(item.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-btn-div sticky bottom-20 flex flex-col p-2.5 border-t bg-[#f7f7f7] border-black/10">
                        {selectedTotal === 0 ? (
                            <button
                                className="cart-btn disabled flex justify-center items-center h-13 rounded-lg text-lg text-white font-bold bg-rose-500
                                    [&.disabled]:text-slate-400 [&.disabled]:bg-slate-200
                                "
                                type="button"
                                disabled
                            >
                                주문할 상품이 없음
                            </button>
                        ) : selectedTotal < minOrderAmount ? (
                            <button
                                className="cart-btn disabled flex justify-center items-center h-13 rounded-lg text-lg text-white font-bold bg-rose-500
                                    [&.disabled]:text-slate-400 [&.disabled]:bg-slate-200
                                "
                                type="button"
                                disabled
                            >
                                {remainingAmount.toLocaleString()}원 이상 추가시 주문가능
                            </button>
                        ) : (
                            <Link
                                className="cart-btn flex justify-center items-center h-13 rounded-lg text-lg text-white font-bold bg-rose-500
                                    [&.disabled]:text-slate-400 [&.disabled]:bg-slate-200
                                "
                                href={"/orderswrite"}
                                onClick={handleProceedOrder}
                            >
                                총 <span>{selectedCount}</span>건 <span>{selectedTotal.toLocaleString()}</span>원 주문하기
                            </Link>
                        )}
                    </div>
                    </>
                )}
            </div>
        </>
    )
}