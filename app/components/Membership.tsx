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
  }catch (error: any) {
  console.error("Payment Error:", error);

  alert("Check browser console (F12) for error details");
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
    ><a
  href="/membership"
  className="bg-orange-500 hover:bg-orange-600 hover:scale-110 active:scale-95 transition duration-300 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl inline-block"
>
  Become a Member
</a>

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