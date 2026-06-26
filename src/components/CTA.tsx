import { Search, Building2 } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white py-24">

      {/* Background Full Width */}
      <div className="w-full bg-blue-800 rounded-3xl overflow-hidden">

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">

            {/* ================= LEFT ================= */}
            <div className="lg:col-span-5 flex justify-center">

              <div className="bg-white rounded-2xl p-4 shadow-xl">
                <div className="relative flex items-center justify-center h-56 w-[270px]">

                  {/* Left */}
                  <div className="absolute left-0 w-24 h-40 rounded-xl overflow-hidden shadow-lg -rotate-3 z-10">
                    <img
                      src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=300&q=80"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-blue-900/90 text-white text-[9px] font-semibold rounded px-2 py-1 flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      Kost Modern
                    </div>
                  </div>

                  {/* Center */}
                  <div className="relative w-28 h-44 rounded-xl overflow-hidden shadow-2xl z-20">
                    <img
                      src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=300&q=80"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-blue-900/90 text-white text-[9px] font-semibold rounded px-2 py-1 flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      Kontrakan
                    </div>
                  </div>

                  {/* Right */}
                  <div className="absolute right-0 w-24 h-40 rounded-xl overflow-hidden shadow-lg rotate-3 z-10">
                    <img
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-blue-900/90 text-white text-[9px] font-semibold rounded px-2 py-1 flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      Ruko
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* ================= RIGHT ================= */}
            <div className="lg:col-span-7 text-center lg:text-left">

              <h2 className="text-3xl md:text-3xl font-bold text-white mb-4">
                Temukan Properti Impian Anda
              </h2>

              <p className="text-blue-100 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
                Temukan Kost, Kontrakan, dan Ruko terbaik dengan mudah.
                Ribuan properti siap disewa sesuai kebutuhan Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                <Link
                  href="#properties"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white rounded-xl text-white font-semibold hover:bg-white hover:text-blue-700 transition"
                >
                  <Search className="w-4 h-4" />
                  Cari Properti
                </Link>

                <Link
                  href="#pasang-properti"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-100 transition shadow-lg"
                >
                  <Building2 className="w-4 h-4" />
                  Pasang Properti
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}