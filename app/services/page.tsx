"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building2, Users, GraduationCap, MessageSquare, Mic, Globe } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Organizational Wellbeing & Development",
    shortDescription: "Strengthening workplace culture and leadership capacity",
    fullDescription: "We partner with organizations to strengthen workplace culture, leadership capacity, and employee wellbeing. Our work focuses on creating environments where people can function effectively, communicate better, and contribute meaningfully.",
    features: [
      "Leadership development",
      "Training & facilitation",
      "Workplace wellbeing initiatives",
      "Onboarding support",
      "Workplace debriefing",
      "Speaking engagements"
    ]
  },
  {
    icon: Users,
    title: "Individual Development & Career Growth",
    shortDescription: "Supporting your professional journey",
    fullDescription: "We support individuals navigating education, early career pathways, and professional transitions. Our approach is structured, practical, and development-focused, aimed at helping individuals grow into their professional identity and prepare for meaningful opportunities.",
    features: [
      "Career coaching",
      "Graduate readiness",
      "Workplace readiness",
      "Professional development",
      "Career exploration",
      "Personal development support"
    ]
  },
  {
    icon: GraduationCap,
    title: "Workplace Training & Facilitation",
    shortDescription: "Tailored workshops for your organization",
    fullDescription: "We design and deliver tailored training sessions that respond to organizational needs. Sessions are practical, interactive, and grounded in real workplace challenges.",
    features: [
      "Mental health awareness",
      "Resilience building",
      "Communication skills",
      "Team functioning",
      "Workplace wellbeing",
      "Custom workshop design"
    ]
  },
  {
    icon: MessageSquare,
    title: "Workplace Debriefing & Support",
    shortDescription: "Structured support for teams",
    fullDescription: "We provide structured debriefing sessions for teams and employees working in high-pressure environments or undergoing organizational change. The focus is on restoring clarity, strengthening resilience, and supporting healthy functioning within teams.",
    features: [
      "Team debriefing sessions",
      "Crisis response support",
      "Change management support",
      "Resilience restoration",
      "Team functioning assessment",
      "Follow-up support"
    ]
  },
  {
    icon: Mic,
    title: "Speaking Engagements",
    shortDescription: "Inspiring talks on workplace wellbeing",
    fullDescription: "We offer talks and facilitate conversations on workplace wellbeing, leadership, and the future of work. These engagements are tailored for corporate, institutional, and educational audiences, including universities and high schools.",
    features: [
      "Corporate speaking engagements",
      "Educational & institutional talks",
      "Career readiness talks",
      "Mental health awareness",
      "Leadership development",
      "Future of work discussions"
    ]
  },
  {
    icon: Globe,
    title: "Online & Onsite Delivery",
    shortDescription: "Flexible service delivery options",
    fullDescription: "Our services are offered both online and onsite, depending on the needs of individuals and organizations. This flexible approach allows us to support clients across different locations, industries, and contexts.",
    features: [
      "Remote coaching sessions",
      "Virtual training programs",
      "On-location workshops",
      "Hybrid delivery options",
      "Accessible across regions",
      "Tailored to your context"
    ]
  },
]

function FlipCard({ service, isFlipped, onClick }: { 
  service: typeof services[0]
  isFlipped: boolean
  onClick: () => void 
}) {
  return (
    <div 
      className={`flip-card cursor-pointer h-[320px] ${isFlipped ? "flipped" : ""}`}
      onClick={onClick}
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front of card */}
        <div className="flip-card-front absolute inset-0 bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-primary hover:shadow-md transition-all">
          <service.icon className="h-12 w-12 text-accent mb-4" />
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {service.shortDescription}
          </p>
          <p className="text-xs text-primary mt-4 font-medium">
            Click to learn more
          </p>
        </div>
        
        {/* Back of card */}
        <div className="flip-card-back absolute inset-0 bg-accent text-accent-foreground rounded-lg p-6 flex flex-col overflow-y-auto">
          <h3 className="font-heading text-lg font-semibold mb-3">
            {service.title}
          </h3>
          <p className="text-sm opacity-90 mb-4 leading-relaxed">
            {service.fullDescription}
          </p>
          <ul className="text-sm space-y-1.5 flex-1">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-foreground rounded-full shrink-0 opacity-70" />
                <span className="opacity-90">{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs opacity-70 mt-4 text-center">
            Click to flip back
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const toggleCard = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-foreground mb-6">
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground">
                Integrated individual and organizational development services designed to strengthen people, leadership, and workplace systems.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
                How We Help
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                House of Khathutshelo offers both individual development support and organizational wellbeing and development services. Our work is designed to strengthen people at different stages of their personal and professional journeys, while also supporting the systems they operate within.
              </p>
            </div>

            {/* Flip Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <FlipCard
                  key={service.title}
                  service={service}
                  isFlipped={flippedCards.has(index)}
                  onClick={() => toggleCard(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let&apos;s discuss how we can support your individual or organizational development needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center rounded-md border-2 border-accent bg-transparent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Explore Resources
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
