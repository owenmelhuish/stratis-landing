import ShaderBackground from "@/components/shader-background";
import HeroContent from "@/components/hero-content";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import FlywheelSection from "@/components/flywheel-section";
import SocialProofSection from "@/components/social-proof-section";

export default function Home() {
  return (
    <>
      {/* Fixed shader background — z-0 */}
      <ShaderBackground />

      {/* Fixed hero content — locked in place, z-10 */}
      <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none">
        <HeroContent />
      </div>

      {/* Scrollable content that slides over the hero */}
      <div className="relative z-20 pointer-events-none">
        {/* Spacer — keeps hero visible for the first viewport */}
        <div className="h-screen" />

        {/* Sections scroll over the fixed hero */}
        <div className="pointer-events-auto">
          <ProblemSection />
          <SolutionSection />
          <FlywheelSection />
          <SocialProofSection />
        </div>

        {/* Fade out to reveal shader background again */}
        <div className="h-32 bg-gradient-to-b from-black/70 to-transparent" />

        {/* Transparent spacer — shader background visible */}
        <div className="h-screen" />
      </div>
    </>
  );
}
