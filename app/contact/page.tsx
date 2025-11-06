// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
// import { submitContact } from "@/app/actions/contact"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   })
//   const [submitted, setSubmitted] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     await submitContact(formData)

//     setSubmitted(true)
//     setTimeout(() => {
//       setSubmitted(false)
//       setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
//       setIsLoading(false)
//     }, 4000)
//   }

//   return (
//     <main>
//       {submitted && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
//           <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full shadow-2xl animate-scale-in">
//             <div className="flex justify-center mb-4">
//               <CheckCircle className="text-primary" size={64} />
//             </div>
//             <h2 className="text-2xl font-bold text-foreground text-center mb-2">Message Sent Successfully!</h2>
//             <p className="text-foreground/80 text-center mb-6">
//               Thank you for reaching out. We'll get back to you as soon as possible.
//             </p>
//             <button
//               onClick={() => setSubmitted(false)}
//               className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Header */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
//           <p className="text-lg text-foreground/80">Get in touch with G.N.Homeo Clinic</p>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
//             {/* Phone */}
//             <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
//               <Phone className="text-primary mb-4" size={32} />
//               <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
//               <a href="tel:+919608628633" className="text-lg text-primary font-semibold hover:underline">
//                 +91 9608628633
//               </a>
//               <p className="text-sm text-foreground/70 mt-2">Available during clinic hours</p>
//             </div>

//             {/* Email */}
//             <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
//               <Mail className="text-primary mb-4" size={32} />
//               <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
//               <a href="mailto:gnn.homeo@gmail.com" className="text-lg text-primary font-semibold hover:underline">
//                 gnn.homeo@gmail.com
//               </a>
//               <p className="text-sm text-foreground/70 mt-2">We'll respond within 24 hours</p>
//             </div>

//             {/* Address */}
//             <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
//               <MapPin className="text-primary mb-4" size={32} />
//               <h3 className="text-xl font-bold text-foreground mb-2">Clinic Address</h3>
//               <a
//                 href="https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-foreground/80 hover:text-primary transition-colors"
//               >
//                 <p className="font-semibold mb-1">Mariam Nagar, Purnea</p>
//                 <p className="text-sm">Near Dto Office, Commissioner Road</p>
//                 <p className="text-sm">Court-854301</p>
//               </a>
//               <p className="text-sm text-foreground/70 mt-2">Click to view on Google Maps</p>
//             </div>

//             {/* Hours */}
//             <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
//               <Clock className="text-primary mb-4" size={32} />
//               <h3 className="text-xl font-bold text-foreground mb-2">Clinic Hours</h3>
//               <div className="text-sm text-foreground/80 space-y-1">
//                 <p>Mon-Thu: 11:00 AM – 8:00 PM</p>
//                 <p>Friday: 2:00 PM – 8:00 PM</p>
//                 <p>Sunday: 4:00 PM – 8:00 PM</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form & Map */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-card border border-border rounded-lg p-8">
//               <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* Name */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
//                   <input
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                     placeholder="your@email.com"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
//                   <input
//                     type="tel"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                     placeholder="+91 9608628633"
//                   />
//                 </div>

//                 {/* Subject */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Subject *</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.subject}
//                     onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                     placeholder="How can we help?"
//                   />
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
//                   <textarea
//                     required
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
//                     rows={5}
//                     placeholder="Your message..."
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
//                 >
//                   <Send size={18} />
//                   {isLoading ? "Sending..." : "Send Message"}
//                 </button>
//               </form>
//             </div>

//             {/* Map & Additional Info */}
//             <div className="space-y-6">
//               {/* Map - Updated to show correct location */}
//               <div className="bg-card border border-border rounded-lg overflow-hidden h-80">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   frameBorder="0"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8234567890123!2d87.4683081!3d25.7710094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1234567890d%3A0x1234567890abcdef!2sMariam%20Nagar%2C%20Purnea%2C%20Near%20Dto%20Office%2C%20Commissioner%20Road%2C%20Court-854301!5e0!3m2!1sen!2sin!4v1234567890"
//                   // allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>

