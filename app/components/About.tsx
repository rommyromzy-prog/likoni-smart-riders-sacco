"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            About Us
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Likoni Smart Riders SACCO is committed to empowering riders and
            community members through savings, loans, and financial growth.
            We believe in unity, innovation, and economic transformation.
          </p>
        </motion.div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/images/team1.jpg"
            alt="Team"
            className="h-64 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"        />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/team2.jpg"
            alt="Members"
            className="h-64 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"
          />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/team3.jpg"
            alt="Members"
            className="h-64 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"
          />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/team4.jpg"
            alt="Members"
            className="h-64 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"
          />


          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/team5.jpg"
            alt="Members"
          className="h-64 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"
         />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/team6.jpg"
            alt="Members"
          className="h-64 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"
        />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/team7.jpg"
            alt="Members"
            className="h-64 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"
          />

             <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/team8.jpg"
            alt="Members"
          className="h-64 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"
          />

           <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/team9.jpg"
            alt="Members"
            className="h-72 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"
          />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/team10.jpg"
            alt="Members"
            className="h-64 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"
          />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/team11.jpg"
            alt="Members"
            className="h-64 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"
          />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/team12.jpg"
            alt="Members"
            className="h-64 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"
          />



          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            src="/images/Our form.jpg"
            alt="Office"
            className="h-64 w-full object-cover rounded-3xl shadow-2xl border border-white hover:scale-105 hover:-translate-y-2 transition duration-500 contrast-110 brightness-105"
          />

        </div>

      </div>
    </section>
  );
}