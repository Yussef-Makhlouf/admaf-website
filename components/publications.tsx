import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// بيانات نموذجية للإصدارات
const publicationsData = [
  {
    id: 1,
    title: "كتاب الفن",
    image: "/placeholder.svg?height=300&width=200",
    type: "كتاب",
  },
  {
    id: 2,
    title: "صورة أمة",
    image: "/placeholder.svg?height=300&width=200",
    type: "مجلة",
  },
  {
    id: 3,
    title: "صحيفة الثقافة",
    image: "/placeholder.svg?height=300&width=400",
    type: "صحيفة",
  },
  {
    id: 4,
    title: "ADMAF TRIBUNE 2025",
    image: "/placeholder.svg?height=300&width=400",
    type: "تقرير",
  },
]

export function Publications() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">إصدارات مجموعة أبوظبي للثقافة والفنون</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {publicationsData.map((publication) => (
            <Card key={publication.id} className="overflow-hidden">
              <div className="relative flex h-64 items-center justify-center bg-gray-100 p-4">
                <Image
                  src={publication.image || "/placeholder.svg"}
                  alt={publication.title}
                  width={200}
                  height={300}
                  className="h-full object-contain"
                />
              </div>
              <CardContent className="flex items-center justify-between p-4">
                <h3 className="font-bold">{publication.title}</h3>
                <span className="text-sm text-gray-500">{publication.type}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
