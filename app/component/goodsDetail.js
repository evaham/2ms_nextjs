'use client';
export default function GoodsList() {
  return (
    <div>
        <img src="/static/img/no_image_color.png" alt="No Image Available" />
        <p>수량을 선택해서 장바구니에 담아주세요</p>
        <div className="relative flex w-full h-6">
            <button onClick={handleDecrement} className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M200-440v-80h560v80H200Z" /></svg>
            </button>
            <p className="flex-1 flex items-center justify-center inset-0 mx-0.5 text-sm">{item.count}</p>
            <button onClick={handleIncrement} className="flex items-center justify-center w-6 h-6 ml-auto rounded-full bg-slate-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
            </button>
        </div>

      {/* Add your goods list items here */}
    </div>
  );
}