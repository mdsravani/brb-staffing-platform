import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTA from "@/components/sections/CTA";
export default function Home() {
  return (
    <main>
      <Hero />
      <Trusted />
      <Services />
      <Industries/>
      <WhyChooseUs />
      <CTA />
    </main>
  );
}