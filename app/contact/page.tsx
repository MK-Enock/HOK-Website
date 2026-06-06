"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
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
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                For bookings, enquiries, or collaborations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:Houseofkhatutshelo@outlook.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        Houseofkhatutshelo@outlook.com
                      </p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/27798692440"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        079 869 2440
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Johannesburg, South Africa
                      </p>
                    </div>
                  </div>
                </div>

                {/* Affiliations */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="font-medium text-foreground mb-6">Professional Affiliations</h3>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F6NKMFUVWeyNtHKcXanl0LJaKVfdPx.png" 
                        alt="South African Council for Social Service Professions (SACSSP)" 
                        className="h-12 object-contain"
                      />
                      <span className="text-sm text-muted-foreground">SACSSP</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cikSff21N0E9UynlAm5L5WKW9zNpUS.png" 
                        alt="Board of Healthcare Funders (BHF) Southern Africa" 
                        className="h-10 object-contain"
                      />
                      <span className="text-sm text-muted-foreground">BHF</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-secondary rounded-lg p-8">
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                    Send a Message
                  </h2>
                  
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-medium text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground text-sm">
                        Thank you for reaching out. We&apos;ll get back to you soon.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 text-primary text-sm font-medium hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
