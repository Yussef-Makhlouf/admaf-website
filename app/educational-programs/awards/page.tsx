import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Trophy, Star, Calendar, DollarSign, FileText, Users, Crown, Palette, Pen, Monitor } from "lucide-react"

const awards = [
  {
    id: 1,
    title: "جائزة التميز في الفنون البصرية",
    description: "جائزة سنوية تكرم أفضل الأعمال الفنية البصرية للفنانين الإماراتيين",
    image: "/placeholder.svg?height=400&width=600",
    category: "فنون بصرية",
    prize: "100,000 درهم",
    deadline: "31 ديسمبر 2025",
    icon: Palette,
    color: "from-purple-500 to-pink-600",
    criteria: [
      "أن يكون المتقدم مواطناً إماراتياً أو مقيماً",
      "العمل الفني أصلي وغير منشور",
      "يعكس الهوية الثقافية الإماراتية",
      "جودة فنية عالية ومبتكرة",
    ],
    winners: [
      { name: "أحمد الزعابي", year: "2024", work: "تراث الصحراء" },
      { name: "فاطمة المنصوري", year: "2023", work: "ألوان الإمارات" },
      { name: "محمد الكعبي", year: "2022", work: "حكايات البحر" },
    ],
  },
  {
    id: 2,
    title: "جائزة الإبداع الشبابي",
    description: "جائزة مخصصة للمواهب الشابة في جميع المجالات الفنية والثقافية",
    image: "/placeholder.svg?height=400&width=600",
    category: "شباب",
    prize: "50,000 درهم",
    deadline: "30 نوفمبر 2025",
    icon: Star,
    color: "from-blue-500 to-cyan-600",
    criteria: ["العمر بين 16-30 سنة", "مشروع إبداعي مبتكر", "تأثير إيجابي على المجتمع", "إمكانية التطوير والتوسع"],
    winners: [
      { name: "سارة الشامسي", year: "2024", work: "مشروع الفن الرقمي" },
      { name: "عبدالله النعيمي", year: "2023", work: "موسيقى التراث المعاصر" },
      { name: "مريم الحوسني", year: "2022", work: "مسرح الشباب" },
    ],
  },
  {
    id: 3,
    title: "جائزة حفظ التراث الثقافي",
    description: "تكريم الجهود المتميزة في حفظ وتطوير التراث الثقافي الإماراتي",
    image: "/placeholder.svg?height=400&width=600",
    category: "تراث",
    prize: "75,000 درهم",
    deadline: "15 أكتوبر 2025",
    icon: Crown,
    color: "from-amber-500 to-orange-600",
    criteria: ["مشروع يحافظ على التراث", "استخدام وسائل مبتكرة", "توثيق علمي دقيق", "نقل المعرفة للأجيال الجديدة"],
    winners: [
      { name: "د. خليفة المرر", year: "2024", work: "أرشيف الشعر النبطي" },
      { name: "أمل الكندي", year: "2023", work: "حرف تراثية معاصرة" },
      { name: "سالم البلوشي", year: "2022", work: "موسيقى البحر" },
    ],
  },
  {
    id: 4,
    title: "جائزة الكتابة الإبداعية",
    description: "تشجيع المواهب الأدبية في الشعر والنثر والقصة القصيرة",
    image: "/placeholder.svg?height=400&width=600",
    category: "أدب",
    prize: "60,000 درهم",
    deadline: "28 فبراير 2026",
    icon: Pen,
    color: "from-green-500 to-emerald-600",
    criteria: [
      "عمل أدبي أصلي باللغة العربية",
      "جودة لغوية وأسلوبية عالية",
      "موضوع يثري الأدب العربي",
      "لم يسبق نشره أو فوزه بجوائز أخرى",
    ],
    winners: [
      { name: "هند المطيري", year: "2024", work: "ديوان أصوات الصحراء" },
      { name: "راشد الخوري", year: "2023", work: "رواية مدن الملح" },
      { name: "نورا السويدي", year: "2022", work: "مجموعة قصصية" },
    ],
  },
  {
    id: 5,
    title: "جائزة الابتكار في الفنون الرقمية",
    description: "تكريم الإبداعات المتميزة في مجال الفنون الرقمية والتكنولوجيا",
    image: "/placeholder.svg?height=400&width=600",
    category: "تكنولوجيا",
    prize: "80,000 درهم",
    deadline: "30 يناير 2026",
    icon: Monitor,
    color: "from-indigo-500 to-purple-600",
    criteria: ["استخدام تقنيات رقمية مبتكرة", "تفاعل مع الجمهور", "رسالة فنية واضحة", "إمكانية العرض والتطبيق"],
    winners: [
      { name: "عمر التميمي", year: "2024", work: "معرض الواقع الافتراضي" },
      { name: "ليلى الظاهري", year: "2023", work: "تطبيق الفن التفاعلي" },
      { name: "يوسف الحمادي", year: "2022", work: "منحوتات رقمية" },
    ],
  },
  {
    id: 6,
    title: "جائزة التأثير المجتمعي",
    description: "تقدير المشاريع الفنية التي تحدث تأثيراً إيجابياً في المجتمع",
    image: "/placeholder.svg?height=400&width=600",
    category: "مجتمع",
    prize: "90,000 درهم",
    deadline: "31 مارس 2026",
    icon: Users,
    color: "from-rose-500 to-pink-600",
    criteria: ["تأثير إيجابي واضح على المجتمع", "مشاركة مجتمعية واسعة", "استدامة المشروع", "قابلية التكرار والتوسع"],
    winners: [
      { name: "مجموعة الفن للجميع", year: "2024", work: "مشروع الفن في المدارس" },
      { name: "جمعية الثقافة المجتمعية", year: "2023", work: "مهرجان الأحياء" },
      { name: "فريق الإبداع الشبابي", year: "2022", work: "ورش الفن العلاجي" },
    ],
  },
]

