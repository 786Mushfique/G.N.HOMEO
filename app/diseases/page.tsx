"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"

export default function Diseases() {
  const [searchTerm, setSearchTerm] = useState("")

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
  ]

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return diseaseCategories

    const lowerSearch = searchTerm.toLowerCase()
    return diseaseCategories
      .map((cat) => ({
        ...cat,
        diseases: cat.diseases.filter((disease) => disease.toLowerCase().includes(lowerSearch)),
      }))
      .filter((cat) => cat.diseases.length > 0)
  }, [searchTerm])

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Diseases We Treat</h1>
          <p className="text-lg text-foreground/80">
            Comprehensive homeopathic treatment for a wide range of conditions
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 bg-background sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-foreground/50" size={20} />
            <input
              type="text"
              placeholder="Search diseases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Diseases Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {filteredCategories.length > 0 ? (
            <div className="space-y-8">
              {filteredCategories.map((category, idx) => (
                <div
                  key={category.category}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{category.icon}</span>
                    <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.diseases.map((disease) => (
                      <div
                        key={disease}
                        className="bg-background border border-border/50 rounded-lg p-4 hover:border-primary hover:bg-primary/5 transition-all group"
                      >
                        <p className="text-foreground group-hover:text-primary transition-colors font-medium">
                          {disease}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70">No diseases found matching "{searchTerm}"</p>
              <button onClick={() => setSearchTerm("")} className="mt-4 text-primary font-semibold hover:underline">
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Don't see your condition?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Homeopathy can treat many conditions. Contact <strong>Dr. M.H. Rizwi</strong> for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consultation"
              className="bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold"
            >
              Book Consultation
            </a>
            <a
              href="https://wa.me/919608628633"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-all font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
