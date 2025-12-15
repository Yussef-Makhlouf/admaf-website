"use client"

import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/section/page-hero"
import { DecorativeDivider } from "@/components/islamic-patterns"

const PARTNERS = [
  { name: "Mubadala", logo: "/partners/imgi_10_mubadla-logo.jpg", type: "Lead" },
  { name: "G42", logo: "/partners/imgi_11_G42-footer_logo.png", type: "Lead" },
  { name: "Total Energies", logo: "/partners/imgi_13_total-energy-logo.png", type: "Energy" },
  { name: "Dolphin Energy", logo: "/partners/imgi_14_logo-dolphin.png", type: "Energy" },
  { name: "GS Energy", logo: "/partners/imgi_12_GS-energy-logo.png", type: "Strategic" },
  { name: "Gulf Capital", logo: "/partners/imgi_15_gulf-capitals.jpg", type: "Strategic" },
  { name: "Dolce & Gabbana", logo: "/partners/imgi_16_dolce.jpg", type: "Luxury" },
  { name: "Chopard", logo: "/partners/imgi_17_logo-chopard.png", type: "Luxury" },
]

export default function PartnershipsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Our Partners"
        subtitle="Collaboration & Support"
        description="We work with leading global and local institutions to bring world-class art to Abu Dhabi. Their support is vital to our mission."
        image="/page-hero.png" // Using one of the partner images as abstract bg
      />

      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-display text-admaf-black uppercase tracking-widest mb-6">Strategic Alliances</h2>
          <DecorativeDivider className="w-24 h-6 text-admaf-red mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
          {PARTNERS.map((partner, i) => (
            <div key={i} className="bg-white p-12 flex items-center justify-center group relative overflow-hidden h-40 md:h-56">
              {/* Logo Image */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[120px] md:max-w-[160px] max-h-[80px] object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 relative z-10"
              />
              {/* Subtle Red Hover Tint */}
              <div className="absolute inset-0 bg-admaf-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 bg-admaf-gray p-12 md:p-20 border-t border-admaf-red/10">
          <div>
            <h3 className="text-3xl font-display text-admaf-black mb-6">Become a Partner</h3>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Align your brand with culture, creativity, and excellence. Join us in shaping the artistic landscape of the UAE.
            </p>
            <Button className="bg-admaf-red text-white hover:bg-admaf-black rounded-none px-8 h-14 w-full md:w-auto">
              Download Sponsorship Kit
            </Button>
          </div>
          <div className="border-l border-admaf-red/10 pl-0 md:pl-12 flex flex-col justify-center">
            <p className="text-xl font-display text-admaf-red mb-2">"Culture is the bridge between nations."</p>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Join the movement</p>
          </div>
        </div>
      </section>
    </div>
  )
}
