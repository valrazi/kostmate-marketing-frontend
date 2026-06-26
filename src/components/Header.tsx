"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logoKostMate from "@/images/logo-kostmate.png";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Home,
  Search,
  HelpCircle,
  FileText,
  LogIn,
  UserPlus,
  Sparkles,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(pathname === "/cari" ? "#properties" : "#beranda");
  const [language, setLanguage] = useState("ID");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCariOpen, setIsCariOpen] = useState(false);
  const [isMobileCariOpen, setIsMobileCariOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-blue-50/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoKostMate}
              alt="KostMate Logo"
              width={140}
              height={44}
              className="w-auto h-9 lg:h-14"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 px-3 py-3 bg-white rounded-2xl shadow-lg">
            {/* Beranda */}
            {pathname === "/" ? (
              <a
                href="#beranda"
                onClick={() => setActive("#beranda")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  active === "#beranda"
                    ? "bg-blue-600 text-white"
                    : "text-blue-600 hover:bg-blue-50"
                }`}
              >
                Beranda
              </a>
            ) : (
              <Link
                href="/"
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 text-blue-600 hover:bg-blue-50"
              >
                Beranda
              </Link>
            )}

            {/* Dropdown Cari apa? */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsCariOpen(!isCariOpen);
                  setIsLangOpen(false);
                }}
                className={`flex items-center gap-0.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  pathname === "/cari" || pathname === "/detail" || active.startsWith("#properties")
                    ? "bg-blue-600 text-white"
                    : "text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span>Cari apa?</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isCariOpen ? "rotate-180" : ""}`} />
              </button>

              {isCariOpen && (
                <div className="absolute left-0 mt-1.5 w-40 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50">
                  <Link
                    href="/cari?type=kost"
                    onClick={() => {
                      setActive("#properties-kost");
                      setIsCariOpen(false);
                    }}
                    className="block px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Kost
                  </Link>
                  <Link
                    href="/cari?type=kontrakan"
                    onClick={() => {
                      setActive("#properties-kontrakan");
                      setIsCariOpen(false);
                    }}
                    className="block px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Kontrakan
                  </Link>
                  <Link
                    href="/cari?type=ruko"
                    onClick={() => {
                      setActive("#properties-ruko");
                      setIsCariOpen(false);
                    }}
                    className="block px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Ruko
                  </Link>
                </div>
              )}
            </div>

            {/* Pusat Bantuan */}
            <Link
              href="/pusat-bantuan"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                pathname === "/pusat-bantuan"
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              Pusat Bantuan
            </Link>

            {/* Syarat & Ketentuan */}
            <Link
              href="/syarat-ketentuan"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                pathname === "/syarat-ketentuan"
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              Syarat & Ketentuan
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language with Separator */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => {
                    setIsLangOpen(!isLangOpen);
                    setIsCariOpen(false);
                  }}
                  className="flex items-center text-xs font-medium text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 mr-1" />
                  {language}
                  <ChevronDown className={`w-3 h-3 ml-0.5 transition ${isLangOpen ? "rotate-180" : ""}`} />
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-1.5 w-36 bg-white rounded-lg shadow-lg border py-1 z-50">
                    <button
                      onClick={() => {
                        setLanguage("ID");
                        setIsLangOpen(false);
                      }}
                      className="block w-full px-3 py-1.5 text-left hover:bg-blue-50 cursor-pointer text-xs font-medium text-slate-700"
                    >
                      Bahasa Indonesia
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("EN");
                        setIsLangOpen(false);
                      }}
                      className="block w-full px-3 py-1.5 text-left hover:bg-blue-50 cursor-pointer text-xs font-medium text-slate-700"
                    >
                      English
                    </button>
                  </div>
                )}
              </div>

              {/* Vertical Separator Line */}
              <div className="w-px h-6 bg-gray-300"></div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button className="px-3.5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition cursor-pointer font-semibold text-xs">
                Masuk
              </button>
              <button className="px-3.5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer font-semibold text-xs">
                Daftar
              </button>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden cursor-pointer p-1.5 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Modern & Professional */}
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="lg:hidden fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="lg:hidden fixed top-20 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-5 space-y-4">

              {/* User Greeting Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md shadow-blue-500/30">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900">Halo, Selamat Datang!</p>
                  <p className="text-xs text-slate-500">Masuk untuk pengalaman terbaik</p>
                </div>
              </div>

              {/* Main Navigation Menu */}
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                  Menu Utama
                </p>

                {/* Beranda */}
                {pathname === "/" ? (
                  <a
                    href="#beranda"
                    onClick={() => {
                      setActive("#beranda");
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                      active === "#beranda"
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      active === "#beranda" ? "bg-white/20" : "bg-slate-100 group-hover:bg-white"
                    }`}>
                      <Home className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold flex-1">Beranda</span>
                    {active === "#beranda" && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    )}
                  </a>
                ) : (
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group text-slate-700 hover:bg-slate-100"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 group-hover:bg-white">
                      <Home className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold flex-1">Beranda</span>
                  </Link>
                )}

                {/* Cari Properti */}
                {/* Cari apa? Collapsible Dropdown */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsMobileCariOpen(!isMobileCariOpen)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group text-left w-full cursor-pointer ${
                      pathname === "/cari" || pathname === "/detail"
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      pathname === "/cari" || pathname === "/detail" ? "bg-white/20" : "bg-slate-100 group-hover:bg-white"
                    }`}>
                      <Search className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold flex-1">Cari apa?</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileCariOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isMobileCariOpen ? "max-h-48 mt-1" : "max-h-0"}`}>
                    <div className="pl-14 pr-4 py-1.5 flex flex-col gap-2.5 border-l border-slate-200 ml-7">
                      <Link
                        href="/cari?type=kost"
                        onClick={() => {
                          setActive("#properties-kost");
                          setIsOpen(false);
                        }}
                        className="text-xs font-bold text-slate-600 hover:text-blue-600 transition py-0.5"
                      >
                        Kost
                      </Link>
                      <Link
                        href="/cari?type=kontrakan"
                        onClick={() => {
                          setActive("#properties-kontrakan");
                          setIsOpen(false);
                        }}
                        className="text-xs font-bold text-slate-600 hover:text-blue-600 transition py-0.5"
                      >
                        Kontrakan
                      </Link>
                      <Link
                        href="/cari?type=ruko"
                        onClick={() => {
                          setActive("#properties-ruko");
                          setIsOpen(false);
                        }}
                        className="text-xs font-bold text-slate-600 hover:text-blue-600 transition py-0.5"
                      >
                        Ruko
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Pusat Bantuan */}
                <Link
                  href="/pusat-bantuan"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                    pathname === "/pusat-bantuan"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    pathname === "/pusat-bantuan" ? "bg-white/20" : "bg-slate-100 group-hover:bg-white"
                  }`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold flex-1">Pusat Bantuan</span>
                  {pathname === "/pusat-bantuan" && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  )}
                </Link>

                {/* Syarat & Ketentuan */}
                <Link
                  href="/syarat-ketentuan"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                    pathname === "/syarat-ketentuan"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    pathname === "/syarat-ketentuan" ? "bg-white/20" : "bg-slate-100 group-hover:bg-white"
                  }`}>
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold flex-1">Syarat & Ketentuan</span>
                  {pathname === "/syarat-ketentuan" && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  )}
                </Link>
              </div>

              {/* Language Section - Segmented Control */}
              <div className="pt-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                  Bahasa / Language
                </p>
                <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
                  <button
                    onClick={() => setLanguage("ID")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                      language === "ID"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <span>🇮🇩</span>
                    <span>Indonesia</span>
                  </button>
                  <button
                    onClick={() => setLanguage("EN")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                      language === "EN"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <span>🇬🇧</span>
                    <span>English</span>
                  </button>
                </div>
              </div>

              {/* Auth Buttons */}
              <div className="pt-2 space-y-2">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/30 transition-all duration-200 cursor-pointer hover:-translate-y-0.5">
                  <UserPlus className="w-4 h-4" />
                  <span>Daftar Sekarang</span>
                </button>

                <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer">
                  <LogIn className="w-4 h-4" />
                  <span>Sudah Punya Akun? Masuk</span>
                </button>
              </div>

              {/* Footer Info */}
              <div className="pt-3 border-t border-slate-100">
                <p className="text-center text-[10px] text-slate-400">
                  © 2026 KostMate · Platform Cari Kost #1 di Indonesia
                </p>
              </div>

            </div>
          </div>
        </>
      )}
    </nav>
  );
}