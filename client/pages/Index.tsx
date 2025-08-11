import Hero from "@/components/onepager/Hero";
import FeaturesIntro from "@/components/onepager/FeaturesIntro";
import FeaturesGrid from "@/components/onepager/FeaturesGrid";
import Cooking from "@/components/onepager/Cooking";
import Roadmap from "@/components/onepager/Roadmap";
import Mail from "@/components/onepager/Mail";
import Footer from "@/components/onepager/Footer";

export default function Index() {
  return (
    <div className="bg-[#FAFAFA] overflow-y-scroll h-screen">
      {/* Snapping sections */}
      <section>
        <Hero />
      </section>
      <section>
        <FeaturesIntro />
      </section>
      <section>
        <FeaturesGrid />
      </section>
      <section>
        <Cooking />
      </section>
      <section>
        <Roadmap />
      </section>
      <section>
        <Mail />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
