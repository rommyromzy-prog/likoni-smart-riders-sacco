"use client";

import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
// @ts-ignore
import "react-toastify/dist/ReactToastify.css";
import ScrollProgress from "./components/ScrollProgress";
import Whatsapp from "./components/Whatsapp";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Membership from "./components/Membership";
import About from "./components/About";
import Statistics from "./components/Statistics";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import AOS from "aos";
// @ts-ignore
import "aos/dist/aos.css";

export default function Home() {

  const [loading, setLoading] = useState(true);

  const handlePayment = async () => {
  try {
    const response = await fetch("/api/stkpush", {
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

  useEffect(() => {

    AOS.init({
      duration: 1200,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);
  if (loading) {
    return <Loader />;
  }

  return (
    
    <main className="min-h-screen bg-white text-black scroll-smooth overflow-x-hidden">

      

       <Navbar />

       <Hero />

       <Services />
      
       <Statistics />

       <Gallery />

       <About />

       <Membership />

       <Contact />

       <Footer />

       <Whatsapp />

       <ToastContainer position="top-right" />

    </main>
  );
}
