// "use client"

// import Image from "next/image"
// import { Heart, Users, Leaf } from "lucide-react"

// export default function Donation() {
//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4 animate-fade-in-up">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Support Our Mission</h1>
//           <p className="text-lg text-foreground/80 max-w-2xl">
//             Your donation helps us provide free healthcare and medicines to those in need.
//           </p>
//         </div>
//       </section>

//       {/* Impact Section */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
//             How Your Donation Helps
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-card border border-border rounded-lg p-8 animate-scale-in hover:shadow-lg transition-all">
//               <Heart className="text-primary mb-4" size={40} />
//               <h3 className="text-xl font-bold text-foreground mb-4">Free Checkups</h3>
//               <p className="text-foreground/80">
//                 Your donation enables us to provide free health consultations and checkups to underprivileged families
//                 and individuals who cannot afford medical care.
//               </p>
//             </div>

//             <div
//               className="bg-card border border-border rounded-lg p-8 animate-scale-in hover:shadow-lg transition-all"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <Leaf className="text-primary mb-4" size={40} />
//               <h3 className="text-xl font-bold text-foreground mb-4">Free Medicines</h3>
//               <p className="text-foreground/80">
//                 We distribute authentic homeopathic medicines at no cost to patients in need, ensuring that natural
//                 healing is accessible to everyone regardless of their financial situation.
//               </p>
//             </div>

//             <div
//               className="bg-card border border-border rounded-lg p-8 animate-scale-in hover:shadow-lg transition-all"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <Users className="text-primary mb-4" size={40} />
//               <h3 className="text-xl font-bold text-foreground mb-4">Community Programs</h3>
//               <p className="text-foreground/80">
//                 Your support helps us organize free health camps, awareness programs, and medical assistance for
//                 vulnerable sections of society.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Donation Section */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="animate-slide-in-left">
//               <h2 className="text-3xl font-bold text-foreground mb-6">Make a Donation</h2>
//               <p className="text-lg text-foreground/80 mb-6">
//                 Every donation, no matter the amount, makes a significant difference in the lives of those we serve.
//                 Your generosity helps us continue our mission of providing affordable and natural healing to everyone.
//               </p>

//               <div className="space-y-4 mb-8">
//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                     <span className="text-primary-foreground font-bold">✓</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-1">100% Transparent</h4>
//                     <p className="text-foreground/80 text-sm">
//                       All donations are used directly for patient care and medicines.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                     <span className="text-primary-foreground font-bold">✓</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-1">Tax Benefits</h4>
//                     <p className="text-foreground/80 text-sm">
//                       Donations may be eligible for tax deductions. Contact us for details.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                     <span className="text-primary-foreground font-bold">✓</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-1">Secure Payment</h4>
//                     <p className="text-foreground/80 text-sm">Your payment information is secure and protected.</p>
//                   </div>
//                 </div>
//               </div>

//               <p className="text-foreground/80 mb-6">
//                 <span className="font-semibold text-foreground">
//                   Together, we can make healthcare accessible to all.
//                 </span>{" "}
//                 Join us in our mission to heal naturally and affordably.
//               </p>
//             </div>

//             {/* QR Code Section */}
//             <div className="flex flex-col items-center justify-center animate-scale-in">
//               <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-primary">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-coBnTWSz11EXy2SSpBYEU6fN6P4MZt.png"
//                   alt="Paytm UPI QR Code for Donation"
//                   width={300}
//                   height={300}
//                   className="w-full h-auto"
//                 />
//                 <p className="text-center text-foreground font-semibold mt-4">Scan to Donate</p>
//                 <p className="text-center text-foreground/80 text-sm mt-2">UPI: 7782907822@ptsbi</p>
//               </div>

//               <div className="mt-8 text-center">
//                 <p className="text-foreground/80 mb-4">
//                   <span className="font-semibold text-foreground">Payment Methods:</span>
//                 </p>
//                 <p className="text-foreground/80 text-sm">Paytm • Google Pay • PhonePe • BHIM • Bank Transfer</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Impact Stories */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">Your Impact</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-primary/10 rounded-lg p-8 text-center animate-slide-in-left hover:shadow-lg transition-all">
//               <p className="text-4xl font-bold text-primary mb-2">500+</p>
//               <p className="text-foreground font-semibold mb-2">Free Consultations</p>
//               <p className="text-foreground/80 text-sm">Provided annually to patients in need</p>
//             </div>

//             <div className="bg-primary/10 rounded-lg p-8 text-center animate-fade-in-up hover:shadow-lg transition-all">
//               <p className="text-4xl font-bold text-primary mb-2">1000+</p>
//               <p className="text-foreground font-semibold mb-2">Medicines Distributed</p>
//               <p className="text-foreground/80 text-sm">Free homeopathic remedies given to patients</p>
//             </div>

//             <div className="bg-primary/10 rounded-lg p-8 text-center animate-slide-in-right hover:shadow-lg transition-all">
//               <p className="text-4xl font-bold text-primary mb-2">50+</p>
//               <p className="text-foreground font-semibold mb-2">Health Camps</p>
//               <p className="text-foreground/80 text-sm">Community awareness and free checkup programs</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Be Part of the Healing Mission</h2>
//           <p className="text-lg opacity-90 mb-8">
//             Your donation today can change someone's life tomorrow. Scan the QR code or contact us to contribute.
//           </p>
//           <a
//             href="https://wa.me/919608628633"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
//           >
//             Contact Us for More Information
//           </a>
//         </div>
//       </section>
//     </main>
//   )
// }

// "use client"

// import Image from "next/image"
// import { Heart, Users, Leaf } from "lucide-react"

