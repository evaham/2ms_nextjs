'use client'
export default function OrdersWrite() {
    return (
        <>
            <style jsx>{`
                .list__info {display: flex; justify-content: center; align-items: center; height: 30px; font-size: 14px; color: #666;}
                .orderswrite {display:flex; flex-direction:column; padding:3px; gap:2px;}
                .orderswrite__panel {display:flex; flex-direction:column; gap:10px; padding: 10px; border-radius:4px; background:#fff; border:1px solid #d1d1d6  }
                .orderswrite__title {font-size:16px; font-weight:bold; color:#333; line-height:1}
                .orderswrite__tbl {width:100%; border-collapse: collapse;}
                .orderswrite__tbl th {width:90px; padding: 4px 6px; background:#f1f5f9; text-align:left; font-weight:normal; color:#64748b}
                .orderswrite__tbl td {padding: 4px 6px; background:#fff; line-height:1.2;}
                .orderswrite__tbl input[type=text] {display:block; width:100% }
                .orderswrite__tbl textarea {display:block; width:100% }
                .orderswrite__tbl .btn_comm { width:98px }


                .orderswrite__tbl02 {width:100%; border-collapse: collapse;}
                .orderswrite__tbl02 th {width:90px; padding: 6px; text-align:left; color:#64748b;}
                .orderswrite__tbl02 td {padding: 6px; background:#fff; line-height:1.2}
                .orderswrite__tbl02 .bg_gray {background:#f1f5f9}
                .orderswrite__tbl02 .text_bold{ font-weight: bold }

                .orderswrite__radiogroup {display:flex; flex-direction:column; gap:6px}
                .orderswrite__radiogroup label {display:flex;}
                .orderswrite__radiogroup input[type=radio] { margin-right:6px}
                .orderswrite__radiogroup p {margin-left:19px}

                .orderswrite__list {display:flex;  flex-direction:column}
                .orderswrite__list li { display:flex; gap:10px; align-items:top; border-bottom:1px solid #e2e8f0;}
                .orderswrite__list li:last-child {border: none}

                .orderswrite__price {display:flex; margin-left:auto}
                .orderswrite__price span{font-size: 18px; font-weight:bold; color: #333; margin-right: 4px;}
                .orderswrite__name {}
                .orderswrite__coupon{}
                .orderswrite__address__btn {}

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
                <div className="orderswrite__panel">
                    <div className="orderswrite__title">주문정보</div>
                    <hr className="orderswrite__hr" />
                    <table className="orderswrite__tbl">
                        <tbody>
                            <tr>
                                <th>주문자명<br /><span>(6/10)</span></th>
                                <td colSpan={2}><input type="text" /></td>
                            </tr>
                            <tr>
                                <th>휴대폰<br />(변경불가)</th>
                                <td colSpan={2}><input type="text" /></td>
                            </tr>
                            <tr>
                                <th rowSpan="3">주소*</th>
                                <td><input type="text" /></td>
                                <td><button className="btn_comm">우편번호검색</button></td>
                            </tr>
                            <tr>
                                <td colSpan={3}><input type="text" /></td>
                            </tr>
                            <tr>
                                <td colSpan={3}><input type="text" /></td>
                            </tr>

                            <tr>
                                <th>요청사항<br />(13/100)</th>
                                <td colSpan={2}>
                                    <textarea></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="orderswrite__panel">
                    <div className="orderswrite__title">주문상품</div>
                    <hr className="orderswrite__hr" />
                    <ul className="orderswrite__list">
                        <li>
                            <img className="orderswrite__img" src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" width={80} height={80} alt="주문상품" />
                            <div className="orderswrite__info">
                                <div className="orderswrite__name">샤인머스캣 18브릭스 이상 2입</div>
                                <div className="">1개</div>
                                <div className="orderswrite__price">20,000</div>
                                <div className="orderswrite__coupon">[쿠폰] 1000할인<span>-1,000</span></div>
                            </div>
                        </li>
                        <li>
                            <img className="orderswrite__img" src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" width={80} height={80} alt="주문상품" />
                            <div>
                                <div>샤인머스캣 18브릭스 이상 2입<span>1개</span></div>
                                <div style={{ marginLeft: "auto" }}>20,000</div>
                                <div className="orderswrite__coupon">[쿠폰] 1000할인<span>-1,000</span></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="orderswrite__panel">
                    <div className="orderswrite__title">결제정보</div>
                    <hr className="orderswrite__hr" />
                    <table className="orderswrite__tbl02">
                        <tbody>
                            <tr>
                                <th>상품합계</th>
                                <td className="text_right text_bold">32,000 원</td>
                            </tr>
                            <tr>
                                <th>총 할인금액</th>
                                <td className="text_right text_bold">-1,000 원</td>
                            </tr>
                            <tr>
                                <th>배달비</th>
                                <td className="text_right text_bold">3,000 원</td>
                            </tr>
                            <tr>
                                <th className="bg_gray">총 주문금액</th>
                                <td className="text_right bg_gray text_bold">3,4000 원</td>
                            </tr>
                            <tr>
                                <th>결제방식</th>
                                <td>
                                    <div className="orderswrite__radiogroup">
                                        <label><input type="radio" name="type1" />계좌이체</label>
                                        <p>기업은행 투게더마트 1234-45-67890</p>
                                        <label><input type="radio" name="type1" />만나서 카드</label>
                                        <label><input type="radio" name="type1" />만나서 현금</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="bg_gray">
                                    ※ 평일 오후 2시전에 주문시, 오후5시 부터 배송기사가 출발합니다.<br />
                                    ※ 주문관련 문의는 032-123-4567로 문의주세요.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="orderswrite__btngroup">
                    <label><input type="checkbox" /> 필수 주문정보를 확인했으며, 주문 진행에 동의합니다.</label>
                    <a href="/orderslist" className="orderswrite__btn">주문완료</a>
                </div>
            </div>
        </>

    )
}