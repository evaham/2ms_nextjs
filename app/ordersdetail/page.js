'use client';
import Link from 'next/link';

export default function ordersdetail() {

    return (
        <>
            <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
                <div className="sample__name clearfix" style={{ color: "", background: "", }}>
                    <a href="/" className="sample__back" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                    </a>
                    <span className="js_fontsize" style={{ fontSize: "20px" }}>주문내역 상세보기</span>
                </div>
            </div>
            <div className="ordersdetail">
                <div className="detail">
                    <div className="detail__header">
                        <div className="detail__tit">주문정보</div>
                    </div>
                    <div className="detail__body">
                        <table className="detail__tbl">
                            <tbody>
                                <tr>
                                    <th>주문번호</th>
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
                <div className="detail">
                    <div className="detail__header">
                        <div className="detail__tit">주문상품</div>
                    </div>
                    <div className="detail__body">
                        <ul className="detail__list">
                            <li>
                                <div className="detail__infogroup">
                                    <img className="detail__img" src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" width={80} height={80} alt="주문상품" />
                                    <div className="detail__name">샤인머스캣 18브릭스 이상 2입</div>
                                    <div className="detail__amount">999개</div>
                                    <div className="detail__price">900,000</div>
                                </div>
                                <div className="detail__coupon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 32" fill="none">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M16.75 0V16H32.75" stroke="#666" strokeWidth="1" />
                                    </svg>
                                    <span className="detail__cname">[쿠폰] 1000할인</span>
                                    <span className="detail__cprice">-1,000</span>
                                </div>
                            </li>
                            <li>
                                <div className="detail__infogroup">
                                    <img className="detail__img" src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" width={80} height={80} alt="주문상품" />
                                    <div className="detail__name">샤인머스캣 18브릭스 이상 2입</div>
                                    <div className="detail__amount">999개</div>
                                    <div className="detail__price">900,000</div>
                                </div>
                                <div className="detail__coupon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 32" fill="none">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M16.75 0V16H32.75" stroke="#666" strokeWidth="1" />
                                    </svg>
                                    <span className="detail__cname">[쿠폰] 1000할인</span>
                                    <span className="detail__cprice">-1,000</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="detail">
                    <div className="detail__header">
                        <div className="detail__tit">결제정보</div>
                    </div>
                    <div className="detail__body">
                        <table className="detail__tbl2">
                            <tbody>
                                <tr>
                                    <th>상품합계</th>
                                    <td className="detail__pay">32,000 원</td>
                                </tr>
                                <tr>
                                    <th>총 할인금액</th>
                                    <td className="detail__pay">-1,000 원</td>
                                </tr>
                                <tr>
                                    <th>배달비</th>
                                    <td className="detail__pay">3,000 원</td>
                                </tr>
                                <tr>
                                    <th className="detail__bg--gray">총 주문금액</th>
                                    <td className="detail__pay detail__bg--gray">3,4000 원</td>
                                </tr>
                                <tr>
                                    <th>결제방식</th>
                                    <td>
                                        <span className="text_nomal">
                                            계좌이체<br />기업은행 투게더마트 1234-45-67890
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="detail__bg--gray">
                                        ※ 평일 오후 2시전에 주문시, 오후5시 부터 배송기사가 출발합니다.<br />
                                        ※ 주문관련 문의는 032-123-4567로 문의주세요.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <Link href={"/orderslist"} className="detail__btn">목록으로 이동</Link>
                </div>
            </div>
        </>
    )
}