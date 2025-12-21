"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { IslamicStarPattern } from "@/components/islamic-patterns"
import { useState } from "react"

// Extended Awards Data - حسب التصميم المطلوب
const awardsData = [
  {
    id: 1,
    title: "Dolce&Gabbana x ADMAF Design Awards",
    year: "2024",
    recipient: "Applications Open",
    description: "The Dolce & Gabbana x ADMAF Design Awards recognize exceptional creativity in fashion and design innovation.",
    image: "/culuture/abu-dhabi-cultural-heritage-museum-interior-archit.jpg",
    deadline: "12-November-2024"
  },
  {
    id: 2,
    title: "Total Energies Sustainability Design Award",
    year: "2024",
    recipient: "Applications Open",
    description: "Recognizing sustainable design solutions that promote environmental responsibility.",
    image: "/culuture/louvre-abu-dhabi-museum-interior-dome-architecture.jpg",
    deadline: ""
  },
  {
    id: 3,
    title: "Gulf Capital-ADMAF Visual Arts Award",
    year: "2024",
    recipient: "Applications Open",
    description: "Celebrating excellence in visual arts and creative expression.",
    image: "/modern-art-gallery-with-minimalist-middle-eastern-.jpg",
    deadline: ""
  },
]

export function Awards() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextAward = () => {
    setActiveIndex((prev) => (prev + 1) % awardsData.length)
  }

  const prevAward = () => {
    setActiveIndex((prev) => (prev - 1 + awardsData.length) % awardsData.length)
  }

  return (
    <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <IslamicStarPattern className="absolute -top-40 -left-40 w-[600px] h-[600px] text-white" />
        <IslamicStarPattern className="absolute -bottom-40 -right-40 w-[600px] h-[600px] text-white" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-display leading-tight">
              Awards
            </h2>

            <p className="text-lg text-white/80 font-light leading-relaxed max-w-md">
              Recognizing the <span className="text-admaf-gold/80 italic">exceptional contributions</span> of artists, creators, and innovators who shape our cultural landscape.
            </p>

            {/* Interactive Award Selection */}
            <div className="flex gap-4 pt-4 overflow-x-auto pb-4 no-scrollbar">
              {awardsData.map((award, index) => (
                <div
                  key={award.id}
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-[200px] p-6 border transition-all duration-300 cursor-pointer group relative overflow-hidden ${index === activeIndex
                    ? "bg-white border-white scale-105"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                >
                  <div className={`absolute top-0 left-0 w-1 h-full transition-all duration-300 ${index === activeIndex ? "bg-admaf-red" : "bg-transparent group-hover:bg-admaf-gold"}`} />
                  <Award className={`w-8 h-8 mb-4 transition-colors ${index === activeIndex ? "text-admaf-red" : "text-admaf-gold"}`} />
                  <h3 className={`text-lg font-display mb-1 transition-colors ${index === activeIndex ? "text-admaf-black" : "text-white"}`}>
                    {award.title}
                  </h3>
                  <span className={`text-sm transition-colors ${index === activeIndex ? "text-admaf-charcoal/70" : "text-white/50"}`}>
                    {award.year} Recipient
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex gap-4">
              <Button onClick={prevAward} variant="outline" size="icon" className="rounded-none border-white/20 hover:bg-admaf-gold hover:border-admaf-gold hover:text-white text-white bg-transparent">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button onClick={nextAward} variant="outline" size="icon" className="rounded-none border-white/20 hover:bg-admaf-gold hover:border-admaf-gold hover:text-white text-white bg-transparent">
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button className="bg-admaf-red text-white hover:bg-admaf-gold hover:text-admaf-black transition-colors duration-300 rounded-none px-8 h-10 text-xs font-bold uppercase tracking-widest ml-auto">
                Apply Now
              </Button>
            </div>
          </div>

          {/* Image Side - Main Feature */}
          <div className="relative h-[600px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full border border-white/10 p-4">
                  <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-admaf-gold -mt-2 -mr-2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-admaf-gold -mb-2 -ml-2" />

                  <div className="w-full h-full relative overflow-hidden">
                    <Image
                      src={awardsData[activeIndex].image}
                      alt={awardsData[activeIndex].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <div className="bg-admaf-red text-white text-xs font-bold uppercase tracking-widest px-3 py-1 inline-block mb-4">
                        Winner {awardsData[activeIndex].year}
                      </div>
                      <h3 className="text-3xl font-display text-white mb-2">{awardsData[activeIndex].recipient}</h3>
                      <p className="text-white/80">{awardsData[activeIndex].description}</p>
                    </div>
                  </div>


            
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
