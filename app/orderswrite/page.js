
'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function OrdersWrite() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
                <div className="sample__name clearfix" style={{ color: "", background: "", }}>
                    <Link href={"/"} className="sample__back" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                    </Link>
                    <span className="js_fontsize" style={{ fontSize: "20px" }}>주문서 작성</span>
                </div>
            </div>
            <div className="orderswrite">
                <div className="write">
                    <div className="write__header">
                        <div className="write__tit">주문정보</div>
                    </div>
                    <div className="write__body">
                        <table className="write__tbl">
                            <tbody>
                                <tr>
                                    <th>주문자명<br /><span>(6/10)</span></th>
                                    <td colSpan={2}><input type="text" className="write__input" placeholder="고길동" /></td>
                                </tr>
                                <tr>
                                    <th>휴대폰<br /><span>(변경불가)</span></th>
                                    <td colSpan={2}><input type="text" className="write__input" placeholder="" /></td>
                                </tr>
                                <tr>
                                    <th rowSpan="3">주소*</th>
                                    <td><input type="text" className="write__input" disabled /></td>
                                    <td><button className="write__btn">우편번호검색</button></td>
                                </tr>
                                <tr>
                                    <td colSpan={3}><input type="text" className="write__input" disabled /></td>
                                </tr>
                                <tr>
                                    <td colSpan={3}><input type="text" className="write__input" placeholder="상세주소를 입력하세요" /></td>
                                </tr>
                                <tr>
                                    <th>요청사항<br />(13/100)</th>
                                    <td colSpan={2}>
                                        <textarea id="11" className="write__textarea"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="write">
                    <div className="write__header">
                        <div className="write__tit">주문상품</div>
                    </div>
                    <div className="write__body">
                        <ul className="write__list">
                            <li>
                                <div className="write__infogroup">
                                    <Image className="write__img" src="/img/123.jpg" width={60} height={60} alt="주문상품" />
                                    <div className="write__name">샤인머스캣 18브릭스 이상 2입</div>
                                    <div className="write__amount">999개</div>
                                    <div className="write__price">900,000</div>
                                </div>
                                <label className="write__coupon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 32" fill="none">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M16.75 0V16H32.75" stroke="#666" strokeWidth="1" />
                                    </svg>
                                    <input type="checkbox" style={{ zoom: 1.3 }} />
                                    <span className="write__cname">[쿠폰] 1000할인</span>
                                    <span className="write__cprice">-1,000</span>
                                </label>
                            </li>
                            <li>
                                <div className="write__infogroup">
                                    <Image className="write__img" src="/img/123.jpg" width={80} height={80} alt="주문상품" />
                                    <div className="write__name">샤인머스캣 18브릭스 이상 2입</div>
                                    <div className="write__amount">999개</div>
                                    <div className="write__price">900,000</div>
                                </div>
                                <label className="write__coupon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 32" fill="none">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M16.75 0V16H32.75" stroke="#666" strokeWidth="1" />
                                    </svg>
                                    <input type="checkbox" style={{ zoom: 1.3 }} />
                                    <span className="write__cname">[쿠폰] 1000할인</span>
                                    <span className="write__cprice">-1,000</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="write">
                    <div className="write__header">
                        <div className="write__tit">결제정보</div>
                    </div>
                    <div className="write__body">
                        <ul className="write__moneylist">
                            <li>
                                <div className="write__moneyitem">상품합계</div>
                                <div className="write__moneyvalue">32,000 원</div>
                            </li>
                            <li>
                                <div className="write__moneyitem">쿠폰할인</div>
                                <div className="write__moneyvalue">-1,000 원</div>
                            </li>
                            <li>
                                <div className="write__moneyitem">배달비</div>
                                <div className="write__moneyvalue">3,000 원</div>
                            </li>
                            <li className="write__moneytotal">
                                <div className="write__moneyitem">총 주문금액</div>
                                <div className="write__moneyvalue">34,000 원</div>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="write">
                    <div className="write__header">
                        <div className="write__tit">결제수단</div>
                    </div>
                    <div className="write__body">
                        <div className="write__paygroup">
                            <button
                                type="button"
                                className={`write__paybtn ${activeTab === 1 ? 'active' : ''}`}
                                onClick={() => setActiveTab(1)}
                                aria-pressed={activeTab === 1}
                            >
                                만나서<br />현금 결제
                            </button>
                            <button
                                type="button"
                                className={`write__paybtn ${activeTab === 2 ? 'active' : ''}`}
                                onClick={() => setActiveTab(2)}
                                aria-pressed={activeTab === 2}
                            >
                                만나서<br />카드 결제
                            </button>
                            <button
                                type="button"
                                className={`write__paybtn ${activeTab === 3 ? 'active' : ''}`}
                                onClick={() => setActiveTab(3)}
                                aria-pressed={activeTab === 3}
                            >
                                계좌이체
                            </button>
                        </div>
                        <div className="write__payinfo">
                            {activeTab === 1 && (
                                <div className="write__paytxt">배송기사에게 현금으로 결제합니다.</div>
                            )}
                            {activeTab === 2 && (
                                <div className="write__paytxt">배송기사에게 카드로 결제합니다.</div>
                            )}
                            {activeTab === 3 && (
                                <div className="write__paytxt">기업은행 1234-05-67890 투게더스</div>
                            )}
                        </div>
                        <div className="write__info">
                            ※ 평일 오후 2시전에 주문시, 오후5시 부터 배송기사가 출발합니다.<br />
                            ※ 주문관련 문의는 032-123-4567로 문의주세요.
                        </div>



                    </div>
                </div>
                <div className="write__btngroup">
                    <label>
                        <input type="checkbox" style={{zoom:1.3}} /> 필수 주문정보를 확인했으며, 주문 진행에 동의합니다.
                    </label>
                    <Link href={'/orderslist'} className="write__orederbtn">주문완료</Link>
                </div>
            </div>
        </>
    )
}