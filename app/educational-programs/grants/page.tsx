"use client"

import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/section/page-hero"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { grantsData } from "@/lib/grants-data"
import { DecorativeDivider, OrnamentalDivider} from "@/components/islamic-patterns"

export default function GrantsIndexPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Grants & Opportunities"
        subtitle="Supporting Creativity"
        description="ADMAF Grants provide financial support for UAE-based practitioners in the culture and creative industries. We support mentoring, residencies, training, and creative endeavours to foster the growth of the nation's cultural ecosystem."
        image="/modern-art-gallery-with-minimalist-middle-eastern-.jpg"
      />

      {/* Grants Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-admaf-black mb-4">
              Explore Available Grants
            </h2>
            <DecorativeDivider className="w-32 h-6 mx-auto text-admaf-red opacity-40 mb-6" />
          </motion.div>

          {/* Grants Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grantsData.map((grant, index) => (
              <motion.div
                key={grant.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/educational-programs/grants/${grant.slug}`}>
                  <div className="group h-full bg-white border border-gray-100 hover:border-admaf-red/20 hover:shadow-xl transition-all duration-500 flex flex-col relative overflow-hidden">
                    {/* Decorative Pattern */}  
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-500">
                      <OrnamentalDivider className="w-full h-full text-admaf-red" />
                    </div>

                    {/* Start Date Badge */}
                    <div className="absolute top-0 right-0 bg-admaf-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 z-10 transition-transform duration-300 group-hover:translate-x-full">
                      Deadline: {grant.dates[1].value.includes('-') ? grant.dates[1].value.split('-')[1] : 'Ongoing'}
                    </div>

                    {/* Image */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={grant.image || "/placeholder.svg"}
                        alt={grant.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    </div>

                    <div className="p-8 flex flex-col flex-grow relative">
                      <h3 className="text-2xl font-display text-admaf-black mb-4 group-hover:text-admaf-red transition-colors duration-300 line-clamp-2 min-h-[4rem]">
                        {grant.title}
                        
                      </h3>
                      <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 line-clamp-3">
                        {grant.description}
                       
                      </p>
                      <OrnamentalDivider className="w-full h-10 text-admaf-red" />
                      <div className="mt-auto border-t border-gray-100 pt-6 flex justify-between items-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                          {grant.amount}
                        </span>
                        <span className="text-admaf-red text-sm font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                          Apply Now <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