// export default function Donation() {
//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4 animate-fade-in-up">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//             Support Our Mission <br />
//             <span className="text-sm">हमारे मिशन का समर्थन करें</span>
//           </h1>
//           <p className="text-lg text-foreground/80 max-w-2xl">
//             Your donation helps us provide free healthcare and medicines to those in need. <br />
//             <span className="text-sm">आपका दान उन लोगों को मुफ्त स्वास्थ्य देखभाल और दवाइयां प्रदान करने में मदद करता है जिन्हें इसकी आवश्यकता है।</span>
//           </p>
//         </div>
//       </section>

//       {/* Impact Section */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
//             How Your Donation Helps <br />
//             <span className="text-sm">आपका दान कैसे मदद करता है</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-card border border-border rounded-lg p-8 animate-scale-in hover:shadow-lg transition-all">
//               <Heart className="text-primary mb-4" size={40} />
//               <h3 className="text-xl font-bold text-foreground mb-4">
//                 Free Checkups <br />
//                 <span className="text-sm">मुफ़्त स्वास्थ्य जांच</span>
//               </h3>
//               <p className="text-foreground/80">
//                 Your donation enables us to provide free health consultations and checkups to underprivileged families
//                 and individuals who cannot afford medical care. <br />
//                 <span className="text-sm">आपका दान हमें उन परिवारों और व्यक्तियों को मुफ्त स्वास्थ्य परामर्श और जांच प्रदान करने में सक्षम बनाता है जो चिकित्सा देखभाल का खर्च नहीं उठा सकते।</span>
//               </p>
//             </div>

//             <div
//               className="bg-card border border-border rounded-lg p-8 animate-scale-in hover:shadow-lg transition-all"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <Leaf className="text-primary mb-4" size={40} />
//               <h3 className="text-xl font-bold text-foreground mb-4">
//                 Free Medicines <br />
//                 <span className="text-sm">मुफ़्त दवाइयाँ</span>
//               </h3>
//               <p className="text-foreground/80">
//                 We distribute authentic homeopathic medicines at no cost to patients in need, ensuring that natural
//                 healing is accessible to everyone regardless of their financial situation. <br />
//                 <span className="text-sm">हम जरूरतमंद मरीजों को वास्तविक होम्योपैथिक दवाइयाँ मुफ्त में वितरित करते हैं, यह सुनिश्चित करते हुए कि प्राकृतिक उपचार हर किसी के लिए सुलभ हो।</span>
//               </p>
//             </div>

//             <div
//               className="bg-card border border-border rounded-lg p-8 animate-scale-in hover:shadow-lg transition-all"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <Users className="text-primary mb-4" size={40} />
//               <h3 className="text-xl font-bold text-foreground mb-4">
//                 Community Programs <br />
//                 <span className="text-sm">सामुदायिक कार्यक्रम</span>
//               </h3>
//               <p className="text-foreground/80">
//                 Your support helps us organize free health camps, awareness programs, and medical assistance for
//                 vulnerable sections of society. <br />
//                 <span className="text-sm">आपका समर्थन हमें मुफ्त स्वास्थ्य शिविर, जागरूकता कार्यक्रम और समाज के कमजोर वर्गों के लिए चिकित्सा सहायता आयोजित करने में मदद करता है।</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Donation Section */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="animate-slide-in-left">
//               <h2 className="text-3xl font-bold text-foreground mb-6">
//                 Make a Donation <br />
//                 <span className="text-sm">दान करें</span>
//               </h2>
//               <p className="text-lg text-foreground/80 mb-6">
//                 Every donation, no matter the amount, makes a significant difference in the lives of those we serve.
//                 Your generosity helps us continue our mission of providing affordable and natural healing to everyone. <br />
//                 <span className="text-sm">हर दान, चाहे राशि कितनी भी हो, हमारे द्वारा सेवा प्राप्त करने वालों के जीवन में महत्वपूर्ण बदलाव लाता है। आपकी उदारता हमें सभी के लिए सस्ती और प्राकृतिक चिकित्सा प्रदान करने के मिशन को जारी रखने में मदद करती है।</span>
//               </p>

//               <div className="space-y-4 mb-8">
//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                     <span className="text-primary-foreground font-bold">✓</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-1">
//                       100% Transparent <br />
//                       <span className="text-xs">100% पारदर्शी</span>
//                     </h4>
//                     <p className="text-foreground/80 text-sm">
//                       All donations are used directly for patient care and medicines. <br />
//                       <span className="text-xs">सभी दान सीधे रोगी देखभाल और दवाओं के लिए उपयोग किए जाते हैं।</span>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                     <span className="text-primary-foreground font-bold">✓</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-1">
//                       Tax Benefits <br />
//                       <span className="text-xs">कर लाभ</span>
//                     </h4>
//                     <p className="text-foreground/80 text-sm">
//                       Donations may be eligible for tax deductions. Contact us for details. <br />
//                       <span className="text-xs">दान कर कटौती के पात्र हो सकते हैं। विवरण के लिए हमसे संपर्क करें।</span>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                     <span className="text-primary-foreground font-bold">✓</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-1">
//                       Secure Payment <br />
//                       <span className="text-xs">सुरक्षित भुगतान</span>
//                     </h4>
//                     <p className="text-foreground/80 text-sm">
//                       Your payment information is secure and protected. <br />
//                       <span className="text-xs">आपकी भुगतान जानकारी सुरक्षित और संरक्षित है।</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <p className="text-foreground/80 mb-6">
//                 <span className="font-semibold text-foreground">
//                   Together, we can make healthcare accessible to all. <br />
//                   <span className="text-sm">साथ मिलकर, हम स्वास्थ्य देखभाल को सभी के लिए सुलभ बना सकते हैं।</span>
//                 </span>{" "}
//                 Join us in our mission to heal naturally and affordably. <br />
//                 <span className="text-sm">हमारे मिशन में शामिल हों ताकि प्राकृतिक और सस्ती चिकित्सा संभव हो सके।</span>
//               </p>
//             </div>

