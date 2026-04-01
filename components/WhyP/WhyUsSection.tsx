"use client";

import { Clock, Car, Globe, DollarSign, CheckCircle, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyUsSection() {

  const features = [
    {
      title: "الالتزام بالمواعيد",
      desc: "نحرص دائمًا على الدقة في المواعيد لضمان تجربة مريحة ومنظمة.",
      icon: <Clock className="w-12 h-12 text-[#C9A227]   mb-4" />,
    },
    {
      title: "سيارات حديثة ومريحة",
      desc: "سيارات حديثة ومجهزة لتوفير أعلى مستويات الراحة.",
      icon: <Car className="w-12 h-12 text-[#C9A227] mb-4" />,
    },
    {
      title: "خدمة 24/7",
      desc: "نحن متواجدون لخدمتك على مدار الساعة لتلبية جميع احتياجاتك.",
      icon: <RefreshCw className="w-12 h-12 text-[#C9A227] mb-4" />,
    },
    {
      title: "فريق متعدد اللغات",
      desc: "فريق محترف يتحدث عدة لغات لتسهيل التواصل مع جميع العملاء.",
      icon: <Globe className="w-12 h-12 text-[#C9A227] mb-4" />,
    },
    {
      title: "أسعار منافسة",
      desc: "نقدم أفضل الأسعار مع الحفاظ على أعلى جودة في الخدمات.",
      icon: <DollarSign className="w-12 h-12 text-[#C9A227] mb-4" />,
    },
    {
      title: "جودة عالية",
      desc: "نلتزم بتقديم خدمات سياحية بمعايير احترافية لضمان رضا العملاء.",
      icon: <CheckCircle className="w-12 h-12 text-[#C9A227] mb-4" />,
    },
  ];

  // animation للكروت (stagger)
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
    <section id="whyus" className="max-w-7xl mx-auto px-4 py-20">

      {/* العنوان */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-[#C9A227] mb-12"
      >
        لماذا تختار شركة وطن تورز؟
      </motion.h2>

      {/* الكروت */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {features.map((itemData, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.5 }}
            className="group flex flex-col items-center border border-[#D4AF37] text-center p-6 shadow-md rounded-xl hover:-translate-y-2 hover:scale-105 hover:border-[#D4AF37]  transition duration-300 bg-[#151515]"
          >
           {itemData.icon}

            <h3 className="text-xl  font-semibold mb-2">
              {itemData.title}
            </h3>

            <p className="text-white text-sm">
              {itemData.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}