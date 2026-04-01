"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
const loadingC=()=>{
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // يتحرك كل 20ms → 2 ثانية تقريباً للتحميل الكامل
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="flex flex-col justify-center items-center h-screen bg-[#111111] px-4">
  {/* Logo */}
  <div className="w-32 h-32 relative mb-6">
   <Image
    src="/WhatsApp_Image_2026-03-25_at_23.26.46-removebg-preview.png"
    alt="لوجو وطن تورز"
    fill
    className="object-contain"
    sizes="128px"  // يعكس حجم الحاوية الثابتة (32*4=128px)
  />
  </div>

  {/* نص التحميل */}
  <p className="text-white text-lg font-medium mb-2 text-center">
    جارٍ التحميل...
  </p>

  {/* Progress Bar */}
  <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden mb-2">
    <div
      className="h-4 bg-[#C9A227] transition-all duration-100"
      style={{ width: `${progress}%` }}
    ></div>
  </div>

  {/* النسبة المئوية */}
  <p className="text-white font-semibold">{progress}%</p>
</div>
  );
}
export default loadingC;