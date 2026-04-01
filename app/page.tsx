"use client";

import AboutSection from "@/components/About/AboutSection";
import ContactSection from "@/components/Contact/ContactSection";
import FAQSection from "@/components/FAQ/FAQSection";
import FeaturedToursSection from "@/components/FeaturedT/FeaturedToursSection";
import Footer from "@/components/footer/Footer";
import Herop from "@/components/Hero/Herop";
import ServicesSection from "@/components/Services/ServicesSection";

import Navbar from "@/components/ui/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import WhyUsSection from "@/components/WhyP/WhyUsSection";
import { useEffect, useState } from "react";
import Loading from "./loading";




export default function Home() {
   const [loading, setLoading] = useState(true);
  useEffect(() => {
    // محاكاة تحميل البيانات لمدة ثانيتين
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;
  
  return (
    
    <>
  
      {/* Navbar */}
      <Navbar />

     {/* Hero */}
<Herop />

{/* About */}
<AboutSection />

{/* Why Us */}
<WhyUsSection />

{/* Services */}
<ServicesSection />

{/* Tours */}
<FeaturedToursSection />

{/* FAQ */}
<FAQSection />

{/* Contact */}
<ContactSection />

<WhatsAppButton />
<Footer />
      {/* باقي الأقسام نقدر نضيفها بعدين: About, Why Us, Featured Tours, FAQ, Contact */}
    </>
  );
}