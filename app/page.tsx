"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function analyze() {
    setResult(`
Trust Score: 82/100
PII Risk: Low
Hallucination Risk: Medium
Policy Risk: Low
Recommendation: Needs Review
    `);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
        <h1 className="text-3xl font-bold mb-4">AI Trust Layer</h1>

        <p className="text-gray-600 mb-6">
          Analyze AI outputs for safety, trust, hallucination, and privacy risk.
        </p>

        <textarea
          className="w-full border rounded-xl p-4 h-48"
          placeholder="Paste AI response here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={analyze}
          className="mt-4 bg-black text-white px-6 py-3 rounded-xl"
        >
          Analyze Trust
        </button>

        {result && (
          <div className="mt-6 bg-gray-100 rounded-xl p-4 whitespace-pre-line">
            {result}
          </div>
        )}
      </div>
    </main>
  );
}