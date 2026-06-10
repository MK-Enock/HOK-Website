"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Navigation from "@/components/Navigation";
import {services} from "@/lib/content";




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
        <div className="flip-card-front bg-[#F7F5F0] absolute inset-0 border border-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-primary hover:shadow-md transition-all">
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
      <Navigation/>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white mb-6">
                Our Services
              </h1>
              <p className="text-lg text-white">
                Integrated individual and organizational development services designed to strengthen people, leadership, and workplace systems.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl font-semibold text-primary-green mb-6">
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
              <h2 className="font-heading text-3xl font-semibold text-primary-gold mb-4">
                Ready to get started?
              </h2>
              <p className="text-white mb-8">
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
