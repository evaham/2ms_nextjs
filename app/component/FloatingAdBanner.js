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
          transform: isOpen ? "translateX(0)" : "translateX(calc(100% - 1.5rem))",
        }}
      >
        <div className="relative overflow-hidden w-60 h-20 rounded-l-2xl shadow-lg">
          <a href={banner.link} className="flex items-center">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${banner.image}`}
                alt="광고 배너"
                className="size-full object-cover"
              />
          </a>
          <button
            type="button"
            onClick={onToggle}
            className="absolute left-0 top-0 flex items-center w-8 h-20 pr-2 text-sm font-bold text-white"
            aria-label="플로팅 광고 토글"
          >
            {isOpen ? 
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 fill-black/50" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M320-200v-560l440 280-440 280Z"/></svg> 
              : <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 fill-black/50" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M640-200 200-480l440-280v560Z"/></svg>
            }
          </button>
        </div>
      </div>
    </div>
  );
}
