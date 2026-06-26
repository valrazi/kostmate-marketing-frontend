"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import {
  Search,
  MapPin,
  Star,
  Wifi,
  Wind,
  Bed,
  Home,
  Building2,
  Calendar,
  CreditCard,
  DollarSign
} from "lucide-react";
import Link from "next/link";

type PropertyType = "semua" | "kost" | "kontrakan" | "ruko";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  type: "kost" | "kontrakan" | "ruko";
  specs: string[];
}

function CariContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get initial filter type from URL params
  const rawType = searchParams.get("type");
  const initialType: PropertyType =
    (rawType === "kost" || rawType === "kontrakan" || rawType === "ruko")
      ? rawType
      : "semua";

  // Filter States
  const [selectedType, setSelectedType] = useState<PropertyType>(initialType);
  const [locationQuery, setLocationQuery] = useState("");
  const [priceRange, setPriceRange] = useState("semua");
  const [duration, setDuration] = useState("semua");

  const getBreadcrumbs = () => {
    switch (selectedType) {
      case "kost":
        return [
          { label: "Home", href: "/" },
          { label: "Kost Depok", href: "/cari?type=kost" },
          { label: "Kost Devina", href: "/cari?type=kost" },
          { label: "Kost Eksklusif Devina 1", active: true }
        ];
      case "kontrakan":
        return [
          { label: "Home", href: "/" },
          { label: "Kontrakan Depok", href: "/cari?type=kontrakan" },
          { label: "Kontrakan Devina", href: "/cari?type=kontrakan" },
          { label: "Rumah Kontrakan Devina Asri", active: true }
        ];
      case "ruko":
        return [
          { label: "Home", href: "/" },
          { label: "Ruko Depok", href: "/cari?type=ruko" },
          { label: "Ruko Devina", href: "/cari?type=ruko" },
          { label: "Ruko Bisnis Devina Square", active: true }
        ];
      default:
        return [
          { label: "Home", href: "/" },
          { label: "Cari Properti", href: "/cari" },
          { label: "Semua Properti", active: true }
        ];
    }
  };

  // Local grid data based on filter states
  const generate12Properties = (typeFilter: PropertyType): Property[] => {
    const items: Property[] = [];
    for (let i = 1; i <= 12; i++) {
      let itemType: "kost" | "kontrakan" | "ruko" = "kost";

      if (typeFilter === "semua") {
        itemType = i % 3 === 1 ? "kost" : i % 3 === 2 ? "kontrakan" : "ruko";
      } else {
        itemType = typeFilter as "kost" | "kontrakan" | "ruko";
      }

      if (itemType === "kost") {
        items.push({
          id: i,
          title: `Kost Eksklusif Devina ${i}`,
          location: i % 2 === 0 ? "Depok, Jawa Barat" : "Margonda, Depok",
          price: "1.500.000",
          rating: 4.8,
          reviews: 120 + i,
          image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80",
          type: "kost",
          specs: ["Wifi", "AC", "Toilet", "Kasur"]
        });
      } else if (itemType === "kontrakan") {
        items.push({
          id: i,
          title: `Rumah Kontrakan Devina Asri ${i}`,
          location: i % 2 === 0 ? "Mampang, Jakarta Selatan" : "Kemang, Jakarta Selatan",
          price: "3.500.000",
          rating: 4.9,
          reviews: 90 + i,
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
          type: "kontrakan",
          specs: ["Wifi", "AC", "Toilet", "Dapur"]
        });
      } else {
        items.push({
          id: i,
          title: `Ruko Bisnis Devina Square ${i}`,
          location: i % 2 === 0 ? "Kelapa Gading, Jakarta Utara" : "Sunter, Jakarta Utara",
          price: "8.500.000",
          rating: 4.7,
          reviews: 60 + i,
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
          type: "ruko",
          specs: ["Lantai 3", "AC Ready", "Toilet 3", "Parkir"]
        });
      }
    }
    return items;
  };

  const propertiesList = generate12Properties(selectedType);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL parameter
    router.push(`/cari?type=${selectedType}`);
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "kost":
        return "bg-blue-50 text-blue-600 border-blue-100";
      case "kontrakan":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "ruko":
        return "bg-amber-50 text-amber-600 border-amber-100";
      default:
        return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };



  return (
    <>
      <Header />

      <main className="flex-grow pt-20 pb-12 bg-slate-50">

        {/* Banner Pencarian */}
        <section className="bg-gradient-to-b from-blue-50/70 to-blue-50/10 rounded-b-[30px] sm:rounded-b-[50px] pt-8 pb-10 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-1 bg-white border border-blue-100 shadow-sm px-3 py-1 rounded-full text-[10px] font-semibold text-blue-600">
              <span className="text-xs">📍</span>
              <span>Cari Kost, Kontrakan & Ruko di Seluruh Indonesia</span>
            </div>

            {/* Judul Utama */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 tracking-tight leading-tight max-w-3xl mx-auto">
              Temukan Kost, Kontrakan, dan Ruko Terbaik dengan Mudah
            </h1>

            {/* Horizontal Filter Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-full border border-slate-200 p-3 sm:p-2 shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 items-center mt-6"
            >
              {/* Lokasi */}
              <div className="flex items-center gap-2 px-2.5 border-r border-slate-100 last:border-0">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <div className="flex-1 text-left">
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Lokasi</label>
                  <input
                    type="text"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    placeholder="Masukkan Lokasi"
                    className="w-full text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Jenis Properti */}
              <div className="flex items-center gap-2 px-2.5 border-r border-slate-100 last:border-0">
                <Home className="w-4 h-4 text-blue-600 shrink-0" />
                <div className="flex-1 text-left">
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Jenis Properti</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value as PropertyType)}
                    className="w-full text-xs font-semibold text-slate-800 bg-transparent focus:outline-none appearance-none cursor-pointer pr-3"
                  >
                    <option value="semua">Semua</option>
                    <option value="kost">Kost</option>
                    <option value="kontrakan">Kontrakan</option>
                    <option value="ruko">Ruko</option>
                  </select>
                </div>
              </div>

              {/* Harga */}
              <div className="flex items-center gap-2 px-2.5 border-r border-slate-100 last:border-0">
                <DollarSign className="w-4 h-4 text-blue-600 shrink-0" />
                <div className="flex-1 text-left">
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Harga</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full text-xs font-semibold text-slate-800 bg-transparent focus:outline-none appearance-none cursor-pointer pr-3"
                  >
                    <option value="semua">Tentukan Harga</option>
                    <option value="murah">&lt; Rp 2.000.000</option>
                    <option value="sedang">Rp 2.000.000 - Rp 5.000.000</option>
                    <option value="mahal">&gt; Rp 5.000.000</option>
                  </select>
                </div>
              </div>

              {/* Durasi Sewa */}
              <div className="flex items-center gap-2 px-2.5 border-r border-slate-100 last:border-0">
                <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                <div className="flex-1 text-left">
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Durasi Sewa</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full text-xs font-semibold text-slate-800 bg-transparent focus:outline-none appearance-none cursor-pointer pr-3"
                  >
                    <option value="semua">Semua Durasi</option>
                    <option value="harian">Harian</option>
                    <option value="bulanan">Bulanan</option>
                    <option value="tahunan">Tahunan</option>
                  </select>
                </div>
              </div>

              {/* Tombol Submit */}
              <div className="px-1.5">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl sm:rounded-full font-bold text-xs shadow-md shadow-blue-500/10 transition hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Cari Sekarang</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Breadcrumbs Section */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center text-center gap-1 text-[11px] text-slate-500 font-medium">
              {getBreadcrumbs().map((crumb, idx, arr) => (
                <span key={idx} className="flex items-center gap-1">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="inline-flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full transition shadow-sm"
                    >
                      {idx === 0 && <Home className="w-3 h-3 text-blue-600" />}
                      <span>{crumb.label}</span>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center bg-blue-600 text-white font-bold px-2 py-0.5 rounded-full shadow-sm">
                      <span>{crumb.label}</span>
                    </span>
                  )}
                  {idx < arr.length - 1 && <span className="text-slate-300 font-bold mx-0.5">&gt;</span>}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Property Grid List */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {propertiesList.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col group p-2.5"
              >
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden rounded-2xl">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  {/* Badge */}
                  <span className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase border ${getTypeBadgeColor(property.type)} shadow-sm`}>
                    {property.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-3.5 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {property.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-slate-500 text-[10px] sm:text-xs mt-1.5 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-2.5">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-[10px] sm:text-xs font-bold text-slate-800">{property.rating}</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium">({property.reviews} Ulasan)</span>
                  </div>

                  {/* Specs / Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {property.specs.map((spec, i) => (
                      <span key={i} className="text-[9px] sm:text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-slate-100 my-4"></div>

                  {/* Price & Detail CTA */}
                  <div className="mt-auto flex flex-col gap-2.5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm sm:text-base font-extrabold text-blue-600">Rp. {property.price}</span>
                      <span className="text-[10px] text-slate-400 font-semibold">/ bln</span>
                    </div>
                    <Link
                      href={`/detail?type=${property.type}`}
                      className="block w-full text-center py-2 text-xs sm:text-sm font-bold text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 transition cursor-pointer"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center-aligned 'Lihat Lebih Banyak' button */}
          <div className="text-center mt-12 mb-8">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 cursor-pointer">
              Lihat Lebih Banyak
            </button>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-8">
          <HowItWorks />
        </section>

      </main>

      <Footer />
    </>
  );
}

export default function CariPage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    }>
      <CariContent />
    </Suspense>
  );
}
