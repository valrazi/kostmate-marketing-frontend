import { Home, Key, Store, ArrowRight, Bed, Building } from "lucide-react";
import Link from "next/link";

export default function Categories() {
  const categoriesList = [
    {
      title: "Kost",
      icon: Bed,
      image:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=500&q=80",
      description:
        "Temukan kost putra, putri, atau campur dengan fasilitas lengkap dan lokasi strategis sesuai kebutuhan Anda.",
      btnText: "Lihat Kost",
      colorTheme: {
        text: "text-blue-600",
        bg: "bg-blue-600",
        border: "border-blue-600",
        lightBg: "bg-blue-50",
        hoverBg: "hover:bg-blue-600",
        hoverText: "hover:text-white",
      },
    },
    {
      title: "Kontrakan",
      icon: Home,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
      description:
        "Temukan rumah kontrakan yang nyaman, aman, dan cocok untuk kebutuhan keluarga Anda.",
      btnText: "Lihat Kontrakan",
      colorTheme: {
        text: "text-emerald-600",
        bg: "bg-emerald-600",
        border: "border-emerald-600",
        lightBg: "bg-emerald-50",
        hoverBg: "hover:bg-emerald-600",
        hoverText: "hover:text-white",
      },
    },
    {
      title: "Ruko",
      icon: Building,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
      description:
        "Temukan ruko strategis dengan lokasi potensial untuk mengembangkan bisnis dan meningkatkan peluang usaha Anda.",
      btnText: "Lihat Ruko",
      colorTheme: {
        text: "text-amber-600",
        bg: "bg-amber-600",
        border: "border-amber-600",
        lightBg: "bg-amber-50",
        hoverBg: "hover:bg-amber-600",
        hoverText: "hover:text-white",
      },
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Temukan Properti yang Tepat untuk Anda
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
            Mulai dari kost untuk mahasiswa dan pekerja, kontrakan untuk keluarga,
            hingga ruko strategis untuk mengembangkan bisnis.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categoriesList.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group flex flex-col h-full bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Icon Badge */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${category.colorTheme.lightBg} mb-4`}>
                    <Icon className={`w-6 h-6 ${category.colorTheme.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                    {category.description}
                  </p>

                  {/* Button - FIXED */}
                  <Link
                    href="#properties"
                    className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${category.colorTheme.border} ${category.colorTheme.text} ${category.colorTheme.hoverBg} ${category.colorTheme.hoverText} hover:border-transparent`}
                  >
                    <span>{category.btnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}