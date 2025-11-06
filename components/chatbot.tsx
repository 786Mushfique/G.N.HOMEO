// "use client"
// import { useState, useRef, useEffect } from "react"
// import type React from "react"

// import { X, Send, MessageCircle } from "lucide-react"

// interface Message {
//   id: string
//   role: "user" | "assistant"
//   content: string
// }

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [messages, setMessages] = useState<Message[]>([])
//   const [input, setInput] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages])

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!input.trim() || isLoading) return

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       role: "user",
//       content: input,
//     }

//     setMessages((prev) => [...prev, userMessage])
//     setInput("")
//     setIsLoading(true)

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           messages: [...messages, userMessage],
//         }),
//       })

//       if (!response.ok) throw new Error("Failed to get response")

//       const data = await response.json()
//       const assistantMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         role: "assistant",
//         content: data.content,
//       }

//       setMessages((prev) => [...prev, assistantMessage])
//     } catch (error) {
//       console.error("Chat error:", error)
//       const errorMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         role: "assistant",
//         content: "Sorry, I encountered an error. Please try again or contact us on WhatsApp: +919608628633",
//       }
//       setMessages((prev) => [...prev, errorMessage])
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <>
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="fixed bottom-6 right-6 bg-[#1ECCB0] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40 animate-bounce"
//           aria-label="Open chat"
//         >
//           <MessageCircle size={24} />
//         </button>
//       )}

//       {isOpen && (
//         <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white border border-gray-200 rounded-lg shadow-2xl flex flex-col z-50 animate-scale-in max-h-[600px]">
//           {/* Header */}
//           <div className="bg-[#1ECCB0] text-white p-4 rounded-t-lg flex justify-between items-center">
//             <div>
//               <h3 className="font-bold">G.N.Homeo Clinic</h3>
//               <p className="text-xs opacity-90">Ask us anything about homeopathy</p>
//             </div>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="hover:bg-white/20 p-1 rounded transition-colors"
//               aria-label="Close chat"
//             >
//               <X size={20} />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
//             {messages.length === 0 ? (
//               <div className="text-center text-gray-600 py-8">
//                 <MessageCircle className="mx-auto mb-2 text-[#1ECCB0]" size={32} />
//                 <p className="text-sm font-medium">Hi! How can we help you?</p>
//                 <p className="text-xs mt-2 text-gray-500">Ask about our services, medicines, or book a consultation</p>
//               </div>
//             ) : (
//               messages.map((message) => (
//                 <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
//                   <div
//                     className={`max-w-xs px-4 py-2 rounded-lg ${
//                       message.role === "user"
//                         ? "bg-[#1ECCB0] text-white rounded-br-none"
//                         : "bg-gray-200 text-gray-900 rounded-bl-none"
//                     }`}
//                   >
//                     <p className="text-sm whitespace-pre-wrap">{message.content}</p>
//                   </div>
//                 </div>
//               ))
//             )}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg rounded-bl-none">
//                   <div className="flex gap-1">
//                     <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
//                     <div
//                       className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
//                       style={{ animationDelay: "0.1s" }}
//                     ></div>
//                     <div
//                       className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
//                       style={{ animationDelay: "0.2s" }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input */}
//           <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
//             <div className="flex gap-2">
//               <input
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 type="text"
//                 placeholder="Type your message..."
//                 disabled={isLoading}
//                 className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1ECCB0] disabled:opacity-50"
//               />
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="bg-[#1ECCB0] text-white p-2 rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
//                 aria-label="Send message"
//               >
//                 <Send size={20} />
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </>
//   )
// }

"use client"
import { useState, useRef, useEffect } from "react"
import { X, Send, MessageCircle } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      })

      const data = await response.json()
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.content || "Sorry, I couldn’t get a response from the AI.",
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Sorry, I encountered an error. Please try again or contact us on WhatsApp: +919608628633",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-[#1ECCB0] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40 animate-bounce"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white border border-gray-200 rounded-lg shadow-2xl flex flex-col z-50 animate-scale-in max-h-[600px]">
          {/* Header */}
          <div className="bg-[#1ECCB0] text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold">G.N.Homeo Clinic</h3>
              <p className="text-xs opacity-90">Ask us anything about homeopathy</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-600 py-8">
                <MessageCircle className="mx-auto mb-2 text-[#1ECCB0]" size={32} />
                <p className="text-sm font-medium">Hi! How can we help you?</p>
                <p className="text-xs mt-2 text-gray-500">
                  Ask about our services, medicines, or book a consultation
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.role === "user"
                        ? "bg-[#1ECCB0] text-white rounded-br-none"
                        : "bg-gray-200 text-gray-900 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1ECCB0] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#1ECCB0] text-white p-2 rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
