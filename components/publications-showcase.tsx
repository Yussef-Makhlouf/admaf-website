"use client"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

const publications = [
  {
    id: 1,
    title: "The Art of Nation",
    description: "Quarterly journal exploring the latest in Arab arts and culture.",
    image: "/culuture/louvre-abu-dhabi-museum-interior-dome-architecture.jpg",
    type: "Journal",
    year: "2025",
  },
  {
    id: 2,
    title: "Annual Report 24",
    description: "Comprehensive overview of festivals and achievements.",
    image: "/culuture/abu-dhabi-cultural-festival-performance-orchestra-.jpg",
    type: "Report",
    year: "2024",
  },
  {
    id: 3,
    title: "Emirati Art",
    description: "A study on the evolution of contemporary art in the UAE.",
    image: "/modern-art-gallery-with-minimalist-middle-eastern-.jpg",
    type: "Book",
    year: "2024",
  },
  {
    id: 4,
    title: "Cultural Guide",
    description: "Essential guide to cultural events across the Emirates.",
    image: "/qasr-al-hosn-fort-abu-dhabi-heritage-site.jpg",
    type: "Guide",
    year: "2025",
  },
]

export function PublicationsShowcase() {
  return (
    <section className="py-24 bg-admaf-cream">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-admaf-charcoal mb-4">
            Publications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Documenting the journey of culture and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group relative perspective-1000">
                {/* Book Card */}
                <motion.div
                  className="relative z-10 bg-white shadow-xl aspect-[3/4] cursor-pointer transform-style-3d transition-transform duration-500 group-hover:rotate-y-12 group-hover:-translate-y-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Spine Effect */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-admaf-red bg-opacity-30 z-20 rounded-r-full" />

                  <div className="absolute inset-2 bg-gray-50 flex flex-col p-6 text-center border border-gray-100">
                    {/* Cover Image Placeholder */}
                    <div className="flex-1 relative mb-4 overflow-hidden bg-gray-200">
                      <Image
                        src={publication.image || "/placeholder.svg"}
                        alt={publication.title}
                        fill
                        className="object-cover mix-blend-multiply opacity-90"
                      />
                    </div>
                    <h3 className="font-display text-xl leading-tight mb-2">{publication.title}</h3>
                    <span className="text-xs uppercase tracking-widest text-admaf-red">{publication.year}</span>
                  </div>
                </motion.div>

                {/* Book Shadow */}
                <div className="absolute bottom-0 left-4 right-4 h-4 bg-black/20 blur-xl transform translate-y-4 group-hover:translate-y-8 group-hover:opacity-40 transition-all duration-500" />

                {/* Actions - Always Visible */}
                <div className="flex justify-center gap-4 mt-8">
                  <Button size="sm" variant="default" className="bg-admaf-red hover:text-white text-admaf-white rounded-full">
                    <Download className="h-3 w-3 mr-2" /> PDF
                  </Button>
                  <Button size="sm" variant="outline" className="border-admaf-red hover:text-white hover:bg-admaf-red rounded-full">
                    <Eye className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-admaf-red text-admaf-red hover:bg-admaf-red hover:text-white rounded-none px-10 h-14 uppercase tracking-widest text-xs font-bold transition-all"
          >
            <Link href="/publications">
              View Digital Library
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
