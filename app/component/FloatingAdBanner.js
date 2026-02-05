"use client";
// 플로팅광고 배너 컴포넌트

export default function FloatingAdBanner({
  enabled = true,
  isOpen = true,
  onToggle,
  banner,
}) {
  if (!enabled || !banner) return null;

  return (
    <div className="fixed right-0 top-48 z-50">
      <div
        className="relative transition-transform duration-300"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(calc(100% - 1rem))",
        }}
      >
        <div className="relative flex items-center h-26 px-1 py-1 border border-slate-600 rounded bg-white shadow-lg">
          <button
            type="button"
            onClick={onToggle}
            className="absolute -left-6 flex items-center h-26 bg-amber-500 text-sm font-bold text-white"
            aria-label="플로팅 광고 토글"
          >
            {isOpen ? 
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M320-200v-560l440 280-440 280Z"/></svg> 
              : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M640-200 200-480l440-280v560Z"/></svg>
            }
          </button>
          <a href={banner.link} className="flex items-center ">
            <div className="flex w-75 h-26 items-center justify-center overflow-hidden bg-amber-50">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${banner.image}`}
                alt="광고 배너"
                className="h-full w-full object-cover"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
