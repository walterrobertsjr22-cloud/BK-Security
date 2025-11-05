"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  Award,
  PhoneCall
} from "lucide-react";

export function HeroSection() {
  const handleEmergencyCall = () => {
    window.location.href = "tel:+5926085933";
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:Info@bksecuritygy.com";
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white my-10  leading-tight">
            Professional Security Services{" "}
            <span className="text-blue-300">You Can Trust</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-blue-200 mb-6 font-semibold">
            Protecting What Matters Most to You
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            When it comes to your safety and security, there's no room for compromise. At BK Security Services, we've built our reputation on delivering reliable, professional security solutions that give you complete peace of mind.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Button
              onClick={handleEmergencyCall}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white emergency-pulse text-lg px-8 py-4"
            >
              <PhoneCall className="h-5 w-5 mr-2" />
              Call Us: +592 608 5933
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-white text- hover:bg-white hover:text-blue-900 text-lg px-8 py-4"
            >
              Free Consultation
            </Button>
          </div>

          {/* Contact Info */}
      
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold text-blue-300 mb-2">24/7</div>
            <div className="text-sm text-gray-300">Emergency Response</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-blue-300 mb-2">100%</div>
            <div className="text-sm text-gray-300">Licensed & Insured</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-blue-300 mb-2">15+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-blue-300 mb-2">500+</div>
            <div className="text-sm text-gray-300">Clients Protected</div>
          </div>
        </div>
      </div>

   
    </section>
  );
}
