import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Download, BookOpen, Briefcase, Heart, Users } from "lucide-react"

const resources = [
  {
    icon: Briefcase,
    title: "Career Development Toolkit",
    description: "Structured worksheets for career exploration, goal setting, and professional planning.",
    price: "R5",
  },
  {
    icon: Heart,
    title: "Workplace Wellbeing Worksheet",
    description: "Reflection tools to assess and improve your workplace wellbeing and work-life balance.",
    price: "R5",
  },
  {
    icon: Users,
    title: "Team Functioning Guide",
    description: "Exercises for improving team communication, collaboration, and effectiveness.",
    price: "R5",
  },
  {
    icon: BookOpen,
    title: "Graduate Readiness Workbook",
    description: "Comprehensive guide for transitioning from education to the professional world.",
    price: "R5",
  },
  {
    icon: FileText,
    title: "Resilience Building Exercises",
    description: "Practical activities to develop personal and professional resilience.",
    price: "R5",
  },
  {
    icon: Download,
    title: "Personal Development Planner",
    description: "Structured templates for setting and tracking personal growth objectives.",
    price: "R5",
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-foreground mb-6">
                Resources
              </h1>
              <p className="text-lg text-muted-foreground">
                Practical wellness and development tools designed to support ongoing learning and reflection.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Overview */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
                Wellness & Development Resources
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In addition to our consulting and facilitation services, House of Khathutshelo develops practical wellness and development tools designed to support ongoing learning and reflection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These resources include structured worksheets, reflection tools, and guided exercises focused on workplace wellbeing, career development, and personal growth. They are designed to be accessible, affordable, and easy to use, allowing individuals to engage in meaningful development at their own pace.
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <div
                  key={resource.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all"
                >
                  <resource.icon className={`h-10 w-10 mb-4 ${index % 2 === 0 ? 'text-accent' : 'text-primary'}`} />
                  <h3 className="font-medium text-foreground mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{resource.price}</span>
                    <Link
                      href="/contact"
                      className="text-sm text-accent font-medium hover:underline"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Downloads Info */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-6 text-center">
                Digital Worksheets & Toolkits
              </h2>
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We offer a range of downloadable resources available for purchase, designed to support self-guided development and workplace learning.
                  </p>
                  <p>
                    Each resource is developed with practical application in mind and can be used independently or alongside coaching, training, or organizational interventions.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-medium text-foreground mb-2">How to Access Resources</h3>
                    <p className="text-sm">
                      Download individual worksheets and toolkits for a small fee of R5, making personal and professional development more accessible to a wider audience. Contact us to purchase and receive your digital resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
                Need customized resources?
              </h2>
              <p className="text-muted-foreground mb-8">
                We can develop tailored worksheets and toolkits for your organization&apos;s specific needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
