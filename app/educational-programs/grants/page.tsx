import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, FileText, CheckCircle } from "lucide-react"

export default function GrantsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-admaf-cream to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-admaf-charcoal mb-6 font-amiri">دعم التنقل الدولي</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              برنامج دعم مالي للفنانين والمبدعين لحضور الفعاليات الدولية والمشاركة في التبادل الثقافي
            </p>
          </div>
        </div>
      </section>

      {/* Grant Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-admaf-charcoal mb-6 font-amiri">تفاصيل المنحة</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    يهدف برنامج دعم التنقل الدولي إلى تمكين الفنانين والمبدعين الإماراتيين من المشاركة في الفعاليات
                    الثقافية والفنية الدولية، وتعزيز التبادل الثقافي بين دولة الإمارات والعالم.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    تغطي المنحة تكاليف السفر والإقامة والمشاركة في المؤتمرات والمعارض والفعاليات الثقافية المختلفة، مما
                    يتيح للمستفيدين فرصة التعلم والتطوير المهني على المستوى الدولي.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-admaf-charcoal mt-8 mb-4">المبادئ التوجيهية للبرنامج</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-admaf-charcoal">مجالات التمويل</h4>
                      <p className="text-sm text-gray-600">الفنون البصرية، الموسيقى، المسرح، الأدب، والفنون التراثية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-admaf-charcoal">الشروط</h4>
                      <p className="text-sm text-gray-600">أن يكون المتقدم مواطناً إماراتياً أو مقيماً في دولة الإمارات</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-admaf-charcoal">التطبيقات</h4>
                      <p className="text-sm text-gray-600">عملية التصوير</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-admaf-charcoal">معايير الاختيار</h4>
                      <p className="text-sm text-gray-600">جودة المشروع والأثر المتوقع على التطوير المهني</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-admaf-charcoal">لجنة التحكيم</h4>
                      <p className="text-sm text-gray-600">خبراء في المجالات الفنية والثقافية المختلفة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-admaf-charcoal">الشروط والأحكام</h4>
                      <p className="text-sm text-gray-600">تقديم تقرير مفصل عن النشاط بعد العودة</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Previous Winners */}
              <Card className="p-8">
                <h3 className="text-xl font-bold text-admaf-charcoal mb-6">الفائزون السابقون</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="text-center">
                      <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-2 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt={`فائز ${i}`}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-medium text-sm">فائز {i}</h4>
                      <p className="text-xs text-gray-600">فنان تشكيلي</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Grant Amount */}
              <Card className="p-6 bg-admaf-burgundy text-white">
                <div className="text-center">
                  <DollarSign className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">مبلغ المنحة</h3>
                  <div className="text-3xl font-bold mb-2">حتى 50,000 درهم</div>
                  <p className="text-sm opacity-90">يتراوح مبلغ المنحة من 5,000 إلى 50,000 درهم حسب طبيعة المشروع</p>
                </div>
              </Card>

              {/* Important Dates */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-admaf-charcoal mb-4">التواريخ والمواعيد النهائية المهمة</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-admaf-burgundy" />
                    <div>
                      <div className="font-medium text-sm">01 تاريخ 1 سبتمبر 2024</div>
                      <div className="text-xs text-gray-600">بداية فترة التقديم</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-admaf-burgundy" />
                    <div>
                      <div className="font-medium text-sm">02 آخر موعد للتقديم 1 ديسمبر 2024</div>
                      <div className="text-xs text-gray-600">الموعد النهائي للتقديم</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-admaf-burgundy" />
                    <div>
                      <div className="font-medium text-sm">03 إعلان النتائج 15 يناير 2025</div>
                      <div className="text-xs text-gray-600">إعلان أسماء الفائزين</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-admaf-charcoal mb-4">الاتصال والمعلومات</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-admaf-burgundy" />
                    <span className="text-sm">قسم التربية والبحوث</span>
                  </div>
                  <div className="text-sm text-gray-600">education@admaf.org</div>
                  <div className="text-sm text-gray-600">97023336450+</div>
                </div>
              </Card>

              {/* Apply Button */}
              <Button className="w-full bg-admaf-burgundy hover:bg-admaf-burgundy/90 py-3">تقديم طلب المنحة</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
