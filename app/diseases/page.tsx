// "use client"

// import { useState, useMemo } from "react"
// import { Search } from "lucide-react"

// export default function Diseases() {
//   const [searchTerm, setSearchTerm] = useState("")

//   const diseaseCategories = [
//     {
//       category: "Respiratory System (श्वसन तंत्र)",
//       icon: "🫁",
//       diseases: [
//         "Asthma (दमा)",
//         "Bronchitis (श्वास नली में सूजन)",
//         "Common Cold (साधारण जुकाम)",
//         "Sinusitis (साइनस की सूजन)",
//         "Cough (खांसी)",
//         "Tonsillitis (टॉन्सिल की सूजन)",
//         "Allergic Rhinitis (एलर्जी जुकाम)",
//       ],
//     },
//     {
//       category: "Cardiovascular System (हृदय तंत्र)",
//       icon: "❤️",
//       diseases: [
//         "High Blood Pressure / Hypertension (उच्च रक्तचाप)",
//         "Low Blood Pressure (निम्न रक्तचाप)",
//         "Palpitation (धड़कन तेज होना)",
//         "Cholesterol (कोलेस्ट्रॉल)",
//         "Varicose Veins (वेरिकोस नसें)",
//       ],
//     },
//     {
//       category: "Digestive System (पाचन तंत्र)",
//       icon: "🍽️",
//       diseases: [
//         "Acidity (अम्लता)",
//         "Constipation (कब्ज़)",
//         "Gastritis (पेट की सूजन)",
//         "Indigestion (अपच)",
//         "Piles (बवासीर)",
//         "Fissure (गुदा में दरार)",
//         "Ulcer (घाव / अल्सर)",
//         "Liver Disorders (जिगर की बीमारी)",
//       ],
//     },
//     {
//       category: "Nervous System (तंत्रिका तंत्र)",
//       icon: "🧠",
//       diseases: [
//         "Migraine (आधा सिर दर्द)",
//         "Headache (सिर दर्द)",
//         "Insomnia (नींद न आना)",
//         "Depression (अवसाद)",
//         "Anxiety (चिंता)",
//         "Epilepsy (मिर्गी)",
//         "Paralysis (लकवा)",
//       ],
//     },
//     {
//       category: "Endocrine / Hormonal Disorders (हार्मोन संबंधी रोग)",
//       icon: "⚖️",
//       diseases: [
//         "Thyroid (थायरॉयड)",
//         "Diabetes (मधुमेह)",
//         "Obesity (मोटापा)",
//         "Menstrual Disorders (मासिक धर्म की समस्या)",
//         "PCOD / PCOS (पीसीओडी / पीसीओएस)",
//       ],
//     },
//     {
//       category: "Skin Diseases (त्वचा रोग)",
//       icon: "💊",
//       diseases: [
//         "Acne / Pimples (मुंहासे)",
//         "Eczema (खुजली / दाद)",
//         "Psoriasis (सोरायसिस)",
//         "Fungal Infections (फंगल संक्रमण)",
//         "Urticaria (पित्ती)",
//         "Hair Fall / Dandruff (बाल झड़ना / डैंड्रफ)",
//         "Warts (मस्से)",
//       ],
//     },
//     {
//       category: "Musculoskeletal System (हड्डी और मांसपेशी तंत्र)",
//       icon: "💪",
//       diseases: [
//         "Arthritis (गठिया)",
//         "Gout (गठिया का दर्द)",
//         "Back Pain (पीठ दर्द)",
//         "Neck Pain (गर्दन दर्द)",
//         "Sciatica (साइटिका)",
//         "Joint Pain (जोड़ों का दर्द)",
//         "Sprain (मरोड़)",
//       ],
//     },
//     {
//       category: "Male Disorders (पुरुष रोग)",
//       icon: "🧍‍♂️",
//       diseases: [
//         "Sexual Weakness (यौन दुर्बलता)",
//         "Premature Ejaculation (शीघ्रपतन)",
//         "Erectile Dysfunction (नपुंसकता)",
//         "Prostate Enlargement (प्रोस्टेट ग्रंथि का बढ़ना)",
//       ],
//     },
//     {
//       category: "Female Disorders (महिला रोग)",
//       icon: "👩‍🦰",
//       diseases: [
//         "Irregular Periods (अनियमित मासिक धर्म)",
//         "Leucorrhoea / White Discharge (सफेद पानी आना)",
//         "Infertility (बांझपन)",
//         "Menopause Symptoms (रजोनिवृत्ति की समस्या)",
//         "Breast Pain / Fibroids (स्तन दर्द / गांठ)",
//       ],
//     },
//     {
//       category: "Child Diseases (बाल रोग)",
//       icon: "👶",
//       diseases: [
//         "Teething Problems (दांत निकलने की समस्या)",
//         "Cold & Cough (सर्दी-खांसी)",
//         "Worms (पेट में कीड़े)",
//         "Poor Appetite (भूख न लगना)",
//         "Bed Wetting (बिस्तर गीला करना)",
//       ],
//     },
//     {
//       category: "Psychological / Mental Health (मानसिक स्वास्थ्य)",
//       icon: "😴",
//       diseases: [
//         "Stress (तनाव)",
//         "Phobia (डर / भय)",
//         "Lack of Confidence (आत्मविश्वास की कमी)",
//         "Behavioral Problems (व्यवहार संबंधी समस्या)",
//       ],
//     },
//     {
//       category: "General & Chronic Conditions (सामान्य एवं दीर्घकालिक रोग)",
//       icon: "🌿",
//       diseases: [
//         "Allergy (एलर्जी)",
//         "Weak Immunity (प्रतिरोधक क्षमता की कमी)",
//         "Chronic Fatigue (थकान)",
//         "Anaemia (खून की कमी)",
//       ],
//     },
//   ]

