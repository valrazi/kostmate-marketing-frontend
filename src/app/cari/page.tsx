"use client";

import { useState, Suspense, useEffect } from "react";
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
  DollarSign,
  ChevronDown,
  LayoutGrid
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

  // Sync selectedType state with searchParams when URL type query changes
  useEffect(() => {
    const rawType = searchParams.get("type");
    const currentType: PropertyType =
      (rawType === "kost" || rawType === "kontrakan" || rawType === "ruko")
        ? rawType
        : "semua";
    setSelectedType(currentType);
  }, [searchParams]);

  const getBreadcrumbs = () => {
    return [
      {
        label: "Kost",
        href: "/cari?type=kost",
        active: selectedType === "kost",
        bgClass: selectedType === "kost"
          ? "bg-blue-600 text-white font-bold border border-blue-600 shadow-sm"
          : "bg-blue-50 hover:bg-blue-100 text-blue-600/70 border border-blue-100/50"
      },
      {
        label: "Kontrakan",
        href: "/cari?type=kontrakan",
        active: selectedType === "kontrakan",
        bgClass: selectedType === "kontrakan"
          ? "bg-emerald-600 text-white font-bold border border-emerald-600 shadow-sm"
          : "bg-emerald-50 hover:bg-emerald-100 text-emerald-600/70 border border-emerald-100/50"
      },
      {
        label: "Ruko",
        href: "/cari?type=ruko",
        active: selectedType === "ruko",
        bgClass: selectedType === "ruko"
          ? "bg-red-600 text-white font-bold border border-red-600 shadow-sm"
          : "bg-red-50 hover:bg-red-100 text-red-600/70 border border-red-100/50"
      }
    ];
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
            {/* Floating Search Widget */}
            <div className="bg-white rounded-3xl shadow-lg shadow-slate-350/30 p-5 border border-slate-100 max-w-5xl mx-auto mt-6">
              <form
                onSubmit={handleSearchSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4 items-center"
              >
                {/* Lokasi */}
                <div className="relative flex items-center gap-3 border border-slate-200 rounded-2xl p-3.5 bg-white hover:border-blue-300 hover:shadow-md transition-all w-full h-[70px] lg:col-span-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                  <div className="flex flex-col text-left w-full pr-6">
                    <span className="text-[11px] font-bold text-slate-500 tracking-wide leading-none mb-1">Lokasi</span>
                    <select
                      value={locationQuery}
                      onChange={(e) => setLocationQuery(e.target.value)}
                      className="w-full text-slate-800 text-sm font-semibold bg-transparent border-none outline-none p-0 focus:ring-0 cursor-pointer appearance-none leading-tight"
                    >
                      <option value="">Masukkan Lokasi</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="Bandung">Bandung</option>
                      <option value="Surabaya">Surabaya</option>
                      <option value="Yogyakarta">Yogyakarta</option>
                      <option value="Depok">Depok</option>
                      <option value="Tangerang">Tangerang</option>
                    </select>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" />
                </div>

                {/* Jenis Properti */}
                <div className="relative flex items-center gap-3 border border-slate-200 rounded-2xl p-3.5 bg-white hover:border-blue-300 hover:shadow-md transition-all w-full h-[70px] lg:col-span-3">
                  <LayoutGrid className="w-5 h-5 text-blue-600 shrink-0" />
                  <div className="flex flex-col text-left w-full pr-6">
                    <span className="text-[11px] font-bold text-slate-500 tracking-wide leading-none mb-1">Jenis Properti</span>
                    <select
                      value={selectedType}
                      onChange={(e) => {
                        router.push(`/cari?type=${e.target.value}`);
                      }}
                      className="w-full text-slate-800 text-sm font-semibold bg-transparent border-none outline-none p-0 focus:ring-0 cursor-pointer appearance-none leading-tight"
                    >
                      <option value="semua">Semua</option>
                      <option value="kost">Kost</option>
                      <option value="kontrakan">Kontrakan</option>
                      <option value="ruko">Ruko</option>
                    </select>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" />
                </div>

                {/* Harga */}
                <div className="relative flex items-center gap-3 border border-slate-200 rounded-2xl p-3.5 bg-white hover:border-blue-300 hover:shadow-md transition-all w-full h-[70px] lg:col-span-2">
                  <div className="flex flex-col text-left w-full pr-6">
                    <span className="text-[11px] font-bold text-slate-500 tracking-wide leading-none mb-1">Harga</span>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full text-slate-800 text-sm font-semibold bg-transparent border-none outline-none p-0 focus:ring-0 cursor-pointer appearance-none leading-tight"
                    >
                      <option value="semua">Min - Maks</option>
                      <option value="under-1m">Di bawah Rp 1 Juta</option>
                      <option value="1m-2m">Rp 1 - 2 Juta</option>
                      <option value="2m-3m">Rp 2 - 3 Juta</option>
                      <option value="3m-5m">Rp 3 - 5 Juta</option>
                      <option value="over-5m">Di atas Rp 5 Juta</option>
                    </select>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" />
                </div>

                {/* Durasi Sewa */}
                <div className="relative flex items-center gap-3 border border-slate-200 rounded-2xl p-3.5 bg-white hover:border-blue-300 hover:shadow-md transition-all w-full h-[70px] lg:col-span-2">
                  <div className="flex flex-col text-left w-full pr-6">
                    <span className="text-[11px] font-bold text-slate-500 tracking-wide leading-none mb-1">Durasi Sewa</span>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full text-slate-800 text-sm font-semibold bg-transparent border-none outline-none p-0 focus:ring-0 cursor-pointer appearance-none leading-tight"
                    >
                      <option value="semua">Semua Durasi</option>
                      <option value="Bulanan">Bulanan</option>
                      <option value="3 Bulan">3 Bulan</option>
                      <option value="6 Bulan">6 Bulan</option>
                      <option value="Tahunan">Tahunan</option>
                    </select>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" />
                </div>

                {/* Tombol Submit */}
                <div className="sm:col-span-2 lg:col-span-2">
                  <button
                    type="submit"
                    className="w-full h-[70px] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-sm"
                  >
                    <Search className="w-5 h-5 shrink-0" />
                    <span>Cari Sekarang</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Breadcrumbs Section */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center text-center gap-1 text-[11px] text-slate-500 font-medium">
              {getBreadcrumbs().map((crumb, idx, arr) => (
                <span key={idx} className="flex items-center gap-1">
                  {crumb.href && !crumb.active ? (
                    <Link
                      href={crumb.href}
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full transition shadow-sm ${crumb.bgClass}`}
                    >
                      <span>{crumb.label}</span>
                    </Link>
                  ) : (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full shadow-sm ${crumb.bgClass}`}>
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
