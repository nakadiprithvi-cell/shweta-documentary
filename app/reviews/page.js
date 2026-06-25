import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl font-black mb-6">Witness Statements</h1>

        <p className="text-zinc-500 mb-16 text-lg">
          Statements collected from people who survived interaction with Shweta.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8">
          <h2 className="text-3xl font-bold mb-6">xyz</h2>

          <div className="relative w-full overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/ltbXJFCy5qM"
              title="Boyfriend Review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="text-zinc-500 mt-6">
            Official witness statement submitted for documentary purposes.
          </p>
        </div>

        <div className="mt-16 flex justify-center gap-6 flex-wrap">
          <Link href="/evidence">
            <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition-all duration-300">
              Click To View Evidence New evidence has been recovered. Continue
              the investigation.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
