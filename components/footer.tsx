import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              <strong>G.N. Homeo Clinic</strong>
            </h3>
            <p className="text-sm opacity-90">
              Healing Naturally with Homeopathy. 35 years of expertise in natural healing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/diseases" className="hover:underline">
                  Diseases
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="hover:underline">
                  Consultation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919608628633" className="hover:underline">
                  +91 9608628633
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:gnn.homeo@gmail.com" className="hover:underline">
                  gnn.homeo@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline bg-primary-foreground/10 p-2 rounded"
                >
                  <strong>Club Market kachhari hata, Purnea</strong>
                  <br />
                  Near Dto Office, Commissioner Road
                  <br />
                  Pin-854301
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>
            &copy; 2025 <strong>G.N. Homeo Clinic</strong>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
