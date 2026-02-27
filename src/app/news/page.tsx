import Link from "next/link"
import ShaderBackground from "@/components/shader-background"
import NewsCarousel from "@/components/news-carousel"

export default function NewsPage() {
  return (
    <>
      <ShaderBackground />

      <div className="relative z-10 min-h-screen flex flex-col items-center pt-24 pb-16 md:justify-center md:pt-16">
        <div className="absolute top-8 left-8">
          <Link
            href="/"
            className="px-6 py-2 rounded-full
              bg-white/10 backdrop-blur-xl border border-white/20
              text-white/90 font-[var(--font-quicksand)] font-light text-sm tracking-widest
              transition-all duration-300
              hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
              active:scale-95"
          >
            &larr; Back
          </Link>
        </div>

        <NewsCarousel />
      </div>
    </>
  )
}
