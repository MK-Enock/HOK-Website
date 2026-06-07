import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-xl font-semibold mb-4">
              House of Khathutshelo
            </h3>
            <p className="text-accent-foreground/80 text-sm max-w-md mb-6">
              A workplace wellbeing and organizational development practice supporting individuals and organizations to grow, function, and thrive in the world of work.
            </p>
            <div className="flex flex-col gap-2 text-sm text-accent-foreground/80">
              <a href="mailto:Houseofkhatutshelo@outlook.com" className="flex items-center gap-2 hover:text-accent-foreground transition-colors">
                <Mail className="h-4 w-4" />
                Houseofkhatutshelo@outlook.com
              </a>
              <a href="https://wa.me/27798692440" className="flex items-center gap-2 hover:text-accent-foreground transition-colors">
                <Phone className="h-4 w-4" />
                079 869 2440
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Johannesburg, South Africa
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Affiliations */}
          <div>
            <h4 className="font-medium mb-4">Affiliations</h4>
            <div className="flex flex-col gap-4">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F6NKMFUVWeyNtHKcXanl0LJaKVfdPx.png" 
                alt="South African Council for Social Service Professions (SACSSP)" 
                className="h-10 object-contain object-left"
              />
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cikSff21N0E9UynlAm5L5WKW9zNpUS.png" 
                alt="Board of Healthcare Funders (BHF) Southern Africa" 
                className="h-8 object-contain object-left"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-foreground/20 text-center text-sm text-accent-foreground/70">
          <p>&copy; {new Date().getFullYear()} House of Khathutshelo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
