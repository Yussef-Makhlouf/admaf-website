"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { DecorativeDivider } from "./islamic-patterns"

export function Festival() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Content Side */}
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-left order-2 lg:order-1"
          >
            <div className="flex items-center justify-start gap-4">
              <span className="text-admaf-gold tracking-widest uppercase text-sm font-bold">Abu Dhabi Festival</span>
              <div className="h-px w-12 bg-admaf-gold" />
            </div>

            <h2 className="text-5xl lg:text-7xl font-display font-bold text-admaf-charcoal leading-tight">
              Abu Dhabi Festival
            </h2>
            <DecorativeDivider className="w-32 h-8 text-admaf-red mb-8 opacity-60" />
            

            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                The Abu Dhabi Festival is one of the leading cultural events in the region, bringing together world-class artists and creators. Founded in 2004, the festival has established itself as a beacon for cultural exchange and artistic excellence.
              </p>
              <p>
                Each year, we present a diverse program of musical, theatrical, and artistic performances, alongside exhibitions and workshops that enrich the cultural landscape of the UAE.
              </p>
            </div>

            <div className="flex flex-wrap justify-start gap-6 pt-4">
              <div className="flex items-center gap-3 bg-gray-50 px-6 py-4 border border-gray-100">
                <Calendar className="w-6 h-6 text-admaf-red" />
                <div className="text-left">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Date</div>
                  <div className="font-bold text-admaf-charcoal">January - March 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 px-6 py-4 border border-gray-100">
                <MapPin className="w-6 h-6 text-admaf-red" />
                <div className="text-left">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Location</div>
                  <div className="font-bold text-admaf-charcoal">Emirates Palace</div>
                </div>
              </div>
            </div>

            <div className="pt-6 flex justify-start">
              <Button className="bg-admaf-red text-white hover:bg-admaf-black transition-all duration-300 rounded-none px-8 h-12 text-md font-bold">
                View Festival Programme <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Image Grid Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] order-1 lg:order-2"
          >
            {/* Main Large Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[85%] z-10">
              <div className="relative w-full h-full overflow-hidden shadow-2xl">
                <Image
                  src="/grand-symphony-orchestra-performing-in-elegant-ven.jpg"
                  alt="Grand Symphony"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40" />
              </div>
            </div>

            {/* Floating Secondary Image */}
            <motion.div
              className="absolute bottom-0 left-0 w-[55%] h-[50%] z-20 border-4 border-white shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-full overflow-hidden bg-admaf-charcoal">
                <Image
                  src="/culuture/abu-dhabi-cultural-festival-performance-orchestra-.jpg"
                  alt="Orchestra Performance"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-cultural-pattern z-0 opacity-20" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
