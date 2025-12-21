"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/section/page-hero"
import { Button } from "@/components/ui/button"
import { OrnamentalDivider, DecorativeDivider, IslamicStarPattern } from "@/components/islamic-patterns"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { grantsData } from "@/lib/grants-data"

// Gallery Initiatives Data
const initiativesData = [
  {
    id: 1,
    title: "Admaf Talks",
    image: "https://admaf.org/wp-content/uploads/2023/12/Young-Filmmakers-Circle-small.jpg",
    link: "/educational-programs/initiatives"
  },
  {
    id: 2,
    title: "Riwaq Al Adab Wal Kitab",
    image: "https://admaf.org/wp-content/uploads/2023/12/inide-banners.jpg",
    link: "/educational-programs/initiatives"
  },
  {
    id: 3,
    title: "Young Filmmakers' Circle",
    image: "https://admaf.org/wp-content/uploads/2023/11/contact-cover.webp",
    link: "/educational-programs/initiatives"
  },
  {
    id: 4,
    title: "Young Media Leaders",
    image: "https://admaf.org/wp-content/uploads/2023/12/music.jpg",
    link: "/educational-programs/initiatives"
  },
  {
    id: 5,
    title: "Healing Through The Arts: Music In Hospitals",
    image: "https://admaf.org/wp-content/uploads/2025/12/IMG_4598-scaled.jpg",
    link: "/educational-programs/initiatives"
  },
]

