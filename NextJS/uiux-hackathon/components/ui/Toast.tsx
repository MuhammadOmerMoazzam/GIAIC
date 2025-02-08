"use client"

import type React from "react"
import { useEffect } from "react"

interface ToastProps {
  message: string
  duration?: number
  onClose: () => void
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return <div className="fixed bottom-4 right-4 bg-[#ff9f0d] text-white px-4 py-2 rounded shadow-lg">{message}</div>
}

export default Toast

