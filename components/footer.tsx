import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { IslamicStarPattern } from "@/components/ui/calligraphy-strokes"

export function Footer() {
  return (
    <footer className="bg-admaf-red text-white relative overflow-hidden">
      {/* Decorative Pattern - Strict Overlay */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2">
        <IslamicStarPattern className="w-full h-full text-white" />
      </div>

      <div className="container py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="h-20 w-auto">
              <img
                src="/logos/white-logo.svg"
                alt="ADMAF Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed font-light max-w-sm">
              Pioneering the arts and culture scene in the UAE since 1996, ADMAF nurtures creativity and inspires distinct cultural expression.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-admaf-gold text-xs uppercase tracking-[0.2em] font-bold border-b border-white/10 pb-4">Explore</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors duration-300 flex items-center group"><span className="w-0 group-hover:w-2 h-px bg-admaf-gold mr-0 group-hover:mr-2 transition-all duration-300" />Our Story</Link></li>
              <li><Link href="/festival" className="hover:text-white transition-colors duration-300 flex items-center group"><span className="w-0 group-hover:w-2 h-px bg-admaf-gold mr-0 group-hover:mr-2 transition-all duration-300" />Abu Dhabi Festival</Link></li>
              <li><Link href="/education" className="hover:text-white transition-colors duration-300 flex items-center group"><span className="w-0 group-hover:w-2 h-px bg-admaf-gold mr-0 group-hover:mr-2 transition-all duration-300" />Education</Link></li>
              <li><Link href="/grants" className="hover:text-white transition-colors duration-300 flex items-center group"><span className="w-0 group-hover:w-2 h-px bg-admaf-gold mr-0 group-hover:mr-2 transition-all duration-300" />Grants</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-admaf-gold text-xs uppercase tracking-[0.2em] font-bold border-b border-white/10 pb-4">Contact</h3>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex gap-4 items-start">
                <MapPin className="h-5 w-5 shrink-0 text-admaf-gold/70" />
                <span>Abu Dhabi Music & ArtsFoundation – ADMAF 3rd Floor, Makeen Tower (AjmanBank Building), Tourist Club Area</span>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="h-5 w-5 shrink-0 text-admaf-gold/70" />
                <span>+971 2 333 6400</span>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="h-5 w-5 shrink-0 text-admaf-gold/70" />
                <span>info@admaf.org</span>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-admaf-gold text-xs uppercase tracking-[0.2em] font-bold border-b border-white/10 pb-4">Stay Updated</h3>
            <p className="text-white/60 text-xs">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-admaf-gold transition-colors placeholder:text-white/30"
              />
              <button className="bg-white text-admaf-red uppercase text-xs font-bold tracking-widest py-3 px-6 hover:bg-admaf-gold hover:text-white transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <div key={i} className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-admaf-red hover:border-white transition-all duration-300 cursor-pointer">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Abu Dhabi Music & Arts Foundation</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
