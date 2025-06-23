import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowLeft } from "lucide-react"

const featuredContent = [
  {
    id: 1,
    type: "نشاط",
    title: "مؤتمر الفنون المعاصرة في الشرق الأوسط",
    description: "مؤتمر دولي يجمع نخبة من الفنانين والنقاد لمناقشة مستقبل الفنون المعاصرة",
    image: "https://admaf.org/wp-content/uploads/2025/05/Pic1.jpg",
    date: "15 يونيو 2025",
    location: "مركز أبو ظبي للمؤتمرات",
    category: "مؤتمرات",
  },
  {
    id: 2,
    type: "معرض",
    title: "معرض الفن الإسلامي المعاصر",
    description: "معرض يستكشف تطور الفن الإسلامي في العصر الحديث",
    image: "https://admaf.org/wp-content/uploads/2025/04/quincy.png",
    date: "20-30 يونيو 2025",
    location: "قاعة المعارض الكبرى",
    category: "معارض",
  },
  {
    id: 3,
    type: "ورشة",
    title: "ورشة الخط العربي للمبتدئين",
    description: "ورشة تعليمية لتعلم أساسيات الخط العربي وجمالياته",
    image: "https://admaf.org/wp-content/uploads/2025/05/A_CH1219-scaled.jpg",
    date: "25 يونيو 2025",
    location: "مركز التدريب",
    category: "تعليم",
  },
]

export function FeaturedContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-admaf-charcoal mb-4 font-amiri">الأنشطة المميزة</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اكتشف أحدث الفعاليات والأنشطة الثقافية والفنية التي ينظمها المركز
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-admaf-burgundy text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.type}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-admaf-charcoal mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 ml-2" />
                    {item.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 ml-2" />
                    {item.location}
                  </div>
                </div>
                <Button variant="outline" className="w-full group">
                  المزيد من التفاصيل
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-admaf-burgundy hover:bg-admaf-burgundy/90">
            <Link href="/activities">
              عرض جميع الأنشطة
              <ArrowLeft className="h-4 w-4 mr-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
