import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

// بيانات نموذجية للجوائز
const awardsData = {
  main: {
    id: 1,
    title: "جائزة ADMAF للفنون المعاصرة",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "جائزة سنوية تقدم للفنانين المتميزين في مجال الفنون المعاصرة، وتهدف إلى تشجيع الإبداع والابتكار في المشهد الفني العربي.",
  },
  side: [
    {
      id: 2,
      title: "جائزة الإبداع الشبابي",
      image: "/placeholder.svg?height=200&width=300",
      description: "جائزة مخصصة للمواهب الشابة",
    },
    {
      id: 3,
      title: "جائزة التراث الثقافي",
      image: "/placeholder.svg?height=200&width=300",
      description: "جائزة تكرم المشاريع التي تحافظ على التراث",
    },
  ],
}

export function Awards() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">الجوائز</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src={awardsData.main.image || "/placeholder.svg"}
                  alt={awardsData.main.title}
                  width={600}
                  height={400}
                  className="h-80 w-full object-cover"
                />
                <div className="absolute bottom-2 right-2 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  جائزة
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">{awardsData.main.title}</h3>
                <p className="text-gray-600">{awardsData.main.description}</p>
                <Button className="mt-4" variant="outline">
                  المزيد
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-6">
            {awardsData.side.map((award) => (
              <Card key={award.id} className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={award.image || "/placeholder.svg"}
                    alt={award.title}
                    width={300}
                    height={200}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 font-bold">{award.title}</h3>
                  <p className="text-sm text-gray-600">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
