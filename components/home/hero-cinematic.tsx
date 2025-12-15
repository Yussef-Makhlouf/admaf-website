"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { MashrabiyaPattern, HeroPattern } from "@/components/islamic-patterns"
import { ArabicCalligraphyStroke } from "@/components/ui/calligraphy-strokes"
import { ChevronDown, Play } from "lucide-react"

export function HeroCinematic() {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -100])

    return (
        <section className="relative h-screen w-full overflow-hidden bg-admaf-charcoal text-white flex items-center justify-center">

            {/* Social Media Sidebar */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-6 hidden md:flex">
                <span className="text-white/60 text-xs uppercase tracking-widest writing-vertical-rl rotate-270 font-bold">Social</span>
                <div className="w-px h-12 bg-white/20" />
                <a href="#" className="text-white/60 hover:text-admaf-red transition-colors duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                </a>
                <a href="#" className="text-white/60 hover:text-admaf-red transition-colors duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" className="text-white/60 hover:text-admaf-red transition-colors duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm0 1.953h-.08c-2.527 0-2.833.01-3.793.053-.9.04-1.396.184-1.725.312a2.915 2.915 0 00-1.068.694 2.915 2.915 0 00-.694 1.068c-.128.329-.272.825-.312 1.725-.043.96-.053 1.266-.053 3.793v.08c0 2.527.01 2.833.053 3.793.04.9.184 1.396.312 1.725.228.591.503 1.045 1.068 1.61.564.565 1.018.84 1.61 1.068.329.128.825.272 1.725.312.96.043 1.266.053 3.793.053h.08c2.527 0 2.833-.01 3.793-.053.9-.04 1.396-.184 1.725-.312a2.915 2.915 0 001.068-.694 2.915 2.915 0 00.694-1.068c.128-.329.272-.825.312-1.725.043-.96.053-1.266.053-3.793v-.08c0-2.527-.01-2.833-.053-3.793-.04-.9-.184-1.396-.312-1.725a2.915 2.915 0 00-1.068-1.61 2.915 2.915 0 00-1.61-1.068c-.329-.128-.825-.272-1.725-.312-.96-.043-1.266-.053-3.793-.053zm0 4.195a3.804 3.804 0 110 7.608 3.804 3.804 0 010-7.608zm0 1.953a1.851 1.851 0 100 3.702 1.851 1.851 0 000-3.702zm4.332-4.832a.75.75 0 110 1.5.75.75 0 010-1.5z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-white/60 hover:text-admaf-red transition-colors duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
            </div>

            {/* Cinematic Background Layer */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: y1 }}
            >
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: "url('/elegant-concert-hall-with-warm-lighting-and-arabic.jpg')" }}
                />
                {/* Fallback to image, but code structure ready for <video> tag if asset available */}
            </motion.div>

            {/* Decorative Layers */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-admaf-red opacity-10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                    <HeroPattern className="w-full h-full" />
                </motion.div>
                <MashrabiyaPattern className="absolute top-0 right-0 w-64 h-64 text-white opacity-10" />
                <MashrabiyaPattern className="absolute bottom-0 left-0 w-64 h-64 text-white opacity-10" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="space-y-12"
                    style={{ y: y2 }}
                >
                    {/* Top Label */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center items-center gap-6"
                    >
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-admaf-gold to-transparent" />
                        <span className="text-admaf-gold tracking-[0.4em] font-sans text-xs uppercase font-bold">
                            Est. 1996
                        </span>
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-admaf-gold to-transparent" />
                    </motion.div>

                    {/* Main Title Block */}
                    <div className="relative py-10">
                        <ArabicCalligraphyStroke className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] text-admaf-red opacity-20 pointer-events-none mix-blend-screen" />
                        <h1 className="font-display text-7xl md:text-9xl text-white mb-2 leading-tight drop-shadow-2xl">
                            Abu Dhabi Music & Arts Foundation.
                        </h1>

                    </div>

                    {/* Subtitle */}
                    <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-white/80 leading-relaxed tracking-wide">
                        The Place Where Arts, Culture Creativity And Innovation Connect                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Button
                            className="bg-admaf-red hover:bg-admaf-red/90 text-white min-w-[200px] h-14 text-sm tracking-widest uppercase font-bold rounded-none border border-admaf-red transition-all duration-500 hover:shadow-[0_0_30px_rgba(180,29,56,0.5)]"
                        >
                            Explore Festival
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-transparent border-white/30 text-white hover:bg-white hover:text-admaf-black min-w-[200px] h-14 text-sm tracking-widest uppercase font-bold rounded-none backdrop-blur-sm transition-all duration-500 group"
                        >
                            <Play className="w-4 h-4 mr-2 fill-current" />
                            Watch Showreel
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/60"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-white"
                        animate={{ top: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    )
}