//   const filteredCategories = useMemo(() => {
//     if (!searchTerm.trim()) return diseaseCategories

//     const lowerSearch = searchTerm.toLowerCase()
//     return diseaseCategories
//       .map((cat) => ({
//         ...cat,
//         diseases: cat.diseases.filter((disease) => disease.toLowerCase().includes(lowerSearch)),
//       }))
//       .filter((cat) => cat.diseases.length > 0)
//   }, [searchTerm])

//   return (
//     <main>
//       {/* Header */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl font-bold text-foreground mb-4">Diseases We Treat</h1>
//           <p className="text-lg text-foreground/80">
//             Comprehensive homeopathic treatment for a wide range of conditions
//           </p>
//         </div>
//       </section>

//       {/* Search Section */}
//       <section className="py-8 px-4 bg-background sticky top-16 z-40 shadow-sm">
//         <div className="max-w-7xl mx-auto">
//           <div className="relative">
//             <Search className="absolute left-4 top-3 text-foreground/50" size={20} />
//             <input
//               type="text"
//               placeholder="Search diseases..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Diseases Grid */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           {filteredCategories.length > 0 ? (
//             <div className="space-y-8">
//               {filteredCategories.map((category, idx) => (
//                 <div
//                   key={category.category}
//                   className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all animate-fade-in-up"
//                   style={{ animationDelay: `${idx * 0.05}s` }}
//                 >
//                   <div className="flex items-center gap-4 mb-6">
//                     <span className="text-4xl">{category.icon}</span>
//                     <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {category.diseases.map((disease) => (
//                       <div
//                         key={disease}
//                         className="bg-background border border-border/50 rounded-lg p-4 hover:border-primary hover:bg-primary/5 transition-all group"
//                       >
//                         <p className="text-foreground group-hover:text-primary transition-colors font-medium">
//                           {disease}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <p className="text-lg text-foreground/70">No diseases found matching "{searchTerm}"</p>
//               <button onClick={() => setSearchTerm("")} className="mt-4 text-primary font-semibold hover:underline">
//                 Clear search
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 bg-primary text-primary-foreground">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Don't see your condition?</h2>
//           <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
//             Homeopathy can treat many conditions. Contact <strong>Dr. M.H. Rizwi</strong> for a free consultation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/consultation"
//               className="bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold"
//             >
//               Book Consultation
//             </a>
//             <a
//               href="https://wa.me/919608628633"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-all font-semibold"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

// "use client";

// import { useState, useMemo } from "react";
// import { Search, X } from "lucide-react";

