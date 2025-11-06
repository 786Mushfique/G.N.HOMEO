
// import type React from "react"
// import type { Metadata } from "next"
// import { Geist, Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"
// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import Chatbot from "@/components/chatbot"

// const _geist = Geist({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "G.N.Homeo Clinic - Healing Naturally with Homeopathy",
//   description: "Dr. M.H. Rizwi - 35 years of homeopathic expertise. Free consultations via video call, chat, or phone.",
//   generator: "v0.app",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`font-sans antialiased`}>
//         <Navigation />
//         {children}
//         <Chatbot />
//         <Footer />
//         <Analytics />
//       </body>
//     </html>
//   )
// }


import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G.N.Homeo Clinic - Healing Naturally with Homeopathy | जी.एन.होमियो क्लिनिक - प्राकृतिक चिकित्सा द्वारा उपचार",
  description:
    "Dr. M.H. Rizwi - 35 years of homeopathic expertise. Free consultations via video call, chat, or phone. | डॉ. एम.एच. रिज़वी - 35 वर्षों का होम्योपैथिक अनुभव। वीडियो कॉल, चैट या फोन द्वारा निःशुल्क परामर्श उपलब्ध।",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {/* 🌐 Navigation Bar */}
        <Navigation />

        {/* 🌿 Main Page Content */}
        {children}

        {/* 🤖 Chatbot Section - bilingual message */}
        <Chatbot />

        {/* 🌍 Footer Section */}
        <Footer />

        {/* 📊 Analytics */}
        <Analytics />

        {/* Optional bilingual accessibility note */}
        <div className="text-center text-sm text-gray-500 py-4">
          <p>
            Healing Naturally with Homeopathy |{" "}
            <span className="font-semibold">
              प्राकृतिक होम्योपैथिक उपचार से स्वास्थ्य लाभ पाएं
            </span>
          </p>
        </div>
      </body>
    </html>
  );
}





