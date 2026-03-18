'use client'

import { useState } from "react";

export default function RSVP() {
  const [attendance, setAttendance] = useState<string>("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      attendance,
      name,
    };

    console.log("RSVP Data:", data);

    // ✅ reset fields
    setAttendance("");
    setName("");

    // ✅ show success message
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
      <div className="flex flex-col gap-4 w-full max-w-md">

        <label className="text-lg">
          Կկարողանա՞ք ներկա գտնվել միջոցառմանը
        </label>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="attendance"
              value="yes"
              checked={attendance === "yes"}
              onChange={(e) => setAttendance(e.target.value)}
              className="accent-[#fdcdea]"
              required
            />
            Այո
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="attendance"
              value="no"
              checked={attendance === "no"}
              onChange={(e) => setAttendance(e.target.value)}
              className="accent-[#fdcdea]"
              required
            />
            Ոչ
          </label>
        </div>

        <input
          placeholder="Անուն Ազգանուն"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border-b-2 border-[#fdcdea] bg-[#fffcfd] h-12 placeholder-[#d3cdcd] p-2 outline-none"
        />

        <button
          type="submit"
          className="rounded-4xl py-4 px-6 bg-linear-to-r from-[#fdcdea] via-[#ffe5eb] to-[#efe6eb] cursor-pointer"
        >
          Ուղարկել
        </button>

        {submitted && (
          <p className="text-center text-pink-500">
            Շնորհակալություն 💕 Ձեր պատասխանը ուղարկվել է
          </p>
        )}

      </div>
    </form>
  );
}