// export default function Diseases() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const diseaseCategories = [
//     {
//       category: "Respiratory System (श्वसन तंत्र)",
//       icon: "🫁",
//       diseases: [
//         "Asthma (दमा)",
//         "Bronchitis (श्वास नली में सूजन)",
//         "Common Cold (साधारण जुकाम)",
//         "Sinusitis (साइनस की सूजन)",
//         "Cough (खांसी)",
//         "Tonsillitis (टॉन्सिल की सूजन)",
//         "Allergic Rhinitis (एलर्जी जुकाम)",
//       ],
//     },
//     {
//       category: "Cardiovascular System (हृदय तंत्र)",
//       icon: "❤️",
//       diseases: [
//         "High Blood Pressure / Hypertension (उच्च रक्तचाप)",
//         "Low Blood Pressure (निम्न रक्तचाप)",
//         "Palpitation (धड़कन तेज होना)",
//         "Cholesterol (कोलेस्ट्रॉल)",
//         "Varicose Veins (वेरिकोस नसें)",
//       ],
//     },
//     {
//       category: "Digestive System (पाचन तंत्र)",
//       icon: "🍽️",
//       diseases: [
//         "Acidity (अम्लता)",
//         "Constipation (कब्ज़)",
//         "Gastritis (पेट की सूजन)",
//         "Indigestion (अपच)",
//         "Piles (बवासीर)",
//         "Fissure (गुदा में दरार)",
//         "Ulcer (घाव / अल्सर)",
//         "Liver Disorders (जिगर की बीमारी)",
//       ],
//     },
//     {
//       category: "Nervous System (तंत्रिका तंत्र)",
//       icon: "🧠",
//       diseases: [
//         "Migraine (आधा सिर दर्द)",
//         "Headache (सिर दर्द)",
//         "Insomnia (नींद न आना)",
//         "Depression (अवसाद)",
//         "Anxiety (चिंता)",
//         "Epilepsy (मिर्गी)",
//         "Paralysis (लकवा)",
//       ],
//     },
//     {
//       category: "Endocrine / Hormonal Disorders (हार्मोन संबंधी रोग)",
//       icon: "⚖️",
//       diseases: [
//         "Thyroid (थायरॉयड)",
//         "Diabetes (मधुमेह)",
//         "Obesity (मोटापा)",
//         "Menstrual Disorders (मासिक धर्म की समस्या)",
//         "PCOD / PCOS (पीसीओडी / पीसीओएस)",
//       ],
//     },
//     {
//       category: "Skin Diseases (त्वचा रोग)",
//       icon: "💊",
//       diseases: [
//         "Acne / Pimples (मुंहासे)",
//         "Eczema (खुजली / दाद)",
//         "Psoriasis (सोरायसिस)",
//         "Fungal Infections (फंगल संक्रमण)",
//         "Urticaria (पित्ती)",
//         "Hair Fall / Dandruff (बाल झड़ना / डैंड्रफ)",
//         "Warts (मस्से)",
//       ],
//     },
//     {
//       category: "Musculoskeletal System (हड्डी और मांसपेशी तंत्र)",
//       icon: "💪",
//       diseases: [
//         "Arthritis (गठिया)",
//         "Gout (गठिया का दर्द)",
//         "Back Pain (पीठ दर्द)",
//         "Neck Pain (गर्दन दर्द)",
//         "Sciatica (साइटिका)",
//         "Joint Pain (जोड़ों का दर्द)",
//         "Sprain (मरोड़)",
//       ],
//     },
//     {
//       category: "Male Disorders (पुरुष रोग)",
//       icon: "🧍‍♂️",
//       diseases: [
//         "Sexual Weakness (यौन दुर्बलता)",
//         "Premature Ejaculation (शीघ्रपतन)",
//         "Erectile Dysfunction (नपुंसकता)",
//         "Prostate Enlargement (प्रोस्टेट ग्रंथि का बढ़ना)",
//       ],
//     },
//     {
//       category: "Female Disorders (महिला रोग)",
//       icon: "👩‍🦰",
//       diseases: [
//         "Irregular Periods (अनियमित मासिक धर्म)",
//         "Leucorrhoea / White Discharge (सफेद पानी आना)",
//         "Infertility (बांझपन)",
//         "Menopause Symptoms (रजोनिवृत्ति की समस्या)",
//         "Breast Pain / Fibroids (स्तन दर्द / गांठ)",
//       ],
//     },
//     {
//       category: "Child Diseases (बाल रोग)",
//       icon: "👶",
//       diseases: [
//         "Teething Problems (दांत निकलने की समस्या)",
//         "Cold & Cough (सर्दी-खांसी)",
//         "Worms (पेट में कीड़े)",
//         "Poor Appetite (भूख न लगना)",
//         "Bed Wetting (बिस्तर गीला करना)",
//       ],
//     },
//     {
//       category: "Psychological / Mental Health (मानसिक स्वास्थ्य)",
//       icon: "😴",
//       diseases: [
//         "Stress (तनाव)",
//         "Phobia (डर / भय)",
//         "Lack of Confidence (आत्मविश्वास की कमी)",
//         "Behavioral Problems (व्यवहार संबंधी समस्या)",
//       ],
//     },
//     {
//       category: "General & Chronic Conditions (सामान्य एवं दीर्घकालिक रोग)",
//       icon: "🌿",
//       diseases: [
//         "Allergy (एलर्जी)",
//         "Weak Immunity (प्रतिरोधक क्षमता की कमी)",
//         "Chronic Fatigue (थकान)",
//         "Anaemia (खून की कमी)",
//       ],
//     },
//   ];

