"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Plus, Minus } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  q: string;
  a: string;
}

export default function PusatBantuanPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0); // Index 0 (Apakah bisa diakses dari HP?) is open by default

  const faqData: FAQItem[] = [
    {
      q: "Apakah bisa diakses dari HP?",
      a: "Ya, KostMate dapat diakses melalui smartphone maupun laptop kapan saja dan di mana saja.",
    },
    {
      q: "Bagaimana dengan sistem pembayaran?",
      a: "Sistem pembayaran dilakukan langsung ke pemilik properti setelah survei dan kesepakatan. Kami tidak memegang dana Anda.",
    },
    {
      q: "Apakah ada biaya tambahan?",
      a: "Tidak ada biaya tambahan atau biaya admin tersembunyi. Harga yang tertera adalah harga final dari pemilik.",
    },
    {
      q: "Apakah data saya aman?",
      a: "Tentu, kami menggunakan enkripsi standar industri untuk melindungi data pribadi dan informasi Anda.",
    },
    {
      q: "Apakah saya bisa berhenti berlangganan kapan saja?",
      a: "Ya, Anda dapat berhenti menggunakan layanan kami kapan saja tanpa ada penalti atau biaya pembatalan.",
    },
    {
      q: "Apakah tersedia masa trial?",
      a: "Untuk pemilik properti, kami menyediakan masa trial 7 hari untuk mencoba fitur-fitur premium kami.",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Mencari topik bantuan: "${searchQuery}"...`);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex((prev) => (prev === index ? null : index));
  };

  const leftFAQs = faqData.slice(0, 3);
  const rightFAQs = faqData.slice(3, 6);

  return (
    <>
      <Header />

      <main className="flex-grow pt-20 pb-12 bg-slate-50">

        {/* Banner Pencarian */}
        <section className="bg-gradient-to-b from-blue-50/70 to-blue-50/10 rounded-b-[30px] sm:rounded-b-[50px] pt-8 pb-10 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-1 bg-white border border-blue-100 shadow-sm px-3 py-1 rounded-full text-[10px] font-semibold text-blue-600">
              <span className="text-xs">📍</span>
              <span>Cari Kost, Kontrakan & Ruko di Seluruh Indonesia</span>
            </div>

            {/* Judul */}
            <h1 className="text-xl sm:text-2xl font-bold text-blue-600 tracking-tight leading-tight">
              Bagaimana Kami Bisa Membantu Anda?
            </h1>

            {/* Form Pencarian */}
            <form onSubmit={handleSearch} className="max-w-lg mx-auto relative mt-3 shadow-sm shadow-blue-500/5 rounded-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Masukkan kata pencarian di sini"
                className="w-full pl-4 pr-10 py-2 sm:py-2.5 bg-white border border-blue-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer flex items-center justify-center shadow"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </section>

        {/* Kategori Bantuan */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">

            {/* Pencari Properti */}
            <div className="flex flex-col items-center group cursor-pointer max-w-xs mx-auto w-full">
              <div className="w-full h-36 sm:h-44 rounded-xl overflow-hidden shadow-sm border border-slate-100 mb-3 bg-white p-1 hover:shadow-md transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
                  alt="Pencari Properti"
                  className="w-full h-full object-cover rounded-lg group-hover:scale-101 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                Pencari Properti
              </h3>
            </div>

            {/* Pemilik Properti */}
            <div className="flex flex-col items-center group cursor-pointer max-w-xs mx-auto w-full">
              <div className="w-full h-36 sm:h-44 rounded-xl overflow-hidden shadow-sm border border-slate-100 mb-3 bg-white p-1 hover:shadow-md transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
                  alt="Pemilik Properti"
                  className="w-full h-full object-cover rounded-lg group-hover:scale-101 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                Pemilik Properti
              </h3>
            </div>

          </div>
        </section>

        {/* Section FAQ */}
        <section className="bg-white py-12 px-4 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">

            {/* FAQ Header */}
            <div className="text-center mb-8 space-y-1.5">
              <h2 className="text-blue-600 font-bold text-[10px] sm:text-xs uppercase tracking-widest">
                FAQ
              </h2>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Pertanyaan yang Sering Ditanyakan
              </h3>
              <p className="text-slate-500 text-[11px] sm:text-xs max-w-lg mx-auto leading-relaxed">
                Temukan jawaban seputar pencarian properti, pengelolaan properti, hingga penggunaan fitur KostMate dalam satu tempat.
              </p>
            </div>

            {/* FAQ Grid (2 Columns) */}
            <div className="grid md:grid-cols-2 gap-4">

              {/* Kolom Kiri */}
              <div className="space-y-3">
                {leftFAQs.map((faq, idx) => (
                  <div key={idx} className="flex flex-col">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-between transition-colors shadow shadow-blue-500/5 cursor-pointer"
                    >
                      <span className="text-left pr-3 leading-normal">{faq.q}</span>
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                        {openFAQIndex === idx ? (
                          <Minus className="w-3 h-3 text-blue-600" />
                        ) : (
                          <Plus className="w-3 h-3 text-blue-600" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${openFAQIndex === idx
                          ? "max-h-40 opacity-100 mt-1.5 p-4 bg-blue-50 border border-blue-100 rounded-xl"
                          : "max-h-0 opacity-0 p-0"
                        }`}
                    >
                      <p className="text-xs text-slate-700 leading-relaxed text-justify">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Kolom Kanan */}
              <div className="space-y-3">
                {rightFAQs.map((faq, idx) => {
                  const realIndex = idx + 3;
                  return (
                    <div key={realIndex} className="flex flex-col">
                      <button
                        onClick={() => toggleFAQ(realIndex)}
                        className="w-full px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-between transition-colors shadow shadow-blue-500/5 cursor-pointer"
                      >
                        <span className="text-left pr-3 leading-normal">{faq.q}</span>
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                          {openFAQIndex === realIndex ? (
                            <Minus className="w-3 h-3 text-blue-600" />
                          ) : (
                            <Plus className="w-3 h-3 text-blue-600" />
                          )}
                        </div>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${openFAQIndex === realIndex
                            ? "max-h-40 opacity-100 mt-1.5 p-4 bg-blue-50 border border-blue-100 rounded-xl"
                            : "max-h-0 opacity-0 p-0"
                          }`}
                      >
                        <p className="text-xs text-slate-700 leading-relaxed text-justify">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
