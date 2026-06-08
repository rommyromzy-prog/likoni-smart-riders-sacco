"use client";

import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.current) return;

  setLoading(true);

  emailjs
    .sendForm(
      "service_zvr2tal",
      "template_mcojk1c",
      form.current,
      "TWRpWWkE9alzji8S_"
    )
    .then(
      () => {
        toast.success("Message sent successfully!");
        setLoading(false);

        form.current?.reset();
      },
      () => {
        toast.error("Failed to send message.");
        setLoading(false);
      }
    );
};
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 py-20 bg-gray-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Contact Us
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-3xl shadow-2xl space-y-6"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-orange-500"
          />
          <a
  href="tel:0711299211"
  className="text-orange-500 font-semibold hover:underline"
>
  0711299211
</a>

<a
  href="tel:0751655711"
  className="text-orange-500 font-semibold hover:underline"
>
  0751655711
</a>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </motion.div>
    </section>
  );
}