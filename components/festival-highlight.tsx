import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react"

export function FestivalHighlight() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-admaf-burgundy font-medium text-sm uppercase tracking-wide">
                مهرجان أبوظبي 2025
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-admaf-charcoal mt-2 font-amiri">
                مهرجان أبوظبي للفنون والثقافة
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              يعد مهرجان أبوظبي أحد أهم الفعاليات الثقافية والفنية في المنطقة، حيث يجمع نخبة من الفنانين والمبدعين من
              مختلف أنحاء العالم. يقدم المهرجان سنوياً باقة متنوعة من العروض الفنية والموسيقية والمسرحية.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 text-admaf-burgundy" />
                <div>
                  <div className="font-medium text-sm">التاريخ</div>
                  <div className="text-xs text-gray-600">مارس 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="h-5 w-5 text-admaf-burgundy" />
                <div>
                  <div className="font-medium text-sm">المكان</div>
                  <div className="text-xs text-gray-600">أبوظبي</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Users className="h-5 w-5 text-admaf-burgundy" />
                <div>
                  <div className="font-medium text-sm">المشاركون</div>
                  <div className="text-xs text-gray-600">+100 فنان</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-admaf-burgundy hover:bg-admaf-burgundy/90">
                <Link href="/festival">
                  اكتشف المهرجان
                  <ArrowLeft className="h-4 w-4 mr-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/festival/program">البرنامج الكامل</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="مهرجان أبوظبي"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-admaf-gold rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">2025</div>
                <div className="text-xs">الدورة 21</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
