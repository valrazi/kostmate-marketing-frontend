"use client";

import { useState } from "react";
import { Star, Wifi, Wind, Bed, MapPin, ArrowRight, Toilet, Home, Building2 } from "lucide-react";
import Link from "next/link";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  type: "kost" | "kontrakan" | "ruko";
}

const propertiesData: Property[] = [
  {
    id: 1,
    title: "Kost Putra Eksklusif Grand Residence",
    location: "Depok, Jawa Barat",
    price: "1.500.000",
    rating: 4.8,
    reviews: 125,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
    type: "kost"
  },
  {
    id: 2,
    title: "Kost Putri Syariah Amanah",
    location: "Bandung, Jawa Barat",
    price: "1.200.000",
    rating: 4.9,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80",
    type: "kost"
  },
  {
    id: 3,
    title: "Rumah Kontrakan 2 Kamar Tidur",
    location: "Jakarta Selatan",
    price: "3.500.000",
    rating: 4.7,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    type: "kontrakan"
  },
  {
    id: 4,
    title: "Ruko Strategis 2 Lantai",
    location: "Surabaya, Jawa Timur",
    price: "8.000.000",
    rating: 4.6,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    type: "ruko"
  },
  {
    id: 5,
    title: "Kost Campur Premium Near Campus",
    location: "Yogyakarta",
    price: "1.800.000",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80",
    type: "kost"
  },
  {
    id: 6,
    title: "Rumah Kontrakan Minimalis Modern",
    location: "Tangerang, Banten",
    price: "2.800.000",
    rating: 4.5,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    type: "kontrakan"
  },
  {
    id: 7,
    title: "Kost Bisnis Executive Suite",
    location: "Jakarta Pusat",
    price: "2.500.000",
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
    type: "kost"
  },
  {
    id: 8,
    title: "Ruko Komersial 3 Lantai",
    location: "Semarang, Jawa Tengah",
    price: "10.000.000",
    rating: 4.7,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    type: "ruko"
  }
];

export default function PropertySection() {
  const [visibleCount, setVisibleCount] = useState(8);

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "kost":
        return <Building2 className="h-3 w-3 text-blue-600" />;
      case "kontrakan":
        return <Home className="h-3 w-3 text-emerald-600" />;
      case "ruko":
        return <Home className="h-3 w-3 text-amber-600" />;
      default:
        return <Home className="h-3 w-3 text-slate-600" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch(type) {
      case "kost":
        return "bg-blue-100 text-blue-700";
      case "kontrakan":
        return "bg-emerald-100 text-emerald-700";
      case "ruko":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case "kost":
        return "Kost";
      case "kontrakan":
        return "Kontrakan";
      case "ruko":
        return "Ruko";
      default:
        return type;
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Properti Favorit Pengguna
          </h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Temukan berbagai pilihan kost, kontrakan, dan ruko yang banyak diminati.
          </p>
          <div className="mt-4 flex justify-end">
            <Link href="/cari" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 cursor-pointer">
              Lihat Semua <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {propertiesData.slice(0, visibleCount).map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Type Badge */}
                <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 ${getTypeBadgeColor(property.type)}`}>
                  {getTypeIcon(property.type)}
                  <span>{getTypeLabel(property.type)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-sm font-bold text-slate-900 mb-2 line-clamp-2">
                  {property.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1 text-slate-500 text-xs mb-2">
                  <MapPin className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span className="line-clamp-1">{property.location}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold text-slate-700">{property.rating}</span>
                  <span className="text-xs text-slate-400">({property.reviews} Ulasan)</span>
                </div>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-xs text-slate-600">
                    <Wifi className="h-3 w-3" />
                    <span>WiFi</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-xs text-slate-600">
                    <Wind className="h-3 w-3" />
                    <span>AC</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-xs text-slate-600">
                    <Toilet className="h-3 w-3" />
                    <span>Toilet</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-xs text-slate-600">
                    <Bed className="h-3 w-3" />
                    <span>Kasur</span>
                  </div>
                </div>

                {/* Price & Button */}
                <div className="mt-auto pt-3 border-t border-slate-100">
                  <div className="mb-3">
                    <span className="text-base font-bold text-blue-600">Rp. {property.price}</span>
                    <span className="text-xs text-slate-500"> /bulan</span>
                  </div>
                  <Link
                    href={`/detail?type=${property.type}`}
                    className="block w-full text-center py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition cursor-pointer"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Link
            href="/cari"
            className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition cursor-pointer text-sm"
          >
            Lihat Lainnya
          </Link>
        </div>
      </div>
    </section>
  );
}