//             {/* QR Code Section */}
//             <div className="flex flex-col items-center justify-center animate-scale-in">
//               <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-primary">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-coBnTWSz11EXy2SSpBYEU6fN6P4MZt.png"
//                   alt="Paytm UPI QR Code for Donation"
//                   width={300}
//                   height={300}
//                   className="w-full h-auto"
//                 />
//                 <p className="text-center text-foreground font-semibold mt-4">
//                   Scan to Donate <br />
//                   <span className="text-sm">दान करने के लिए स्कैन करें</span>
//                 </p>
//                 <p className="text-center text-foreground/80 text-sm mt-2">
//                   UPI: 7782907822@ptsbi
//                 </p>
//               </div>

//               <div className="mt-8 text-center">
//                 <p className="text-foreground/80 mb-4">
//                   <span className="font-semibold text-foreground">Payment Methods: <br />
//                   <span className="text-sm">भुगतान के तरीके:</span></span>
//                 </p>
//                 <p className="text-foreground/80 text-sm">Paytm • Google Pay • PhonePe • BHIM • Bank Transfer</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Impact Stories */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
//             Your Impact <br />
//             <span className="text-sm">आपका प्रभाव</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-primary/10 rounded-lg p-8 text-center animate-slide-in-left hover:shadow-lg transition-all">
//               <p className="text-4xl font-bold text-primary mb-2">500+</p>
//               <p className="text-foreground font-semibold mb-2">
//                 Free Consultations <br />
//                 <span className="text-sm">मुफ़्त परामर्श</span>
//               </p>
//               <p className="text-foreground/80 text-sm">Provided annually to patients in need <br />
//                 <span className="text-xs">जरूरतमंद मरीजों को वार्षिक रूप से प्रदान किया गया</span>
//               </p>
//             </div>

//             <div className="bg-primary/10 rounded-lg p-8 text-center animate-fade-in-up hover:shadow-lg transition-all">
//               <p className="text-4xl font-bold text-primary mb-2">1000+</p>
//               <p className="text-foreground font-semibold mb-2">
//                 Medicines Distributed <br />
//                 <span className="text-sm">वितरित दवाइयाँ</span>
//               </p>
//               <p className="text-foreground/80 text-sm">Free homeopathic remedies given to patients <br />
//                 <span className="text-xs">मरीजों को मुफ्त होम्योपैथिक दवाइयाँ दी गईं</span>
//               </p>
//             </div>

//             <div className="bg-primary/10 rounded-lg p-8 text-center animate-slide-in-right hover:shadow-lg transition-all">
//               <p className="text-4xl font-bold text-primary mb-2">50+</p>
//               <p className="text-foreground font-semibold mb-2">
//                 Health Camps <br />
//                 <span className="text-sm">स्वास्थ्य शिविर</span>
//               </p>
//               <p className="text-foreground/80 text-sm">Community awareness and free checkup programs <br />
//                 <span className="text-xs">सामुदायिक जागरूकता और मुफ्त जांच कार्यक्रम</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Be Part of the Healing Mission <br />
//             <span className="text-sm">उपचार मिशन का हिस्सा बनें</span>
//           </h2>
//           <p className="text-lg opacity-90 mb-8">
//             Your donation today can change someone's life tomorrow. Scan the QR code or contact us to contribute. <br />
//             <span className="text-sm">आज आपका दान किसी के जीवन को कल बदल सकता है। योगदान करने के लिए QR कोड स्कैन करें या हमसे संपर्क करें।</span>
//           </p>
//           <a
//             href="https://wa.me/919608628633"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
//           >
//             Contact Us for More Information <br />
//             <span className="text-sm">अधिक जानकारी के लिए हमसे संपर्क करें</span>
//           </a>
//         </div>
//       </section>
//     </main>
//   )
// }

// "use client";

// import Image from "next/image";
// import { Heart, Users, Leaf, Shield, Gift, Clock, CheckCircle, Sparkles, ArrowRight } from "lucide-react";

