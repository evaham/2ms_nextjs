
'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import resolveImageSrc from "../lib/resolveImageSrc";

export default function OrdersWrite() {
    const [activeTab, setActiveTab] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const [isAgreementChecked, setIsAgreementChecked] = useState(false);
    const [ordererName, setOrdererName] = useState("");
    const [ordererPhone, setOrdererPhone] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [requestNote, setRequestNote] = useState("");

    const [orderItems, setOrderItems] = useState([]);
    const [downloadedCoupons, setDownloadedCoupons] = useState([]);
    const [appliedCouponKeys, setAppliedCouponKeys] = useState(new Set());
    const [orderItemsLoaded, setOrderItemsLoaded] = useState(false);
    const [couponsLoaded, setCouponsLoaded] = useState(false);
    const didInitCouponsRef = useRef(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = window.localStorage.getItem("orderItems");
        const parsed = stored ? JSON.parse(stored) : [];
        setOrderItems(parsed);
        setOrderItemsLoaded(true);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = window.localStorage.getItem("downloadedCoupons");
        const parsed = stored ? JSON.parse(stored) : [];
        setDownloadedCoupons(parsed);
        setCouponsLoaded(true);
    }, []);

    const normalizeBarcode = (value) => (value || "").replace(/\s/g, "");
    const getItemKey = (item) => item.cartKey || item.barcode || item.id;
    const findCouponForItem = (item) => {
        const itemBarcode = normalizeBarcode(item.barcode);
        if (!itemBarcode) return null;
        return downloadedCoupons.find((coupon) => normalizeBarcode(coupon.barcode) === itemBarcode) || null;
    };

    useEffect(() => {
        if (!orderItemsLoaded || !couponsLoaded || didInitCouponsRef.current) return;
        const nextApplied = new Set();
        orderItems.forEach((item) => {
            const matchedCoupon = findCouponForItem(item);
            if (matchedCoupon) {
                nextApplied.add(getItemKey(item));
            }
        });
        setAppliedCouponKeys(nextApplied);
        didInitCouponsRef.current = true;
    }, [orderItemsLoaded, couponsLoaded, orderItems, downloadedCoupons]);

    const orderSummary = orderItems.reduce(
        (summary, item) => {
            const quantity = item.quantity || 1;
            const itemSubtotal = (item.price || 0) * quantity;
            const matchedCoupon = findCouponForItem(item);
            const itemDiscount = matchedCoupon && appliedCouponKeys.has(getItemKey(item))
                ? matchedCoupon.discount || 0
                : 0;
            return {
                subtotal: summary.subtotal + itemSubtotal,
                discount: summary.discount + itemDiscount,
            };
        },
        { subtotal: 0, discount: 0 }
    );

    const deliveryFee = orderItems.length > 0 ? 3000 : 0;
    const totalPrice = Math.max(orderSummary.subtotal - orderSummary.discount + deliveryFee, 0);
    const orderNumber = new Date().toISOString().slice(2, 10).replace(/-/g, "") + "-" + String(orderItems.length).padStart(2, "0");
    const paymentLabel = activeTab === 1
        ? "만나서 현금 결제"
        : activeTab === 2
            ? "만나서 카드 결제"
            : "계좌이체";

    const buildOrderPayload = () => {
        const createdAt = new Date().toISOString();
        const items = orderItems.map((item) => {
            const matchedCoupon = findCouponForItem(item);
            const applied = matchedCoupon && appliedCouponKeys.has(getItemKey(item));
            return {
                ...item,
                appliedCoupon: applied
                    ? {
                        name: matchedCoupon.name,
                        discount: matchedCoupon.discount || 0,
                        barcode: matchedCoupon.barcode || "",
                    }
                    : null,
            };
        });

        return {
            orderNumber,
            createdAt,
            orderer: {
                name: ordererName,
                phone: ordererPhone,
            },
            address: {
                line1: addressLine1,
                line2: addressLine2,
            },
            requestNote,
            payment: {
                method: activeTab,
                label: paymentLabel,
            },
            summary: {
                subtotal: orderSummary.subtotal,
                discount: orderSummary.discount,
                deliveryFee,
                total: totalPrice,
            },
            items,
        };
    };

    const handleCompleteOrder = () => {
        if (typeof window === "undefined") return;
        const nextOrder = buildOrderPayload();
        const stored = window.localStorage.getItem("orderHistory");
        const parsed = stored ? JSON.parse(stored) : [];
        const nextHistory = Array.isArray(parsed) ? [nextOrder, ...parsed] : [nextOrder];
        window.localStorage.setItem("orderHistory", JSON.stringify(nextHistory));
        setShowPopup(true);
    };
    return (
        <>
            <div className='sample relative flex flex-col min-h-screen pb-20 bg-slate-50'>
                <div className='sticky top-0 z-50'>
                    <div className="sample__name clearfix relative flex justify-center items-center h-16 bg-[#21409a] text-xl text-white font-bold"
                        style={{ color: "", background: "", }}
                    >
                        <Link href={"/"} className="sample__back flex justify-center items-center absolute top-0 left-0 w-13 h-full text-white no-underline" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                        </Link>
                        <span>주문서 작성</span>
                    </div>
                </div>
                <div className="write-div flex flex-col gap-0.5 p-1">
                    <div className="write flex flex-col border border-black/10 rounded-sm bg-white">
                        <div className="write-header flex items-center p-2.5 border-b border-black/10">
                            <div className="write-tit text-lg font-bold">주문정보</div>
                        </div>
                        <div className="write-body flex flex-col gap-0.5 p-2.5">
                            <table className="write-tbl w-full border-collapse
                                [&_th,&_td]:border [&_th,&_td]:border-slate-200 [&_th,&_td]:p-1.5
                                [&_th]:bg-slate-50 [&_th]:text-left [&_th]:font-normal [&_th]:text-sm [&_th]:text-slate-500 [&_th]:leading-none
                            ">
                                <tbody>
                                    <tr>
                                        <th className="w-23">주문자명<br /><span>(6/20)</span></th>
                                        <td colSpan={2}>
                                            <input
                                                type="text"
                                                className="write-input user-name input-require flex items-center w-full h-9 px-2.5 bg-slate-50 border rounded border-slate-300"
                                                placeholder="주문자명을 입력하세요"
                                                value={ordererName}
                                                onChange={(event) => setOrdererName(event.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>휴대폰<br /><span>(변경불가)</span></th>
                                        <td colSpan={2}>
                                            <input
                                                type="text"
                                                className="write-input user-phone flex items-center w-full h-9 px-2.5 bg-slate-50 border rounded border-slate-300"
                                                placeholder="000-0000-0000"
                                                value={ordererPhone}
                                                onChange={(event) => setOrdererPhone(event.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th rowSpan="3">주소*</th>
                                        <td>
                                            <input
                                                type="text"
                                                className="write-input input-require flex items-center w-full h-9 px-2.5 bg-slate-50 border rounded border-slate-300"
                                                readOnly
                                                value={addressLine1}
                                            />
                                        </td>
                                        <td><button className="write__btn flex justify-center items-center w-26 h-9 border border-slate-500 text-sm font-bold">우편번호검색</button></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            <input
                                                type="text"
                                                id="address"
                                                className="write-input input-require flex items-center w-full h-9 px-2.5 bg-slate-50 border rounded border-slate-300"
                                                readOnly
                                                value={addressLine1}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            <input
                                                type="text"
                                                id="extraAddress"
                                                className="write-input input-require flex items-center w-full h-9 px-2.5 bg-slate-50 border rounded border-slate-300"
                                                placeholder="상세주소를 입력하세요"
                                                value={addressLine2}
                                                onChange={(event) => setAddressLine2(event.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>요청사항<br />(<span>13</span>/200)</th>
                                        <td colSpan={2}>
                                            <textarea
                                                id="11"
                                                className="write-textarea flex w-full h-25 px-2.5 py-2 bg-slate-50 border rounded border-slate-300 leading-tight"
                                                value={requestNote}
                                                onChange={(event) => setRequestNote(event.target.value)}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="write flex flex-col border border-black/10 rounded-sm bg-white">
                        <div className="write-header flex items-center p-2.5 border-b border-black/10">
                            <div className="write-tit flex flex-col text-lg font-bold">주문상품
                                <span className="text-sm font-normal leading-tight">※ 내려받은 할인쿠폰을 자동적용합니다. (오프라인 전용 한정쿠폰 제외)</span>
                            </div>
                        </div>
                        <div className="write-body flex flex-col gap-0.5 p-2.5">
                            <ul className="write-list flex flex-col">
                                {orderItems.length === 0 ? (
                                    <li className="py-2.5 text-center text-sm text-slate-500">주문 상품이 없습니다.</li>
                                ) : (
                                    orderItems.map((item, index) => (
                                        <li key={index} className="py-2.5 border-b border-black/10 last:border-0">
                                            {(() => {
                                                const matchedCoupon = findCouponForItem(item);
                                                return (
                                                    <>
                                            <div className="write-listinfo grid grid-cols-[60px_1fr_60px] gap-x-2">
                                                <img
                                                    className="write__img row-span-2 object-cover w-15 h-15 border rounded-sm border-black/10"
                                                    src={resolveImageSrc(item.image)}
                                                    alt={item.name}
                                                />
                                                <div className="write-name leading-tight">{item.name}</div>
                                                <div className="write-amount text-right">{item.quantity || 1} 개</div>
                                                <div className="write-price col-span-2 font-bold text-right">
                                                    {(item.price * (item.quantity || 1)).toLocaleString()} 원
                                                </div>
                                            </div>
                                            {matchedCoupon && (
                                                <label className="write-coupon relative flex items-center gap-1 mt-2 px-0.5 ml-15 rounded-sm bg-slate-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute -left-5" width="16" height="16" viewBox="0 0 33 32" fill="none">
                                                        <path xmlns="http://www.w3.org/2000/svg" d="M16.75 0V16H32.75" stroke="#666" strokeWidth="1" />
                                                    </svg>
                                                    <input
                                                        type="checkbox"
                                                        className="size-4.5"
                                                        checked={appliedCouponKeys.has(getItemKey(item))}
                                                        onChange={(event) => {
                                                            const checked = event.target.checked;
                                                            setAppliedCouponKeys((prev) => {
                                                                const next = new Set(prev);
                                                                const itemKey = getItemKey(item);
                                                                if (checked) {
                                                                    next.add(itemKey);
                                                                } else {
                                                                    next.delete(itemKey);
                                                                }
                                                                return next;
                                                            });
                                                        }}
                                                    />
                                                    <span className="write__cname">[쿠폰] {matchedCoupon.name}</span>
                                                    <span className="write__cprice ml-auto font-bold text-[#dc2626]">-{matchedCoupon.discount.toLocaleString()} 원</span>
                                                </label>
                                            )}
                                                    </>
                                                );
                                            })()}
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="write flex flex-col border border-black/10 rounded-sm bg-white">
                        <div className="write-header flex items-center p-2.5 border-b border-black/10">
                            <div className="write-tit text-lg font-bold">결제정보</div>
                        </div>
                        <div className="write-body flex flex-col gap-0.5 p-2.5">
                            <ul className="write__moneylist flex flex-col [&_li]:flex [&_li]:items-center [&_li]:p-1.5">
                                <li>
                                    <div className="write__moneyitem">상품합계</div>
                                    <div className="write__moneyvalue ml-auto font-bold">{orderSummary.subtotal.toLocaleString()} 원</div>
                                </li>
                                <li>
                                    <div className="write__moneyitem">쿠폰할인</div>
                                    <div className="write__moneyvalue ml-auto font-bold">-{orderSummary.discount.toLocaleString()} 원</div>
                                </li>
                                <li>
                                    <div className="write__moneyitem">배달비</div>
                                    <div className="write__moneyvalue ml-auto font-bold">{deliveryFee.toLocaleString()} 원</div>
                                </li>
                                <li className="write__moneytotal rounded bg-slate-100 font-bold">
                                    <div className="write__moneyitem">총 주문금액</div>
                                    <div className="write__moneyvalue ml-auto text-xl">{totalPrice.toLocaleString()} 원</div>
                                </li>
                            </ul>
                            <span className="text-sm leading-tight">※ 추가 주문상품 및 매장의 별도 할인 여부에 따라 실 결제 금액이 변경될 수 있습니다.</span>
                        </div>
                    </div>
                    <div className="write flex flex-col border border-black/10 rounded-sm bg-white">
                        <div className="write-header flex items-center p-2.5 border-b border-black/10">
                            <div className="write-tit text-lg font-bold">결제수단</div>
                        </div>
                        <div className="write-body flex flex-col gap-0.5 p-2.5">
                            <div className="write-paygroup flex gap-2 mb-2">
                                <button
                                    type="button"
                                    className={`write-paybtn flex-1 flex flex-col items-center justify-center h-20 text-lg font-bold leading-tight border rounded border-black/10
                                        [&.active]:bg-rose-500 [&.active]:text-white
                                        ${activeTab === 1 ? 'active' : ''}`
                                    }
                                    onClick={() => setActiveTab(1)}
                                    aria-pressed={activeTab === 1}
                                >
                                    만나서<br />현금 결제
                                </button>
                                <button
                                    type="button"
                                    className={`write-paybtn flex-1 flex flex-col items-center justify-center h-20 text-lg font-bold leading-tight border rounded border-black/10
                                        [&.active]:bg-rose-500 [&.active]:text-white
                                        ${activeTab === 2 ? 'active' : ''}`}
                                    onClick={() => setActiveTab(2)}
                                    aria-pressed={activeTab === 2}
                                >
                                    만나서<br />카드 결제
                                </button>
                                <button
                                    type="button"
                                    className={`write-paybtn flex-1 flex flex-col items-center justify-center h-20 text-lg font-bold leading-tight border rounded border-black/10
                                        [&.active]:bg-rose-500 [&.active]:text-white
                                        ${activeTab === 3 ? 'active' : ''}`
                                    }
                                    onClick={() => setActiveTab(3)}
                                    aria-pressed={activeTab === 3}
                                >
                                    계좌이체
                                </button>
                            </div>
                            <div className="write-info p-2.5 bg-slate-100">
                                {activeTab === 1 && (
                                    <div className="write-paytxt text-center">배송기사에게 현금으로 결제합니다.</div>
                                )}
                                {activeTab === 2 && (
                                    <div className="write-paytxt text-center">배송기사에게 카드로 결제합니다.</div>
                                )}
                                {activeTab === 3 && (
                                    <div className="write-paytxt text-center">기업은행 1234-05-67890 투게더스</div>
                                )}
                            </div>
                            <div className="write-info p-2.5 bg-slate-100">
                                <pre className="whitespace-pre-line font-sans leading-tight">※ 평일 오후 2시전에 주문시, 오후5시 부터 배송기사가 출발합니다.</pre>
                            </div>
                        </div>
                    </div>
                    <div className="write-foot flex flex-col gap-2 p-2.5 border-t border-black/10 bg-slate-50 ">
                        <label className="flex items-center text-sm">
                            <input
                                type="checkbox"
                                className="oreder-check size-4.5 mr-2"
                                checked={isAgreementChecked}
                                onChange={(event) => setIsAgreementChecked(event.target.checked)}
                            />
                            필수 주문정보를 확인했으며, 주문 진행에 동의합니다.
                        </label>

                        <button
                            className={`complete-btn flex justify-center items-center h-12.5 rounded text-lg text-white font-bold bg-rose-500
                                [&.disabled]:text-slate-400 [&.disabled]:bg-slate-200
                                ${isAgreementChecked ? "" : "disabled"}`}
                            disabled={!isAgreementChecked}
                            onClick={handleCompleteOrder}
                        >
                            주문완료
                        </button>

                        {/* <Link href={'/orderslist'} className="write__orederbtn">주문완료</Link> */}
                    </div>
                </div>

                {/* 레이어 팝업 안내창 */}
                {showPopup && (
                    <div className="order-wrap fixed inset-0 flex justify-center items-center p-3 z-50 ">
                        <div className="order-bg absolute inset-0 bg-black/40"></div>
                        <div className="order-panel relative overflow-hidden flex flex-col w-full p-4 rounded-2xl bg-slate-100 z-50 ">
                            <p className="mb-2 text-xl font-bold text-center leading-tight">주문이 완료되었습니다.</p>
                            <div className="order__div overflow-y-auto flex flex-col max-h-96 rounded-lg bg-white p-4">
                                <table className="w-full border-collapse
                                    [&_th,&_td]:border [&_th,&_td]:border-slate-200 [&_th,&_td]:p-1.5 
                                    [&_th]:bg-slate-50 [&_th]:text-left [&_th]:font-normal [&_th]:text-sm [&_th]:text-slate-500 [&_th]:leading-none
                                ">
                                    <tbody>
                                        <tr>
                                            <th className="w-22">주문번호</th>
                                            <td>{orderNumber}</td>
                                        </tr>
                                        <tr>
                                            <th>주문자명</th>
                                            <td>{ordererName || "-"}</td>
                                        </tr>
                                        <tr>
                                            <th>배송지</th>
                                            <td>{(addressLine1 || "") + (addressLine2 ? ` ${addressLine2}` : "") || "-"}</td>
                                        </tr>
                                        <tr>
                                            <th>총 주문금액</th>
                                            <td>{totalPrice.toLocaleString()} 원</td>
                                        </tr>
                                        <tr>
                                            <th>결제방식</th>
                                            <td>{paymentLabel}</td>
                                        </tr>
                                        <tr>
                                            <th>요청사항</th>
                                            <td>{requestNote || "-"}</td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                            <div className="order-btn flex items-center justify-center gap-2 mt-4">
                                <Link href={'/orderslist'} className="flex items-center justify-center w-35 h-10 border border-slate-400 rounded font-bold bg-white no-underline">주문내역</Link>
                                <Link href={'/'} className="flex items-center justify-center w-35 h-10 border border-slate-400 rounded font-bold bg-white no-underline">전단으로 이동</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}