//               {/* Quick Links */}
//               <div className="bg-card border border-border rounded-lg p-6">
//                 <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
//                 <div className="space-y-3">
//                   <a
//                     href="https://wa.me/919608628633"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold text-center"
//                   >
//                     Chat on WhatsApp
//                   </a>
//                   <a
//                     href="/consultation"
//                     className="block p-3 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-colors font-semibold text-center"
//                   >
//                     Book Consultation
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-card border border-border rounded-lg p-6">
//               <h3 className="font-bold text-foreground mb-2">Is consultation really free?</h3>
//               <p className="text-foreground/80 text-sm">
//                 Yes, the initial consultation is completely free. This allows you to discuss your health concerns with
//                 Dr. M.H. Rizwi without any obligation.
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-6">
//               <h3 className="font-bold text-foreground mb-2">How long does a consultation take?</h3>
//               <p className="text-foreground/80 text-sm">
//                 Typically 30-45 minutes for video calls, 20-30 minutes for phone calls, and flexible for chat
//                 consultations depending on your queries.
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-6">
//               <h3 className="font-bold text-foreground mb-2">Do you offer online consultations?</h3>
//               <p className="text-foreground/80 text-sm">
//                 Yes, we offer video calls, phone calls, and chat consultations. Choose the mode that works best for you.
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-6">
//               <h3 className="font-bold text-foreground mb-2">What if I need follow-up consultations?</h3>
//               <p className="text-foreground/80 text-sm">
//                 Follow-up consultations are available at affordable rates. Dr. M.H. Rizwi will recommend the frequency
//                 based on your condition.
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-6">
//               <h3 className="font-bold text-foreground mb-2">Are medicines available online?</h3>
//               <p className="text-foreground/80 text-sm">
//                 Currently, medicines are available at the clinic. You can contact us for delivery options in your area.
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-6">
//               <h3 className="font-bold text-foreground mb-2">What payment methods do you accept?</h3>
//               <p className="text-foreground/80 text-sm">
//                 We accept cash, online transfers, and digital payment methods. Payment details will be provided during
//                 consultation booking.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }


// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
// import { submitContact } from "@/app/actions/contact"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   })
//   const [submitted, setSubmitted] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     await submitContact(formData)

//     setSubmitted(true)
//     setTimeout(() => {
//       setSubmitted(false)
//       setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
//       setIsLoading(false)
//     }, 4000)
//   }

//   return (
//     <main>
//       {submitted && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
//           <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full shadow-2xl animate-scale-in">
//             <div className="flex justify-center mb-4">
//               <CheckCircle className="text-primary" size={64} />
//             </div>
//             <h2 className="text-2xl font-bold text-foreground text-center mb-2">
//               Message Sent Successfully! <br />
//               <span className="text-sm">संदेश सफलतापूर्वक भेजा गया!</span>
//             </h2>
//             <p className="text-foreground/80 text-center mb-6">
//               Thank you for reaching out. We'll get back to you as soon as possible. <br />
//               <span className="text-sm">संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।</span>
//             </p>
//             <button
//               onClick={() => setSubmitted(false)}
//               className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
//             >
//               Close <br />
//               <span className="text-sm">बंद करें</span>
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Header */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl font-bold text-foreground mb-4">
//             Contact Us <br />
//             <span className="text-sm">संपर्क करें</span>
//           </h1>
//           <p className="text-lg text-foreground/80">
//             Get in touch with G.N.Homeo Clinic <br />
//             <span className="text-sm">G.N. होम्योपैथिक क्लिनिक से संपर्क करें</span>
//           </p>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
//             {/* Phone */}
//             <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
//               <Phone className="text-primary mb-4" size={32} />
//               <h3 className="text-xl font-bold text-foreground mb-2">
//                 Phone <br />
//                 <span className="text-sm">फोन</span>
//               </h3>
//               <a href="tel:+919608628633" className="text-lg text-primary font-semibold hover:underline">
//                 +91 9608628633
//               </a>
//               <p className="text-sm text-foreground/70 mt-2">
//                 Available during clinic hours <br />
//                 <span className="text-xs">क्लिनिक के समय उपलब्ध</span>
//               </p>
//             </div>

