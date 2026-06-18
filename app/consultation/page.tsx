// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Video, MessageCircle, Phone, Clock, CheckCircle, MapPin } from "lucide-react"
// import { submitConsultation } from "@/app/actions/consultation"

// export default function Consultation() {
//   const [selectedMode, setSelectedMode] = useState<string | null>(null)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     issue: "",
//     preferredTime: "",
//   })
//   const [submitted, setSubmitted] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)

//   const consultationModes = [
//     {
//       id: "video",
//       icon: Video,
//       title: "Video Call",
//       description: "Face-to-face consultation via video call",
//       duration: "30-45 minutes",
//       benefits: ["Personal interaction", "Visual assessment", "Real-time discussion"],
//       action: () =>
//         window.open(
//           "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20video%20call%20consultation",
//           "_blank",
//         ),
//     },
//     {
//       id: "chat",
//       icon: MessageCircle,
//       title: "Chat Consultation",
//       description: "Text-based consultation for quick queries",
//       duration: "Flexible",
//       benefits: ["Convenient", "No time pressure", "Written record"],
//       action: () =>
//         window.open("https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20chat%20consultation", "_blank"),
//     },
//     {
//       id: "phone",
//       icon: Phone,
//       title: "Phone Call",
//       description: "Direct phone consultation with the doctor",
//       duration: "20-30 minutes",
//       benefits: ["Personal touch", "Quick resolution", "Immediate advice"],
//       action: () =>
//         window.open(
//           "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20phone%20call%20consultation",
//           "_blank",
//         ),
//     },
//     {
//       id: "clinic",
//       icon: MapPin,
//       title: "Visit Clinic",
//       description: "In-person consultation at our clinic",
//       duration: "30-45 minutes",
//       benefits: ["Direct examination", "Immediate treatment", "Personal care"],
//       action: () => window.open("https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081", "_blank"),
//     },
//   ]

