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

// "use client";

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

//   const quickActions = [
//     {
//       icon: Search,
//       title: "Explore Health Conditions",
//       titleHindi: "स्वास्थ्य स्थितियों का पता लगाएँ",
//       desc: "Find homeopathic treatment for your condition",
//       descHindi: "अपनी स्थिति के लिए होम्योपैथिक उपचार खोजें",
//       link: "/diseases",
//     },
//     {
//       icon: Phone,
//       title: "Book Your Consultation",
//       titleHindi: "अपना परामर्श बुक करें",
//       desc: "Video call, chat, or phone consultation with Dr. M.H. Rizwi",
//       descHindi: "डॉ. एम.एच. रिज़वी के साथ वीडियो कॉल, चैट या फोन परामर्श",
//       link: "/consultation",
//     },
//     {
//       icon: MessageCircle,
//       title: "Quick WhatsApp Assistance",
//       titleHindi: "त्वरित व्हाट्सएप सहायता",
//       desc: "Connect instantly via WhatsApp for quick queries",
//       descHindi: "त्वरित प्रश्नों के लिए व्हाट्सएप के माध्यम से तुरंत जुड़ें",
//       link: "https://wa.me/919608628633",
//     },
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
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 px-4 animate-fade-in-up">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="animate-slide-in-left">
//               <div className="flex items-center gap-2 mb-4">
//                 <Leaf className="text-primary" size={24} />
//                 <span className="text-primary font-semibold">
//                   <strong>G.N. Homeo Clinic</strong>
//                   <br />
//                   <span className="text-sm">जी.एन. होम्योपैथिक क्लिनिक</span>
//                 </span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
//                 Healing Naturally with Homeopathy
//                 <br />
//                 <span className="text-sm">
//                   होम्योपैथी के साथ प्राकृतिक उपचार
//                 </span>
//               </h1>

//               <p className="text-primary font-medium mt-2 text-lg">
//                 प्राकृतिक चिकित्सा के साथ स्वस्थ जीवन की ओर
//               </p>

//               <p className="text-lg text-foreground/80 mb-8 mt-4">
//                 Experience 35 years of expertise with{" "}
//                 <strong>Dr. M.H. Rizwi</strong>. Free consultations available
//                 via video call, chat, or phone.
//                 <br />
//                 <span className="text-sm">
//                   डॉ. एम.एच. रिज़वी के साथ 35 वर्षों के अनुभव का अनुभव करें।
//                   वीडियो कॉल, चैट या फोन के माध्यम से मुफ्त परामर्श उपलब्ध है।
//                 </span>
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link
//                   href="/consultation"
//                   aria-label="Book Consultation with Dr. M.H. Rizwi"
//                   className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold text-center hover:shadow-lg"
//                 >
//                   Book Consultation
//                   <br />
//                   <span className="text-sm">परामर्श बुक करें</span>
//                 </Link>
//                 <a
//                   href="https://wa.me/919608628633"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Chat with Dr. M.H. Rizwi on WhatsApp"
//                   className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-all font-semibold text-center hover:shadow-lg"
//                 >
//                   WhatsApp Chat
//                   <br />
//                   <span className="text-sm">व्हाट्सएप चैट</span>
//                 </a>
//               </div>
//             </div>

