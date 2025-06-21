import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Eye, Search, Filter } from "lucide-react"

const publicationsData = [
  {
    id: 1,
    title: "مجلة الإبداع العربي - العدد 45",
    description: "مجلة فصلية تتناول أحدث التطورات في الفنون والثقافة العربية",
    image: "/placeholder.svg?height=400&width=300",
    type: "مجلة",
    year: "2025",
    language: "عربي",
    pages: "120 صفحة",
    size: "15 MB",
  },
  {
    id: 2,
    title: "تقرير مهرجان أبوظبي السنوي 2024",
    description: "تقرير شامل عن فعاليات وإنجازات مهرجان أبوظبي للعام الماضي",
    image: "/placeholder.svg?height=400&width=300",
    type: "تقرير",
    year: "2024",
    language: "عربي/إنجليزي",
    pages: "80 صفحة",
    size: "25 MB",
  },
  {
    id: 3,
    title: "كتاب الفن الإماراتي المعاصر",
    description: "دراسة شاملة لتطور الفن الإماراتي في العقود الأخيرة",
    image: "/placeholder.svg?height=400&width=300",
    type: "كتاب",
    year: "2024",
    language: "عربي",
    pages: "200 صفحة",
    size: "45 MB",
  },
  {
    id: 4,
    title: "دليل الفعاليات الثقافية 2025",
    description: "دليل شامل للفعاليات الثقافية والفنية في دولة الإمارات",
    image: "/placeholder.svg?height=400&width=300",
    type: "دليل",
    year: "2025",
    language: "عربي/إنجليزي",
    pages: "150 صفحة",
    size: "30 MB",
  },
  {
    id: 5,
    title: "مجلة صورة أمة - العدد الخاص",
    description: "عدد خاص يحتفي بالذكرى الخمسين لدولة الإمارات العربية المتحدة",
    image: "/placeholder.svg?height=400&width=300",
    type: "مجلة",
    year: "2024",
    language: "عربي",
    pages: "180 صفحة",
    size: "40 MB",
  },
  {
    id: 6,
    title: "كتالوج معرض الفن الإسلامي",
    description: "كتالوج شامل لمعرض الفن الإسلامي المعاصر",
    image: "/placeholder.svg?height=400&width=300",
    type: "كتالوج",
    year: "2024",
    language: "عربي/إنجليزي",
    pages: "100 صفحة",
    size: "35 MB",
  },
  {
    id: 7,
    title: "ADMAF Tribune 2025",
    description: "النشرة الإخبارية السنوية لمركز أبو ظبي للفنون والثقافة",
    image: "/placeholder.svg?height=400&width=300",
    type: "نشرة",
    year: "2025",
    language: "إنجليزي",
    pages: "60 صفحة",
    size: "20 MB",
  },
  {
    id: 8,
    title: "دراسة الفنون التراثية في الإمارات",
    description: "بحث أكاديمي حول الفنون التراثية وتطورها في دولة الإمارات",
    image: "/placeholder.svg?height=400&width=300",
    type: "دراسة",
    year: "2023",
    language: "عربي",
    pages: "250 صفحة",
    size: "50 MB",
  },
]

export default function PublicationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-admaf-cream to-white">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-admaf-charcoal mb-6 font-amiri">
              إصدارات مجموعة أبوظبي للثقافة والفنون
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              مكتبة رقمية شاملة من الكتب والمجلات والتقارير الثقافية والفنية
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="البحث في المنشورات..." className="pr-10" />
              </div>
            </div>
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="نوع المنشور" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الأنواع</SelectItem>
                  <SelectItem value="magazine">مجلة</SelectItem>
                  <SelectItem value="book">كتاب</SelectItem>
                  <SelectItem value="report">تقرير</SelectItem>
                  <SelectItem value="catalog">كتالوج</SelectItem>
                  <SelectItem value="study">دراسة</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="السنة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع السنوات</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                تصفية
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {publicationsData.map((publication) => (
              <Card key={publication.id} className="overflow-hidden hover:shadow-lg transition-shadow group bg-white">
                <div className="relative">
                  <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center p-4">
                    <Image
                      src={publication.image || "/placeholder.svg"}
                      alt={publication.title}
                      width={300}
                      height={400}
                      className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-admaf-burgundy text-white px-2 py-1 rounded text-xs font-medium">
                      {publication.type}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-admaf-charcoal mb-2 line-clamp-2 text-sm">{publication.title}</h3>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">{publication.description}</p>
                  <div className="text-xs text-gray-500 mb-3 space-y-1">
                    <div className="flex justify-between">
                      <span>السنة:</span>
                      <span>{publication.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>اللغة:</span>
                      <span>{publication.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>الصفحات:</span>
                      <span>{publication.pages}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>الحجم:</span>
                      <span>{publication.size}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Eye className="h-3 w-3 ml-1" />
                      عرض
                    </Button>
                    <Button size="sm" className="flex-1 bg-admaf-burgundy hover:bg-admaf-burgundy/90 text-xs">
                      <Download className="h-3 w-3 ml-1" />
                      تحميل
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-admaf-burgundy text-admaf-burgundy hover:bg-admaf-burgundy hover:text-white"
            >
              تحميل المزيد
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