//             {/* Email */}
//             <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
//               <Mail className="text-primary mb-4" size={32} />
//               <h3 className="text-xl font-bold text-foreground mb-2">
//                 Email <br />
//                 <span className="text-sm">ईमेल</span>
//               </h3>
//               <a href="mailto:gnn.homeo@gmail.com" className="text-lg text-primary font-semibold hover:underline">
//                 gnn.homeo@gmail.com
//               </a>
//               <p className="text-sm text-foreground/70 mt-2">
//                 We'll respond within 24 hours <br />
//                 <span className="text-xs">हम 24 घंटे के भीतर जवाब देंगे</span>
//               </p>
//             </div>

//             {/* Address */}
//             <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
//               <MapPin className="text-primary mb-4" size={32} />
//               <h3 className="text-xl font-bold text-foreground mb-2">
//                 Clinic Address <br />
//                 <span className="text-sm">क्लिनिक का पता</span>
//               </h3>
//               <a
//                 href="https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-foreground/80 hover:text-primary transition-colors"
//               >
//                 <p className="font-semibold mb-1">Club Market kachhari hata, Purnea</p>
//                 <p className="text-sm">Near Dto Office, Commissioner Road</p>
//                 <p className="text-sm">Court-854301</p>
//               </a>
//               <p className="text-sm text-foreground/70 mt-2">
//                 Click to view on Google Maps <br />
//                 <span className="text-xs">Google Maps पर देखने के लिए क्लिक करें</span>
//               </p>
//             </div>

//             {/* Hours */}
//             <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
//               <Clock className="text-primary mb-4" size={32} />
//               <h3 className="text-xl font-bold text-foreground mb-2">
//                 Clinic Hours <br />
//                 <span className="text-sm">क्लिनिक समय</span>
//               </h3>
//               <div className="text-sm text-foreground/80 space-y-1">
//                 <p>Mon-Sat: 11:00 AM – 8:00 PM <br /><span className="text-xs">सोम-शनि: 11:00 AM – 8:00 PM</span></p>
//                 <p>Friday:<b>closed</b> <br /><span className="text-xs">शुक्रवार: <b>बंद</b></span></p>
//                 <p>Sunday: 4:00 PM – 8:00 PM <br /><span className="text-xs">रविवार: 4:00 PM – 8:00 PM</span></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form & Map */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-card border border-border rounded-lg p-8">
//               <h2 className="text-2xl font-bold text-foreground mb-6">
//                 Send us a Message <br />
//                 <span className="text-sm">हमें संदेश भेजें</span>
//               </h2>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* Name */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">
//                     Full Name * <br />
//                     <span className="text-xs">पूरा नाम *</span>
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">
//                     Email Address * <br />
//                     <span className="text-xs">ईमेल पता *</span>
//                   </label>
//                   <input
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                     placeholder="your@email.com"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">
//                     Phone Number <br />
//                     <span className="text-xs">फोन नंबर</span>
//                   </label>
//                   <input
//                     type="tel"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                     placeholder="+91 9608628633"
//                   />
//                 </div>

//                 {/* Subject */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">
//                     Subject * <br />
//                     <span className="text-xs">विषय *</span>
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.subject}
//                     onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                     placeholder="How can we help?"
//                   />
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">
//                     Message * <br />
//                     <span className="text-xs">संदेश *</span>
//                   </label>
//                   <textarea
//                     required
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
//                     rows={5}
//                     placeholder="Your message..."
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
//                 >
//                   <Send size={18} />
//                   {isLoading ? "Sending..." : "Send Message"} <br />
//                   <span className="text-sm">{isLoading ? "भेज रहे हैं..." : "संदेश भेजें"}</span>
//                 </button>
//               </form>
//             </div>

//             {/* Map & Additional Info */}
//             <div className="space-y-6">
//               {/* Map */}
//               <div className="bg-card border border-border rounded-lg overflow-hidden h-80">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   frameBorder="0"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8234567890123!2d87.4683081!3d25.7710094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1234567890d%3A0x1234567890abcdef!2sMariam%20Nagar%2C%20Purnea%2C%20Near%20Dto%20Office%2C%20Commissioner%20Road%2C%20Court-854301!5e0!3m2!1sen!2sin!4v1234567890"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>