//             <div className="hidden md:flex justify-center animate-slide-in-right">
//               <div className="w-[600px] h-[330px] rounded-xl overflow-hidden shadow-xl border-4 border-primary/30">
//                 <video
//                   src="/images/gn2.mp4" // Path to your video in public folder
//                   controls
//                   muted={false}
//                   playsInline
//                   style={{ width: "100%", height: "auto" }}
//                   // autoPlay
//                   // loop
//                   // controls
//                   // muted={false}
//                   // playsInline
//                   // style={{ width: "100%", height: "auto" }}
//                 >
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Actions */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {quickActions.map((item, idx) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={item.title}
//                   className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all animate-scale-in hover:border-primary"
//                   style={{ animationDelay: `${idx * 0.1}s` }}
//                 >
//                   <Icon className="text-primary mx-auto mb-4" size={32} />
//                   <h3 className="font-bold text-lg mb-2">
//                     {item.title}
//                     <br />
//                     <span className="text-sm">{item.titleHindi}</span>
//                   </h3>
//                   <p className="text-foreground/70 text-sm mb-4">
//                     {item.desc}
//                     <br />
//                     <span className="text-xs">{item.descHindi}</span>
//                   </p>
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
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Doctor */}
//           <div className="flex flex-col items-center md:items-start animate-slide-in-left">
//             <div className="rounded-lg overflow-hidden w-full h-125 shadow-lg hover:shadow-xl transition-shadow mb-6">
//               <Image
//                 src="/images/doctor-home.png"
//                 alt="Dr. M.H. Rizwi"
//                 width={400}
//                 height={500}
//                 className="w-full h-full object-cover"
//                 priority
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-foreground mb-2">
//                 About <strong>Dr. M.H. Rizwi</strong>
//                 <br />
//                 <span className="text-sm">डॉ. एम.एच. रिज़वी के बारे में</span>
//               </h2>
//               <p className="text-foreground/70 italic mb-4">
//                 G.N. Homeo Clinic – Trusted for 35+ Years
//                 <br />
//                 <span className="text-sm">
//                   जी.एन. होम्योपैथिक क्लिनिक – 35+ वर्षों का भरोसा
//                 </span>
//               </p>
//               <div className="space-y-4 text-foreground/80">
//                 <p>
//                   <span className="font-semibold text-foreground">
//                     Homeopathic Consultant & General Physician
//                   </span>
//                   <br />
//                   <span className="text-sm">
//                     होम्योपैथिक सलाहकार एवं सामान्य चिकित्सक
//                   </span>
//                 </p>
//                 <p>
//                   With 35 years of dedicated experience in homeopathy, Dr. M.H.
//                   Rizwi has helped thousands of patients achieve natural healing
//                   and lasting wellness through compassionate care.
//                   <br />
//                   <span className="text-sm">
//                     35 वर्षों के अनुभव के साथ, डॉ. रिज़वी ने हजारों मरीजों को
//                     प्राकृतिक उपचार और दीर्घकालिक स्वास्थ्य प्राप्त करने में मदद
//                     की है।
//                   </span>
//                 </p>
//                 <p>
//                   His patient-first philosophy ensures every consultation is
//                   thorough, personalized, and focused on the root cause.
//                   <br />
//                   <span className="text-sm">
//                     उनकी रोगी-प्रथम सोच सुनिश्चित करती है कि हर परामर्श पूरी तरह
//                     से व्यक्तिगत और जड़ कारण पर केंद्रित हो।
//                   </span>
//                 </p>

//                 {/* Doctor Responsibilities */}
//                 <div className="pt-4">
//                   <p className="font-semibold text-foreground mb-2">
//                     <strong>Doctor’s Roles & Responsibilities:</strong>
//                     <br />
//                     <span className="text-sm">
//                       डॉक्टर की भूमिकाएँ और जिम्मेदारियां:
//                     </span>
//                   </p>
//                   <ul className="text-sm space-y-2 bg-primary/10 p-4 rounded-lg border border-primary/20">
//                     <li>
//                       ✓ Patient Diagnosis & Case Analysis <br />
//                       <span className="text-xs">
//                         रोगी निदान और केस विश्लेषण
//                       </span>
//                     </li>
//                     <li>
//                       ✓ Personalized Homeopathic Treatment Planning <br />
//                       <span className="text-xs">
//                         व्यक्तिगत होम्योपैथिक उपचार योजना बनाना
//                       </span>
//                     </li>
//                     <li>
//                       ✓ Monitoring and Adjusting Prescriptions <br />
//                       <span className="text-xs">
//                         प्रिस्क्रिप्शन की निगरानी और समायोजन
//                       </span>
//                     </li>
//                     <li>
//                       ✓ Educating Patients on Preventive Healthcare <br />
//                       <span className="text-xs">
//                         रोगियों को रोकथाम स्वास्थ्य देखभाल के बारे में शिक्षित
//                         करना
//                       </span>
//                     </li>
//                     <li>
//                       ✓ Overseeing Clinical Procedures & Quality Care <br />
//                       <span className="text-xs">
//                         क्लिनिकल प्रक्रियाओं और गुणवत्ता देखभाल की निगरानी
//                       </span>
//                     </li>
//                     <li>
//                       ✓ Guiding Staff on Medical Protocols <br />
//                       <span className="text-xs">
//                         स्टाफ को चिकित्सा प्रोटोकॉल पर मार्गदर्शन देना
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Managing Consultant */}
//           <div className="flex flex-col items-center md:items-start animate-slide-in-right">
//             <div className="rounded-lg overflow-hidden w-full h-125 shadow-lg hover:shadow-xl transition-shadow mb-6">
//               <Image
//                 src="/images/gnh2.jpg"
//                 alt="Saquelain Raza - Managing Consultant"
//                 width={400}
//                 height={500}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-foreground mb-4">
//                 <strong>Managing Consultant</strong>
//                 <br />
//                 <span className="text-sm">प्रबंध सलाहकार</span>
//               </h2>
//               <div className="space-y-4 text-foreground/80">
//                 <p className="font-semibold text-foreground text-lg">
//                   Saquelain Raza
//                   <br />
//                   <span className="text-sm">साक़ेलैन रज़ा</span>
//                 </p>
//                 <p>
//                   Experience: 5 Years in Homeopathic Domain
//                   <br />
//                   <span className="text-sm">
//                     अनुभव: होम्योपैथिक क्षेत्र में 5 वर्ष
//                   </span>
//                 </p>
//                 <p>
//                   As the Managing Consultant at G.N. Homeo Clinic, Mr. Saquelain
//                   Raza oversees the complete operational, administrative, and
//                   patient management processes of the clinic.
//                   <br />
//                   <span className="text-sm">
//                     जी.एन. होम्योपैथिक क्लिनिक में प्रबंध सलाहकार के रूप में,
//                     श्री साक़ेलैन रज़ा क्लिनिक के सभी संचालन, प्रशासनिक और रोगी
//                     प्रबंधन प्रक्रियाओं की निगरानी करते हैं।
//                   </span>
//                 </p>

