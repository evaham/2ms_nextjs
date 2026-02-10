'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import resolveImageSrc from '../lib/resolveImageSrc';

export default function OrdersList() {
    const list = [
        { id: 1, name: "자연그린 김밥단무김밥", orders: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 2, name: "자연그린 김밥단무지2", orders: false, price: 2551238, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", orders: false, price: 2512358, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 4, name: "자연그린 김밥단무지..외4", orders: true, price: 252258, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 5, name: "자연그린 김밥단무지4", orders: true, price: 253358, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 6, name: "자연그린 김밥단무지4", orders: true, price: 244558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 7, name: "자연그린 김밥단무지4", orders: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 8, name: "자연그린 김밥단무지4", orders: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" }
    ];
    const router = useRouter();
    const [showData, setShowData] = useState();
    const [downloadedCoupons, setDownloadedCoupons] = useState([]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const stored = window.localStorage.getItem('downloadedCoupons');
        const parsed = stored ? JSON.parse(stored) : [];
        setDownloadedCoupons(parsed);
    }, []);

    return (
        <>
            <div className='sample relative flex flex-col min-h-screen pb-20 bg-slate-50'>
                <div className='sticky top-0 z-50'>
                    <div className="sample__name clearfix relative flex justify-center items-center h-16 bg-[#21409a] text-xl text-white font-bold" 
                        style={{ color: "", background: "", }}
                    >
                        <Link href={'/'} className="sample__back flex justify-center items-center absolute top-0 left-0 w-13 h-full text-white no-underline" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                        </Link>
                        <span>주문내역</span>
                    </div>
                </div>
                <div className="info-div flex justify-center items-center min-h-8 text-sm text-red-600 bg-[#fee2e2]">
                    ※주문내역은 6개월 간 보관합니다.
                </div>


                {downloadedCoupons.length > 0 && (
                    <div className="mx-0.5 mt-0.5 mb-2 rounded-sm border border-slate-200 bg-white">
                        <div className="px-3 py-2.5 border-b border-slate-200 font-bold">다운받은 쿠폰</div>
                        <ul className="flex flex-col">
                            {downloadedCoupons.map((coupon, index) => (
                                <li key={index} className="flex items-center gap-2 px-3 py-2.5 border-b border-slate-200 last:border-0">
                                    <img
                                        className="size-12 rounded border border-slate-200 object-cover"
                                        src={resolveImageSrc(coupon.image)}
                                        alt={coupon.name}
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-bold">{coupon.name}</span>
                                        <span className="text-sm text-slate-500">{coupon.discount}원 할인</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {!showData ? (
                    <div className="empty-div flex flex-col justify-center items-center h-60 gap-4">
                        <div className='flex flex-col my-20 text-xl text-gray-500 font-bold'>
                            주문내역이 없습니다.
                        </div>
                        <button className='border' onClick={()=>setShowData(true)}>테스트용 화면전환</button>
                    </div>
                ) : (
                    <ul className="mt-0.5 px-0.5 pb-2.5 flex flex-col gap-0.5">
                        {list.map((item, index) => (
                            <li key={index}>
                                <div onClick={() => router.push('/ordersdetail')} 
                                    className="order-Div relative flex h-21 px-3 rounded-sm  border border-slate-200 bg-white items-center"
                                >
                                    <div className='ordersitem__group'>
                                        <div className="ordersitem__time text-sm">25.4.19 11:30 주문</div>
                                        <div className="ordersitem__name">{item.name}</div>
                                    </div>
                                    <div className="ordersitem__price ml-auto font-bold">{item.price.toLocaleString()} 원</div>
                                    <div className='ordersitem__icon ml-1'><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#6f6f6f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}