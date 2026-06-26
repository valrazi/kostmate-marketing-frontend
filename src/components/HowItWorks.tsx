import { Search, Home, MessageCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Cari Lokasi",
      desc: "Masukkan lokasi, jenis property, dan filter yang Anda inginkan.",
      icon: Search,
    },
    {
      number: 2,
      title: "Pilih Properti",
      desc: "Lihat detail property dan pilih yang paling sesuai untuk Anda.",
      icon: Home,
    },
    {
      number: 3,
      title: "Hubungi Pemilik",
      desc: "Hubungi pemilik langsung dan atur jadwal kunjungan.",
      icon: MessageCircle,
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-4 rounded-[50px]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Cara Kerja KostMate
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Cari properti impian Anda dalam 3 langkah mudah
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-5"
              >
                {/* Icon Circle with Number Badge */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}