"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Home,
  Info,
  ShieldCheck,
  Briefcase,
  Plane,
  HelpCircle,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const Navbarlinks = [
    { id: "hero", name: "الرئيسية", icon: <Home size={18} /> },
    { id: "about", name: "عن الشركة", icon: <Info size={18} /> },
    { id: "whyus", name: "لماذا نحن", icon: <ShieldCheck size={18} /> },
    { id: "services", name: "خدماتنا", icon: <Briefcase size={18} /> },
    { id: "tours", name: "الرحلات المميزة", icon: <Plane size={18} /> },
    { id: "faq", name: "الأسئلة الشائعة", icon: <HelpCircle size={18} /> },
    { id: "contact", name: "تواصل معنا", icon: <Phone size={18} /> },
  ];

  useEffect(() => {
    const navbarHeight = 120; // ارتفاع navbar تقريبي

    const handleScroll = () => {
      const scrollTop = window.scrollY + navbarHeight / 2; // نقطة أعلى الـ navbar

      let currentSection = "hero"; // افتراضي hero

      Navbarlinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollTop >= top && scrollTop < bottom) {
            currentSection = link.id;
          }
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // لتحديد active فور التحميل

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `flex items-center gap-2 px-3 py-2 rounded transition ${
      active === id
        ? "text-[#C9A227] font-bold"
                  : "text-white hover:text-[#C9A227]"
    }`;

  return (
    <nav className="fixed top-0 w-full bg-[#0B0B0B] shadow-md z-50 rounded-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="relative w-28 h-16">
          <Image
            src="/WhatsApp_Image_2026-03-25_at_23.26.46-removebg-preview.png"
            alt="logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 112px, 140px"
          />
        </div>

        <div className="hidden lg:flex space-x-6">
          {Navbarlinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setMobileOpen(false);
                setActive(link.id);
              }}
              className={`flex items-center gap-1 ${
                active === link.id
                  ? "text-[#C9A227] font-bold"
                  : "text-white hover:text-[#C9A227]"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <button
            className="text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-[#111] transition-all duration-300">
          <div className="px-3 pt-3 pb-4 space-y-2">
            {Navbarlinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                className={linkClass(link.id)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}