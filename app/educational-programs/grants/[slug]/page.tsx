"use client"

import { use } from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { grantsData } from "@/lib/grants-data"
import { Phone, Mail } from "lucide-react"
import { PageHero } from "@/components/section/page-hero"
import { IslamicStarPattern, MashrabiyaPattern } from "@/components/islamic-patterns"

export default function GrantDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    // Unwrap params
    const resolvedParams = use(params)
    // Find the grant based on slug
    const grant = grantsData.find((g) => g.slug === resolvedParams.slug)

    if (!grant) {
        return notFound()
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Dynamic Hero Section - Custom layout matching image */}
            <section className="relative pt-32 pb-20 bg-white overflow-hidden">
                <MashrabiyaPattern className="absolute top-0 right-0 w-[500px] h-[500px] text-admaf-red opacity-[0.03] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Image Side */}
                        <div className="relative h-[400px] w-full rounded-sm overflow-hidden shadow-xl">
                            <Image
                                src={grant.image}
                                alt={grant.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-display text-admaf-black leading-tight">
                                {grant.title}
                            </h1>
                            <div className="w-20 h-1 bg-admaf-red/20 mb-6" />
                            <p className="text-gray-600 leading-relaxed text-lg font-light">
                                {grant.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grant Amount & Dates Section */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Amount */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-display text-admaf-black">Grant amount</h3>
                            <div className="text-4xl md:text-5xl font-bold text-admaf-red font-display">
                                {grant.amount}
                            </div>
                            <p className="text-gray-500 text-sm">
                                Grants generally range from 5,000 to {grant.amount.replace(/\D/g, '')} AED
                            </p>
                        </div>

                        {/* Dates */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-display text-admaf-black">Important Dates & Deadlines</h3>
                            <div className="space-y-3">
                                {grant.dates.map((date, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 text-lg">
                                        <span className="font-bold text-gray-800 text-sm uppercase tracking-wider min-w-[140px]">
                                            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1} {date.label}:
                                        </span>
                                        <span className="text-admaf-red font-medium">{date.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guidelines Accordion */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-display text-center mb-16 text-admaf-black">
                        Programme Guidelines
                    </h2>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {grant.guidelines.map((item, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-200">
                                <AccordionTrigger className="text-xl font-bold text-admaf-black hover:text-admaf-red transition-colors py-6">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-6 text-lg font-light">
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-display mb-10 text-admaf-black">Contact & information</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        <div className="font-bold text-admaf-black text-lg">
                            Education and Community department
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 hover:text-admaf-red transition-colors">
                            <Mail className="w-5 h-5" />
                            <a href="mailto:education@admaf.org">education@admaf.org</a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 hover:text-admaf-red transition-colors">
                            <Phone className="w-5 h-5" />
                            <a href="tel:+97123336400">+971 2 333 6400</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Previous Winner */}
            {grant.winners && grant.winners.length > 0 && (
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-display text-center mb-12 text-admaf-black">Previous winner</h2>

                        <div className="flex justify-center gap-6 flex-wrap">
                            {grant.winners.map((winner, idx) => (
                                <div key={idx} className="w-64 h-64 relative overflow-hidden rounded-lg shadow-lg group">
                                    <Image
                                        src={winner.image || "/placeholder.svg"}
                                        alt={winner.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
