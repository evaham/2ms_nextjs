"use client";

export default function AdPopup({ open, adPopData, onClose, onHideToday }) {
  if (!open) return null;

  const handleStoreLink = (event) => {
    event.preventDefault();

    if (typeof window === "undefined") return;

    const userAgent = navigator.userAgent || "";
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const storeUrl = isAndroid
      ? adPopData.androidStoreLink
      : isIOS
      ? adPopData.iosStoreLink
      : adPopData.androidStoreLink;

    window.location.href = storeUrl;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-85 max-w-md overflow-hidden rounded bg-white shadow-xl">
        <div className="w-full">
          <a href={adPopData.androidStoreLink} onClick={handleStoreLink}>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${adPopData.image}`}
              alt="광고 이미지"
              className="h-auto w-full object-cover"
            />
          </a>
        </div>
        <div className="flex w-full items-center justify-between border-t divide-x divide-slate-200 border-slate-200">
          <button
            type="button"
            className="flex-1 bg-white p-4 text-sm font-bold text-slate-700"
            onClick={onHideToday}
          >
            오늘 그만 보기
          </button>
          <button
            type="button"
            className="flex-1 bg-white p-4 text-sm font-bold text-slate-700"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
