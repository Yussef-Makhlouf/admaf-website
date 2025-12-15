"use client"

import { PageHero } from "@/components/section/page-hero"
import { StatsGrid } from "@/components/section/stats-grid"
import { RichContentBlock } from "@/components/section/rich-content-block"
import { Button } from "@/components/ui/button"
import { GeometricGrid } from "@/components/ui/geometric-patterns"
import { DecorativeDivider } from "@/components/islamic-patterns"

import { Festival } from "@/components/festival"

export default function FestivalPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Abu Dhabi Festival"
        subtitle="Since 2004"
        description="The leading celebration of arts and culture in the Arabian Gulf. A platform for cultural dialogue and artistic innovation."
        image="/grand-symphony-orchestra-performing-in-elegant-ven.jpg"
      />

      <Festival />

      {/* Legacy Section - Enhanced with RichContentBlock */}
      <RichContentBlock
        title="A Legacy of Excellence"
        subtitle="Our History"
        content="Over two decades, we have commissioned specialized works that have premiered in Abu Dhabi and traveled the world. We bring the world to Abu Dhabi, and bring Abu Dhabi to the world."
        image="/modern-art-gallery-with-minimalist-middle-eastern-.jpg"
        buttonText="Explore History"
      />

      <StatsGrid
        stats={[
          { value: "500+", label: "Events" },
          { value: "40+", label: "Commissions" },
          { value: "30", label: "Countries" },
          { value: "2M+", label: "Attendees" }
        ]}
      />

      {/* Upcoming Commissions Grid */}
      <section className="bg-white py-24 mb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display text-admaf-red mb-4">New Commissions</h2>
            <DecorativeDivider className="w-32 h-6 text-admaf-red mx-auto opacity-40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-gray-100 relative overflow-hidden mb-6 border border-gray-100 group-hover:border-admaf-red transition-all">
                  <GeometricGrid className="absolute inset-0 opacity-20 text-admaf-red" />
                  <div className="absolute inset-0 bg-admaf-red/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-admaf-red uppercase mb-2 block">World Premiere</span>
                  <h3 className="text-2xl font-display text-admaf-black mb-2">The Silk Road Symphony</h3>
                  <span className="text-sm text-gray-400 underline decoration-gray-200 underline-offset-4 group-hover:text-admaf-red group-hover:decoration-admaf-red transition-all">
                    View Details
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
