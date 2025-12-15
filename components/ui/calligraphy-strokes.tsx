"use client"

import { motion } from "framer-motion"

export const ArabicCalligraphyStroke = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
    >
        <motion.path
            d="M10,50 Q50,0 100,50 T190,50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
            d="M20,60 Q60,10 110,60 T180,40"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ delay: 0.5, duration: 3, ease: "easeInOut" }}
        />
    </svg>
)

export const IslamicStarPattern = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L61 35H98L68 57L79 91L50 70L21 91L32 57L2 35H39L50 0Z" fill="currentColor" opacity="0.1" />
    </svg>
)
