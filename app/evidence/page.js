import Link from "next/link";

export default function EvidencePage() {
  const stats = [
    {
      title: "Average Reels Sent Daily",
      value: "52+",
    },
    {
      title: "Reply Speed",
      value: "Randomized",
    },
    {
      title: "Drama Generated",
      value: "Very High",
    },
    {
      title: "Ability To Stay Serious",
      value: "1%",
    },
    {
      title: "Probability Of Saying 'Nothing' While Clearly Upset",
      value: "100%",
    },
    {
      title: "Emotional Stability",
      value: "Classified",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-black text-center mb-6">
          Official Evidence
        </h1>

        <p className="text-zinc-500 text-center mb-20 text-lg">
          Data collected after years of observation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center hover:scale-105 transition-all duration-300"
            >
              <h2 className="text-4xl font-black mb-4">{item.value}</h2>

              <p className="text-zinc-400 text-lg">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <Link href="/conclusion">
            <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300">
              View Final Conclusion
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
