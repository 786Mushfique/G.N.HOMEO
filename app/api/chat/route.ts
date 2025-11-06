// export const maxDuration = 30

// const clinicInfo = {
//   name: "G.N.Homeo Clinic",
//   doctor: "Dr. M.H. Rizwi",
//   experience: "35 years",
//   whatsapp: "+919608628633",
//   hours: "Mon-Sat 11 AM - 8 PM, Friday-Closed, Sun 4 PM - 8 PM",
//   location: "Mariam Nagar, Purnea, Near Dto Office, Commissioner Road, Court-854301",
//   services: ["Video consultations", "Chat consultations", "Phone consultations"],
//   upi: "7782907822@ptsbi",
// }

// const responses: { [key: string]: string } = {
//   hello: `Welcome to ${clinicInfo.name}! I'm here to help you with information about our homeopathic services. How can I assist you today?`,
//   hi: `Welcome to ${clinicInfo.name}! I'm here to help you with information about our homeopathic services. How can I assist you today?`,
//   doctor: `Our clinic is run by ${clinicInfo.doctor}, who has ${clinicInfo.experience} of experience in homeopathic medicine. He specializes in treating various chronic and acute conditions naturally.`,
//   consultation: `We offer three types of consultations:\n1. Video Consultations - Face-to-face online\n2. Chat Consultations - Text-based\n3. Phone Consultations - Voice calls\n\nContact us on WhatsApp: ${clinicInfo.whatsapp}`,
//   hours: `Our clinic hours are:\n${clinicInfo.hours}\n\nLocation: ${clinicInfo.location}`,
//   free: `We offer free checkups for new patients! This is a great opportunity to understand your health condition and explore homeopathic treatment options. Contact us on WhatsApp: ${clinicInfo.whatsapp}`,
//   donation: `Your donations help us provide free consultations and medicines to those in need. You can donate via Paytm UPI: ${clinicInfo.upi}. Every contribution makes a difference!`,
//   medicines: `We stock a wide range of high-quality homeopathic medicines from reputed manufacturers. Our pharmacist can help you find the right medicine for your condition.`,
//   homeopathy: `Homeopathy is a natural, holistic system of medicine that treats the whole person, not just symptoms. It's safe, effective, and has no side effects. Ask us more about how it can help you!`,
//   contact: `You can reach us on WhatsApp: ${clinicInfo.whatsapp}\nLocation: ${clinicInfo.location}\nClinic Hours: ${clinicInfo.hours}`,
//   book: `To book a consultation, contact us on WhatsApp: ${clinicInfo.whatsapp}. We'll help you schedule an appointment at your convenience.`,
//   appointment: `To book an appointment, contact us on WhatsApp: ${clinicInfo.whatsapp}. We'll help you schedule an appointment at your convenience.`,
// }

// function findBestResponse(userMessage: string): string {
//   const message = userMessage.toLowerCase().trim()

//   // Check for exact or partial matches
//   for (const [key, response] of Object.entries(responses)) {
//     if (message.includes(key)) {
//       return response
//     }
//   }

//   // Default response
//   return `Thank you for your question! I'm here to help with information about ${clinicInfo.name}, our services, and homeopathic treatments. You can also contact us directly on WhatsApp: ${clinicInfo.whatsapp} for personalized assistance.`
// }

// export async function POST(req: Request) {
//   try {
//     const { messages } = await req.json()

//     if (!messages || messages.length === 0) {
//       return new Response(JSON.stringify({ error: "No messages provided" }), { status: 400 })
//     }

//     const lastMessage = messages[messages.length - 1]
//     const userInput = lastMessage.content || ""

//     const response = findBestResponse(userInput)

//     return new Response(JSON.stringify({ content: response }), { headers: { "Content-Type": "application/json" } })
//   } catch (error) {
//     console.error("Chat error:", error)
//     return new Response(JSON.stringify({ error: "Failed to process message" }), { status: 500 })
//   }
// }

import { NextResponse } from "next/server"

