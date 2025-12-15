"use client"

import { Button } from "@/components/ui/button"
import { ArabicCalligraphyStroke } from "@/components/ui/calligraphy-strokes"

export function ArtistSpotlight() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Image Side - Strict Frame */}
                    <div className="w-full lg:w-5/12 relative">
                        <div className="aspect-[3/4] bg-admaf-gray relative z-10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/distinguished-middle-eastern-male-musician-portrai.jpg')" }}
                            />
                            {/* Red Overlay on Idle */}
                            <div className="absolute inset-0 bg-admaf-red/20 mix-blend-multiply opacity-100 hover:opacity-0 transition-opacity duration-500" />
                        </div>
                        {/* Asymmetric Decorator */}
                        <div className="absolute -bottom-12 -left-12 w-full h-full border-2 border-admaf-red opacity-10 -z-0" />
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-7/12 relative">
                        {/* Background Decor */}
                        <ArabicCalligraphyStroke className="absolute -top-20 -right-20 w-[500px] text-admaf-red opacity-5" />

                        <span className="text-admaf-red uppercase tracking-[0.2em] text-sm font-bold block mb-6">
                            Artist in Residence
                        </span>

                        <h2 className="text-6xl md:text-8xl font-display text-admaf-black leading-none mb-10">
                            Naseer <br /> <span className="text-admaf-red">Shamma</span>
                        </h2>

                        <p className="text-xl text-admaf-black/70 font-serif leading-relaxed max-w-xl mb-12 border-l-2 border-admaf-red pl-6">
                            "Music is the language of peace, and the oud is its most eloquent messenger. Through our heritage, we speak to the future."
                        </p>

                        <Button
                            variant="outline"
                            className="border-admaf-black text-admaf-black hover:bg-admaf-black hover:text-white rounded-none px-10 py-6 text-lg transition-colors duration-300"
                        >
                            Read Full Biography
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function VirtualGallery() {
    return (
        <section className="py-32 bg-admaf-red text-white relative">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-5xl font-display mb-6">The Virtual Museum</h2>
                    <p className="text-white/80 text-lg mb-10 max-w-md leading-relaxed">
                        Explore a digital archive of rare instruments, manuscripts, and costumes from the Arab world.
                    </p>
                    <Button className="bg-white text-admaf-red hover:bg-gray-100 rounded-none px-8 py-6 text-lg font-medium">
                        Enter Gallery
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-black/20 relative group overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-[url('/modern-art-gallery-with-minimalist-middle-eastern-.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-admaf-red/80 transition-all duration-300">
                            <span className="font-display text-2xl">Instruments</span>
                        </div>
                    </div>
                    <div className="aspect-square bg-black/20 relative group overflow-hidden cursor-pointer mt-12">
                        <div className="absolute inset-0 bg-[url('/intimate-literary-event-space-with-arabic-calligra.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-admaf-red/80 transition-all duration-300">
                            <span className="font-display text-2xl">Spaces</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
