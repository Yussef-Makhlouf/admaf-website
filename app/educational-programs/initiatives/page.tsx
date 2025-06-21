import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Music, Camera, Pen, Calendar, Clock, ArrowRight } from "lucide-react"

const initiatives = [
  {
    id: 1,
    title: "أكاديمية الفنون الشابة",
    description: "برنامج تدريبي شامل للمواهب الشابة في مختلف المجالات الفنية",
    image: "/placeholder.svg?height=300&width=400",
    category: "تعليم",
    duration: "6 أشهر",
    participants: "50 مشارك",
    ageGroup: "16-25 سنة",
    icon: BookOpen,
    color: "from-blue-500 to-purple-600",
    features: ["ورش عملية", "إرشاد فردي", "معرض ختامي", "شهادة معتمدة"],
    schedule: [
      { day: "الأحد", time: "16:00-18:00", subject: "الرسم والتصوير" },
      { day: "الثلاثاء", time: "16:00-18:00", subject: "النحت والخزف" },
      { day: "الخميس", time: "16:00-18:00", subject: "الفن الرقمي" },
    ],
  },
  {
    id: 2,
    title: "ورش الخط العربي",
    description: "تعلم فن الخط العربي من الأساسيات إلى الاحتراف",
    image: "/placeholder.svg?height=300&width=400",
    category: "تراث",
    duration: "3 أشهر",
    participants: "30 مشارك",
    ageGroup: "جميع الأعمار",
    icon: Pen,
    color: "from-green-500 to-teal-600",
    features: ["خطوط متنوعة", "أدوات مجانية", "مشاريع عملية", "معرض أعمال"],
    schedule: [
      { day: "السبت", time: "10:00-12:00", subject: "خط النسخ" },
      { day: "السبت", time: "14:00-16:00", subject: "خط الثلث" },
      { day: "الأربعاء", time: "18:00-20:00", subject: "الخط الديواني" },
    ],
  },
  {
    id: 3,
    title: "استوديو الموسيقى الإماراتية",
    description: "تعلم الآلات الموسيقية التراثية والمعاصرة",
    image: "/placeholder.svg?height=300&width=400",
    category: "موسيقى",
    duration: "4 أشهر",
    participants: "40 مشارك",
    ageGroup: "12+ سنة",
    icon: Music,
    color: "from-purple-500 to-pink-600",
    features: ["آلات متنوعة", "تسجيل احترافي", "عروض حية", "فرق موسيقية"],
    schedule: [
      { day: "الاثنين", time: "17:00-19:00", subject: "العود والقانون" },
      { day: "الأربعاء", time: "17:00-19:00", subject: "الإيقاع والطبول" },
      { day: "الجمعة", time: "15:00-17:00", subject: "الغناء والإنشاد" },
    ],
  },
  {
    id: 4,
    title: "مختبر الفن الرقمي",
    description: "استكشاف التقنيات الحديثة في الفن والتصميم",
    image: "/placeholder.svg?height=300&width=400",
    category: "تكنولوجيا",
    duration: "5 أشهر",
    participants: "25 مشارك",
    ageGroup: "18+ سنة",
    icon: Camera,
    color: "from-orange-500 to-red-600",
    features: ["برامج متقدمة", "معدات حديثة", "مشاريع تفاعلية", "معرض رقمي"],
    schedule: [
      { day: "الثلاثاء", time: "18:00-20:00", subject: "التصميم الجرافيكي" },
      { day: "الخميس", time: "18:00-20:00", subject: "الفن التفاعلي" },
      { day: "السبت", time: "16:00-18:00", subject: "الواقع الافتراضي" },
    ],
  },
  {
    id: 5,
    title: "نادي القراءة الثقافي",
    description: "مناقشة الكتب والأعمال الأدبية مع نخبة من الكتاب",
    image: "/placeholder.svg?height=300&width=400",
    category: "أدب",
    duration: "مستمر",
    participants: "60 مشارك",
    ageGroup: "16+ سنة",
    icon: BookOpen,
    color: "from-indigo-500 to-blue-600",
    features: ["كتب مجانية", "لقاءات شهرية", "ضيوف مميزون", "مكتبة رقمية"],
    schedule: [
      { day: "الجمعة", time: "19:00-21:00", subject: "مناقشة الكتاب الشهري" },
      { day: "الثلاثاء", time: "18:00-19:00", subject: "ورشة الكتابة الإبداعية" },
    ],
  },
  {
    id: 6,
    title: "مشروع الفن المجتمعي",
    description: "مشاريع فنية تخدم المجتمع وتعزز الهوية الثقافية",
    image: "/placeholder.svg?height=300&width=400",
    category: "مجتمع",
    duration: "متغير",
    participants: "100+ مشارك",
    ageGroup: "جميع الأعمار",
    icon: Users,
    color: "from-emerald-500 to-green-600",
    features: ["مشاريع حقيقية", "تأثير مجتمعي", "تعاون جماعي", "توثيق الأعمال"],
    schedule: [{ day: "متغير", time: "حسب المشروع", subject: "مشاريع ميدانية" }],
  },
]

