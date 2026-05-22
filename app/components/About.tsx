import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (

    <section
      id="about"
      className="scroll-mt-24 px-8 py-20 bg-gray-100"
    >

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >

        {/* Text Side */}
        <div>

          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            About Our SACCO
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            Likoni Smart Riders SACCO is a community-driven savings and credit
            cooperative focused on empowering riders and members through financial
            support, affordable loans, savings programs, and community growth.
          </p>

          <p className="text-lg leading-8 text-gray-700 mt-4">
            We believe in unity, discipline, and economic empowerment for all members.
          </p>

        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">

          <Image
            data-aos="flip-right"
            src="/images/team1.jpg"
            alt="Team 1"
            width={500}
            height={500}
            className="w-full h-64 object-cover rounded-3xl shadow-xl hover:scale-105 hover:-translate-y-2 transition duration-500"
          />

          <Image
            data-aos="flip-left"
            src="/images/team2.jpg"
            alt="Team 2"
            width={500}
            height={500}
            className="w-full h-64 object-cover rounded-3xl shadow-xl hover:scale-105 hover:-translate-y-2 transition duration-500"
          />

          <Image
            data-aos="flip-right"
            src="/images/team3.jpg"
            alt="Team 3"
            width={500}
            height={500}
            className="w-full h-64 object-cover rounded-3xl shadow-xl hover:scale-105 hover:-translate-y-2 transition duration-500"
          />

          <Image
            data-aos="flip-left"
            src="/images/team4.jpg"
            alt="Team 4"
            width={500}
            height={500}
            className="w-full h-64 object-cover rounded-3xl shadow-xl hover:scale-105 hover:translate-y-2 transition duration-500"
          />

        </div>

      </motion.div>

    </section>

  );
}