//   const timings = [
//     "11:00 AM - 12:00 PM",
//     "12:00 PM - 1:00 PM",
//     "2:00 PM - 3:00 PM",
//     "3:00 PM - 4:00 PM",
//     "5:00 PM - 6:00 PM",
//     "6:00 PM - 7:00 PM",
//     "7:00 PM - 8:00 PM",
//   ]

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     try {
//       const result = await submitConsultation({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         issue: formData.issue,
//         preferredMode: selectedMode || "Not specified",
//         preferredTime: formData.preferredTime,
//       })

//       if (result.success) {
//         setSubmitted(true)
//         setTimeout(() => {
//           setSubmitted(false)
//           setFormData({ name: "", email: "", phone: "", issue: "", preferredTime: "" })
//           setSelectedMode(null)
//         }, 3000)
//       }
//     } catch (error) {
//       console.error("[v0] Form submission error:", error)
//       setSubmitted(true)
//       setTimeout(() => {
//         setSubmitted(false)
//       }, 3000)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <main>
//       {/* Header */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-4 animate-fade-in-up">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl font-bold text-foreground mb-4">Free Consultation</h1>
//           <p className="text-lg" style={{ color: "#34D1B8" }}>Schedule your free consultation with Dr. M.H. Rizwi today</p>
//         </div>
//       </section>

//       {/* Consultation Modes */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
//             Choose Your Consultation Mode
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//             {consultationModes.map((mode, idx) => {
//               const Icon = mode.icon
//               const isSelected = selectedMode === mode.id
//               return (
//                 <button
//                   key={mode.id}
//                   onClick={() => {
//                     setSelectedMode(mode.id)
//                     setTimeout(() => mode.action(), 300)
//                   }}
//                   className={`text-left p-6 rounded-lg border-2 transition-all animate-scale-in hover:shadow-lg ${
//                     isSelected
//                       ? "border-primary bg-primary/5 shadow-lg"
//                       : "border-border bg-card hover:border-primary/50"
//                   }`}
//                   style={{ animationDelay: `${idx * 0.1}s` }}
//                 >
//                   <Icon
//                     className={`mb-4 transition-colors ${isSelected ? "text-primary" : "text-foreground/60"}`}
//                     size={32}
//                   />
//                   <h3 className="text-xl font-bold text-foreground mb-2">{mode.title}</h3>
//                   <p className="text-sm text-foreground/70 mb-4">{mode.description}</p>
//                   <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
//                     <Clock size={16} />
//                     <span>{mode.duration}</span>
//                   </div>
//                   <div className="space-y-2">
//                     {mode.benefits.map((benefit, idx) => (
//                       <div key={idx} className="flex items-center gap-2 text-sm">
//                         <CheckCircle size={14} className="text-primary" />
//                         <span className="text-foreground/80">{benefit}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Booking Form */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-2xl mx-auto">
//           <div className="bg-card border border-border rounded-lg p-8 animate-fade-in-up shadow-lg">
//             <h2 className="text-2xl font-bold text-foreground mb-6">Book Your Consultation</h2>

//             {submitted ? (
//               <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
//                 <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full mx-4 animate-scale-in shadow-2xl">
//                   <div className="text-center">
//                     <CheckCircle className="text-primary mx-auto mb-4 animate-glow" size={64} />
//                     <h3 className="text-2xl font-bold text-foreground mb-2">Consultation Booked!</h3>
//                     <p className="text-foreground/80 mb-4">
//                       Your consultation request has been submitted successfully.
//                     </p>
//                     <p className="text-sm text-foreground/70 mb-6">
//                       Dr. M.H. Rizwi will contact you shortly via email and WhatsApp at {formData.phone}.
//                     </p>
//                     <button
//                       onClick={() => {
//                         setSubmitted(false)
//                         setFormData({ name: "", email: "", phone: "", issue: "", preferredTime: "" })
//                         setSelectedMode(null)
//                       }}
//                       className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-all font-semibold"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
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
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                     placeholder="your@email.com"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
//                   <input
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                     placeholder="+91 9608628633"
//                   />
//                 </div>

//                 {/* Health Issue */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Health Issue/Concern *</label>
//                   <textarea
//                     required
//                     value={formData.issue}
//                     onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
//                     rows={4}
//                     placeholder="Describe your health concern..."
//                   />
//                 </div>

//                 {/* Consultation Mode */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Preferred Mode *</label>
//                   <div className="space-y-2">
//                     {consultationModes.map((mode) => (
//                       <label
//                         key={mode.id}
//                         className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-primary/5 transition-colors"
//                       >
//                         <input
//                           type="radio"
//                           name="mode"
//                           value={mode.id}
//                           checked={selectedMode === mode.id}
//                           onChange={(e) => setSelectedMode(e.target.value)}
//                           required
//                           className="w-4 h-4"
//                         />
//                         <span className="font-medium text-foreground">{mode.title}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Preferred Time */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Preferred Time Slot *</label>
//                   <select
//                     required
//                     value={formData.preferredTime}
//                     onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                   >
//                     <option value="">Select a time slot</option>
//                     {timings.map((time) => (
//                       <option key={time} value={time}>
//                         {time}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isLoading ? "Submitting..." : "Request Consultation"}
//                 </button>

//                 <p className="text-xs text-foreground/60 text-center">
//                   By submitting, you agree to be contacted by G.N.Homeo Clinic via email and WhatsApp
//                 </p>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Clinic Hours */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">Clinic Hours</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               { day: "Monday - Thursday", time: "11:00 AM – 8:00 PM" },
//               { day: "Friday", time: "2:00 PM – 8:00 PM" },
//               { day: "Sunday", time: "4:00 PM – 8:00 PM" },
//             ].map((item, idx) => (
//               <div
//                 key={item.day}
//                 className="bg-card border border-border rounded-lg p-6 text-center animate-scale-in hover:shadow-lg transition-all"
//                 style={{ animationDelay: `${idx * 0.1}s` }}
//               >
//                 <h3 className="font-bold text-lg text-foreground mb-2">{item.day}</h3>
//                 <p className="text-2xl font-bold text-primary">{item.time}</p>
//               </div>
//             ))}
//           </div>
//           <p className="text-center text-foreground/70 mt-6">Closed on Saturdays</p>
//         </div>
//       </section>

//       {/* WhatsApp CTA */}
//       <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
//           <p className="text-lg opacity-90 mb-8">Connect with Dr. M.H. Rizwi directly via WhatsApp</p>
//           <a
//             href="https://wa.me/919608628633"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
//           >
//             Chat on WhatsApp
//           </a>
//         </div>
//       </section>
//     </main>
//   )
// }

// "use client";

// import type React from "react";
// import { useState } from "react";
// import {
//   Video,
//   MessageCircle,
//   Phone,
//   Clock,
//   CheckCircle,
//   MapPin,
//   CalendarCheck,
// } from "lucide-react";
// import { submitConsultation } from "@/app/actions/consultation";

// export default function Consultation() {
//   const [selectedMode, setSelectedMode] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     issue: "",
//     preferredTime: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const consultationModes = [
//     {
//       id: "video",
//       icon: Video,
//       title: "Video Call",
//       hindiTitle: "वीडियो कॉल",
//       description: "Face-to-face consultation via video call",
//       hindiDescription: "वीडियो कॉल के माध्यम से आमने-सामने परामर्श",
//       duration: "30-45 minutes",
//       hindiDuration: "30-45 मिनट",
//       benefits: [
//         "Personal interaction",
//         "Visual assessment",
//         "Real-time discussion",
//       ],
//       hindiBenefits: ["व्यक्तिगत बातचीत", "दृश्य मूल्यांकन", "तत्काल चर्चा"],
//       action: () =>
//         window.open(
//           "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20video%20call%20consultation",
//           "_blank"
//         ),
//     },
//     {
//       id: "chat",
//       icon: MessageCircle,
//       title: "Chat Consultation",
//       hindiTitle: "चैट परामर्श",
//       description: "Text-based consultation for quick queries",
//       hindiDescription: "त्वरित प्रश्नों के लिए टेक्स्ट आधारित परामर्श",
//       duration: "Flexible",
//       hindiDuration: "लचीला",
//       benefits: ["Convenient", "No time pressure", "Written record"],
//       hindiBenefits: ["सुविधाजनक", "समय की चिंता नहीं", "लिखित रिकॉर्ड"],
//       action: () =>
//         window.open(
//           "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20phone%20call%20consultation",
//           "_blank"
//         ),
//     },
//     {
//       id: "phone",
//       icon: Phone,
//       title: "Phone Call",
//       hindiTitle: "फोन कॉल",
//       description: "Direct phone consultation with the doctor",
//       hindiDescription: "डॉक्टर के साथ सीधे फोन पर परामर्श",
//       duration: "20-30 minutes",
//       hindiDuration: "20-30 मिनट",
//       benefits: ["Personal touch", "Quick resolution", "Immediate advice"],
//       hindiBenefits: ["व्यक्तिगत संपर्क", "त्वरित समाधान", "तत्काल सलाह"],
//       action: () =>
//         window.open(
//           "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20phone%20call%20consultation",
//           "_blank"
//         ),
//     },
//     {
//       id: "clinic",
//       icon: MapPin,
//       title: "Visit Clinic",
//       hindiTitle: "क्लिनिक जाएं",
//       description: "In-person consultation at our clinic",
//       hindiDescription: "हमारे क्लिनिक में व्यक्तिगत परामर्श",
//       duration: "30-45 minutes",
//       hindiDuration: "30-45 मिनट",
//       benefits: ["Direct examination", "Immediate treatment", "Personal care"],
//       hindiBenefits: ["सीधा परीक्षण", "तत्काल उपचार", "व्यक्तिगत देखभाल"],
//       action: () =>
//         window.open(
//           "https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081",
//           "_blank"
//         ),
//     },
//   ];

//   const timings = [
//     "11:00 AM - 12:00 PM",
//     "12:00 PM - 1:00 PM",
//     "2:00 PM - 3:00 PM",
//     "3:00 PM - 4:00 PM",
//     "5:00 PM - 6:00 PM",
//     "6:00 PM - 7:00 PM",
//     "7:00 PM - 8:00 PM",
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const result = await submitConsultation({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         issue: formData.issue,
//         preferredMode: selectedMode || "Not specified",
//         preferredTime: formData.preferredTime,
//       });

//       if (result.success) {
//         setSubmitted(true);
//         setTimeout(() => {
//           setSubmitted(false);
//           setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             issue: "",
//             preferredTime: "",
//           });
//           setSelectedMode(null);
//         }, 3000);
//       }
//     } catch {
//       setSubmitted(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#F5FCF9]">
//       {/* HEADER */}
//       <section className="bg-gradient-to-r from-[#2AB09E] to-[#34D1B8] text-white py-14">
//         <div className="text-center">
//           <CalendarCheck size={60} className="mx-auto mb-4 opacity-90" />
//           <h1 className="text-4xl font-bold">Free Consultation</h1>
//           <p className="mt-2">
//             Schedule your free consultation with Dr. M.H. Rizwi today <br />
//             <span className="text-sm opacity-90">
//               आज ही डॉ. एम.एच. रिज़वी के साथ अपनी मुफ्त परामर्श निर्धारित करें
//             </span>
//           </p>
//         </div>
//       </section>

//       {/* CHOOSE MODE */}
//       <section className="py-16 px-5">
//         <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
//           Choose Your Consultation Mode <br />
//           <span className="text-sm text-gray-600">
//             अपनी परामर्श का प्रकार चुनें
//           </span>
//         </h2>

//         <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {consultationModes.map((mode) => {
//             const Icon = mode.icon;
//             const active = selectedMode === mode.id;

//             return (
//               <div
//                 key={mode.id}
//                 onClick={() => {
//                   setSelectedMode(mode.id);
//                   setTimeout(() => mode.action(), 300);
//                 }}
//                 className={`cursor-pointer border rounded-xl p-5 transition-all hover:scale-[1.03] ${
//                   active
//                     ? "border-[#2AB09E] shadow-lg bg-white"
//                     : "border-gray-200 bg-white hover:shadow-md"
//                 }`}
//               >
//                 <Icon className="text-[#2AB09E] mb-3" size={32} />

//                 <h3 className="font-bold text-lg">
//                   {mode.title} <br />
//                   <span className="text-sm text-gray-600">
//                     {mode.hindiTitle}
//                   </span>
//                 </h3>

//                 <p className="text-sm text-gray-500 mt-2">
//                   {mode.description} <br />
//                   <span className="text-xs">{mode.hindiDescription}</span>
//                 </p>

//                 <div className="flex items-center text-xs mt-3 text-gray-600 gap-1">
//                   <Clock size={14} /> {mode.duration} ({mode.hindiDuration})
//                 </div>

//                 <ul className="mt-3 space-y-1">
//                   {mode.benefits.map((b, i) => (
//                     <li
//                       key={i}
//                       className="flex items-center gap-1 text-xs text-gray-700"
//                     >
//                       <CheckCircle size={14} className="text-green-600" />
//                       {b} / {mode.hindiBenefits[i]}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* FORM */}
//       <section className="py-16 px-5 bg-white">
//         <div className="max-w-3xl mx-auto bg-[#F9FFFC] border border-green-100 rounded-xl p-8 shadow-md">
//           <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//             Book Your Consultation <br />
//             <span className="text-sm text-gray-600">अपनी परामर्श बुक करें</span>
//           </h2>

//           {submitted ? (
//             <div className="text-center py-10">
//               <CheckCircle size={60} className="text-green-600 mx-auto" />
//               <h3 className="text-xl font-semibold mt-4">
//                 Consultation Booked!
//               </h3>
//               <p className="text-sm text-gray-600 mt-1">
//                 आपकी परामर्श बुक हो गई है!
//               </p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {["name", "email", "phone"].map((field) => (
//                 <input
//                   key={field}
//                   type={field === "email" ? "email" : "text"}
//                   placeholder={field}
//                   required
//                   className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//                   value={(formData as any)[field]}
//                   onChange={(e) =>
//                     setFormData({ ...formData, [field]: e.target.value })
//                   }
//                 />
//               ))}

//               <textarea
//                 placeholder="Describe your health concern..."
//                 required
//                 className="w-full border border-gray-200 p-3 rounded-lg text-sm h-28 focus:outline-none focus:ring-2 focus:ring-green-400"
//                 value={formData.issue}
//                 onChange={(e) =>
//                   setFormData({ ...formData, issue: e.target.value })
//                 }
//               />

//               <select
//                 required
//                 className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//                 value={formData.preferredTime}
//                 onChange={(e) =>
//                   setFormData({ ...formData, preferredTime: e.target.value })
//                 }
//               >
//                 <option value="">Select a time slot</option>
//                 {timings.map((t) => (
//                   <option key={t}>{t}</option>
//                 ))}
//               </select>

//               <button
//                 disabled={isLoading}
//                 className="w-full bg-[#2AB09E] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
//               >
//                 {isLoading ? "Submitting..." : "Request Consultation"}
//               </button>
//             </form>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Video, MessageCircle, Phone, Clock, CheckCircle, MapPin } from "lucide-react"
// import { submitConsultation } from "@/app/actions/consultation"

// export default function Consultation() {
//   const [selectedMode, setSelectedMode] = useState<string | null>(null)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     issue: "",
//     preferredTime: "",
//   })
//   const [submitted, setSubmitted] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)

//   const consultationModes = [
//     {
//       id: "video",
//       icon: Video,
//       title: "Video Call",
//       description: "Face-to-face consultation via video call",
//       duration: "30-45 minutes",
//       benefits: ["Personal interaction", "Visual assessment", "Real-time discussion"],
//       action: () =>
//         window.open(
//           "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20video%20call%20consultation",
//           "_blank",
//         ),
//     },
//     {
//       id: "chat",
//       icon: MessageCircle,
//       title: "Chat Consultation",
//       description: "Text-based consultation for quick queries",
//       duration: "Flexible",
//       benefits: ["Convenient", "No time pressure", "Written record"],
//       action: () =>
//         window.open("https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20chat%20consultation", "_blank"),
//     },
//     {
//       id: "phone",
//       icon: Phone,
//       title: "Phone Call",
//       description: "Direct phone consultation with the doctor",
//       duration: "20-30 minutes",
//       benefits: ["Personal touch", "Quick resolution", "Immediate advice"],
//       action: () =>
//         window.open(
//           "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20phone%20call%20consultation",
//           "_blank",
//         ),
//     },
//     {
//       id: "clinic",
//       icon: MapPin,
//       title: "Visit Clinic",
//       description: "In-person consultation at our clinic",
//       duration: "30-45 minutes",
//       benefits: ["Direct examination", "Immediate treatment", "Personal care"],
//       action: () => window.open("https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081", "_blank"),
//     },
//   ]

//   const timings = [
//     "11:00 AM - 12:00 PM",
//     "12:00 PM - 1:00 PM",
//     "2:00 PM - 3:00 PM",
//     "3:00 PM - 4:00 PM",
//     "5:00 PM - 6:00 PM",
//     "6:00 PM - 7:00 PM",
//     "7:00 PM - 8:00 PM",
//   ]

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     try {
//       const result = await submitConsultation({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         issue: formData.issue,
//         preferredMode: selectedMode || "Not specified",
//         preferredTime: formData.preferredTime,
//       })

//       if (result.success) {
//         setSubmitted(true)
//         setTimeout(() => {
//           setSubmitted(false)
//           setFormData({ name: "", email: "", phone: "", issue: "", preferredTime: "" })
//           setSelectedMode(null)
//         }, 3000)
//       }
//     } catch (error) {
//       console.error("[v0] Form submission error:", error)
//       setSubmitted(true)
//       setTimeout(() => {
//         setSubmitted(false)
//       }, 3000)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <main>
//       {/* Header */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-4 animate-fade-in-up">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl font-bold text-foreground mb-4">Free Consultation</h1>
//           <p className="text-lg text-foreground/80">Schedule your free consultation with Dr. M.H. Rizwi today</p>
//         </div>
//       </section>

//       {/* Consultation Modes */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
//             Choose Your Consultation Mode
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//             {consultationModes.map((mode, idx) => {
//               const Icon = mode.icon
//               const isSelected = selectedMode === mode.id
//               return (
//                 <button
//                   key={mode.id}
//                   onClick={() => {
//                     setSelectedMode(mode.id)
//                     setTimeout(() => mode.action(), 300)
//                   }}
//                   className={`text-left p-6 rounded-lg border-2 transition-all animate-scale-in hover:shadow-lg ${
//                     isSelected
//                       ? "border-primary bg-primary/5 shadow-lg"
//                       : "border-border bg-card hover:border-primary/50"
//                   }`}
//                   style={{ animationDelay: `${idx * 0.1}s` }}
//                 >
//                   <Icon
//                     className={`mb-4 transition-colors ${isSelected ? "text-primary" : "text-foreground/60"}`}
//                     size={32}
//                   />
//                   <h3 className="text-xl font-bold text-foreground mb-2">{mode.title}</h3>
//                   <p className="text-sm text-foreground/70 mb-4">{mode.description}</p>
//                   <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
//                     <Clock size={16} />
//                     <span>{mode.duration}</span>
//                   </div>
//                   <div className="space-y-2">
//                     {mode.benefits.map((benefit, idx) => (
//                       <div key={idx} className="flex items-center gap-2 text-sm">
//                         <CheckCircle size={14} className="text-primary" />
//                         <span className="text-foreground/80">{benefit}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Booking Form */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-2xl mx-auto">
//           <div className="bg-card border border-border rounded-lg p-8 animate-fade-in-up shadow-lg">
//             <h2 className="text-2xl font-bold text-foreground mb-6">Book Your Consultation</h2>

//             {submitted ? (
//               <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
//                 <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full mx-4 animate-scale-in shadow-2xl">
//                   <div className="text-center">
//                     <CheckCircle className="text-primary mx-auto mb-4 animate-glow" size={64} />
//                     <h3 className="text-2xl font-bold text-foreground mb-2">Consultation Booked!</h3>
//                     <p className="text-foreground/80 mb-4">
//                       Your consultation request has been submitted successfully.
//                     </p>
//                     <p className="text-sm text-foreground/70 mb-6">
//                       Dr. M.H. Rizwi will contact you shortly via email and WhatsApp at {formData.phone}.
//                     </p>
//                     <button
//                       onClick={() => {
//                         setSubmitted(false)
//                         setFormData({ name: "", email: "", phone: "", issue: "", preferredTime: "" })
//                         setSelectedMode(null)
//                       }}
//                       className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-all font-semibold"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
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
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                     placeholder="your@email.com"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
//                   <input
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                     placeholder="+91 9608628633"
//                   />
//                 </div>

//                 {/* Health Issue */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Health Issue/Concern *</label>
//                   <textarea
//                     required
//                     value={formData.issue}
//                     onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
//                     rows={4}
//                     placeholder="Describe your health concern..."
//                   />
//                 </div>

//                 {/* Consultation Mode */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Preferred Mode *</label>
//                   <div className="space-y-2">
//                     {consultationModes.map((mode) => (
//                       <label
//                         key={mode.id}
//                         className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-primary/5 transition-colors"
//                       >
//                         <input
//                           type="radio"
//                           name="mode"
//                           value={mode.id}
//                           checked={selectedMode === mode.id}
//                           onChange={(e) => setSelectedMode(e.target.value)}
//                           required
//                           className="w-4 h-4"
//                         />
//                         <span className="font-medium text-foreground">{mode.title}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Preferred Time */}
//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Preferred Time Slot *</label>
//                   <select
//                     required
//                     value={formData.preferredTime}
//                     onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                   >
//                     <option value="">Select a time slot</option>
//                     {timings.map((time) => (
//                       <option key={time} value={time}>
//                         {time}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isLoading ? "Submitting..." : "Request Consultation"}
//                 </button>

//                 <p className="text-xs text-foreground/60 text-center">
//                   By submitting, you agree to be contacted by G.N.Homeo Clinic via email and WhatsApp
//                 </p>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Clinic Hours */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">Clinic Hours</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               { day: "Monday - Thursday", time: "11:00 AM – 8:00 PM" },
//               { day: "Friday", time: "2:00 PM – 8:00 PM" },
//               { day: "Sunday", time: "4:00 PM – 8:00 PM" },
//             ].map((item, idx) => (
//               <div
//                 key={item.day}
//                 className="bg-card border border-border rounded-lg p-6 text-center animate-scale-in hover:shadow-lg transition-all"
//                 style={{ animationDelay: `${idx * 0.1}s` }}
//               >
//                 <h3 className="font-bold text-lg text-foreground mb-2">{item.day}</h3>
//                 <p className="text-2xl font-bold text-primary">{item.time}</p>
//               </div>
//             ))}
//           </div>
//           <p className="text-center text-foreground/70 mt-6">Closed on Saturdays</p>
//         </div>
//       </section>

//       {/* WhatsApp CTA */}
//       <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
//           <p className="text-lg opacity-90 mb-8">Connect with Dr. M.H. Rizwi directly via WhatsApp</p>
//           <a
//             href="https://wa.me/919608628633"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
//           >
//             Chat on WhatsApp
//           </a>
//         </div>
//       </section>
//     </main>
//   )
// }

// "use client";

// import type React from "react";
// import { useState } from "react";
// import {
//   Video,
//   MessageCircle,
//   Phone,
//   Clock,
//   CheckCircle,
//   MapPin,
//   Shield,
//   Sparkles,
//   ArrowRight,
// } from "lucide-react";
// import { submitConsultation } from "@/app/actions/consultation";

// export default function Consultation() {
//   const [selectedMode, setSelectedMode] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     issue: "",
//     preferredTime: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const consultationModes = [
//     {
//       id: "video",
//       icon: Video,
//       title: "Video Call",
//       description: "Face‑to‑face consultation via video call",
//       duration: "30‑45 minutes",
//       benefits: ["Personal interaction", "Visual assessment", "Real‑time discussion"],
//       action: () =>
//         window.open(
//           "https://videocall-app-ashy.vercel.app",
//           "_blank"
//         ),
//     },
//     {
//       id: "chat",
//       icon: MessageCircle,
//       title: "Chat Consultation",
//       description: "Text‑based consultation for quick queries",
//       duration: "Flexible",
//       benefits: ["Convenient", "No time pressure", "Written record"],
//       action: () =>
//         window.open(
//           "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20chat%20consultation",
//           "_blank"
//         ),
//     },
//     {
//       id: "phone",
//       icon: Phone,
//       title: "Phone Call",
//       description: "Direct phone consultation with the doctor",
//       duration: "20‑30 minutes",
//       benefits: ["Personal touch", "Quick resolution", "Immediate advice"],
//       action: () =>
//         window.open(
//           "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20phone%20call%20consultation",
//           "_blank"
//         ),
//     },
//     {
//       id: "clinic",
//       icon: MapPin,
//       title: "Visit Clinic",
//       description: "In‑person consultation at our clinic",
//       duration: "30‑45 minutes",
//       benefits: ["Direct examination", "Immediate treatment", "Personal care"],
//       action: () => window.open("https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081", "_blank"),
//     },
//   ];

//   const timings = [
//     "11:00 AM - 12:00 PM",
//     "12:00 PM - 1:00 PM",
//     "2:00 PM - 3:00 PM",
//     "3:00 PM - 4:00 PM",
//     "5:00 PM - 6:00 PM",
//     "6:00 PM - 7:00 PM",
//     "7:00 PM - 8:00 PM",
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const result = await submitConsultation({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         issue: formData.issue,
//         preferredMode: selectedMode || "Not specified",
//         preferredTime: formData.preferredTime,
//       });

//       if (result.success) {
//         setSubmitted(true);
//         setTimeout(() => {
//           setSubmitted(false);
//           setFormData({ name: "", email: "", phone: "", issue: "", preferredTime: "" });
//           setSelectedMode(null);
//         }, 3000);
//       }
//     } catch (error) {
//       console.error("[v0] Form submission error:", error);
//       setSubmitted(true);
//       setTimeout(() => {
//         setSubmitted(false);
//       }, 3000);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-background">
//       {/* Hero Header */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 py-16 px-4">
//         <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
//         <div className="max-w-7xl mx-auto relative">
//           <div className="flex flex-col items-center text-center">
//             <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-4">
//               <Shield size={14} />
//               Free & Confidential
//             </span>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
//               Free{" "}
//               <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
//                 Consultation
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
//               Schedule your free consultation with Dr. M.H. Rizwi today. Choose the
//               mode that suits you best.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Consultation Modes */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
//               Choose Your <span className="text-primary">Consultation</span> Mode
//             </h2>
//             <p className="text-foreground/60 mt-2">Select the option that fits your needs</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {consultationModes.map((mode, idx) => {
//               const Icon = mode.icon;
//               const isSelected = selectedMode === mode.id;
//               return (
//                 <button
//                   key={mode.id}
//                   onClick={() => {
//                     setSelectedMode(mode.id);
//                     setTimeout(() => mode.action(), 300);
//                   }}
//                   className={`group relative text-left p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
//                     isSelected
//                       ? "border-primary bg-primary/5 shadow-lg scale-[1.02]"
//                       : "border-border bg-card hover:border-primary/50 hover:shadow-md"
//                   }`}
//                   style={{ animationDelay: `${idx * 0.08}s` }}
//                 >
//                   <div className="flex items-start justify-between">
//                     <Icon
//                       className={`mb-4 transition-colors ${
//                         isSelected ? "text-primary" : "text-foreground/60 group-hover:text-primary"
//                       }`}
//                       size={32}
//                     />
//                     {isSelected && <Sparkles size={18} className="text-primary animate-pulse" />}
//                   </div>
//                   <h3 className="text-xl font-bold text-foreground mb-1">{mode.title}</h3>
//                   <p className="text-sm text-foreground/70 mb-3">{mode.description}</p>
//                   <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
//                     <Clock size={16} />
//                     <span>{mode.duration}</span>
//                   </div>
//                   <div className="space-y-1.5">
//                     {mode.benefits.map((benefit, i) => (
//                       <div key={i} className="flex items-center gap-2 text-sm">
//                         <CheckCircle size={14} className="text-primary flex-shrink-0" />
//                         <span className="text-foreground/80">{benefit}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Booking Form */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-2xl mx-auto">
//           <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
//             <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
//               Book Your <span className="text-primary">Consultation</span>
//             </h2>

//             {submitted ? (
//               <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
//                 <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full mx-4 animate-scale-in shadow-2xl">
//                   <div className="text-center">
//                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
//                       <CheckCircle className="text-primary" size={48} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-foreground mb-2">Consultation Booked!</h3>
//                     <p className="text-foreground/70 mb-3">
//                       Your request has been submitted successfully.
//                     </p>
//                     <p className="text-sm text-foreground/60 mb-6">
//                       Dr. M.H. Rizwi will contact you shortly via email and WhatsApp at{" "}
//                       <span className="font-medium text-primary">{formData.phone}</span>.
//                     </p>
//                     <button
//                       onClick={() => {
//                         setSubmitted(false);
//                         setFormData({ name: "", email: "", phone: "", issue: "", preferredTime: "" });
//                         setSelectedMode(null);
//                       }}
//                       className="w-full bg-primary text-primary-foreground py-2.5 rounded-xl hover:opacity-90 transition-all font-semibold shadow-sm"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-foreground mb-1.5">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
//                       placeholder="Your name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-foreground mb-1.5">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-1.5">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
//                     placeholder="+91 9608628633"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-1.5">
//                     Health Issue / Concern *
//                   </label>
//                   <textarea
//                     required
//                     value={formData.issue}
//                     onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
//                     className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none transition-all"
//                     rows={4}
//                     placeholder="Describe your health concern in detail..."
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-1.5">
//                     Preferred Mode *
//                   </label>
//                   <div className="grid grid-cols-2 gap-3">
//                     {consultationModes.map((mode) => (
//                       <label
//                         key={mode.id}
//                         className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${
//                           selectedMode === mode.id
//                             ? "border-primary bg-primary/5 ring-2 ring-primary/30"
//                             : "border-border hover:bg-primary/5"
//                         }`}
//                       >
//                         <input
//                           type="radio"
//                           name="mode"
//                           value={mode.id}
//                           checked={selectedMode === mode.id}
//                           onChange={(e) => setSelectedMode(e.target.value)}
//                           required
//                           className="w-4 h-4 accent-primary"
//                         />
//                         <span className="text-sm font-medium text-foreground">{mode.title}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-1.5">
//                     Preferred Time Slot *
//                   </label>
//                   <select
//                     required
//                     value={formData.preferredTime}
//                     onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
//                     className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
//                   >
//                     <option value="">Select a time slot</option>
//                     {timings.map((time) => (
//                       <option key={time} value={time}>
//                         {time}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl hover:opacity-90 transition-all font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isLoading ? (
//                     "Submitting..."
//                   ) : (
//                     <>
//                       Request Consultation
//                       <ArrowRight size={18} />
//                     </>
//                   )}
//                 </button>

//                 <p className="text-xs text-foreground/50 text-center">
//                   By submitting, you agree to be contacted by G.N.Homeo Clinic via email and WhatsApp.
//                 </p>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Clinic Hours */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
//               Clinic <span className="text-primary">Hours</span>
//             </h2>
//             <p className="text-foreground/60 mt-2">Visit us during our working hours</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {[
//               { day: "Monday - Thursday", time: "11:00 AM – 8:00 PM" },
//               { day: "Friday", time: "2:00 PM – 8:00 PM" },
//               { day: "Sunday", time: "4:00 PM – 8:00 PM" },
//             ].map((item, idx) => (
//               <div
//                 key={item.day}
//                 className="bg-card border border-border/60 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:border-primary/30"
//                 style={{ animationDelay: `${idx * 0.08}s` }}
//               >
//                 <h3 className="font-bold text-lg text-foreground mb-2">{item.day}</h3>
//                 <p className="text-2xl font-bold text-primary">{item.time}</p>
//               </div>
//             ))}
//           </div>
//           <p className="text-center text-foreground/60 mt-6 text-sm">Closed on Saturdays</p>
//         </div>
//       </section>

//       {/* WhatsApp CTA */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-4">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
//         <div className="max-w-7xl mx-auto text-center relative">
//           <h2 className="text-3xl md:text-4xl font-bold mb-3">Need Immediate Assistance?</h2>
//           <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
//             Connect with Dr. M.H. Rizwi directly via WhatsApp for urgent queries.
//           </p>
//           <a
//             href="https://wa.me/919608628633"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
//           >
//             <MessageCircle size={20} />
//             Chat on WhatsApp
//           </a>
//         </div>
//       </section>

//       {/* Inline styles for animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.3s ease-out forwards;
//         }
//         .animate-scale-in {
//           animation: scaleIn 0.3s ease-out forwards;
//         }
//         .bg-grid-white\\/5 {
//           background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
//           background-size: 24px 24px;
//         }
//       `}</style>
//     </main>
//   );
// }


"use client";

import type React from "react";
import { useState } from "react";
import {
  Video,
  MessageCircle,
  Phone,
  Clock,
  CheckCircle,
  MapPin,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { submitConsultation } from "@/app/actions/consultation";

export default function Consultation() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
    preferredTime: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const consultationModes = [
    {
      id: "video",
      icon: Video,
      title: "Video Call",
      description: "Face‑to‑face consultation via video call",
      duration: "30‑45 minutes",
      benefits: ["Personal interaction", "Visual assessment", "Real‑time discussion"],
      action: () =>
        window.open(
          "https://videocall-app-ashy.vercel.app",
          "_blank"
        ),
    },
    {
      id: "chat",
      icon: MessageCircle,
      title: "Chat Consultation",
      description: "Text‑based consultation for quick queries",
      duration: "Flexible",
      benefits: ["Convenient", "No time pressure", "Written record"],
      action: () =>
        window.open(
          "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20chat%20consultation",
          "_blank"
        ),
    },
    {
      id: "phone",
      icon: Phone,
      title: "Phone Call",
      description: "Direct phone consultation with the doctor",
      duration: "20‑30 minutes",
      benefits: ["Personal touch", "Quick resolution", "Immediate advice"],
      action: () =>
        window.open(
          "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20phone%20call%20consultation",
          "_blank"
        ),
    },
    {
      id: "clinic",
      icon: MapPin,
      title: "Visit Clinic",
      description: "In‑person consultation at our clinic",
      duration: "30‑45 minutes",
      benefits: ["Direct examination", "Immediate treatment", "Personal care"],
      action: () => window.open("https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081", "_blank"),
    },
  ];

  const timings = [
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await submitConsultation({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        issue: formData.issue,
        preferredMode: selectedMode || "Not specified",
        preferredTime: formData.preferredTime,
      });

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", phone: "", issue: "", preferredTime: "" });
          setSelectedMode(null);
        }, 3000);
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Header with transparent background banner */}
      <section className="relative overflow-hidden py-16 px-4">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://alshumookhhealthcare.com/img/slider/fbdf936b-b947-4f1c-b33a-b2fd3575e841.jpg"
            alt="Homeopathic consultation for children"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10" />
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-4">
              <Shield size={14} />
              Free & Confidential
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Free{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
              Schedule your free consultation with Dr. M.H. Rizwi today. Choose the
              mode that suits you best.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Modes */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Choose Your <span className="text-primary">Consultation</span> Mode
            </h2>
            <p className="text-foreground/60 mt-2">Select the option that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultationModes.map((mode, idx) => {
              const Icon = mode.icon;
              const isSelected = selectedMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => {
                    setSelectedMode(mode.id);
                    setTimeout(() => mode.action(), 300);
                  }}
                  className={`group relative text-left p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-lg scale-[1.02]"
                      : "border-border bg-card hover:border-primary/50 hover:shadow-md"
                  }`}
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      className={`mb-4 transition-colors ${
                        isSelected ? "text-primary" : "text-foreground/60 group-hover:text-primary"
                      }`}
                      size={32}
                    />
                    {isSelected && <Sparkles size={18} className="text-primary animate-pulse" />}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{mode.title}</h3>
                  <p className="text-sm text-foreground/70 mb-3">{mode.description}</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                    <Clock size={16} />
                    <span>{mode.duration}</span>
                  </div>
                  <div className="space-y-1.5">
                    {mode.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={14} className="text-primary flex-shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Book Your <span className="text-primary">Consultation</span>
            </h2>

            {submitted ? (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
                <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full mx-4 animate-scale-in shadow-2xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <CheckCircle className="text-primary" size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Consultation Booked!</h3>
                    <p className="text-foreground/70 mb-3">
                      Your request has been submitted successfully.
                    </p>
                    <p className="text-sm text-foreground/60 mb-6">
                      Dr. M.H. Rizwi will contact you shortly via email and WhatsApp at{" "}
                      <span className="font-medium text-primary">{formData.phone}</span>.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", issue: "", preferredTime: "" });
                        setSelectedMode(null);
                      }}
                      className="w-full bg-primary text-primary-foreground py-2.5 rounded-xl hover:opacity-90 transition-all font-semibold shadow-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="+91 9608628633"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Health Issue / Concern *
                  </label>
                  <textarea
                    required
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none transition-all"
                    rows={4}
                    placeholder="Describe your health concern in detail..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Preferred Mode *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {consultationModes.map((mode) => (
                      <label
                        key={mode.id}
                        className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${
                          selectedMode === mode.id
                            ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                            : "border-border hover:bg-primary/5"
                        }`}
                      >
                        <input
                          type="radio"
                          name="mode"
                          value={mode.id}
                          checked={selectedMode === mode.id}
                          onChange={(e) => setSelectedMode(e.target.value)}
                          required
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm font-medium text-foreground">{mode.title}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Preferred Time Slot *
                  </label>
                  <select
                    required
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  >
                    <option value="">Select a time slot</option>
                    {timings.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl hover:opacity-90 transition-all font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    "Submitting..."
                  ) : (
                    <>
                      Request Consultation
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-xs text-foreground/50 text-center">
                  By submitting, you agree to be contacted by G.N.Homeo Clinic via email and WhatsApp.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Clinic Hours */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Clinic <span className="text-primary">Hours</span>
            </h2>
            <p className="text-foreground/60 mt-2">Visit us during our working hours</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { day: "Monday - Thursday", time: "11:00 AM – 8:00 PM" },
              { day: "Friday", time: "2:00 PM – 8:00 PM" },
              { day: "Sunday", time: "4:00 PM – 8:00 PM" },
            ].map((item, idx) => (
              <div
                key={item.day}
                className="bg-card border border-border/60 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:border-primary/30"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <h3 className="font-bold text-lg text-foreground mb-2">{item.day}</h3>
                <p className="text-2xl font-bold text-primary">{item.time}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-foreground/60 mt-6 text-sm">Closed on Saturdays</p>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Need Immediate Assistance?</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Connect with Dr. M.H. Rizwi directly via WhatsApp for urgent queries.
          </p>
          <a
            href="https://wa.me/919608628633"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        .bg-grid-white\\/5 {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </main>
  );
}