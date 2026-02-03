import ShaderBackground from "@/components/shader-background";
import HeroContent from "@/components/hero-content";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <ShaderBackground />

      {/* Hero content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <HeroContent />
      </div>
    </main>
  );
}
