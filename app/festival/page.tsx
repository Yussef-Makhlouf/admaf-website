import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Star, Play, ArrowRight } from "lucide-react"

const festivalEvents = [
  {
    id: 1,
    title: "حفل الافتتاح الكبير",
    description: "حفل افتتاح مهيب يجمع نجوم الفن والثقافة من حول العالم",
    image: "/placeholder.svg?height=400&width=600",
    date: "1 مارس 2026",
    time: "20:00",
    venue: "قصر الإمارات",
    category: "حفلات",
    featured: true,
  },
  {
    id: 2,
    title: "أمسية الشعر العربي المعاصر",
    description: "أمسية شعرية تحتفي بأصوات الشعر العربي الجديد",
    image: "/placeholder.svg?height=400&width=600",
    date: "3 مارس 2026",
    time: "19:30",
    venue: "مسرح أبوظبي الثقافي",
    category: "أدب",
    featured: false,
  },
  {
    id: 3,
    title: "معرض الفن التشكيلي الإماراتي",
    description: "معرض يستعرض إبداعات الفنانين الإماراتيين المعاصرين",
    image: "/placeholder.svg?height=400&width=600",
    date: "5-15 مارس 2026",
    time: "10:00-22:00",
    venue: "مركز أبوظبي للمعارض",
    category: "معارض",
    featured: true,
  },
  {
    id: 4,
    title: "عرض الباليه الملكي",
    description: "عرض استثنائي لفرقة الباليه الملكي البريطاني",
    image: "/placeholder.svg?height=400&width=600",
    date: "8 مارس 2026",
    time: "20:30",
    venue: "دار الأوبرا",
    category: "رقص",
    featured: false,
  },
]

const artists = [
  {
    id: 1,
    name: "ليلى مراد الإماراتية",
    role: "مطربة وملحنة",
    country: "الإمارات العربية المتحدة",
    image: "/placeholder.svg?height=300&width=300",
    bio: "صوت إماراتي أصيل يجمع بين التراث والمعاصرة",
  },
  {
    id: 2,
    name: "أحمد الحارثي",
    role: "عازف عود",
    country: "عُمان",
    image: "/placeholder.svg?height=300&width=300",
    bio: "عازف عود مبدع يقدم الموسيقى العربية بأسلوب عصري",
  },
  {
    id: 3,
    name: "سارة الزهراني",
    role: "راقصة باليه",
    country: "السعودية",
    image: "/placeholder.svg?height=300&width=300",
    bio: "راقصة باليه محترفة تمزج بين الكلاسيكية والحداثة",
  },
  {
    id: 4,
    name: "محمد الكندي",
    role: "شاعر",
    country: "الكويت",
    image: "/placeholder.svg?height=300&width=300",
    bio: "شاعر معاصر يكتب بلغة العصر عن قضايا الإنسان",
  },
]

export default function FestivalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background Effect */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-admaf-burgundy via-purple-900 to-admaf-charcoal">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-admaf-gold/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000" />

        <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <Star className="h-4 w-4 text-admaf-gold" />
              <span className="text-sm font-medium">مهرجان أبوظبي 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-amiri bg-gradient-to-r from-white via-admaf-gold to-white bg-clip-text text-transparent animate-fade-in">
              مهرجان أبوظبي للفنون والثقافة
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              الدورة الثانية والعشرون - رحلة استثنائية عبر عوالم الفن والإبداع
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <Calendar className="h-5 w-5 text-admaf-gold" />
                <span>1-15 مارس 2026</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <MapPin className="h-5 w-5 text-admaf-gold" />
                <span>أبوظبي، الإمارات</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <Users className="h-5 w-5 text-admaf-gold" />
                <span>+150 فنان</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-admaf-burgundy to-purple-700 hover:from-admaf-burgundy/90 hover:to-purple-700/90 text-white px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Play className="h-5 w-5 ml-2" />
                شاهد العرض التقديمي
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full backdrop-blur-sm"
              >
                البرنامج الكامل
                <ArrowRight className="h-5 w-5 mr-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Festival Content */}
      <section className="py-20 bg-gradient-to-b from-white to-admaf-cream">
        <div className="container">
          <Tabs defaultValue="events" className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-admaf-charcoal mb-6 font-amiri">استكشف المهرجان</h2>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-white shadow-lg rounded-full p-1">
                <TabsTrigger
                  value="events"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white"
                >
                  الفعاليات
                </TabsTrigger>
                <TabsTrigger
                  value="artists"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white"
                >
                  الفنانون
                </TabsTrigger>
                <TabsTrigger
                  value="venues"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white"
                >
                  الأماكن
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="events" className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {festivalEvents.map((event, index) => (
                  <Card
                    key={event.id}
                    className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${event.featured ? "lg:col-span-2" : ""} ${index % 2 === 0 ? "animate-fade-in" : "animate-fade-in delay-200"}`}
                  >
                    <div className="relative">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={600}
                        height={400}
                        className={`w-full object-cover ${event.featured ? "h-80" : "h-64"} group-hover:scale-110 transition-transform duration-700`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="bg-admaf-burgundy text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                          {event.category}
                        </span>
                        {event.featured && (
                          <span className="bg-admaf-gold text-admaf-charcoal px-3 py-1 rounded-full text-xs font-bold">
                            مميز
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className={`font-bold mb-2 ${event.featured ? "text-2xl" : "text-xl"}`}>{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm opacity-90">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {event.venue}
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <Button className="w-full bg-gradient-to-r from-admaf-burgundy to-purple-700 hover:from-admaf-burgundy/90 hover:to-purple-700/90 rounded-full">
                        احجز تذكرتك
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="artists" className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {artists.map((artist, index) => (
                  <Card
                    key={artist.id}
                    className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative group">
                      <Image
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm">{artist.bio}</p>
                      </div>
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-admaf-charcoal mb-2">{artist.name}</h3>
                      <p className="text-admaf-burgundy font-medium mb-1">{artist.role}</p>
                      <p className="text-gray-600 text-sm">{artist.country}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="venues" className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "قصر الإمارات", capacity: "1,200 مقعد", image: "/placeholder.svg?height=300&width=400" },
                  { name: "دار الأوبرا", capacity: "2,000 مقعد", image: "/placeholder.svg?height=300&width=400" },
                  { name: "مسرح أبوظبي الثقافي", capacity: "800 مقعد", image: "/placeholder.svg?height=300&width=400" },
                ].map((venue, index) => (
                  <Card
                    key={venue.name}
                    className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative">
                      <Image
                        src={venue.image || "/placeholder.svg"}
                        alt={venue.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{venue.name}</h3>
                        <p className="text-sm opacity-90">{venue.capacity}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
