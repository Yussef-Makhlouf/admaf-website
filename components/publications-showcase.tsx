import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye, ArrowLeft } from "lucide-react"

const publications = [
  {
    id: 1,
    title: "منبر متحف الفن الإسلامي - مهرجان أبوظبي 2022",
    description: "مجلة فصلية تتناول أحدث التطورات في الفنون والثقافة العربية",
    image: "https://admaf.org/wp-content/uploads/2024/03/ADMAF-Tribune-Issue-1_Final-print.jpg",
    type: "مجلة",
    year: "2025",
    issue: "العدد 45",
  },
  {
    id: 2,
    title: "مهرجان أبوظبي - رحلة تصوير فوتوغرافي 2016",
    description: "تقرير شامل عن فعاليات وإنجازات مهرجان أبوظبي للعام الماضي",
    image: "https://admaf.org/wp-content/uploads/2024/03/cover-7.jpg",
    type: "تقرير",
    year: "2024",
    issue: "التقرير السنوي",
  },
  {
    id: 3,
    title: "الكتاب السنوي للاتحاد الدولي للمهندسين المعماريين 2015",
    description: "دراسة شاملة لتطور الفن الإماراتي في العقود الأخيرة",
    image: "https://admaf.org/wp-content/uploads/2023/12/cover-2015-2.jpg",
    type: "كتاب",
    year: "2024",
    issue: "الطبعة الأولى",
  },
  {
    id: 4,
    title: "مهرجان أبوظبي – رحلة مصوّرة 2013",
    description: "دليل شامل للفعاليات الثقافية والفنية في دولة الإمارات",
    image: "https://admaf.org/wp-content/uploads/2024/03/cover-3.jpg",
    type: "دليل",
    year: "2025",
    issue: "الإصدار الجديد",
  },
]

export function PublicationsShowcase() {
  return (
    <section className="py-16 bg-admaf-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-admaf-charcoal mb-4 font-amiri">
            إصدارات مجموعة أبوظبي للثقافة والفنون
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            مكتبة رقمية شاملة من الكتب والمجلات والتقارير الثقافية والفنية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {publications.map((publication) => (
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
                <div className="text-xs text-gray-500 mb-3">
                  <div>{publication.year}</div>
                  <div>{publication.issue}</div>
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

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-admaf-burgundy text-admaf-burgundy hover:bg-admaf-burgundy hover:text-white"
          >
            <Link href="/publications">
              عرض جميع الإصدارات
              <ArrowLeft className="h-4 w-4 mr-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
