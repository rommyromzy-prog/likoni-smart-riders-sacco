import { motion } from "framer-motion";

export default function Membership() {
 const handlePayment = async () => {
  try {
    const response = await fetch("/api/token/stkpush", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: "254119853505",
        amount: 1,
      }),
    });

    const data = await response.json();

    console.log(data);

    alert("STK Push Sent Successfully!");
  } catch (error) {
    console.error(error);

    alert("Payment Failed");
  }
};

  return (
    <motion.section
      id="membership"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="scroll-mt-24 bg-blue-900 text-white px-8 py-20 text-center max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-6">
        Become a Member
      </h2>

      <p className="max-w-2xl mx-auto text-lg mb-8">
        Join Likoni Smart Riders SACCO today and enjoy savings,
        affordable loans, and financial empowerment opportunities.
      </p>
<button
  onClick={handlePayment}
  className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition duration-300 px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
>
  Pay Membership Fee
</button>

    </motion.section>

  );
}