import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Handshake, Globe, Award, Users, ArrowRight, Star, Building, Heart } from "lucide-react"

const partnerCategories = [
  {
    id: 1,
    title: "الشركاء الاستراتيجيون",
    description: "شراكات طويلة المدى مع مؤسسات ثقافية عالمية",
    icon: Handshake,
    color: "from-admaf-burgundy to-purple-700",
    partners: [
      { name: "متحف اللوفر أبوظبي", logo: "/placeholder.svg?height=80&width=120", country: "الإمارات" },
      { name: "المتحف البريطاني", logo: "/placeholder.svg?height=80&width=120", country: "المملكة المتحدة" },
      { name: "مركز بومبيدو", logo: "/placeholder.svg?height=80&width=120", country: "فرنسا" },
      { name: "متحف الأرميتاج", logo: "/placeholder.svg?height=80&width=120", country: "روسيا" },
    ],
  },
  {
    id: 2,
    title: "الشركاء الأكاديميون",
    description: "تعاون مع الجامعات والمؤسسات التعليمية",
    icon: Users,
    color: "from-blue-600 to-purple-600",
    partners: [
      { name: "جامعة نيويورك أبوظبي", logo: "/placeholder.svg?height=80&width=120", country: "الإمارات" },
      { name: "الجامعة الأمريكية في الشارقة", logo: "/placeholder.svg?height=80&width=120", country: "الإمارات" },
      { name: "جامعة السوربون أبوظبي", logo: "/placeholder.svg?height=80&width=120", country: "الإمارات" },
      { name: "معهد الفنون الجميلة", logo: "/placeholder.svg?height=80&width=120", country: "لبنان" },
    ],
  },
  {
    id: 3,
    title: "الشركاء الإعلاميون",
    description: "تعاون إعلامي لنشر الثقافة والفنون",
    icon: Globe,
    color: "from-green-600 to-teal-600",
    partners: [
      { name: "تلفزيون أبوظبي", logo: "/placeholder.svg?height=80&width=120", country: "الإمارات" },
      { name: "مجلة الفنون", logo: "/placeholder.svg?height=80&width=120", country: "الإمارات" },
      { name: "راديو الإمارات", logo: "/placeholder.svg?height=80&width=120", country: "الإمارات" },
      { name: "صحيفة الاتحاد", logo: "/placeholder.svg?height=80&width=120", country: "الإمارات" },
    ],
  },
  {
    id: 4,
    title: "الرعاة والداعمون",
    description: "شركاء يدعمون رؤيتنا الثقافية",
    icon: Award,
    color: "from-admaf-gold to-yellow-600",
    partners: [
      { name: "بنك الإمارات دبي الوطني", logo: "/placeholder.svg?height=80&width=120", country: "الإمارات" },
      { name: "شركة الإمارات للطيران", logo: "/placeholder.svg?height=80&width=120", country: "الإمارات" },
      { name: "مجموعة الإمارات", logo: "/placeholder.svg?height=80&width=120", country: "الإمارات" },
      { name: "شركة أدنوك", logo: "/placeholder.svg?height=80&width=120", country: "الإمارات" },
    ],
  },
]

const successStories = [
  {
    id: 1,
    title: "معرض الحضارات المتقاطعة",
    description: "تعاون مع متحف اللوفر أبوظبي لإقامة معرض استثنائي",
    image: "https://admaf.org/wp-content/uploads/2023/12/logo-dolphin.png",
    partner: "متحف اللوفر أبوظبي",
    year: "2024",
    visitors: "50,000 زائر",
  },
  {
    id: 2,
    title: "برنامج تبادل الفنانين",
    description: "برنامج تبادل ثقافي مع المتحف البريطاني",
    image: "https://admaf.org/wp-content/uploads/2023/12/dolce.jpg",
    partner: "المتحف البريطاني",
    year: "2023",
    visitors: "25 فنان",
  },
  {
    id: 3,
    title: "مؤتمر الفنون الرقمية",
    description: "مؤتمر دولي بالتعاون مع جامعة نيويورك أبوظبي",
    image: "https://admaf.org/wp-content/uploads/2023/12/total-energy-logo.png",
    partner: "جامعة نيويورك أبوظبي",
    year: "2024",
    visitors: "500 مشارك",
  },
]

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-admaf-burgundy via-purple-900 to-admaf-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute top-20 left-10 w-40 h-40 bg-admaf-gold/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container relative z-10">
          <div className="text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <Handshake className="h-4 w-4 text-admaf-gold" />
              <span className="text-sm font-medium">الشراكات في الرؤية الثقافية</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-amiri bg-gradient-to-r from-white via-admaf-gold to-white bg-clip-text text-transparent">
              شركاؤنا في النجاح
            </h1>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              نفخر بشراكاتنا الاستراتيجية مع أبرز المؤسسات الثقافية والتعليمية حول العالم
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="py-20 bg-gradient-to-b from-white to-admaf-cream">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-admaf-charcoal mb-6 font-amiri">فئات الشراكة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتعاون مع مختلف أنواع المؤسسات لتحقيق رؤيتنا الثقافية والفنية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <Card
                key={category.id}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-admaf-charcoal">{category.title}</h3>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {category.partners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            width={48}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-admaf-charcoal truncate">{partner.name}</div>
                          <div className="text-xs text-gray-500">{partner.country}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-2 hover:border-admaf-burgundy hover:text-admaf-burgundy rounded-xl"
                  >
                    عرض جميع الشركاء
                    <ArrowRight className="h-4 w-4 mr-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-admaf-charcoal mb-6 font-amiri">قصص نجاح الشراكات</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مشاريع ناجحة حققناها بالتعاون مع شركائنا الاستراتيجيين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={story.id}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-admaf-gold text-admaf-charcoal">
                      <Star className="h-3 w-3 ml-1" />
                      {story.year}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{story.title}</h3>
                    <p className="text-sm opacity-90">{story.visitors}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-admaf-burgundy" />
                      <span className="text-sm font-medium text-admaf-burgundy">{story.partner}</span>
                    </div>
                    <Button size="sm" variant="outline" className="rounded-full">
                      التفاصيل
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-br from-admaf-cream to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-admaf-charcoal mb-6 font-amiri">مزايا الشراكة معنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              انضم إلى شبكة شركائنا واستفد من الفرص الثقافية والفنية المتميزة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "وصول عالمي",
                description: "شبكة واسعة من الشركاء الدوليين",
                color: "from-blue-500 to-purple-600",
              },
              {
                icon: Users,
                title: "تبادل الخبرات",
                description: "فرص للتعلم والتطوير المهني",
                color: "from-green-500 to-teal-600",
              },
              {
                icon: Heart,
                title: "تأثير مجتمعي",
                description: "مساهمة في إثراء المشهد الثقافي",
                color: "from-pink-500 to-rose-600",
              },
              {
                icon: Award,
                title: "تقدير وإشادة",
                description: "اعتراف بالمساهمات الثقافية",
                color: "from-admaf-gold to-yellow-600",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-6`}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-admaf-charcoal mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-admaf-burgundy to-purple-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-amiri">كن شريكاً في رحلتنا الثقافية</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            انضم إلى مجتمع الشركاء المتميزين وساهم في تشكيل مستقبل الفنون والثقافة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-admaf-burgundy hover:bg-gray-100 px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Handshake className="h-5 w-5 ml-2" />
              ابدأ الشراكة
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full backdrop-blur-sm"
            >
              تحميل دليل الشراكات
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
