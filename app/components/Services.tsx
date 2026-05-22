"use client";

import { motion } from "framer-motion";

import {
  FaMoneyBillWave,
  FaMotorcycle,
  FaUsers,
} from "react-icons/fa";

export default function Services() {
  return (

    <section
      id="services"
      className="scroll-mt-24 px-8 py-20 bg-gradient-to-b from-white to-gray-100"
    >

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"     
      ></motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-900 mb-6"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-14 text-lg"
        >
          We provide financial empowerment solutions for riders and members.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-4 hover:scale-105 transition duration-500"
          >

            <div className="text-5xl mb-4 text-orange-500 flex justify-center">
              <FaMoneyBillWave />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Savings Plans
            </h3>

            <p className="text-gray-600 leading-7">
              Secure and flexible savings plans that help members grow financially.
            </p>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-4 hover:scale-105 transition duration-500"
          >

            <div className="text-5xl mb-4 text-orange-500 flex justify-center">
              <FaMotorcycle />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Rider Loans
            </h3>

            <p className="text-gray-600 leading-7">
              Affordable loans for motorcycles, business expansion, and emergencies.
            </p>

          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-4 hover:scale-105 transition duration-500"
          >

            <div className="text-5xl mb-4 text-orange-500 flex justify-center">
              <FaUsers />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Community Support
            </h3>

            <p className="text-gray-600 leading-7">
              Building unity and economic growth through cooperative support systems.
            </p>

          </motion.div>

        </div>

    </section>
  );
}