//               {/* Quick Links */}
//               <div className="bg-card border border-border rounded-lg p-6">
//                 <h3 className="text-lg font-bold text-foreground mb-4">
//                   Quick Links <br />
//                   <span className="text-sm">त्वरित लिंक</span>
//                 </h3>
//                 <div className="space-y-3">
//                   <a
//                     href="https://wa.me/919608628633"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold text-center"
//                   >
//                     Chat on WhatsApp <br />
//                     <span className="text-sm">व्हाट्सएप पर चैट करें</span>
//                   </a>
//                   <a
//                     href="/consultation"
//                     className="block p-3 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-colors font-semibold text-center"
//                   >
//                     Book Consultation <br />
//                     <span className="text-sm">सलाह बुक करें</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
//             Frequently Asked Questions <br />
//             <span className="text-sm">अक्सर पूछे जाने वाले प्रश्न</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-card border border-border rounded-lg p-6">
//               <h3 className="font-bold text-foreground mb-2">
//                 Is consultation really free? <br />
//                 <span className="text-sm">क्या परामर्श वास्तव में मुफ्त है?</span>
//               </h3>
//               <p className="text-foreground/80 text-sm">
//                 Yes, the initial consultation is completely free. This allows you to discuss your health concerns with Dr. M.H. Rizwi without any obligation. <br />
//                 <span className="text-xs">हाँ, प्रारंभिक परामर्श पूरी तरह से मुफ्त है। इससे आप डॉ. एम.एच. रिज़वी के साथ अपनी स्वास्थ्य समस्याओं पर बिना किसी प्रतिबद्धता के चर्चा कर सकते हैं।</span>
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-6">
//               <h3 className="font-bold text-foreground mb-2">
//                 How long does a consultation take? <br />
//                 <span className="text-sm">परामर्श में कितना समय लगता है?</span>
//               </h3>
//               <p className="text-foreground/80 text-sm">
//                 Typically 30-45 minutes for video calls, 20-30 minutes for phone calls, and flexible for chat consultations depending on your queries. <br />
//                 <span className="text-xs">सामान्यतः वीडियो कॉल के लिए 30-45 मिनट, फोन कॉल के लिए 20-30 मिनट, और चैट परामर्श के लिए आपकी क्वेरी के अनुसार लचीलापन।</span>
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-6">
//               <h3 className="font-bold text-foreground mb-2">
//                 Do you offer online consultations? <br />
//                 <span className="text-sm">क्या आप ऑनलाइन परामर्श प्रदान करते हैं?</span>
//               </h3>
//               <p className="text-foreground/80 text-sm">
//                 Yes, we offer video calls, phone calls, and chat consultations. Choose the mode that works best for you. <br />
//                 <span className="text-xs">हाँ, हम वीडियो कॉल, फोन कॉल और चैट परामर्श प्रदान करते हैं। अपनी सुविधा के अनुसार चुनें।</span>
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-6">
//               <h3 className="font-bold text-foreground mb-2">
//                 What if I need follow-up consultations? <br />
//                 <span className="text-sm">यदि मुझे फॉलो-अप परामर्श की आवश्यकता है तो क्या करें?</span>
//               </h3>
//               <p className="text-foreground/80 text-sm">
//                 Follow-up consultations are available at affordable rates. Dr. M.H. Rizwi will recommend the frequency based on your condition. <br />
//                 <span className="text-xs">फॉलो-अप परामर्श किफ़ायती दरों पर उपलब्ध हैं। डॉ. एम.एच. रिज़वी आपकी स्थिति के अनुसार आवृत्ति की सिफारिश करेंगे।</span>
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-6">
//               <h3 className="font-bold text-foreground mb-2">
//                 Are medicines available online? <br />
//                 <span className="text-sm">क्या दवाइयाँ ऑनलाइन उपलब्ध हैं?</span>
//               </h3>
//               <p className="text-foreground/80 text-sm">
//                 Currently, medicines are available at the clinic. You can contact us for delivery options in your area. <br />
//                 <span className="text-xs">वर्तमान में, दवाइयाँ क्लिनिक में उपलब्ध हैं। अपने क्षेत्र में डिलीवरी विकल्पों के लिए हमसे संपर्क करें।</span>
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-6">
//               <h3 className="font-bold text-foreground mb-2">
//                 What payment methods do you accept? <br />
//                 <span className="text-sm">आप किन भुगतान विधियों को स्वीकार करते हैं?</span>
//               </h3>
//               <p className="text-foreground/80 text-sm">
//                 We accept cash, online transfers, and digital payment methods. Payment details will be provided during consultation booking. <br />
//                 <span className="text-xs">हम नकद, ऑनलाइन ट्रांसफर और डिजिटल भुगतान विधियाँ स्वीकार करते हैं। भुगतान विवरण परामर्श बुकिंग के दौरान प्रदान किया जाएगा।</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }


