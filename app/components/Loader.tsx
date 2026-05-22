"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (

    <div className="fixed inset-0 bg-blue-950 flex items-center justify-center z-[9999]">

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-center"
      >

        <h1 className="text-4xl md:text-6xl font-bold text-orange-500">
          Likoni SACCO
        </h1>

        <p className="text-white mt-4 text-lg">
          Loading...
        </p>

      </motion.div>

    </div>
  );
}