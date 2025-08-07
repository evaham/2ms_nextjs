'use client';

export default function LayerPopup({ item, onChange }) {

    return (
        <div className="layer layer__wrap" style={{ display: "none" }}>
            <div className="layer__bg"></div>
            <div className="goods layer__box" style={{ position: "fixed" }} onClick={() => document.querySelector('.layer').style.display = 'none'}>
                <ul id="js_changeList" className="goods__list">
                    <li style={{ padding: "25px" }}>
                        <div className="goods__card" style={{ padding: "6% 2%" }}>
                            <div className="goods__imgbox" style={{ background: "white" }}>
                                <img className="layer__image" style={{ maxWidth: "75%" }} src="http://file.2ms.kr/WebLink/33121/e3988119-1480-4179-affd-b6c47ef420c0.jpg" />
                            </div>
                            <div className="goods__info" style={{ marginTop: "8%" }}>
                                <div className="goods__delPrice previewEtc1" style={{ fontSize: "18px" }}>센터이미지</div>
                                <div className="goods__price" style={{ fontSize: "45px", marginTop: "10px" }}>1</div>
                                <div className="layer__goods__name" style={{ width: "auto", height: "auto", marginBottom: "5%" }}>버터링 골드</div>
                            </div>
                            <div align="right" style={{ margin: "30 10 0 0" }}>
                                <p>한번 더 터치 시 닫습니다.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}