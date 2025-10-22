"use client"

import Image from "next/image"
import { Heart, Users, Leaf } from "lucide-react"

export default function Donation() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4 animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Support Our Mission</h1>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Your donation helps us provide free healthcare and medicines to those in need.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
            How Your Donation Helps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 animate-scale-in hover:shadow-lg transition-all">
              <Heart className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold text-foreground mb-4">Free Checkups</h3>
              <p className="text-foreground/80">
                Your donation enables us to provide free health consultations and checkups to underprivileged families
                and individuals who cannot afford medical care.
              </p>
            </div>

            <div
              className="bg-card border border-border rounded-lg p-8 animate-scale-in hover:shadow-lg transition-all"
              style={{ animationDelay: "0.1s" }}
            >
              <Leaf className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold text-foreground mb-4">Free Medicines</h3>
              <p className="text-foreground/80">
                We distribute authentic homeopathic medicines at no cost to patients in need, ensuring that natural
                healing is accessible to everyone regardless of their financial situation.
              </p>
            </div>

            <div
              className="bg-card border border-border rounded-lg p-8 animate-scale-in hover:shadow-lg transition-all"
              style={{ animationDelay: "0.2s" }}
            >
              <Users className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold text-foreground mb-4">Community Programs</h3>
              <p className="text-foreground/80">
                Your support helps us organize free health camps, awareness programs, and medical assistance for
                vulnerable sections of society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-foreground mb-6">Make a Donation</h2>
              <p className="text-lg text-foreground/80 mb-6">
                Every donation, no matter the amount, makes a significant difference in the lives of those we serve.
                Your generosity helps us continue our mission of providing affordable and natural healing to everyone.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">100% Transparent</h4>
                    <p className="text-foreground/80 text-sm">
                      All donations are used directly for patient care and medicines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Tax Benefits</h4>
                    <p className="text-foreground/80 text-sm">
                      Donations may be eligible for tax deductions. Contact us for details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Secure Payment</h4>
                    <p className="text-foreground/80 text-sm">Your payment information is secure and protected.</p>
                  </div>
                </div>
              </div>

              <p className="text-foreground/80 mb-6">
                <span className="font-semibold text-foreground">
                  Together, we can make healthcare accessible to all.
                </span>{" "}
                Join us in our mission to heal naturally and affordably.
              </p>
            </div>

            {/* QR Code Section */}
            <div className="flex flex-col items-center justify-center animate-scale-in">
              <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-primary">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-coBnTWSz11EXy2SSpBYEU6fN6P4MZt.png"
                  alt="Paytm UPI QR Code for Donation"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
                <p className="text-center text-foreground font-semibold mt-4">Scan to Donate</p>
                <p className="text-center text-foreground/80 text-sm mt-2">UPI: 7782907822@ptsbi</p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-foreground/80 mb-4">
                  <span className="font-semibold text-foreground">Payment Methods:</span>
                </p>
                <p className="text-foreground/80 text-sm">Paytm • Google Pay • PhonePe • BHIM • Bank Transfer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary/10 rounded-lg p-8 text-center animate-slide-in-left hover:shadow-lg transition-all">
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-foreground font-semibold mb-2">Free Consultations</p>
              <p className="text-foreground/80 text-sm">Provided annually to patients in need</p>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 text-center animate-fade-in-up hover:shadow-lg transition-all">
              <p className="text-4xl font-bold text-primary mb-2">1000+</p>
              <p className="text-foreground font-semibold mb-2">Medicines Distributed</p>
              <p className="text-foreground/80 text-sm">Free homeopathic remedies given to patients</p>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 text-center animate-slide-in-right hover:shadow-lg transition-all">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-foreground font-semibold mb-2">Health Camps</p>
              <p className="text-foreground/80 text-sm">Community awareness and free checkup programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of the Healing Mission</h2>
          <p className="text-lg opacity-90 mb-8">
            Your donation today can change someone's life tomorrow. Scan the QR code or contact us to contribute.
          </p>
          <a
            href="https://wa.me/919608628633"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
          >
            Contact Us for More Information
          </a>
        </div>
      </section>
    </main>
  )
}
