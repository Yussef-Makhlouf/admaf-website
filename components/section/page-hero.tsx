"use client"

import { MashrabiyaPattern, DecorativeDivider } from "@/components/islamic-patterns"

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description: string;
    image?: string; // Optional background image URL
}

export function PageHero({ title, subtitle, description, image }: PageHeroProps) {
    return (
        <section className="relative pt-32 pb-24 bg-admaf-red text-white overflow-hidden">
            {/* Optional Background Image */}
            {image && (
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply"
                    style={{ backgroundImage: `url('${image}')` }}
                />
            )}

            {/* Pattern Overlay */}
            <MashrabiyaPattern className="absolute  top-0 right-0 w-[600px] h-[600px] text-white opacity-5 translate-x-1/3 -translate-y-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                {subtitle && (
                    <span className="block text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-80 pl-1">
                        {subtitle}
                    </span>
                )}

                <h1 className="text-5xl md:text-7xl font-display mb-6 leading-tight">
                    {title}
                </h1>

                <DecorativeDivider className="w-48 h-8 text-white  opacity-40 mb-8" />

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <p className="max-w-xl text-lg md:text-xl font-light leading-relaxed opacity-90 border-l border-white/30 pl-6">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}
