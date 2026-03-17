"use client";
import { useState } from "react";

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const total = 10;

  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #999 0, #999 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px"
        }}
      />

      {/* 텍스트 */}
      <div className="absolute inset-0 flex flex-col justify-center px-5">
        <p className="text-xs text-gray-600 mb-1">바비인 협찬요</p>
        <h2 className="text-2xl font-bold text-gray-800 leading-tight">
          자연스러움에<br />화려함을 더하다
        </h2>
      </div>

      {/* 페이지 인디케이터 */}
      <div className="absolute bottom-3 right-3 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full">
        {current + 1}/{total}
      </div>
    </div>
  );
}
