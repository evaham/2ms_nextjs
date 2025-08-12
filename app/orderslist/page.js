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
                .ordersitem {display: flex; flex-direction:column; gap:4px; padding: 10px; border-radius:4px; background:#fff; border:1px solid #d1d1d6  }
                .ordersitem__img {width: 80px; height: 80px; object-fit: cover; aspect-ratio:1/1; border-radius: 4px; border:1px solid #d1d1d6}
                .ordersitem__info {position:relative; flex: 1; display: flex; flex-direction: column; justify-content: center;}
                .ordersitem__name {overflow: hidden; padding-right:30px; font-size: 16px; font-weight:600}
                .ordersitem__pricegroup {display:flex; align-items:center; margin-top:auto}
                .ordersitem__price {margin-left:auto}
                .ordersitem__price span{font-size: 18px; font-weight:bold; color: #333; margin-right: 4px;}
                .ordersitem__time {color:#999}
                .ordersitem__hr {width:100%; margin:0; padding:0; border:0; border-bottom:1px solid #e2e8f0}
                .ordersitem__btn {display:flex; align-items:center; height:30px; margin:5px auto 0; padding: 0 20px; border:1px solid #cbd5e1; border-radius:3px; font-weight:bold; text-decoration:none}
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
                        <div>주문접수</div>
                        <hr className="ordersitem__hr" />
                        <div className="ordersitem__time">25.4.19 11:30 주문</div>
                        <div className="ordersitem__info">
                            <div className="ordersitem__pricegroup">
                                <div className="ordersitem__name">{item.name}</div>
                                <div className="ordersitem__price">
                                    <span>{item.price.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                        <hr className="ordersitem__hr" />
                        <a href="/ordersdetail" className="ordersitem__btn">상세보기</a>
                    </div>
                ))}
                <div className="nodata">주문내역이 없습니다.</div>
            </div>

        </>
    );
}