"use client"

const articles = [
  {
    title: "AXL, PUSH Media Launch STRATIS, an Agentic AI Solution That Sets a New Standard for Marketing Intelligence and Operations",
    source: "Yahoo Finance",
    date: "Feb 24, 2026",
    url: "https://finance.yahoo.com/news/axl-push-media-launch-stratis-130000080.html",
  },
  {
    title: "AXL, PUSH Media Launch STRATIS, an Agentic AI Solution That Sets a New Standard for Marketing Intelligence and Operations",
    source: "Financial Post",
    date: "Feb 24, 2026",
    url: "https://financialpost.com/pmn/business-wire-news-releases-pmn/axl-push-media-launch-stratis-an-agentic-ai-solution-that-sets-a-new-standard-for-marketing-intelligence-and-operations",
  },
  {
    title: "AXL, PUSH Media Launch STRATIS, an Agentic AI Solution That Sets a New Standard for Marketing Intelligence and Operations",
    source: "National Post",
    date: "Feb 24, 2026",
    url: "https://nationalpost.com/pmn/business-wire-news-releases-pmn/axl-push-media-launch-stratis-an-agentic-ai-solution-that-sets-a-new-standard-for-marketing-intelligence-and-operations",
  },
  {
    title: "Push Media and AXL Launch Marketing Intelligence Platform",
    source: "Campaign Canada",
    date: "Feb 25, 2026",
    url: "https://www.campaigncanada.ca/article/push-media-and-axl-launch-marketing-intelligence-program/4y6s5z7h4a5g9we2ha7qfd94c7",
  },
  {
    title: "AXL, PUSH Media Announced the Launch of STRATIS",
    source: "MarTech Cube",
    date: "Feb 25, 2026",
    url: "https://www.martechcube.com/axl-push-media-announced-the-launch-of-stratis/",
  },
  {
    title: "AXL, PUSH Media Launch STRATIS AI for Marketing Intelligence and Operations",
    source: "CMO First",
    date: "Feb 25, 2026",
    url: "https://cmofirst.com/marketing/axl-push-media-launch-stratis-ai-for-marketing-intelligence-and-operations/",
  },
  {
    title: "AXL & PUSH Launch STRATIS Agentic AI for Marketers",
    source: "CMO Tech News",
    date: "Feb 25, 2026",
    url: "https://cmotech.news/story/axl-push-launch-stratis-agentic-ai-for-marketers",
  },
  {
    title: "AXL & PUSH Launch STRATIS Agentic AI for Marketers",
    source: "E-Commerce News",
    date: "Feb 25, 2026",
    url: "https://e-commerce.news/story/axl-push-launch-stratis-agentic-ai-for-marketers",
  },
  {
    title: "AXL & PUSH Launch STRATIS Agentic AI for Marketing",
    source: "Tech Intel Pro",
    date: "Feb 25, 2026",
    url: "https://techintelpro.com/news/ai/agentic-ai/axl-push-launch-stratis-agentic-ai-for-marketing",
  },
  {
    title: "How Will Agentic AI Change Modern Marketing Operations?",
    source: "B2B Daily",
    date: "Feb 2026",
    url: "https://b2bdaily.com/martech/how-will-agentic-ai-change-modern-marketing-operations/",
  },
  {
    title: "AXL and PUSH Media Partners to Introduce STRATIS for Marketing Intelligence",
    source: "MarTech360",
    date: "Feb 25, 2026",
    url: "https://martech360.com/quick-byte/axl-and-push-media-partners-to-introduce-stratis-for-marketing-intelligence/",
  },
]

export default function NewsCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <h1 className="text-white/90 font-[var(--font-quicksand)] font-light text-3xl sm:text-4xl tracking-widest text-center mb-12">
        In the News
      </h1>

      <div
        className="flex flex-col gap-4 md:flex-row md:gap-6 md:overflow-x-auto md:py-4 md:snap-x md:snap-mandatory md:scroll-smooth
          md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
      >
        {articles.map((article) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:flex-shrink-0 md:w-80 md:snap-start
              bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6
              flex flex-col gap-4
              transition-all duration-300
              hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
              md:hover:-translate-y-1"
          >
            <span className="text-white/40 font-[var(--font-quicksand)] font-light text-xs tracking-widest uppercase">
              {article.source}
            </span>
            <span className="text-white/90 font-[var(--font-quicksand)] font-light text-base leading-relaxed">
              {article.title}
            </span>
            <span className="text-white/30 font-[var(--font-quicksand)] font-light text-xs mt-auto">
              {article.date}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
