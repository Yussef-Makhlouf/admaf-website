"use client"

import { Button } from "@/components/ui/button"
import { DecorativeDivider, ArabesqueCorner } from "@/components/islamic-patterns"

interface RichContentBlockProps {
    title: string;
    subtitle?: string;
    content: string;
    image: string;
    imagePosition?: 'left' | 'right';
    buttonText?: string;
    onButtonClick?: () => void;
}

export function RichContentBlock({
    title,
    subtitle,
    content,
    image,
    imagePosition = 'left',
    buttonText,
    onButtonClick
}: RichContentBlockProps) {
    return (
        <section className="py-24 container mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
                }`}>
                {/* Image Side */}
                <div className={`relative ${imagePosition === 'right' ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] bg-gray-100 relative group overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                            style={{ backgroundImage: `url('${image}')` }}
                        />
                        {/* Strict Overlay */}
                        <div className="absolute inset-0 bg-admaf-red/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                    </div>
                    {/* Corner Ornament */}
                    <div className={`absolute -bottom-10 -left-10 w-40 h-40 text-admaf-red opacity-20 pointer-events-none ${imagePosition === 'right' ? 'rotate-180' : ''
                        }`}>
                        <ArabesqueCorner className="w-full h-full" />
                    </div>
                    {/* Border Decor */}
                    <div className={`absolute top-4 ${imagePosition === 'right' ? '-right-4' : '-left-4'} w-full h-full border border-admaf-red/30 -z-10`} />
                </div>

                {/* Content Side */}
                <div className={`${imagePosition === 'right' ? 'lg:order-1' : ''}`}>
                    {subtitle && (
                        <span className="text-admaf-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                            {subtitle}
                        </span>
                    )}

                    <h2 className="text-4xl md:text-5xl font-display text-admaf-black mb-6 leading-tight">
                        {title}
                    </h2>

                    <DecorativeDivider className="w-32 h-8 text-admaf-red mb-8 opacity-60" />

                    <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                        {content}
                    </p>

                    {buttonText && (
                        <Button
                            onClick={onButtonClick}
                            className="bg-white text-admaf-red border border-admaf-red hover:bg-admaf-red hover:text-white rounded-none px-8 h-12 text-sm uppercase tracking-widest transition-all duration-300"
                        >
                            {buttonText}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    )
}
