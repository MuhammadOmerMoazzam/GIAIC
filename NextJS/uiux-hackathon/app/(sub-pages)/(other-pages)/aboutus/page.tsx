"use client"

import { SiteHeader } from "@/components/SiteHeader";
import Image from "next/image"
import { Facebook, Play, Twitter, Youtube } from "lucide-react"
import Link from "next/link";
import { useState } from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

interface TeamMember {
  name: string
  role: string
  imageUrl: string
  socialLinks?: boolean
}

const teamMembers: TeamMember[] = [
  {
    name: "Mark Henry",
    socialLinks: true,
    role: "Owner",
    imageUrl: "/team-member.png"
  },
  {
    name: "Lucky Helen",
    role: "Chef",
    imageUrl: "/team-member.png",
    socialLinks: true,
  },
  {
    name: "Moon Henry",
    role: "Founder",
    imageUrl: "/team-member.png",
    socialLinks: true,
  },
  {
    name: "Tom Monrow",
    role: "Specialist",
    socialLinks: true,
    imageUrl: "/team-member.png",
  },
]

interface MenuItem {
  name: string
  description: string
  calories: number
  price: number
}

interface MenuCategory {
  name: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    name: "Breakfast",
    items: Array(4).fill({
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32,
    }),
  },
  {
    name: "Lunch",
    items: Array(4).fill({
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32,
    }),
  },
  {
    name: "Dinner",
    items: Array(4).fill({
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32,
    }),
  },
  {
    name: "Dessert",
    items: Array(4).fill({
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32,
    }),
  },
  {
    name: "Drink",
    items: Array(4).fill({
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32,
    }),
  },
  {
    name: "Snack",
    items: Array(4).fill({
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32,
    }),
  },
]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function Aboutus() {
  const [activeCategory, setActiveCategory] = useState("Breakfast")
  
  return (
    <div>
      <SiteHeader title="About Us" subTitle="About" />

      <section className="min-h-fit bg-white text-[#333333]">
        <div className="container mx-auto px-4 pt-12 md:pt-24 pb-8 md:pb-12">
          <div className="grid gap-8 md:grid-cols-2">

            <div className="grid gap-4 lg:mx-12">
              <div className="relative h-[300px] overflow-hidden rounded-2xl">
                <Image
                  src="/fresh-tacos.png?height=300&width=600"
                  alt="Fresh tacos with vegetables"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] overflow-hidden rounded-2xl">
                  <Image
                    src="/fried-chicken.png?height=200&width=300"
                    alt="Breaded food with dipping sauce"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-2xl">
                  <Image
                    src="/fresh-salad.png?height=200&width=300"
                    alt="Fresh salad with orange juice"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6 lg:mr-12 lg:ml-4">
              <div>
                <div className="">
                  <Image
                    src="/aboutus.png"
                    alt="Fresh tacos with vegetables"
                    width={110}
                    height={90}
                    className="mx-1"
                    priority
                  />
                </div>
                <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Food is an important part Of a balanced Diet
                </h1>
              </div>
              <p className="text-[#4F4F4F] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
                mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/aboutus" className="bg-[#ff9f0d] text-lg text-white font-semibold hover:bg-[#ff9f0d]/90 py-4  lg:px-12 xm:px-4 px-8 rounded-lg">
                  Show more
                </Link>
                <Link href="/aboutus" className="border-[#ff9f0d] text-[#ff9f0d] hover:bg-[#ff9f0d]/90 p-4 bg-[#ff9f0d] rounded-full h-12 w-12 my-1">
                  <Play className="h-5 w-5 text-white" />
                </Link>
                <p className="text-[#4F4F4F] my-4 font-semibold">Watch video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#333333] lg:py-16 pb-8">
        <div className="container mx-auto lg:px-16 ">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose us</h2>
            <p className="text-[#4F4F4F] max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
              fringilla bibendum.
            </p>
          </div>

          {/* Main Image */}
          <div className="relative h-[386px] mb-16 rounded-xl overflow-hidden">
            <Image
              src="/salmon-salad.png"
              alt="Gourmet dishes including salmon salad and appetizers"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 text-center mx-4">
            {/* Best Chef */}
            <div className="flex flex-col items-center sm:mx-4 ">
              <div className="mb-4 ">
                <Image
                  src="/coffee.png"
                  alt="Happy Customers icon"
                  className="w-full h-full rounded-[6px] object-center object-cover"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Best Chef</h3>
              <p className="text-[#4F4F4F] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                volutpat
              </p>
            </div>

            {/* 120 Item Food */}
            <div className="flex flex-col items-center sm:mx-4 ">
              <div className="mb-4 ">
                <Image
                  src="/coffee.png"
                  alt="Happy Customers icon"
                  className="w-full h-full rounded-[6px] object-center object-cover"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">120 Item food</h3>
              <p className="text-[#4F4F4F] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                volutpat
              </p>
            </div>

            {/* Clean Environment */}
            <div className="flex flex-col items-center mx-4">
              <div className="mb-4 ">
                <Image
                  src="/person.png"
                  alt="Happy Customers icon"
                  className="w-full h-full rounded-[6px] object-center object-cover"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Clean Environment</h3>
              <p className="text-[#4F4F4F] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                volutpat
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-h-[686px] min-h-fit bg-white pb-8 lg:py-16">
        {/* Orange background */}
        <div className="absolute inset-0 h-1/2 bg-[#ff9f0d]">
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-soft-light opacity-90"
            style={{
              backgroundImage:
                'url("team-member-bg.png")',
            }}
          />
        </div>

        <div className="absolute inset-0 top-1/2 bg-white">
          <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] bg-repeat" />
        </div>

        <div className="container mx-auto px-4 relative lg:px-16">
          {/* Header content */}
          <div className="text-center pt-16 pb-12">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Team Member</h2>
            <p className="text-white/90 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-white/90 max-w-2xl mx-auto">Varius sed pharetra dictum neque massa congue</p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {member.socialLinks && (
                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 hover:bg-black/20 transition-colors group">
                      <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white text-[#333333] rounded-sm hover:bg-[#ff9f0d]">
                          <Facebook className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white text-[#333333] rounded-sm hover:bg-[#ff9f0d]">
                          <Twitter className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white text-[#333333] rounded-sm hover:bg-[#ff9f0d]">
                          <Youtube className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-[#4F4F4F]">{member.name}</h3>
                  <p className="text-[#828282]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="bg-black py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-4 relative inline-block">
            Our Food Menu
            <div className="absolute -right-8 -top-4">
              <Image
                src=".png"
                alt=""
                width={40}
                height={60}
                className="opacity-80"
              />
            </div>
          </h2>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-gray-400">Varius sed pharetra dictum neque massa congue</p>
        </div>

        {/* Category Navigation */}
        <nav className="mb-12">
          <ul className="flex flex-wrap justify-center gap-8">
            {menuCategories.map((category) => (
              <li key={category.name}>
                <button
                  onClick={() => setActiveCategory(category.name)}
                  className={cn(
                    "text-lg transition-colors",
                    activeCategory === category.name ? "text-[#ff9f0d]" : "text-gray-400 hover:text-gray-300",
                  )}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {menuCategories
            .find((category) => category.name === activeCategory)
            ?.items.map((item, index) => (
              <div key={index} className="relative pb-8">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl text-gray-300 mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-1">{item.description}</p>
                    <p className="text-gray-500 text-sm">{item.calories} CAL</p>
                  </div>
                  <span className="text-[#ff9f0d] text-xl">{item.price}$</span>
                </div>
                <div className="absolute bottom-4 left-0 right-0 border-b border-dotted border-gray-700" />
              </div>
            ))}
        </div>

        {/* View Menu Button */}
        <div className="text-center mt-12">
          <button className="border border-[#ff9f0d] text-[#ff9f0d] px-8 py-3 hover:bg-[#ff9f0d] hover:text-white transition-colors">
            View menu
          </button>
        </div>
      </div>
    </section>

    </div>
  );
}


