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

"use client"

import Image from "next/image"
import { Heart, Users, Leaf } from "lucide-react"

export default function Donation() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4 animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Support Our Mission <br />
            <span className="text-sm">हमारे मिशन का समर्थन करें</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Your donation helps us provide free healthcare and medicines to those in need. <br />
            <span className="text-sm">आपका दान उन लोगों को मुफ्त स्वास्थ्य देखभाल और दवाइयां प्रदान करने में मदद करता है जिन्हें इसकी आवश्यकता है।</span>
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
            How Your Donation Helps <br />
            <span className="text-sm">आपका दान कैसे मदद करता है</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 animate-scale-in hover:shadow-lg transition-all">
              <Heart className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold text-foreground mb-4">
                Free Checkups <br />
                <span className="text-sm">मुफ़्त स्वास्थ्य जांच</span>
              </h3>
              <p className="text-foreground/80">
                Your donation enables us to provide free health consultations and checkups to underprivileged families
                and individuals who cannot afford medical care. <br />
                <span className="text-sm">आपका दान हमें उन परिवारों और व्यक्तियों को मुफ्त स्वास्थ्य परामर्श और जांच प्रदान करने में सक्षम बनाता है जो चिकित्सा देखभाल का खर्च नहीं उठा सकते।</span>
              </p>
            </div>

            <div
              className="bg-card border border-border rounded-lg p-8 animate-scale-in hover:shadow-lg transition-all"
              style={{ animationDelay: "0.1s" }}
            >
              <Leaf className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold text-foreground mb-4">
                Free Medicines <br />
                <span className="text-sm">मुफ़्त दवाइयाँ</span>
              </h3>
              <p className="text-foreground/80">
                We distribute authentic homeopathic medicines at no cost to patients in need, ensuring that natural
                healing is accessible to everyone regardless of their financial situation. <br />
                <span className="text-sm">हम जरूरतमंद मरीजों को वास्तविक होम्योपैथिक दवाइयाँ मुफ्त में वितरित करते हैं, यह सुनिश्चित करते हुए कि प्राकृतिक उपचार हर किसी के लिए सुलभ हो।</span>
              </p>
            </div>

            <div
              className="bg-card border border-border rounded-lg p-8 animate-scale-in hover:shadow-lg transition-all"
              style={{ animationDelay: "0.2s" }}
            >
              <Users className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold text-foreground mb-4">
                Community Programs <br />
                <span className="text-sm">सामुदायिक कार्यक्रम</span>
              </h3>
              <p className="text-foreground/80">
                Your support helps us organize free health camps, awareness programs, and medical assistance for
                vulnerable sections of society. <br />
                <span className="text-sm">आपका समर्थन हमें मुफ्त स्वास्थ्य शिविर, जागरूकता कार्यक्रम और समाज के कमजोर वर्गों के लिए चिकित्सा सहायता आयोजित करने में मदद करता है।</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Make a Donation <br />
                <span className="text-sm">दान करें</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Every donation, no matter the amount, makes a significant difference in the lives of those we serve.
                Your generosity helps us continue our mission of providing affordable and natural healing to everyone. <br />
                <span className="text-sm">हर दान, चाहे राशि कितनी भी हो, हमारे द्वारा सेवा प्राप्त करने वालों के जीवन में महत्वपूर्ण बदलाव लाता है। आपकी उदारता हमें सभी के लिए सस्ती और प्राकृतिक चिकित्सा प्रदान करने के मिशन को जारी रखने में मदद करती है।</span>
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      100% Transparent <br />
                      <span className="text-xs">100% पारदर्शी</span>
                    </h4>
                    <p className="text-foreground/80 text-sm">
                      All donations are used directly for patient care and medicines. <br />
                      <span className="text-xs">सभी दान सीधे रोगी देखभाल और दवाओं के लिए उपयोग किए जाते हैं।</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Tax Benefits <br />
                      <span className="text-xs">कर लाभ</span>
                    </h4>
                    <p className="text-foreground/80 text-sm">
                      Donations may be eligible for tax deductions. Contact us for details. <br />
                      <span className="text-xs">दान कर कटौती के पात्र हो सकते हैं। विवरण के लिए हमसे संपर्क करें।</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Secure Payment <br />
                      <span className="text-xs">सुरक्षित भुगतान</span>
                    </h4>
                    <p className="text-foreground/80 text-sm">
                      Your payment information is secure and protected. <br />
                      <span className="text-xs">आपकी भुगतान जानकारी सुरक्षित और संरक्षित है।</span>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-foreground/80 mb-6">
                <span className="font-semibold text-foreground">
                  Together, we can make healthcare accessible to all. <br />
                  <span className="text-sm">साथ मिलकर, हम स्वास्थ्य देखभाल को सभी के लिए सुलभ बना सकते हैं।</span>
                </span>{" "}
                Join us in our mission to heal naturally and affordably. <br />
                <span className="text-sm">हमारे मिशन में शामिल हों ताकि प्राकृतिक और सस्ती चिकित्सा संभव हो सके।</span>
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
                <p className="text-center text-foreground font-semibold mt-4">
                  Scan to Donate <br />
                  <span className="text-sm">दान करने के लिए स्कैन करें</span>
                </p>
                <p className="text-center text-foreground/80 text-sm mt-2">
                  UPI: 7782907822@ptsbi
                </p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-foreground/80 mb-4">
                  <span className="font-semibold text-foreground">Payment Methods: <br />
                  <span className="text-sm">भुगतान के तरीके:</span></span>
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
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
            Your Impact <br />
            <span className="text-sm">आपका प्रभाव</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary/10 rounded-lg p-8 text-center animate-slide-in-left hover:shadow-lg transition-all">
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-foreground font-semibold mb-2">
                Free Consultations <br />
                <span className="text-sm">मुफ़्त परामर्श</span>
              </p>
              <p className="text-foreground/80 text-sm">Provided annually to patients in need <br />
                <span className="text-xs">जरूरतमंद मरीजों को वार्षिक रूप से प्रदान किया गया</span>
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 text-center animate-fade-in-up hover:shadow-lg transition-all">
              <p className="text-4xl font-bold text-primary mb-2">1000+</p>
              <p className="text-foreground font-semibold mb-2">
                Medicines Distributed <br />
                <span className="text-sm">वितरित दवाइयाँ</span>
              </p>
              <p className="text-foreground/80 text-sm">Free homeopathic remedies given to patients <br />
                <span className="text-xs">मरीजों को मुफ्त होम्योपैथिक दवाइयाँ दी गईं</span>
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 text-center animate-slide-in-right hover:shadow-lg transition-all">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-foreground font-semibold mb-2">
                Health Camps <br />
                <span className="text-sm">स्वास्थ्य शिविर</span>
              </p>
              <p className="text-foreground/80 text-sm">Community awareness and free checkup programs <br />
                <span className="text-xs">सामुदायिक जागरूकता और मुफ्त जांच कार्यक्रम</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Be Part of the Healing Mission <br />
            <span className="text-sm">उपचार मिशन का हिस्सा बनें</span>
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Your donation today can change someone's life tomorrow. Scan the QR code or contact us to contribute. <br />
            <span className="text-sm">आज आपका दान किसी के जीवन को कल बदल सकता है। योगदान करने के लिए QR कोड स्कैन करें या हमसे संपर्क करें।</span>
          </p>
          <a
            href="https://wa.me/919608628633"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
          >
            Contact Us for More Information <br />
            <span className="text-sm">अधिक जानकारी के लिए हमसे संपर्क करें</span>
          </a>
        </div>
      </section>
    </main>
  )
}
