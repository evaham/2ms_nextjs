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
    <div className="fixed left-85 top-48 z-50 w-auto">
      <div className="relative transition-transform duration-300"
        style={{ transform: isOpen ? "translateX(calc(-100% + 2.2rem))" : "translateX(0)", }}
      >
        <div className="relative">
          <div className="flex overflow-hidden w-85 h-30 rounded-l-3xl shadow-lg">
            <a href={banner.link} className="flex items-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${banner.image}`}
                  alt="광고 배너"
                  className="size-full object-cover"
                />
            </a>
          </div>
          <button
            type="button"
            onClick={onToggle}
            className="absolute -left-5 top-0 flex items-center justify-center w-14 h-full pl-4 text-sm font-bold text-white"
            aria-label="플로팅 광고 토글"
          >
            {isOpen ? 
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-white" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M320-200v-560l440 280-440 280Z"/></svg> 
              : <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-white" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M640-200 200-480l440-280v560Z"/></svg>
            }
          </button>
        </div>
      </div>
    </div>
  );
}
