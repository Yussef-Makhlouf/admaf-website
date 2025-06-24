import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart, Globe } from "lucide-react"
import { Partners } from "@/components/partners"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* نبذة عنا */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-amiri">نبذة عنا</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              مركز أبو ظبي للفنون والثقافة - منارة للإبداع والفنون في المنطقة العربية، ومركز للتبادل الثقافي والفني بين مختلف الثقافات والحضارات.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image src="https://admaf.org/wp-content/uploads/2024/03/Leia-…i-at-Abu-Dhabi-Festival.-20-March-2023-scaled.jpg" alt="صورة جماعية" width={400} height={300} className="rounded-lg shadow-lg w-full object-cover" />
            </div>
            <div className="order-1 md:order-2 col-span-1 md:col-span-1 flex flex-col items-center justify-center">
              <p className="text-base text-gray-700 leading-loose text-justify">
                تأسس مركز أبو ظبي للفنون والثقافة عام 1996 بهدف تعزيز المشهد الثقافي والفني في دولة الإمارات والمنطقة العربية. نسعى إلى دعم المواهب المحلية والعربية وتقديمها إلى العالم، وتوفير منصة للحوار الثقافي والفني بين مختلف الثقافات والحضارات. يقدم المركز العديد من البرامج والفعاليات الثقافية والفنية، بما في ذلك المعارض والندوات وورش العمل والمهرجانات، إضافة إلى برامج تعليمية وتدريبية في مجالات الفنون المختلفة.
              </p>
            </div>
            <div className="order-3 md:order-3">
              <Image src="https://admaf.org/wp-content/uploads/2023/11/activity-detail.webp" alt="عازفة كمان" width={400} height={300} className="rounded-lg shadow-lg w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* الراعي */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 font-amiri">الراعي</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Image src="/about-patron.jpg" alt="الراعي" width={350} height={350} className="rounded-lg shadow-md w-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">سمو الشيخة هند بنت زايد آل نهيان</h3>
              <p className="text-gray-700 leading-relaxed">
                راعية مركز أبو ظبي للفنون والثقافة، تقود سموها رؤية المركز نحو تعزيز الفنون والثقافة في دولة الإمارات والمنطقة العربية، وتدعم جميع المبادرات التي تهدف إلى إثراء المشهد الثقافي والفني.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* المؤسس */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 font-amiri">المؤسس</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 order-2 md:order-1">
              <Image src="https://admaf.org/wp-content/uploads/2024/06/Approved-1-scaled-e1719296551455.jpg" alt="المؤسس" width={350} height={350} className="rounded-lg shadow-md w-full object-cover" />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h3 className="text-xl font-bold mb-2">سعادة هدى إبراهيم الخميس</h3>
              <p className="text-gray-700 leading-relaxed">
                المؤسس الفخري لمركز أبو ظبي للفنون والثقافة، صاحبة الرؤية الملهمة والدعم المستمر لمسيرة المركز في خدمة الفنون والثقافة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* مجلس الأمناء */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-amiri text-center">مجلس الأمناء</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-800">د. محمد أحمد الجابر</span>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-800">د. علي بن تميم</span>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-800">د. رفيعة غباش</span>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-800">أ. مريم المهيري</span>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-800">د. يوسف الحسن</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <Image 
                src="/about-board.jpg" 
                alt="مجلس الأمناء" 
                width={400} 
                height={300} 
                className="rounded-lg shadow-lg w-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* المستشارين */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 font-amiri text-center relative">
            <span className="relative inline-block">
              المستشارين
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform -translate-y-2"></span>
            </span>
          </h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-12 min-w-max px-4">
              <div className="flex flex-col items-center group">
                <div className="relative">
                  <Image 
                    src="/advisor1.jpg" 
                    alt="مستشار 1" 
                    width={150} 
                    height={150} 
                    className="rounded-full shadow-lg mb-4 transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <span className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">د. أحمد الزعابي</span>
                <span className="text-sm text-gray-600">مستشار ثقافي</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="relative">
                  <Image 
                    src="/advisor2.jpg" 
                    alt="مستشار 2" 
                    width={150} 
                    height={150} 
                    className="rounded-full shadow-lg mb-4 transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <span className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">أ. ليلى الكعبي</span>
                <span className="text-sm text-gray-600">مستشارة فنون</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="relative">
                  <Image 
                    src="/advisor3.jpg" 
                    alt="مستشار 3" 
                    width={150} 
                    height={150} 
                    className="rounded-full shadow-lg mb-4 transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <span className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">د. سامي الحوسني</span>
                <span className="text-sm text-gray-600">مستشار إعلامي</span>
              </div>
              {/* أضف المزيد حسب الحاجة */}
            </div>
          </div>
        </div>
      </section>

      {/* الرؤية */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 font-amiri">الرؤية</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image src="https://admaf.org/wp-content/uploads/2024/03/1-scaled.jpg" alt="الرؤية 1" width={350} height={250} className="rounded-lg shadow-md w-full object-cover mb-4" />
              <Image src="https://admaf.org/wp-content/uploads/2024/03/11-scaled.jpg" alt="الرؤية 2" width={350} height={250} className="rounded-lg shadow-md w-full object-cover" />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                أن نكون منارة للإبداع والفنون في المنطقة العربية، ونساهم في بناء مجتمع ثقافي متنوع ومزدهر.
              </p>
              <p className="text-gray-700 leading-relaxed">
                تعزيز التبادل الثقافي والفني مع مختلف الثقافات والحضارات حول العالم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* الركائز الاستراتيجية */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 font-amiri">الركائز الاستراتيجية</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="font-bold mb-2">01. تطوير البرامج والمبادرات</h3>
              <p className="text-gray-700 mb-4">التركيز على إثراء المشهد الثقافي والفني من خلال إطلاق برامج ومبادرات نوعية تلبي احتياجات المجتمع.</p>
              <h3 className="font-bold mb-2">02. الشراكات والتعاون</h3>
              <p className="text-gray-700 mb-4">تعزيز التعاون مع المؤسسات المحلية والدولية لتحقيق الأهداف المشتركة.</p>
              <h3 className="font-bold mb-2">03. الاستدامة والتطوير المؤسسي</h3>
              <p className="text-gray-700">ضمان استدامة المركز وتطوير قدراته المؤسسية لمواكبة التغيرات.</p>
            </div>
            <div>
              <Image src="https://admaf.org/wp-content/uploads/2023/11/pillars.webp" alt="الركائز الاستراتيجية" width={400} height={300} className="rounded-lg shadow-md w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </div>
  )
}
