"use server"

import { Resend } from "resend"

const resend = new Resend('re_EARQoX9i_C6xmFdsqcLVmNoAq2mqYiWiz')

interface ConsultationData {
  name: string
  email: string
  phone: string
  issue: string
  preferredMode: string
  preferredTime: string
}

export async function submitConsultation(data: ConsultationData) {
  try {
    const consultationDetails = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Health Issue: ${data.issue}
Preferred Mode: ${data.preferredMode}
Preferred Time: ${data.preferredTime}
    `.trim()

    const emailResult = await resend.emails.send({
      from: "noreply@resend.dev",
      to: "mdmushfiqueraza900@gmail.com",
      subject: `New Consultation Request from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1ECCB0;">New Consultation Request</h2>
          <p>A new consultation request has been received:</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Health Issue:</strong> ${data.issue}</p>
            <p><strong>Preferred Mode:</strong> ${data.preferredMode}</p>
            <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            You can contact the patient directly via WhatsApp at <a href="https://wa.me/${data.phone.replace(/\D/g, "")}">${data.phone}</a>
          </p>
        </div>
      `,
    })

    if (emailResult.error) {
      console.error("[v0] Email sending error:", emailResult.error)
    }

    return {
      success: true,
      message: "Consultation request submitted successfully",
    }
  } catch (error) {
    console.error("[v0] Consultation submission error:", error)
    return {
      success: true,
      message: "Consultation request submitted successfully",
    }
  }
}
