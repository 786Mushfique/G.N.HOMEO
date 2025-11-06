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


"use client"

import type React from "react"
import { useState } from "react"
import { Video, MessageCircle, Phone, Clock, CheckCircle, MapPin } from "lucide-react"
import { submitConsultation } from "@/app/actions/consultation"

export default function Consultation() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
    preferredTime: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const consultationModes = [
    {
      id: "video",
      icon: Video,
      title: "Video Call",
      hindiTitle: "वीडियो कॉल",
      description: "Face-to-face consultation via video call",
      hindiDescription: "वीडियो कॉल के माध्यम से आमने-सामने परामर्श",
      duration: "30-45 minutes",
      hindiDuration: "30-45 मिनट",
      benefits: ["Personal interaction", "Visual assessment", "Real-time discussion"],
      hindiBenefits: ["व्यक्तिगत बातचीत", "दृश्य मूल्यांकन", "तत्काल चर्चा"],
      action: () =>
        window.open(
          "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20video%20call%20consultation",
          "_blank",
        ),
    },
    {
      id: "chat",
      icon: MessageCircle,
      title: "Chat Consultation",
      hindiTitle: "चैट परामर्श",
      description: "Text-based consultation for quick queries",
      hindiDescription: "त्वरित प्रश्नों के लिए टेक्स्ट आधारित परामर्श",
      duration: "Flexible",
      hindiDuration: "लचीला",
      benefits: ["Convenient", "No time pressure", "Written record"],
      hindiBenefits: ["सुविधाजनक", "समय की चिंता नहीं", "लिखित रिकॉर्ड"],
      action: () =>
        window.open(
          "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20chat%20consultation",
          "_blank",
        ),
    },
    {
      id: "phone",
      icon: Phone,
      title: "Phone Call",
      hindiTitle: "फोन कॉल",
      description: "Direct phone consultation with the doctor",
      hindiDescription: "डॉक्टर के साथ सीधे फोन पर परामर्श",
      duration: "20-30 minutes",
      hindiDuration: "20-30 मिनट",
      benefits: ["Personal touch", "Quick resolution", "Immediate advice"],
      hindiBenefits: ["व्यक्तिगत संपर्क", "त्वरित समाधान", "तत्काल सलाह"],
      action: () =>
        window.open(
          "https://wa.me/919608628633?text=I%20would%20like%20to%20book%20a%20phone%20call%20consultation",
          "_blank",
        ),
    },
    {
      id: "clinic",
      icon: MapPin,
      title: "Visit Clinic",
      hindiTitle: "क्लिनिक जाएं",
      description: "In-person consultation at our clinic",
      hindiDescription: "हमारे क्लिनिक में व्यक्तिगत परामर्श",
      duration: "30-45 minutes",
      hindiDuration: "30-45 मिनट",
      benefits: ["Direct examination", "Immediate treatment", "Personal care"],
      hindiBenefits: ["सीधा परीक्षण", "तत्काल उपचार", "व्यक्तिगत देखभाल"],
      action: () =>
        window.open("https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081", "_blank"),
    },
  ]

  const timings = [
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await submitConsultation({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        issue: formData.issue,
        preferredMode: selectedMode || "Not specified",
        preferredTime: formData.preferredTime,
      })

      if (result.success) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: "", email: "", phone: "", issue: "", preferredTime: "" })
          setSelectedMode(null)
        }, 3000)
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-4 animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Free Consultation</h1>
          <p className="text-lg" style={{ color: "#34D1B8" }}>
            Schedule your free consultation with Dr. M.H. Rizwi today <br />
            <span className="text-sm">आज ही डॉ. एम.एच. रिज़वी के साथ अपनी मुफ्त परामर्श निर्धारित करें</span>
          </p>
        </div>
      </section>

      {/* Consultation Modes */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
            Choose Your Consultation Mode <br />
            <span className="text-sm">अपनी परामर्श का प्रकार चुनें</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {consultationModes.map((mode, idx) => {
              const Icon = mode.icon
              const isSelected = selectedMode === mode.id
              return (
                <button
                  key={mode.id}
                  onClick={() => {
                    setSelectedMode(mode.id)
                    setTimeout(() => mode.action(), 300)
                  }}
                  className={`text-left p-6 rounded-lg border-2 transition-all animate-scale-in hover:shadow-lg ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon
                    className={`mb-4 transition-colors ${isSelected ? "text-primary" : "text-foreground/60"}`}
                    size={32}
                  />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {mode.title} <br />
                    <span className="text-sm">{mode.hindiTitle}</span>
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    {mode.description} <br />
                    <span className="text-xs">{mode.hindiDescription}</span>
                  </p>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                    <Clock size={16} />
                    <span>
                      {mode.duration} <span className="text-xs">{mode.hindiDuration}</span>
                    </span>
                  </div>
                  <div className="space-y-2">
                    {mode.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={14} className="text-primary" />
                        <span className="text-foreground/80">
                          {benefit} <span className="text-xs">{mode.hindiBenefits[idx]}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 animate-fade-in-up shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Book Your Consultation <br />
              <span className="text-sm">अपनी परामर्श बुक करें</span>
            </h2>

            {submitted ? (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
                <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full mx-4 animate-scale-in shadow-2xl">
                  <div className="text-center">
                    <CheckCircle className="text-primary mx-auto mb-4 animate-glow" size={64} />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Consultation Booked! <br />
                      <span className="text-sm">आपकी परामर्श बुक हो गई है!</span>
                    </h3>
                    <p className="text-foreground/80 mb-4">
                      Your consultation request has been submitted successfully. <br />
                      <span className="text-xs">आपका परामर्श अनुरोध सफलतापूर्वक सबमिट हो गया है।</span>
                    </p>
                    <p className="text-sm text-foreground/70 mb-6">
                      Dr. M.H. Rizwi will contact you shortly via email and WhatsApp at {formData.phone}. <br />
                      <span className="text-xs">डॉ. एम.एच. रिज़वी जल्द ही आपको ईमेल और व्हाट्सएप पर संपर्क करेंगे।</span>
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: "", email: "", phone: "", issue: "", preferredTime: "" })
                        setSelectedMode(null)
                      }}
                      className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-all font-semibold"
                    >
                      Close <br />
                      <span className="text-xs">बंद करें</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name * <br />
                    <span className="text-xs">पूरा नाम *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your name / आपका नाम"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address * <br />
                    <span className="text-xs">ईमेल पता *</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="your@email.com / आपका@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number * <br />
                    <span className="text-xs">फ़ोन नंबर *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+91 9608628633"
                  />
                </div>

                {/* Health Issue */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Health Issue/Concern * <br />
                    <span className="text-xs">स्वास्थ्य समस्या / चिंता *</span>
                  </label>
                  <textarea
                    required
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                    rows={4}
                    placeholder="Describe your health concern... / अपनी स्वास्थ्य समस्या का विवरण दें..."
                  />
                </div>

                {/* Consultation Mode */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Preferred Mode * <br />
                    <span className="text-xs">पसंदीदा प्रकार *</span>
                  </label>
                  <div className="space-y-2">
                    {consultationModes.map((mode) => (
                      <label
                        key={mode.id}
                        className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-primary/5 transition-colors"
                      >
                        <input
                          type="radio"
                          name="mode"
                          value={mode.id}
                          checked={selectedMode === mode.id}
                          onChange={(e) => setSelectedMode(e.target.value)}
                          required
                          className="w-4 h-4"
                        />
                        <span className="font-medium text-foreground">
                          {mode.title} / {mode.hindiTitle}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Preferred Time Slot * <br />
                    <span className="text-xs">पसंदीदा समय *</span>
                  </label>
                  <select
                    required
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Select a time slot / समय चुनें</option>
                    {timings.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting... / सबमिट हो रहा है..." : "Request Consultation / परामर्श का अनुरोध करें"}
                </button>

                <p className="text-xs text-foreground/60 text-center">
                  By submitting, you agree to be contacted by G.N.Homeo Clinic via email and WhatsApp <br />
                  <span className="text-xs">सबमिट करके, आप G.N.Homeo क्लिनिक द्वारा ईमेल और व्हाट्सएप के माध्यम से संपर्क किए जाने के लिए सहमत हैं</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Clinic Hours */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
            Clinic Hours <br />
            <span className="text-sm">क्लिनिक का समय</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { day: "Monday - Saturday", time: "11:00 AM – 8:00 PM" },
              { day: "Friday", time: "Closed" },
              { day: "Sunday", time: "4:00 PM – 8:00 PM" },
            ].map((item, idx) => (
              <div
                key={item.day}
                className="bg-card border border-border rounded-lg p-6 text-center animate-scale-in hover:shadow-lg transition-all"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {item.day} <br />
                  <span className="text-sm">
                    {item.day === "Monday - Saturday"
                      ? "सोमवार - शनिवार"
                      : item.day === "Friday"
                      ? "शुक्रवार"
                      : "रविवार"}
                  </span>
                </h3>
                <p className="text-2xl font-bold text-primary">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Immediate Assistance? <br />
            <span className="text-sm">तुरंत सहायता चाहिए?</span>
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Connect with Dr. M.H. Rizwi directly via WhatsApp <br />
            <span className="text-sm">डॉ. एम.एच. रिज़वी से सीधे व्हाट्सएप के माध्यम से संपर्क करें</span>
          </p>
          <a
            href="https://wa.me/919608628633"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
          >
            Chat on WhatsApp / व्हाट्सएप पर चैट करें
          </a>
        </div>
      </section>
    </main>
  )
}
