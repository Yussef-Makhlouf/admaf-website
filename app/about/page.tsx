import { PageHero } from "@/components/section/page-hero"
import { StatsGrid } from "@/components/section/stats-grid"
import { ArabicCalligraphyStroke } from "@/components/ui/calligraphy-strokes"
import { Button } from "@/components/ui/button"
import { Founders } from "@/components/about/founders"

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Our Vision"
        subtitle="About ADMAF"
        description="Founded in 1996, ADMAF is one of the oldest cultural organizations in the Arabian Gulf. Pioneering new artistic practices, it seeks to deepen global cross-cultural dialogue."
        image="/intimate-literary-event-space-with-arabic-calligra.jpg"
      />

      {/* Main Content - Asymmetric Split */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/intimate-literary-event-space-with-arabic-calligra.jpg')" }}
              />
            </div>
            {/* Strict Red Border Frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-admaf-red -z-10" />
          </div>

          {/* Text Side */}
          <div className="space-y-12">
            <div className="relative">
              <ArabicCalligraphyStroke className="absolute -top-10 -left-10 w-40 text-admaf-red opacity-10" />
              <h2 className="text-4xl font-display text-admaf-red leading-tight">
                Investing in the <br /> Future of Culture
              </h2>
            </div>

            <div className="space-y-6 text-lg text-admaf-black/80 font-light leading-relaxed">
              <p>
                We are dedicated to the advancement of knowledge, of development, of culture and of creativity. We believe that culture is the soul of a nation, and art is its voice.
              </p>
            </div>

            <Button variant="outline" className="border-admaf-red text-admaf-red hover:bg-admaf-red hover:text-white rounded-none px-10 h-14">
              Read Full History
            </Button>
          </div>
        </div>
      </section>

      <Founders />

      <StatsGrid
        stats={[
          { value: "1996", label: "Founded" },
          { value: "25+", label: "Years of Legacy" },
          { value: "100+", label: "Commissions" },
          { value: "50k+", label: "Students Reached" }
        ]}
      />

      {/* Values Section */}
      <section className="bg-white py-32 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display text-admaf-red">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {['Dialogue', 'Tolerance', 'Respect', 'Peace'].map((value, i) => (
            <div key={i} className="group border border-admaf-red/10 p-12 hover:bg-admaf-red hover:text-white transition-colors duration-500 text-center">
              <h3 className="text-2xl font-display tracking-widest">{value}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