// export default function Donation() {
//   return (
//     <main className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 py-16 px-4">
//         <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
//         <div className="max-w-7xl mx-auto relative">
//           <div className="flex flex-col items-center text-center">
//             <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-4">
//               <Heart size={14} />
//               Support Our Mission
//             </span>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
//               Make a <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Difference</span>
//             </h1>
//             <p className="text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed">
//               Your donation helps us provide free healthcare and medicines to those in need.
//             </p>
//             <p className="text-sm text-foreground/50 mt-1">हमारे मिशन का समर्थन करें</p>
//             <div className="mt-6 flex flex-wrap gap-4 justify-center">
//               <a
//                 href="#donate"
//                 className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
//               >
//                 Donate Now
//                 <ArrowRight size={18} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Impact Section */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
//               How Your Donation <span className="text-primary">Helps</span>
//             </h2>
//             <p className="text-foreground/60 mt-2">आपका दान कैसे मदद करता है</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Heart,
//                 title: "Free Checkups",
//                 sub: "मुफ़्त स्वास्थ्य जांच",
//                 description:
//                   "Your donation enables us to provide free health consultations and checkups to underprivileged families and individuals who cannot afford medical care.",
//                 hindi:
//                   "आपका दान हमें उन परिवारों और व्यक्तियों को मुफ्त स्वास्थ्य परामर्श और जांच प्रदान करने में सक्षम बनाता है जो चिकित्सा देखभाल का खर्च नहीं उठा सकते।",
//               },
//               {
//                 icon: Leaf,
//                 title: "Free Medicines",
//                 sub: "मुफ़्त दवाइयाँ",
//                 description:
//                   "We distribute authentic homeopathic medicines at no cost to patients in need, ensuring natural healing is accessible to everyone regardless of their financial situation.",
//                 hindi:
//                   "हम जरूरतमंद मरीजों को वास्तविक होम्योपैथिक दवाइयाँ मुफ्त में वितरित करते हैं, यह सुनिश्चित करते हुए कि प्राकृतिक उपचार हर किसी के लिए सुलभ हो।",
//               },
//               {
//                 icon: Users,
//                 title: "Community Programs",
//                 sub: "सामुदायिक कार्यक्रम",
//                 description:
//                   "Your support helps us organize free health camps, awareness programs, and medical assistance for vulnerable sections of society.",
//                 hindi:
//                   "आपका समर्थन हमें मुफ्त स्वास्थ्य शिविर, जागरूकता कार्यक्रम और समाज के कमजोर वर्गों के लिए चिकित्सा सहायता आयोजित करने में मदद करता है।",
//               },
//             ].map((item, idx) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={idx}
//                   className="group bg-card border border-border/60 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
//                   style={{ animationDelay: `${idx * 0.1}s` }}
//                 >
//                   <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
//                     <Icon className="text-primary" size={28} />
//                   </div>
//                   <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
//                   <p className="text-sm text-foreground/50 mb-3">{item.sub}</p>
//                   <p className="text-foreground/80 leading-relaxed">{item.description}</p>
//                   <p className="text-xs text-foreground/40 mt-3 border-t border-border/50 pt-3">{item.hindi}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Our Promise Section */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
//               Our <span className="text-primary">Promise</span> to You
//             </h2>
//             <p className="text-foreground/60 mt-2">हमारा वादा</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: Shield, title: "100% Transparent", desc: "All donations are used directly for patient care.", hindi: "सभी दान सीधे रोगी देखभाल के लिए उपयोग किए जाते हैं।" },
//               { icon: Gift, title: "Tax Benefits", desc: "Donations may be eligible for tax deductions.", hindi: "दान कर कटौती के पात्र हो सकते हैं।" },
//               { icon: Clock, title: "Immediate Impact", desc: "Your donation helps patients today, not tomorrow.", hindi: "आपका दान आज मरीजों की मदद करता है, कल नहीं।" },
//               { icon: CheckCircle, title: "Secure Payment", desc: "Your payment information is safe and protected.", hindi: "आपकी भुगतान जानकारी सुरक्षित और संरक्षित है।" },
//             ].map((item, idx) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={idx}
//                   className="bg-card border border-border/60 rounded-xl p-6 text-center hover:shadow-md transition-all hover:border-primary/30"
//                   style={{ animationDelay: `${idx * 0.08}s` }}
//                 >
//                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
//                     <Icon className="text-primary" size={24} />
//                   </div>
//                   <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
//                   <p className="text-sm text-foreground/70">{item.desc}</p>
//                   <p className="text-xs text-foreground/40 mt-2">{item.hindi}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Donation Section with QR */}
//       <section id="donate" className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Make a <span className="text-primary">Donation</span>
//               </h2>
//               <p className="text-foreground/80 mb-6 leading-relaxed">
//                 Every donation, no matter the amount, makes a significant difference in the lives of those we serve.
//                 Your generosity helps us continue our mission of providing affordable and natural healing to everyone.
//               </p>
//               <p className="text-sm text-foreground/50 mb-8">हर दान, चाहे राशि कितनी भी हो, महत्वपूर्ण बदलाव लाता है।</p>

//               <div className="space-y-4 mb-8">
//                 <div className="flex items-start gap-4 bg-card rounded-xl p-4 border border-border/60">
//                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <Shield size={16} className="text-primary" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-foreground">100% Transparent</p>
//                     <p className="text-sm text-foreground/70">All donations are used directly for patient care and medicines.</p>
//                     <p className="text-xs text-foreground/40">सभी दान सीधे रोगी देखभाल और दवाओं के लिए उपयोग किए जाते हैं।</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 bg-card rounded-xl p-4 border border-border/60">
//                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <Gift size={16} className="text-primary" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-foreground">Tax Benefits</p>
//                     <p className="text-sm text-foreground/70">Donations may be eligible for tax deductions. Contact us for details.</p>
//                     <p className="text-xs text-foreground/40">दान कर कटौती के पात्र हो सकते हैं। विवरण के लिए हमसे संपर्क करें।</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 bg-card rounded-xl p-4 border border-border/60">
//                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <CheckCircle size={16} className="text-primary" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-foreground">Secure Payment</p>
//                     <p className="text-sm text-foreground/70">Your payment information is secure and protected.</p>
//                     <p className="text-xs text-foreground/40">आपकी भुगतान जानकारी सुरक्षित और संरक्षित है।</p>
//                   </div>
//                 </div>
//               </div>

//               <p className="text-foreground/80 italic">
//                 <span className="font-semibold text-foreground">Together, we can make healthcare accessible to all.</span>
//                 <br />
//                 <span className="text-sm text-foreground/60">साथ मिलकर, हम स्वास्थ्य देखभाल को सभी के लिए सुलभ बना सकते हैं।</span>
//               </p>
//             </div>

