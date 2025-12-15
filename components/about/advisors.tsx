"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DecorativeDivider } from "@/components/islamic-patterns"

const advisors = [
    {
        id: 1,
        name: "Strategic Arts Advisor",
        role: "Cultural Strategy",
        image: "/intimate-literary-event-space-with-arabic-calligra.jpg",
        desc: "Expert guidance on cultural development and artistic programming."
    },
    {
        id: 2,
        name: "Media Advisor",
        role: "Communications",
        image: "/intimate-literary-event-space-with-arabic-calligra.jpg",
        desc: "Leading media strategies to amplify the foundation's voice globally."
    },
    {
        id: 3,
        name: "Legal Advisor",
        role: "Governance",
        image: "/intimate-literary-event-space-with-arabic-calligra.jpg",
        desc: "Ensuring compliance and ethical governance across all initiatives."
    },
    {
        id: 4,
        name: "Education Advisor",
        role: "Academic Partnerships",
        image: "/intimate-literary-event-space-with-arabic-calligra.jpg",
        desc: "Fostering relationships with universities and educational institutions."
    }
]

export function Advisors() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % advisors.length)
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + advisors.length) % advisors.length)
    }

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-display text-admaf-black mb-4">Advisors</h2>
                        <DecorativeDivider className="w-24 h-6 text-admaf-red " />
                    </div>
                    <div className="flex gap-4">
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={prev}
                            className="rounded-full h-12 w-12 border-gray-300 hover:border-admaf-red hover:text-white hover:bg-admaf-red transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={next}
                            className="rounded-full h-12 w-12 border-gray-300 hover:border-admaf-red hover:text-white hover:bg-admaf-red transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        >
                            <div className="relative aspect-square md:aspect-[4/3] w-full max-w-md mx-auto md:mx-0 bg-white p-4 shadow-xl rotate-3">
                                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-500">
                                    <Image
                                        src={advisors[currentIndex].image}
                                        alt={advisors[currentIndex].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <span className="text-admaf-red font-bold uppercase tracking-widest text-sm">
                                    {advisors[currentIndex].role}
                                </span>
                                <h3 className="text-4xl md:text-5xl font-display text-admaf-black">
                                    {advisors[currentIndex].name}
                                </h3>
                                <p className="text-xl text-gray-500 font-light leading-relaxed">
                                    {advisors[currentIndex].desc}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
