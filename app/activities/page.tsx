"use client"

import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"

export default function ActivitiesPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <section className="bg-admaf-gray py-20 border-b border-admaf-red/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display text-admaf-red mb-6">Year-Round Activities</h1>
          <p className="text-admaf-black/60 max-w-2xl mx-auto mb-10">
            Engaging the community through workshops, talks, and performances throughout the year.
          </p>

          {/* Strict Search Bar */}
          <div className="max-w-xl mx-auto flex">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search activities..."
                className="w-full h-12 pl-4 pr-10 bg-white border border-r-0 border-gray-200 outline-none focus:border-admaf-red rounded-none transition-colors"
              />
              <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>
            <Button className="rounded-none bg-admaf-red text-white h-12 px-6">
              <Filter className="w-4 h-4 mr-2" /> Filter
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        {/* Tab-like Filters (Strict Text) */}
        <div className="flex justify-center gap-8 mb-16 border-b border-gray-100 pb-4">
          {['All', 'Conferences', 'Workshops', 'Performances', 'Talks'].map((tab, i) => (
            <button
              key={i}
              className={`text-sm uppercase tracking-widest font-bold pb-4 border-b-2 transition-colors ${i === 0 ? 'text-admaf-red border-admaf-red' : 'text-gray-400 border-transparent hover:text-admaf-red'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Activity List */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="group flex flex-col md:flex-row border border-gray-100 hover:border-admaf-red hover:bg-red-50/10 transition-colors duration-300 p-6">
              <div className="md:w-32 flex flex-col justify-center border-r border-gray-100 pr-6 mr-6 text-center md:text-right">
                <span className="text-3xl font-display text-admaf-red">1{i}</span>
                <span className="text-xs uppercase font-bold text-gray-400">Dec 2025</span>
              </div>
              <div className="flex-1 py-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-admaf-red text-white text-[10px] uppercase font-bold px-2 py-1">Workshop</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Manarat Al Saadiyat</span>
                </div>
                <h3 className="text-xl font-display text-admaf-black group-hover:text-admaf-red transition-colors mb-2">
                  Arabic Calligraphy Masterclass
                </h3>
                <p className="text-sm text-gray-500 line-clamp-1">
                  Join master calligrapher Mohammed Mandi throughout a 3-day intensive workshop exploring the Thuluth script.
                </p>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <Button variant="outline" className="w-full md:w-auto rounded-none border-gray-200 text-admaf-black hover:border-admaf-red hover:text-admaf-red">
                  Register
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
