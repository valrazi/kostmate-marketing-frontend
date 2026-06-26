"use client";

export default function Stats() {
  const statsList = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600 shrink-0"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 24 24"
        >
          <path d="M2 22h20v-2h-2v-12c0-1.1-.9-2-2-2h-4V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16H2v2zm4-16h4v2H6V6zm0 4h4v2H6v-2zm0 4h4v2H6v-2zm6-8h6v12h-6V6zm2 2h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
        </svg>
      ),
      count: "10.000+",
      label: "Properti Terdaftar",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600 shrink-0"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 24 24"
        >
          <circle cx="6.5" cy="10" r="2.2" />
          <path d="M6.5 13.5c-1.5 0-3.5.7-3.5 2V17h7v-1.5c0-1.3-2-2-3.5-2z" />
          <circle cx="17.5" cy="10" r="2.2" />
          <path d="M17.5 13.5c-1.5 0-3.5.7-3.5 2V17h7v-1.5c0-1.3-2-2-3.5-2z" />
          <circle cx="12" cy="8.2" r="2.8" />
          <path d="M12 12c-2 0-5 1-5 3v2h10v-2c0-2-3-3-5-3z" />
        </svg>
      ),
      count: "5.000+",
      label: "Pengguna Aktif",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600 shrink-0"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      count: "50+",
      label: "Kota di Indonesia",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600 shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="8.5" cy="9.5" r="1.5" fill="white" />
          <circle cx="15.5" cy="9.5" r="1.5" fill="white" />
          <path
            d="M8 14.5c1.2 1.5 2.9 2.5 4 2.5s2.8-1 4-2.5"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      count: "95%",
      label: "Kepuasan Pengguna",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-10">
      {/* Lebar diperkecil */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4">
        <div className="bg-[#f4f7fe] border border-slate-100 rounded-3xl p-4 md:p-5 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {statsList.map((stat, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center"
              >
                <div className="flex items-center gap-3 w-full max-w-[180px]">
                  <div className="flex items-center justify-center w-10 h-10 shrink-0">
                    {stat.icon}
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-blue-600 leading-none">
                      {stat.count}
                    </h3>

                    <p className="mt-1 text-xs md:text-sm text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                </div>

                {i < 3 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}