import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Categories from "@/components/Categories";
import PropertySection from "@/components/PropertySection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Categories />
        <PropertySection />
        <HowItWorks />
        <Features />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
