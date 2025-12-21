"use client"

export function IslamicPatternSVG({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="islamicPattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                    {/* 8-pointed star pattern */}
                    <g stroke="#b41d38" strokeWidth="0.3" opacity="0.2">
                        <polygon points="12.5,2 14,10 22,10 16,14 18,22 12.5,17 7,22 9,14 3,10 11,10" fill="none" />
                        <circle cx="12.5" cy="12.5" r="8" fill="none" />
                        <line x1="12.5" y1="0" x2="12.5" y2="25" />
                        <line x1="0" y1="12.5" x2="25" y2="12.5" />
                    </g>
                </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#islamicPattern)" />
        </svg>
    )
}

export function GeometricBorder({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 400 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <defs>
                <pattern id="borderPattern" x="0" y="0" width="50" height="24" patternUnits="userSpaceOnUse">
                    <g stroke="#b41d38" strokeWidth="1.5">
                        <path d="M0,12 L12.5,4 L25,12 L37.5,4 L50,12" fill="none" />
                        <circle cx="12.5" cy="4" r="2" fill="#b41d38" />
                        <circle cx="37.5" cy="4" r="2" fill="#b41d38" />
                        <circle cx="25" cy="12" r="2.5" fill="#b41d38" />
                    </g>
                </pattern>
            </defs>
            <rect width="400" height="24" fill="url(#borderPattern)" />
        </svg>
    )
}

export function MashrabiyaPattern({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="mashrabiya" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <g stroke="#b41d38" strokeWidth="0.4" opacity="0.15">
                        {/* Hexagonal mashrabiya pattern */}
                        <polygon points="10,2 17,6 17,14 10,18 3,14 3,6" fill="none" />
                        <polygon points="10,6 13,8 13,12 10,14 7,12 7,8" fill="none" />
                        <circle cx="10" cy="10" r="2" fill="none" />
                        <line x1="10" y1="2" x2="10" y2="6" />
                        <line x1="17" y1="6" x2="13" y2="8" />
                        <line x1="17" y1="14" x2="13" y2="12" />
                        <line x1="10" y1="18" x2="10" y2="14" />
                        <line x1="3" y1="14" x2="7" y2="12" />
                        <line x1="3" y1="6" x2="7" y2="8" />
                    </g>
                </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#mashrabiya)" />
        </svg>
    )
}

export function OudStrings({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="stringGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#b41d38" stopOpacity="0" />
                    <stop offset="50%" stopColor="#b41d38" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#b41d38" stopOpacity="0" />
                </linearGradient>
            </defs>
            <g stroke="url(#stringGradient)" strokeWidth="1">
                <path d="M20,0 Q40,150 20,300" className="animate-draw-line" />
                <path d="M40,0 Q60,150 40,300" className="animate-draw-line" style={{ animationDelay: "0.15s" }} />
                <path d="M60,0 Q80,150 60,300" className="animate-draw-line" style={{ animationDelay: "0.3s" }} />
                <path d="M80,0 Q100,150 80,300" className="animate-draw-line" style={{ animationDelay: "0.45s" }} />
                <path d="M100,0 Q120,150 100,300" className="animate-draw-line" style={{ animationDelay: "0.6s" }} />
            </g>
        </svg>
    )
}

export function CalligraphyStroke({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="calligraphyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b41d38" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#b41d38" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#b41d38" stopOpacity="0.1" />
                </linearGradient>
            </defs>
            <path
                d="M0,40 Q50,10 100,40 T200,40 T300,30 T400,50"
                stroke="url(#calligraphyGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                className="animate-draw-line"
            />
            <path
                d="M20,50 Q80,70 140,50 T260,60 T380,40"
                stroke="url(#calligraphyGradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="animate-draw-line"
                style={{ animationDelay: "0.3s" }}
            />
        </svg>
    )
}

export function StarPattern({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="starPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <g stroke="#b41d38" strokeWidth="0.5" opacity="0.2">
                        {/* 6-pointed star */}
                        <polygon points="25,5 30,20 45,20 33,30 38,45 25,35 12,45 17,30 5,20 20,20" fill="none" />
                        {/* Inner decoration */}
                        <circle cx="25" cy="25" r="6" fill="none" />
                        <circle cx="25" cy="25" r="3" fill="#b41d38" opacity="0.3" />
                    </g>
                </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#starPattern)" />
        </svg>
    )
}
export { StarPattern as IslamicStarPattern }

