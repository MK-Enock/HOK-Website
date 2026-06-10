'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Heart, Users, Target, Briefcase, ChevronRight, Menu, X} from 'lucide-react';
import Navigation from "@/components/Navigation";
import {services} from "@/lib/content";
import {Footer} from "@/components/footer";

export default function Home() {




  const heroServices = [
    { icon: Heart, label: 'Organizational Wellbeing & Development' },
    { icon: Target, label: 'Training & Facilitation' },
    { icon: Users, label: 'Workplace Debriefing & Support' },
    { icon: Briefcase, label: 'Individual Development & Career Growth' },
  ];

  return (
      <main className="bg-[#F7F5F0]">
        <Navigation/>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className=" lg:gap-0 items-center relative">
            <Image src={"/hero_bg_large.png"} alt="hero_cover" className="absolute object-cover hidden lg:flex" fill />
            <Image src={"/hero_bg_mobile.png"} alt="hero_cover_mobile" className="absolute object-cover flex lg:hidden" fill />
            {/* Left Content */}
            <div className="relative z-10  max-w-7xl mx-auto px-6 py-16 lg:py-24 text-white">
              <h1 className="text-4xl md:text-6xl mb-6 leading-none animate__animated animate__backInDown">
                <span>People. Communities.</span> <br/>
                <span className="text-[#C89A3D]">Change that lasts.</span>
              </h1>

              <p className="text-base md:text-lg text-gray-100 mb-8 leading-relaxed max-w-md animate__animated animate__slideInLeft">
                HOK is a social work and development practice that partners with
                individuals, organisations and communities to create meaningful change
                and build stronger, brighter futures.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="btn-accent cursor-pointer">Our Services</button>
                <button className="btn-secondary cursor-pointer text-white">Get in Touch</button>
              </div>

              {/* Service Highlights */}
              <div className="grid grid-cols-2 lg:grid-cols-[repeat(4,200px)] gap-12">
                {heroServices.map((service, index) => (
                    <div key={index} className="flex gap-3 max-w-[200px]">
                      <service.icon className="w-10 h-10 text-[#C89A3D] flex-shrink-0" />
                      <span className="text-lg">{service.label}</span>
                    </div>
                ))}
              </div>

              {/* Quote Card Overlay */}
              <div className="hidden lg:flex lg:flex-col absolute bottom-8 -right-28 bg-[#1E3A2D] bg-opacity-90 backdrop-blur-sm p-8 h-[300px] w-[320px] rounded-lg animate__animated animate__slideInRight">
                 <span className='text-[#C89A3D] '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-quote"
                       viewBox="0 0 16 16">
                  <path
                      d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
              </svg>
             </span>
                <p className="text-white text-lg leading-relaxed mb-10">
                  We believe in the power of people and the potential of communities
                  to create change.
                </p>
                <div className="bg-[#C89A3D] h-[2px] w-[35%] rounded"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-28 px-6">
          <div className="max-w-8xl lg:px-30 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Left Content */}
              <div>
                <p className="section-label mb-4">ABOUT HOK</p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A2D] mb-8 leading-tight">
                  Rooted in people. <br /> Driven by purpose.
                </h2>

                <p className="text-[#6F6F6F] text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                  At HOK, we combine professional social work expertise with a passion
                  for development, learning and collaboration. We walk alongside our
                  clients and communities to co-create solutions that are sustainable
                  and impactful.
                </p>

                <button className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#1E3A2D] text-white font-medium hover:bg-[#2D4A3A] transition-colors duration-300">
                  Learn More About Us
                </button>
              </div>

              {/* Right Content - Vision, Mission, Values */}
              <div className="space-y-8">
                {/* Vision */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A2D] flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#C89A3D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3A2D] mb-2">Our Vision</h3>
                    <p className="text-[#6F6F6F] text-sm leading-relaxed">
                      Thriving people. Strong communities. Sustainable change.
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A2D] flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#C89A3D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3A2D] mb-2">Our Mission</h3>
                    <p className="text-[#6F6F6F] text-sm leading-relaxed">
                      To empower individuals and communities through social work, capacity
                      building, and collaborative partnerships.
                    </p>
                  </div>
                </div>

                {/* Values */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A2D] flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-[#C89A3D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3A2D] mb-2">Our Values</h3>
                    <p className="text-[#6F6F6F] text-sm leading-relaxed">
                      Integrity. Compassion. Respect. Collaboration. Excellence.
                    </p>
                  </div>
                </div>
              </div>
              {/* CTA Card Below About */}
              <div className="lg:w-[600px]">
                {/* Left Image */}
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                      src="/about_section_img.png"
                      alt="Team collaboration"
                      fill
                      className="object-cover"
                  />

                  <div className="absolute z-20 bottom-4 right-4 bg-[#C89A3D] rounded-lg p-8 flex gap-5 justify-center items-center text-white max-w-[300px]">
                    <div className="flex flex-col transition-all cursor-pointer">
                      <p className="font-medium mb-4">
                        Let's build something meaningful together.
                      </p>
                      <span className="">Contact us today</span>
                    </div>
                    <div className="bg-gray-500/60 p-4 rounded-full">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-28 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <p className="section-label mb-4 text-center">WHAT WE DO</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A2D] text-center mb-16 leading-tight">
              Services that create impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                  <div key={index} className="p-8 bg-[#F7F5F0] rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <service.icon className="w-10 h-10 text-[#C89A3D] mb-4" />
                    <h3 className="text-lg font-bold text-[#1E3A2D] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#6F6F6F] text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

       <Footer/>
      </main>
  );
}

