import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/hero-bg.png" alt="مركز أبو ظبي للفنون والثقافة" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl font-amiri arabic-text">
            حيث تتواصل الفنون والثقافة والإبداع والابتكار.
          </h1>
          <p className="mb-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed arabic-text">
            نسعى في مركز أبو ظبي للفنون والثقافة إلى تعزيز الإبداع والفنون في المجتمع الإماراتي وإثراء المشهد الثقافي
            العربي والعالمي
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-admaf-burgundy hover:bg-admaf-burgundy/90 text-white px-8 py-3">
              اكتشف المزيد
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-admaf-burgundy px-8 py-3"
            >
              تصفح الأنشطة
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </section>
  )
}
