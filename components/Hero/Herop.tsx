"use client"; // هنا فقط لأن فيه animation و state

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Herop = () => {
  return (
    <section className="relative w-full h-125 md:h-175 lg:h-225">
      {/* Video Background */}
      <video
        src="/vidp.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-48 h-28 mb-6"
        >
          <Image
            src="/WhatsApp_Image_2026-03-25_at_23.26.46-removebg-preview.png"
            alt="Watan Tours Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 192px, 384px"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          اكتشف أجمل الرحلات مع{" "}
          <span className="bg-linear-to-r from-[#C9A227] via-[#E6C15A] to-[#FFF3B0] bg-clip-text text-transparent">
            وطن تورز
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-lg md:text-2xl mb-6 max-w-2xl"
        >
          نقدم لك أفضل الرحلات السياحية وخدمات النقل، بما في ذلك خدمة توصيل المطار لضمان رحلة مريحة وآمنة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Link href="#contact">
            <Button className="bg-[#C9A227] hover:bg-[#E5C158] text-white px-6 py-3 text-lg sm:text-xl rounded-md shadow-lg transition transform hover:scale-105">
              احجز الآن
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Herop;