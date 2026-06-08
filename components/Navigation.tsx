'use client'
import Link from "next/link";
import {Menu, X} from "lucide-react";
import {useState} from "react";
import {usePathname, useRouter} from "next/navigation";

const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services', hasDropdown: true },
    // { label: 'Training & Facilitation', href: '/training_&_facilitation' },
    // { label: 'Projects', href: '/projects' },
    { label: 'Resources', href: '/resources' },
    // { label: 'Contact', href: '/contact' },
];

export default function Navigation(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname()
    const router = useRouter()
    return<nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={()=>router.push("/")}>
                    <h2 className="text-4xl font-bold text-[#1E3A2D]">HOK</h2>
                    <p className="text-xs text-[#6F6F6F]">
                        House • Of • Khathutshelo
                    </p>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`text-sm font-medium transition-colors ${
                                pathname === link.href
                                    ? 'text-[#C89A3D] border-b-2 border-[#C89A3D]'
                                    : 'text-[#2A2A2A] hover:text-[#1E3A2D]'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button onClick={()=>router.push("/contact")} className="btn-primary cursor-pointer text-white">Let's Work Together</button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X size={24} className="text-[#1E3A2D]" />
                    ) : (
                        <Menu size={24} className="text-[#1E3A2D]" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="px-6 py-4 space-y-4">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="block text-[#2A2A2A] hover:text-[#1E3A2D] font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="btn-primary text-white cursor-pointer w-full">Let's Work Together</button>
                    </div>
                </div>
            )}
        </nav>
}
