"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import type React from "react"

interface StatItemProps {
  image: React.ReactNode
  label: string
  value: number
  suffix?: string
}

const StatItem = ({ image, label, value, suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 50
    const stepValue = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += 1
      setCount(Math.min(Math.floor(current * stepValue), value))
      if (current >= steps) clearInterval(timer)
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="flex flex-col items-center justify-center group cursor-pointer">
      <div className="w-[120px] h-[120px] mb-4">{image}</div>
      <div className="flex flex-col items-center">
        <p
          className="m-0 font-bold text-[24px] text-center text-white"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          {label}
        </p>
        <p className="m-0 font-bold text-[40px] text-white" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
          {count}
          {suffix}
        </p>
      </div>
    </div>
  )
}

const stats = [
  {
    image: (
      <Image
        src="/sec5icon1.png"
        alt="Professional Chefs icon"
        className="w-full h-full rounded-[6px] object-center object-cover"
        width={120}
        height={120}
      />
    ),
    label: "Professional Chefs",
    value: 420,
  },
  {
    image: (
      <Image
        src="/sec5icon2.png"
        alt="Items Of Food icon"
        className="w-full h-full rounded-[6px] object-center object-cover"
        width={120}
        height={120}
      />
    ),
    label: "Items Of Food",
    value: 320,
  },
  {
    image: (
      <Image
        src="/sec5icon3.png"
        alt="Years Of Experience icon"
        className="w-full h-full rounded-[6px] object-center object-cover"
        width={120}
        height={120}
      />
    ),
    label: "Years Of Experienced",
    value: 30,
    suffix: "+",
  },
  {
    image: (
      <Image
        src="/sec5icon4.png"
        alt="Happy Customers icon"
        className="w-full h-full rounded-[6px] object-center object-cover"
        width={120}
        height={120}
      />
    ),
    label: "Happy Customers",
    value: 220,
  },
]

export default function StatsSection() {
  return (
    <div className="bg-[url('/sec5bg.png')] relative bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="sec px-[20px] sm:px-[60px] py-[60px] text-white max-w-[1320px] relative lg:h-[470px] mx-auto flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  )
}

