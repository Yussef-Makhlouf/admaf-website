"use client"

import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/section/page-hero"
import { RichContentBlock } from "@/components/section/rich-content-block"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Get in Touch"
        subtitle="Contact Us"
        description="We are here to answer your questions and welcome you to our community. Reach out to us or visit our headquarters."
        image="/page-hero.png"
      />

      {/* Main Info Grid */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl border-t-4 border-admaf-red">
          <div className="p-12 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col items-center text-center hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-admaf-red/5 flex items-center justify-center rounded-full mb-6 text-admaf-red">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl mb-2">Visit Us</h3>
            <p className="text-gray-500 text-sm">Abu Dhabi Music & Arts Foundation – ADMAF <br /> 3rd Floor, Makeen Tower (AjmanBank Building), Tourist Club Area</p>
          </div>
          <div className="p-12 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col items-center text-center hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-admaf-red/5 flex items-center justify-center rounded-full mb-6 text-admaf-red">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl mb-2">Call Us</h3>
            <a href="tel:+97123336400" className="text-gray-500 text-sm opacity-80">+971 (0)2 333 6400</a>
          </div>
          <div className="p-12 flex flex-col items-center text-center hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-admaf-red/5 flex items-center justify-center rounded-full mb-6 text-admaf-red">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl mb-2">Email Us</h3>
            <a href="mailto:info@admaf.org" className="text-gray-500 text-sm">info@admaf.org</a>
          </div>
        </div>
      </section>

      {/* Rich Content - Location Context */}
      <RichContentBlock
        title="A Cultural Landmark"
        subtitle="Our Location"
        content="Our offices are located in the heart of Abu Dhabi's cultural district, surrounded by the heritage that inspires our work daily. We invite you to explore the nearby Qasr Al Hosn and Cultural Foundation."
        image="/qasr-al-hosn-fort-abu-dhabi-heritage-site.jpg"
        imagePosition="right"
        buttonText="Get Directions"
      />

      {/* Contact Form Section */}
      <section className="bg-admaf-gray py-24 border-t border-admaf-red/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display text-admaf-black">Send us a Message</h2>
          </div>

          <form className="bg-white p-12 shadow-sm border border-gray-100 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                <input type="text" className="w-full border-b border-gray-200 py-3 bg-white outline-none focus:border-admaf-red transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                <input type="text" className="w-full border-b border-gray-200 py-3 bg-white outline-none focus:border-admaf-red transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
              <input type="email" className="w-full border-b border-gray-200 py-3  bg-white outline-none focus:border-admaf-red transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
              <select className="w-full border-b border-gray-200 py-3 bg-white outline-none focus:border-admaf-red transition-colors">
                <option>General Inquiry</option>
                <option>Sponsorship</option>
                <option>Education Programs</option>
                <option>Press & Media</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
              <textarea className="w-full border-b border-gray-200 py-3 bg-white outline-none focus:border-admaf-red transition-colors h-32 resize-none" />
            </div>

            <Button className="w-full bg-admaf-red text-white hover:bg-admaf-black rounded-none h-14 text-sm uppercase tracking-widest">
              Submit Inquiry
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
