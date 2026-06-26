"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  // Tidak ada FAQ yang terbuka saat pertama kali load
  const [open, setOpen] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpen((prev) => (prev === index ? null : index));
  };

  const leftFAQs = faqData.slice(0, 3);
  const rightFAQs = faqData.slice(3, 6);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            FAQ
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h3>

          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Temukan jawaban seputar pencarian properti, pengelolaan properti,
            hingga penggunaan fitur KostMate dalam satu tempat.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* Kolom Kiri */}
          <div className="space-y-4">
            {leftFAQs.map((faq, idx) => (
              <div key={idx}>
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-5 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium flex items-center justify-between transition-all duration-200"
                >
                  <span className="text-left">{faq.q}</span>

                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    {open === idx ? (
                      <Minus className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === idx
                      ? "max-h-40 opacity-100 mt-2 p-5 bg-blue-50 rounded-xl"
                      : "max-h-0 opacity-0 p-0"
                  }`}
                >
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-4">
            {rightFAQs.map((faq, idx) => {
              const realIndex = idx + 3;

              return (
                <div key={realIndex}>
                  <button
                    onClick={() => toggleFAQ(realIndex)}
                    className="w-full px-5 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium flex items-center justify-between transition-all duration-200"
                  >
                    <span className="text-left">{faq.q}</span>

                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      {open === realIndex ? (
                        <Minus className="w-4 h-4 text-blue-600" />
                      ) : (
                        <Plus className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open === realIndex
                        ? "max-h-40 opacity-100 mt-2 p-5 bg-blue-50 rounded-xl"
                        : "max-h-0 opacity-0 p-0"
                    }`}
                  >
                    <p className="text-sm text-slate-700 leading-relaxed">
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
  );
}