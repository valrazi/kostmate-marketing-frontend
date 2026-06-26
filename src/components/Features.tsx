import { Search, MapPin, BadgeCheck, MessageSquare, Tag, Monitor } from "lucide-react";

export default function Features() {
  const featuresList = [
    {
      title: "Pencarian Cepat",
      desc: "Temukan properti berdasarkan lokasi, harga, dan fasilitas hanya dalam beberapa klik.",
      icon: Search,
    },
    {
      title: "Lokasi Akurat",
      desc: "Dilengkapi informasi lokasi yang jelas untuk memudahkan survei dan akses.",
      icon: MapPin,
    },
    {
      title: "Properti Terverifikasi",
      desc: "Informasi properti lebih terpercaya dan selalu diperbarui.",
      icon: BadgeCheck,
    },
    {
      title: "Hubungi Pemilik Langsung",
      desc: "Komunikasi lebih mudah tanpa perantara.",
      icon: MessageSquare,
    },
    {
      title: "Harga Transparan",
      desc: "Lihat harga dan fasilitas secara jelas sebelum memutuskan.",
      icon: Tag,
    },
    {
      title: "Akses Kapan Saja",
      desc: "Gunakan KostMate melalui smartphone maupun desktop dengan pengalaman yang nyaman.",
      icon: Monitor,
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Cari Properti Lebih Mudah, Cepat, dan Terpercaya
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Temukan properti yang sesuai dengan kebutuhan Anda melalui fitur pencarian yang lengkap dan informasi yang transparan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresList.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative bg-white border border-slate-200 rounded-2xl p-6 pt-12 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Icon Circle - Overlapping at top */}
                <div className="absolute -top-8 left-6 w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  <Icon className="h-7 w-7 text-blue-600" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}