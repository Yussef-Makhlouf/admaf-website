import type React from "react"

export const MashrabiyaPattern = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
    >
        <path
            d="M50 0L100 50L50 100L0 50L50 0Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
        />
        <path
            d="M50 10L90 50L50 90L10 50L50 10Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
        />
        <path
            d="M50 20L80 50L50 80L20 50L50 20Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
        />
        <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.2" />
    </svg>
)

export const OudStrings = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
    >
        <path d="M0 20H200" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <path d="M0 35H200" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <path d="M0 50H200" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <path d="M0 65H200" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <path d="M0 80H200" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    </svg>
)

export const GulfWaves = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 100 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
    >
        <path
            d="M0 10 C 20 20, 30 0, 50 10 C 70 20, 80 0, 100 10"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
        />
        <path
            d="M0 15 C 20 25, 30 5, 50 15 C 70 25, 80 5, 100 15"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
        />
    </svg>
)

export const GeometricGrid = ({ className }: { className?: string }) => (
    <svg
        className={className}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
)
