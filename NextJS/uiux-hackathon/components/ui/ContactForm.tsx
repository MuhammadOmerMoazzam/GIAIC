"use client"

import { Textarea, Button, Input } from "@material-tailwind/react"
import { useState } from "react"
import { useToast } from "@/contexts/ToastContext"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showToast } = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    showToast("Message Sent, We'll get back to you as soon as possible.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <Input id="name" name="name" required className="bg-white border-gray-700 text-[#333333]" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input id="email" name="email" type="email" required className="bg-white border-gray-700 text-[#333333]" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <Textarea id="message" name="message" required className="bg-white border-gray-700 text-[#333333]" rows={4} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
      </div>
      <Button type="submit" className="bg-[#ff9f0d] hover:bg-[#ff9f0d]/90 text-white" disabled={isSubmitting} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} placeholder={undefined}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

// function toast(arg0: { title: string; description: string }) {
//   throw new Error("Function not implemented.")
// }

