"use client"

import Image from "next/image"
import { DecorativeDivider } from "@/components/islamic-patterns"
import { Button } from "@/components/ui/button"
import { Partners } from "@/components/partners"
import { PageHero } from "@/components/section/page-hero"
import { BoardMembers } from "@/components/about/board-members"
import { Advisors } from "@/components/about/advisors"

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-admaf-charcoal">

      {/* 1. Page Hero Header */}
      <PageHero
        title="About Us"
        subtitle="Our Store"
        description="Pioneering the arts and culture scene in the UAE since 1996, ADMAF nurtures creativity and inspires distinct cultural expression."
        image="/grand-symphony-orchestra-performing-in-elegant-ven.jpg"
      />

      {/* 2. Intro Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-display leading-tight text-admaf-black">
              Pioneering the Arts & Culture Scene in the UAE since 1996
            </h2>
            <div className="h-1 w-24 bg-admaf-red" />
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Founded in 1996, ADMAF is one of the oldest cultural organizations in the Arabian Gulf. Pioneering new artistic practices, it seeks to deepen global cross-cultural dialogue and inspire a renewed interest in the creativity of the UAE and Arab region.
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Often in partnership with leading national and international institutions, it delivers a wide array of initiatives, including the Abu Dhabi Festival, Year of Sustainability, and various community and education programs.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 h-[500px]">
            {/* Left Column Image (Large) */}
            <div className="col-span-8 row-span-2 relative h-full rounded-sm overflow-hidden shadow-2xl group">
              <Image src="/grand-symphony-orchestra-performing-in-elegant-ven.jpg" alt="Orchestra" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Right Column Images (Small) */}
            <div className="col-span-4 h-full flex flex-col gap-4">
              <div className="relative h-1/2 rounded-sm overflow-hidden shadow-lg group">
                <Image src="/culuture/abu-dhabi-cultural-festival-performance-orchestra-.jpg" alt="Culture" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative h-1/2 rounded-sm overflow-hidden shadow-lg group">
                <Image src="/modern-art-gallery-with-minimalist-middle-eastern-.jpg" alt="Gallery" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Patrons */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="container mx-auto px-4 space-y-20">

          {/* Patron */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
            <h3 className="md:col-span-3 text-3xl font-display text-admaf-black">Patron</h3>
            <div className="md:col-span-9 pl-0 md:pl-12 border-l-0 md:border-l border-admaf-gold/30">
              <p className="text-2xl md:text-3xl text-admaf-red font-display mb-2">H.H. Sheikha Shamsa bint Hamdan Al Nahyan</p>
              <p className="text-gray-500 uppercase text-sm tracking-[0.2em] font-medium">Assistant to H.H. the Chairman of the Emirates Red Crescent for Women's Affairs</p>
            </div>
          </div>

          {/* Honorary Patron */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
            <h3 className="md:col-span-3 text-3xl font-display text-admaf-black">Honorary Patron</h3>
            <div className="md:col-span-9 pl-0 md:pl-12 border-l-0 md:border-l border-admaf-gold/30">
              <p className="text-2xl md:text-3xl text-admaf-red font-display mb-2">H.E. Sheikh Nahayan Mabarak Al Nahyan</p>
              <p className="text-gray-500 uppercase text-sm tracking-[0.2em] font-medium">Cabinet Member, Minister of Tolerance and Coexistence</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. The Founder */}
      <section className="py-32 container mx-auto px-4 relative overflow-hidden">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-5xl font-display text-admaf-black mb-6">The Founder</h2>
          <DecorativeDivider className="w-40 h-8 text-admaf-red opacity-40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Image Group */}
          <div className="lg:col-span-5 relative h-[600px] w-full">
            <div className="absolute top-0 left-8 right-0 bottom-8 z-10 rounded-sm overflow-hidden shadow-xl">
              <Image src="/hoda-main.jpg" alt="H.E. Hoda I. Al Khamis-Kanoo Portrait" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-64 z-20 border-4 border-white shadow-xl rounded-sm overflow-hidden">
              <Image src="/hoda.jpg" alt="Founder Candid" fill className="object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h3 className="text-3xl md:text-4xl text-admaf-red font-display">H.E. Hoda I. Al Khamis-Kanoo</h3>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest leading-loose font-bold">
                Founder, Abu Dhabi Music & Arts Foundation (ADMAF)<br />
                Founder & Artistic Director, Abu Dhabi Festival
              </p>
            </div>

            <p className="text-xl text-gray-600 font-light leading-relaxed italic border-l-4 border-admaf-gold pl-6 py-2">
              "Culture is the soul of a nation, and art is its voice. It allows us to speak to the world in a language that everyone understands."
            </p>

            <div className="text-base text-gray-500 leading-loose space-y-4 font-light">
              <p>
                A pioneer in the region's cultural sector, Her Excellency has dedicated her life to nurturing the arts, education, and cross-cultural dialogue. Through ADMAF, she has created platforms that empower youth and celebrate creative expression, positioning Abu Dhabi as a leading capital of culture.
              </p>
            </div>

            <Button className="bg-admaf-black text-white rounded-none px-10 py-6 hover:bg-admaf-red transition-colors text-xs uppercase tracking-widest font-bold">
              Read Biography
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Board Members */}
      <BoardMembers />

      {/* 6. Advisors */}
      <Advisors />

      {/* 7. Mission */}
      <section className="py-0 flex flex-col md:flex-row min-h-[500px]">
        <div className="w-full md:w-1/2 bg-admaf-charcoal text-white p-16 md:p-24 lg:p-32 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
            {/* Optional bg pattern */}
          </div>
          <div className="max-w-xl mx-auto relative z-10">
            <span className="text-admaf-red uppercase tracking-widest text-sm font-bold mb-4 block">Our Purpose</span>
            <h2 className="text-5xl font-display mb-8 text-black">Mission</h2>
            <DecorativeDivider className="w-32 h-8 text-admaf-red mb-6 " />
            <p className="text-black leading-loose text-lg font-light">
              To advocate for the power of the arts and culture. To nurture artistic expression in the UAE and the region. To enable international cultural dialogue and exchange.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[400px] group">
          <Image src="/mission.jpg" alt="Mission Context" fill className="object-cover " />
          <div className="absolute inset-0 bg-admaf-red/10 mix-blend-multiply" />
        </div>
      </section>

      {/* 8. Vision */}
      <section className="py-0 flex flex-col md:flex-row min-h-[500px]">
        <div className="w-full md:w-1/2 relative min-h-[400px] order-2 md:order-1 group">
          <Image src="/vision.jpg" alt="Vision Context" fill className="object-cover " />
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 text-admaf-charcoal p-16 md:p-24 lg:p-32 flex flex-col justify-center order-1 md:order-2">
          <div className="max-w-xl mx-auto">
            <span className="text-admaf-red uppercase tracking-widest text-sm font-bold mb-4 block">Our Future</span>
            <h2 className="text-5xl font-display mb-8">Vision</h2>
            <DecorativeDivider className="w-32 h-8 text-admaf-red mb-6" />

            <p className="text-gray-600 leading-loose text-lg font-light">
              Abu Dhabi as a leading capital of creativity and culture. A society that values and celebrates artistic expression and cultural diversity.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Strategic Pillars */}
      <section className="py-32 container mx-auto px-4 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl group">
            <Image src="/culuture/abu-dhabi-cultural-festival-performance-orchestra-.jpg" alt="Strategic Pillars" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-admaf-red/20 to-transparent" />
          </div>
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-display text-admaf-black mb-6">Strategic Pillars</h2>
              <DecorativeDivider className="w-32 h-8 text-admaf-red mb-6" />

              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Our strategy is built upon three core pillars that guide every initiative and program we undertake, ensuring sustainable impact and growth.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { title: "Initiatives", desc: "Abu Dhabi Festival, Presenting & Co-commissioning, Supporting Arab Artists Abroad, Composers Platform, Visual Arts Exhibitions, The Nationals’ Gallery, ADMAF Art Collection." },
                { title: "An Incubator for Arts and Creativity", desc: "Fostering innovation and supporting emerging talents through dedicated incubation programs." },
                { title: "An Active Force for Social Unity", desc: "Strengthening community bonds and promoting social cohesion through the power of the arts." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <span className="text-5xl font-display text-gray-100 group-hover:text-admaf-gold transition-colors font-bold -mt-2">0{i + 1}</span>
                  <div>
                    <h4 className="text-xl font-bold text-admaf-black mb-2 group-hover:text-admaf-red transition-colors">{item.title}</h4>
                    <p className="text-gray-500 font-light leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Foundation (Short Summary) */}
      <section className="py-24 bg-admaf-charcoal text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/logos/main-logo.svg')] bg-no-repeat bg-center opacity-5" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl font-display mb-6 text-admaf-red">ADMAF Foundation</h2>
          <DecorativeDivider className="w-32 h-8 text-admaf-red mb-6 mx-auto" />

          <p className="text-black font-light leading-loose text-lg">
            Dedicated to making the arts accessible to all, the foundation works tirelessly to bridge cultures and ignite creativity across the nation.
          </p>
        </div>
      </section>

      <Partners />

    </div>
  )
}
