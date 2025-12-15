"use client"

import Link from "next/link"
import { Search, Globe, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Hook for detecting scroll to toggle solid background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/festival", label: "Festival" },
    { href: "/activities", label: "Activities" },
    { href: "/educational-programs", label: "Education" },
    { href: "/publications", label: "Publications" },
    { href: "/partnerships", label: "Partners" },
    { href: "/contact", label: "Contact" },
  ]

  // Helper for transparency state:
  // Solid White if scrolled OR menu open OR not on home.
  // Ideally keep transparent on all pages with hero headers if possible, 
  // but for strict clarity, let's keep transparent only at top.
  const isSolid = isScrolled || isMenuOpen || pathname !== "/"

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${isSolid
        ? "bg-white border-admaf-red/10 py-4 shadow-sm"
        : "bg-transparent border-transparent py-8"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-auto">
            <img
              src={isSolid ? "/logos/main-logo.svg" : "/logos/white-logo.svg"}
              alt="ADMAF Logo"
              className="h-full w-auto object-contain transition-all duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] tracking-[0.15em] uppercase font-bold hover:text-admaf-red transition-colors duration-300 relative group py-2 ${isSolid
                  ? (isActive ? "text-admaf-red" : "text-admaf-black")
                  : "text-white hover:text-white"
                  }`}
              >
                {item.label}
                {/* Underline for Active/Hover */}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-current transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className={`transition-colors duration-300 ${isSolid ? "text-admaf-black hover:text-admaf-red" : "text-white"
            }`}>
            <Search className="w-5 h-5" />
          </button>
          <button className={`font-bold text-xs tracking-widest transition-colors duration-300 ${isSolid ? "text-admaf-black hover:text-admaf-red" : "text-white"
            }`}>
            AR
          </button>
          {/* Mobile Toggle (visible on smaller screens) */}
          <button
            className={`xl:hidden ${isSolid ? "text-admaf-red" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Toggle (Mobile only) */}
        <button
          className={`md:hidden ${isSolid ? "text-admaf-red" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-admaf-red min-h-screen p-8 xl:hidden border-t border-white/20">
          <nav className="flex flex-col gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-3xl font-display hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
