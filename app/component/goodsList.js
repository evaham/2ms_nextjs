'use client';

export default function GoodsList({listType}) {
    
    const list = [
        { id: 1, name: "자연그린 김밥단무지1", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 2, name: "자연그린 김밥단무지2", cart: false, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 4, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 4, name: "자연그린 김밥단무지4", cart: false, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 4, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 4, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
    ];

    return (
        <>
        <style jsx>{`
            .icon__cartbox {
                position: absolute;
                display: flex;
                width: 64px;
                height: 64px;
                right: 5%;
                bottom: 5%;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: #fff;
                border: 1px solid #e8eaed;
            }
            .goods__list--type2 .icon__cartbox {width: 42px; height: 42px;}
            .goods__list--type3 .icon__cartbox {width: 32px; height: 32px;}
            .goods__list--type4 .icon__cartbox {width: 28px; height: 28px;}
        `}</style>

        <div style={{ background: "" }}>
            {/* <!-- <span>행사코너1 배너</span> --> */}
            <div className="goods">
                {/* <!--템플릿 유형 가로형 --> */}
                <ul id="js_changeList" className={`goods__list goods__list--${listType}`}>
                    {list.map((item, index) => (
                        <li key={index}>
                            <div className="goods__card">
                                <div className="goods__imgbox" style={{ background: "white" }}>
                                    <img data-src="" className="" src={item.image} />
                                    <div className="icon__cartbox">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="70%" viewBox="0 -960 960 960" width="70%" fill="#666">
                                            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice previewEtc1">공유이미지</div>
                                    <div className="goods__price">{item.price.toLocaleString()}</div>
                                    <div className="goods__name">{item.name}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
}