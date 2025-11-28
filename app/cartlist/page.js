'use client';

import Link from "next/link";
import { useState } from 'react';
import { useRouter } from "next/navigation";

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

    const router = useRouter();
    const [showData, setShowData] = useState();
    const [allChecked, setAllChecked] = useState(true);

    return (
        <>
            <div className='sample relative flex flex-col min-h-screen pb-20 bg-slate-50'>
                <div className="sticky top-0 z-50">
                    <div className="sample__name clearfix relative flex justify-center items-center h-16 bg-[#21409a] text-xl text-white font-bold"  
                        style={{ color: "", background: "" }}
                    >
                        <Link href={"/"} className="sample__back flex justify-center items-center absolute top-0 left-0 w-13 h-full text-white no-underline" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                        </Link>
                        <span className="js_fontsize" style={{ fontSize: "20px" }}>장바구니</span>
                    </div>
                </div>
                <div className="info-div flex justify-center items-center min-h-8 text-sm text-red-600 bg-red-50">
                    ⓘ 행사를 종료한 상품은 장바구니에서 자동 삭제합니다.
                </div>




                {!showData ? (
                    <div className="empty-div flex flex-col justify-center items-center min-h-60">
                        <div className='flex flex-col items-center my-20 text-xl text-center font-bold text-slate-400'>
                            장바구니가 비어 있습니다.
                        </div>
                        <button className='border' onClick={()=>setShowData(true)}>테스트용 화면전환</button>
                    </div>
                ) : (
                    <>
                    <div className="control-div flex items-center min-h-10 px-2.5 bg-white">
                        <label className="flex gap-1 text-sm">
                            <input id="checkboxall" type="checkbox" className="chkAll size-5" defaultChecked />
                            전체 선택
                        </label>
                        <button className="delete-all flex ml-auto px-1 border rounded text-sm items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                            선택 삭제
                        </button>
                    </div>
                    <div className="cart-list flex flex-col mt-1.5 px-1 pb-2.5 gap-0.5">
                        {list.map((item, index) => (
                            <div key={index} className="cart-div relative flex gap-2 px-2.5 py-5 rounded  border border-slate-200 bg-white">
                                <div className="flex items-center">
                                    <input type="checkbox" className="chkChoose size-5" />
                                </div>
                                <img src={item.image} alt={item.name} className="cartitem__img size-20 object-cover aspect-square" />
                                <div className="product-info flex-1 flex flex-col">
                                    <div className="product-name line-clamp-2 pr-8 leading-tight">{item.name}</div>
                                    <div className="product-price-div flex mt-auto">
                                        <div className="product-price">
                                            <span className="mr-1 text-lg font-bold text-slate-700">{item.price.toLocaleString()}</span>원
                                        </div>
                                        <div className="product-quantity relative flex justify-center w-18 h-8 px-1 border border-slate-500 rounded-lg ml-auto">
                                            <select className="quantity-num w-full h-full border-0 text-lg text-center">
                                                <option value="1" defaultValue="">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="cart-delete-btn absolute top-1.5 right-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-btn-div sticky bottom-20 flex flex-col p-2.5 border-t bg-[#f7f7f7] border-black/10">
                        {!showbtn ? (
                            <button className="cart-btn disabled flex justify-center items-center h-13 rounded-lg text-lg text-white font-bold bg-rose-500
                                [&.disabled]:text-slate-400 [&.disabled]:bg-slate-200
                            " onClick={() => setShowbtn(true)}>
                                주문할 상품이 없음
                            </button>
                        ) : (
                            <Link className="cart-btn flex justify-center items-center h-13 rounded-lg text-lg text-white font-bold bg-rose-500
                                [&.disabled]:text-slate-400 [&.disabled]:bg-slate-200
                            " href={"/orderswrite"}>
                                총 <span>3</span>건 <span>37,000</span>원 주문하기
                            </Link>
                        )}
                    </div>
                    </>
                )}
            </div>
        </>
    )
}