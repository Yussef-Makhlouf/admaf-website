"use client"

import { PageHero } from "@/components/section/page-hero"
import { Button } from "@/components/ui/button"

export default function EducationPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Empowering the Next Generation"
        subtitle="Education & Community"
        description="We believe that education is the foundation of a thriving cultural ecosystem. Our programs nurture talent, foster creativity, and build future leaders in the arts."
        image="/modern-art-gallery-with-minimalist-middle-eastern-.jpg"
      />

      {/* Programs Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-white border border-gray-100 shadow-sm">
          {[
            { title: 'Riwaq Al Adab', desc: 'Cultivating literary talent and publishing new Arabic works.' },
            { title: 'Portrait of a Nation', desc: 'Visual arts exhibition celebrating UAE creativity.' },
            { title: 'Young Media Leaders', desc: 'Training the next generation of cultural journalists.' }
          ].map((prog, i) => (
            <div key={i} className="group p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-100 last:border-r-0 hover:bg-admaf-red hover:text-white transition-colors duration-500 cursor-pointer flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-40 mb-6 block group-hover:text-white group-hover:opacity-60">Initiative 0{i + 1}</span>
                <h3 className="text-3xl md:text-4xl font-display mb-6 group-hover:text-white transition-colors">{prog.title}</h3>
                <p className="opacity-60 leading-relaxed font-light text-lg">
                  {prog.desc}
                </p>
              </div>
              <div className="pt-8 mt-auto">
                <Button variant="link" className="text-admaf-red p-0 group-hover:text-white h-auto font-bold uppercase tracking-widest text-xs hover:no-underline">
                  Learn More &rarr;
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
