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
        setStatus("Thank you! Your message has been sent successfully.");
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

  const fieldClass =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-ink/40 focus:border-chilli focus:ring-2 focus:ring-chilli/20";
  const labelClass = "mb-2 block text-sm font-medium text-ink";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-2xl space-y-5 rounded-3xl bg-white/70 p-5 text-left shadow-sm sm:p-8"
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Enter your name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us the date, time and number of guests"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-chilli px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-chilli-dark disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p role="status" className="text-center text-sm text-chilli-dark">
          {status}
        </p>
      )}
    </form>
  );
}
