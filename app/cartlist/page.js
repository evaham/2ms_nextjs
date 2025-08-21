'use client';

export default function CartList(){
    const list = [
        { id: 1, name: "자연그린 김밥단무김밥단무김밥단무김aawefawefawef밥단무김밥단무김밥단무지1", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 2, name: "자연그린 김밥단무지2", cart: false, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 4, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 5, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 6, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 7, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 8, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" }
    ];

    return (
        <>
            <style jsx>{`
                .cartlist {flex:1;display:flex; flex-direction:column; padding:10px 3px; gap:2px;}
                .cartitem {display: flex; gap:8px; padding: 10px; border-radius:4px; background:#fff; border:1px solid #d1d1d6  }
                .cartitem__img {width: 80px; height: 80px; object-fit: cover; aspect-ratio:1/1; border-radius: 4px; border:1px solid #d1d1d6}
                .cartitem__info {position:relative; flex: 1; display: flex; flex-direction: column; justify-content: center;}
                .cartitem__name {overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-height:1.25; padding-right:30px; font-size: 16px; margin-bottom: 5px;}
                .cartitem__remove {position: absolute; right: 0; top: 0; width: 24px; height: 24px; cursor: pointer;}
                .cartitem__pricegroup {display:flex; margin-top:auto; align-items:center}
                .cartitem__price {margin-right:auto; font-size:16px;}
                .cartitem__price span{font-size: 18px; font-weight:bold; color: #333; margin-right: 4px;}
                .cartitem__quantity {position:relative; display: flex; align-items:center; width:96px; height:32px; border:1px solid #90a1b9; border-radius:50px}
                .cartitem__quantity__btn {display: flex; align-items: center; justify-content: center; cursor: pointer;}
                .cartitem__quantity__btn--left {margin-right:auto; padding-left:13px}
                .cartitem__quantity__btn--right {margin-left:auto; padding-right:13px}
                .cartitem__quantity__num{flex:1; display:flex; align-items:center; justify-content:center; margin:0 auto; font-size:18px;}
                .cartfoot {display:flex; position:sticky; bottom:64px; width:100%; padding: 10px; background:#f1f5f9; border-top:1px solid #e2e8f0;}
                .cartfoot__btn {flex:1; display: flex; justify-content: center; align-items: center; height: 56px; background: #f43f5e; border-radius: 8px; color: #fff; font-size: 18px; font-weight:600; cursor: pointer;}
                .sample__back { position: absolute; left: 0; top: 0; width: 50px; height: 64px; display: flex; align-items: center; justify-content: center; color: #fff; text-decoration: none;}
                `}   
            </style>
            <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
                <div className="sample__name clearfix" style={{ color: "", background: "" }}>
                    <a href="/" className="sample__back" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                    </a>
                    <span className="js_fontsize" style={{ fontSize: "20px" }}>장바구니</span>
                </div>
            </div>
            <div className="cartlist">
                {list.map((item, index) => (
                    <div key={index} className="cartitem">
                        <img src={item.image} alt={item.name} className="cartitem__img" />
                        <div className="cartitem__info">
                            <div className="cartitem__name">{item.name}</div>
                            <div className="cartitem__pricegroup">
                                <div className="cartitem__price">
                                    <span>{item.price.toLocaleString()}</span>원
                                </div>
                                <div className="cartitem__quantity">
                                    <button className="cartitem__quantity__btn cartitem__quantity__btn--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M200-440v-80h560v80H200Z" /></svg>
                                    </button>
                                    <span className="cartitem__quantity__num">1</span>
                                    <button className="cartitem__quantity__btn cartitem__quantity__btn--right">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                    </button>
                                </div>
                            </div>
                            <button className="cartitem__remove">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cartfoot">
                <a className="cartfoot__btn" href="/orderswrite">총 3건 37,000원 주문하기</a>
            </div>
        </>
    )
}