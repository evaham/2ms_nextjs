'use client';
import Link from 'next/link';

export default function ordersdetail() {
    const list = [
        { id: 1, cp: true, coupon:[{cname:"[쿠폰] 1000할인"}, {cprice:"-1,000 원"}]},
        { id: 2, cp: true, coupon:[{cname:"[쿠폰] 1000할인"}, {cprice:"-1,000 원"}]},
        { id: 3, cp: false, coupon:[]},
    ]

    return (
        <div className='sample relative flex flex-col min-h-screen pb-20 bg-[#f7f7f7] border'>
            <div className='sticky top-0 z-50'>
                <div className="sample__name clearfix relative flex justify-center items-center h-16 bg-[#21409a] text-xl text-white font-bold" 
                    style={{ color: "", background: "", }}
                >
                    <Link href={"/"} className="sample__back flex justify-center items-center absolute top-0 left-0 w-13 h-full text-white no-underline" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                    </Link>
                    <span>주문내역 상세보기</span>
                </div>
            </div>
            <div className="detail-div flex flex-col gap-0.5 p-1">
                <div className="detail flex flex-col border border-black/10 rounded-sm bg-white">
                    <div className="detail-header flex items-center p-2.5 border-b border-black/10">
                        <div className="detail-tit text-lg font-bold">주문정보</div>
                    </div>
                    <div className="detail-body flex flex-col gap-0.5 p-2.5">
                        <table className='w-full border-collapse
                            [&_th,&_td]:border [&_th,&_td]:border-slate-200 [&_th,&_td]:p-1.5
                            [&_th]:bg-slate-50 [&_th]:text-left [&_th]:font-normal [&_th]:text-sm [&_th]:text-slate-500 [&_th]:leading-none
                        '>
                            <tbody>
                                <tr>
                                    <th className='w-23'>주문번호</th>
                                    <td>250419-22</td>
                                </tr>
                                <tr>
                                    <th>주문일</th>
                                    <td>2025.4.19 11:30</td>
                                </tr>
                                <tr>
                                    <th>주문상태</th>
                                    <td>주문접수(2025.4.19 11:30)</td>
                                </tr>
                                <tr>
                                    <th>주문자명</th>
                                    <td>고길동</td>
                                </tr>
                                <tr>
                                    <th>배송지</th>
                                    <td>인천시 부평구 부평대로 301 901호 투게더스</td>
                                </tr>
                                <tr>
                                    <th>요청사항</th>
                                    <td>벨을눌러주세요요</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex flex-col border border-black/10 rounded-sm bg-white">
                    <div className="detail-header flex items-center p-2.5 border-b border-black/10">
                        <div className="detail-tit text-lg font-bold">주문상품</div>
                    </div>
                    <div className="detail-body flex flex-col gap-0.5 p-2.5">
                        <ul className="product-list flex flex-col">
                            {list.map((item, index) => (
                                <li key={index} className='py-2.5 border-b border-black/10 last:border-0'>
                                    <div className="pdt-div grid grid-cols-[60px_1fr_60px] gap-x-2">
                                        <img className="pdt-img lazyload row-span-2 object-cover w-15 h-15 border rounded-sm border-black/10" src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" width={80} height={80} alt="주문상품" />
                                        <div className="pdt-name leading-tight">샤인머스캣 18브릭스 이상 2입</div>
                                        <div className="pdt-amount text-right">999 개</div>
                                        <div className="pdt-price col-span-2 font-bold text-right">900,000 원</div>
                                    </div>
                                    {item.cp && (
                                        <div className="cp-div relative flex items-center gap-1 mt-2 px-0.5 ml-15 rounded-sm bg-slate-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className='absolute -left-5' width="16" height="16" viewBox="0 0 33 32" fill="none">
                                                <path xmlns="http://www.w3.org/2000/svg" d="M16.75 0V16H32.75" stroke="#666" strokeWidth="1" />
                                            </svg>
                                            <span className="cp-name">[쿠폰] 1000할인</span>
                                            <span className="cp-price ml-auto font-bold text-[#dc2626]">-1,000 원</span>
                                        </div>
                                    )}

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col border border-black/10 rounded-sm bg-white">
                    <div className="detail-header flex items-center p-2.5 border-b border-black/10">
                        <div className="detail-tit text-lg font-bold">결제정보</div>
                    </div>
                    <div className="detail-body flex flex-col gap-0.5 p-2.5">
                        <ul className="money-list flex flex-col [&_li]:flex [&_li]:items-center [&_li]:p-1.5">
                            <li>
                                <div className="price-title">상품합계</div>
                                <div className="price-value ml-auto font-bold">32,000 원</div>
                            </li>
                            <li>
                                <div className="price-title">쿠폰할인</div>
                                <div className="price-value ml-auto font-bold">-2,000 원</div>
                            </li>
                            <li>
                                <div className="price-title">배달비</div>
                                <div className="price-value ml-auto font-bold">3,000 원</div>
                            </li>
                            <li className="detail__moneytotal rounded bg-slate-100 font-bold">
                                <div className="price-title">총 주문금액</div>
                                <div className="price-value ml-auto font-bold">34,000 원</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col border border-black/10 rounded-sm bg-white'>
                    <div className="detail-header flex items-center p-2.5 border-b border-black/10">
                        <div className='detail-tit text-lg font-bold'>결제방식</div>
                    </div>
                    <div className="detail-body flex flex-col gap-0.5 p-2.5">
                        <div className="pay-info flex flex-col gap-2 mb-2">
                            <div className='pay-title flex justify-center items-center h-20 rounded text-xl text-white font-bold bg-rose-500'>계좌이체</div>
                            <div className="pay-text p-2.5 bg-slate-100">
                                기업은행 1234-05-67890 투게더스
                            </div>
                        </div>
                        <div className="detail-info p-2.5 bg-slate-100">
                            <pre className="whitespace-pre-line font-sans leading-tight">※ 평일 오후 2시전에 주문시, 오후5시 부터 배송기사가 출발합니다.</pre>
                        </div>
                    </div>
                </div>
                <Link href={"/orderslist"} className="detail-btn flex items-center justify-center w-35 h-10 mt-10 mb-20 mx-auto border border-slate-400 rounded text-sm font-bold bg-white no-underline">목록으로 이동</Link>
            </div>
        </div>
    )
}