//             {/* QR Code */}
//             <div className="flex flex-col items-center">
//               <div className="bg-white dark:bg-card p-6 rounded-2xl shadow-xl border-4 border-primary/20 max-w-sm w-full">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-coBnTWSz11EXy2SSpBYEU6fN6P4MZt.png"
//                   alt="Paytm UPI QR Code for Donation"
//                   width={300}
//                   height={300}
//                   className="w-full h-auto rounded-lg"
//                 />
//                 <div className="mt-4 text-center">
//                   <p className="font-bold text-foreground text-lg">Scan to Donate</p>
//                   <p className="text-sm text-foreground/50">दान करने के लिए स्कैन करें</p>
//                   <div className="mt-3 bg-primary/5 rounded-lg py-2 px-4 inline-block">
//                     <p className="font-mono text-primary font-semibold">UPI: 7782907822@ptsbi</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 text-center">
//                 <p className="text-foreground/70 font-semibold">Payment Methods</p>
//                 <p className="text-sm text-foreground/50">Paytm • Google Pay • PhonePe • BHIM • Bank Transfer</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Impact Stories / Numbers */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
//               Your <span className="text-primary">Impact</span> in Numbers
//             </h2>
//             <p className="text-foreground/60 mt-2">आपका प्रभाव</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { number: "500+", label: "Free Consultations", sub: "मुफ़्त परामर्श", detail: "Provided annually to patients in need", hindiDetail: "जरूरतमंद मरीजों को वार्षिक रूप से प्रदान किया गया" },
//               { number: "1000+", label: "Medicines Distributed", sub: "वितरित दवाइयाँ", detail: "Free homeopathic remedies given to patients", hindiDetail: "मरीजों को मुफ्त होम्योपैथिक दवाइयाँ दी गईं" },
//               { number: "50+", label: "Health Camps", sub: "स्वास्थ्य शिविर", detail: "Community awareness and free checkup programs", hindiDetail: "सामुदायिक जागरूकता और मुफ्त जांच कार्यक्रम" },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-card border border-border/60 rounded-2xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1"
//                 style={{ animationDelay: `${idx * 0.1}s` }}
//               >
//                 <p className="text-5xl font-extrabold text-primary mb-2">{item.number}</p>
//                 <p className="text-xl font-bold text-foreground">{item.label}</p>
//                 <p className="text-sm text-foreground/50 mb-2">{item.sub}</p>
//                 <p className="text-foreground/70 text-sm">{item.detail}</p>
//                 <p className="text-xs text-foreground/40 mt-2 border-t border-border/50 pt-2">{item.hindiDetail}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-4">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
//         <div className="max-w-7xl mx-auto text-center relative">
//           <Sparkles className="mx-auto mb-4" size={32} />
//           <h2 className="text-3xl md:text-4xl font-bold mb-3">
//             Be Part of the Healing Mission
//           </h2>
//           <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
//             Your donation today can change someone's life tomorrow. Scan the QR code or contact us to contribute.
//           </p>
//           <p className="text-sm opacity-80 mb-8">उपचार मिशन का हिस्सा बनें</p>
//           <a
//             href="https://wa.me/919608628633"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
//           >
//             <Heart size={20} />
//             Contact Us for More Information
//           </a>
//           <p className="text-xs opacity-70 mt-4">अधिक जानकारी के लिए हमसे संपर्क करें</p>
//         </div>
//       </section>

//       {/* Inline Animations */}
//       <style jsx>{`
//         .bg-grid-white\\/5 {
//           background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
//           background-size: 24px 24px;
//         }
//       `}</style>
//     </main>
//   );
// }


"use client";

import Image from "next/image";
import {
    Heart,
    Users,
    Leaf,
    Shield,
    Gift,
    Clock,
    CheckCircle,
    Sparkles,
    ArrowRight,
    Award,
    Calendar,
    User,
    ChevronRight,
    Stethoscope,
    Pill,
    School,
    HandHelping,
    Coffee,
    Briefcase,
    GraduationCap,
} from "lucide-react";

