"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Statistics() {
  return (
    <section className="bg-blue-900 text-white py-20 px-8">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >

        {/* Stat 1 */}
        <div data-aos="zoom-in" data-aos-delay="100">

          <h2 className="text-5xl font-bold text-orange-400 mb-4">
            <CountUp end={60} duration={3} />+
          </h2>

          <p className="text-lg">
            Active Members
          </p>

        </div>

        {/* Stat 2 */}
        <div data-aos="zoom-in" data-aos-delay="200">

          <h2 className="text-5xl font-bold text-orange-400 mb-4">
            Ksh <CountUp end={20000} duration={3} separator="," />
          </h2>

          <p className="text-lg">
            Loans Issued
          </p>

        </div>

        {/* Stat 3 */}
        <div data-aos="zoom-in" data-aos-delay="300">

          <h2 className="text-5xl font-bold text-orange-400 mb-4">
            <CountUp end={3} duration={3} />+
          </h2>

          <p className="text-lg">
            Years Experience
          </p>

        </div>

        {/* Stat 4 */}
        <div data-aos="zoom-in" data-aos-delay="400">

          <h2 className="text-5xl font-bold text-orange-400 mb-4">
            24/7
          </h2>

          <p className="text-lg">
            Member Support
          </p>

        </div>

      </motion.div>

    </section>
  );
}