// import Link from "next/link";
// import { Leaf, Phone, MessageCircle, Search } from "lucide-react";
// import Image from "next/image";

// export default function Home() {
//   const categories = [
//     { name: "Respiratory", icon: "🫁" },
//     { name: "Cardiovascular", icon: "❤️" },
//     { name: "Digestive", icon: "🍽️" },
//     { name: "Nervous System", icon: "🧠" },
//     { name: "Skin Diseases", icon: "💊" },
//     { name: "Women's Health", icon: "👩" },
//     { name: "Children's Care", icon: "👶" },
//     { name: "Pain Relief", icon: "💪" },
//   ];

//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 px-4 animate-fade-in-up">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="animate-slide-in-left">
//               <div className="flex items-center gap-2 mb-4">
//                 <Leaf className="text-primary" size={24} />
//                 <span className="text-primary font-semibold">
//                   <strong>G.N. Homeo Clinic</strong>
//                 </span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
//                 Healing Naturally with Homeopathy
//               </h1>
//               <p className="text-lg text-foreground/80 mb-8">
//                 Experience 35 years of expertise with{" "}
//                 <strong>Dr. M.H. Rizwi</strong>. Free consultations available
//                 via video call, chat, or phone.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link
//                   href="/consultation"
//                   className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold text-center hover:shadow-lg"
//                 >
//                   Book Consultation
//                 </Link>
//                 <a
//                   href="https://wa.me/919608628633"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-all font-semibold text-center hover:shadow-lg"
//                 >
//                   WhatsApp Chat
//                 </a>
//               </div>
//             </div>
//             <div className="hidden md:flex justify-center animate-slide-in-right">
//               <div className="w-64 h-64 bg-primary/20 rounded-full flex items-center justify-center animate-glow">
//                 <Leaf className="text-primary" size={120} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Actions */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 icon: Search,
//                 title: "Browse Diseases",
//                 desc: "Find homeopathic treatment for your condition",
//                 link: "/diseases",
//               },
//               {
//                 icon: Phone,
//                 title: "Free Consultation",
//                 desc: "Video call, chat, or phone consultation with Dr. M.H. Rizwi",
//                 link: "/consultation",
//               },
//               {
//                 icon: MessageCircle,
//                 title: "Direct Chat",
//                 desc: "Connect instantly via WhatsApp for quick queries",
//                 link: "https://wa.me/919608628633",
//               },
//             ].map((item, idx) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={item.title}
//                   className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all animate-scale-in hover:border-primary"
//                   style={{ animationDelay: `${idx * 0.1}s` }}
//                 >
//                   <Icon className="text-primary mx-auto mb-4" size={32} />
//                   <h3 className="font-bold text-lg mb-2">{item.title}</h3>
//                   <p className="text-foreground/70 text-sm mb-4">{item.desc}</p>
//                   <Link
//                     href={item.link}
//                     className="text-primary font-semibold hover:underline"
//                   >
//                     {item.link.startsWith("http") ? "Chat Now →" : "Browse →"}
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* About Doctor */}
//       {/* <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="rounded-lg overflow-hidden h-96 md:h-full flex items-center justify-center animate-slide-in-left shadow-lg hover:shadow-xl transition-shadow">
//               <Image
//                 src="/images/doctor-home.png"
//                 alt="Dr. M.H. Rizwi"
//                 width={500}
//                 height={600}
//                 className="w-full h-full object-cover"
//                 priority
//               />
//             </div>
//             <div className="animate-slide-in-right">
//               <h2 className="text-3xl font-bold text-foreground mb-4">
//                 About <strong>Dr. M.H. Rizwi</strong>
//               </h2>
//               <div className="space-y-4 text-foreground/80">
//                 <p>
//                   <span className="font-semibold text-foreground">Homeopathic Consultant & General Physician</span>
//                 </p>
//                 <p>
//                   With 35 years of dedicated experience in homeopathy, Dr. M.H. Rizwi has helped thousands of patients
//                   achieve natural healing and lasting wellness through personalized, compassionate care.
//                 </p>
//                 <p>
//                   His patient-first philosophy ensures that every consultation is thorough, personalized, and focused on
//                   addressing the root cause of your health concerns rather than just treating symptoms.
//                 </p>
//                 <div className="pt-4">
//                   <p className="font-semibold text-foreground mb-2">
//                     <strong>Clinic Timings:</strong>
//                   </p>
//                   <ul className="text-sm space-y-1 bg-primary/10 p-4 rounded-lg border border-primary/20">
//                     <li>Monday - Thursday: 11:00 AM – 8:00 PM</li>
//                     <li>Friday: 2:00 PM – 8:00 PM</li>
//                     <li>Sunday: 4:00 PM – 8:00 PM</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Part 1: About Dr. M.H. Rizwi */}
//             <div className="flex flex-col items-center md:items-start animate-slide-in-left">
//               <div className="rounded-lg overflow-hidden w-full h-96 shadow-lg hover:shadow-xl transition-shadow mb-6">
//                 <Image
//                   src="/images/doctor-home.png"
//                   alt="Dr. M.H. Rizwi"
//                   width={400}
//                   height={500}
//                   className="w-full h-full object-cover"
//                   priority
//                 />
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold text-foreground mb-4">
//                   About <strong>Dr. M.H. Rizwi</strong>
//                 </h2>
//                 <div className="space-y-4 text-foreground/80">
//                   <p>
//                     <span className="font-semibold text-foreground">
//                       Homeopathic Consultant & General Physician
//                     </span>
//                   </p>
//                   <p>
//                     <span className="text-sm text-primary font-medium">
//                       होम्योपैथिक सलाहकार एवं सामान्य चिकित्सक
//                     </span>
//                   </p>

