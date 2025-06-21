import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, DollarSign, Users, ArrowLeft } from "lucide-react"

const programs = [
  {
    id: 1,
    title: "المبادرات التعليمية",
    description: "برامج تعليمية متنوعة تهدف إلى تنمية المواهب الفنية والثقافية",
    icon: GraduationCap,
    href: "/educational-programs/initiatives",
    image: "/placeholder.svg?height=300&width=400",
    features: ["ورش عمل متخصصة", "برامج تدريبية", "مناهج تعليمية"],
  },
  {
    id: 2,
    title: "جوائز مجموعة أبوظبي للثقافة والفنون",
    description: "جوائز سنوية لتكريم المبدعين والفنانين المتميزين",
    icon: Award,
    href: "/educational-programs/awards",
    image: "/placeholder.svg?height=300&width=400",
    features: ["جائزة الإبداع", "جائزة التميز", "جائزة الشباب"],
  },
  {
    id: 3,
    title: "المنح والدعم",
    description: "برامج دعم مالي للفنانين والمشاريع الثقافية",
    icon: DollarSign,
    href: "/educational-programs/grants",
    image: "/placeholder.svg?height=300&width=400",
    features: ["منح السفر", "دعم المشاريع", "منح البحث"],
  },
]

export default function EducationalProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-admaf-cream to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-admaf-charcoal mb-6 font-amiri">
              البرنامج التعليمي والمجتمعي
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              برامج شاملة لتنمية المواهب وتعزيز الثقافة والفنون في المجتمع
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-admaf-burgundy rounded-full flex items-center justify-center">
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-admaf-charcoal mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-admaf-burgundy rounded-full ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-admaf-burgundy hover:bg-admaf-burgundy/90">
                    <Link href={program.href}>
                      اكتشف المزيد
                      <ArrowLeft className="h-4 w-4 mr-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-admaf-charcoal text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-amiri">إنجازاتنا بالأرقام</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              نفخر بما حققناه من إنجازات في مجال التعليم والتنمية الثقافية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-admaf-gold mb-2">500+</div>
              <div className="text-gray-300">مستفيد من البرامج</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-admaf-gold mb-2">50+</div>
              <div className="text-gray-300">ورشة عمل سنوياً</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-admaf-gold mb-2">25+</div>
              <div className="text-gray-300">جائزة سنوياً</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-admaf-gold mb-2">100+</div>
              <div className="text-gray-300">منحة دراسية</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-admaf-charcoal mb-4 font-amiri">انضم إلى برامجنا التعليمية</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              اكتشف الفرص المتاحة وكن جزءاً من مجتمع الفنون والثقافة في أبوظبي
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-admaf-burgundy hover:bg-admaf-burgundy/90">
                <Users className="h-4 w-4 ml-2" />
                التسجيل في البرامج
              </Button>
              <Button size="lg" variant="outline">
                تحميل الدليل الشامل
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
