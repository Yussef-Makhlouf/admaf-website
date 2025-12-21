import { HeroCinematic } from "@/components/home/hero-cinematic"
import { Activities } from "@/components/activities"
import { Awards } from "@/components/awards"
import { PublicationsShowcase } from "@/components/publications-showcase"
import { Partners } from "@/components/partners"
import { Festival } from "@/components/festival"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroCinematic />
      <Activities />
      <Awards />
      <PublicationsShowcase />
      <Festival />
      <Partners />
    </div>
  )
}
