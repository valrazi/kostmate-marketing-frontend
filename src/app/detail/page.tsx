"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Share2,
  Heart,
  MapPin,
  Wifi,
  Wind,
  Bed,
  Flame,
  Bath,
  Laptop,
  CheckCircle2,
  Phone,
  MessageCircle,
  ShieldCheck,
  Map,
  ClipboardList,
  Search
} from "lucide-react";

// Property data templates
type PropertyType = "kost" | "kontrakan" | "ruko";

const propertiesData = {
  kost: {
    typeLabel: "Kost Putra",
    badgeBg: "bg-blue-50 text-blue-600 border-blue-100",
    title: "Kost Eksklusif Devina 1",
    location: "Jl. Margonda Raya No. 456, Kemiri Muka, Kec. Beji, Kota Depok, Jawa Barat 16424",
    price: "Rp 1.500.000",
    breadcrumbs: ["Home", "Kost Depok", "Kost Devina", "Kost Eksklusif Devina 1"],
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
    thumbnails: [
      { label: "Kamar", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=300&q=80" },
      { label: "Kamar Mandi", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80" },
      { label: "Dapur", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=80" },
      { label: "Ruang Tamu", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80" },
      { label: "Teras", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=300&q=80" },
      { label: "Parkiran", img: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=300&q=80" }
    ],
    deskripsi: "Kost Nyaman Margonda merupakan hunian yang cocok untuk mahasiswa dan pekerja yang mencari tempat tinggal nyaman di kawasan strategis Kota Depok. Berlokasi dekat Universitas Indonesia, stasiun KRL, pusat perbelanjaan, dan area perkantoran, kost ini menawarkan akses yang mudah ke berbagai fasilitas umum.",
    deskripsiDetail: "Setiap kamar dirancang dengan konsep modern dan dilengkapi fasilitas yang mendukung kenyamanan penghuni untuk beristirahat maupun beraktivitas sehari-hari.",
    infoKamar: [
      "Tipe Kost: Kost Putra",
      "Luas Kamar: 3 x 4 m²",
      "Kapasitas: 1 Orang",
      "Kamar Mandi: Dalam",
      "Minimum Sewa: 3 Bulan",
      "Tersedia: 12 Kamar",
      "Status: Tersedia"
    ],
    amenities: [
      { label: "Wifi", icon: Wifi, value: "Wifi" },
      { label: "AC", icon: Wind, value: "AC" },
      { label: "Toilet Dalam", icon: Bath, value: "Toilet Dalam" },
      { label: "Kasur & Lemari", icon: Bed, value: "Kasur & Lemari" },
      { label: "Meja Belajar", icon: Laptop, value: "Meja Belajar" },
      { label: "Air Hot", icon: Flame, value: "Air Panas" }
    ],
    fasilitasLengkap: [
      "Koneksi Internet WiFi berkecepatan hingga 100 Mbps",
      "Air Conditioning (AC) hemat energi di setiap kamar",
      "Kamar mandi dalam dengan shower dan air panas (water heater)",
      "Perabotan lengkap (Kasur springbed, bantal, lemari pakaian 2 pintu)",
      "Meja kerja/belajar ergonomis dan kursi",
      "Dapur bersama dengan kompor, kulkas, dan dispenser air",
      "Area parkir motor dan mobil dengan keamanan CCTV 24 jam",
      "Jasa kebersihan kamar (berkala)"
    ],
    lokasiDetail: "Lokasi sangat strategis, hanya berjarak 5 menit jalan kaki ke stasiun KRL terdekat dan 10 menit berkendara menuju kampus Universitas Indonesia (UI). Dikelilingi berbagai warung makan, minimarket, apotek, dan mall terkemuka di Kota Depok.",
    aturanKost: [
      "Wajib menyerahkan kartu identitas (KTP/KTM) yang sah saat check-in.",
      "Jam malam gerbang ditutup pukul 23.00 WIB (penghuni membawa kunci duplikat sendiri).",
      "Tidak diperbolehkan membawa hewan peliharaan.",
      "Dilarang merokok di dalam kamar tidur.",
      "Tamu lawan jenis dilarang masuk ke dalam kamar kamar kos.",
      "Pembayaran sewa kost dilakukan paling lambat tanggal 5 setiap bulannya."
    ]
  },
  kontrakan: {
    typeLabel: "Kontrakan Rumah",
    badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    title: "Rumah Kontrakan Devina Asri",
    location: "Jl. Kemang Raya No. 12, Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12730",
    price: "Rp 3.500.000",
    breadcrumbs: ["Home", "Kontrakan Depok", "Kontrakan Devina", "Rumah Kontrakan Devina Asri"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    thumbnails: [
      { label: "Fasad Depan", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80" },
      { label: "Kamar Mandi", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80" },
      { label: "Dapur", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=80" },
      { label: "Ruang Tamu", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=300&q=80" },
      { label: "Teras", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=300&q=80" },
      { label: "Carport", img: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=300&q=80" }
    ],
    deskripsi: "Kontrakan Devina Asri adalah rumah tinggal minimalis modern yang sangat cocok untuk keluarga kecil. Berada di lingkungan perumahan yang tenang, aman dengan sistem satu gerbang (one gate system), dan bebas banjir di area strategis Kemang.",
    deskripsiDetail: "Dilengkapi dengan ruang tamu yang luas, dapur bersih, carport mobil pribadi, serta akses cepat ke pusat kuliner, cafe, dan perkantoran elit di daerah Kemang.",
    infoKamar: [
      "Tipe Kontrakan: Rumah Tinggal",
      "Luas Bangunan: 70 m² (2 Lantai)",
      "Kapasitas: Keluarga (3-4 Orang)",
      "Kamar Mandi: 2 Unit",
      "Minimum Sewa: 6 Bulan",
      "Tersedia: 2 Unit Rumah",
      "Status: Tersedia"
    ],
    amenities: [
      { label: "Wifi", icon: Wifi, value: "Wifi 50 Mbps" },
      { label: "AC", icon: Wind, value: "AC di setiap kamar" },
      { label: "Toilet Dalam", icon: Bath, value: "2 Kamar Mandi" },
      { label: "Kasur & Lemari", icon: Bed, value: "Semi Furnished" },
      { label: "Meja Belajar", icon: Laptop, value: "Ruang Kerja" },
      { label: "Air Panas", icon: Flame, value: "Water Heater" }
    ],
    fasilitasLengkap: [
      "Koneksi Internet IndiHome berkecepatan 50 Mbps",
      "AC inverter hemat listrik terpasang di kamar tidur utama dan anak",
      "Kamar mandi dengan kloset duduk, shower, dan water heater",
      "Dapur bersih dengan meja marmer kompor tanam",
      "Taman mini di bagian depan dan belakang rumah",
      "Carport mobil pribadi berkanopi",
      "Listrik token Prabayar 2200W",
      "Sistem pembuangan sampah terjadwal"
    ],
    lokasiDetail: "Terletak di kawasan premium Kemang, Jakarta Selatan. Hanya 5 menit menuju Kemang Village Mall, dekat sekolah internasional, rumah sakit, dan akses tol TB Simatupang.",
    aturanKost: [
      "Wajib menyerahkan fotokopi Buku Nikah bagi penyewa pasangan keluarga.",
      "Menjaga kerukunan antar tetangga sekitar perumahan.",
      "Membayar iuran bulanan kebersihan & keamanan lingkungan (Iuran RT).",
      "Dilarang keras menyalahgunakan rumah untuk kegiatan ilegal.",
      "Perbaikan kerusakan fasilitas akibat kelalaian penyewa ditanggung oleh penyewa.",
      "Pembayaran sewa jatuh tempo setiap awal periode sewa."
    ]
  },
  ruko: {
    typeLabel: "Ruko Komersial",
    badgeBg: "bg-amber-50 text-amber-600 border-amber-100",
    title: "Ruko Bisnis Devina Square",
    location: "Jl. Boulevard Raya Barat Blok QA No. 4, Kelapa Gading, Jakarta Utara, DKI Jakarta 14240",
    price: "Rp 8.500.000",
    breadcrumbs: ["Home", "Ruko Depok", "Ruko Devina", "Ruko Bisnis Devina Square"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    thumbnails: [
      { label: "Tampak Depan", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80" },
      { label: "Lantai 1", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80" },
      { label: "Lantai 2", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=300&q=80" },
      { label: "Lantai 3", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=300&q=80" },
      { label: "Kamar Mandi", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80" },
      { label: "Lahan Parkir", img: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=300&q=80" }
    ],
    deskripsi: "Ruko Strategis 3 Lantai di pusat bisnis Kelapa Gading. Sangat cocok untuk kantor, kafe, klinik kecantikan, butik fashion, maupun minimarket retail dengan lalu lintas pengunjung harian yang sangat padat.",
    deskripsiDetail: "Struktur bangunan beton bertulang kokoh, keamanan 24 jam dengan area parkir bersama yang sangat luas memudahkan konsumen memarkirkan kendaraan.",
    infoKamar: [
      "Tipe Properti: Ruko 3 Lantai",
      "Luas Bangunan: 150 m² (5x10 m per Lantai)",
      "Kapasitas: Kantor / Usaha / Dagang",
      "Kamar Mandi: 3 (Setiap Lantai)",
      "Minimum Sewa: 1 Tahun",
      "Tersedia: 1 Unit Ruko",
      "Status: Tersedia"
    ],
    amenities: [
      { label: "Wifi", icon: Wifi, value: "Fiber Optik Ready" },
      { label: "AC", icon: Wind, value: "Instalasi AC Siap" },
      { label: "Toilet Dalam", icon: Bath, value: "3 Kamar Mandi" },
      { label: "Kasur & Lemari", icon: Bed, value: "Kosongan (Unfurnished)" },
      { label: "Meja Belajar", icon: Laptop, value: "Area Office Ready" },
      { label: "Air Panas", icon: Flame, value: "Tidak Tersedia" }
    ],
    fasilitasLengkap: [
      "Jaringan internet serat optik (Biznet/Indihome) siap pasang",
      "Instalasi pipa pendingin ruangan (AC) di setiap lantai",
      "Kamar mandi terpisah di setiap lantai ruko",
      "Instalasi listrik berkapasitas besar 4400W",
      "Air bersih PAM lancar dengan pompa booster",
      "Area parkir komersial bersama yang luas tanpa biaya parkir liar",
      "Sistem pemadam kebakaran (fire extinguisher) di setiap lantai",
      "Keamanan area kompleks ruko dengan security patrol 24 jam"
    ],
    lokasiDetail: "Sangat prestisius di jalan utama Kelapa Gading. Berhadapan langsung dengan jalan raya utama, hanya 3 menit dari stasiun LRT Boulevard Selatan dan dikelilingi oleh ribuan residensial padat.",
    aturanKost: [
      "Dilarang keras menggunakan ruko untuk gudang bahan kimia berbahaya atau mudah meledak.",
      "Renovasi interior diperbolehkan setelah mendapat persetujuan tertulis pemilik.",
      "Menjaga kebersihan trotoar bagian depan ruko.",
      "Pembayaran pajak sewa ruko ditanggung sesuai kesepakatan bersama.",
      "Perawatan rutin pompa air, tangki air, dan instalasi listrik menjadi tanggung jawab penyewa.",
      "Uang jaminan (deposit) dikembalikan setelah masa sewa berakhir jika tidak ada kerusakan struktural."
    ]
  }
};

function DetailContent() {
  const searchParams = useSearchParams();
  const rawType = searchParams.get("type");

  // Resolve type with fallback to 'kost'
  const type: PropertyType = (rawType === "kontrakan" || rawType === "ruko") ? rawType : "kost";
  const data = propertiesData[type];

  // Active tab state
  const [activeTab, setActiveTab] = useState<string>("Detail");

  // Heart Toggle State (Save)
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // Search input state
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Mencari: "${searchQuery}"...`);
    }
  };

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
              Temukan Kost, Kontrakan, dan Ruko Terbaik dengan Mudah
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

        {/* Breadcrumbs and Action Utilities */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Breadcrumb Path */}
            <div className="flex flex-wrap items-center justify-center text-center gap-1 text-[11px] text-slate-500 font-medium w-full sm:w-auto">
              {data.breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  {idx === 0 ? (
                    <Link href="/" className="hover:text-blue-600 cursor-pointer transition">
                      {crumb}
                    </Link>
                  ) : idx === data.breadcrumbs.length - 1 ? (
                    <span className="text-slate-800 font-bold">{crumb}</span>
                  ) : (
                    <Link href={`/cari?type=${type}`} className="hover:text-blue-600 cursor-pointer transition">
                      {crumb}
                    </Link>
                  )}
                  {idx < data.breadcrumbs.length - 1 && (
                    <span className="text-slate-300 font-light">&gt;</span>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center sm:justify-end gap-4 text-[11px] text-slate-600 font-bold w-full sm:w-auto">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link halaman telah disalin ke clipboard!");
                }}
                className="flex items-center gap-1.5 hover:text-blue-600 transition cursor-pointer group py-1"
              >
                <Share2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition" />
                <span>Bagikan</span>
              </button>

              <button
                onClick={() => setIsSaved(!isSaved)}
                className="flex items-center gap-1.5 hover:text-red-500 transition cursor-pointer group py-1"
              >
                <Heart className={`w-3.5 h-3.5 transition ${isSaved ? "fill-red-500 text-red-500" : "text-slate-400 group-hover:text-red-500"}`} />
                <span>Simpan</span>
              </button>
            </div>
          </div>
        </section>

        {/* Details Grid Container */}
        <section className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* Left Column (Images, Tabs, Descriptions) */}
            <div className="lg:col-span-8 space-y-5">

              {/* Main Image */}
              <div className="relative h-60 sm:h-[320px] w-full rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5">
                {data.thumbnails.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white p-1 hover:shadow hover:border-blue-400 transition cursor-pointer flex flex-col group"
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-10 sm:h-12 object-cover rounded-lg mb-1 group-hover:scale-101 transition"
                    />
                    <span className="text-[9px] sm:text-[10px] font-semibold text-slate-600 truncate text-center pt-0.5 pb-0.5">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tabs System */}
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-2">
                  {[
                    { id: "Detail", label: "Detail", icon: ClipboardList },
                    { id: "Fasilitas", label: "Fasilitas", icon: ShieldCheck },
                    { id: "Lokasi", label: "Lokasi", icon: Map },
                    { id: "Aturan Kost", label: "Aturan Properti", icon: ClipboardList }
                  ].map((tab) => {
                    const TabIcon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${isActive
                          ? "bg-blue-600 text-white shadow"
                          : "text-blue-600 bg-blue-50 hover:bg-blue-100"
                          }`}
                      >
                        <TabIcon className="w-3 h-3" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content Display */}
                <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm min-h-[200px]">
                  {activeTab === "Detail" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-slate-900">Tentang Properti</h3>
                        <p className="text-slate-600 text-xs leading-relaxed text-justify">
                          {data.deskripsi}
                        </p>
                        <p className="text-slate-600 text-xs leading-relaxed text-justify">
                          {data.deskripsiDetail}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 space-y-3">
                        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                          Informasi Kamar & Properti:
                        </h4>
                        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {data.infoKamar.map((info, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-bold shrink-0">
                                {idx + 1}
                              </span>
                              <span className="font-semibold text-slate-600">{info}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}

                  {activeTab === "Fasilitas" && (
                    <div className="space-y-3">
                      <h3 className="text-base font-bold text-slate-900">Fasilitas Lengkap</h3>
                      <p className="text-slate-500 text-xs">
                        Properti ini dilengkapi dengan berbagai fasilitas modern untuk kenyamanan Anda sehari-hari:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {data.fasilitasLengkap.map((fasilitas, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{fasilitas}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "Lokasi" && (
                    <div className="space-y-3">
                      <h3 className="text-base font-bold text-slate-900">Detail Lokasi</h3>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {data.lokasiDetail}
                      </p>
                      <div className="relative w-full h-56 bg-slate-200 rounded-xl overflow-hidden shadow-inner flex flex-col items-center justify-center gap-1.5 p-3">
                        <MapPin className="w-6 h-6 text-blue-600 animate-bounce" />
                        <span className="text-[11px] font-bold text-slate-700 text-center">
                          {data.location}
                        </span>
                        <p className="text-[9px] text-slate-500">Peta interaktif akan dimuat secara dinamis...</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "Aturan Kost" && (
                    <div className="space-y-3">
                      <h3 className="text-base font-bold text-slate-900">Aturan Properti</h3>
                      <p className="text-slate-500 text-xs">
                        Demi menjaga kenyamanan dan ketertiban bersama, mohon patuhi aturan sebagai berikut:
                      </p>
                      <ul className="space-y-2 pt-1">
                        {data.aturanKost.map((aturan, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-1.5" />
                            <span>{aturan}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column (Pricing & Owner Contact Cards) */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-lg space-y-4 lg:sticky lg:top-24">

                {/* Type Badge */}
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-extrabold border ${data.badgeBg}`}>
                    {data.typeLabel}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug">
                  {data.title}
                </h2>

                {/* Location Pin */}
                <div className="flex items-start gap-1 text-xs text-slate-500 leading-relaxed pb-2 border-b border-slate-100">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{data.location}</span>
                </div>

                {/* Price tag */}
                <div className="py-0.5">
                  <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Harga Sewa</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-extrabold text-blue-600">{data.price}</span>
                    <span className="text-[10px] text-slate-500 font-bold">/ bulan</span>
                  </div>
                </div>

                {/* Amenities List */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Fasilitas Utama</div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    {data.amenities.map((amenity, idx) => {
                      const AmenityIcon = amenity.icon;
                      return (
                        <div key={idx} className="flex items-center gap-1.5 text-slate-700 bg-slate-50 px-2 py-1.5 rounded-lg border border-slate-100">
                          <AmenityIcon className="w-3 h-3 text-blue-600 shrink-0" />
                          <span className="font-semibold truncate">{amenity.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Contact CTA buttons */}
                <div className="space-y-2 pt-3">
                  <a
                    href="tel:089606838403"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-md shadow-blue-500/10 transition hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Hubungi Pemilik</span>
                  </a>

                  <a
                    href="https://wa.me/6289606838403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-white border border-blue-600 hover:bg-blue-50 text-blue-600 rounded-xl font-bold text-xs transition hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat Pemilik</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default function DetailPage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    }>
      <DetailContent />
    </Suspense>
  );
}
