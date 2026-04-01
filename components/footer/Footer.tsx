"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white mt-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-right">
          
          {/* Company */}
          <div className="flex justify-center sm:justify-end">
            <Image
              src="/WhatsApp_Image_2026-03-25_at_23.26.46-removebg-preview.png"
              alt="Logo"
              width={150}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">
              روابط سريعة
            </h4>

            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link href="#hero" className="text-white hover:text-[#C9A227] transition">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white hover:text-[#C9A227] transition">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white hover:text-[#C9A227] transition">
                  عن الشركة
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white hover:text-[#C9A227] transition">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">
                 تواصل معنا
            </h4>

          <div className="flex flex-col gap-3 text-white items-center sm:items-end w-fit mx-auto sm:mr-0">

  <div className="flex items-center gap-2 flex-row-reverse">
    <span dir="ltr" className="text-sm sm:text-base">
      +90 505 899 56 05
    </span>

    <a
      href="https://wa.me/905058995605"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Phone className="w-5 h-5 text-[#C9A227] hover:scale-110 transition" />
    </a>
  </div>

</div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#D4AF37] mt-10 pt-6 text-center text-white text-xs sm:text-sm">
          © {new Date().getFullYear()} جميع الحقوق محفوظة - شركة وطن تورز
        </div>

      </div>
    </footer>
  );
}