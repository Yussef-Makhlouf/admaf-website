"use client"

import { Button } from "@/components/ui/button"

export default function PublicationsPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <section className="py-20 bg-admaf-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display mb-4">Publications</h1>
          <p className="max-w-xl mx-auto opacity-80 font-light">
            Documenting the cultural history and artistic achievements of the UAE.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group cursor-pointer">
              {/* Book Cover Placeholder - Strict Style */}
              <div className="aspect-[3/4] bg-gray-100 relative shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-white">
                  <div className="border border-admaf-red/20 w-full h-full flex items-center justify-center p-4">
                    <h3 className="font-display text-xl text-admaf-black group-hover:text-admaf-red transition-colors">
                      Art & Practice <br /> Vol. {i}
                    </h3>
                  </div>
                </div>
                {/* Red Spine Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-admaf-red" />
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">2024</span>
                <h4 className="font-display text-lg text-admaf-black mb-3">Annual Report</h4>
                <Button variant="link" className="text-admaf-red h-auto p-0 hover:no-underline hover:opacity-70">
                  Download PDF
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
