"use client"

import Link from "next/link"
import { Search, Menu, X, ExternalLink, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Define navigation structure with sub-menus and images
const navigationItems = [
  {
    href: "/",
    label: "Home",
    image: "/culuture/abu-dhabi-cultural-heritage-museum-interior-archit.jpg"
  },
  {
    href: "/about",
    label: "About Us",
    image: "/culuture/louvre-abu-dhabi-museum-interior-dome-architecture.jpg",
    subItems: [
      { href: "/about#patrons", label: "Patrons" },
      { href: "/about#founder", label: "Founder" },
      { href: "/about#board", label: "Board Members" },
      { href: "/about#advisors", label: "Advisors" },
      { href: "/about#mission", label: "Mission & Vision" },
      { href: "/about#pillars", label: "Strategic Pillars" },
    ]
  },
  {
    href: "https://abudhabifestival.ae",
    label: "Abu Dhabi Festival",
    external: true,
    image: "/culuture/abu-dhabi-cultural-festival-performance-orchestra-.jpg",
    subItems: [
      { href: "https://abudhabifestival.ae", label: "Home", external: true },
      { href: "https://abudhabifestival.ae/programme", label: "Programme", external: true },
      { href: "https://abudhabifestival.ae/about", label: "About", external: true },
      { href: "https://abudhabifestival.ae/awards", label: "Awards", external: true },
      { href: "https://abudhabifestival.ae/tickets", label: "Buy Tickets", external: true },
    ]
  },
  {
    href: "/activities",
    label: "Activities",
    image: "/culuture/orchestra-concert-hall-performance-dramatic-lighti.jpg",
    subItems: [
      { href: "/activities?filter=abu-dhabi-art", label: "Abu Dhabi Art" },
      { href: "/activities?filter=festival", label: "Abu Dhabi Festival" },
      { href: "/activities?filter=admaf-talks", label: "ADMAF TALKS" },
      { href: "/activities?filter=bahrain-lecture", label: "Bahrain Lecture" },
      { href: "/activities?filter=concert", label: "Concert" },
      { href: "/activities?filter=culture-diplomacy", label: "Culture Diplomacy" },
      { href: "/activities?filter=education", label: "Education & Community" },
      { href: "/activities?filter=film-media", label: "Film & Media" },
      { href: "/activities?filter=literature", label: "Literature & Poetry" },
      { href: "/activities?filter=mous", label: "MOUs" },
      { href: "/activities?filter=performing-arts", label: "Performing Arts" },
      { href: "/activities?filter=visual-arts", label: "Visual Arts" },
    ]
  },
  {
    href: "/publications",
    label: "Publications",
    image: "/culuture/arabic-calligraphy-art-exhibition.jpg",
    subItems: [
      { href: "/publications/tribune-2024", label: "ADMAF Tribune 2024" },
      { href: "/publications/yearbook-2023", label: "ADMAF Yearbook 2023" },
      { href: "/publications/portrait-nation", label: "Portrait Of a Nation" },
      { href: "/publications/yearbook-2022", label: "ADMAF Yearbook 2022" },
    ]
  },
  {
    href: "/educational-programs",
    label: "Education And Community",
    image: "/culuture/diverse-musicians-playing-traditional-and-modern-i.jpg",
    categories: [
      {
        title: "Initiatives",
        items: [
          { href: "/education/riwaq-al-fikr", label: "Riwaq Al Fikr - ADMAF Talks" },
          { href: "/education/riwaq-al-adab", label: "Riwaq Al Adab Wal Kitab" },
          { href: "/education/young-filmmakers", label: "Young Filmmakers' Circle" },
          { href: "/education/young-media", label: "Young Media Leaders" },
          { href: "/education/healing-arts", label: "Healing Through the Arts" },
        ]
      },
      {
        title: "ADMAF Awards",
        items: [
          { href: "/education/awards-residencies", label: "Awards & Residencies" },
          { href: "/education/grants", label: "Grants" },
        ]
      }
    ]
  },
  {
    href: "/partnerships",
    label: "Partnerships",
    image: "/culuture/oud-player-performing-close-up-hands-on-strings.jpg"
  },
  {
    href: "/contact",
    label: "Contact Us",
    image: "/qasr-al-hosn-fort-abu-dhabi-heritage-site.jpg"
  },
]

interface NavItem {
  href: string
  label: string
  external?: boolean
  image?: string
  subItems?: { href: string; label: string; external?: boolean }[]
  categories?: { title: string; items: { href: string; label: string }[] }[]
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState<NavItem | null>(null)
  const pathname = usePathname()

  // Hook for detecting scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const isSolid = isScrolled || pathname !== "/"

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveItem(null)
  }

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${isMenuOpen
          ? "bg-transparent"
          : isSolid
            ? "bg-white border-b border-admaf-red/10 py-4 shadow-sm"
            : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 relative z-[60]">
            <div className="relative h-10 sm:h-12 md:h-14 lg:h-16 w-auto">
              <img
                src={isMenuOpen || !isSolid ? "/logos/white-logo.svg" : "/logos/main-logo.svg"}
                alt="ADMAF Logo"
                className="h-full w-auto object-contain transition-all duration-300"
              />
            </div>
          </Link>

          {/* Desktop - Right side items */}
          <div className="flex items-center gap-6">
            {/* Abu Dhabi Festival Link - Desktop only */}
            <Link
              href="https://abudhabifestival.ae"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:flex items-center gap-1 text-[11px] tracking-widest text-admaf-red uppercase font-bold transition-colors duration-300 ${isMenuOpen || !isSolid
                ? "text-admaf-red hover:text-admaf-gold"
                : "text-admaf-red hover:text-admaf-red"
                }`}
            >
              Abu Dhabi Festival
              <ExternalLink className="w-3 h-3 text-admaf-red" />
            </Link>

            {/* Search Button */}
            <button
              className={`hidden md:block transition-colors duration-300 ${isMenuOpen || !isSolid ? "text-white" : "text-admaf-red hover:text-admaf-red"
                }`}
            >
              <Search className="w-5 h-5 text-admaf-red" />
            </button>

            {/* Get In Touch - Desktop */}
            <Link
              href="/contact"
              className={`hidden md:block px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${isMenuOpen || !isSolid
                ? "bg-white/10 backdrop-blur-sm border border-white/30 text-[#36454F] hover:bg-white hover:text-admaf-red"
                : "bg-admaf-red text-white hover:bg-admaf-charcoal"
                }`}
            >
              Get In Touch
            </Link>

            {/* Menu Toggle */}
            <button
              className={`relative z-[60] p-2 transition-colors duration-300 ${isMenuOpen || !isSolid ? "text-white" : "text-admaf-red"
                }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-admaf-red" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mega Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="h-full flex">
              {/* Left Side - Navigation Links */}
              <div className="w-full md:w-1/3 lg:w-1/4 h-full bg-white pt-28 pb-8 px-8 lg:px-12 overflow-y-auto border-r border-gray-100">
                <nav className="space-y-1">
                  {navigationItems.map((item) => {
                    const isActive = activeItem?.label === item.label
                    const isCurrentPage = pathname === item.href

                    return (
                      <div
                        key={item.label}
                        onMouseEnter={() => setActiveItem(item)}
                        className="relative"
                      >
                        <Link
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          onClick={closeMenu}
                          className={`block text-xl md:text-2xl font-display py-2 transition-colors duration-200 ${isActive || isCurrentPage
                            ? "text-admaf-red"
                            : "text-admaf-charcoal hover:text-admaf-red"
                            }`}
                        >
                          {item.label}
                          {item.external && (
                            <ExternalLink className="inline-block w-4 h-4 ml-2 opacity-50" />
                          )}
                        </Link>
                      </div>
                    )
                  })}
                </nav>

                {/* Mobile Get In Touch */}
                <div className="mt-12 pt-8 border-t border-gray-200 md:hidden">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full bg-admaf-red text-white text-center py-4 text-sm font-bold uppercase tracking-widest hover:bg-admaf-charcoal transition-colors"
                  >
                    Get In Touch
                  </Link>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/AbuDhabiMusicAndArtsFoundation/" className="text-admaf-charcoal/50 hover:text-admaf-red transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/admafsocial/" className="text-admaf-charcoal/50 hover:text-admaf-red transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
                    </a>
                    <a href="https://x.com/ADMAFsocial" className="text-admaf-charcoal/50 hover:text-admaf-red transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCy4cqieqTmUd2yDKA_fGVSw" className="text-admaf-charcoal/50 hover:text-admaf-red transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Middle - Featured Image */}
              <div className="hidden md:block w-1/3 lg:w-1/3 h-full pt-28 pb-8 px-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeItem?.image && (
                    <motion.div
                      key={activeItem.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-full w-full"
                    >
                      <div className="relative h-[60%] w-full overflow-hidden">
                        <Image
                          src={activeItem.image}
                          alt={activeItem.label}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                      {/* Image Caption */}
                      <div className="mt-4">
                        <span className="text-xs uppercase tracking-widest text-admaf-red font-bold">
                          Featured
                        </span>
                        <h3 className="text-lg font-display text-admaf-charcoal mt-1">
                          {activeItem.label}
                        </h3>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Side - Sub Navigation */}
              <div className="hidden lg:block w-1/3 h-full bg-gray-50 pt-28 pb-8 px-8 lg:px-12 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeItem && (activeItem.subItems || activeItem.categories) && (
                    <motion.div
                      key={activeItem.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Regular Sub Items */}
                      {activeItem.subItems && !activeItem.categories && (
                        <div className="space-y-4">
                          {activeItem.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              target={subItem.external ? "_blank" : undefined}
                              rel={subItem.external ? "noopener noreferrer" : undefined}
                              onClick={closeMenu}
                              className="block text-admaf-charcoal/70 hover:text-admaf-red transition-colors text-sm group flex items-center gap-2"
                            >
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                              {subItem.label}
                              {subItem.external && <ExternalLink className="w-3 h-3 opacity-50" />}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Categorized Items (like Education) */}
                      {activeItem.categories && (
                        <div className="space-y-8">
                          {activeItem.categories.map((category) => (
                            <div key={category.title}>
                              <h4 className="text-xs uppercase tracking-widest text-admaf-red font-bold mb-4 pb-2 border-b border-admaf-red/20">
                                {category.title}
                              </h4>
                              <div className="space-y-3">
                                {category.items.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="block text-admaf-charcoal/70 hover:text-admaf-red transition-colors text-sm group flex items-center gap-2"
                                  >
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* View All Link */}
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <Link
                          href={activeItem.href}
                          target={activeItem.external ? "_blank" : undefined}
                          onClick={closeMenu}
                          className="inline-flex items-center gap-2 text-admaf-red font-bold text-sm uppercase tracking-widest hover:text-admaf-charcoal transition-colors"
                        >
                          View All
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}

                  {/* Default state when no sub-items */}
                  {activeItem && !activeItem.subItems && !activeItem.categories && (
                    <motion.div
                      key="no-sub"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col justify-center h-full"
                    >
                      <Link
                        href={activeItem.href}
                        onClick={closeMenu}
                        className="inline-flex items-center gap-2 text-admaf-red font-bold text-sm uppercase tracking-widest hover:text-admaf-charcoal transition-colors"
                      >
                        Go to {activeItem.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
