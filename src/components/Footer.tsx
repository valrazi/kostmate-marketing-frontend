import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import logoKostMate from "@/images/logo-kostmate.png";

export default function Footer() {
  return (
    <footer className="bg-blue-50 pt-16 pb-8 rounded-t-[150px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-blue-200">

          {/* Brand Column */}
          <div className="flex flex-col gap-4 pr-8 relative">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={logoKostMate}
                alt="KostMate Logo"
                width={180}
                height={60}
                className="w-auto h-12 lg:h-14"
                priority
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed text-justify">
              KostMate adalah platform digital yang membantu pengguna menemukan kost, kontrakan, dan ruko dengan mudah, sekaligus mendukung pemilik properti dalam mengelola penyewa, inventaris, administrasi, dan operasional properti secara lebih efisien dalam satu sistem terintegrasi.
            </p>
            {/* Separator Line */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-15 w-px bg-blue-200"></div>
          </div>

          {/* Hubungi Kami Column */}
          <div className="pr-8 relative">
            <h3 className="text-slate-900 font-semibold text-base mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-600">
                <Phone className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <a href="tel:089606838403" className="hover:text-blue-600 transition-colors">
                  089606838403
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-600">
                <svg className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a href="https://wa.me/6289606838403" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  089606838403
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-600">
                <Mail className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <a href="mailto:kostmateibm@gmail.com" className="hover:text-blue-600 transition-colors">
                  kostmateibm@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-600">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Jl. Sehat No. 123, Jakarta Selatan</span>
              </li>
            </ul>
            {/* Separator Line */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-15 w-px bg-blue-200"></div>
          </div>

          {/* Layanan Kami Column */}
          <div className="pr-8 relative">
            <h3 className="text-slate-900 font-semibold text-base mb-4">
              Layanan Kami
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Beranda", href: "/" },
                { label: "Tentang Kami", href: "#tentang" },
                { label: "Pusat Bantuan", href: "#bantuan" },
                { label: "FAQ", href: "#faq" },
                { label: "Kebijakan Privasi", href: "#privasi" },
                { label: "Syarat & Ketentuan", href: "#syarat" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Separator Line */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-15 w-px bg-blue-200"></div>
          </div>

          {/* Sosial Media Column */}
          <div>
            <h3 className="text-slate-900 font-semibold text-base mb-4">
              Sosial Media
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600 bg-blue-100 px-4 py-2 rounded-lg border border-blue-300">
            © 2026 Atasi Digital | All Rights Reserved
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="#privasi" className="text-slate-600 hover:text-blue-600 transition-colors">
              Privasi
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="#syarat" className="text-slate-600 hover:text-blue-600 transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}