export default function InitiativesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-admaf-burgundy via-purple-900 to-admaf-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute top-10 right-10 w-40 h-40 bg-admaf-gold/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container relative z-10">
          <div className="text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <BookOpen className="h-4 w-4 text-admaf-gold" />
              <span className="text-sm font-medium">المبادرات التعليمية</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-amiri bg-gradient-to-r from-white via-admaf-gold to-white bg-clip-text text-transparent">
              مبادراتنا التعليمية
            </h1>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              برامج تعليمية متنوعة ومبتكرة لتنمية المواهب وإثراء المعرفة الفنية والثقافية
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-admaf-cream">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="text-center mb-12">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 bg-white shadow-lg rounded-full p-1">
                <TabsTrigger
                  value="all"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white"
                >
                  الكل
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white"
                >
                  تعليم
                </TabsTrigger>
                <TabsTrigger
                  value="arts"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white"
                >
                  فنون
                </TabsTrigger>
                <TabsTrigger
                  value="heritage"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white"
                >
                  تراث
                </TabsTrigger>
                <TabsTrigger
                  value="community"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white"
                >
                  مجتمع
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-12">
              <InitiativesGrid initiatives={initiatives} />
            </TabsContent>

            <TabsContent value="education" className="mt-12">
              <InitiativesGrid initiatives={initiatives.filter((i) => i.category === "تعليم")} />
            </TabsContent>

            <TabsContent value="arts" className="mt-12">
              <InitiativesGrid initiatives={initiatives.filter((i) => ["موسيقى", "تكنولوجيا"].includes(i.category))} />
            </TabsContent>

            <TabsContent value="heritage" className="mt-12">
              <InitiativesGrid initiatives={initiatives.filter((i) => i.category === "تراث")} />
            </TabsContent>

            <TabsContent value="community" className="mt-12">
              <InitiativesGrid initiatives={initiatives.filter((i) => ["مجتمع", "أدب"].includes(i.category))} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-admaf-burgundy to-purple-700 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-amiri">إنجازاتنا بالأرقام</h2>
            <p className="text-xl opacity-90">نفخر بما حققناه من نجاحات في مبادراتنا التعليمية</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "1,200+", label: "مستفيد من البرامج" },
              { number: "15", label: "مبادرة تعليمية" },
              { number: "85%", label: "معدل إكمال البرامج" },
              { number: "95%", label: "رضا المشاركين" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-admaf-gold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function InitiativesGrid({ initiatives }: { initiatives: typeof initiatives }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {initiatives.map((initiative, index) => (
        <Card
          key={initiative.id}
          className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative">
            <Image
              src={initiative.image || "/placeholder.svg"}
              alt={initiative.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge className={`bg-gradient-to-r ${initiative.color} text-white border-0`}>
                {initiative.category}
              </Badge>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${initiative.color} flex items-center justify-center`}
                >
                  <initiative.icon className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-bold">{initiative.title}</h3>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-4 text-sm">{initiative.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3 text-admaf-burgundy" />
                <span>{initiative.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-3 w-3 text-admaf-burgundy" />
                <span>{initiative.participants}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <Calendar className="h-3 w-3 text-admaf-burgundy" />
                <span>{initiative.ageGroup}</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-sm mb-2">المميزات:</h4>
              <div className="flex flex-wrap gap-1">
                {initiative.features.map((feature, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <Button className={`w-full bg-gradient-to-r ${initiative.color} hover:opacity-90 rounded-full`}>
              التسجيل في البرنامج
              <ArrowRight className="h-4 w-4 mr-2" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
