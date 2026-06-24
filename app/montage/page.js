import Link from "next/link";

export default function MontagePage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-6xl font-black mb-10">Memory Montage</h1>

        <div className="relative w-full overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/FfjMzG5GOp0"
            title="Memory Montage"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="text-zinc-500 mt-6">
          Recovered footage from the friendship archives.
        </p>

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