//                   <p>
//                     With 35 years of dedicated experience in homeopathy, Dr.
//                     M.H. Rizwi has helped thousands of patients achieve natural
//                     healing and lasting wellness through personalized,
//                     compassionate care.
//                   </p>
//                   <p>
//                     His patient-first philosophy ensures that every consultation
//                     is thorough, personalized, and focused on addressing the
//                     root cause of your health concerns rather than just treating
//                     symptoms.
//                   </p>

//                   {/* Doctor's Role & Responsibilities */}
//                   <div className="pt-4">
//                     <p className="font-semibold text-foreground mb-2">
//                       <strong>Doctor’s Roles & Responsibilities:</strong>
//                     </p>
//                     <ul className="text-sm space-y-2 bg-primary/10 p-4 rounded-lg border border-primary/20">
//                       <li>✓ Patient Diagnosis & Case Analysis</li>
//                       <li>✓ Personalized Homeopathic Treatment Planning</li>
//                       <li>✓ Monitoring and Adjusting Prescriptions</li>
//                       <li>✓ Educating Patients on Preventive Healthcare</li>
//                       <li>✓ Overseeing Clinical Procedures & Quality Care</li>
//                       <li>✓ Guiding Staff on Medical Protocols</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Part 2: Managing Consultant */}
//             <div className="flex flex-col items-center md:items-start animate-slide-in-right">
//               <div className="rounded-lg overflow-hidden w-full h-96 shadow-lg hover:shadow-xl transition-shadow mb-6">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GwpJSPrCheLHgH6usKljIM15uNpts7.png"
//                   alt="Saquelain Raza - Managing Consultant"
//                   width={400}
//                   height={500}
//                   className="w-full h-full object-cover"
//                   priority
//                 />
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold text-foreground mb-4">
//                   <strong>Managing Consultant</strong>
//                 </h2>
//                 <div className="space-y-4 text-foreground/80">
//                   <div>
//                     <p className="font-semibold text-foreground text-lg">
//                       Saquelain Raza
//                     </p>
//                     <p className="text-sm text-primary font-medium">
//                       क्लिनिक प्रबंधक
//                     </p>
//                   </div>
//                   <p>
//                     <span className="font-semibold text-foreground">
//                       Experience:
//                     </span>{" "}
//                     5 Years in Homeopathic Domain
//                   </p>
//                   <p>
//                     As the Managing Consultant at G.N. Homeo Clinic, Mr.
//                     Saquelain Raza plays a pivotal role in overseeing and
//                     managing the complete operational, administrative, and
//                     patient management processes of the clinic.
//                   </p>
//                   <p>
//                     With 5 years of professional experience in the Homeopathic
//                     healthcare domain, he ensures that every aspect of the
//                     clinic runs smoothly and efficiently to provide patients
//                     with high-quality, holistic care.
//                   </p>

