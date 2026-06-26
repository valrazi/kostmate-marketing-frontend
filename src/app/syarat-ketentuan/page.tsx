"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SyaratKetentuanPage() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-20 pb-12 bg-slate-50">
        {/* Banner Syarat Ketentuan */}
        <section className="bg-gradient-to-b from-blue-50/70 to-blue-50/10 rounded-b-[30px] sm:rounded-b-[50px] pt-8 pb-10 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-1 bg-white border border-blue-100 shadow-sm px-3 py-1 rounded-full text-[10px] font-semibold text-blue-600">
              <span className="text-xs">📜</span>
              <span>Kebijakan & Ketentuan Penggunaan KostMate</span>
            </div>

            {/* Judul */}
            <h1 className="text-xl sm:text-2xl font-bold text-blue-600 tracking-tight leading-tight">
              Syarat & Ketentuan Penggunaan
            </h1>
            <p className="text-xs text-slate-500 max-w-lg mx-auto">
              Harap baca syarat dan ketentuan ini secara seksama sebelum menggunakan platform KostMate.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-2">1. Pendahuluan</h2>
              <p>
                Selamat datang di KostMate. Layanan ini dimiliki dan dioperasikan oleh KostMate Indonesia. Dengan mengakses dan menggunakan platform kami, Anda menyetujui untuk terikat dengan Syarat dan Ketentuan Penggunaan ini. Jika Anda tidak menyetujui bagian mana pun dari ketentuan ini, Anda disarankan untuk tidak menggunakan platform atau layanan kami.
              </p>
            </div>
            
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-2">2. Definisi</h2>
              <p className="mb-2">
                Dalam Syarat & Ketentuan ini, beberapa istilah didefinisikan sebagai berikut:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Platform:</strong> Situs web, aplikasi mobile, dan layanan terkait yang dioperasikan oleh KostMate.</li>
                <li><strong>Pengguna:</strong> Setiap individu yang mengakses platform, baik sebagai Pencari Properti maupun Pemilik Properti.</li>
                <li><strong>Pencari Properti:</strong> Pengguna yang mencari, memesan, atau menyewa properti melalui platform.</li>
                <li><strong>Pemilik Properti:</strong> Pengguna yang memasang, mengelola, dan menawarkan properti untuk disewakan pada platform.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-2">3. Akun Pengguna</h2>
              <p className="mb-2">
                Untuk dapat menggunakan fitur tertentu secara optimal, Anda mungkin akan diminta untuk membuat akun. Ketentuan akun sebagai berikut:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Anda wajib memberikan informasi registrasi yang akurat, lengkap, dan terbaru.</li>
                <li>Anda bertanggung jawab atas kerahasiaan kata sandi dan aktivitas akun Anda.</li>
                <li>KostMate berhak menangguhkan akun jika terdeteksi penyalahgunaan atau pelanggaran keamanan.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-2">4. Pemasangan Properti & Tanggung Jawab Konten</h2>
              <p>
                Pemilik Properti menyatakan dan menjamin bahwa semua informasi, deskripsi, foto, dan harga properti yang diposting di platform adalah akurat dan sesuai dengan kondisi asli di lapangan. KostMate tidak bertanggung jawab atas kerugian yang ditimbulkan dari ketidaksesuaian informasi tersebut.
              </p>
            </div>

            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-2">5. Transaksi & Pembayaran</h2>
              <p>
                KostMate bertindak sebagai media informasi dan perantara pencarian properti. Segala bentuk transaksi pembayaran sewa, uang muka (DP), dan kesepakatan kontrak dilakukan secara langsung antara Pencari Properti dan Pemilik Properti. KostMate tidak memungut, mengelola, atau bertanggung jawab atas dana transaksi tersebut kecuali disepakati melalui fitur pembayaran khusus di masa mendatang.
              </p>
            </div>

            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-2">6. Batasan Tanggung Jawab</h2>
              <p>
                Platform kami disediakan atas dasar &quot;sebagaimana adanya&quot;. KostMate tidak menjamin bahwa platform bebas dari gangguan teknis, virus, atau kesalahan lainnya. Kami tidak bertanggung jawab atas segala kerugian tidak langsung atau kehilangan keuntungan yang dialami pengguna selama menggunakan platform.
              </p>
            </div>

            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-2">7. Perubahan Ketentuan</h2>
              <p>
                KostMate berhak memperbarui atau mengubah Syarat dan Ketentuan ini kapan saja tanpa pemberitahuan sebelumnya. Perubahan akan berlaku segera setelah dipublikasikan pada halaman ini. Anda dianjurkan untuk memeriksa halaman ini secara berkala.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-slate-500 text-[10px]">
              <span>Terakhir diperbarui: 26 Juni 2026</span>
              <span>KostMate Indonesia</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
