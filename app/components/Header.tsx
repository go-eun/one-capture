"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* 로고 + 아이콘 */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 bg-purple-600 rounded-sm flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">B</span>
          </div>
          <span className="text-purple-700 font-bold text-lg tracking-tight">Babitalk</span>
        </div>
        <div className="flex items-center gap-4">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
      </div>

      {/* 검색창 */}
      <div className="px-4 pb-2">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-gray-400 text-sm">지역/홈닥 최저가 이벤트 찾아봐</span>
        </div>
      </div>

      {/* 카테고리 탭 */}
      <div className="flex overflow-x-auto scroll-hidden px-4 pb-2 gap-5">
        {["웰컴패키지", "추천", "얼굴성형", "가슴/바디", "리프팅", "보톡"].map((tab, i) => (
          <button
            key={tab}
            className={`whitespace-nowrap text-sm pb-1 flex-shrink-0 ${
              i === 2
                ? "text-gray-900 font-bold border-b-2 border-gray-900"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </header>
  );
}
