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
      <div className="relative w-85 max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="w-full">
          <a href={adPopData.androidStoreLink} onClick={handleStoreLink}>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${adPopData.image}`}
              alt="광고 이미지"
              className="h-auto w-full object-cover"
            />
          </a>
        </div>
        <div className="flex w-full items-center justify-between gap-2 border-t border-slate-200 p-3">
          <button
            type="button"
            className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700"
            onClick={onHideToday}
          >
            오늘안보기
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
