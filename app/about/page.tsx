// import { Award, Heart, Users, Leaf } from "lucide-react";
// import Image from "next/image";

// export default function About() {
//   const achievements = [
//     {
//       icon: Award,
//       title: "35+ Years Experience",
//       description: "Dedicated to homeopathic healing and patient wellness",
//     },
//     {
//       icon: Users,
//       title: "Thousands Healed",
//       description: "Trusted by patients across the region for natural remedies",
//     },
//     {
//       icon: Heart,
//       title: "Patient-First Approach",
//       description: "Personalized treatment plans tailored to individual needs",
//     },
//     {
//       icon: Leaf,
//       title: "Natural Healing",
//       description: "100% natural homeopathic remedies with no side effects",
//     },
//   ];

//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4 animate-fade-in-up">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//             About G.N.Homeo Clinic
//           </h1>
//           <p className="text-lg text-foreground/80 max-w-2xl">
//             Dedicated to providing affordable and natural healing for every home
//             through expert homeopathic care.
//           </p>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="bg-primary/20 rounded-lg h-80 flex items-center justify-center animate-slide-in-left">
//               {/* <Leaf className="text-primary" size={120} /> */}
//               <video
//                 src="/images/gnmvideo00.mp4" // Path to your video in public folder
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 style={{ width: "100%", height: "auto" }}
//               >
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <div className="animate-slide-in-right">
//               <h2 className="text-3xl font-bold text-foreground mb-6">
//                 Our Mission
//               </h2>
//               <p className="text-lg text-foreground/80 mb-4">
//                 <span className="font-semibold text-foreground">
//                   "To provide affordable and natural healing for every home."
//                 </span>
//               </p>
//               <p className="text-foreground/80 mb-4">
//                 At G.N.Homeo Clinic, we believe that natural healing is the path
//                 to true wellness. Our mission is to make quality homeopathic
//                 care accessible to everyone, regardless of their background or
//                 financial situation.
//               </p>
//               <p className="text-foreground/80">
//                 We combine traditional homeopathic wisdom with modern medical
//                 knowledge to provide comprehensive, personalized treatment plans
//                 that address the root cause of illness, not just the symptoms.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Doctor Profile */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
//             Meet <strong>Dr. M.H. Rizwi</strong>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="flex justify-center animate-scale-in">
//               <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
//                 <Image
//                   src="/images/gnh1.jpg"
//                   alt="Dr. M.H. Rizwi"
//                   width={400}
//                   height={500}
//                   className="w-full h-auto object-cover"
//                   priority
//                 />
//               </div>
//             </div>
//             <div className="animate-slide-in-right">
//               <div className="mb-6">
//                 <h3 className="text-2xl font-bold text-foreground mb-2">
//                   <strong>Dr. M.H. Rizwi</strong>
//                 </h3>
//                 <p className="text-primary font-semibold">
//                   Homeopathic Consultant & General Physician
//                 </p>
//               </div>

