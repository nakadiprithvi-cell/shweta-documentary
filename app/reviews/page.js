import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl font-black mb-6">Witness Statements</h1>

        <p className="text-zinc-500 mb-16 text-lg">
          Statements collected from people who survived interaction with Shweta.
        </p>

        {/* BOYFRIEND VIDEO */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8">
          <h2 className="text-3xl font-bold mb-6">Review From Boyfriend</h2>

          <video controls className="w-full rounded-3xl">
            <source src="/videos/boyfriend.mp4" type="video/mp4" />
          </video>

          <p className="text-zinc-500 mt-6">Hehehehe.</p>
        </div>

        <div className="mt-16 flex justify-center gap-6 flex-wrap">
          <Link href="/">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300">
              Return Home
            </button>
          </Link>

          <Link href="/evidence">
            <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition-all duration-300">
              Click To View Evidence
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
