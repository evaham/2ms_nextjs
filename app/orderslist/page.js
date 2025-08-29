'use client';
import Link from 'next/link';

export default function OrdersList() {
    const list = [
        { id: 1, name: "자연그린 김밥단무김밥", orders: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 2, name: "자연그린 김밥단무지2", orders: false, price: 2551238, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", orders: false, price: 2512358, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 4, name: "자연그린 김밥단무지김밥단무지김밥단무지김밥단무지김밥단무지4", orders: true, price: 252258, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 5, name: "자연그린 김밥단무지4", orders: true, price: 253358, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 6, name: "자연그린 김밥단무지4", orders: true, price: 244558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 7, name: "자연그린 김밥단무지4", orders: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 8, name: "자연그린 김밥단무지4", orders: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" }
    ];
    return (
        <>
            <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
                <div className="sample__name clearfix" style={{ color: "", background: "", }}>
                    <Link href={"/"} className="sample__back" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                    </Link>
                    <span className="js_fontsize" style={{ fontSize: "20px" }}>주문내역</span>
                </div>
            </div>
            <div className="orderslist__info">※주문내역은 6개월 간 보관합니다.</div>
            <ul className="orderslist">
                {list.map((item, index) => (
                    <li key={index}>
                        <Link href={"/ordersdetail"} className="ordersitem">
                            <div className='ordersitem__group'>
                                <div className="ordersitem__time">25.4.19 11:30 주문</div>
                                <div className="ordersitem__name"><span>{item.name}</span> 외 00</div>
                            </div>
                            <div className="ordersitem__price">{item.price.toLocaleString()}</div>

                            <div className='ordersitem__icon'><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#6f6f6f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg></div>
                        </Link>
                    </li>
                ))}
                <div className="text__nodata">주문내역이 없습니다.</div>
            </ul>

        </>
    );
}