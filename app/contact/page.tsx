"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { submitContact } from "@/app/actions/contact"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await submitContact(formData)

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setIsLoading(false)
    }, 4000)
  }

  return (
    <main>
      {submitted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full shadow-2xl animate-scale-in">
            <div className="flex justify-center mb-4">
              <CheckCircle className="text-primary" size={64} />
            </div>
            <h2 className="text-2xl font-bold text-foreground text-center mb-2">Message Sent Successfully!</h2>
            <p className="text-foreground/80 text-center mb-6">
              Thank you for reaching out. We'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-foreground/80">Get in touch with G.N.Homeo Clinic</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Phone className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+919608628633" className="text-lg text-primary font-semibold hover:underline">
                +91 9608628633
              </a>
              <p className="text-sm text-foreground/70 mt-2">Available during clinic hours</p>
            </div>

            {/* Email */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Mail className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:gnn.homeo@gmail.com" className="text-lg text-primary font-semibold hover:underline">
                gnn.homeo@gmail.com
              </a>
              <p className="text-sm text-foreground/70 mt-2">We'll respond within 24 hours</p>
            </div>

            {/* Address */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <MapPin className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-foreground mb-2">Clinic Address</h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <p className="font-semibold mb-1">Mariam Nagar, Purnea</p>
                <p className="text-sm">Near Dto Office, Commissioner Road</p>
                <p className="text-sm">Court-854301</p>
              </a>
              <p className="text-sm text-foreground/70 mt-2">Click to view on Google Maps</p>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Clock className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-foreground mb-2">Clinic Hours</h3>
              <div className="text-sm text-foreground/80 space-y-1">
                <p>Mon-Thu: 11:00 AM – 8:00 PM</p>
                <p>Friday: 2:00 PM – 8:00 PM</p>
                <p>Sunday: 4:00 PM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 9608628633"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    rows={5}
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={18} />
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map - Updated to show correct location */}
              <div className="bg-card border border-border rounded-lg overflow-hidden h-80">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8234567890123!2d87.4683081!3d25.7710094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1234567890d%3A0x1234567890abcdef!2sMariam%20Nagar%2C%20Purnea%2C%20Near%20Dto%20Office%2C%20Commissioner%20Road%2C%20Court-854301!5e0!3m2!1sen!2sin!4v1234567890"
                  // allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick Links */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919608628633"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold text-center"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href="/consultation"
                    className="block p-3 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-colors font-semibold text-center"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Is consultation really free?</h3>
              <p className="text-foreground/80 text-sm">
                Yes, the initial consultation is completely free. This allows you to discuss your health concerns with
                Dr. M.H. Rizwi without any obligation.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">How long does a consultation take?</h3>
              <p className="text-foreground/80 text-sm">
                Typically 30-45 minutes for video calls, 20-30 minutes for phone calls, and flexible for chat
                consultations depending on your queries.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Do you offer online consultations?</h3>
              <p className="text-foreground/80 text-sm">
                Yes, we offer video calls, phone calls, and chat consultations. Choose the mode that works best for you.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">What if I need follow-up consultations?</h3>
              <p className="text-foreground/80 text-sm">
                Follow-up consultations are available at affordable rates. Dr. M.H. Rizwi will recommend the frequency
                based on your condition.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Are medicines available online?</h3>
              <p className="text-foreground/80 text-sm">
                Currently, medicines are available at the clinic. You can contact us for delivery options in your area.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">What payment methods do you accept?</h3>
              <p className="text-foreground/80 text-sm">
                We accept cash, online transfers, and digital payment methods. Payment details will be provided during
                consultation booking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
