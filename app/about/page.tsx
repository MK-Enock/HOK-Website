import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, TrendingUp, Shield, Users2, Sparkles, Target } from "lucide-react"
import Navigation from "@/components/Navigation";

const values = [
  { 
    icon: Heart, 
    title: "Human-Centered Practice", 
    description: "We place people at the core of every strategy, recognizing that organizational success is built on human wellbeing." 
  },
  { 
    icon: TrendingUp, 
    title: "Restoration & Growth", 
    description: "We believe in the power of reflection, healing, and continuous development as foundations for sustainable success." 
  },
  { 
    icon: Shield, 
    title: "Integrity", 
    description: "We operate with honesty, accountability, and strong ethical grounding in every engagement." 
  },
  { 
    icon: Users2, 
    title: "Equity & Inclusion", 
    description: "We are committed to creating environments where diverse identities are respected, valued, and empowered." 
  },
  { 
    icon: Sparkles, 
    title: "Empowerment", 
    description: "We equip individuals and organizations with the tools, insight, and confidence to lead and grow intentionally." 
  },
  { 
    icon: Target, 
    title: "Impact-Driven Work", 
    description: "We focus on meaningful, measurable change that improves both individual experience and organizational effectiveness." 
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white mb-6">
                About Us
              </h1>
              <p className="text-lg text-[#C89A3D]">
                Bridging wellbeing and performance in the world of work.
              </p>
            </div>
          </div>
        </section>

        {/* About HOK */}
        <section className="py-16 lg:py-24 bg-[#F7F5F0]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-secondary mb-8">
                House of Khathutshelo
              </h2>
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="space-y-6 text-muted-foreground leading-relaxed ">
                  <p>
                    House of Khathutshelo is an independent workplace wellbeing and organizational development practice dedicated to supporting individuals, teams, and institutions to function with clarity, resilience, and purpose.
                  </p>
                  <p>
                    Rooted in Occupational Social Work, the practice takes a human-centered and systems-aware approach to the world of work, recognizing that employee wellbeing, leadership effectiveness, and organizational performance are deeply interconnected.
                  </p>
                  <p>
                    We work with organizations to strengthen workplace culture, develop leadership capacity, and design initiatives that support both individual growth and collective performance.
                  </p>
                  <p>
                    The name &ldquo;Khathutshelo,&rdquo; meaning forgiveness and mercy, reflects restoration, growth, and intentional development. It speaks to the belief that transformation, whether personal or organizational, requires both reflection and forward movement.
                  </p>
                  <p>
                    At its core, House of Khathutshelo exists to bridge the gap between wellbeing and performance, bringing together human understanding, structured strategy, and purposeful action to shape healthier, more effective workplaces.
                  </p>
                </div>
                <img src="/about_img_2.png" className="object-contain w-[500px]"/>
              </div>
            </div>
          </div>
        </section>

        {/* About Katu */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              <img src="/katu_2.png" className="object-contain w-[500px]"/>
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#C89A3D] mb-8">
                  About Katu Thyala
                </h2>
                <div className="space-y-6 text-white leading-relaxed">
                  <p>
                    Katu Thyala is a qualified and registered social worker with a Master&apos;s degree in Occupational Social Work, specializing in workplace wellbeing, leadership development, and organizational effectiveness.
                  </p>
                  <p>
                    With over five years of experience across employee assistance, healthcare, and corporate wellness environments, Katu brings a unique perspective that bridges human insight with organizational needs. Her work has spanned case management, employee support, and the design and facilitation of wellbeing and training initiatives for diverse teams and organizations.
                  </p>
                  <p>
                    Through her experience in high-pressure and people-centered environments, Katu developed a strong understanding of how workplace systems, leadership, and culture directly impact individual wellbeing and performance. This insight has shaped her approach, moving beyond one-on-one support toward broader, preventative, and developmental strategies within organizations.
                  </p>
                  <p>
                    Katu has facilitated wellbeing workshops, contributed to training and onboarding processes, and supported the implementation of psychosocial and employee wellness programs. Her work is grounded in practical, relatable engagement that enables individuals and teams to build resilience, strengthen capacity, and navigate the demands of the modern workplace.
                  </p>
                  <p className="font-medium text-[#C89A3D]">
                    She is driven by a clear belief: when organizations invest in people intentionally, both individuals and systems have the capacity to thrive.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-3xl font-semibold mb-6 text-secondary">
                  Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To shape a world of work where wellbeing, purpose, and performance coexist, enabling individuals and organizations to thrive sustainably.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-3xl font-semibold mb-6 text-secondary">
                  Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To support individuals and organizations through leadership development, workplace wellbeing strategies, and transformative learning experiences that foster resilience, growth, and human-centered workplaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#C89A3D] mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="bg-card p-6 rounded-lg border border-border">
                  <value.icon className={`h-8 w-8 mb-4 ${index % 2 === 0 ? 'text-accent' : 'text-primary'}`} />
                  <h3 className="font-medium text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-12">
                Professional Affiliations
              </h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-8">
                <div className="flex flex-col items-center gap-3">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F6NKMFUVWeyNtHKcXanl0LJaKVfdPx.png" 
                    alt="South African Council for Social Service Professions (SACSSP)" 
                    className="h-20 object-contain"
                  />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cikSff21N0E9UynlAm5L5WKW9zNpUS.png" 
                    alt="Board of Healthcare Funders (BHF) Southern Africa" 
                    className="h-14 object-contain"
                  />
                </div>
              </div>
              <p className="text-muted-foreground">
                Collaborating with multidisciplinary professionals and partners in workplace wellbeing and development
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
