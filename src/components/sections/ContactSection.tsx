"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  Shield,
  PhoneCall,
  Send,
  MapPin,
  Award
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  urgency: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    urgency: "normal",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleEmergencyCall = () => {
    window.location.href = "tel:6085933";
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:Info@bksecuritygy.com";
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", urgency: "normal", message: "" });
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Armed Security Guards",
    "Unarmed Security Guards",
    "Executive Bodyguard Services",
    "Cash in Transit",
    "24/7 Monitoring Services",
    "Secure Transportation",
    "Emergency Response",
    "Custom Security Solution"
  ];


  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Get Started
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Secure Your Peace of Mind?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't wait until you need security – plan ahead and protect what matters most to you. 
            Our team is ready to discuss your security needs and develop a customized solution 
            that fits your requirements and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="h-full shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Free Security Consultation
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Every security situation is unique. We offer complimentary consultations 
                  to understand your specific needs and recommend the best security solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" && (
                  <Alert className="mb-6 bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-700">
                      Thank you! Your consultation request has been submitted. 
                      We'll contact you within 2 hours during business hours.
                    </AlertDescription>
                  </Alert>
                )}
                {submitStatus === "error" && (
                  <Alert className="mb-6 bg-red-50 border-red-200">
                    <AlertDescription className="text-red-700">
                      Something went wrong. Please try again.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Phone and Service */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Needed</Label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(value) => handleInputChange("service", value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select 
                      value={formData.urgency} 
                      onValueChange={(value) => handleInputChange("urgency", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal - Within 48 hours</SelectItem>
                        <SelectItem value="urgent">Urgent - Within 24 hours</SelectItem>
                        <SelectItem value="emergency">Emergency - Immediate response needed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Tell Us About Your Security Needs</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Describe your security concerns, property details, or specific requirements..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Request Free Consultation
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-red-800">Emergency Security Response</CardTitle>
                    <CardDescription className="text-red-600">
                      For immediate security threats or emergencies
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={handleEmergencyCall}
                  className="w-full bg-red-600 hover:bg-red-700 text-white emergency-pulse mb-4"
                  size="lg"
                >
                  <PhoneCall className="h-5 w-5 mr-2" />
                  EMERGENCY: Call 6085933
                </Button>
                <p className="text-sm text-red-600 text-center">
                  Available 24/7 • Average response time: 3-5 minutes
                </p>
              </CardContent>
            </Card>

            {/* Regular Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Multiple Ways to Get Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Now</h4>
                    <button
                      onClick={handleEmergencyCall}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      6085933
                    </button>
                    <p className="text-sm text-gray-600">Available 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <button
                      onClick={handleEmailContact}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Info@bksecuritygy.com
                    </button>
                    <p className="text-sm text-gray-600">Response within 2 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-700">24/7 Emergency Response</p>
                    <p className="text-sm text-gray-600">Consultations available anytime</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
         
              

  
        
            
          </div>
        </div>
      </div>
    </section>
  );
}