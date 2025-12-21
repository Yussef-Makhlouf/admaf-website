"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Calendar, MapPin, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/section/page-hero"
import { activitiesData } from "./data"
import { DecorativeDivider } from "@/components/islamic-patterns"

// Activity categories/filters based on the provided structure
const categories = [
  { id: "all", label: "All" },
  { id: "abu-dhabi-art", label: "Abu Dhabi Art" },
  { id: "festival", label: "Abu Dhabi Festival" },
  { id: "admaf-talks", label: "ADMAF TALKS" },
  { id: "bahrain-lecture", label: "Bahrain Lecture" },
  { id: "concert", label: "Concert" },
  { id: "culture-diplomacy", label: "Culture Diplomacy" },
  { id: "education", label: "Education & Community" },
  { id: "film-media", label: "Film & Media" },
  { id: "literature", label: "Literature & Poetry" },
  { id: "mous", label: "MOUs" },
  { id: "performing-arts", label: "Performing Arts" },
  { id: "visual-arts", label: "Visual Arts" },
]


export default function ActivitiesPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showAllFilters, setShowAllFilters] = useState(false)

  // Filter activities
  const filteredActivities = activitiesData.filter((activity) => {
    const matchesCategory = activeCategory === "all" || activity.category === activeCategory
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Get featured activities
  const featuredActivities = activitiesData.filter(a => a.featured).slice(0, 2)

  // Visible categories (show first 6 on mobile, all on desktop or when expanded)
  const visibleCategories = showAllFilters ? categories : categories.slice(0, 7)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
     <PageHero title="Activities" 
        description="Discover our year-round cultural programs, exhibitions, talks, and community initiatives that celebrate arts and heritage." 
        image="/page-hero.png" 
        
        />
              <span className="text-admaf-gold text-center text-md uppercase tracking-[0.3em] font-bold my-14 block">
              Explore Our Activities
                              <DecorativeDivider className="w-48 h-8 m-auto  my-8" />
              
            </span>

      {/* Categories Filter */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {visibleCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all duration-300 ${activeCategory === category.id
                  ? "bg-admaf-red text-white"
                  : "bg-gray-100 text-admaf-charcoal hover:bg-admaf-red/10 hover:text-admaf-red"
                  }`}
              >
                {category.label}
              </button>
            ))}

            {/* Show More Button for Mobile */}
            {categories.length > 7 && (
              <button
                onClick={() => setShowAllFilters(!showAllFilters)}
                className="whitespace-nowrap px-4 py-2 text-xs uppercase tracking-widest font-bold bg-admaf-charcoal text-white hover:bg-admaf-red transition-colors flex items-center gap-1"
              >
                {showAllFilters ? "Less" : "More"}
                <ChevronDown className={`w-3 h-3 transition-transform ${showAllFilters ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      {activeCategory === "all" && searchQuery === "" && (
        <section className="py-16 bg-admaf-cream">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-admaf-red/20" />
              <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-admaf-red">Featured</h2>
              <div className="h-px flex-1 bg-admaf-red/20" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/activities/${activity.id}`} className="group block">
                    <div className="relative h-[400px] overflow-hidden">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-admaf-red text-white text-[10px] uppercase font-bold px-3 py-1 tracking-wider">
                          {categories.find(c => c.id === activity.category)?.label}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center gap-4 text-xs text-white/70 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {activity.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {activity.location}
                          </span>
                        </div>
                        <h3 className="text-2xl font-display leading-tight group-hover:text-admaf-gold transition-colors">
                          {activity.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Activities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-gray-500">
              Showing <span className="font-bold text-admaf-charcoal">{filteredActivities.length}</span> activities
              {activeCategory !== "all" && (
                <> in <span className="text-admaf-red font-bold">{categories.find(c => c.id === activeCategory)?.label}</span></>
              )}
            </p>
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/activities/${activity.id}`} className="group block bg-white border border-gray-100 hover:border-admaf-red/30 hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-admaf-charcoal text-[10px] uppercase font-bold px-2 py-1 tracking-wider">
                          {categories.find(c => c.id === activity.category)?.label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Date & Location */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {activity.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {activity.location}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-display text-admaf-charcoal group-hover:text-admaf-red transition-colors mb-3 line-clamp-2">
                        {activity.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                        {activity.description}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center text-admaf-red text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredActivities.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 mb-4">No activities found matching your criteria.</p>
              <Button
                onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                className="bg-admaf-red text-white hover:bg-admaf-charcoal"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredActivities.length > 0 && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-admaf-red text-admaf-red hover:bg-admaf-red hover:text-white rounded-none px-10 h-12 uppercase tracking-widest text-xs font-bold"
              >
                Load More Activities
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
