import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Building2, GraduationCap, MessageSquare, Mic, Globe, ArrowRight, Heart, TrendingUp, Shield, Users2, Sparkles, Target } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Organizational Wellbeing & Development",
    description: "Leadership development, training & facilitation, workplace wellbeing initiatives",
  },
  {
    icon: Users,
    title: "Individual Development & Career Growth",
    description: "Career coaching, graduate readiness, workplace readiness, professional development",
  },
  {
    icon: GraduationCap,
    title: "Workplace Training & Facilitation",
    description: "Custom-designed workshops on mental health, resilience, communication, and team functioning",
  },
  {
    icon: MessageSquare,
    title: "Workplace Debriefing & Support",
    description: "Structured support for teams in high-pressure or transitional environments",
  },
  {
    icon: Mic,
    title: "Speaking Engagements",
    description: "Talks on workplace wellbeing, leadership, and the future of work",
  },
  {
    icon: Globe,
    title: "Online & Onsite Delivery",
    description: "Flexible services delivered both online and onsite depending on client needs",
  },
]

const values = [
  { icon: Heart, title: "Human-Centered Practice", description: "People at the core of every strategy" },
  { icon: TrendingUp, title: "Restoration & Growth", description: "Reflection and continuous development" },
  { icon: Shield, title: "Integrity", description: "Honesty, accountability, and ethics" },
  { icon: Users2, title: "Equity & Inclusion", description: "Diverse identities respected and valued" },
  { icon: Sparkles, title: "Empowerment", description: "Tools and confidence to lead and grow" },
  { icon: Target, title: "Impact-Driven Work", description: "Meaningful, measurable change" },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
                Creating workplaces where people and performance thrive together.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                House of Khathutshelo is a workplace wellbeing and organizational development practice supporting individuals and organizations to grow, function, and thrive in the world of work.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md border-2 border-accent bg-transparent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Snapshot */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rooted in Occupational Social Work, House of Khathutshelo takes a human-centered and systems-aware approach to the world of work, recognizing the connection between wellbeing, leadership, and organizational performance.
              </p>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
                Our Services
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Integrated individual and organizational development services designed to strengthen people, leadership, and workplace systems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href="/services"
                  className="group bg-card p-6 rounded-lg border border-border hover:border-primary hover:shadow-md transition-all"
                >
                  <service.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Core Belief Statement */}
        <section className="py-16 lg:py-24 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-heading text-2xl sm:text-3xl font-medium leading-relaxed">
                Sustainable workplaces are built when people and systems develop together.
              </p>
            </div>
          </div>
        </section>

        {/* Online + Onsite Delivery */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                  Online & Onsite Delivery
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Services are delivered both online and onsite depending on client needs and context, allowing flexibility across individuals, organizations, and institutions. Our flexible approach enables meaningful development and workplace support that is accessible, responsive, and tailored to modern work and learning environments.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <Globe className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-medium text-foreground mb-2">Online Services</h3>
                  <p className="text-sm text-muted-foreground">Coaching, training, and development from any location</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <Building2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-medium text-foreground mb-2">Onsite Services</h3>
                  <p className="text-sm text-muted-foreground">In-depth engagement within workplaces and teams</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Preview */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                Wellness & Development Resources
              </h2>
              <p className="text-muted-foreground mb-8">
                Downloadable wellness and development worksheets designed for self-guided growth. Available from R5 per resource.
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                  About Katu Thyala
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Katu Thyala is a qualified and registered social worker with a Master&apos;s degree in Occupational Social Work, specializing in workplace wellbeing, leadership development, and organizational effectiveness.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over five years of experience across employee assistance, healthcare, and corporate wellness environments, she brings a strong ability to connect human insight with organizational systems.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                  Our Values
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {values.slice(0, 4).map((value) => (
                    <div key={value.title} className="flex items-start gap-3">
                      <value.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground text-sm">{value.title}</h3>
                        <p className="text-xs text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-6"
                >
                  See all values <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section className="py-12 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-8">
                Professional Affiliations
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-12">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F6NKMFUVWeyNtHKcXanl0LJaKVfdPx.png" 
                  alt="South African Council for Social Service Professions (SACSSP)" 
                  className="h-16 object-contain"
                />
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cikSff21N0E9UynlAm5L5WKW9zNpUS.png" 
                  alt="Board of Healthcare Funders (BHF) Southern Africa" 
                  className="h-12 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground mb-8">
                For consultations, training, or collaboration enquiries.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Contact Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border-2 border-accent bg-transparent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
