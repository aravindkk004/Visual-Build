import FAQ from "@/components/Landing/FAQ/FAQ";
import Features from "@/components/Landing/Features/Features";
import Footer from "@/components/Landing/Footer/Footer";
import Hero from "@/components/Landing/Hero/Hero";
import HowItWorks from "@/components/Landing/HowItWorks/HowItWorks";
import Navbar from "@/components/Landing/Navbar/Navbar";
import Testimonials from "@/components/Landing/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/herobg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
