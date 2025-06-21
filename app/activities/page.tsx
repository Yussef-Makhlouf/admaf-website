import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Filter } from "lucide-react"
import { activitiesData } from "./data"

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-admaf-cream to-white">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-admaf-charcoal mb-6 font-amiri">الأنشطة</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              تصفح الفعاليات والأنشطة الثقافية والفنية التي ينظمها مركز أبو ظبي للفنون والثقافة
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="py-8">
        <div className="container">
          <Tabs defaultValue="all" className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full md:w-auto">
                <TabsTrigger value="all">الكل</TabsTrigger>
                <TabsTrigger value="conferences">مؤتمرات</TabsTrigger>
                <TabsTrigger value="exhibitions">معارض</TabsTrigger>
                <TabsTrigger value="workshops">ورش عمل</TabsTrigger>
                <TabsTrigger value="seminars">ندوات</TabsTrigger>
                <TabsTrigger value="festivals">مهرجانات</TabsTrigger>
              </TabsList>

              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                تصفية متقدمة
              </Button>
            </div>

            <TabsContent value="all" className="mt-6">
              <ActivityGrid activities={activitiesData} />
            </TabsContent>

            <TabsContent value="conferences" className="mt-6">
              <ActivityGrid activities={activitiesData.filter((a) => a.category === "مؤتمرات")} />
            </TabsContent>

            <TabsContent value="exhibitions" className="mt-6">
              <ActivityGrid activities={activitiesData.filter((a) => a.category === "معارض")} />
            </TabsContent>

            <TabsContent value="workshops" className="mt-6">
              <ActivityGrid activities={activitiesData.filter((a) => a.category === "ورش عمل")} />
            </TabsContent>

            <TabsContent value="seminars" className="mt-6">
              <ActivityGrid activities={activitiesData.filter((a) => a.category === "ندوات")} />
            </TabsContent>

            <TabsContent value="festivals" className="mt-6">
              <ActivityGrid activities={activitiesData.filter((a) => a.category === "مهرجانات")} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

function ActivityGrid({ activities }: { activities: typeof activitiesData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activities.map((activity) => (
        <Link href={`/activities/${activity.id}`} key={activity.id}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
            <div className="relative">
              <Image
                src={activity.image || "/placeholder.svg"}
                alt={activity.title}
                width={400}
                height={300}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="bg-admaf-burgundy text-white px-3 py-1 rounded-full text-xs font-medium">
                  {activity.category}
                </span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {activity.status}
                </span>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-admaf-charcoal mb-3 line-clamp-2">{activity.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{activity.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 ml-2 text-admaf-burgundy" />
                  {activity.date}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 ml-2 text-admaf-burgundy" />
                  {activity.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 ml-2 text-admaf-burgundy" />
                  {activity.attendees}
                </div>
              </div>
              <Button className="w-full bg-admaf-burgundy hover:bg-admaf-burgundy/90">التفاصيل والتسجيل</Button>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
