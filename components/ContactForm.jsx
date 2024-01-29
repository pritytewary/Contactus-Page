"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      const { msg, success } = await res.json();
      setError(msg);
      setSuccess(success);
      router.refresh();
      if (success) {
      }
    } catch (error) {
      setError(["Failed to submit form"]);
    }
  };

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col border-t gap-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder=" jhon doe"
            onChange={handleFullNameChange}
            value={fullName}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder=" jhondoe@gmail.com"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <label> Your Message</label>
          <textarea
            type="text"
            name="message"
            placeholder=" Type your message"
            className="h-32"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <button type="submit" className="bg-green-700 text-white p-3 font-bold">
          Send
        </button>
      </form>
      <div className="bg-slate-100 flex flex-col">
        {error && (
          <div
            className={`${
              success ? "text-green-800" : "text-red-600"
            } px-5 py-2 `}
          >
            {error}
          </div>
        )}
      </div>
    </>
  );
}
