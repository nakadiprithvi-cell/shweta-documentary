import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zinc-700 rounded-full blur-[140px] opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-zinc-500 rounded-full blur-[140px] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

        <div className="relative z-10 max-w-5xl">
          <p className="uppercase tracking-[0.5em] text-zinc-500 text-sm mb-6">
            A Highly Inaccurate Documentary
          </p>

          <h1 className="text-7xl md:text-9xl font-black leading-[0.9] tracking-tight mb-8">
            THE SHWETA
            <br />
            DOCUMENTARY
          </h1>

          <p className="text-zinc-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            A story about how two emotionally unstable people somehow became
            best friends.
          </p>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <Link href="/investigation">
              <button className="bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.15)]-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300">
                Begin Investigation
              </button>
            </Link>

            <Link href="/evidence">
              <button className="border border-zinc-700 px-8 py-4 rounded-2xl text-zinc-300 hover:bg-zinc-900 transition-all duration-300">
                View Evidence
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 text-zinc-600 text-sm animate-bounce">
          Scroll for recovered footage
        </div>
      </section>
    </div>
  );
}