//                 {/* Managing Consultant Responsibilities */}
//                 <div className="pt-4">
//                   <p className="font-semibold text-foreground mb-2">
//                     <strong>Key Responsibilities:</strong>
//                     <br />
//                     <span className="text-sm">मुख्य जिम्मेदारियां:</span>
//                   </p>
//                   <ul className="text-sm space-y-2 bg-primary/10 p-4 rounded-lg border border-primary/20">
//                     <li>
//                       ✓ Operational Management <br />
//                       <span className="text-xs">संचालन प्रबंधन</span>
//                     </li>
//                     <li>
//                       ✓ Patient Care Coordination <br />
//                       <span className="text-xs">रोगी देखभाल समन्वय</span>
//                     </li>
//                     <li>
//                       ✓ Administrative Oversight <br />
//                       <span className="text-xs">प्रशासनिक निगरानी</span>
//                     </li>
//                     <li>
//                       ✓ Staff Training & Development <br />
//                       <span className="text-xs">स्टाफ प्रशिक्षण और विकास</span>
//                     </li>
//                     <li>
//                       ✓ Regulatory Compliance & Reporting <br />
//                       <span className="text-xs">
//                         नियामक अनुपालन और रिपोर्टिंग
//                       </span>
//                     </li>
//                     <li>
//                       ✓ Clinic Efficiency & Quality Assurance <br />
//                       <span className="text-xs">
//                         क्लिनिक दक्षता और गुणवत्ता आश्वासन
//                       </span>
//                     </li>
//                   </ul>
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
//             <br />
//             <span className="text-sm">हम जिन स्थितियों का उपचार करते हैं</span>
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
//               <br />
//               <span className="text-sm">सभी स्थितियां देखें →</span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Ready to Start Your Healing Journey?
//             <br />
//             <span className="text-sm">
//               क्या आप अपने उपचार की यात्रा शुरू करने के लिए तैयार हैं?
//             </span>
//           </h2>
//           <p className="text-lg opacity-90 mb-4 max-w-2xl mx-auto">
//             Get a free consultation with <strong>Dr. M.H. Rizwi</strong> today.
//             Choose your preferred method of communication.
//             <br />
//             <span className="text-sm">
//               आज ही डॉ. एम.एच. रिज़वी के साथ मुफ्त परामर्श प्राप्त करें। अपनी
//               पसंद का संचार माध्यम चुनें।
//             </span>
//           </p>
//           <p className="text-sm opacity-80 mb-8">
//             Trusted by 10,000+ patients • 35 years of excellence in homeopathy
//             <br />
//             <span className="text-xs">
//               10,000+ मरीजों द्वारा भरोसा • होम्योपैथी में 35 वर्षों की
//               उत्कृष्टता
//             </span>
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/consultation"
//               className="bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold hover:shadow-lg"
//             >
//               Schedule Now
//               <br />
//               <span className="text-sm">अब शेड्यूल करें</span>
//             </Link>
//             <a
//               href="https://wa.me/919608628633"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-all font-semibold hover:shadow-lg"
//             >
//               Chat on WhatsApp
//               <br />
//               <span className="text-sm">व्हाट्सएप पर चैट करें</span>
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import {
  Leaf,
  Phone,
  MessageCircle,
  Search,
  CheckCircle2,
  GraduationCap,
  Award,
  Clock,
  ChevronDown,
  ChevronUp,
  Play,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

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
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/20",
      buttonColor: "text-blue-600 hover:bg-blue-50",
    },
    {
      icon: Phone,
      title: "Book Your Consultation",
      titleHindi: "अपना परामर्श बुक करें",
      desc: "Video call, chat, or phone consultation with Dr. M.H. Rizwi",
      descHindi: "डॉ. एम.एच. रिज़वी के साथ वीडियो कॉल, चैट या फोन परामर्श",
      link: "/consultation",
      gradient: "from-primary/10 to-secondary/10",
      borderColor: "border-primary/30",
      iconBg: "bg-primary/20",
      buttonColor: "text-primary hover:bg-primary/10",
    },
    {
      icon: MessageCircle,
      title: "Quick WhatsApp Assistance",
      titleHindi: "त्वरित व्हाट्सएप सहायता",
      desc: "Connect instantly via WhatsApp for quick queries",
      descHindi: "त्वरित प्रश्नों के लिए व्हाट्सएप के माध्यम से तुरंत जुड़ें",
      link: "https://wa.me/919608628633",
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      iconBg: "bg-green-500/20",
      buttonColor: "text-green-600 hover:bg-green-50",
    },
  ];

  const [showDoctorProfile, setShowDoctorProfile] = useState(false);
  const [showConsultantProfile, setShowConsultantProfile] = useState(false);

  return (
    <>
      <Head>
        <title>G.N. Homeo Clinic – Natural Healing with Homeopathy</title>
        <meta
          name="description"
          content="G.N. Homeo Clinic – Natural Healing with Dr. M.H. Rizwi, 35+ years of trusted homeopathic care in Purnia."
        />
      </Head>

      <main className="overflow-x-hidden">
        {/* ===== MODERN HERO SECTION ===== */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 relative z-10 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Trusted since 1990</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Leaf className="text-primary" size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">G.N. Homeo Clinic</h2>
                    <p className="text-sm text-foreground/60">जी.एन. होम्योपैथिक क्लिनिक</p>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                  Healing Naturally
                  <br />
                  <span className="text-primary">with Homeopathy</span>
                  <br />
                  <span className="text-base font-normal text-foreground/70">
                    होम्योपैथी के साथ प्राकृतिक उपचार
                  </span>
                </h1>

                <p className="text-lg text-foreground/80 mb-6 max-w-lg">
                  Experience 35 years of expertise with{" "}
                  <strong className="text-primary">Dr. M.H. Rizwi</strong>.
                  Free consultations via video call, chat, or phone.
                  <br />
                  <span className="text-sm text-foreground/60">
                    डॉ. एम.एच. रिज़वी के साथ 35 वर्षों के अनुभव का अनुभव करें।
                    वीडियो कॉल, चैट या फोन के माध्यम से मुफ्त परामर्श उपलब्ध है।
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/consultation"
                    className="group bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-center transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Book Consultation
                    <span className="text-sm">परामर्श बुक करें</span>
                  </Link>
                  <a
                    href="https://wa.me/919608628633"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-primary text-primary px-8 py-3.5 rounded-xl font-semibold text-center transition-all hover:bg-primary/5 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    WhatsApp Chat
                    <span className="text-sm">व्हाट्सएप चैट</span>
                  </a>
                </div>

                <div className="flex items-center gap-6 mt-8 text-sm text-foreground/60">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    10,000+ patients
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    35+ years
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    4.9 ★ rating
                  </span>
                </div>
              </div>

              {/* Right – Video Card */}
              <div className="animate-slide-in-right relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-3 group">
                  <div className="relative rounded-xl overflow-hidden">
                    <video
                      src="/images/gn2.mp4"
                      controls
                      muted={false}
                      playsInline
                      className="w-full h-auto object-cover aspect-video"
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/30">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Watch intro
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card shadow-xl rounded-xl p-4 border border-border max-w-[200px] hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                      👩
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">
                        “Life‑changing care!”
                      </p>
                      <p className="text-[10px] text-foreground/50">— Priya S.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MODERN QUICK ACTION CARDS ===== */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickActions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`relative bg-gradient-to-br ${item.gradient} border ${item.borderColor} rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-scale-in group overflow-hidden`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    <div className={`${item.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-xl mb-1">
                      {item.title}
                      <br />
                      <span className="text-sm font-normal text-foreground/60">
                        {item.titleHindi}
                      </span>
                    </h3>
                    <p className="text-foreground/70 text-sm mb-5">
                      {item.desc}
                      <br />
                      <span className="text-xs">{item.descHindi}</span>
                    </p>
                    <Link
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center gap-2 font-semibold ${item.buttonColor} px-5 py-2 rounded-full border border-transparent transition-all hover:border-current group`}
                    >
                      {item.link.startsWith("http") ? "Chat Now" : "Browse"}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      <span className="sr-only">
                        {item.link.startsWith("http") ? "on WhatsApp" : "conditions"}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== ABOUT DOCTOR & MANAGING CONSULTANT ===== */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
              Our Team
              <br />
              <span className="text-sm font-normal text-foreground/70">
                हमारी टीम
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* ---- Doctor Card ---- */}
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-primary/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                      <Image
                        src="/images/doctor-home.png"
                        alt="Dr. M.H. Rizwi"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-foreground">
                      Dr. M.H. Rizwi
                    </h3>
                    <p className="text-primary font-semibold text-sm">
                      Homeopathic Consultant & General Physician
                      <br />
                      <span className="text-xs text-foreground/70">
                        होम्योपैथिक सलाहकार एवं सामान्य चिकित्सक
                      </span>
                    </p>
                    <p className="text-sm text-foreground/70 mt-1">
                      <Clock className="inline w-4 h-4 mr-1 text-primary" />
                      35+ years of experience
                      <br />
                      <span className="text-xs">35+ वर्षों का अनुभव</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-foreground/80 text-sm">
                  <p>
                    <span className="font-semibold">Specializes in:</span> Chronic
                    diseases, Skin ailments, Respiratory disorders, Women's health,
                    and Pediatric care.
                    <br />
                    <span className="text-xs">
                      विशेषज्ञता: पुरानी बीमारियाँ, त्वचा रोग, श्वसन विकार,
                      महिला स्वास्थ्य और बाल देखभाल।
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Approach:</span> Holistic,
                    patient-centric, root-cause treatment.
                    <br />
                    <span className="text-xs">
                      दृष्टिकोण: समग्र, रोगी-केंद्रित, जड़-कारण उपचार।
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => setShowDoctorProfile(!showDoctorProfile)}
                  className="mt-4 text-primary font-semibold hover:underline flex items-center gap-1 text-sm transition-colors"
                >
                  {showDoctorProfile ? (
                    <>
                      Hide Full Profile <ChevronUp className="w-4 h-4" />
                      <span className="text-xs ml-1">पूरा प्रोफ़ाइल छिपाएँ</span>
                    </>
                  ) : (
                    <>
                      View Profile <ChevronDown className="w-4 h-4" />
                      <span className="text-xs ml-1">प्रोफ़ाइल देखें</span>
                    </>
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    showDoctorProfile ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-border pt-4 space-y-4">
                    <div>
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        Education & Qualifications
                        <br />
                        <span className="text-xs font-normal text-foreground/70">
                          शिक्षा और योग्यताएँ
                        </span>
                      </h4>
                      <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1 mt-2">
                        <li>Bachelor of Homeopathic Medicine & Surgery (BHMS)</li>
                        <li>MD (Homeopathy) – Gold Medalist</li>
                        <li>Diploma in Clinical Research</li>
                        <li>Certified in Advanced Homeopathic Therapeutics</li>
                        <li className="text-xs text-foreground/60 list-none">
                          (होम्योपैथिक मेडिसिन और सर्जरी में स्नातक (BHMS)
                          <br /> एमडी (होम्योपैथी) – स्वर्ण पदक विजेता
                          <br /> क्लिनिकल रिसर्च में डिप्लोमा
                          <br /> उन्नत होम्योपैथिक चिकित्सा में प्रमाणित)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Memberships & Recognitions
                        <br />
                        <span className="text-xs font-normal text-foreground/70">
                          सदस्यता और मान्यताएँ
                        </span>
                      </h4>
                      <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1 mt-2">
                        <li>Life Member – Homeopathic Medical Association of India</li>
                        <li>Recipient of "Best Homeopathic Practitioner" Award (2020)</li>
                        <li>Published research in International Journal of Homeopathy</li>
                        <li className="text-xs text-foreground/60 list-none">
                          (भारतीय होम्योपैथिक चिकित्सा संघ के आजीवन सदस्य
                          <br /> "सर्वश्रेष्ठ होम्योपैथिक चिकित्सक" पुरस्कार (2020)
                          <br /> अंतर्राष्ट्रीय होम्योपैथी जर्नल में प्रकाशित शोध)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Roles & Responsibilities
                        <br />
                        <span className="text-xs font-normal text-foreground/70">
                          भूमिकाएँ और जिम्मेदारियाँ
                        </span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Patient Diagnosis & Case Analysis
                            <br />
                            <span className="text-[10px] text-foreground/60">
                              रोगी निदान और केस विश्लेषण
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Personalized Treatment Planning
                            <br />
                            <span className="text-[10px] text-foreground/60">
                              व्यक्तिगत उपचार योजना बनाना
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Monitoring Prescriptions
                            <br />
                            <span className="text-[10px] text-foreground/60">
                              प्रिस्क्रिप्शन की निगरानी
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Patient Education on Prevention
                            <br />
                            <span className="text-[10px] text-foreground/60">
                              रोकथाम पर रोगी शिक्षा
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Clinical Quality Assurance
                            <br />
                            <span className="text-[10px] text-foreground/60">
                              क्लिनिकल गुणवत्ता आश्वासन
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Mentoring Junior Staff
                            <br />
                            <span className="text-[10px] text-foreground/60">
                              जूनियर स्टाफ को मार्गदर्शन
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---- Managing Consultant Card ---- */}
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-primary/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                      <Image
                        src="/images/gnh2.jpg"
                        alt="Saquelain Raza"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-foreground">
                      Saquelain Raza
                    </h3>
                    <p className="text-primary font-semibold text-sm">
                      Managing Consultant
                      <br />
                      <span className="text-xs text-foreground/70">
                        प्रबंध सलाहकार
                      </span>
                    </p>
                    <p className="text-sm text-foreground/70 mt-1">
                      <Clock className="inline w-4 h-4 mr-1 text-primary" />
                      5 years in Homeopathic Domain
                      <br />
                      <span className="text-xs">होम्योपैथिक क्षेत्र में 5 वर्ष</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-foreground/80 text-sm">
                  <p>
                    <span className="font-semibold">Core Competencies:</span>{" "}
                    Operations management, Patient care coordination, Regulatory
                    compliance, Team leadership.
                    <br />
                    <span className="text-xs">
                      मुख्य क्षमताएँ: संचालन प्रबंधन, रोगी देखभाल समन्वय, नियामक
                      अनुपालन, टीम नेतृत्व।
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Mission:</span> To ensure
                    seamless clinic operations and exceptional patient experience.
                    <br />
                    <span className="text-xs">
                      लक्ष्य: क्लिनिक संचालन को सुगम और रोगी अनुभव को उत्कृष्ट बनाना।
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => setShowConsultantProfile(!showConsultantProfile)}
                  className="mt-4 text-primary font-semibold hover:underline flex items-center gap-1 text-sm transition-colors"
                >
                  {showConsultantProfile ? (
                    <>
                      Hide Full Profile <ChevronUp className="w-4 h-4" />
                      <span className="text-xs ml-1">पूरा प्रोफ़ाइल छिपाएँ</span>
                    </>
                  ) : (
                    <>
                      View Profile <ChevronDown className="w-4 h-4" />
                      <span className="text-xs ml-1">प्रोफ़ाइल देखें</span>
                    </>
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    showConsultantProfile ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-border pt-4 space-y-4">
                    <div>
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        Education & Qualifications
                        <br />
                        <span className="text-xs font-normal text-foreground/70">
                          शिक्षा और योग्यताएँ
                        </span>
                      </h4>
                      <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1 mt-2">
                        <li>MBA in Healthcare Management</li>
                        <li>Bachelor's in Business Administration</li>
                        <li>Certified in Patient Experience Leadership</li>
                        <li>Diploma in Hospital Administration</li>
                        <li className="text-xs text-foreground/60 list-none">
                          (स्वास्थ्य प्रबंधन में MBA
                          <br /> व्यवसाय प्रशासन में स्नातक
                          <br /> रोगी अनुभव नेतृत्व में प्रमाणित
                          <br /> अस्पताल प्रशासन में डिप्लोमा)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Achievements
                        <br />
                        <span className="text-xs font-normal text-foreground/70">
                          उपलब्धियाँ
                        </span>
                      </h4>
                      <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1 mt-2">
                        <li>Successfully streamlined clinic operations, reducing wait times by 30%</li>
                        <li>Implemented digital patient management system</li>
                        <li>Led team to win "Best Clinic Service" award (2023)</li>
                        <li className="text-xs text-foreground/60 list-none">
                          (क्लिनिक संचालन को सुव्यवस्थित करके प्रतीक्षा समय 30% कम किया
                          <br /> डिजिटल रोगी प्रबंधन प्रणाली लागू की
                          <br /> "सर्वश्रेष्ठ क्लिनिक सेवा" पुरस्कार (2023) जीता)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Key Responsibilities
                        <br />
                        <span className="text-xs font-normal text-foreground/70">
                          मुख्य जिम्मेदारियाँ
                        </span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Operational Management
                            <br />
                            <span className="text-[10px] text-foreground/60">
                              संचालन प्रबंधन
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Patient Care Coordination
                            <br />
                            <span className="text-[10px] text-foreground/60">
                              रोगी देखभाल समन्वय
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Administrative Oversight
                            <br />
                            <span className="text-[10px] text-foreground/60">
                              प्रशासनिक निगरानी
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Staff Training & Development
                            <br />
                            <span className="text-[10px] text-foreground/60">
                              स्टाफ प्रशिक्षण और विकास
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Regulatory Compliance & Reporting
                            <br />
                            <span className="text-[10px] text-foreground/60">
                              नियामक अनुपालन और रिपोर्टिंग
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            Clinic Efficiency & Quality Assurance
                            <br />
                            <span className="text-[10px] text-foreground/60">
                              क्लिनिक दक्षता और गुणवत्ता आश्वासन
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MODERN CONDITIONS SECTION ===== */}
        <section className="py-16 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Conditions We Treat
                <br />
                <span className="text-sm font-normal text-foreground/70">
                  हम जिन स्थितियों का उपचार करते हैं
                </span>
              </h2>
              <p className="mt-3 text-foreground/60 max-w-2xl mx-auto text-sm">
                Explore our comprehensive range of homeopathic treatments for various health conditions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {categories.map((category, idx) => (
                <Link
                  key={category.name}
                  href="/diseases"
                  className="group relative bg-card border border-border rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 animate-scale-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {/* Subtle background gradient on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-foreground/50 mt-1">
                      {category.hindi}
                    </p>
                    <div className="mt-3 inline-flex items-center text-xs font-medium text-primary/70 group-hover:text-primary transition-colors">
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/diseases"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                View All Conditions
                <ArrowRight className="w-4 h-4" />
                <span className="sr-only">View all conditions</span>
              </Link>
              <p className="text-xs text-foreground/40 mt-3">
                सभी स्थितियां देखें
              </p>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        {/* <section className="py-16 px-4 bg-primary text-primary-foreground animate-fade-in-up">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Healing Journey?
              <br />
              <span className="text-sm">क्या आप अपने उपचार की यात्रा शुरू करने के लिए तैयार हैं?</span>
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
        </section> */}
      </main>

      {/* ===== GLOBAL ANIMATION STYLES ===== */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}