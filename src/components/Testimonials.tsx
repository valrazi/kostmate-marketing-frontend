import { Star, User } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ivallavi Fahrazi",
      role: "karyawan Swasta",
      rating: 5,
      text: "Tampilan website mudah digunakan dan informasi properti sangat lengkap.",
    },
    {
      name: "Manto Ariyansyah",
      role: "Mahasiswa",
      rating: 5,
      text: "Saya menemukan kost sesuai budget hanya dalam beberapa menit. Fitur pencariannya sangat membantu.",
    },
    {
      name: "Bayu Radityo",
      role: "Pemilik Kost",
      rating: 5,
      text: "Unit kontrakan saya mendapatkan penyewa lebih cepat dibanding sebelumnya.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            TESTIMONI
          </h2>
          <p className="text-lg sm:text-xl text-slate-700">
            Apa Kata Klien Kami?
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {review.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {review.text}
              </p>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}