export default function EducationPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Education and Community"
        subtitle="Programs & Initiatives"
        description="Nurturing the artistic potential of youth and fostering creativity in the UAE. Supporting the next generation of cultural leaders, the Foundation makes possibilities accessible for all with a diverse range of programmes that embrace creativity at the heart of the nation for wellbeing, development and cultural excellence."
        image="/modern-art-gallery-with-minimalist-middle-eastern-.jpg"
      />

      {/* Gallery of Initiatives Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="relative">
              <h2 className="text-5xl font-display text-admaf-black mb-4">Gallery Of Initiatives</h2>
              <OrnamentalDivider className="w-64 h-6 opacity-50" />
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll('left')}
                className="rounded-full hover:bg-admaf-red hover:text-white hover:border-admaf-red transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll('right')}
                className="rounded-full hover:bg-admaf-red hover:text-white hover:border-admaf-red transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Scrollable Gallery */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {initiativesData.map((initiative, index) => (
              <div key={initiative.id} className="min-w-[300px] md:min-w-[400px] snap-center">
                <InitiativeCard initiative={initiative} index={index} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/educational-programs/initiatives">
              <Button variant="link" className="text-admaf-red uppercase tracking-widest text-xs font-bold hover:text-admaf-black">
                View More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards & Residencies Section - Dark Theme like Awards component */}
      <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
          <IslamicStarPattern className="absolute -top-40 -left-40 w-[600px] h-[600px] text-white" />
          <IslamicStarPattern className="absolute -bottom-40 -right-40 w-[600px] h-[600px] text-white" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <span className="text-admaf-gold tracking-widest uppercase text-sm font-bold">Recognize Excellence</span>
                <div className="h-px w-12 bg-admaf-gold" />
              </div>

              <h2 className="text-5xl lg:text-6xl font-display leading-tight">
                Awards & Residencies
              </h2>

              <DecorativeDivider className="w-32 h-8 text-admaf-red mb-8 opacity-60" />

              <p className="text-lg text-white/80 font-light leading-relaxed max-w-lg">
                Recognising talent and investing in the future of young creatives across all art fields. ADMAF provides <span className="text-admaf-gold italic">financial support, acclaim, exposure</span> and unprecedented development opportunities.
              </p>

              <p className="text-white/60 font-light leading-relaxed max-w-lg">
                Supporting diverse projects is a commitment to cultural and artistic expression today and in the future.
              </p>

              <div className="pt-6 flex gap-4">
                <Link href="/educational-programs/awards">
                  <Button className="bg-admaf-red text-white hover:bg-admaf-gold hover:text-admaf-black transition-colors duration-300 rounded-none px-8 h-12 text-xs font-bold uppercase tracking-widest">
                    Awards & Residencies <ArrowRight className="ml-3 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <div className="relative w-full h-full border border-white/10 p-4">
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-admaf-gold -mt-2 -mr-2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-admaf-gold -mb-2 -ml-2" />

                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="https://admaf.org/wp-content/uploads/2025/12/DolceGabbana-x-ADMAF-Design-Awards.jpg"
                    alt="Awards & Residencies"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="bg-admaf-red text-white text-xs font-bold uppercase tracking-widest px-3 py-1 inline-block mb-4">
                      Applications Open
                    </div>
                    <h3 className="text-2xl font-display text-white mb-2">Discover Our Awards</h3>
                    <p className="text-white/80 text-sm">Celebrating excellence in arts and culture</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grants Section - REDESIGNED */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-admaf-black mb-4">
              Grants
            </h2>
            <DecorativeDivider className="w-32 h-6 mx-auto text-admaf-red opacity-40 mb-6" />
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              Financial support for UAE-based practitioners in the culture and creative industries to support mentoring, residencies, training, and creative endeavours.
            </p>
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
                      <IslamicStarPattern className="w-full h-full text-admaf-black" />
                    </div>

                    {/* Start Date Badge */}
                    <div className="absolute top-0 right-0 bg-admaf-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 z-10 transition-transform duration-300 group-hover:translate-x-full">
                      Deadline: {grant.dates[1].value.includes('-') ? grant.dates[1].value.split('-')[1] : 'Ongoing'}
                    </div>

                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden">
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

          {/* View More Link */}
          <div className="flex justify-center mt-16">
            <Link href="/educational-programs/grants">
              <Button
                variant="outline"
                className="border-admaf-red text-admaf-red hover:bg-admaf-red hover:text-white rounded-none px-10 h-14 uppercase tracking-widest text-xs font-bold transition-all"
              >
                View All Grant Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-admaf-red tracking-widest uppercase text-sm font-bold mb-4 block">Explore Our Programs</span>
            <h2 className="text-4xl md:text-5xl font-display text-admaf-black mb-4">
              Featured Initiatives
            </h2>
            <DecorativeDivider className="w-32 h-6 mx-auto text-admaf-red opacity-40" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 bg-white border border-gray-100 shadow-sm">
            {[
              {
                title: 'Riwaq Al Adab',
                desc: 'Cultivating literary talent and publishing new Arabic works.',
                link: '/educational-programs/initiatives'
              },
              {
                title: 'Portrait of a Nation',
                desc: 'Visual arts exhibition celebrating UAE creativity.',
                link: '/educational-programs/initiatives'
              },
              {
                title: 'Young Media Leaders',
                desc: 'Training the next generation of cultural journalists.',
                link: '/educational-programs/initiatives'
              }
            ].map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-100 last:border-r-0 hover:bg-admaf-red hover:text-white transition-colors duration-500 cursor-pointer flex flex-col justify-between min-h-[400px]"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-40 mb-6 block group-hover:text-white group-hover:opacity-60">Initiative 0{i + 1}</span>
                  <h3 className="text-3xl md:text-4xl font-display mb-6 group-hover:text-white transition-colors">{prog.title}</h3>
                  <p className="opacity-60 leading-relaxed font-light text-lg">
                    {prog.desc}
                  </p>
                </div>
                <div className="pt-8 mt-auto">
                  <Link href={prog.link}>
                    <Button variant="link" className="text-admaf-red p-0 group-hover:text-white h-auto font-bold uppercase tracking-widest text-xs hover:no-underline">
                      Learn More &rarr;
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}

// Initiative Card Component - Matching Activities Card Style
function InitiativeCard({ initiative, index }: { initiative: typeof initiativesData[0], index: number }) {
  return (
    <motion.div
      className="group relative h-[500px] bg-gray-100 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={initiative.link}>
        <Image
          src={initiative.image}
          alt={initiative.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-display mb-3 leading-tight">{initiative.title}</h3>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
            Learn More <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