//               <div className="space-y-4 text-foreground/80">
//                 <div>
//                   <h4 className="font-semibold text-foreground mb-2">
//                     Professional Expertise
//                   </h4>
//                   <p>
//                     A dedicated homeopathic practitioner with a passion for
//                     natural healing and patient wellness. Dr. Rizwi specializes
//                     in providing comprehensive, evidence-based homeopathic care
//                     tailored to each patient's unique needs.
//                   </p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-foreground mb-2">
//                     Experience
//                   </h4>
//                   <p>
//                     With 35 years of dedicated practice in homeopathy, Dr. M.H.
//                     Rizwi has successfully treated thousands of patients with
//                     various acute and chronic conditions, earning the trust and
//                     respect of the community.
//                   </p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-foreground mb-2">
//                     Treatment Philosophy
//                   </h4>
//                   <p>
//                     Dr. Rizwi believes in a holistic approach to healing,
//                     treating the whole person rather than just the disease.
//                     Every patient receives personalized attention, detailed case
//                     analysis, and customized treatment plans designed for
//                     optimal results.
//                   </p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-foreground mb-2">
//                     Specializations
//                   </h4>
//                   <ul className="list-disc list-inside space-y-1">
//                     <li>Chronic disease management</li>
//                     <li>Skin and allergic conditions</li>
//                     <li>Women's health and hormonal disorders</li>
//                     <li>Pediatric care and child health</li>
//                     <li>Stress, anxiety, and sleep disorders</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Achievements */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
//             Why Choose Us
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {achievements.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={index}
//                   className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all animate-scale-in hover:border-primary"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <Icon className="text-primary mb-4" size={40} />
//                   <h3 className="text-xl font-bold text-foreground mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-foreground/80">{item.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Clinic Info */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
//             Clinic Information
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-card border border-border rounded-lg p-8 animate-slide-in-left hover:shadow-lg transition-all">
//               <h3 className="text-xl font-bold text-foreground mb-4">
//                 Clinic Address
//               </h3>
//               <a
//                 href="https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-foreground/80 hover:text-primary transition-colors"
//               >
//                 <p className="font-semibold mb-1">Club Market Kachhari hata, Purnea</p>
//                 <p className="text-sm">Near Dto Office, Commissioner Road</p>
//                 <p className="text-sm">Pin-854301</p>
//               </a>
//               <p className="text-sm text-foreground/60 mt-2">
//                 Click to view on Google Maps
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-8 animate-slide-in-right hover:shadow-lg transition-all">
//               <h3 className="text-xl font-bold text-foreground mb-4">
//                 Clinic Timings
//               </h3>
//               <div className="space-y-2 text-foreground/80">
//                 <p>
//                   <span className="font-semibold">Monday - Saturday:</span>{" "}
//                   11:00 AM – 8:00 PM
//                 </p>
//                 <p>
//                   <span className="font-semibold">Friday-Closed</span>
                  
//                 </p>
//                 <p>
//                   <span className="font-semibold">Sunday:</span> 4:00 PM – 8:00
//                   PM
//                 </p>
//                 <p className="text-sm pt-2">Closed on Fridays</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Experience Natural Healing Today
//           </h2>
//           <p className="text-lg opacity-90 mb-8">
//             Schedule your free consultation with Dr. M.H. Rizwi and start your
//             journey to wellness.
//           </p>
//           <a
//             href="https://wa.me/919608628633"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
//           >
//             Contact Us Now
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }


