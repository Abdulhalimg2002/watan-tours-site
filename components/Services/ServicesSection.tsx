"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "النقل من وإلى المطار",
    desc: "توصيل مريح وسريع إلى مطارات إسطنبول مع خدمة استقبال احترافية.",
    img: "/Gemini_Generated_Image_7t6d4f7t6d4f7t6d.png",
  },
  {
    title: "النقل داخل وخارج إسطنبول",
    desc: "خدمة توصيل متوفرة 24/7 بسيارات حديثة ومريحة داخل وخارج المدينة.",
    img: "/Gemini_Generated_Image_g6iklug6iklug6ik.png",
  },
  {
    title: "سيارات VIP",
    desc: "جولات خاصة بسيارات VIP حديثة توفر لك الراحة والخصوصية.",
    img: "/Vip.jpeg",
  },
  {
    title: "جولات سياحية",
    desc: "اكتشف أجمل الوجهات السياحية داخل وخارج إسطنبول مع جولات منظمة وتجارب لا تُنسى.",
    img: "/Gemini_Generated_Image_dh48ltdh48ltdh48.png",
  },
];

const ServicesSection = () => {

  // animation container للكروت
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-20">

      {/* العنوان */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-[#C9A227] mb-12"
      >
        خدماتنا
      </motion.h2>

      {/* الكروت */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.5 }}
            className="shadow-md rounded-xl overflow-hidden hover:scale-105  border border-[#2A2A2A] hover:-translate-y-2 transition duration-300  bg-[#151515]"
          >
            {/* صورة */}
            <div className="relative w-full h-48">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>

            {/* المحتوى */}
            <div className="p-5 text-center ">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-white text-sm">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;