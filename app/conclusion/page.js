import Link from "next/link";

export default function ConclusionPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full text-center">
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-6">
          Final Conclusion
        </p>

        <h1 className="text-6xl md:text-7xl font-black leading-tight mb-12">
          So... What Is
          <br />
          Shweta To You?
        </h1>

        <p className="text-zinc-500 mb-10 text-xl">
          (Question directed to Prithvi)
        </p>

        {/* FINAL VIDEO */}

        <video
          controls
          className="w-full rounded-[2rem] border border-zinc-800 shadow-2xl"
        >
          <source src="/videos/final.mp4" type="video/mp4" />
        </video>

        <p className="text-zinc-500 mt-6 mb-16"></p>

        <Link href="/">
          <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300">
            Return To Documentary
          </button>
        </Link>
      </div>
    </div>
  );
}
