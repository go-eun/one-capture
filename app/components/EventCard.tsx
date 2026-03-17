interface EventCardProps {
  showBadge?: string;
  showBookmark?: boolean;
  showDiscount?: boolean;
  showCoupon?: boolean;
  showOnlyBadge?: boolean;
  showDiscountBtn?: boolean;
  small?: boolean;
}

export default function EventCard({
  showBadge,
  showBookmark = true,
  showDiscount = false,
  showCoupon = false,
  showOnlyBadge = false,
  showDiscountBtn = false,
  small = false,
}: EventCardProps) {
  return (
    <div className={`flex-shrink-0 ${small ? "w-36" : "w-40"} bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100`}>
      {/* 이미지 영역 */}
      <div className="relative">
        <div
          className={`${small ? "h-28" : "h-32"} bg-gray-200`}
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #ccc 0, #ccc 1px, transparent 0, transparent 50%)",
            backgroundSize: "8px 8px",
          }}
        />
        {/* 쿠폰 뱃지 */}
        {showCoupon && (
          <div className="absolute top-2 left-2 bg-purple-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            1만원 쿠폰
          </div>
        )}
        {/* Only 뱃지 */}
        {showOnlyBadge && (
          <div className="absolute top-2 left-2 bg-purple-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            Only
          </div>
        )}
        {/* 북마크 */}
        {showBookmark && (
          <button className="absolute top-2 right-2 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center shadow">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        )}
      </div>

      {/* 텍스트 */}
      <div className="p-2">
        <p className="text-xs text-gray-700 leading-snug line-clamp-2">
          이벤트명이 들어가니다 이벤트명이 들어가니다 이벤트명이 들어가...
        </p>

        {showDiscount && (
          <>
            <p className="text-[10px] text-gray-400 mt-1">최대 혜택가 <span className="text-gray-600">123,456원</span></p>
            <p className="text-[10px] text-gray-500 mt-0.5 truncate">바비톡단독이벤트가들어가...</p>
            <p className="text-[10px] text-gray-400 mt-0.5">서울 강남구 · 바비원</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-yellow-400 text-[10px]">★</span>
              <span className="text-[10px] text-gray-500">4.9 (N,NNN)</span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-xs font-bold text-gray-900">123,456원</span>
              <span className="text-xs font-bold text-red-500">40%</span>
            </div>
          </>
        )}

        {showDiscountBtn && (
          <button className="w-full mt-2 bg-purple-600 text-white text-[10px] font-bold py-1.5 rounded-lg">
            최대 2만원 할인권
          </button>
        )}
      </div>
    </div>
  );
}
