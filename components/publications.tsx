"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

const publications = [
  {
    id: 1,
    title: "Cultural Report 2024",
    image: "/culuture/abu-dhabi-cultural-festival-performance-orchestra-.jpg",
    type: "Report",
  },
  {
    id: 2,
    title: "Art in the Gulf",
    image: "/modern-art-gallery-with-minimalist-middle-eastern-.jpg",
    type: "Book",
  },
  {
    id: 3,
    title: "Music Festival Program",
    image: "/grand-symphony-orchestra-performing-in-elegant-ven.jpg",
    type: "Guide",
  },
  {
    id: 4,
    title: "Educational Initiatives",
    image: "/intimate-literary-event-space-with-arabic-calligra.jpg",
    type: "Brochure",
  },
  {
    id: 5,
    title: "Legacy of Giving",
    image: "/culuture/abu-dhabi-cultural-heritage-museum-interior-archit.jpg",
    type: "Book",
  },
  {
    id: 6,
    title: "Artist Spotlight 2025",
    image: "/culuture/diverse-musicians-playing-traditional-and-modern-i.jpg",
    type: "Catalog",
  },
]

export function Publications() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-display text-admaf-charcoal">Digital Library</h2>
          <div className="text-sm text-gray-500">{publications.length} Publications Available</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {publications.map((item) => (
            <div key={item.id} className="group relative bg-gray-50 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-admaf-red">
                  {item.type}
                </div>
              </div>

              <div className="p-6 border-t border-gray-100">
                <h3 className="font-display text-lg leading-tight mb-4 group-hover:text-admaf-red transition-colors">{item.title}</h3>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 text-xs uppercase tracking-wider font-bold rounded-none border-gray-200 hover:border-admaf-red hover:bg-admaf-red hover:text-white transition-all duration-300 h-10">
                    <Eye className="w-3 h-3 mr-2" /> Preview
                  </Button>
                  <Button size="sm" className="flex-1 text-xs uppercase tracking-wider font-bold rounded-none bg-admaf-red text-black hover:bg-admaf-red hover:text-white transition-all duration-300 h-10 shadow-sm">
                    <Download className="w-3 h-3 mr-2" /> Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
