import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-admaf-burgundy via-purple-900 to-admaf-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute top-10 right-10 w-40 h-40 bg-admaf-gold/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-amiri bg-gradient-to-r from-white via-admaf-gold to-white bg-clip-text text-transparent">
              تواصل معنا
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              نحن هنا للإجابة على استفساراتكم ومساعدتكم في رحلتكم الثقافية والفنية
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gradient-to-b from-white to-admaf-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-admaf-charcoal mb-4 font-amiri">أرسل لنا رسالة</h2>
                    <p className="text-gray-600">سنكون سعداء للتواصل معك والإجابة على جميع استفساراتك</p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-admaf-charcoal">الاسم الكامل *</label>
                        <Input
                          className="h-12 border-2 border-gray-200 focus:border-admaf-burgundy rounded-xl"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-admaf-charcoal">البريد الإلكتروني *</label>
                        <Input
                          type="email"
                          className="h-12 border-2 border-gray-200 focus:border-admaf-burgundy rounded-xl"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-admaf-charcoal">رقم الهاتف</label>
                        <Input
                          className="h-12 border-2 border-gray-200 focus:border-admaf-burgundy rounded-xl"
                          placeholder="+971 50 123 4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-admaf-charcoal">نوع الاستفسار</label>
                        <Select>
                          <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-admaf-burgundy rounded-xl">
                            <SelectValue placeholder="اختر نوع الاستفسار" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">استفسار عام</SelectItem>
                            <SelectItem value="events">الفعاليات والأنشطة</SelectItem>
                            <SelectItem value="festival">مهرجان أبوظبي</SelectItem>
                            <SelectItem value="education">البرامج التعليمية</SelectItem>
                            <SelectItem value="partnerships">الشراكات</SelectItem>
                            <SelectItem value="media">الإعلام والصحافة</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-admaf-charcoal">الموضوع *</label>
                      <Input
                        className="h-12 border-2 border-gray-200 focus:border-admaf-burgundy rounded-xl"
                        placeholder="موضوع الرسالة"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-admaf-charcoal">الرسالة *</label>
                      <Textarea
                        className="min-h-32 border-2 border-gray-200 focus:border-admaf-burgundy rounded-xl resize-none"
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>

                    <Button className="w-full h-12 bg-gradient-to-r from-admaf-burgundy to-purple-700 hover:from-admaf-burgundy/90 hover:to-purple-700/90 rounded-xl text-lg font-medium shadow-lg transform hover:scale-105 transition-all duration-300">
                      <Send className="h-5 w-5 ml-2" />
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-admaf-burgundy to-purple-700 text-white overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 font-amiri">معلومات التواصل</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">الهاتف</div>
                          <div className="text-sm opacity-90">+971 2 333 6450</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">البريد الإلكتروني</div>
                          <div className="text-sm opacity-90">info@admaf.org</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">العنوان</div>
                          <div className="text-sm opacity-90">أبوظبي، دولة الإمارات العربية المتحدة</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="shadow-xl border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-admaf-charcoal mb-4 font-amiri flex items-center gap-2">
                    <Clock className="h-5 w-5 text-admaf-burgundy" />
                    ساعات العمل
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">الأحد - الخميس</span>
                      <span className="text-admaf-burgundy">8:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">الجمعة</span>
                      <span className="text-gray-500">مغلق</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">السبت</span>
                      <span className="text-gray-500">مغلق</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-xl border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-admaf-charcoal mb-4 font-amiri">إجراءات سريعة</h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12 border-2 hover:border-admaf-burgundy hover:text-admaf-burgundy rounded-xl"
                    >
                      <MessageCircle className="h-4 w-4 ml-2" />
                      دردشة مباشرة
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12 border-2 hover:border-admaf-burgundy hover:text-admaf-burgundy rounded-xl"
                    >
                      <Calendar className="h-4 w-4 ml-2" />
                      حجز موعد
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12 border-2 hover:border-admaf-burgundy hover:text-admaf-burgundy rounded-xl"
                    >
                      <Users className="h-4 w-4 ml-2" />
                      زيارة المركز
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-admaf-charcoal mb-4 font-amiri">موقعنا</h2>
            <p className="text-gray-600">تفضلوا بزيارتنا في مقر مركز أبو ظبي للفنون والثقافة</p>
          </div>
          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>خريطة تفاعلية لموقع المركز</p>
                <p className="text-sm">أبوظبي، دولة الإمارات العربية المتحدة</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
