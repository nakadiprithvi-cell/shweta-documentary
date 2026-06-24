import Link from "next/link";

export default function InvestigationPage() {
  const questions = [
    {
      q: "When did you first meet Shweta?",
      correct: "Back in 11th. At first she seemed normal.",
    },
    {
      q: "How did this friendship happen?",
      correct: "Shared trauma, random conversations and emotional instability.",
    },
    {
      q: "What is Shweta actually like?",
      correct: "Imagine chaos with unlimited WiFi access.Scary Right?????",
    },
    {
      q: "Why are you still friends with her?",
      correct: "She Knows a Lot.",
    },
    {
      q: "What makes Shweta...Shweta?",
      correct: "KALESHHHH",
    },
    {
      q: "What is Shweta's biggest talent?",
      correct:
        "Saying Im coming WHile Still Being on Bed, She is Never on Timeeeeee",
    },
    {
      q: "Would you describe Shweta as peaceful?",
      correct: "No comments were legally allowed on this matter.",
    },
    {
      q: "What happens if Shweta gets bored?",
      correct: "National security becomes questionable.",
    },
    {
      q: "How many personalities does Shweta have?",
      correct: "Enough to keep every conversation interesting.",
    },
    {
      q: "Final conclusion on Shweta?",
      correct: "Emotionally chaotic but somehow one of the best people ever.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Questions Asked To
          </p>

          <h1 className="text-6xl font-black">Prithvi Nakadi</h1>
        </div>

        <div className="space-y-10">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >
              <p className="text-zinc-500 mb-3">Question {index + 1}</p>

              <h2 className="text-3xl font-bold mb-8">{item.q}</h2>

              <div className="w-full bg-zinc-800 p-5 rounded-2xl text-left text-lg">
                {item.correct}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-zinc-500 mb-6 text-lg">
            Recovered memories found below.
          </p>

          <Link href="/montage">
            <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300">
              Open Memory Montage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
