"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState({ h: 5, m: 30, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) { m--; s = 59; }
        else if (h > 0) { h--; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="fixed bottom-[56px] left-0 right-0 z-40 max-w-[430px] mx-auto">
      <div className="bg-purple-600 text-white text-center py-2 text-sm font-medium">
        {pad(time.h)}:{pad(time.m)}:{pad(time.s)} 까지 할인쿠폰 사용가능
      </div>
    </div>
  );
}
