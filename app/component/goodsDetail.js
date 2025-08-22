'use client';

const GoodsDetail = () => {
  return (
    <div>
      <img src="/static/img/no_image_color.png" alt="No Image Available" />
      <p>수량을 선택해서 장바구니에 담아주세요</p>
      <div className="quantity">
        <button className="quantity__btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="quantity__icon"><path d="M200-440v-80h560v80H200Z" /></svg>
        </button>
        <p className="quantity-count">{item.count}</p>
        <button className="quantity__btn quantity__btn--right">
          <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="quantity__icon"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
        </button>
      </div>
    </div>
  );
}
export default GoodsDetail;