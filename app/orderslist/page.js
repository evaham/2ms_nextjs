'use client';
export default function OrdersList() {
    const list = [
        { id: 1, name: "자연그린 김밥단무김밥", orders: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 2, name: "자연그린 김밥단무지2", orders: false, price: 2551238, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", orders: false, price: 2512358, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 4, name: "자연그린 김밥단무지4", orders: true, price: 252258, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 5, name: "자연그린 김밥단무지4", orders: true, price: 253358, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 6, name: "자연그린 김밥단무지4", orders: true, price: 244558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 7, name: "자연그린 김밥단무지4", orders: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 8, name: "자연그린 김밥단무지4", orders: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" }
    ];


    return (
        <>
            <style jsx>{`
                .list__info {display: flex; justify-content: center; align-items: center; height: 30px; font-size: 14px; color: #e11d48;}
                .orderslist {display:flex; flex-direction:column; padding:3px; gap:2px;}
                .ordersitem {display: flex; flex-direction:column; border-radius:4px; background:#fff; border:1px solid #d1d1d6  }
                .ordersitem__header {display: flex; align-items:center; height:36px; padding:0 10px; border-bottom:1px solid #e2e8f0; }
                .ordersitem__header__tit {display:flex; align-items:center; font-size:16px; line-height:1.5; font-weight:bold; color:#475569 }
                .ordersitem__body {display:flex; flex-direction:column; gap:2px; padding:10px}
                .ordersitem__body__time {font-size:14px; line-height:1.2; color:#64748b}
                .ordersitem__body__group {display: flex; gap:40px}
                .ordersitem__body__group__name {font-size:16px;}
                .ordersitem__body__group__price {margin-left:auto; font-size: 16px; font-weight:bold;}
                .ordersitem__footer {display:flex; height:38px; padding:0 10px;  border-top:1px solid #e2e8f0;}
                .ordersitem__footer__btn {display:flex; align-items:center; margin:auto; padding:2px 14px; border:1px solid #dfdfdf; border-radius:4px;}
                .sample__back { position: absolute; left: 0; top: 0; width: 50px; height: 64px; display: flex; align-items: center; justify-content: center; color: #fff; text-decoration: none;}
                .nodata {display:flex; margin: 20px auto; font-size:20px}
                `}
            </style>
            
            <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
                <div className="sample__name clearfix" style={{ color: "", background: "", }}>
                    <a href="/" className="sample__back" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                    </a>
                    <span className="js_fontsize" style={{ fontSize: "20px" }}>주문내역</span>
                </div>
            </div>
            <div className="list__info">※주문내역은 6개월 간 보관합니다.</div>
            <div className="orderslist">
                {list.map((item, index) => (
                    <div key={index} className="ordersitem">
                        <div className="ordersitem__header">
                            <p className="ordersitem__header__tit">주문접수</p>
                        </div>
                        <div className="ordersitem__body">
                            <div className="ordersitem__body__time">25.4.19 11:30 주문</div>
                            <div className="ordersitem__body__group">
                                <div className="ordersitem__body__group__name">{item.name}</div>
                                <div className="ordersitem__body__group__price">{item.price.toLocaleString()}</div>
                            </div>
                        </div>
                        <div className="ordersitem__footer">
                            <a href="/ordersdetail" className="ordersitem__footer__btn">상세보기</a>
                        </div>
                    </div>
                ))}
                <div className="nodata">주문내역이 없습니다.</div>
            </div>

        </>
    );
}