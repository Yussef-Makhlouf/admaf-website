import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

// بيانات نموذجية للأنشطة
const activitiesData = [
  {
    id: 1,
    title: "فعالية ثقافية",
    image: "https://admaf.org/wp-content/uploads/2025/04/quincy.png",
    description: "فعالية ثقافية مميزة تجمع نخبة من المثقفين والفنانين",
    tag: "فعالية",
  },
  {
    id: 2,
    title: "معرض فني",
    image: "https://admaf.org/wp-content/uploads/2025/05/Pic1.jpg",
    description: "معرض فني يضم أعمال فنية متميزة من مختلف أنحاء العالم",
    tag: "معرض",
  },
  {
    id: 3,
    title: "ندوة ثقافية",
    image: "/placeholder.svg?height=300&width=400",
    description: "ندوة ثقافية تناقش أهم القضايا الفنية والثقافية المعاصرة",
    tag: "ندوة",
  },
  {
    id: 4,
    title: "ورشة عمل",
    image: "/placeholder.svg?height=300&width=400",
    description: "ورشة عمل تهدف إلى تنمية المهارات الفنية والإبداعية",
    tag: "ورشة",
  },
  {
    id: 5,
    title: "حفل تكريم",
    image: "/placeholder.svg?height=300&width=400",
    description: "حفل تكريم للمبدعين والفنانين المتميزين في مجالات مختلفة",
    tag: "تكريم",
  },
]

export function Activities() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">الأنشطة</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {activitiesData.map((activity) => (
            <Card key={activity.id} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute bottom-2 right-2 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  {activity.tag}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 font-bold">{activity.title}</h3>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