//   const filteredCategories = useMemo(() => {
//     if (!searchTerm.trim()) return diseaseCategories;

//     const lowerSearch = searchTerm.toLowerCase();
//     return diseaseCategories
//       .map((cat) => ({
//         ...cat,
//         diseases: cat.diseases.filter((disease) =>
//           disease.toLowerCase().includes(lowerSearch)
//         ),
//       }))
//       .filter((cat) => cat.diseases.length > 0);
//   }, [searchTerm]);

//   return (
//     <main className="min-h-screen bg-background">
//       {/* Hero Header */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 py-16 px-4">
//         <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
//         <div className="max-w-7xl mx-auto relative">
//           <div className="flex flex-col items-center text-center">
//             <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-4">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
//               </span>
//               Comprehensive Care
//             </span>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
//               Diseases We{" "}
//               <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
//                 Treat
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
//               Explore our extensive list of conditions treated with safe and
//               effective homeopathic remedies.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Sticky Search Bar */}
//       <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 py-4 px-4 transition-shadow">
//         <div className="max-w-7xl mx-auto">
//           <div className="relative max-w-xl mx-auto">
//             <Search
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40"
//               size={20}
//             />
//             <input
//               type="text"
//               placeholder="Search for a disease..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-12 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
//             />
//             {searchTerm && (
//               <button
//                 onClick={() => setSearchTerm("")}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
//                 aria-label="Clear search"
//               >
//                 <X size={18} />
//               </button>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Disease Categories Grid */}
//       <section className="py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           {filteredCategories.length > 0 ? (
//             <div className="space-y-10">
//               {filteredCategories.map((category, idx) => (
//                 <div
//                   key={category.category}
//                   className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
//                   style={{ animationDelay: `${idx * 50}ms` }}
//                 >
//                   <div className="flex items-center gap-4 mb-6">
//                     <span className="text-5xl">{category.icon}</span>
//                     <div>
//                       <h2 className="text-2xl md:text-3xl font-bold text-foreground">
//                         {category.category}
//                       </h2>
//                       <div className="h-1 w-12 bg-primary rounded-full mt-1" />
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
//                     {category.diseases.map((disease) => (
//                       <div
//                         key={disease}
//                         className="group bg-background/60 hover:bg-primary/5 border border-border/40 hover:border-primary/30 rounded-xl p-4 transition-all duration-200 cursor-default"
//                       >
//                         <p className="text-foreground group-hover:text-primary transition-colors font-medium text-sm md:text-base">
//                           {disease}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-20">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
//                 <Search className="text-foreground/40" size={28} />
//               </div>
//               <p className="text-xl font-medium text-foreground/80">
//                 No diseases found
//               </p>
//               <p className="text-foreground/60 mt-1">
//                 Try adjusting your search term.
//               </p>
//               <button
//                 onClick={() => setSearchTerm("")}
//                 className="mt-4 text-primary font-semibold hover:underline inline-flex items-center gap-1"
//               >
//                 Clear search
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-4">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
//         <div className="max-w-7xl mx-auto text-center relative">
//           <h2 className="text-3xl md:text-4xl font-bold mb-3">
//             Don't see your condition?
//           </h2>
//           <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
//             Homeopathy offers holistic solutions for many health concerns.
//             Contact <strong>Dr. M.H. Rizwi</strong> for a personalized
//             consultation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/consultation"
//               className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
//             >
//               Book Consultation
//             </a>
//             <a
//               href="https://wa.me/919608628633"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center border-2 border-white/80 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Inline animations and grid background */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 0.5s ease-out forwards;
//         }
//         .bg-grid-white\\/5 {
//           background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
//           background-size: 24px 24px;
//         }
//       `}</style>
//     </main>
//   );
// }

