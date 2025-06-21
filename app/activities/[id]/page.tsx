import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight, Share2, BookmarkPlus } from "lucide-react"
import { notFound } from "next/navigation"

// Import the activities data (in a real app, this would come from an API or database)
import { activitiesData } from "../data"

export default function ActivityPage({ params }: { params: { id: string } }) {
  const activity = activitiesData.find((a) => a.id === parseInt(params.id))

  if (!activity) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex gap-2 mb-4">
                <span className="bg-admaf-burgundy text-white px-4 py-1 rounded-full text-sm font-medium">
                  {activity.category}
                </span>
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  {activity.status}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-amiri">
                {activity.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 ml-2" />
                  {activity.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 ml-2" />
                  {activity.location}
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 ml-2" />
                  {activity.attendees}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {activity.description}
              </p>
              
              {/* Additional Content Sections */}
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-admaf-charcoal mb-4 font-amiri">عن الفعالية</h2>
                  <p className="text-gray-600">
                    {activity.description}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-admaf-charcoal mb-4 font-amiri">البرنامج</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      سيتم الإعلان عن تفاصيل البرنامج قريباً
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-admaf-charcoal mb-4 font-amiri">المتحدثون</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      سيتم الإعلان عن قائمة المتحدثين قريباً
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Registration Card */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-admaf-charcoal mb-4 font-amiri">التسجيل</h3>
                <Button className="w-full bg-admaf-burgundy hover:bg-admaf-burgundy/90 mb-4">
                  سجل الآن
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  المقاعد محدودة - سارع بالتسجيل
                </p>
              </div>

              {/* Share Card */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-admaf-charcoal mb-4 font-amiri">مشاركة</h3>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Share2 className="h-4 w-4 ml-2" />
                    مشاركة
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <BookmarkPlus className="h-4 w-4 ml-2" />
                    حفظ
                  </Button>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-admaf-charcoal mb-4 font-amiri">الموقع</h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                  {/* Add map component here */}
                </div>
                <p className="text-gray-600">
                  {activity.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 