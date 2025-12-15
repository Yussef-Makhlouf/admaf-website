"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

const events = [
    {
        id: 1,
        title: "Symphony of the Sands",
        date: "Dec 15, 2025",
        location: "Emirates Palace",
        type: "Orchestra"
    },
    {
        id: 2,
        title: "Calligraphy in Motion",
        date: "Dec 18, 2025",
        location: "Louvre Abu Dhabi",
        type: "Exhibition"
    },
    {
        id: 3,
        title: "The Legacy of Ziryab",
        date: "Dec 22, 2025",
        location: "Cultural Foundation",
        type: "Music"
    },
    {
        id: 4,
        title: "Voices of Tolerance",
        date: "Jan 05, 2026",
        location: "Manarat Al Saadiyat",
        type: "Opera"
    }
]

export function FestivalTimeline() {
    return (
        <section className="py-32 bg-white relative">
            <div className="container mx-auto px-4">
                {/* Header - Asymmetric */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 border-b border-admaf-red/20 pb-8">
                    <div className="max-w-xl">
                        <span className="text-admaf-red font-bold text-sm tracking-widest uppercase mb-4 block">Program 2025/26</span>
                        <h2 className="text-5xl md:text-6xl font-display text-admaf-black leading-tight">
                            Festival Calendar
                        </h2>
                    </div>
                    <Button variant="ghost" className="text-admaf-red hover:bg-admaf-red hover:text-white rounded-none border border-admaf-red px-8 h-12 mt-8 lg:mt-0 transition-all">
                        View All Events
                    </Button>
                </div>

                {/* Timeline Grid - Strict & Clean */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-admaf-red/10">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group border-r border-b border-t border-admaf-red/10 p-10 hover:bg-admaf-red hover:text-white transition-colors duration-500 relative cursor-pointer min-h-[300px] flex flex-col justify-between"
                        >
                            <div>
                                <span className="text-xs font-bold tracking-widest uppercase opacity-50 mb-6 block group-hover:text-white transition-colors">
                                    {event.type}
                                </span>
                                <h3 className="text-3xl font-display mb-4 leading-snug">
                                    {event.title}
                                </h3>
                            </div>

                            <div className="space-y-4 opacity-60 group-hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-3 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <MapPin className="w-4 h-4" />
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            {/* Hover Line Animation */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-500 group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { Button } from "@/components/ui/button"