export function ArabesqueCorner({ className = "", rotate = 0 }: { className?: string; rotate?: number }) {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <g stroke="#b41d38" strokeWidth="1" opacity="0.3">
                <path d="M5,5 Q30,5 40,20 T60,50" fill="none" />
                <path d="M5,5 Q5,30 20,40 T50,60" fill="none" />
                <path d="M15,5 Q35,5 45,25" fill="none" />
                <path d="M5,15 Q5,35 25,45" fill="none" />
                <circle cx="20" cy="20" r="8" fill="none" />
                <circle cx="35" cy="35" r="5" fill="none" />
                <circle cx="50" cy="50" r="3" fill="#b41d38" opacity="0.4" />
            </g>
        </svg>
    )
}

export function DecorativeDivider({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#b41d38" strokeWidth="1">
                <line x1="0" y1="20" x2="120" y2="20" opacity="0.3" />
                <line x1="180" y1="20" x2="300" y2="20" opacity="0.3" />
                {/* Center diamond */}
                <polygon points="150,5 165,20 150,35 135,20" fill="none" strokeWidth="1.5" />
                <polygon points="150,10 160,20 150,30 140,20" fill="#b41d38" opacity="0.2" />
                <circle cx="150" cy="20" r="4" fill="#b41d38" />
                {/* Side dots */}
                <circle cx="120" cy="20" r="3" fill="#b41d38" />
                <circle cx="180" cy="20" r="3" fill="#b41d38" />
            </g>
        </svg>
    )
}

export function HeroPattern({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="heroGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#b41d38" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#b41d38" stopOpacity="0" />
                </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="95" fill="url(#heroGradient)" />
            <g stroke="#b41d38" strokeWidth="0.5" opacity="0.2">
                {/* Outer ring */}
                <circle cx="100" cy="100" r="90" fill="none" />
                <circle cx="100" cy="100" r="75" fill="none" />
                <circle cx="100" cy="100" r="60" fill="none" />
                <circle cx="100" cy="100" r="45" fill="none" />
                {/* 12-pointed star */}
                {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180
                    const x1 = (100 + 90 * Math.cos(angle)).toFixed(2)
                    const y1 = (100 + 90 * Math.sin(angle)).toFixed(2)
                    return <line key={i} x1={x1} y1={y1} x2="100" y2="100" />
                })}
                {/* Center decoration */}
                <polygon points="100,70 115,95 115,105 100,130 85,105 85,95" fill="none" strokeWidth="1" />
            </g>
        </svg>
    )
}

export function ComplexGeometricPattern({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="complexGeo" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <g stroke="#b41d38" strokeWidth="0.5" opacity="0.15">
                        <path d="M25,0 L50,25 L25,50 L0,25 Z" fill="none" />
                        <path d="M25,10 L40,25 L25,40 L10,25 Z" fill="none" />
                        <circle cx="25" cy="25" r="5" fill="#b41d38" opacity="0.2" />
                        <line x1="0" y1="0" x2="50" y2="50" />
                        <line x1="50" y1="0" x2="0" y2="50" />
                    </g>
                </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#complexGeo)" />
        </svg>
    )
}

export function GoldenRatioSpiral({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M50,50 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0"
                stroke="#b41d38"
                strokeWidth="0.5"
                opacity="0.1"
            />
            <path
                d="M50,50 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0"
                stroke="#b41d38"
                strokeWidth="0.5"
                opacity="0.15"
            />
        </svg>
    )
}

export function OrnamentalDivider({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 400 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,15 L180,15" stroke="#b41d38" strokeWidth="1" strokeOpacity="0.3" />
            <path d="M220,15 L400,15" stroke="#b41d38" strokeWidth="1" strokeOpacity="0.3" />
            <rect x="195" y="10" width="10" height="10" transform="rotate(45 200 15)" fill="#b41d38" />
            <circle cx="185" cy="15" r="2" fill="#b41d38" />
            <circle cx="215" cy="15" r="2" fill="#b41d38" />
        </svg>
    )
}
