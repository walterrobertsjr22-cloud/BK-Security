"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  Shield,
  Phone,
  Mail,
  PhoneCall,
  X,
  Eye,
  Lock,
  Car,
  Truck
} from "lucide-react";
import Image from "next/image";


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleEmergencyCall = () => {
    window.location.href = "tel:+5926085933";
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:Info@bksecuritygy.com";
  };

  const navigationItems = [
    { label: "Home", href: "/", type: "page" },
    { label: "Services", href: "/services", type: "services" },
    { label: "About", href: "/about", type: "page" },
    { label: "Career", href: "/careers/application", type: "page" },
    { label: "Contact", href: "#contact", type: "section" },
  ];

  const serviceLinks = [
    { name: "Armed & Unarmed Security", href: "/services/armed-unarmed-security", icon: Shield },
    { name: "Executive Bodyguards", href: "/services/executive-bodyguard", icon: Shield },
    { name: "Cash in Transit", href: "/services/cash-in-transit", icon: Lock },
    { name: "24/7 Monitoring", href: "/services/alarm-camera-monitoring", icon: Eye },
    { name: "Secure Transportation", href: "/services/secure-transportation", icon: Car },
    { name: "Armed & Unarmed Chauffeurs", href: "/services/chauffeurs", icon: Car },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 pt-[env(safe-area-inset-top)] ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-6 pt-2">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onClick={() => scrollToSection("hero")}
          >
            <Image
              src="/logo.jpg"
              alt="BK Security"
              width={180}
              height={60}
              className="h-14 w-auto lg:h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => {
              if (item.type === "page") {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 rounded-full font-medium transition-colors ${pathname === item.href
                        ? "text-blue-600 bg-blue-50"
                        : isScrolled
                          ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                          : "text-white hover:text-blue-200/90 hover:bg-white/10"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }
              if (item.type === "services") {
                return (
                  <div key="services" className="relative group">
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-full font-medium transition-colors inline-flex items-center ${isScrolled
                          ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                          : "text-white hover:text-blue-200/90 hover:bg-white/10"
                        }`}
                    >
                      Services
                    </Link>
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-3 w-[620px] bg-white shadow-2xl rounded-2xl border border-gray-100 p-4 grid grid-cols-2 gap-2">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 flex items-center gap-2"
                        >
                          <s.icon className="h-4 w-4 text-blue-600" />
                          <span>{s.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    if (pathname !== "/") {
                      window.location.href = "/" + item.href;
                    } else {
                      scrollToSection(item.href.substring(1));
                    }
                  }}
                  className={`px-3 py-2 rounded-full font-medium transition-colors ${isScrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:text-blue-200/90 hover:bg-white/10"}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Contact Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleEmailContact}
              className={`${isScrolled
                  ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                  : "border-white/30 text-black hover:bg-white/10"
                }`}
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </Button>

            <Button
              onClick={handleEmergencyCall}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white emergency-pulse"
            >
              <PhoneCall className="h-4 w-4 mr-2" />
              Call Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`lg:hidden ${isScrolled ? "text-gray-700" : "text-white"
                  }`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] max-w-[85vw] bg-white p-0 overflow-y-auto">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-4 border-b bg-white">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/logo.jpg"
                      alt="BK Security"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold text-black">BK Security</span>
                      <span className="text-xs text-blue-600">Services</span>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="px-4 py-6 border-b">
                  <Badge variant="destructive" className="mb-3 emergency-pulse">
                    24/7 Emergency
                  </Badge>
                  <Button
                    onClick={handleEmergencyCall}
                    className="w-full bg-blue-600 hover:bg-blue-700 mb-2"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call 6085933
                  </Button>
                  <Button
                    onClick={handleEmailContact}
                    variant="outline"
                    className="w-full"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Info@bksecuritygy.com
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-4 px-2">
                  <ul className="space-y-4">
                    {navigationItems.map((item) => (
                      <li key={item.label}>
                        {item.type === "page" && (
                          <Link
                            href={item.href}
                            className={`w-full text-left p-3 rounded-lg transition-colors block ${pathname === item.href
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                              }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )}
                        {item.type === "services" && (
                          <div>
                            <button
                              onClick={() => setIsServicesOpen(!isServicesOpen)}
                              className="w-full text-left p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-between"
                            >
                              <span>Services</span>
                              <span className="text-xs text-gray-500">{isServicesOpen ? "−" : "+"}</span>
                            </button>
                            {isServicesOpen && (
                              <ul className="mt-2 ml-2 space-y-1">
                                {serviceLinks.map((s) => (
                                  <li key={s.href}>
                                    <Link
                                      href={s.href}
                                      className="block px-3 py-3 rounded-md text-base text-gray-700 hover:bg-blue-50 hover:text-blue-700 flex items-center gap-3"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <s.icon className="h-4 w-4 text-blue-600" />
                                      <span>{s.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                        {item.type === "section" && (
                          <button
                            onClick={() => {
                              if (pathname !== "/") {
                                window.location.href = "/" + item.href;
                              } else {
                                scrollToSection(item.href.substring(1));
                              }
                            }}
                            className="w-full text-left p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            {item.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Footer */}
                <div className="pt-6 border-t text-center">
                  <p className="text-sm text-gray-600">
                    Licensed • Insured • Bonded
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Available 24/7
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}