"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Your message has been sent successfully!");
        form.reset();
      } else {
        console.error("Web3Forms Error:", result);
        setStatus(result.message || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("Unable to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-12 max-w-2xl space-y-5 text-left"
    >
      <div>
        <label className="mb-2 block text-xs tracking-widest">YOUR NAME</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          className="w-full border border-[#102019]/20 bg-white px-5 py-4 text-sm outline-none focus:border-[#a17d42]"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs tracking-widest">
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full border border-[#102019]/20 bg-white px-5 py-4 text-sm outline-none focus:border-[#a17d42]"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs tracking-widest">
          YOUR MESSAGE
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className="w-full resize-y border border-[#102019]/20 bg-white px-5 py-4 text-sm outline-none focus:border-[#a17d42]"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#102019] px-8 py-4 text-xs tracking-[0.2em] text-white transition hover:bg-[#c6a56b] hover:text-[#102019] disabled:opacity-50"
      >
        {loading ? "SENDING..." : "SEND MESSAGE"}
      </button>

      {status && (
        <p role="status" className="text-center text-sm text-[#80602e]">
          {status}
        </p>
      )}
    </form>
  );
}
