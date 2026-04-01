"use client";


import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "كم سعر الرحلة الى المطار؟",
    answer:
      "توصيل إلى مطار اسطنبول فقط 40 $، مع خدمة استقبال احترافية. وتوصيل الى مطار صبيحة فقط 45 $ (مناطق تقسيم والفاتح)",
  },
  {
    question: "كيف يمكنني الحجز؟",
    answer:
      "يمكنك الحجز عبر نموذج التواصل، أو الاتصال بنا مباشرة على رقم الواتساب.",
  },
  {
    question: "هل توجد خصومات للمجموعات؟",
    answer:
      "نعم، لدينا عروض خاصة للمجموعات الكبيرة، يرجى التواصل معنا لمعرفة التفاصيل.",
  },
];

export default function FAQSection() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="faq"
      className="max-w-5xl mx-auto px-4 py-20 sm:py-28 lg:py-32"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-14 text-[#C9A227]"
      >
        الأسئلة الشائعة
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, idx) => (
            <motion.div key={idx} variants={item}>
              <AccordionItem
                value={`item-${idx}`}
                className="group border border-[#D4AF37]  rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-[#151515]"
              >
                <AccordionTrigger className="flex items-center justify-between px-6 py-5 text-lg sm:text-xl font-semibold text-white hover:bg-[#C9A227] transition">
                  <span>{faq.question}</span>
                 
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-5 text-white text-base sm:text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}