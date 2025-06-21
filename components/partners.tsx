import Image from "next/image"

// بيانات نموذجية للشركاء
const partnersData = [
  { id: 1, name: "شريك 1", logo: "/placeholder.svg?height=80&width=120" },
  { id: 2, name: "شريك 2", logo: "/placeholder.svg?height=80&width=120" },
  { id: 3, name: "شريك 3", logo: "/placeholder.svg?height=80&width=120" },
  { id: 4, name: "شريك 4", logo: "/placeholder.svg?height=80&width=120" },
  { id: 5, name: "شريك 5", logo: "/placeholder.svg?height=80&width=120" },
  { id: 6, name: "شريك 6", logo: "/placeholder.svg?height=80&width=120" },
  { id: 7, name: "شريك 7", logo: "/placeholder.svg?height=80&width=120" },
  { id: 8, name: "شريك 8", logo: "/placeholder.svg?height=80&width=120" },
]

export function Partners() {
  return (
    <section className="border-t py-16">
      <div className="container">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-xl font-bold">الشركاء في الرؤية الثقافية</h2>
          <div className="rounded-full bg-black p-2 text-white">
            <span className="text-sm">المزيد</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-8">
          {partnersData.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={80}
                className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