"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ChevronDown, ChevronUp } from "lucide-react"
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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

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

  const faqs = [
    {
      question: "Is consultation really free?",
      questionHindi: "क्या परामर्श वास्तव में मुफ्त है?",
      answer:
        "Yes, the initial consultation is completely free. This allows you to discuss your health concerns with Dr. M.H. Rizwi without any obligation.",
      answerHindi: "हाँ, प्रारंभिक परामर्श पूरी तरह से मुफ्त है। इससे आप डॉ. एम.एच. रिज़वी के साथ अपनी स्वास्थ्य समस्याओं पर बिना किसी प्रतिबद्धता के चर्चा कर सकते हैं।"
    },
    {
      question: "How long does a consultation take?",
      questionHindi: "परामर्श में कितना समय लगता है?",
      answer: "Typically 30-45 minutes for video calls, 20-30 minutes for phone calls, and flexible for chat consultations depending on your queries.",
      answerHindi: "सामान्यतः वीडियो कॉल के लिए 30-45 मिनट, फोन कॉल के लिए 20-30 मिनट, और चैट परामर्श के लिए आपकी क्वेरी के अनुसार लचीलापन।"
    },
    {
      question: "Do you offer online consultations?",
      questionHindi: "क्या आप ऑनलाइन परामर्श प्रदान करते हैं?",
      answer: "Yes, we offer video calls, phone calls, and chat consultations. Choose the mode that works best for you.",
      answerHindi: "हाँ, हम वीडियो कॉल, फोन कॉल और चैट परामर्श प्रदान करते हैं। अपनी सुविधा के अनुसार चुनें।"
    },
    {
      question: "What if I need follow-up consultations?",
      questionHindi: "यदि मुझे फॉलो-अप परामर्श की आवश्यकता है तो क्या करें?",
      answer: "Follow-up consultations are available at affordable rates. Dr. M.H. Rizwi will recommend the frequency based on your condition.",
      answerHindi: "फॉलो-अप परामर्श किफ़ायती दरों पर उपलब्ध हैं। डॉ. एम.एच. रिज़वी आपकी स्थिति के अनुसार आवृत्ति की सिफारिश करेंगे।"
    },
    {
      question: "Are medicines available online?",
      questionHindi: "क्या दवाइयाँ ऑनलाइन उपलब्ध हैं?",
      answer: "Currently, medicines are available at the clinic. You can contact us for delivery options in your area.",
      answerHindi: "वर्तमान में, दवाइयाँ क्लिनिक में उपलब्ध हैं। अपने क्षेत्र में डिलीवरी विकल्पों के लिए हमसे संपर्क करें।"
    },
    {
      question: "What payment methods do you accept?",
      questionHindi: "आप किन भुगतान विधियों को स्वीकार करते हैं?",
      answer: "We accept cash, online transfers, and digital payment methods. Payment details will be provided during consultation booking.",
      answerHindi: "हम नकद, ऑनलाइन ट्रांसफर और डिजिटल भुगतान विधियाँ स्वीकार करते हैं। भुगतान विवरण परामर्श बुकिंग के दौरान प्रदान किया जाएगा।"
    }
  ]

  return (
    <main className="font-sans text-foreground">
      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full shadow-2xl animate-scale-in">
            <div className="flex justify-center mb-4">
              <CheckCircle className="text-primary animate-bounce" size={64} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">
              Message Sent Successfully! <br />
              <span className="text-sm">संदेश सफलतापूर्वक भेजा गया!</span>
            </h2>
            <p className="text-foreground/80 text-center mb-6 text-sm">
              Thank you for reaching out. We'll get back to you as soon as possible. <br />
              <span>संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।</span>
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Close <br />
              <span className="text-sm">बंद करें</span>
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contact Us <br />
            <span className="text-sm">संपर्क करें</span>
          </h1>
          <p className="text-lg text-foreground/80">
            Get in touch with G.N.Homeo Clinic <br />
            <span className="text-sm">G.N. होम्योपैथिक क्लिनिक से संपर्क करें</span>
          </p>
        </div>
      </section>

      {/* Contact Info Cards (Flipping) */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone Card */}
          <div className="relative">
            <div className="group perspective">
              <div className="card-3d relative w-full h-56 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="card-face card-front absolute inset-0 bg-card border border-border rounded-lg p-8 flex flex-col items-center justify-center">
                  <Phone className="text-primary mb-4 animate-pulse" size={32} />
                  <h3 className="text-xl font-bold mb-2">Phone <br /><span className="text-sm">फोन</span></h3>
                  <a href="tel:+919608628633" className="text-foreground/80 hover:text-primary transition-colors">+91 9608628633</a>
                  <p className="text-sm text-foreground/70 mt-3">Available during clinic hours <br /><span className="text-xs">क्लिनिक के समय उपलब्ध</span></p>
                </div>

                {/* Back */}
                <div className="card-face card-back absolute inset-0 bg-primary text-primary-foreground rounded-lg p-8 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
                  <a href="tel:+919608628633" className="text-2xl font-bold">+91 9608628633</a>
                  <p className="mt-2 text-sm">फोन नंबर</p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="relative">
            <div className="group perspective">
              <div className="card-3d relative w-full h-56 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="card-face card-front absolute inset-0 bg-card border border-border rounded-lg p-8 flex flex-col items-center justify-center">
                  <Mail className="text-primary mb-4 animate-pulse" size={32} />
                  <h3 className="text-xl font-bold mb-2">Email <br /><span className="text-sm">ईमेल</span></h3>
                  <a href="mailto:gnn.homeo@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">gnn.homeo@gmail.com</a>
                  <p className="text-sm text-foreground/70 mt-3">We'll respond within 24 hours <br /><span className="text-xs">हम 24 घंटे के भीतर जवाब देंगे</span></p>
                </div>

                {/* Back */}
                <div className="card-face card-back absolute inset-0 bg-primary text-primary-foreground rounded-lg p-8 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
                  <a href="mailto:gnn.homeo@gmail.com" className="text-lg font-bold">gnn.homeo@gmail.com</a>
                  <p className="mt-2 text-sm">ईमेल</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div className="relative">
            <div className="group perspective">
              <div className="card-3d relative w-full h-56 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="card-face card-front absolute inset-0 bg-card border border-border rounded-lg p-8 flex flex-col items-start justify-center">
                  <MapPin className="text-primary mb-4 animate-pulse" size={32} />
                  <h3 className="text-xl font-bold mb-2">Clinic Address <br /><span className="text-sm">क्लिनिक का पता</span></h3>
                  <a href="https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                    <p className="font-semibold mb-1">Club Market kachhari hata, Purnea</p>
                    <p className="text-sm">Near Dto Office, Commissioner Road</p>
                    <p className="text-sm">Court-854301</p>
                  </a>
                  <p className="text-sm text-foreground/70 ">Click to view on Google Maps <br /><span className="text-xs"></span></p>
                </div>

                {/* Back */}
                <div className="card-face card-back absolute inset-0 bg-primary text-primary-foreground rounded-lg p-8 flex flex-col items-center justify-center rotate-y-180 backface-hidden text-center">
                  <p className="font-semibold text-lg">Club Market kachhari hata, Purnea</p>
                  <p className="text-sm mt-1">Near Dto Office, Commissioner Road</p>
                  <p className="text-sm mt-1">Court-854301</p>
                  <p className="mt-3 text-sm">क्लिनिक का पता</p>
                </div>
              </div>
            </div>
          </div>

          {/* Clinic Hours Card */}
          <div className="relative">
            <div className="group perspective">
              <div className="card-3d relative w-full h-56 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="card-face card-front absolute inset-0 bg-card border border-border rounded-lg p-8 flex flex-col items-start justify-center">
                  <Clock className="text-primary mb-4 animate-pulse" size={32} />
                  <h3 className="text-xl font-bold mb-2">Clinic Hours <br /><span className="text-sm">क्लिनिक समय</span></h3>
                  <div className="text-sm text-foreground/80 space-y-1">
                    <p>Mon-Sat: 11:00 AM – 8:00 PM <br /><span className="text-xs">सोम-शनि: 11:00 AM – 8:00 PM</span></p>
                    <p>Friday:<b>closed</b> <br /><span className="text-xs">शुक्रवार: <b>बंद</b></span></p>
                    <p>Sunday: 4:00 PM – 8:00 PM <br /><span className="text-xs">रविवार: 4:00 PM – 8:00 PM</span></p>
                  </div>
                </div>

                {/* Back */}
                <div className="card-face card-back absolute inset-0 bg-primary text-primary-foreground rounded-lg p-8 flex flex-col items-center justify-center rotate-y-180 backface-hidden text-center">
                  <p className="text-2xl font-bold">Friday: CLOSED</p>
                  <p className="mt-2 text-sm">शुक्रवार: बंद</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Send us a Message <br />
              <span className="text-sm">हमें संदेश भेजें</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name","email","phone","subject","message"].map((field,idx)=>(

                <div key={idx}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {field==="name"?"Full Name *":field==="email"?"Email Address *":field==="phone"?"Phone Number":field==="subject"?"Subject *":"Message *"} <br />
                    <span className="text-xs">{field==="name"?"पूरा नाम *":field==="email"?"ईमेल पता *":field==="phone"?"फोन नंबर":field==="subject"?"विषय *":"संदेश *"}</span>
                  </label>
                  {field==="message"?
                  <textarea required value={formData[field as keyof typeof formData]} onChange={(e)=>setFormData({...formData,[field]:e.target.value})} rows={5} className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Your message..."/>:
                  <input type={field==="email"?"email":field==="phone"?"tel":"text"} required={field!=="phone"} value={formData[field as keyof typeof formData]} onChange={(e)=>setFormData({...formData,[field]:e.target.value})} className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder={field}/>}

                </div>
              ))}
              <button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2 disabled:opacity-50">
                <Send size={18}/>
                {isLoading?"Sending...":"Send Message"} <br />
                <span className="text-sm">{isLoading?"भेज रहे हैं...":"संदेश भेजें"}</span>
              </button>
            </form>
          </div>

          {/* Map & Quick Links */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg overflow-hidden h-80 shadow-lg">
              <iframe width="100%" height="100%" frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8234567890123!2d87.4683081!3d25.7710094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1234567890d%3A0x1234567890abcdef!2sMariam%20Nagar%2C%20Purnea%2C%20Near%20Dto%20Office%2C%20Commissioner%20Road%2C%20Court-854301!5e0!3m2!1sen!2sin!4v1234567890" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Quick Links <br />
                <span className="text-sm">त्वरित लिंक</span>
              </h3>
              <div className="space-y-3">
                <a href="https://wa.me/919608628633" target="_blank" rel="noopener noreferrer" className="block p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold text-center">
                  Chat on WhatsApp <br />
                  <span className="text-sm">व्हाट्सएप पर चैट करें</span>
                </a>
                <a href="/consultation" className="block p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold text-center">
                  Book Consultation <br />
                  <span className="text-sm">सलाह बुक करें</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions <br />
            <span className="text-sm">अक्सर पूछे जाने वाले प्रश्न</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx)=>(

              <div key={idx} className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer" onClick={()=>setOpenFAQ(openFAQ===idx?null:idx)}>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold">{faq.question} <br /><span className="text-sm text-foreground/70">{faq.questionHindi}</span></h3>
                  {openFAQ===idx?<ChevronUp size={24}/>:<ChevronDown size={24}/>}
                </div>
                {openFAQ===idx && <p className="text-foreground/80 mt-3 text-sm">{faq.answer} <br /><span className="text-xs">{faq.answerHindi}</span></p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles for 3D Flip (keeps Tailwind structure) */}
      <style>{`
        .perspective { perspective: 1000px; }
        .card-3d { transform-style: preserve-3d; }
        .card-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .card-front { transform: rotateY(0deg); }
        .card-back { transform: rotateY(180deg); }
        .group-hover\\:rotate-y-180:hover { transform: rotateY(180deg); }
        /* Utility to apply rotate on parent (used above) */
        .group:hover .card-3d { transform: rotateY(180deg); }
        /* Ensure smoothness */
        .card-3d, .card-face { transition: transform 0.7s; }
      `}</style>
    </main>
  )
}