import { Award, Heart, Users, Leaf } from "lucide-react";
import Image from "next/image";

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dedicated to homeopathic healing and patient wellness",
      hindi: "35+ वर्षों का अनुभव — होम्योपैथिक उपचार और रोगी कल्याण के लिए समर्पित",
    },
    {
      icon: Users,
      title: "Thousands Healed",
      description: "Trusted by patients across the region for natural remedies",
      hindi: "हजारों लोगों ने स्वस्थ जीवन पाया — प्राकृतिक उपचार के लिए क्षेत्रभर के रोगियों द्वारा विश्वसनीय",
    },
    {
      icon: Heart,
      title: "Patient-First Approach",
      description: "Personalized treatment plans tailored to individual needs",
      hindi: "रोगी-प्रथम दृष्टिकोण — प्रत्येक व्यक्ति की आवश्यकता के अनुसार व्यक्तिगत उपचार योजना",
    },
    {
      icon: Leaf,
      title: "Natural Healing",
      description: "100% natural homeopathic remedies with no side effects",
      hindi: "100% प्राकृतिक होम्योपैथिक उपचार — बिना किसी दुष्प्रभाव के",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4 animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About G.N.Homeo Clinic
          </h1>
          <span className="text-foreground/70 block text-lg mb-4">
            जी.एन. होमियो क्लिनिक के बारे में
          </span>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Dedicated to providing affordable and natural healing for every home
            through expert homeopathic care.
            <span className="text-foreground/70 block mt-1 text-sm">
              हर घर को किफायती और प्राकृतिक उपचार प्रदान करने के लिए विशेषज्ञ होम्योपैथिक देखभाल के प्रति समर्पित।
            </span>
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-primary/20 rounded-lg h-80 flex items-center justify-center animate-slide-in-left">
              <video
                src="/images/gnmvideo00.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "auto" }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <span className="text-foreground/70 block text-lg mb-2">
                हमारा उद्देश्य
              </span>

              <p className="text-lg text-foreground/80 mb-4">
                <span className="font-semibold text-foreground">
                  "To provide affordable and natural healing for every home."
                </span>
                <span className="text-foreground/70 block mt-1 text-sm">
                  "हर घर तक किफायती और प्राकृतिक उपचार पहुँचाना।"
                </span>
              </p>
              <p className="text-foreground/80 mb-4">
                At G.N.Homeo Clinic, we believe that natural healing is the path
                to true wellness.
                <span className="text-foreground/70 block mt-1 text-sm">
                  जी.एन. होमियो क्लिनिक में, हम मानते हैं कि प्राकृतिक उपचार ही वास्तविक स्वास्थ्य का मार्ग है।
                </span>
              </p>
              <p className="text-foreground/80 mb-4">
                Our mission is to make quality homeopathic care accessible to
                everyone, regardless of their background or financial situation.
                <span className="text-foreground/70 block mt-1 text-sm">
                  हमारा उद्देश्य गुणवत्तापूर्ण होम्योपैथिक देखभाल को हर व्यक्ति तक पहुँचाना है, चाहे उनकी आर्थिक स्थिति कुछ भी हो।
                </span>
              </p>
              <p className="text-foreground/80">
                We combine traditional homeopathic wisdom with modern medical
                knowledge to treat the root cause of illness.
                <span className="text-foreground/70 block mt-1 text-sm">
                  हम पारंपरिक होम्योपैथिक ज्ञान को आधुनिक चिकित्सा विज्ञान के साथ मिलाकर बीमारी के मूल कारण का उपचार करते हैं।
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
            Meet <strong>Dr. M.H. Rizwi</strong>
          </h2>
          <span className="text-foreground/70 block text-center mb-8 text-lg">
            मिलिए <strong>डॉ. एम.एच. रिज़वी</strong> से
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center animate-scale-in">
              <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="/images/gnh1.jpg"
                  alt="Dr. M.H. Rizwi"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <strong>Dr. M.H. Rizwi</strong>
                </h3>
                <p className="text-primary font-semibold">
                  Homeopathic Consultant & General Physician
                </p>
                <span className="text-foreground/70 block mt-1 text-sm">
                  होम्योपैथिक सलाहकार एवं सामान्य चिकित्सक
                </span>
              </div>

              <div className="space-y-4 text-foreground/80">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Professional Expertise
                  </h4>
                  <span className="text-foreground/70 block mt-1 text-sm">
                    व्यावसायिक विशेषज्ञता
                  </span>
                  <p>
                    A dedicated homeopathic practitioner with a passion for
                    natural healing and patient wellness.
                    <span className="text-foreground/70 block mt-1 text-sm">
                      प्राकृतिक उपचार और रोगी कल्याण के प्रति समर्पित एक अनुभवी होम्योपैथिक चिकित्सक।
                    </span>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Experience
                  </h4>
                  <span className="text-foreground/70 block mt-1 text-sm">
                    अनुभव
                  </span>
                  <p>
                    With 35 years of practice, Dr. Rizwi has successfully treated
                    thousands of patients with various chronic and acute
                    conditions.
                    <span className="text-foreground/70 block mt-1 text-sm">
                      35 वर्षों के अनुभव के साथ, डॉ. रिज़वी ने विभिन्न तीव्र और दीर्घकालिक बीमारियों से हजारों रोगियों का सफलतापूर्वक इलाज किया है।
                    </span>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Treatment Philosophy
                  </h4>
                  <span className="text-foreground/70 block mt-1 text-sm">
                    उपचार दर्शन
                  </span>
                  <p>
                    Believes in holistic healing—treating the person, not just the disease.
                    <span className="text-foreground/70 block mt-1 text-sm">
                      समग्र उपचार में विश्वास — केवल रोग नहीं बल्कि व्यक्ति का उपचार।
                    </span>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Specializations
                  </h4>
                  <span className="text-foreground/70 block mt-1 text-sm">
                    विशेषज्ञताएँ
                  </span>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Chronic disease management / पुरानी बीमारियों का प्रबंधन</li>
                    <li>Skin and allergic conditions / त्वचा और एलर्जी से जुड़ी समस्याएँ</li>
                    <li>Women's health and hormonal disorders / महिलाओं के स्वास्थ्य और हार्मोनल समस्याएँ</li>
                    <li>Pediatric care and child health / बाल चिकित्सा और बच्चों का स्वास्थ्य</li>
                    <li>Stress, anxiety, and sleep disorders / तनाव, चिंता और नींद से जुड़ी समस्याएँ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
            Why Choose Us
          </h2>
          <span className="text-foreground/70 block text-center mb-8 text-lg">
            हमें क्यों चुनें
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all animate-scale-in hover:border-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="text-primary mb-4" size={40} />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80">{item.description}</p>
                  <p className="text-foreground/70 text-sm mt-1">{item.hindi}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinic Info */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
            Clinic Information
          </h2>
          <span className="text-foreground/70 block text-center mb-8 text-lg">
            क्लिनिक की जानकारी
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 animate-slide-in-left hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Clinic Address
              </h3>
              <span className="text-foreground/70 block mt-1 text-sm mb-2">
                क्लिनिक का पता
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=25.7710094,87.4683081"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <p className="font-semibold mb-1">
                  Club Market Kachhari hata, Purnea
                </p>
                <p className="text-sm">Near Dto Office, Commissioner Road</p>
                <p className="text-sm">Pin-854301</p>
              </a>
              <p className="text-sm text-foreground/60 mt-2">
                Click to view on Google Maps
              </p>
              <p className="text-foreground/70 text-xs mt-1">
                गूगल मैप पर देखने के लिए क्लिक करें
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 animate-slide-in-right hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Clinic Timings
              </h3>
              <span className="text-foreground/70 block mt-1 text-sm mb-2">
                क्लिनिक समय
              </span>
              <div className="space-y-2 text-foreground/80">
                <p>
                  <span className="font-semibold">Monday - Saturday:</span> 11:00 AM – 8:00 PM
                  <span className="text-foreground/70 block text-sm">सोमवार से शनिवार: सुबह 11:00 बजे से रात 8:00 बजे तक</span>
                </p>
                <p>
                  <span className="font-semibold">Friday - Closed</span>
                  <span className="text-foreground/70 block text-sm">शुक्रवार - बंद</span>
                </p>
                <p>
                  <span className="font-semibold">Sunday:</span> 4:00 PM – 8:00 PM
                  <span className="text-foreground/70 block text-sm">रविवार: शाम 4:00 बजे से रात 8:00 बजे तक</span>
                </p>
                <p className="text-sm pt-2">Closed on Fridays</p>
                <p className="text-foreground/70 text-xs">शुक्रवार को क्लिनिक बंद रहता है</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience Natural Healing Today
          </h2>
          <span className="block text-lg mb-6 opacity-90">
            आज ही प्राकृतिक उपचार का अनुभव करें
          </span>
          <p className="text-lg opacity-90 mb-8">
            Schedule your free consultation with Dr. M.H. Rizwi and start your
            journey to wellness.
            <span className="text-primary-foreground/80 block mt-1 text-sm">
              डॉ. एम.एच. रिज़वी के साथ अपनी निःशुल्क परामर्श बुक करें और स्वस्थ जीवन की यात्रा शुरू करें।
            </span>
          </p>
          <a
            href="https://wa.me/919608628633"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
          >
            Contact Us Now / अभी संपर्क करें
          </a>
        </div>
      </section>
    </main>
  );
}