//                   <div className="pt-4">
//                     <p className="font-semibold text-foreground mb-2">
//                       <strong>Key Responsibilities:</strong>
//                     </p>
//                     <ul className="text-sm space-y-2 bg-primary/10 p-4 rounded-lg border border-primary/20">
//                       <li>✓ Operational Management</li>
//                       <li>✓ Patient Care Coordination</li>
//                       <li>✓ Administrative Oversight</li>
//                       <li>✓ Clinic Efficiency & Quality Assurance</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
//             Conditions We Treat
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {categories.map((category, idx) => (
//               <Link
//                 key={category.name}
//                 href="/diseases"
//                 className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary hover:shadow-lg transition-all group animate-scale-in"
//                 style={{ animationDelay: `${idx * 0.05}s` }}
//               >
//                 <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
//                   {category.icon}
//                 </div>
//                 <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
//                   {category.name}
//                 </h3>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Ready to Start Your Healing Journey?
//           </h2>
//           <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
//             Get a free consultation with <strong>Dr. M.H. Rizwi</strong> today.
//             Choose your preferred method of communication.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/consultation"
//               className="bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
//             >
//               Schedule Now
//             </Link>
//             <a
//               href="https://wa.me/919608628633"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-all font-semibold hover:shadow-lg"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// import Link from "next/link";
// import { Leaf, Phone, MessageCircle, Search } from "lucide-react";
// import Image from "next/image";
// import Head from "next/head";

// export default function Home() {
//   const categories = [
//     { name: "Respiratory", icon: "🫁", hindi: "श्वसन तंत्र" },
//     { name: "Cardiovascular", icon: "❤️", hindi: "हृदय रोग" },
//     { name: "Digestive", icon: "🍽️", hindi: "पाचन तंत्र" },
//     { name: "Nervous System", icon: "🧠", hindi: "तंत्रिका तंत्र" },
//     { name: "Skin Diseases", icon: "💊", hindi: "त्वचा रोग" },
//     { name: "Women's Health", icon: "👩", hindi: "महिला स्वास्थ्य" },
//     { name: "Children's Care", icon: "👶", hindi: "बाल स्वास्थ्य" },
//     { name: "Pain Relief", icon: "💪", hindi: "दर्द निवारण" },
//   ];

//   return (
//     <main>
//       <Head>
//         <meta
//           name="description"
//           content="G.N. Homeo Clinic – Natural Healing with Dr. M.H. Rizwi, 35+ years of trusted homeopathic care in Purnia."
//         />
//       </Head>

//       {/* Hero Section */}
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 px-4 animate-fade-in-up">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             {/* Left Text */}
//             <div className="animate-slide-in-left">
//               <div className="flex items-center gap-2 mb-4">
//                 <Leaf className="text-primary" size={24} />
//                 <span className="text-primary font-semibold">
//                   <strong>G.N. Homeo Clinic</strong>
//                 </span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
//                 Healing Naturally with Homeopathy
//               </h1>

//               {/* ✅ Hindi Tagline */}
//               <p className="text-primary font-medium mt-2 text-lg">
//                 प्राकृतिक चिकित्सा के साथ स्वस्थ जीवन की ओर
//               </p>

//               <p className="text-lg text-foreground/80 mb-8 mt-4">
//                 Experience 35 years of expertise with{" "}
//                 <strong>Dr. M.H. Rizwi</strong>. Free consultations available
//                 via video call, chat, or phone.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link
//                   href="/consultation"
//                   aria-label="Book Consultation with Dr. M.H. Rizwi"
//                   className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold text-center hover:shadow-lg"
//                 >
//                   Book Consultation
//                 </Link>
//                 <a
//                   href="https://wa.me/919608628633"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Chat with Dr. M.H. Rizwi on WhatsApp"
//                   className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-all font-semibold text-center hover:shadow-lg"
//                 >
//                   WhatsApp Chat
//                 </a>
//               </div>
//             </div>

//             {/* ✅ Right Video Section (Rectangular) */}
//             <div className="hidden md:flex justify-center animate-slide-in-right">
//               <div className="w-[600px] h-[330px] rounded-xl overflow-hidden shadow-xl border-4 border-primary/30">
//                 <video
//                 src="/images/gnmvideo01.mp4" // Path to your video in public folder
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 style={{ width: "100%", height: "auto" }}
//               >
//                 Your browser does not support the video tag.
//               </video>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Actions */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 icon: Search,
//                 title: "Explore Health Conditions",
//                 desc: "Find homeopathic treatment for your condition",
//                 link: "/diseases",
//               },
//               {
//                 icon: Phone,
//                 title: "Book Your Consultation",
//                 desc: "Video call, chat, or phone consultation with Dr. M.H. Rizwi",
//                 link: "/consultation",
//               },
//               {
//                 icon: MessageCircle,
//                 title: "Quick WhatsApp Assistance",
//                 desc: "Connect instantly via WhatsApp for quick queries",
//                 link: "https://wa.me/919608628633",
//               },
//             ].map((item, idx) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={item.title}
//                   className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all animate-scale-in hover:border-primary"
//                   style={{ animationDelay: `${idx * 0.1}s` }}
//                 >
//                   <Icon className="text-primary mx-auto mb-4" size={32} />
//                   <h3 className="font-bold text-lg mb-2">{item.title}</h3>
//                   <p className="text-foreground/70 text-sm mb-4">{item.desc}</p>
//                   <Link
//                     href={item.link}
//                     aria-label={item.title}
//                     className="text-primary font-semibold hover:underline"
//                   >
//                     {item.link.startsWith("http") ? "Chat Now →" : "Browse →"}
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* About Doctor & Managing Consultant */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Doctor */}
//             <div className="flex flex-col items-center md:items-start animate-slide-in-left">
//               <div className="rounded-lg overflow-hidden w-full h-125 shadow-lg hover:shadow-xl transition-shadow mb-6">
//                 <Image
//                   src="/images/doctor-home.png"
//                   alt="Dr. M.H. Rizwi"
//                   width={400}
//                   height={500}
//                   className="w-full h-full object-cover"
//                   priority
//                 />
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold text-foreground mb-2">
//                   About <strong>Dr. M.H. Rizwi</strong>
//                 </h2>
//                 {/* <p className="text-sm text-primary font-medium mb-2">
//                   B.H.M.S (Bachelor of Homeopathic Medicine and Surgery)
//                 </p> */}
//                 <p className="text-foreground/70 italic mb-4">
//                   G.N. Homeo Clinic – Trusted for 35+ Years
//                 </p>

//                 <div className="space-y-4 text-foreground/80">
//                   <p>
//                     <span className="font-semibold text-foreground">
//                       Homeopathic Consultant & General Physician
//                     </span>
//                   </p>
//                   <p className="text-sm text-primary font-medium">
//                     होम्योपैथिक सलाहकार एवं सामान्य चिकित्सक
//                   </p>

//                   <p>
//                     With 35 years of dedicated experience in homeopathy, Dr.
//                     M.H. Rizwi has helped thousands of patients achieve natural
//                     healing and lasting wellness through compassionate care.
//                   </p>
//                   <p>
//                     His patient-first philosophy ensures every consultation is
//                     thorough, personalized, and focused on the root cause.
//                   </p>

//                   <div className="pt-4">
//                     <p className="font-semibold text-foreground mb-2">
//                       <strong>Doctor’s Roles & Responsibilities:</strong>
//                     </p>
//                     <ul className="text-sm space-y-2 bg-primary/10 p-4 rounded-lg border border-primary/20">
//                       <li>✓ Patient Diagnosis & Case Analysis</li>
//                       <li>✓ Personalized Homeopathic Treatment Planning</li>
//                       <li>✓ Monitoring and Adjusting Prescriptions</li>
//                       <li>✓ Educating Patients on Preventive Healthcare</li>
//                       <li>✓ Overseeing Clinical Procedures & Quality Care</li>
//                       <li>✓ Guiding Staff on Medical Protocols</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Managing Consultant */}
//             <div className="flex flex-col items-center md:items-start animate-slide-in-right">
//               <div className="rounded-lg overflow-hidden w-full h-125 shadow-lg hover:shadow-xl transition-shadow mb-6">
//                 <Image
//                   src="/images/gnh2.jpg"
//                   alt="Saquelain Raza - Managing Consultant"
//                   width={400}
//                   height={500}
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                 />
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold text-foreground mb-4">
//                   <strong>Managing Consultant</strong>
//                 </h2>
//                 <div className="space-y-4 text-foreground/80">
//                   <div>
//                     <p className="font-semibold text-foreground text-lg">
//                       Saquelain Raza
//                     </p>
//                     <p className="text-sm text-primary font-medium">
//                       क्लिनिक प्रबंधक
//                     </p>
//                   </div>
//                   <p>
//                     <span className="font-semibold text-foreground">
//                       Experience:
//                     </span>{" "}
//                     5 Years in Homeopathic Domain
//                   </p>
//                   <p>
//                     As the Managing Consultant at G.N. Homeo Clinic, Mr.
//                     Saquelain Raza oversees the complete operational,
//                     administrative, and patient management processes of the
//                     clinic.
//                   </p>
//                   <p>
//                     With 5 years of professional experience, he ensures that
//                     every aspect of the clinic runs smoothly for holistic care.
//                   </p>

//                   <div className="pt-4">
//                     <p className="font-semibold text-foreground mb-2">
//                       <strong>Key Responsibilities:</strong>
//                     </p>
//                     <ul className="text-sm space-y-2 bg-primary/10 p-4 rounded-lg border border-primary/20">
//                       <li>✓ Operational Management</li>
//                       <li>✓ Patient Care Coordination</li>
//                       <li>✓ Administrative Oversight</li>
//                       <li>✓ Staff Training & Development</li>
//                       <li>✓ Regulatory Compliance & Reporting</li>
//                       <li>✓ Clinic Efficiency & Quality Assurance</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Conditions Section */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
//             Conditions We Treat
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {categories.map((category, idx) => (
//               <Link
//                 key={category.name}
//                 href="/diseases"
//                 aria-label={category.name}
//                 className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary hover:shadow-lg transition-all group animate-scale-in"
//                 style={{ animationDelay: `${idx * 0.05}s` }}
//               >
//                 <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
//                   {category.icon}
//                 </div>
//                 <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
//                   {category.name}
//                 </h3>
//                 <p className="text-sm text-foreground/60 mt-1">
//                   ({category.hindi})
//                 </p>
//               </Link>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link
//               href="/diseases"
//               className="text-primary font-semibold hover:underline"
//             >
//               View All Conditions →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Ready to Start Your Healing Journey?
//           </h2>
//           <p className="text-lg opacity-90 mb-4 max-w-2xl mx-auto">
//             Get a free consultation with <strong>Dr. M.H. Rizwi</strong> today.
//             Choose your preferred method of communication.
//           </p>
//           <p className="text-sm opacity-80 mb-8">
//             Trusted by 10,000+ patients • 35 years of excellence in homeopathy
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/consultation"
//               className="bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
//             >
//               Schedule Now
//             </Link>
//             <a
//               href="https://wa.me/919608628633"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-all font-semibold hover:shadow-lg"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { Leaf, Phone, MessageCircle, Search } from "lucide-react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const categories = [
    { name: "Respiratory", icon: "🫁", hindi: "श्वसन तंत्र" },
    { name: "Cardiovascular", icon: "❤️", hindi: "हृदय रोग" },
    { name: "Digestive", icon: "🍽️", hindi: "पाचन तंत्र" },
    { name: "Nervous System", icon: "🧠", hindi: "तंत्रिका तंत्र" },
    { name: "Skin Diseases", icon: "💊", hindi: "त्वचा रोग" },
    { name: "Women's Health", icon: "👩", hindi: "महिला स्वास्थ्य" },
    { name: "Children's Care", icon: "👶", hindi: "बाल स्वास्थ्य" },
    { name: "Pain Relief", icon: "💪", hindi: "दर्द निवारण" },
  ];

  const quickActions = [
    {
      icon: Search,
      title: "Explore Health Conditions",
      titleHindi: "स्वास्थ्य स्थितियों का पता लगाएँ",
      desc: "Find homeopathic treatment for your condition",
      descHindi: "अपनी स्थिति के लिए होम्योपैथिक उपचार खोजें",
      link: "/diseases",
    },
    {
      icon: Phone,
      title: "Book Your Consultation",
      titleHindi: "अपना परामर्श बुक करें",
      desc: "Video call, chat, or phone consultation with Dr. M.H. Rizwi",
      descHindi: "डॉ. एम.एच. रिज़वी के साथ वीडियो कॉल, चैट या फोन परामर्श",
      link: "/consultation",
    },
    {
      icon: MessageCircle,
      title: "Quick WhatsApp Assistance",
      titleHindi: "त्वरित व्हाट्सएप सहायता",
      desc: "Connect instantly via WhatsApp for quick queries",
      descHindi: "त्वरित प्रश्नों के लिए व्हाट्सएप के माध्यम से तुरंत जुड़ें",
      link: "https://wa.me/919608628633",
    },
  ];

  return (
    <main>
      <Head>
        <meta
          name="description"
          content="G.N. Homeo Clinic – Natural Healing with Dr. M.H. Rizwi, 35+ years of trusted homeopathic care in Purnia."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 px-4 animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="text-primary" size={24} />
                <span className="text-primary font-semibold">
                  <strong>G.N. Homeo Clinic</strong>
                  <br />
                  <span className="text-sm">जी.एन. होम्योपैथिक क्लिनिक</span>
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Healing Naturally with Homeopathy
                <br />
                <span className="text-sm">
                  होम्योपैथी के साथ प्राकृतिक उपचार
                </span>
              </h1>

              <p className="text-primary font-medium mt-2 text-lg">
                प्राकृतिक चिकित्सा के साथ स्वस्थ जीवन की ओर
              </p>

              <p className="text-lg text-foreground/80 mb-8 mt-4">
                Experience 35 years of expertise with{" "}
                <strong>Dr. M.H. Rizwi</strong>. Free consultations available
                via video call, chat, or phone.
                <br />
                <span className="text-sm">
                  डॉ. एम.एच. रिज़वी के साथ 35 वर्षों के अनुभव का अनुभव करें।
                  वीडियो कॉल, चैट या फोन के माध्यम से मुफ्त परामर्श उपलब्ध है।
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/consultation"
                  aria-label="Book Consultation with Dr. M.H. Rizwi"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold text-center hover:shadow-lg"
                >
                  Book Consultation
                  <br />
                  <span className="text-sm">परामर्श बुक करें</span>
                </Link>
                <a
                  href="https://wa.me/919608628633"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Dr. M.H. Rizwi on WhatsApp"
                  className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-all font-semibold text-center hover:shadow-lg"
                >
                  WhatsApp Chat
                  <br />
                  <span className="text-sm">व्हाट्सएप चैट</span>
                </a>
              </div>
            </div>

            <div className="hidden md:flex justify-center animate-slide-in-right">
              <div className="w-[600px] h-[330px] rounded-xl overflow-hidden shadow-xl border-4 border-primary/30">
                <video
                  src="/images/gn2.mp4" // Path to your video in public folder
                  controls
                  muted={false}
                  playsInline
                  style={{ width: "100%", height: "auto" }}
                  // autoPlay
                  // loop
                  // controls
                  // muted={false}
                  // playsInline
                  // style={{ width: "100%", height: "auto" }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all animate-scale-in hover:border-primary"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">
                    {item.title}
                    <br />
                    <span className="text-sm">{item.titleHindi}</span>
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {item.desc}
                    <br />
                    <span className="text-xs">{item.descHindi}</span>
                  </p>
                  <Link
                    href={item.link}
                    aria-label={item.title}
                    className="text-primary font-semibold hover:underline"
                  >
                    {item.link.startsWith("http") ? "Chat Now →" : "Browse →"}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Doctor & Managing Consultant */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Doctor */}
          <div className="flex flex-col items-center md:items-start animate-slide-in-left">
            <div className="rounded-lg overflow-hidden w-full h-125 shadow-lg hover:shadow-xl transition-shadow mb-6">
              <Image
                src="/images/doctor-home.png"
                alt="Dr. M.H. Rizwi"
                width={400}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                About <strong>Dr. M.H. Rizwi</strong>
                <br />
                <span className="text-sm">डॉ. एम.एच. रिज़वी के बारे में</span>
              </h2>
              <p className="text-foreground/70 italic mb-4">
                G.N. Homeo Clinic – Trusted for 35+ Years
                <br />
                <span className="text-sm">
                  जी.एन. होम्योपैथिक क्लिनिक – 35+ वर्षों का भरोसा
                </span>
              </p>
              <div className="space-y-4 text-foreground/80">
                <p>
                  <span className="font-semibold text-foreground">
                    Homeopathic Consultant & General Physician
                  </span>
                  <br />
                  <span className="text-sm">
                    होम्योपैथिक सलाहकार एवं सामान्य चिकित्सक
                  </span>
                </p>
                <p>
                  With 35 years of dedicated experience in homeopathy, Dr. M.H.
                  Rizwi has helped thousands of patients achieve natural healing
                  and lasting wellness through compassionate care.
                  <br />
                  <span className="text-sm">
                    35 वर्षों के अनुभव के साथ, डॉ. रिज़वी ने हजारों मरीजों को
                    प्राकृतिक उपचार और दीर्घकालिक स्वास्थ्य प्राप्त करने में मदद
                    की है।
                  </span>
                </p>
                <p>
                  His patient-first philosophy ensures every consultation is
                  thorough, personalized, and focused on the root cause.
                  <br />
                  <span className="text-sm">
                    उनकी रोगी-प्रथम सोच सुनिश्चित करती है कि हर परामर्श पूरी तरह
                    से व्यक्तिगत और जड़ कारण पर केंद्रित हो।
                  </span>
                </p>

                {/* Doctor Responsibilities */}
                <div className="pt-4">
                  <p className="font-semibold text-foreground mb-2">
                    <strong>Doctor’s Roles & Responsibilities:</strong>
                    <br />
                    <span className="text-sm">
                      डॉक्टर की भूमिकाएँ और जिम्मेदारियां:
                    </span>
                  </p>
                  <ul className="text-sm space-y-2 bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <li>
                      ✓ Patient Diagnosis & Case Analysis <br />
                      <span className="text-xs">
                        रोगी निदान और केस विश्लेषण
                      </span>
                    </li>
                    <li>
                      ✓ Personalized Homeopathic Treatment Planning <br />
                      <span className="text-xs">
                        व्यक्तिगत होम्योपैथिक उपचार योजना बनाना
                      </span>
                    </li>
                    <li>
                      ✓ Monitoring and Adjusting Prescriptions <br />
                      <span className="text-xs">
                        प्रिस्क्रिप्शन की निगरानी और समायोजन
                      </span>
                    </li>
                    <li>
                      ✓ Educating Patients on Preventive Healthcare <br />
                      <span className="text-xs">
                        रोगियों को रोकथाम स्वास्थ्य देखभाल के बारे में शिक्षित
                        करना
                      </span>
                    </li>
                    <li>
                      ✓ Overseeing Clinical Procedures & Quality Care <br />
                      <span className="text-xs">
                        क्लिनिकल प्रक्रियाओं और गुणवत्ता देखभाल की निगरानी
                      </span>
                    </li>
                    <li>
                      ✓ Guiding Staff on Medical Protocols <br />
                      <span className="text-xs">
                        स्टाफ को चिकित्सा प्रोटोकॉल पर मार्गदर्शन देना
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Managing Consultant */}
          <div className="flex flex-col items-center md:items-start animate-slide-in-right">
            <div className="rounded-lg overflow-hidden w-full h-125 shadow-lg hover:shadow-xl transition-shadow mb-6">
              <Image
                src="/images/gnh2.jpg"
                alt="Saquelain Raza - Managing Consultant"
                width={400}
                height={500}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <strong>Managing Consultant</strong>
                <br />
                <span className="text-sm">प्रबंध सलाहकार</span>
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p className="font-semibold text-foreground text-lg">
                  Saquelain Raza
                  <br />
                  <span className="text-sm">साक़ेलैन रज़ा</span>
                </p>
                <p>
                  Experience: 5 Years in Homeopathic Domain
                  <br />
                  <span className="text-sm">
                    अनुभव: होम्योपैथिक क्षेत्र में 5 वर्ष
                  </span>
                </p>
                <p>
                  As the Managing Consultant at G.N. Homeo Clinic, Mr. Saquelain
                  Raza oversees the complete operational, administrative, and
                  patient management processes of the clinic.
                  <br />
                  <span className="text-sm">
                    जी.एन. होम्योपैथिक क्लिनिक में प्रबंध सलाहकार के रूप में,
                    श्री साक़ेलैन रज़ा क्लिनिक के सभी संचालन, प्रशासनिक और रोगी
                    प्रबंधन प्रक्रियाओं की निगरानी करते हैं।
                  </span>
                </p>

                {/* Managing Consultant Responsibilities */}
                <div className="pt-4">
                  <p className="font-semibold text-foreground mb-2">
                    <strong>Key Responsibilities:</strong>
                    <br />
                    <span className="text-sm">मुख्य जिम्मेदारियां:</span>
                  </p>
                  <ul className="text-sm space-y-2 bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <li>
                      ✓ Operational Management <br />
                      <span className="text-xs">संचालन प्रबंधन</span>
                    </li>
                    <li>
                      ✓ Patient Care Coordination <br />
                      <span className="text-xs">रोगी देखभाल समन्वय</span>
                    </li>
                    <li>
                      ✓ Administrative Oversight <br />
                      <span className="text-xs">प्रशासनिक निगरानी</span>
                    </li>
                    <li>
                      ✓ Staff Training & Development <br />
                      <span className="text-xs">स्टाफ प्रशिक्षण और विकास</span>
                    </li>
                    <li>
                      ✓ Regulatory Compliance & Reporting <br />
                      <span className="text-xs">
                        नियामक अनुपालन और रिपोर्टिंग
                      </span>
                    </li>
                    <li>
                      ✓ Clinic Efficiency & Quality Assurance <br />
                      <span className="text-xs">
                        क्लिनिक दक्षता और गुणवत्ता आश्वासन
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
            Conditions We Treat
            <br />
            <span className="text-sm">हम जिन स्थितियों का उपचार करते हैं</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, idx) => (
              <Link
                key={category.name}
                href="/diseases"
                aria-label={category.name}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary hover:shadow-lg transition-all group animate-scale-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-foreground/60 mt-1">
                  ({category.hindi})
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/diseases"
              className="text-primary font-semibold hover:underline"
            >
              View All Conditions →
              <br />
              <span className="text-sm">सभी स्थितियां देखें →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Healing Journey?
            <br />
            <span className="text-sm">
              क्या आप अपने उपचार की यात्रा शुरू करने के लिए तैयार हैं?
            </span>
          </h2>
          <p className="text-lg opacity-90 mb-4 max-w-2xl mx-auto">
            Get a free consultation with <strong>Dr. M.H. Rizwi</strong> today.
            Choose your preferred method of communication.
            <br />
            <span className="text-sm">
              आज ही डॉ. एम.एच. रिज़वी के साथ मुफ्त परामर्श प्राप्त करें। अपनी
              पसंद का संचार माध्यम चुनें।
            </span>
          </p>
          <p className="text-sm opacity-80 mb-8">
            Trusted by 10,000+ patients • 35 years of excellence in homeopathy
            <br />
            <span className="text-xs">
              10,000+ मरीजों द्वारा भरोसा • होम्योपैथी में 35 वर्षों की
              उत्कृष्टता
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
            >
              Schedule Now
              <br />
              <span className="text-sm">अब शेड्यूल करें</span>
            </Link>
            <a
              href="https://wa.me/919608628633"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-all font-semibold hover:shadow-lg"
            >
              Chat on WhatsApp
              <br />
              <span className="text-sm">व्हाट्सएप पर चैट करें</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
