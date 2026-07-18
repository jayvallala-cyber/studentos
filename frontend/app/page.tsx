import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import FeatureGrid from "./components/features/FeatureGrid";
import WhyStudentOS from "./components/home/WhyStudentOS";
import CTA from "./components/home/CTA";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureGrid />
      <WhyStudentOS />
      <CTA />
    </>
  );
}