"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";

export default function Diseases() {
  const [searchTerm, setSearchTerm] = useState("");

  const diseaseCategories = [
    {
      category: "Respiratory System (श्वसन तंत्र)",
      icon: "🫁",
      diseases: [
        "Asthma (दमा)",
        "Bronchitis (श्वास नली में सूजन)",
        "Common Cold (साधारण जुकाम)",
        "Sinusitis (साइनस की सूजन)",
        "Cough (खांसी)",
        "Tonsillitis (टॉन्सिल की सूजन)",
        "Allergic Rhinitis (एलर्जी जुकाम)",
      ],
    },
    {
      category: "Cardiovascular System (हृदय तंत्र)",
      icon: "❤️",
      diseases: [
        "High Blood Pressure / Hypertension (उच्च रक्तचाप)",
        "Low Blood Pressure (निम्न रक्तचाप)",
        "Palpitation (धड़कन तेज होना)",
        "Cholesterol (कोलेस्ट्रॉल)",
        "Varicose Veins (वेरिकोस नसें)",
      ],
    },
    {
      category: "Digestive System (पाचन तंत्र)",
      icon: "🍽️",
      diseases: [
        "Acidity (अम्लता)",
        "Constipation (कब्ज़)",
        "Gastritis (पेट की सूजन)",
        "Indigestion (अपच)",
        "Piles (बवासीर)",
        "Fissure (गुदा में दरार)",
        "Ulcer (घाव / अल्सर)",
        "Liver Disorders (जिगर की बीमारी)",
      ],
    },
    {
      category: "Nervous System (तंत्रिका तंत्र)",
      icon: "🧠",
      diseases: [
        "Migraine (आधा सिर दर्द)",
        "Headache (सिर दर्द)",
        "Insomnia (नींद न आना)",
        "Depression (अवसाद)",
        "Anxiety (चिंता)",
        "Epilepsy (मिर्गी)",
        "Paralysis (लकवा)",
      ],
    },
    {
      category: "Endocrine / Hormonal Disorders (हार्मोन संबंधी रोग)",
      icon: "⚖️",
      diseases: [
        "Thyroid (थायरॉयड)",
        "Diabetes (मधुमेह)",
        "Obesity (मोटापा)",
        "Menstrual Disorders (मासिक धर्म की समस्या)",
        "PCOD / PCOS (पीसीओडी / पीसीओएस)",
      ],
    },
    {
      category: "Skin Diseases (त्वचा रोग)",
      icon: "💊",
      diseases: [
        "Acne / Pimples (मुंहासे)",
        "Eczema (खुजली / दाद)",
        "Psoriasis (सोरायसिस)",
        "Fungal Infections (फंगल संक्रमण)",
        "Urticaria (पित्ती)",
        "Hair Fall / Dandruff (बाल झड़ना / डैंड्रफ)",
        "Warts (मस्से)",
      ],
    },
    {
      category: "Musculoskeletal System (हड्डी और मांसपेशी तंत्र)",
      icon: "💪",
      diseases: [
        "Arthritis (गठिया)",
        "Gout (गठिया का दर्द)",
        "Back Pain (पीठ दर्द)",
        "Neck Pain (गर्दन दर्द)",
        "Sciatica (साइटिका)",
        "Joint Pain (जोड़ों का दर्द)",
        "Sprain (मरोड़)",
      ],
    },
    {
      category: "Male Disorders (पुरुष रोग)",
      icon: "🧍‍♂️",
      diseases: [
        "Sexual Weakness (यौन दुर्बलता)",
        "Premature Ejaculation (शीघ्रपतन)",
        "Erectile Dysfunction (नपुंसकता)",
        "Prostate Enlargement (प्रोस्टेट ग्रंथि का बढ़ना)",
      ],
    },
    {
      category: "Female Disorders (महिला रोग)",
      icon: "👩‍🦰",
      diseases: [
        "Irregular Periods (अनियमित मासिक धर्म)",
        "Leucorrhoea / White Discharge (सफेद पानी आना)",
        "Infertility (बांझपन)",
        "Menopause Symptoms (रजोनिवृत्ति की समस्या)",
        "Breast Pain / Fibroids (स्तन दर्द / गांठ)",
      ],
    },
    {
      category: "Child Diseases (बाल रोग)",
      icon: "👶",
      diseases: [
        "Teething Problems (दांत निकलने की समस्या)",
        "Cold & Cough (सर्दी-खांसी)",
        "Worms (पेट में कीड़े)",
        "Poor Appetite (भूख न लगना)",
        "Bed Wetting (बिस्तर गीला करना)",
      ],
    },
    {
      category: "Psychological / Mental Health (मानसिक स्वास्थ्य)",
      icon: "😴",
      diseases: [
        "Stress (तनाव)",
        "Phobia (डर / भय)",
        "Lack of Confidence (आत्मविश्वास की कमी)",
        "Behavioral Problems (व्यवहार संबंधी समस्या)",
      ],
    },
    {
      category: "General & Chronic Conditions (सामान्य एवं दीर्घकालिक रोग)",
      icon: "🌿",
      diseases: [
        "Allergy (एलर्जी)",
        "Weak Immunity (प्रतिरोधक क्षमता की कमी)",
        "Chronic Fatigue (थकान)",
        "Anaemia (खून की कमी)",
      ],
    },
  ];

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return diseaseCategories;

    const lowerSearch = searchTerm.toLowerCase();
    return diseaseCategories
      .map((cat) => ({
        ...cat,
        diseases: cat.diseases.filter((disease) =>
          disease.toLowerCase().includes(lowerSearch)
        ),
      }))
      .filter((cat) => cat.diseases.length > 0);
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Header with transparent background banner */}
      <section className="relative overflow-hidden py-16 px-4">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://brainwisemedia.com/wp-content/uploads/2025/05/BW_Women_Different_Diseases-1210x423.png"
            alt="Various health conditions and medical care"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10" />
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Comprehensive Care
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Diseases We{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Treat
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
              Explore our extensive list of conditions treated with safe and
              effective homeopathic remedies.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Search Bar */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 py-4 px-4 transition-shadow">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-xl mx-auto">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for a disease..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Disease Categories Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredCategories.length > 0 ? (
            <div className="space-y-10">
              {filteredCategories.map((category, idx) => (
                <div
                  key={category.category}
                  className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">{category.icon}</span>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {category.category}
                      </h2>
                      <div className="h-1 w-12 bg-primary rounded-full mt-1" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {category.diseases.map((disease) => (
                      <div
                        key={disease}
                        className="group bg-background/60 hover:bg-primary/5 border border-border/40 hover:border-primary/30 rounded-xl p-4 transition-all duration-200 cursor-default"
                      >
                        <p className="text-foreground group-hover:text-primary transition-colors font-medium text-sm md:text-base">
                          {disease}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="text-foreground/40" size={28} />
              </div>
              <p className="text-xl font-medium text-foreground/80">
                No diseases found
              </p>
              <p className="text-foreground/60 mt-1">
                Try adjusting your search term.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 text-primary font-semibold hover:underline inline-flex items-center gap-1"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Don't see your condition?
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Homeopathy offers holistic solutions for many health concerns.
            Contact <strong>Dr. M.H. Rizwi</strong> for a personalized
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consultation"
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
            >
              Book Consultation
            </a>
            <a
              href="https://wa.me/919608628633"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white/80 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Inline animations and grid background */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .bg-grid-white\\/5 {
          background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </main>
  );
}