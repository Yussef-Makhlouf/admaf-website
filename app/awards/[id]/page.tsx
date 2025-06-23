import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// بيانات الجوائز (يفضل لاحقاً جلبها من API أو قاعدة بيانات)
const awardsData = [
  {
    id: "1",
    title: "جائزة التصميم المستدام من توتال للطاقات",
    image: "https://admaf.org/wp-content/uploads/2024/01/agro-industrialtourism-jpg.png",
    description:"تقديراً للابتكار المتميز والإنجاز الذي يحققه الشباب الإماراتي في التصميم والهندسة المعمارية المستدامة، تعمل جائزة التصميم المستدام من توتال للطاقات والتي تبلغ قيمتها 10,000 درهم إماراتي على الإسهام في رعاية المواهب الإبداعية ذات الأبعاد البيئية المستدامة للمستقبل. وتوفر الجائزة منصة انطلاق للمصممين والمهندسين المعماريين الناشئين في دولة الإمارات العربية المتحدة، وتشجع الابتكار في مجال الاستدامة الحيوي. يجب أن تتناول التصاميم المقدّمة واحدةً على الأقل من الركائز الأساسية الثلاث للاستدامة: الاقتصادية والبيئية والاجتماعية.سيتم عرض العمل الفائز ضمن فعاليات مهرجان أبوظبي.",
    criteria: [
      "أن يكون المتقدم من مواطني دولة الإمارات العربية المتحدة",
      "أن يكون العمل الفني أصلياً وغير منشور من قبل",
      "أن يتناول العمل الفني موضوعاً يتعلق بالثقافة والهوية الإماراتية",
    ],
    deadline: "31 ديسمبر 2025",
    prize: "50,000 درهم",
    winners: [
      { name: "أسماء الزعابي", year: "2023", work: "لوحة الأمل" },
      { name: "سعيد المنصوري", year: "2022", work: "فن الصحراء" },
    ],
  },
  {
    id: "2",
    title: "جائزة الإبداع من جلف كابيتال – مجموعة أبوظبي للثقافة والفنون",
    image: "https://admaf.org/wp-content/uploads/2024/01/gcmoixg2abwem5jzxvfe.png",
    description:"تُكرّم الجائزة التميز الإبداعي بين الشباب في الفنون الأدائية. التقديم مفتوح للأفراد والمجموعات (مع شرط مشاركة إماراتي واحد على الأقل)، من الطلبة والشباب الذين يقومون بإنشاء مقطوعة أداء متميزة في هذا النوع من الموسيقى أو الرقص أو الكلمة المنطوقة أو المسرح. ستتاح للمتأهلين للتصفيات النهائية فرصة مثيرة للأداء أمام جمهور حي والتنافس على جائزة نقدية تبلغ قيمتها 20 ألف درهم إماراتي",
        criteria: [
      "أن يكون المتقدم من مواطني دولة الإمارات العربية المتحدة",
      "أن يتراوح عمر المتقدم بين 18 و25 عاماً",
      "أن يكون العمل الفني أصلياً وغير منشور من قبل",
    ],
    deadline: "30 نوفمبر 2025",
    prize: "30,000 درهم",
    winners: [
      { name: "مريم سعيد", year: "2023", work: "إبداع رقمي" },
      { name: "خالد علي", year: "2022", work: "مسرح الشباب" },
    ],
  },
  {
    id: "3",
    title: "جائزة التراث الثقافي",
    image: "https://admaf.org/wp-content/uploads/2024/01/59b63515328705.56290440ae53a.gif",
    description:
      "جائزة تكرم المشاريع التي تحافظ على التراث الثقافي الإماراتي والعربي، وتسهم في نقله إلى الأجيال القادمة بطرق إبداعية ومبتكرة.",
    criteria: [
      "أن يكون المشروع متعلقاً بالتراث الثقافي الإماراتي أو العربي",
      "أن يسهم المشروع في الحفاظ على التراث ونقله إلى الأجيال القادمة",
      "أن يتميز المشروع بالإبداع والابتكار في طريقة عرض التراث",
    ],
    deadline: "15 أكتوبر 2025",
    prize: "40,000 درهم",
    winners: [
      { name: "سارة الكندي", year: "2023", work: "حكايات الأجداد" },
      { name: "يوسف البلوشي", year: "2022", work: "تراثنا الحي" },
    ],
  },
]

export default function AwardDetailsPage({ params }: { params: { id: string } }) {
  const award = awardsData.find((a) => a.id === params.id)
  if (!award) return notFound()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-tr from-admaf-burgundy to-admaf-gold py-16 text-white shadow-lg">
        <div className="container flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">{award.title}</h1>
            <p className="mb-6 text-lg md:text-xl font-light max-w-xl drop-shadow-sm">{award.description}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="rounded-lg bg-white/20 px-4 py-2 text-lg font-bold shadow">الجائزة: <span className="text-admaf-gold">{award.prize}</span></div>
              <div className="rounded-lg bg-white/20 px-4 py-2 text-lg font-bold shadow">آخر موعد: <span className="text-admaf-gold">{award.deadline}</span></div>
            </div>
            <Button className="bg-admaf-gold text-admaf-burgundy font-bold px-8 py-3 text-lg rounded-lg shadow hover:bg-admaf-burgundy hover:text-white transition">التقديم للجائزة</Button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-admaf-gold">
              <Image src={award.image} alt={award.title} width={500} height={350} className="object-cover w-full h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Criteria & Details */}
      <section className="container py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-admaf-burgundy">شروط التقديم</h2>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            {award.criteria.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details">
              <AccordionTrigger className="text-lg font-bold text-admaf-burgundy">تفاصيل إضافية</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">للمزيد من المعلومات حول الجائزة، يرجى التواصل مع فريقنا أو زيارة الموقع الرسمي.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Winners Section */}
      {award.winners && (
        <section className="container py-10">
          <h2 className="text-2xl font-bold mb-6 text-admaf-burgundy">الفائزون السابقون</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {award.winners.map((winner, idx) => (
              <Card key={idx} className="bg-white/80 border-admaf-gold border-2 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-admaf-burgundy mb-2">{winner.name}</h3>
                  <div className="text-gray-700 mb-1">{winner.work}</div>
                  <div className="text-sm text-gray-500">{winner.year}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="container py-12">
        <div className="bg-admaf-burgundy/90 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold mb-2">للتواصل والاستفسار</h3>
            <p className="mb-2">راسلنا عبر البريد الإلكتروني أو تواصل معنا لأي استفسار حول الجائزة.</p>
            <a href="mailto:education@admaf.org" className="underline text-admaf-gold font-bold">education@admaf.org</a>
          </div>
          <Button className="bg-admaf-gold text-admaf-burgundy font-bold px-8 py-3 text-lg rounded-lg shadow hover:bg-white hover:text-admaf-burgundy transition">تواصل معنا</Button>
        </div>
      </section>
    </div>
  )
} 