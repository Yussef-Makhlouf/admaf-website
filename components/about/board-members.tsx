"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { DecorativeDivider } from "../islamic-patterns"

const boardMembers = [
    {
        name: "H.E. Hoda I. Al Khamis-Kanoo",
        role: "Founder, ADMAF",
        image: "/board.png",
    },
    {
        name: "H.E. Razan Khalifa Al Mubarak",
        role: "Board Member",
        image: "/board.png",
    },
    {
        name: "H.E. Mariam bint Mohammed Almheiri",
        role: "Board Member",
        image: "/board.png",
    },
    {
        name: "H.E. Dr. Mugheer Khamis Al Khaili",
        role: "Board Member",
        image: "/board.png",
    },
    {
        name: "H.E. Saif Saeed Ghobash",
        role: "Board Member",
        image: "/board.png",
    },
    {
        name: "H.E. Homaid Al Shimmari",
        role: "Board Member",
        image: "/board.png",
    }
]

export function BoardMembers() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display text-admaf-black mb-4">Board Members</h2>
                    <DecorativeDivider className="w-32 h-8 text-admaf-red mb-6 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {boardMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden"
                        >
                            <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 mb-4">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                    <p className="text-white text-xs uppercase tracking-widest font-bold">View Profile</p>
                                </div>
                            </div>

                            <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="text-lg font-bold text-admaf-black group-hover:text-admaf-red transition-colors">{member.name}</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
