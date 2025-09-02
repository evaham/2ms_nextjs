'use client';

import Link from "next/link";
import { useState } from 'react';

export default function CartList(){
    const [showbtn, setShowbtn] = useState(false);


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
            <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
                <div className="sample__name clearfix" style={{ color: "", background: "" }}>
                    <Link href={"/"} className="sample__back" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                    </Link>
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
                                <div className="quantity">
                                    <button className="quantity__btn quantity__btn--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M200-440v-80h560v80H200Z" /></svg>
                                    </button>
                                    <span className="quantity__num">1</span>
                                    <button className="quantity__btn quantity__btn--right">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                    </button>
                                </div>
                            </div>
                            <button className="cartitem__removebtn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cartfoot">
                {!showbtn ? (
                    <button className="cartfoot__btn disabled" onClick={() => setShowbtn(true)}>
                        총 0건 0원 주문하기
                    </button>
                ) : (
                    <Link className="cartfoot__btn" href={"/orderswrite"}>
                        총 3건 37,000원 주문하기
                    </Link>
                )}
            </div>
        </>
    )
}