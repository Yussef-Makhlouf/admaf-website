"use client"
import Image from "next/image"
import { motion } from "framer-motion"

// بيانات نموذجية للشركاء
const partnersData = [
  { id: 1, name: "Mubadala", logo: "/partners/imgi_10_mubadla-logo.jpg" },
  { id: 2, name: "G42", logo: "/partners/imgi_11_G42-footer_logo.png" },
  { id: 3, name: "GS Energy", logo: "/partners/imgi_12_GS-energy-logo.png" },
  { id: 4, name: "Total Energies", logo: "/partners/imgi_13_total-energy-logo.png" },
  { id: 5, name: "Dolphin Energy", logo: "/partners/imgi_14_logo-dolphin.png" },
  { id: 6, name: "Gulf Capital", logo: "/partners/imgi_15_gulf-capitals.jpg" },
  { id: 7, name: "Dolce & Gabbana", logo: "/partners/imgi_16_dolce.jpg" },
  { id: 8, name: "Chopard", logo: "/partners/imgi_17_logo-chopard.png" },
]

export function Partners() {
  return (
    <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mb-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-admaf-red" />
          <h2 className="text-xl font-display tracking-widest uppercase text-admaf-charcoal">Strategic Partners</h2>
        </div>
      </div>

      <div className="relative w-full">
        {/* Gradients for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-20 items-center whitespace-nowrap py-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {/* Double the list for seamless loop */}
            {[...partnersData, ...partnersData, ...partnersData].map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="relative w-[150px] h-[80px] grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
