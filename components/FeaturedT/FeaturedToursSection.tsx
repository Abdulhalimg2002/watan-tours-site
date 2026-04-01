"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const tours = [
  { title: "رحلة بورصا", desc: "رحلة يومية ممتعة تشمل الجبال والطبيعة والتلفريك.", img: "/bursa.jpg" },
  { title: "رحلة صبنجة ومعشوقية", desc: "استمتع بالبحيرات والشلالات والطبيعة الساحرة.", img: "/maşu2.jpg" },
  { title: "جزيرة الأميرات", desc: "استمتع بجولة هادئة بعيدًا عن صخب المدينة.", img: "/king2.jpg" },
  { title: "يالوا", desc: "رحلة إلى الطبيعة والينابيع الساخنة.", img: "/yaloa1.jpg" },
  { title: "شيلا وأغوا", desc: "استكشف جمال الطبيعة بين البحر والغابات.", img: "/şila.jpg" },
  { title: "طرابزون", desc: "الجبال الخضراء والبحيرات مثل أوزنجول.", img: "/trabzon.jpg" },
  { title: "أنطاليا", desc: "شواطئ ومنتجعات فاخرة وأنشطة رائعة.", img: "/antalya.jpg" },
  { title: "كبادوكيا", desc: "تجربة المناطيد والمناظر الصخرية المذهلة.", img: "/kab.webp" },
];

export default function FeaturedToursSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(tours.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTours = tours.slice(startIndex, startIndex + itemsPerPage);

  // animation container للكروت
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="tours" className="max-w-7xl mx-auto px-4 py-20">

      {/* العنوان */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-[#C9A227] mb-12"
      >
        الرحلات المميزة
      </motion.h2>

      {/* Tours */}
      <motion.div
        key={currentPage}
  variants={container}
  initial="hidden"
  animate="show"
  className="grid md:grid-cols-3 gap-8"
      >
        {currentTours.map((tour, i) => (
          <motion.div
            key={i}
            variants={item}
            transition={{ duration: 0.5 }}
            className="shadow-md rounded-xl overflow-hidden hover:scale-105  border border-[#2A2A2A] hover:-translate-y-2 transition duration-300 bg-[#151515]"
          >
            <div className="relative w-full h-64">
              <Image
                src={tour.img}
                alt={tour.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
              <p className="mb-2 text-white">{tour.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <Pagination className="mt-10" >
        <PaginationContent>

          <PaginationItem>
            <PaginationPrevious
            className="bg-[#C9A227] text-white hover:bg-[#C9A227]  rounded-md"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                className="bg-[#C9A227] text-white hover:bg-[#E5C158] rounded-md " 
                isActive={currentPage === i + 1}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
            className="bg-[#C9A227] text-white hover:bg-[#C9A227] rounded-md"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            />
          </PaginationItem>

        </PaginationContent>
      </Pagination>

    </section>
  );
}