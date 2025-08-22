
'use client'

import Link from "next/link";
import Image from "next/image";

export default function OrdersWrite() {
    return (
        <>
            <style jsx>{`
                

                `}
            </style>
            <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
                <div className="sample__name clearfix" style={{ color: "", background: "", }}>
                    <Link href="/" className="sample__back" >
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
                                    <td colSpan={2}><input type="text" className="write__input" /></td>
                                </tr>
                                <tr>
                                    <th>휴대폰<br /><span>(변경불가)</span></th>
                                    <td colSpan={2}><input type="text" className="write__input" /></td>
                                </tr>
                                <tr>
                                    <th rowSpan="3">주소*</th>
                                    <td><input type="text" className="write__input" /></td>
                                    <td><button className="write__btn">우편번호검색</button></td>
                                </tr>
                                <tr>
                                    <td colSpan={3}><input type="text" className="write__input" /></td>
                                </tr>
                                <tr>
                                    <td colSpan={3}><input type="text" className="write__input" /></td>
                                </tr>

                                <tr>
                                    <th>요청사항<br />(13/100)</th>
                                    <td colSpan={2}>
                                        <textarea className="write__input"></textarea>
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
                                <div className="write__coupon">
                                    <input type="checkbox" />
                                    <span className="write__cname">[쿠폰] 1000할인</span>
                                    <span className="write__cprice">-1,000</span>
                                </div>
                            </li>
                            <li>
                                <div className="write__infogroup">
                                    <Image className="write__img" src="/img/123.jpg" width={80} height={80} alt="주문상품" />
                                    <div className="write__name">샤인머스캣 18브릭스 이상 2입</div>
                                    <div className="write__amount">999개</div>
                                    <div className="write__price">900,000</div>
                                </div>
                                <div className="write__coupon">
                                    <input type="checkbox" />
                                    <span className="write__cname">[쿠폰] 1000할인</span>
                                    <span className="write__cprice">-1,000</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="write">
                    <div className="write__header">
                        <div className="write__tit">결제정보</div>
                    </div>
                    <div className="write__body">
                        <table className="write__tbl2">
                            <tbody>
                                <tr>
                                    <th>상품합계</th>
                                    <td className="write__pay">32,000 원</td>
                                </tr>
                                <tr>
                                    <th>총 할인금액</th>
                                    <td className="write__pay">-1,000 원</td>
                                </tr>
                                <tr>
                                    <th>배달비</th>
                                    <td className="write__pay">3,000 원</td>
                                </tr>
                                <tr>
                                    <th className="write__bg--gray">총 주문금액</th>
                                    <td className="write__pay write__bg--gray">3,4000 원</td>
                                </tr>
                                <tr>
                                    <th>결제방식</th>
                                    <td>
                                        <div className="write__radiogroup">
                                            <label><input type="radio" name="type1" />계좌이체</label>
                                            <p>기업은행 투게더마트 1234-45-67890</p>
                                            <label><input type="radio" name="type1" />만나서 카드</label>
                                            <label><input type="radio" name="type1" />만나서 현금</label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="write__bg--gray">
                                        ※ 평일 오후 2시전에 주문시, 오후5시 부터 배송기사가 출발합니다.<br />
                                        ※ 주문관련 문의는 032-123-4567로 문의주세요.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="orderswrite__btngroup">
                    <label><input type="checkbox" /> 필수 주문정보를 확인했으며, 주문 진행에 동의합니다.</label>
                    <Link href={'/orderslist'} className="orderswrite__btn">주문완료</Link>
                </div>
            </div>
        </>

    )
}