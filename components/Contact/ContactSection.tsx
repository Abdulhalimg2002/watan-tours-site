"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "905058995605"; // ضع رقم WhatsApp هنا

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `مرحبًا، اسمي: ${name}%0Aالرسالة: ${message}`;
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`;

    window.open(url, "_blank"); // فتح WhatsApp في نافذة جديدة

    setName("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 ">
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#C9A227] mb-12"
        >
          تواصل معنا
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#151515] border border-[#D4AF37]  shadow-xl rounded-2xl p-6 sm:p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <FieldGroup className="flex flex-col gap-5">
              
              {/* الاسم */}
              <Field className="w-full flex flex-col gap-2">
                <FieldLabel htmlFor="name" className="text-white text-sm sm:text-base font-medium">
                  الاسم
                </FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="أدخل اسمك"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[#D4AF37] px-4 py-2 text-base sm:text-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] placeholder:text-white"
                />
              </Field>

              {/* الرسالة */}
              <Field className="w-full flex flex-col gap-2">
                <FieldLabel htmlFor="message" className="text-white text-sm sm:text-base font-medium">
                  الرسالة
                </FieldLabel>
                <Textarea
                  id="message"
                  placeholder="اكتب رسالتك هنا"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full min-h-30 sm:min-h-35 rounded-xl placeholder:text-white border border-[#D4AF37] px-4 py-2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] resize-none"
                />
              </Field>

              {/* زر الإرسال */}
              <Field>
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#E5C158] text-white text-base sm:text-lg py-3 sm:py-4 rounded-xl font-semibold transition-transform active:scale-95"
                >
                  <Send className="w-5 h-5" /> إرسال
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
