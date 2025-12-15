import { HeroCinematic } from "@/components/home/hero-cinematic"
import { FestivalHighlights } from "@/components/home/festival-highlights"
import { FeaturedContent } from "@/components/featured-content"
import { Awards } from "@/components/awards"
import { PublicationsShowcase } from "@/components/publications-showcase"
import { Activities } from "@/components/activities"
import { Partners } from "@/components/partners"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroCinematic />
      <FestivalHighlights />
      <FeaturedContent />
      <Awards />
      <PublicationsShowcase />
      <Activities />
      <Partners />
    </div>
  )
}
