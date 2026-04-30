import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Strengths from "@/components/Strengths";
import CTABanner from "@/components/CTABanner";
import Members from "@/components/Members";
import Office from "@/components/Office";
import Values from "@/components/Values";
import Benefits from "@/components/Benefits";
import Jobs from "@/components/Jobs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strengths />
        <CTABanner />
        <Members />
        <Office />
        <Values />
        <Benefits />
        <Jobs />
      </main>
      <Footer />
    </>
  );
}
