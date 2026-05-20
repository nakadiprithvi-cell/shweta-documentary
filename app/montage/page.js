import Link from "next/link";

export default function MontagePage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-6xl font-black mb-10">Memory Montage</h1>

        {/* VIDEO SECTION */}

        <video
          controls
          className="w-full rounded-3xl border border-zinc-800 shadow-2xl"
        >
          <source src="/videos/memory.mp4" type="video/mp4" />
        </video>

        <p className="text-zinc-500 mt-6"></p>

        <div className="mt-12">
          <Link href="/reviews">
            <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300">
              View Witness Reviews
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