// Clinic Info
const clinicInfo = {
  name: "G.N.Homeo Clinic",
  doctor: "Dr. M.H. Rizwi",
  experience: "35 years",
  whatsapp: "+919608628633",
  hours: "Mon-Sat 11 AM - 8 PM, Friday-Closed, Sun 4 PM - 8 PM",
  location: "Mariam Nagar, Purnea, Near Dto Office, Commissioner Road, Court-854301",
  services: ["Video consultations", "Chat consultations", "Phone consultations"],
  upi: "7782907822@ptsbi",
}

// Homeopathic Diseases & Medicines
const homeoData = [
  {
    disease: "Common Cold / साधारण जुकाम",
    medicines: [
      { name: "Aconite", explanation: "Sudden onset with sneezing and fever / अचानक बुखार और छींक" },
      { name: "Allium Cepa", explanation: "Runny nose with watery eyes / बहती नाक और पानी वाली आंखें" },
    ]
  },
  {
    disease: "Cough / खांसी",
    medicines: [
      { name: "Bryonia", explanation: "Dry cough worsens on movement / हिलने-डुलने पर बढ़ती शुष्क खांसी" },
      { name: "Antimonium Tart", explanation: "Cough with rattling mucus / बलगम के साथ खांसी" },
    ]
  },
  // Add more diseases as needed
]

// Function to detect user intent for fallback
function getContextualFallback(userMessage: string) {
  const msg = userMessage.toLowerCase()

  if (msg.includes("doctor") || msg.includes("डॉक्टर")) {
    return `👨‍⚕️ Doctor / डॉक्टर: ${clinicInfo.doctor} (${clinicInfo.experience} अनुभव). WhatsApp: ${clinicInfo.whatsapp}`
  }

  if (msg.includes("timing") || msg.includes("hours") || msg.includes("समय")) {
    return `⏰ Clinic Timings / समय: ${clinicInfo.hours}`
  }

  if (msg.includes("location") || msg.includes("address") || msg.includes("पता")) {
    return `📍 Location / पता: ${clinicInfo.location}`
  }

  if (msg.includes("services") || msg.includes("सेवाएँ")) {
    return `🏥 Services / सेवाएँ: ${clinicInfo.services.join(", ")}`
  }

  // Check if user asks about a disease or medicine
  for (const d of homeoData) {
    if (msg.includes(d.disease.toLowerCase().split("/")[0].trim())) {
      return `🏥 Disease / रोग: ${d.disease}\nMedicines / दवाइयाँ:\n${d.medicines.map(m => `- ${m.name}: ${m.explanation}`).join("\n")}`
    }
  }

  // Default fallback if nothing matches
  return `Hello! 👋 I'm here to provide information about ${clinicInfo.name} / मैं यहाँ ${clinicInfo.name} के बारे में जानकारी देने के लिए हूँ. You can ask about the doctor, timings, location, services, or homeopathic diseases.`
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    if (!messages || messages.length === 0) {
      return NextResponse.json({ content: "No messages provided." }, { status: 400 })
    }

    const lastMessage = messages[messages.length - 1].content || "Hello!"

    if (!process.env.OPENAI_API_KEY) {
      throw new Error("Missing OpenAI API key")
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `
You are a bilingual (English + Hindi) assistant for ${clinicInfo.name}. 
Answer questions about homeopathy, clinic services, timings, and doctor info.
Include WhatsApp ${clinicInfo.whatsapp} when relevant.
Provide information about common homeopathic diseases and their medicines in both English and Hindi.
Answer only relevant information based on user's question.
`
          },
          { role: "user", content: lastMessage },
        ],
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error("OpenAI API error:", errText)

      // Use contextual fallback if API fails
      const fallback = getContextualFallback(lastMessage)
      return NextResponse.json({ content: fallback })
    }

    const data = await response.json()
    const aiMessage = data.choices?.[0]?.message?.content || getContextualFallback(lastMessage)

    return NextResponse.json({ content: aiMessage })
  } catch (error) {
    console.error("API route error:", error)
    const fallback = getContextualFallback(messages[messages.length - 1].content || "")
    return NextResponse.json({ content: fallback }, { status: 200 })
  }
}
