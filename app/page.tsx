import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import EventCard from "./components/EventCard";
import CountdownTimer from "./components/CountdownTimer";
import BottomNav from "./components/BottomNav";

export default function Home() {
  return (
    <div className="pb-32">
      <Header />
      <HeroBanner />

      {/* ── Section 1: 놓치면 아쉬운 이번주 인기 급상승 이벤트 ── */}
      <section className="pt-6 pb-4">
        <div className="px-4">
          <h2 className="text-base font-bold text-gray-900 leading-snug">
            놓치면 아쉬운<br />이번주 인기 급상승 이벤트
          </h2>
          <div className="mt-2 inline-flex items-center bg-orange-50 border border-orange-200 rounded-full px-3 py-1 gap-1">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full inline-block" />
            <span className="text-orange-500 text-xs font-medium">지금 84명이 보고 있어요!</span>
          </div>
        </div>

        {/* 카테고리 탭 */}
        <div className="mt-3 px-4 flex gap-2 overflow-x-auto scroll-hidden">
          <button className="flex-shrink-0 bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full">
            얼글리프팅 <span className="font-normal opacity-80">이번주 17건 상담신청</span>
          </button>
          <button className="flex-shrink-0 bg-gray-100 text-gray-500 text-xs px-4 py-2 rounded-full">가슴/바디</button>
          <button className="flex-shrink-0 bg-gray-100 text-gray-500 text-xs px-4 py-2 rounded-full">리프팅</button>
        </div>

        <div className="mt-3 flex gap-3 px-4 overflow-x-auto scroll-hidden">
          {[1, 2, 3, 4].map((i) => <EventCard key={i} showBookmark />)}
        </div>

        <div className="mt-3 px-4">
          <button className="text-sm text-gray-500 underline underline-offset-2">얼글리프팅 더보기 &gt;</button>
        </div>
      </section>

      <div className="h-2 bg-gray-50" />

      {/* ── Section 2: 방금 상담신청한 인기 이벤트 ── */}
      <section className="pt-6 pb-4">
        <div className="px-4">
          <h2 className="text-base font-bold text-gray-900">방금 상담신청한 인기 이벤트</h2>
          <div className="mt-2 inline-flex items-center bg-orange-50 border border-orange-200 rounded-full px-3 py-1 gap-1">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full inline-block" />
            <span className="text-orange-500 text-xs font-medium">이번주 12명이 상담신청했어요!</span>
          </div>
        </div>
        <div className="mt-3 flex gap-3 px-4 overflow-x-auto scroll-hidden">
          {[1, 2, 3, 4].map((i) => <EventCard key={i} showBookmark />)}
        </div>
        <div className="mt-4 px-4">
          <button className="w-full border border-gray-300 rounded-xl py-3 text-sm text-gray-600 font-medium">
            실시간 상담신청 더보기
          </button>
        </div>
      </section>

      <div className="h-2 bg-gray-50" />

      {/* ── Section 3: 요즘 많이 찾는 미리결제 이벤트 ── */}
      <section className="pt-6 pb-4">
        <div className="px-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900">요즘 많이 찾는<br />미리결제 이벤트</h2>
          <button className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="mt-3 flex gap-3 px-4 overflow-x-auto scroll-hidden">
          {[1, 2, 3].map((i) => <EventCard key={i} showBookmark showDiscount showCoupon />)}
        </div>
      </section>

      <div className="h-2 bg-gray-50" />

      {/* ── Section 4: 할인권 적용이 가능한 인기 이벤트 ── */}
      <section className="pt-6 pb-4">
        <div className="px-4 mb-3">
          <h2 className="text-base font-bold text-gray-900">할인권 적용이 가능한<br />인기 이벤트</h2>
        </div>
        <div className="px-4 mb-3">
          <button className="flex items-center gap-1 border border-gray-200 rounded-full px-3 py-1.5">
            <span className="text-xs font-bold text-gray-800">얼글리프팅</span>
            <span className="text-xs text-gray-400">이번주 17건 상담신청</span>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto scroll-hidden">
          {[1, 2, 3].map((i) => <EventCard key={i} showBookmark showDiscountBtn />)}
        </div>
      </section>

      <div className="h-2 bg-gray-50" />

      {/* ── Section 5: 바비톡에서만 구매 가능한 최저가 인기 이벤트 ── */}
      <section className="pt-6 pb-4">
        <div className="px-4 mb-3">
          <h2 className="text-base font-bold text-gray-900">바비톡에서만 구매 가능한<br />최저가 인기 이벤트</h2>
        </div>
        <div className="px-4 grid grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative">
                <div className="h-28 bg-gray-200"
                  style={{ backgroundImage: "repeating-linear-gradient(45deg, #ccc 0, #ccc 1px, transparent 0, transparent 50%)", backgroundSize: "8px 8px" }}
                />
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">Only</div>
                <button className="absolute top-2 right-2 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center shadow">
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
              <div className="p-2">
                <p className="text-xs text-gray-700 leading-snug line-clamp-2">이벤트명이 들어갑니다 이벤트명이 들어갑니다 이벤트명이 들어가...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CountdownTimer />
      <BottomNav />
    </div>
  );
}
