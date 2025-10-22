export const maxDuration = 30

const clinicInfo = {
  name: "G.N.Homeo Clinic",
  doctor: "Dr. M.H. Rizwi",
  experience: "25 years",
  whatsapp: "+919608628633",
  hours: "Mon-Thu 11 AM - 8 PM, Fri 2 PM - 8 PM, Sun 4 PM - 8 PM",
  location: "Mariam Nagar, Purnea, Near Dto Office, Commissioner Road, Court-854301",
  services: ["Video consultations", "Chat consultations", "Phone consultations"],
  upi: "7782907822@ptsbi",
}

const responses: { [key: string]: string } = {
  hello: `Welcome to ${clinicInfo.name}! I'm here to help you with information about our homeopathic services. How can I assist you today?`,
  hi: `Welcome to ${clinicInfo.name}! I'm here to help you with information about our homeopathic services. How can I assist you today?`,
  doctor: `Our clinic is run by ${clinicInfo.doctor}, who has ${clinicInfo.experience} of experience in homeopathic medicine. He specializes in treating various chronic and acute conditions naturally.`,
  consultation: `We offer three types of consultations:\n1. Video Consultations - Face-to-face online\n2. Chat Consultations - Text-based\n3. Phone Consultations - Voice calls\n\nContact us on WhatsApp: ${clinicInfo.whatsapp}`,
  hours: `Our clinic hours are:\n${clinicInfo.hours}\n\nLocation: ${clinicInfo.location}`,
  free: `We offer free checkups for new patients! This is a great opportunity to understand your health condition and explore homeopathic treatment options. Contact us on WhatsApp: ${clinicInfo.whatsapp}`,
  donation: `Your donations help us provide free consultations and medicines to those in need. You can donate via Paytm UPI: ${clinicInfo.upi}. Every contribution makes a difference!`,
  medicines: `We stock a wide range of high-quality homeopathic medicines from reputed manufacturers. Our pharmacist can help you find the right medicine for your condition.`,
  homeopathy: `Homeopathy is a natural, holistic system of medicine that treats the whole person, not just symptoms. It's safe, effective, and has no side effects. Ask us more about how it can help you!`,
  contact: `You can reach us on WhatsApp: ${clinicInfo.whatsapp}\nLocation: ${clinicInfo.location}\nClinic Hours: ${clinicInfo.hours}`,
  book: `To book a consultation, contact us on WhatsApp: ${clinicInfo.whatsapp}. We'll help you schedule an appointment at your convenience.`,
  appointment: `To book an appointment, contact us on WhatsApp: ${clinicInfo.whatsapp}. We'll help you schedule an appointment at your convenience.`,
}

function findBestResponse(userMessage: string): string {
  const message = userMessage.toLowerCase().trim()

  // Check for exact or partial matches
  for (const [key, response] of Object.entries(responses)) {
    if (message.includes(key)) {
      return response
    }
  }

  // Default response
  return `Thank you for your question! I'm here to help with information about ${clinicInfo.name}, our services, and homeopathic treatments. You can also contact us directly on WhatsApp: ${clinicInfo.whatsapp} for personalized assistance.`
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!messages || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided" }), { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]
    const userInput = lastMessage.content || ""

    const response = findBestResponse(userInput)

    return new Response(JSON.stringify({ content: response }), { headers: { "Content-Type": "application/json" } })
  } catch (error) {
    console.error("Chat error:", error)
    return new Response(JSON.stringify({ error: "Failed to process message" }), { status: 500 })
  }
}
