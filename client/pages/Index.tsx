import Hero from "@/components/onepager/Hero";
import FeaturesIntro from "@/components/onepager/FeaturesIntro";
import FeaturesGrid from "@/components/onepager/FeaturesGrid";
import Cooking from "@/components/onepager/Cooking";
import Roadmap from "@/components/onepager/Roadmap";
import Mail from "@/components/onepager/Mail";
import Footer from "@/components/onepager/Footer";

export default function Index() {
  return (
    <div className="bg-[#FAFAFA] snap-y snap-proximity overflow-y-scroll h-screen">
      {/* Snapping sections */}
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-start">
        <FeaturesIntro />
      </section>
      <section className="snap-start">
        <FeaturesGrid />
      </section>
      <section className="snap-start">
        <Cooking />
      </section>

      {/* Non-snapping sections - normal scroll */}
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