export default function AwardsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-admaf-burgundy via-purple-900 to-admaf-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute top-20 left-10 w-40 h-40 bg-admaf-gold/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container relative z-10">
          <div className="text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <Trophy className="h-4 w-4 text-admaf-gold" />
              <span className="text-sm font-medium">جوائز مجموعة أبوظبي للثقافة والفنون</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-amiri bg-gradient-to-r from-white via-admaf-gold to-white bg-clip-text text-transparent">
              جوائزنا المرموقة
            </h1>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              نكرم الإبداع والتميز في جميع المجالات الفنية والثقافية من خلال جوائز سنوية مرموقة
            </p>
          </div>
        </div>
      </section>

      {/* Awards Categories */}
      <section className="py-20 bg-gradient-to-b from-white to-admaf-cream">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="text-center mb-12">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-6 bg-white shadow-lg rounded-full p-1">
                <TabsTrigger
                  value="all"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white text-xs"
                >
                  الكل
                </TabsTrigger>
                <TabsTrigger
                  value="arts"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white text-xs"
                >
                  فنون
                </TabsTrigger>
                <TabsTrigger
                  value="youth"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white text-xs"
                >
                  شباب
                </TabsTrigger>
                <TabsTrigger
                  value="heritage"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white text-xs"
                >
                  تراث
                </TabsTrigger>
                <TabsTrigger
                  value="literature"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white text-xs"
                >
                  أدب
                </TabsTrigger>
                <TabsTrigger
                  value="tech"
                  className="rounded-full data-[state=active]:bg-admaf-burgundy data-[state=active]:text-white text-xs"
                >
                  تقنية
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-12">
              <AwardsGrid awards={awards} />
            </TabsContent>

            <TabsContent value="arts" className="mt-12">
              <AwardsGrid awards={awards.filter((a) => a.category === "فنون بصرية")} />
            </TabsContent>

            <TabsContent value="youth" className="mt-12">
              <AwardsGrid awards={awards.filter((a) => a.category === "شباب")} />
            </TabsContent>

            <TabsContent value="heritage" className="mt-12">
              <AwardsGrid awards={awards.filter((a) => a.category === "تراث")} />
            </TabsContent>

            <TabsContent value="literature" className="mt-12">
              <AwardsGrid awards={awards.filter((a) => a.category === "أدب")} />
            </TabsContent>

            <TabsContent value="tech" className="mt-12">
              <AwardsGrid awards={awards.filter((a) => a.category === "تكنولوجيا")} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-admaf-charcoal mb-6 font-amiri">
              التقويم السنوي للجوائز
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تعرف على مواعيد التقديم والإعلان عن النتائج لجميع جوائزنا
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-admaf-burgundy to-purple-700 rounded-full" />

            <div className="space-y-12">
              {[
                { month: "أكتوبر", event: "إغلاق التقديم لجائزة التراث", color: "from-amber-500 to-orange-600" },
                { month: "نوفمبر", event: "إغلاق التقديم لجائزة الشباب", color: "from-blue-500 to-cyan-600" },
                { month: "ديسمبر", event: "إغلاق التقديم لجائزة الفنون البصرية", color: "from-purple-500 to-pink-600" },
                {
                  month: "يناير",
                  event: "إغلاق التقديم لجائزة الفنون الرقمية",
                  color: "from-indigo-500 to-purple-600",
                },
                { month: "فبراير", event: "إغلاق التقديم لجائزة الكتابة", color: "from-green-500 to-emerald-600" },
                { month: "مارس", event: "حفل توزيع الجوائز السنوي", color: "from-admaf-gold to-yellow-600" },
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
                        >
                          <Calendar className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-admaf-charcoal mb-2">{item.month}</h3>
                        <p className="text-gray-600">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-admaf-burgundy rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-admaf-burgundy to-purple-700 text-white">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <Trophy className="h-16 w-16 mx-auto mb-6 text-admaf-gold" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-amiri">شارك في جوائزنا المرموقة</h2>
            <p className="text-xl mb-8 opacity-90">
              انضم إلى نخبة الفائزين واحصل على التقدير الذي تستحقه لإبداعك وتميزك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-admaf-burgundy hover:bg-gray-100 px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <FileText className="h-5 w-5 ml-2" />
                تقديم طلب الترشح
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full backdrop-blur-sm"
              >
                دليل الجوائز والشروط
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function AwardsGrid({ awards }: { awards: typeof awards }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {awards.map((award, index) => (
        <Card
          key={award.id}
          className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative">
            <Image
              src={award.image || "/placeholder.svg"}
              alt={award.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge className={`bg-gradient-to-r ${award.color} text-white border-0`}>{award.category}</Badge>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${award.color} flex items-center justify-center`}
                >
                  <award.icon className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-bold">{award.title}</h3>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-4 text-sm">{award.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
              <div className="flex items-center gap-2">
                <DollarSign className="h-3 w-3 text-admaf-burgundy" />
                <span className="font-medium">{award.prize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-3 w-3 text-admaf-burgundy" />
                <span>{award.deadline}</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-sm mb-2">معايير التقييم:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {award.criteria.slice(0, 2).map((criterion, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <div className="w-1 h-1 bg-admaf-burgundy rounded-full mt-2 flex-shrink-0" />
                    {criterion}
                  </li>
                ))}
              </ul>
            </div>

            <Button className={`w-full bg-gradient-to-r ${award.color} hover:opacity-90 rounded-full`}>
              التقديم للجائزة
              <Award className="h-4 w-4 mr-2" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
