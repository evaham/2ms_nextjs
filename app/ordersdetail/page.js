'use client';

export default function ordersdetail() {

    return (
        <>
            <style jsx>{`
                .list__info {display: flex; justify-content: center; align-items: center; height: 30px; font-size: 14px; color: #666;}
                .ordersdetail {display:flex; flex-direction:column; padding:3px; gap:2px;}
                .ordersdetail__panel {display:flex; flex-direction:column; gap:10px; padding: 10px; border-radius:4px; background:#fff; border:1px solid #d1d1d6  }
                .ordersdetail__title {font-size:16px; font-weight:bold; color:#333; line-height:1}
                .ordersdetail__tbl {width:100%; border-collapse: collapse;}
                .ordersdetail__tbl th {width:90px; padding: 2px 6px; background:#f1f5f9; text-align:left; font-weight:normal; color:#64748b}
                .ordersdetail__tbl td {padding: 2px 1px 2px 6px; background:#fff; line-height:1.2}
                .ordersdetail__list {display:flex; flex-direction:column}
                .ordersdetail__list li { display:flex; align-items:center; border-bottom:1px solid #e2e8f0}
                .ordersdetail__list li:last-child {border: none}

                .ordersdetail__price {display:flex;}
                .ordersdetail__price span{width:50%; font-size: 18px; font-weight:bold; color: #333; margin-right: 4px;}


                .ordersdetail__name {}
                .ordersdetail__{}

                .ordersdetail__img {width: 80px; height: 80px; object-fit: cover; aspect-ratio:1/1; border-radius: 4px; border:1px solid #d1d1d6}
                .ordersdetail__info {position:relative; flex: 1; display: flex; flex-direction: column; justify-content: center;}
                .ordersdetail__name {overflow: hidden; padding-right:30px; font-size: 16px; font-weight:600}
                .ordersdetail__pricegroup {display:flex; align-items:center; margin-top:auto}

                .ordersdetail__time {color:#999}
                .ordersdetail__hr {width:100%; margin:0;  padding:0; border:0; border-bottom:1px solid #e2e8f0}
                .ordersdetail__btn {display:flex; align-items:center; height:30px; margin:5px auto 0; padding: 0 20px; border:1px solid #cbd5e1; border-radius:3px; font-weight:bold; text-decoration:none}
                .sample__back { position: absolute; left: 0; top: 0; width: 50px; height: 64px; display: flex; align-items: center; justify-content: center; color: #fff; text-decoration: none;}
                .nodata {display:flex; margin: 20px auto; font-size:20px}
                `}
            </style>
            <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
                <div className="sample__name clearfix" style={{ color: "", background: "", }}>
                    <a href="/" className="sample__back" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                    </a>
                    <span className="js_fontsize" style={{ fontSize: "20px" }}>주문내역 상세보기</span>
                </div>
            </div>
            <div className="ordersdetail">
                <div className="ordersdetail__panel">
                    <div className="ordersdetail__title">주문정보</div>
                    <hr className="ordersdetail__hr" />
                    <table className="ordersdetail__tbl">
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
                <div className="ordersdetail__panel">
                    <div className="ordersdetail__title">주문상품</div>
                    <hr className="ordersdetail__hr" />
                    <ul className="ordersdetail__list">
                        <li>
                            <img src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" width={80} height={80} alt="주문상품" />
                            <div className="ordersdetail__info">
                                <div className="ordersdetail__name">샤인머스캣 18브릭스 이상 2입</div>
                                <div className="ordersdetail__price">1개<span>20,000</span></div>
                                <div className="ordersdetail__coupon">쿠폰 <span>1000할인</span></div>
                            </div>
                        </li>
                        <li>
                            <img src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" width={80} height={80} alt="주문상품" />
                            <div>
                                <div>샤인머스캣 18브릭스 이상 2입</div>
                                <div style={{display:"flex"}}>1개<div style={{marginLeft:"auto"}}>20,000</div></div>
                                <div>쿠폰 1000할인 </div>
                            </div>
                        </li>


                    </ul>
                </div>
                <div className="ordersdetail__panel">
                    <div className="ordersdetail__title">결제정보</div>
                    <hr className="ordersdetail__hr" />
                    <table className="ordersdetail__tbl">
                        <tbody>
                            <tr>
                                <th>상품합계</th>
                                <td>32,000 원</td>
                            </tr>
                            <tr>
                                <th>총 할인금액</th>
                                <td>-1,000원</td>
                            </tr>
                            <tr>
                                <th>배달비</th>
                                <td>3,000원</td>
                            </tr>
                            <tr>
                                <th>총 주문금액</th>
                                <td className="text-right">3,4000 원</td>
                            </tr>
                            <tr>
                                <th>결제방식</th>
                                <td>
                                    계좌이체<br />기업은행 투게더마트 1234-45-67890
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    ※ 평일 오후 2시전에 주문시, 오후5시 부터 배송기사가 출발합니다.<br />
                                    ※ 주문관련 문의는 032-123-4567로 문의주세요.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}