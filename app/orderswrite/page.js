'use client'

export default function OrdersWrite() {
    return (
        <>
            <style jsx>{`
                .orderswrite {display:flex; flex-direction:column; padding:3px; gap:2px;}
                .write {display:flex; flex-direction:column; border-radius:4px; background:#fff; border:1px solid #d1d1d6  }
                .write__header {display: flex; align-items:center; height:36px; padding:0 10px; border-bottom:1px solid #e2e8f0;}
                .write__tit {display:flex; align-items:center; font-size:16px; line-height:1.5; font-weight:bold; color:#475569 }
                .write__body {display:flex; flex-direction:column; gap:2px; padding:10px}
                
                .write__tbl {width:100%; border-collapse: collapse;}
                .write__tbl th {width:90px; padding: 4px 6px; background:#f1f5f9; text-align:left; font-weight:normal; color:#64748b; line-height:1}
                .write__tbl td {padding: 4px 6px; line-height:1.2;}
                
                .write__tbl2 {width:100%; border-collapse: collapse;}
                .write__tbl2 th {width:90px; padding: 6px; text-align:left; color:#64748b;}
                .write__tbl2 td {padding: 6px; line-height:1.2}
                .write__pay {font-weight:bold; text-align:right;}
                .write__bg--gray {background:#f1f5f9}
                .write__tbl2 .text_bold{ font-weight: bold }
                .write__input {width:100%; border:1px solid #cbd5e1; padding:4px 6px; border-radius:4px; font-size:14px; color:#333; background:#f8fafc; box-sizing:border-box}
                .write__btn {width:100px; height:30px; background:#f1f5f9; border:1px solid #d1d1d6; color:#333; font-weight:bold; cursor:pointer}

                .orderswrite__tbl02 {width:100%; border-collapse: collapse;}
                .orderswrite__tbl02 th {width:90px; padding: 6px; text-align:left; color:#64748b;}
                .orderswrite__tbl02 td {padding: 6px; background:#fff; line-height:1.2}
                .orderswrite__tbl02 .bg_gray {background:#f1f5f9}
                .orderswrite__tbl02 .text_bold{ font-weight: bold }

                .write__radiogroup {display:flex; flex-direction:column; gap:6px}
                .write__radiogroup label {display:flex;}
                .write__radiogroup input[type=radio] { margin-right:6px}
                .write__radiogroup p {margin-left:19px}

                .write__list {display:flex;  flex-direction:column}
                .write__list li {padding:10px 0; border-bottom:1px solid #e2e8f0;}
                .write__list li:last-child {border: none}

                .write__infogroup {display:grid; grid-template-columns: 60px 1fr 40px; gap: 0 8px; align-items:center;}
                .write__img {grid-row: span 2; width: 60px; height: 60px; object-fit: cover; aspect-ratio:1/1; border-radius: 4px; border:1px solid #d1d1d6}
                .write__name {}
                .write__amount {text-align:right; color:#666;}
                .write__price {grid-column:span 2 / span 2; text-align:right; font-size:16px; font-weight:bold}
                .write__coupon {display:flex; gap:8px; align-items:center; margin-top:6px; margin-left:60px; padding:2px; background:#f1f5f9; border-radius:4px; font-size:14px; color:#666}
                .write__cname {font-size:14px;}
                .write__cprice {color:#dc2626; font-size:16px; font-weight:bold; margin-left:auto}

                .orderswrite__img {width: 60px; height: 60px; object-fit: cover; aspect-ratio:1/1; border-radius: 4px; border:1px solid #d1d1d6}
                .orderswrite__info {position:relative; flex: 1; display: grid; grid-: justify-content: center;}
                .orderswrite__name {overflow: hidden; padding-right:30px; font-weight:600}
                .orderswrite__pricegroup {display:flex; align-items:center; margin-top:auto}

                .orderswrite__time {color:#999}
                .orderswrite__hr {width:100%; margin:0;  padding:0; border:0; border-bottom:1px solid #e2e8f0}
                
                .orderswrite__btngroup {display:flex; flex-direction:column; margin-top:30px}
                .orderswrite__btngroup label {display:flex; margin:0 auto}
                .orderswrite__btngroup input[type=checkbox] {margin-right:6px}
                .orderswrite__btn {display: flex; justify-content: center; align-items: center; height: 56px; margin:20px 0 50px; background: #f43f5e; border-radius: 8px; color: #fff; font-size: 18px; font-weight: 600; cursor: pointer;}
                .sample__back {position: absolute; left: 0; top: 0; width: 50px; height: 64px; display: flex; align-items: center; justify-content: center; color: #fff; text-decoration: none;}
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
                                    <img className="write__img" src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" width={80} height={80} alt="주문상품" />
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
                                    <img className="write__img" src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" width={80} height={80} alt="주문상품" />
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
                    <Link href="/orderslist" className="orderswrite__btn">주문완료</Link>
                </div>
            </div>
        </>

    )
}