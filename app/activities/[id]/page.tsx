"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Share2, ArrowRight, ArrowLeft, Users, Ticket, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { activitiesData, getActivityById, getRelatedActivities, Activity } from "../data"

// Decorative geometric pattern component
const GeometricPattern = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <pattern id="arabesque" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M10 0L20 10L10 20L0 10Z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.2" />
    </pattern>
    <rect width="100" height="100" fill="url(#arabesque)" />
  </svg>
)

export default function ActivityPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const activity = getActivityById(parseInt(id))

  if (!activity) {
    notFound()
  }

  const relatedActivities = getRelatedActivities(activity)

  return (
    <div className="min-h-screen bg-white">
      {/* Elegant Hero Header */}
      <section className="relative min-h-[100svh] md:min-h-[85vh] bg-admaf-charcoal overflow-hidden">
        {/* Background Image with Enhanced Overlay Layers */}
        <div className="absolute inset-0">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover scale-105"
            priority
          />
          {/* Layer 1: Dark base overlay */}
          <div className="absolute inset-0 bg-admaf-red/60" />
          {/* Layer 2: Gradient from left (stronger on desktop) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#36454F] via-[#36454F]/80 to-[#36454F]/30 md:via-[#36454F]/70 md:to-transparent" />
          {/* Layer 3: Gradient from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#36454F] via-[#36454F]/50 to-transparent" />
          {/* Layer 4: Subtle vignette effect */}
          <div className="absolute inset-0 bg-radial-gradient opacity-40" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(25,25,25,0.8) 100%)' }} />
          {/* Layer 5: Color tint */}
          <div className="absolute inset-0 bg-admaf-red/5 mix-blend-overlay" />
        </div>

        {/* Decorative Elements - Hidden on small mobile */}
        <div className="absolute top-20 right-10 w-40 md:w-64 h-40 md:h-64 opacity-10 hidden sm:block">
          <GeometricPattern className="w-full h-full text-admaf-gold" />
        </div>
        <div className="absolute bottom-20 left-10 w-32 md:w-48 h-32 md:h-48 opacity-5 hidden md:block">
          <GeometricPattern className="w-full h-full text-white" />
        </div>

        {/* Decorative Lines - Hidden on mobile */}
        <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-admaf-gold/50 to-transparent hidden md:block" />
        <div className="absolute top-0 left-1/3 w-px h-24 bg-gradient-to-b from-admaf-red/30 to-transparent hidden md:block" />

        {/* Main Content Container */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 min-h-[100svh] md:min-h-[85vh] flex flex-col justify-end pb-24 md:pb-20 pt-28 md:pt-32">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 md:gap-3 text-white/50 text-xs md:text-sm mb-6 md:mb-8 flex-wrap"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-admaf-gold" />
            <Link href="/activities" className="hover:text-white transition-colors">Activities</Link>
            <span className="w-1 h-1 rounded-full bg-admaf-gold" />
            <span className="text-admaf-gold">{activity.categoryLabel}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            {/* Title & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Category Badge with Icon */}
              <div className="inline-flex items-center gap-2 bg-admaf-red/90 backdrop-blur-sm text-white text-[10px] md:text-xs uppercase font-bold px-3 md:px-4 py-1.5 md:py-2 tracking-wider mb-4 md:mb-6">
                <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-white animate-pulse" />
                {activity.categoryLabel}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white mb-3 md:mb-4 leading-[1.15]">
                {activity.title}
              </h1>

              {activity.subtitle && (
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-4 md:mb-6 italic">
                  {activity.subtitle}
                </p>
              )}

              {/* Quick Info Pills - Mobile Visible */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-6 lg:hidden">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-white text-xs">
                  <Calendar className="w-3 h-3 text-admaf-gold" />
                  <span className="truncate max-w-[120px]">{activity.date}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-white text-xs">
                  <MapPin className="w-3 h-3 text-admaf-gold" />
                  <span className="truncate max-w-[120px]">{activity.venue || activity.location}</span>
                </div>
                {activity.time && (
                  <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-white text-xs">
                    <Clock className="w-3 h-3 text-admaf-gold" />
                    {activity.time}
                  </div>
                )}
              </div>

              {/* Status Badge - Mobile Only */}
              <div className="lg:hidden mb-4">
                <div className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${activity.status === "Upcoming"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : activity.status === "Registration Open"
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                  }`}>
                  {activity.status}
                </div>
              </div>
            </motion.div>

            {/* Status Card - Floating (Desktop Only) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 relative">
                {/* Decorative corner */}
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-admaf-gold" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-admaf-gold" />

                <div className="text-center">
                  <div className={`inline-block px-6 py-2 mb-4 text-sm font-bold uppercase tracking-widest ${activity.status === "Upcoming"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : activity.status === "Registration Open"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                    }`}>
                    {activity.status}
                  </div>
                  <div className="text-white/50 text-xs uppercase tracking-widest mb-2">Event Date</div>
                  <div className="text-4xl font-display text-white mb-1">
                    {activity.date.split('-')[0]}
                  </div>
                  <div className="text-admaf-gold font-light">
                    {activity.date.split('-').slice(1).join(' ')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Elegant Event Details Bar */}
      <section className="relative bg-white py-0 -mt-1">
        <div className="container mx-auto px-4">
          <div className="relative bg-admaf-cream border border-gray-100 shadow-xl -mt-8 z-20">
            {/* Decorative top line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-admaf-red" />

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 flex items-center gap-5 group hover:bg-white transition-colors"
              >
                <div className="w-14 h-14 bg-admaf-red/10 flex items-center justify-center group-hover:bg-admaf-red transition-colors">
                  <MapPin className="w-6 h-6 text-admaf-red group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block mb-1">Location</span>
                  <span className="text-[#36454F] font-display text-lg">{activity.venue || activity.location}</span>
                </div>
              </motion.div>

              {/* Date */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 flex items-center gap-5 group hover:bg-white transition-colors"
              >
                <div className="w-14 h-14 bg-admaf-red/10 flex items-center justify-center group-hover:bg-admaf-red transition-colors">
                  <Calendar className="w-6 h-6 text-admaf-red group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block mb-1">Date</span>
                  <span className="text-[#36454F] font-display text-lg">
                    {activity.date}
                    {activity.endDate && <span className="text-gray-400"> — {activity.endDate}</span>}
                  </span>
                </div>
              </motion.div>

              {/* Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 flex items-center gap-5 group hover:bg-white transition-colors"
              >
                <div className="w-14 h-14 bg-admaf-red/10 flex items-center justify-center group-hover:bg-admaf-red transition-colors">
                  <Clock className="w-6 h-6 text-admaf-red group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block mb-1">Time</span>
                  <span className="text-[#36454F] font-display text-lg">{activity.time || "To Be Announced"}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* About Section */}
              {activity.fullDescription && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Section decoration */}
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-gradient-to-b from-admaf-red to-transparent hidden lg:block" />

                  <h2 className="text-3xl font-display text-admaf-charcoal mb-6 flex items-center gap-4">
                    About This Event
                    <span className="flex-1 h-px bg-gradient-to-r from-admaf-red/20 to-transparent" />
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {activity.fullDescription}
                  </p>
                </motion.div>
              )}

              {/* Programme Section */}
              {activity.programme && activity.programme.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-gradient-to-b from-admaf-gold to-transparent hidden lg:block" />

                  <h2 className="text-3xl font-display text-admaf-charcoal mb-8 flex items-center gap-4">
                    Programme
                    <span className="flex-1 h-px bg-gradient-to-r from-admaf-gold/20 to-transparent" />
                  </h2>

                  <div className="space-y-8">
                    {activity.programme.map((part, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-admaf-cream/50 border border-gray-100 p-8 relative overflow-hidden group hover:shadow-lg transition-shadow"
                      >
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-admaf-red/5 transform rotate-45 translate-x-12 -translate-y-12 group-hover:bg-admaf-red/10 transition-colors" />

                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-16 h-16 bg-admaf-red flex items-center justify-center">
                            <span className="text-white font-display text-xl">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-baseline gap-3 mb-3">
                              <span className="text-admaf-red font-bold text-sm uppercase tracking-widest">
                                {part.part}
                              </span>
                              {part.title && (
                                <span className="text-admaf-charcoal font-display text-xl">
                                  {part.title}
                                </span>
                              )}
                            </div>
                            {part.composer && (
                              <p className="text-admaf-gold italic mb-4">{part.composer}</p>
                            )}
                            <ol className="space-y-2">
                              {part.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3 text-gray-600 text-sm">
                                  <span className="text-admaf-red/50 font-mono text-xs mt-1">
                                    {String(itemIndex + 1).padStart(2, '0')}
                                  </span>
                                  {item}
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Artists Section */}
              {activity.artists && activity.artists.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-gradient-to-b from-admaf-red to-transparent hidden lg:block" />

                  <h2 className="text-3xl font-display text-admaf-charcoal mb-8 flex items-center gap-4">
                    Featured Artists
                    <span className="flex-1 h-px bg-gradient-to-r from-admaf-red/20 to-transparent" />
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activity.artists.map((artist, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative bg-white border border-gray-100 p-6 hover:border-admaf-red/30 hover:shadow-lg transition-all duration-300"
                      >
                        {/* Hover accent */}
                        <div className="absolute left-0 top-0 w-1 h-0 bg-admaf-red group-hover:h-full transition-all duration-300" />

                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-admaf-red to-admaf-gold rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                            <span className="text-white font-display text-xl">
                              {artist.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-display text-admaf-charcoal text-lg group-hover:text-admaf-red transition-colors">
                              {artist.name}
                            </h4>
                            <span className="text-sm text-admaf-gold">{artist.role}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Gallery */}
              {activity.gallery && activity.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-gradient-to-b from-admaf-gold to-transparent hidden lg:block" />

                  <h2 className="text-3xl font-display text-admaf-charcoal mb-8 flex items-center gap-4">
                    Gallery
                    <span className="flex-1 h-px bg-gradient-to-r from-admaf-gold/20 to-transparent" />
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    {activity.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative h-56 overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={image}
                          alt={`${activity.title} - Image ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-admaf-charcoal/0 group-hover:bg-admaf-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm uppercase tracking-widest">
                            View
                          </span>
                        </div>
                        {/* Corner accents */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Elegant Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Premium Registration Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative bg-admaf-charcoal p-8 text-white overflow-hidden"
                >
                  {/* Decorative pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <GeometricPattern className="w-full h-full text-admaf-gold" />
                  </div>

                  {/* Gold accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-admaf-gold via-admaf-red to-admaf-gold" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <Ticket className="w-5 h-5 text-admaf-gold" />
                      <h3 className="text-xl font-display">Join This Event</h3>
                    </div>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">
                      Don't miss this unique cultural experience. Secure your spot today and be part of something extraordinary.
                    </p>
                    <Button className="w-full bg-admaf-red hover:bg-white hover:text-admaf-red rounded-none h-14 uppercase tracking-widest text-xs font-bold transition-all duration-300 shadow-lg">
                      Register Now
                    </Button>
                    <p className="text-center text-white/40 text-xs mt-4">
                      Limited seats available
                    </p>
                  </div>
                </motion.div>

                {/* Event Details Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white border border-gray-100 shadow-sm"
                >
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="font-display text-admaf-charcoal text-lg">Event Details</h3>
                  </div>

                  <div className="p-6 space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-admaf-cream flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-admaf-red" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Status</span>
                        <span className={`inline-block mt-1 px-3 py-1 text-xs font-bold uppercase ${activity.status === "Upcoming"
                          ? "bg-green-100 text-green-700"
                          : activity.status === "Registration Open"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                          }`}>
                          {activity.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-admaf-cream flex items-center justify-center flex-shrink-0">
                        <span className="text-admaf-red text-xs font-bold">#</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Category</span>
                        <span className="text-admaf-charcoal mt-1 block">{activity.categoryLabel}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-admaf-cream flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-admaf-red" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Location</span>
                        <span className="text-admaf-charcoal mt-1 block">{activity.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Share Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-admaf-cream/50 border border-gray-100 p-6"
                >
                  <h3 className="font-display text-admaf-charcoal mb-4">Share This Event</h3>
                  <div className="flex gap-2">
                    {['facebook', 'twitter', 'linkedin', 'whatsapp'].map((social, index) => (
                      <button
                        key={social}
                        className="flex-1 h-12 bg-white border border-gray-200 flex items-center justify-center hover:bg-admaf-red hover:border-admaf-red hover:text-white transition-all duration-300"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Activities - Premium */}
      {relatedActivities.length > 0 && (
        <section className="py-20 bg-admaf-charcoal relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-admaf-red/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-admaf-gold/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-admaf-gold text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                  Discover More
                </span>
                <h2 className="text-4xl font-display text-admaf-red">Related Activities</h2>
              </div>
              <Link
                href="/activities"
                className="hidden md:flex items-center gap-2 text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-admaf-charcoal transition-all duration-300 text-sm uppercase tracking-widest font-bold"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedActivities.slice(0, 3).map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/activities/${related.id}`}
                    className="group block bg-white/5 backdrop-blur-sm border border-white/10 hover:border-admaf-gold/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-admaf-charcoal to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-admaf-red/90 text-white text-[10px] uppercase font-bold px-3 py-1">
                          {related.categoryLabel}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-admaf-red text-xs mb-3">
                        <Calendar className="w-3 h-3" />
                        {related.date}
                      </div>
                      <h3 className="font-display text-lg  group-hover:text-admaf-red transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Navigation */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <Link
            href="/activities"
            className="inline-flex items-center gap-3 text-admaf-charcoal hover:text-admaf-red transition-colors group"
          >
            <div className="w-10 h-10 border border-gray-200 flex items-center justify-center group-hover:border-admaf-red group-hover:bg-admaf-red transition-all">
              <ArrowLeft className="w-4 h-4 group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Back to All Activities</span>
          </Link>
        </div>
      </section>
    </div>
  )
}