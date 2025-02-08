import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="mb-8 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <div className="flex items-center space-x-3">
        <Phone className="text-[#ff9f0d]" />
        <span>+1 (555) 123-4567</span>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="text-[#ff9f0d]" />
        <span>info@classicrestaurant.com</span>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="text-[#ff9f0d]" />
        <span>123 Gourmet Street, Foodie City, FC 12345</span>
      </div>
      <div className="flex items-center space-x-3">
        <Clock className="text-[#ff9f0d]" />
        <span>
          Mon - Sat: 11:00 AM - 10:00 PM
          <br />
          Sunday: 12:00 PM - 9:00 PM
        </span>
      </div>
    </div>
  )
}