export default function Donation() {
    // Donation tiers showing what each amount provides
    const donationTiers = [
        {
            amount: "₹500",
            label: "Medicines for 10 Patients",
            desc: "Provides essential homeopathic medicines for 10 underprivileged patients for a full treatment course.",
            hindi: "10 रोगियों के लिए आवश्यक होम्योपैथिक दवाइयाँ।",
            icon: Pill,
            color: "from-green-500 to-emerald-600",
        },
        {
            amount: "₹1,000",
            label: "Free Health Checkup Camp",
            desc: "Funds a free health checkup camp for 25 people, including consultations and basic diagnostics.",
            hindi: "25 लोगों के लिए मुफ्त स्वास्थ्य जांच शिविर।",
            icon: Stethoscope,
            color: "from-blue-500 to-indigo-600",
        },
        {
            amount: "₹2,500",
            label: "Community Awareness Program",
            desc: "Organizes a health awareness program in a rural village, educating 50+ families on preventive care.",
            hindi: "ग्रामीण क्षेत्र में स्वास्थ्य जागरूकता कार्यक्रम।",
            icon: School,
            color: "from-purple-500 to-violet-600",
        },
        {
            amount: "₹5,000",
            label: "Monthly Medicine Supply",
            desc: "Supports a month's supply of medicines for an entire clinic, serving 100+ patients.",
            hindi: "एक पूरी क्लिनिक के लिए एक महीने की दवा आपूर्ति।",
            icon: HandHelping,
            color: "from-rose-500 to-pink-600",
        },
    ];

    // Organizational metrics
    const metrics = [
        { number: "2+", label: "Volunteer Doctors", icon: User, sub: "Dedicated healers" },
        { number: "2", label: "Clinic Locations", icon: Briefcase, sub: "Purnea" },
        { number: "5,000+", label: "Patients Served", icon: Users, sub: "And counting" },
        { number: "3+", label: "Partner NGOs", icon: HandHelping, sub: "Collaborating for impact" },
    ];

    // Programs
    const programs = [
        {
            title: "Free Health Camps",
            desc: "Monthly camps in underserved areas providing consultations and medicines.",
            image: "https://thumbs.dreamstime.com/b/free-medical-camp-rural-area-india-217944240.jpg?w=768",
        },
        {
            title: "Medicine Distribution",
            desc: "Door-to-door delivery of homeopathic medicines for chronic patients.",
            image: "https://thumbs.dreamstime.com/b/medical-camp-13742635.jpg",
        },
        {
            title: "Awareness Workshops",
            desc: "Educating communities on hygiene, nutrition, and preventive healthcare.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
        },
    ];

    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
            {/* ===== HERO SECTION with Banner Image ===== */}
            <section className="relative min-h-[85vh] flex items-center px-4 overflow-hidden">
                {/* Background Image with Transparency Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="relative w-full h-full">
                        <Image
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80"
                            alt="Healthcare and healing banner"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Multiple gradient overlays for transparency effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />
                        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
                    </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-20 right-10 z-10 opacity-20 hidden lg:block">
                    <div className="w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-pulse" />
                </div>
                <div className="absolute bottom-20 left-10 z-10 opacity-20 hidden lg:block">
                    <div className="w-48 h-48 rounded-full bg-secondary/30 blur-3xl animate-pulse delay-1000" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-6 border border-primary/20">
                            <Heart size={14} className="fill-primary" />
                            Support Our Mission
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
                            Make a{" "}
                            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                Difference
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-3">
                            Your donation helps us provide free healthcare and medicines to those in need.
                        </p>
                        <p className="text-sm text-foreground/50 mb-8 font-medium tracking-wide">
                            हमारे मिशन का समर्थन करें
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#donate"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5"
                            >
                                Donate Now
                                <ArrowRight size={18} />
                            </a>
                            <a
                                href="#impact"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-foreground px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
                            >
                                Learn More
                            </a>
                        </div>

                        {/* Quick metrics in hero */}
                        <div className="mt-12 flex flex-wrap gap-8 items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Users size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">5,000+</p>
                                    <p className="text-xs text-foreground/50">Patients Served</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Stethoscope size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">02+</p>
                                    <p className="text-xs text-foreground/50">Volunteer Doctors</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Award size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">03+</p>
                                    <p className="text-xs text-foreground/50">Health Camps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5">
                        <div className="w-1 h-2 rounded-full bg-primary/60 animate-pulse" />
                    </div>
                </div>
            </section>

            {/* ===== IMPACT SECTION ===== */}
            <section id="impact" className="py-20 px-4 bg-background relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-2">
                            Impact
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            How Your Donation{" "}
                            <span className="text-primary">Helps</span>
                        </h2>
                        <p className="text-foreground/50 mt-3 text-lg">आपका दान कैसे मदद करता है</p>
                        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Heart,
                                title: "Free Checkups",
                                sub: "मुफ़्त स्वास्थ्य जांच",
                                description:
                                    "Your donation enables us to provide free health consultations and checkups to underprivileged families and individuals who cannot afford medical care.",
                                hindi:
                                    "आपका दान हमें उन परिवारों और व्यक्तियों को मुफ्त स्वास्थ्य परामर्श और जांच प्रदान करने में सक्षम बनाता है जो चिकित्सा देखभाल का खर्च नहीं उठा सकते।",
                                image:
                                    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
                            },
                            {
                                icon: Leaf,
                                title: "Free Medicines",
                                sub: "मुफ़्त दवाइयाँ",
                                description:
                                    "We distribute authentic homeopathic medicines at no cost to patients in need, ensuring natural healing is accessible to everyone regardless of their financial situation.",
                                hindi:
                                    "हम जरूरतमंद मरीजों को वास्तविक होम्योपैथिक दवाइयाँ मुफ्त में वितरित करते हैं, यह सुनिश्चित करते हुए कि प्राकृतिक उपचार हर किसी के लिए सुलभ हो।",
                                image:
                                    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
                            },
                            {
                                icon: Users,
                                title: "Community Programs",
                                sub: "सामुदायिक कार्यक्रम",
                                description:
                                    "Your support helps us organize free health camps, awareness programs, and medical assistance for vulnerable sections of society.",
                                hindi:
                                    "आपका समर्थन हमें मुफ्त स्वास्थ्य शिविर, जागरूकता कार्यक्रम और समाज के कमजोर वर्गों के लिए चिकित्सा सहायता आयोजित करने में मदद करता है।",
                                image:
                                    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80",
                            },
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group bg-card border border-border/60 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
                                >
                                    <div className="relative h-52 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                                        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/20">
                                            <Icon className="text-primary" size={24} />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-foreground mb-0.5">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-foreground/40 mb-3 font-medium">
                                            {item.sub}
                                        </p>
                                        <p className="text-foreground/70 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                        <p className="text-xs text-foreground/30 mt-3 pt-3 border-t border-border/50">
                                            {item.hindi}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== WHAT YOUR DONATION PROVIDES (Replaces progress + recent donations) ===== */}
            <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-2">
                            Every Rupee Counts
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            What Your <span className="text-primary">Donation</span> Provides
                        </h2>
                        <p className="text-foreground/50 mt-3 text-lg">आपका दान क्या प्रदान करता है</p>
                        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {donationTiers.map((tier, idx) => {
                            const Icon = tier.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group bg-card border border-border/60 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 relative overflow-hidden"
                                >
                                    <div className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${tier.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="text-primary" size={28} />
                                        </div>
                                        <p className="text-4xl font-extrabold text-primary mb-1 tracking-tight">
                                            {tier.amount}
                                        </p>
                                        <p className="text-lg font-bold text-foreground mb-2">
                                            {tier.label}
                                        </p>
                                        <p className="text-sm text-foreground/70 leading-relaxed">
                                            {tier.desc}
                                        </p>
                                        <p className="text-xs text-foreground/30 mt-3 pt-3 border-t border-border/50">
                                            {tier.hindi}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Note */}
                    <div className="mt-10 text-center">
                        <p className="text-sm text-foreground/40 max-w-2xl mx-auto">
                            Every contribution, big or small, helps us reach more patients and
                            communities in need. Your generosity is the heartbeat of our mission.
                        </p>
                        <p className="text-xs text-foreground/30 mt-1">
                            हर योगदान, बड़ा या छोटा, हमें अधिक रोगियों और समुदायों तक पहुँचने में मदद करता है।
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== ORGANIZATIONAL METRICS ===== */}
            <section className="py-16 px-4 bg-background relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {metrics.map((metric, idx) => {
                            const Icon = metric.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-card border border-border/60 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 hover:border-primary/30 group"
                                >
                                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="text-primary" size={26} />
                                    </div>
                                    <p className="text-3xl font-extrabold text-foreground">
                                        {metric.number}
                                    </p>
                                    <p className="text-base font-semibold text-foreground mt-0.5">
                                        {metric.label}
                                    </p>
                                    <p className="text-xs text-foreground/40 mt-1">{metric.sub}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== OUR PROMISE ===== */}
            <section className="py-20 px-4 bg-gradient-to-b from-primary/5 via-transparent to-transparent relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-2">
                            Promise
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            Our <span className="text-primary">Promise</span> to You
                        </h2>
                        <p className="text-foreground/50 mt-3 text-lg">हमारा वादा</p>
                        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Shield,
                                title: "100% Transparent",
                                desc: "All donations are used directly for patient care.",
                                hindi: "सभी दान सीधे रोगी देखभाल के लिए उपयोग किए जाते हैं।",
                            },
                            {
                                icon: Gift,
                                title: "Tax Benefits",
                                desc: "Donations may be eligible for tax deductions.",
                                hindi: "दान कर कटौती के पात्र हो सकते हैं।",
                            },
                            {
                                icon: Clock,
                                title: "Immediate Impact",
                                desc: "Your donation helps patients today, not tomorrow.",
                                hindi: "आपका दान आज मरीजों की मदद करता है, कल नहीं।",
                            },
                            {
                                icon: CheckCircle,
                                title: "Secure Payment",
                                desc: "Your payment information is safe and protected.",
                                hindi: "आपकी भुगतान जानकारी सुरक्षित और संरक्षित है।",
                            },
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group bg-card border border-border/60 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                                            <Icon className="text-primary" size={28} />
                                        </div>
                                        <h3 className="font-bold text-foreground mb-1 text-lg">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-foreground/70 leading-relaxed">
                                            {item.desc}
                                        </p>
                                        <p className="text-xs text-foreground/30 mt-3 pt-3 border-t border-border/50">
                                            {item.hindi}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== OUR PROGRAMS ===== */}
            <section className="py-20 px-4 bg-background relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-2">
                            Programs
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            Our <span className="text-primary">Programs</span> in Action
                        </h2>
                        <p className="text-foreground/50 mt-3 text-lg">हमारे कार्यक्रम</p>
                        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programs.map((program, idx) => (
                            <div
                                key={idx}
                                className="group bg-card border border-border/60 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white drop-shadow-lg">
                                            {program.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-foreground/70 leading-relaxed text-sm">
                                        {program.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== DONATION SECTION with QR ===== */}
            <section
                id="donate"
                className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative"
            >
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
                <div className="max-w-7xl mx-auto relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Info */}
                        <div>
                            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-2">
                                Donate
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                                Make a <span className="text-primary">Donation</span>
                            </h2>
                            <p className="text-foreground/70 mb-3 leading-relaxed">
                                Every donation, no matter the amount, makes a significant difference
                                in the lives of those we serve. Your generosity helps us continue our
                                mission of providing affordable and natural healing to everyone.
                            </p>
                            <p className="text-sm text-foreground/40 mb-8">
                                हर दान, चाहे राशि कितनी भी हो, महत्वपूर्ण बदलाव लाता है।
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        icon: Shield,
                                        title: "100% Transparent",
                                        desc: "All donations are used directly for patient care and medicines.",
                                        hindi: "सभी दान सीधे रोगी देखभाल और दवाओं के लिए उपयोग किए जाते हैं।",
                                    },
                                    {
                                        icon: Gift,
                                        title: "Tax Benefits",
                                        desc: "Donations may be eligible for tax deductions. Contact us for details.",
                                        hindi: "दान कर कटौती के पात्र हो सकते हैं। विवरण के लिए हमसे संपर्क करें।",
                                    },
                                    {
                                        icon: CheckCircle,
                                        title: "Secure Payment",
                                        desc: "Your payment information is secure and protected.",
                                        hindi: "आपकी भुगतान जानकारी सुरक्षित और संरक्षित है।",
                                    },
                                ].map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-4 bg-card/60 backdrop-blur-sm rounded-xl p-5 border border-border/60 hover:border-primary/20 transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Icon size={18} className="text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-foreground">
                                                    {item.title}
                                                </p>
                                                <p className="text-sm text-foreground/70">
                                                    {item.desc}
                                                </p>
                                                <p className="text-xs text-foreground/40 mt-1">
                                                    {item.hindi}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-6">
                                <p className="text-foreground/80 italic">
                                    <span className="font-semibold text-foreground">
                                        Together, we can make healthcare accessible to all.
                                    </span>
                                    <br />
                                    <span className="text-sm text-foreground/50">
                                        साथ मिलकर, हम स्वास्थ्य देखभाल को सभी के लिए सुलभ बना सकते हैं।
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Right: QR Code + Methods */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-2xl border border-border/40 max-w-sm w-full hover:shadow-primary/10 transition-shadow duration-300">
                                <div className="relative aspect-square w-full max-w-[280px] mx-auto">
                                    <Image
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-coBnTWSz11EXy2SSpBYEU6fN6P4MZt.png"
                                        alt="Paytm UPI QR Code for Donation"
                                        fill
                                        className="object-contain rounded-xl"
                                    />
                                </div>
                                <div className="mt-6 text-center">
                                    <p className="font-bold text-foreground text-xl">
                                        Scan to Donate
                                    </p>
                                    <p className="text-sm text-foreground/40">
                                        दान करने के लिए स्कैन करें
                                    </p>
                                    {/* <div className="mt-4 bg-primary/5 rounded-xl py-3 px-4 inline-block border border-primary/10">
                                        <p className="font-mono text-primary font-semibold text-sm">
                                            UPI: 7782907822@ptsbi
                                        </p>
                                    </div> */}
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-foreground/70 font-semibold text-sm">
                                    Payment Methods
                                </p>
                                <div className="flex flex-wrap gap-3 justify-center mt-3">
                                    {["Paytm", "Google Pay", "PhonePe", "BHIM", "Bank"].map(
                                        (method) => (
                                            <span
                                                key={method}
                                                className="px-4 py-1.5 bg-card/80 backdrop-blur-sm border border-border/40 rounded-full text-xs font-medium text-foreground/60 hover:border-primary/30 hover:text-primary transition-colors"
                                            >
                                                {method}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== IMPACT NUMBERS ===== */}
            <section className="py-20 px-4 bg-background relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-2">
                            Impact
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            Your <span className="text-primary">Impact</span> in Numbers
                        </h2>
                        <p className="text-foreground/50 mt-3 text-lg">आपका प्रभाव</p>
                        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                number: "500+",
                                label: "Free Consultations",
                                sub: "मुफ़्त परामर्श",
                                detail: "Provided annually to patients in need",
                                hindiDetail: "जरूरतमंद मरीजों को वार्षिक रूप से प्रदान किया गया",
                                icon: User,
                            },
                            {
                                number: "1000+",
                                label: "Medicines Distributed",
                                sub: "वितरित दवाइयाँ",
                                detail: "Free homeopathic remedies given to patients",
                                hindiDetail: "मरीजों को मुफ्त होम्योपैथिक दवाइयाँ दी गईं",
                                icon: Leaf,
                            },
                            {
                                number: "10+",
                                label: "Health Camps",
                                sub: "स्वास्थ्य शिविर",
                                detail: "Community awareness and free checkup programs",
                                hindiDetail: "सामुदायिक जागरूकता और मुफ्त जांच कार्यक्रम",
                                icon: Users,
                            },
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group bg-card border border-border/60 rounded-2xl p-10 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 relative overflow-hidden"
                                >
                                    <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                                            <Icon className="text-primary" size={30} />
                                        </div>
                                        <p className="text-5xl font-extrabold text-primary mb-2 tracking-tight">
                                            {item.number}
                                        </p>
                                        <p className="text-xl font-bold text-foreground">
                                            {item.label}
                                        </p>
                                        <p className="text-sm text-foreground/40 mb-3 font-medium">
                                            {item.sub}
                                        </p>
                                        <p className="text-foreground/70 text-sm leading-relaxed">
                                            {item.detail}
                                        </p>
                                        <p className="text-xs text-foreground/30 mt-3 pt-3 border-t border-border/50">
                                            {item.hindiDetail}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-2">
                            Stories
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            Real <span className="text-primary">Stories</span>, Real Impact
                        </h2>
                        <p className="text-foreground/50 mt-3 text-lg">सच्ची कहानियाँ, वास्तविक प्रभाव</p>
                        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sunita Devi",
                                role: "Patient",
                                quote:
                                    "I couldn't afford treatment for my chronic condition. The free checkup and medicines changed my life. I'm forever grateful.",
                                hindi:
                                    "मैं अपनी पुरानी बीमारी का इलाज नहीं करवा सकती थी। मुफ्त जांच और दवाइयों ने मेरी जिंदगी बदल दी।",
                                image:
                                    "https://www.shutterstock.com/image-photo/sundarbans-india-23-october-2023-260nw-2453950609.jpg",
                            },
                            {
                                name: "Ramesh Patel",
                                role: "Community Member",
                                quote:
                                    "The health camp in our village was a blessing. So many people got checked and received medicines for free. Thank you!",
                                hindi:
                                    "हमारे गाँव में स्वास्थ्य शिविर एक वरदान था। इतने सारे लोगों की जाँच हुई और मुफ्त दवाइयाँ मिलीं।",
                                image:
                                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                            },
                            {
                                name: "Dr. M H Rizwi",
                                role: "Volunteer Doctor",
                                quote:
                                    "Volunteering with this mission has been the most fulfilling experience. Seeing patients heal naturally is pure joy.",
                                hindi:
                                    "इस मिशन के साथ स्वयंसेवा करना सबसे संतोषजनक अनुभव रहा है। मरीजों को प्राकृतिक रूप से ठीक होते देखना शुद्ध आनंद है।",
                                image:
                                    "/images/doctor.jpg",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-card border border-border/60 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 hover:border-primary/30"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                                    <div className="absolute bottom-4 left-6">
                                        <p className="text-white font-bold text-lg drop-shadow-lg">
                                            {item.name}
                                        </p>
                                        <p className="text-white/80 text-sm drop-shadow-lg">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-foreground/80 leading-relaxed text-sm italic">
                                        "{item.quote}"
                                    </p>
                                    <p className="text-xs text-foreground/30 mt-3 pt-3 border-t border-border/50">
                                        {item.hindi}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="relative py-20 px-4 overflow-hidden">
                {/* Background with image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1584467735867-925f3e8a0c7a?w=1920&q=80"
                        alt="Healthcare mission"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
                    <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-6 border border-white/20">
                        <Sparkles size={14} />
                        Join the Movement
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Be Part of the{" "}
                        <span className="text-white/90">Healing Mission</span>
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-4 leading-relaxed">
                        Your donation today can change someone's life tomorrow.
                        Scan the QR code or contact us to contribute.
                    </p>

                    <p className="text-sm text-white/70 mb-8 font-medium tracking-wide">
                        उपचार मिशन का हिस्सा बनें
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://wa.me/919608628633"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <Heart size={20} className="fill-primary" />
                            Contact Us
                        </a>
                        <a
                            href="#donate"
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
                        >
                            Donate Now
                            <ChevronRight size={18} />
                        </a>
                    </div>

                    <p className="text-xs text-white/50 mt-6">
                        अधिक जानकारी के लिए हमसे संपर्क करें
                    </p>
                </div>
            </section>


            {/* ===== GLOBAL STYLES ===== */}
            <style jsx global>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
                .bg-grid-white\\/5 {
                    background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
                    background-size: 24px 24px;
                }
                .delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </main>
    );
}