"use client"
import Image from "next/image"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { OrnamentalDivider } from "@/components/islamic-patterns"

// بيانات نموذجية للأنشطة
const activitiesData = [
  {
    id: 1,
    title: "Cultural Symposium",
    image: "/culuture/abu-dhabi-cultural-heritage-museum-interior-archit.jpg",
    description: "Bringing together intellectuals and artists for deep dialogue.",
    tag: "Symposium",
    date: "Dec 15"
  },
  {
    id: 2,
    title: "Art Exhibition",
    image: "/culuture/arabic-calligraphy-art-exhibition.jpg",
    description: "Showcasing masterpieces from around the Islamic world.",
    tag: "Exhibition",
    date: "Jan 20"
  },
  {
    id: 3,
    title: "Heritage Workshop",
    image: "/culuture/oud-player-performing-close-up-hands-on-strings.jpg",
    description: "Learning traditional crafts from master artisans.",
    tag: "Workshop",
    date: "Feb 10"
  },
  {
    id: 4,
    title: "Youth Creativity",
    image: "/culuture/diverse-musicians-playing-traditional-and-modern-i.jpg",
    description: "Empowering the next generation of creative leaders.",
    tag: "Youth",
    date: "Mar 05"
  },
  {
    id: 5,
    title: "Gala Awards",
    image: "/culuture/orchestra-concert-hall-performance-dramatic-lighti.jpg",
    description: "Honoring excellence in the arts and culture sector.",
    tag: "Ceremony",
    date: "Apr 12"
  },
]

export function Activities() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="relative">
            <h2 className="text-5xl font-display text-admaf-charcoal mb-4">Latest Activities</h2>
            <OrnamentalDivider className="w-64 h-6 opacity-50" />
          </div>

          <div className="flex gap-4">
            <Button variant="outline" size="icon" onClick={() => scroll('left')} className="rounded-full hover:bg-admaf-red hover:text-white hover:border-admaf-red transition-all">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll('right')} className="rounded-full hover:bg-admaf-red hover:text-white hover:border-admaf-red transition-all">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {activitiesData.map((activity, index) => (
            <div key={activity.id} className="min-w-[300px] md:min-w-[400px] snap-center">
              <ActivityCard activity={activity} index={index} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="link" className="text-admaf-red uppercase tracking-widest text-xs font-bold hover:text-admaf-charcoal">
            View All Activities <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function ActivityCard({ activity, index }: { activity: any, index: number }) {
  return (
    <motion.div
      className="group relative h-[500px] bg-gray-100 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Image
        src={activity.image || "/placeholder.svg"}
        alt={activity.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Badge */}
      <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
        {activity.tag}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-admaf-gold text-sm font-serif italic mb-2 block">{activity.date}</span>
        <h3 className="text-2xl font-display mb-3 leading-tight">{activity.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
          {activity.description}
        </p>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
          Read More <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </motion.div>
  )
}
