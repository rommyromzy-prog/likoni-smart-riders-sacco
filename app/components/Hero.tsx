"use client";

import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 relative min-h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="absolute inset-0 bg-black/30"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-4 sm:px-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
          Likoni Smart Riders SACCO
        </h2>

        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          Empowering riders through savings,
          loans, and community financial growth.
        </p>

        <a
          href="#membership"
          className="inline-block bg-orange-500 hover:bg-orange-600 hover:scale-110 active:scale-95 transition duration-300 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl"
        >
          Become a Member
        </a>
      </motion.div>

    </section>
  );
}
