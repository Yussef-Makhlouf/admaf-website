"use client"

import Link from "next/link"
import { Search, Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { href: "/", label: "الصفحة الرئيسية" },
    { href: "/about", label: "نبذة عنا" },
    { href: "/festival", label: "مهرجان أبوظبي" },
    { href: "/activities", label: "الأنشطة" },
    { href: "/publications", label: "المنشورات" },
    {
      href: "/educational-programs",
      label: "البرنامج التعليمي والمجتمعي",
      submenu: [
        { href: "/educational-programs/initiatives", label: "المبادرات" },
        { href: "/educational-programs/awards", label: "جوائز مجموعة أبوظبي للثقافة والفنون" },
        { href: "/educational-programs/grants", label: "المنح والدعم" },
      ],
    },
    { href: "/partnerships", label: "الشراكات" },
    { href: "/contact", label: "تواصل معنا" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="container flex h-12 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-admaf-burgundy">
              <Search className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Globe className="h-4 w-4" />
              <span>عربي</span>
              <span className="text-xs">|</span>
              <span className="text-xs">EN</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-admaf-burgundy">ADMAF</span>
            <div className="h-8 w-8 rounded-full bg-admaf-burgundy flex items-center justify-center">
              <span className="text-white text-xs font-bold">أ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-1">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-admaf-burgundy">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-64 p-2">
                          {item.submenu.map((subItem) => (
                            <NavigationMenuLink key={subItem.href} asChild>
                              <Link
                                href={subItem.href}
                                className="block px-3 py-2 text-sm text-gray-700 hover:text-admaf-burgundy hover:bg-gray-50 rounded-md"
                              >
                                {subItem.label}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-admaf-burgundy transition-colors"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden">
              <div className="container py-4">
                <nav className="flex flex-col gap-2">
                  {navigationItems.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-admaf-burgundy hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.submenu && (
                        <div className="mr-4 mt-1 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-3 py-1 text-xs text-gray-600 hover:text-admaf-burgundy hover:bg-gray-50 rounded-md"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
