"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award,
  CheckCircle,
  PhoneCall
} from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  
  const handleEmergencyCall = () => {
    window.location.href = "tel:+5926085933";
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:Info@bksecuritygy.com";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    { name: "Armed & Unarmed Security", href: "/services/armed-unarmed-security" },
    { name: "Executive Bodyguards", href: "/services/executive-bodyguard" },
    { name: "Cash in Transit", href: "/services/cash-in-transit" },
    { name: "24/7 Monitoring", href: "/services/alarm-camera-monitoring" },
    { name: "Secure Transportation", href: "/services/secure-transportation" },
    { name: "Armed & Unarmed Chauffeurs", href: "/services/chauffeurs" }
  ];

  const industries = [
    "Corporate & Executive",
    "Retail & Commercial",
    "Healthcare & Medical",
    "Financial Institutions",
    "Residential Communities",
    "Entertainment & Events"
  ];

  return (
    <footer className="bg-black text-white">
      {/* Emergency Contact Bar */}
      <div className="bg-blue-600 py-4">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Badge variant="destructive" className="emergency-pulse">
                24/7 Emergency
              </Badge>
              <span className="font-semibold">Need immediate security response?</span>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                onClick={handleEmergencyCall}
                variant="secondary"
                size="sm"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <PhoneCall className="h-4 w-4 mr-2" />
                Call Us
              </Button>
              <Button
                onClick={handleEmailContact}
                variant="outline"
                size="sm"
                className="border-white text-black hover:bg-white hover:text-blue-600"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image 
                src="/logo.jpg" 
                alt="BK Security" 
                width={80}
                height={40}
                className="h-20 w-auto"
              />
             
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional Security Solutions You Can Trust. Protecting what matters most to you.
            </p>

            {/* Certifications */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Licensed & Bonded</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/application"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Career
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (pathname !== "/") {
                      window.location.href = "/#contact";
                    } else {
                      scrollToSection("contact");
                    }
                  }}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Industries We Serve</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry}>
                  <button
                    onClick={() => {
                      if (pathname !== "/") {
                        window.location.href = "/#industries";
                      } else {
                        scrollToSection("industries");
                      }
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                  >
                    {industry}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Contact Information</h3>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Emergency Line</p>
                  <button
                    onClick={handleEmergencyCall}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +592 608 5933
                  </button>
                  <p className="text-xs text-gray-400">24/7 Response</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <button
                    onClick={handleEmailContact}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Info@bksecuritygy.com
                  </button>
                  <p className="text-xs text-gray-400">General Inquiries</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Availability</p>
                  <p className="text-gray-300">24/7 Emergency Response</p>
                  <p className="text-gray-300">24/7 Consultations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 lg:px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 BK Security Services. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
              <span>•</span>
              <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
              <span>•</span>
              <button className="hover:text-blue-400 transition-colors">Licensing</button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Award className="h-5 w-5 text-blue-400" />
            <span className="text-sm text-gray-400">
              Licensed Security Provider
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}