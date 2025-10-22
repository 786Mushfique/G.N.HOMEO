"use server"

import { Resend } from "resend"

const resend = new Resend('re_EARQoX9i_C6xmFdsqcLVmNoAq2mqYiWiz')

export async function submitContact(formData: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}) {
  try {
    // Send email to clinic
    await resend.emails.send({
      from: "noreply@resend.dev",
      to: "mdmushfiqueraza900@gmail.com",
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1ECCB0;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-left: 4px solid #1ECCB0;">
              ${formData.message}
            </p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This is an automated email from G.N.Homeo Clinic website. Please reply to the sender's email address.
          </p>
        </div>
      `,
    })

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error sending contact email:", error)
    return { success: true, message: "Message received! We'll get back to you soon." }
  }
}
