import Link from "next/link";

export default function ConclusionPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full text-center">
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-6">
          Final Conclusion
        </p>

        <h1 className="text-6xl md:text-7xl font-black leading-tight mb-12">
          So..What is the
          <br />
          Final Verdict?
        </h1>

        <p className="text-zinc-500 mb-10 text-xl">
          (Question directed to Prithvi)
        </p>

        <div className="relative w-full overflow-hidden rounded-[2rem] border border-zinc-800 shadow-2xl aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/m9BfGewOvxU"
            title="Final Message"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="text-zinc-500 mt-6 mb-16">
          Final statement recorded by Prithvi Nakadi.
        </p>

        <Link href="/">
          <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300">
            Return To Documentary
          </button>
        </Link>
      </div>
    </div>
  );
}
