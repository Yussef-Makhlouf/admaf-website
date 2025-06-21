import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { awardsData } from "./data"

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-tr from-red-600 to-red-800 py-20 text-white">
        <div className="container">
          <h1 className="mb-6 text-center text-5xl font-bold">الجوائز</h1>
          <p className="mx-auto max-w-3xl text-center text-lg text-gray-100">
            يقدم مركز أبو ظبي للفنون والثقافة مجموعة من الجوائز السنوية التي تهدف إلى دعم وتشجيع الإبداع والابتكار في
            مجالات الفنون والثقافة المختلفة.
          </p>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="container -mt-10 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awardsData.map((award) => (
            <Card key={award.id} className="group overflow-hidden transition-all hover:shadow-xl">
              <div className="relative">
                <Image
                  src={award.image}
                  alt={award.title}
                  width={600}
                  height={400}
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 rounded bg-red-600 px-3 py-1 text-sm font-bold text-white">
                  جائزة
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold text-gray-900">{award.title}</h3>
                <p className="mb-4 text-gray-600 line-clamp-2">{award.description}</p>

                <div className="mb-4">
                  <h4 className="mb-2 font-bold text-gray-900">شروط التقديم:</h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                    {award.criteria.slice(0, 2).map((criterion, index) => (
                      <li key={index} className="line-clamp-1">{criterion}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="ml-2 font-bold text-gray-900">آخر موعد:</span>
                    <span className="text-red-600">{award.deadline}</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <Link href={`/awards/${award.id}`}>
                    عرض التفاصيل
                    <span className="mr-2">→</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
