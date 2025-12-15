"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const featuredItems = [
  {
    id: 1,
    type: "Event",
    title: "Abu Dhabi Festival 2025 Opening Gala",
    description: "Join us for a spectacular evening of music and light as we celebrate the opening of the 22nd edition.",
    image: "/grand-symphony-orchestra-performing-in-elegant-ven.jpg",
    date: "Jan 15, 2025",
    location: "Emirates Palace",
    size: "large", // spans 2 rows, 2 cols
  },
  {
    id: 2,
    type: "Exhibition",
    title: "Calligraphy: Soul of the Pen",
    description: "An immersive journey through the history of Arabic calligraphy.",
    image: "/intimate-literary-event-space-with-arabic-calligra.jpg",
    date: "Feb 01 - Mar 30",
    location: "Manarat Al Saadiyat",
    size: "medium", // spans 1 row, 2 cols
  },
  {
    id: 3,
    type: "Workshop",
    title: "Digital Art Masterclass",
    description: "Learn from pioneering digital artists.",
    image: "/modern-art-gallery-with-minimalist-middle-eastern-.jpg",
    date: "Feb 10",
    location: "Cultural Foundation",
    size: "small", // spans 1 row, 1 col
  },
  {
    id: 4,
    type: "Performance",
    title: "Oud Night",
    description: "A soulful evening of traditional music.",
    image: "/distinguished-middle-eastern-male-musician-portrai.jpg",
    date: "Feb 12",
    location: "Louvre Abu Dhabi",
    size: "small", // spans 1 row, 1 col
  },
]

export function FeaturedContent() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-admaf-red tracking-widest uppercase font-bold text-sm mb-2 block">What's On</span>
            <h2 className="text-4xl md:text-5xl font-display text-admaf-charcoal leading-tight">
              Highlights & Events
            </h2>
          </div>
          <Button variant="outline" className="border-admaf-charcoal text-admaf-charcoal hover:bg-admaf-charcoal hover:text-white rounded-none px-8">
            View Calendar
          </Button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`group relative overflow-hidden bg-gray-100 cursor-pointer ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                item.size === 'medium' ? 'md:col-span-2 md:row-span-1' :
                  'md:col-span-1 md:row-span-1'
                }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

              <div className="absolute top-6 left-6">
                <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 text-xs font-bold uppercase border border-white/20">
                  {item.type}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full text-white">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 text-xs font-medium text-white/70 mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {item.location}</span>
                  </div>
                  <h3 className={`${item.size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl'} font-display mb-2 leading-tight`}>
                    {item.title}
                  </h3>
                  {item.size === 'large' && (
                    <p className="text-white/80 max-w-md line-clamp-2 md:line-clamp-none mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-admaf-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
