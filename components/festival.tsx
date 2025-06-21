import Image from "next/image"

export function Festival() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">مهرجان أبوظبي</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-lg">
              يعد مهرجان أبوظبي أحد أهم الفعاليات الثقافية والفنية في المنطقة، حيث يجمع نخبة من الفنانين والمبدعين من
              مختلف أنحاء العالم. تأسس المهرجان في عام 2004، وأصبح منصة مهمة لتبادل الثقافات والفنون.
            </p>
            <p className="text-lg">
              يقدم المهرجان سنوياً باقة متنوعة من العروض الفنية والموسيقية والمسرحية، إضافة إلى المعارض والندوات وورش
              العمل التي تثري المشهد الثقافي في أبوظبي والمنطقة.
            </p>
            <p className="text-lg">
              يسعى المهرجان إلى تعزيز الحوار الثقافي وتقديم تجارب فنية فريدة للجمهور، مع التركيز على دعم المواهب المحلية
              والعربية وتقديمها إلى العالم.
            </p>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=600&width=800" alt="مهرجان أبوظبي" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
