"use client";

import { useState } from "react";

export default function InputBox() {
  const [url, setUrl] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [loading, setLoading] = useState(false);

  const shorten = async () => {
    if (!url) return;
    setLoading(true);
    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });
    const data = await res.json();
    setShortLink(window.location.origin + "/" + data.short);
    setLoading(false);
  };

  return (
    <div className="bg-[#0f1720] p-4 rounded-xl flex gap-3 items-center shadow-lg">
      <input
        className="flex-1 bg-transparent outline-none px-3 py-2 text-sm"
        placeholder="Enter your link..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-lg shadow"
        onClick={shorten}
        disabled={loading}
      >
        {loading ? "Please wait..." : "Shorten"}
      </button>

      {shortLink && (
        <a href={shortLink} className="text-sm text-green-400 underline" target="_blank" rel="noreferrer">
          {shortLink}
        </a>
      )}
    </div>
  );
}
