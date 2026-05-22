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
import Services from "./components/Services";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import AOS from "aos";
// @ts-ignore
import "aos/dist/aos.css";

export default function Home() {

  const [loading, setLoading] = useState(true);

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

       <About />

       <Membership />

       <Contact />

       <Footer />

       <Whatsapp />

       <ToastContainer position="top-right" />

    </main>
  );
}