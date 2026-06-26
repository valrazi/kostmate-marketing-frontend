"use client";

import Image from "next/image";
import { Clock, BarChart3, Users, Bell, Smartphone, Lock, Building2 } from "lucide-react";
import dashboardImg from "@/images/dashboardkostmate.png";

export default function ForPropertyOwners() {
  const features = [
    {
      icon: Clock,
      title: "Promosikan Properti ke Ribuan Calon Penyewa",
    },
    {
      icon: BarChart3,
      title: "Kelola Banyak Properti dalam Satu Dashboard",
    },
    {
      icon: Users,
      title: "Pantau Status Unit dan Ketersediaan Kamar Secara Real-Time",
    },
    {
      icon: Bell,
      title: "Kelola Inventaris dan Administrasi Properti Secara Digital",
    },
    {
      icon: Smartphone,
      title: "Catat Data Penyewa dan Riwayat Pembayaran",
    },
    {
      icon: Lock,
      title: "Akses Laporan dan Monitoring Properti Kapan Saja",
    },
  ];

  return (
    <section className="bg-blue-50 rounded-[32px] sm:rounded-[60px] lg:rounded-[150px] py-12 md:py-20 px-4 sm:px-8 lg:px-10 mx-4 sm:mx-6 lg:mx-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Punya Kost, Kontrakan, atau Ruko?
              </h2>
              <p className="text-slate-600 text-base">
                Pasarkan properti Anda dan temukan penyewa lebih cepat bersama KostMate.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                        {feature.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex items-center justify-center lg:justify-start">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200 cursor-pointer">
                <Building2 className="h-5 w-5" />
                <span>Pasang Properti</span>
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Showcase */}
          <div className="relative flex justify-center items-center">
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-60 -z-10"></div>

            <div className="relative w-full max-w-[620px] h-[260px] sm:h-[460px] lg:h-[480px]">

              {/* Back Card */}
              <div className="absolute top-8 left-0 w-[72%] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white rotate-[-10deg] scale-90 opacity-70 z-0">
                <Image
                  src={dashboardImg}
                  alt="Dashboard Back"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Middle Card */}
              <div className="absolute top-4 right-2 w-[78%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white rotate-[8deg] scale-95 z-10">
                <Image
                  src={dashboardImg}
                  alt="Dashboard Middle"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Front Card */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[88%] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.18)] border border-slate-200 bg-white z-20">
                <Image
                  src={dashboardImg}
                  alt="Dashboard Front"
                  width={900}
                  height={700}
                  priority
                  className="w-full h-auto"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}