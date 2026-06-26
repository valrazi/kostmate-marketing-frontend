"use client";

import { useState } from "react";
import { Search, MapPin, LayoutGrid, ChevronDown, CalendarDays, Sparkles, FileText, ShieldCheck, Building2 } from "lucide-react";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [duration, setDuration] = useState("");


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Mencari hunian di: ${location || "Semua Lokasi"}, Tipe: ${propertyType || "Semua"}, Harga: ${priceRange || "Semua Harga"}, Durasi: ${duration || "Semua Durasi"}`
    );
  };

  return (
    <section className="bg-white relative pb-5 overflow-hidden">

      {/* Blue Background Container - Matches Search Widget Width */}
      <div className="bg-blue-50 rounded-b-[60px] md:rounded-b-[120px] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Text Left Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">

              {/* Promo Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-100 text-brand-700 rounded-full text-xs font-semibold mb-5 shadow-sm shadow-brand-500/5">
                <Sparkles className="h-3.5 w-3.5 text-brand-600 animate-pulse" />
                <span>Platform Cari Kost #1 di Indonesia</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-blue-700 leading-[1.15] mb-5">
                Temukan Kost, Kontrakan, & Ruko Terbaik dengan Mudah
              </h1>

              {/* Subtitle */}
              <p className="text-sm text-slate-600 leading-relaxed mb-3 max-w-xl">
                Ribuan pilihan kost, kontrakan, dan ruko tersedia untuk tempat tinggal maupun kebutuhan usaha Anda.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto mb-3">

                {/* Cari Properti */}
                <a
                  href="#properties"
                  className="flex items-center justify-center gap-2 px-3 py-3 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Search size={14} />
                  Cari Properti
                </a>

                {/* Pasang Properti */}
                <a
                  href="#pasang-properti"
                  className="flex items-center justify-center gap-2 px-3 py-3 bg-white border border-slate-200 hover:border-brand-500 text-slate-700 hover:text-brand-600 text-xs font-semibold rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Building2 size={14} />
                  Pasang Properti
                </a>
              </div>

              {/* Verification Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mt-2 w-full">

                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600 bg-blue-100 px-3 py-1.5 rounded-full">
                  <LayoutGrid className="w-3.5 h-3.5 text-brand-600" />
                  <span>Banyak Pilihan</span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600 bg-blue-100 px-3 py-1.5 rounded-full">
                  <FileText className="w-3.5 h-3.5 text-brand-600" />
                  <span>Informasi Lengkap</span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600 bg-blue-100 px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  <span>Aman & Terpercaya</span>
                </div>

              </div>
            </div>

            {/* Collage Right Column */}
            <div className="lg:col-span-6 relative flex justify-center items-center h-[280px] sm:h-[320px]">
              {/* Background Accent Box */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100/40 to-blue-50/20 rounded-3xl -rotate-2 -z-20 scale-95"></div>

              {/* Collage Container */}
              <div className="relative w-full h-full flex items-center justify-center gap-3 px-4">

                {/* Image 1: Left Interior */}
                <div className="w-[30%] h-[75%] rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:scale-105 transition-transform duration-300 -translate-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80"
                    alt="Kost Kamar Interior"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image 2: Center Building */}
                <div className="w-[36%] h-[90%] rounded-2xl overflow-hidden shadow-2xl shadow-slate-300 hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80"
                    alt="Tampak Luar Properti"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image 3: Right Apartment */}
                <div className="w-[30%] h-[75%] rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:scale-105 transition-transform duration-300 translate-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80"
                    alt="Gedung Ruko Kost"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Search Widget */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16">
        <div className="bg-white rounded-3xl shadow-md shadow-slate-300/50 p-5 md:p-6 border border-slate-100 max-w-5xl mx-auto">
          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4 items-center"
          >
            {/* Lokasi */}
            <div className="lg:col-span-3 relative flex items-center gap-3 border border-slate-200 rounded-2xl p-3.5 bg-white hover:border-blue-300 hover:shadow-md transition-all w-full h-[64px]">
              <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
              <div className="flex flex-col text-left w-full pr-6">
                <span className="text-[11px] font-bold text-slate-500 tracking-wide leading-none mb-1">Lokasi</span>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
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
            <div className="lg:col-span-3 relative flex items-center gap-3 border border-slate-200 rounded-2xl p-3.5 bg-white hover:border-blue-300 hover:shadow-md transition-all w-full h-[70px]">
              <LayoutGrid className="w-5 h-5 text-blue-600 shrink-0" />
              <div className="flex flex-col text-left w-full pr-6">
                <span className="text-[11px] font-bold text-slate-500 tracking-wide leading-none mb-1">Jenis Properti</span>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full text-slate-800 text-sm font-semibold bg-transparent border-none outline-none p-0 focus:ring-0 cursor-pointer appearance-none leading-tight"
                >
                  <option value="">Semua</option>
                  <option value="Kost">Kost</option>
                  <option value="Kontrakan">Kontrakan</option>
                  <option value="Ruko">Ruko</option>
                  <option value="Apartemen">Apartemen</option>
                </select>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" />
            </div>

            {/* Harga */}
            <div className="lg:col-span-2 relative flex items-center gap-3 border border-slate-200 rounded-2xl p-3.5 bg-white hover:border-blue-300 hover:shadow-md transition-all w-full h-[70px]">
              <div className="flex flex-col text-left w-full pr-6">
                <span className="text-[11px] font-bold text-slate-500 tracking-wide leading-none mb-1">Harga</span>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full text-slate-800 text-sm font-semibold bg-transparent border-none outline-none p-0 focus:ring-0 cursor-pointer appearance-none leading-tight"
                >
                  <option value="">Min - Maks</option>
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
            <div className="lg:col-span-2 relative flex items-center gap-3 border border-slate-200 rounded-2xl p-3.5 bg-white hover:border-blue-300 hover:shadow-md transition-all w-full h-[70px]">
              <div className="flex flex-col text-left w-full pr-6">
                <span className="text-[11px] font-bold text-slate-500 tracking-wide leading-none mb-1">Durasi Sewa</span>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full text-slate-800 text-sm font-semibold bg-transparent border-none outline-none p-0 focus:ring-0 cursor-pointer appearance-none leading-tight"
                >
                  <option value="">Semua Durasi</option>
                  <option value="Bulanan">Bulanan</option>
                  <option value="3 Bulan">3 Bulan</option>
                  <option value="6 Bulan">6 Bulan</option>
                  <option value="Tahunan">Tahunan</option>
                </select>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" />
            </div>

            {/* Tombol Cari */}
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
  );
}