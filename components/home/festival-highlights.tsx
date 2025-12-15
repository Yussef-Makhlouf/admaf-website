"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { IslamicStarPattern, ComplexGeometricPattern } from "@/components/islamic-patterns"
import { Button } from "@/components/ui/button"

export function FestivalHighlights() {
    return (
        <section className="py-32 bg-admaf-gray relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] text-gray-200 pointer-events-none opacity-50">
                <ComplexGeometricPattern className="w-full h-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl font-display text-admaf-charcoal mb-6">Curated Experiences</h2>
                        <div className="w-24 h-1 bg-admaf-red mx-auto" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Card 1 - Daf (Rhythm) */}
                    <HighlightCard
                        title="Rhythm of the Gulf"
                        subtitle="Traditional Performance"
                        image="/traditional-daf-frame-drum-instrument-artistic-pho.jpg"
                        delay={0.1}
                    />

                    {/* Card 2 - Qanun (Melody) */}
                    <HighlightCard
                        title="Strings of Heritage"
                        subtitle="Classical Mastery"
                        image="/qanun-zither-instrument-elegant-classical-photogra.jpg"
                        active
                        delay={0.2}
                    />

                    {/* Card 3 - Ney (Soul) */}
                    <HighlightCard
                        title="Breath of the Soul"
                        subtitle="Sufi Traditions"
                        image="/traditional-ney-flute-instrument-artistic-dark-bac.jpg"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    )
}

function HighlightCard({ title, subtitle, image, active, delay }: { title: string, subtitle: string, image: string, active?: boolean, delay: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // Parallax effect for image
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

    return (
        <motion.div
            ref={ref}
            className={`group relative h-[700px] overflow-hidden cursor-pointer ${active ? 'lg:-mt-12 lg:mb-12 shadow-2xl z-10 border-4 border-white' : 'border border-gray-200'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
        >
            {/* Image Container with Parallax */}
            <motion.div
                className="absolute inset-0 h-[120%] w-full bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${image}')`, y }}
            >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-admaf-red/90 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90`} />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                <IslamicStarPattern className="w-full h-full text-white" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <div className="h-px w-8 bg-admaf-gold" />
                        <span className="text-admaf-gold text-xs font-bold tracking-widest uppercase">{subtitle}</span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-display leading-tight mb-6">{title}</h3>

                    <Button
                        variant="ghost"
                        className="text-white border border-white/30 hover:bg-white hover:text-admaf-red rounded-none w-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0"
                    >
                        Explore Experience
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
