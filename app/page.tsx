import { Hero } from "@/components/hero"
import { FeaturedContent } from "@/components/featured-content"
import { PublicationsShowcase } from "@/components/publications-showcase"
import { FestivalHighlight } from "@/components/festival-highlight"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedContent />
      <PublicationsShowcase />
      <FestivalHighlight />
    </div>
  )
}
