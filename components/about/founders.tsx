import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { IslamicStarPattern } from "@/components/ui/calligraphy-strokes"

const founders = [
    {
        name: "H.E. Hoda I. Al Khamis-Kanoo",
        role: "Founder of the Abu Dhabi Music & Arts Foundation",
        image: "/placeholder.svg?height=600&width=400",
        quote: "Culture is the soul of a nation, and art is its voice. fostering dialogue and understanding between nations.",
        bio: "Her Excellency Hoda I. Al Khamis-Kanoo founded the Abu Dhabi Music & Arts Foundation (ADMAF) in 1996 and the Abu Dhabi Festival in 2004. A pioneer in the region's cultural sector, she has dedicated her life to nurturing the arts, education, and cross-cultural dialogue."
    }
]

export function Founders() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 text-admaf-red/5 -translate-x-1/2 -translate-y-1/2">
                <IslamicStarPattern className="w-full h-full" />
            </div>

            <div className="container px-4">

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display text-admaf-charcoal mb-4">Leadership</h2>
                    <div className="w-24 h-1 bg-admaf-red mx-auto" />
                </div>

                <div className="max-w-6xl mx-auto">
                    {founders.map((founder, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Image Side */}
                            <div className="relative group">
                                <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative max-w-md mx-auto lg:mx-0">
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Frame */}
                                    <div className="absolute inset-4 border border-white/30 z-10" />
                                </div>
                                {/* Decorative rectangle */}
                                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-admaf-red/20 -z-10 hidden lg:block" />
                            </div>

                            {/* Content Side */}
                            <div className="space-y-8 text-center lg:text-left">
                                <div>
                                    <h3 className="text-3xl font-display text-admaf-charcoal mb-2">{founder.name}</h3>
                                    <p className="text-admaf-red font-bold tracking-widest text-xs uppercase">{founder.role}</p>
                                </div>

                                <blockquote className="text-xl md:text-2xl font-light italic text-gray-600 leading-relaxed border-l-4 border-admaf-gold pl-6 py-2">
                                    "{founder.quote}"
                                </blockquote>

                                <p className="text-gray-500 leading-loose">
                                    {founder.bio}
                                </p>

                                <div className="pt-4">
                                    <Image
                                        src="/placeholder.svg?height=60&width=150"
                                        alt="Signature"
                                        width={150}
                                        height={60}
                                        className="opacity-60 grayscale hover:scale-110 transition-transform lg:mx-0 mx-auto"
                                    />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
