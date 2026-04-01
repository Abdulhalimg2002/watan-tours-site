"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-20 ">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* صورة */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 h-64 md:h-96"
        >
          <Image
            src="/WhatsApp_Image_2026-03-25_at_23.26.46-removebg-preview.png"
            alt="عن الشركة"
            fill
            className="object-cover rounded-lg"
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* النص */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#C9A227] text-center ">
            عن شركة وطن تورز
          </h2>

          <p className="text-lg md:text-xl mb-4 text-white leading-relaxed text-justify font-bold">
            وطن تورز هي شركة سياحية رائدة في إسطنبول، متخصصة في تقديم خدمات النقل السياحي والرحلات بجودة عالية ومعايير احترافية تضمن للعميل الراحة، الأمان، والدقة في كل خطوة من رحلته.  
            نحن نؤمن بأن السفر تجربة تُعاش، لذلك نحرص على أن تكون كل تفاصيلها سلسة وممتعة، بدءًا من الحجز وحتى الوصول إلى وجهتك.
           
            فريقنا المحترف لديه خبرة واسعة في تنظيم الرحلات، ويحرص دائمًا على تقديم أعلى مستوى من الخدمة والراحة لجميع المسافرين.
          </p>
        </motion.div>

      </div>
    </section>
  );
}