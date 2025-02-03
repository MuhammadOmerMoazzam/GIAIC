"use client"

import Link from "next/link"
import { Search, User, ShoppingBag } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Blog", href: "/blog" },
  { name: "Pages", href: "/faq" },
  { name: "About", href: "/aboutus" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader(
  {title, subTitle}:{title:string; subTitle:string}
) {
  return (
    <header className="relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-black">
        <div className="w-screen max-w-full px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="text-white text-2xl font-bold">
              Food<span className="text-[#ff9f0d]">tuck</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-white hover:text-[#ff9f0d] transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6">
              <button className="text-white hover:text-[#ff9f0d] transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-white hover:text-[#ff9f0d] transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="text-white hover:text-[#ff9f0d] transition-colors">
                <Link href="/shopping-cart"><ShoppingBag className="h-5 w-5" /></Link>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[300px] w-screen flex items-center justify-center text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/site-header-bg.png?height=300&width=1920")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
          <nav className="flex justify-center items-center gap-2 text-sm">
            <Link href="/" className="text-white hover:text-[#ff9f0d]">
              Home
            </Link>
            <span className="text-[#ff9f0d]">/</span>
            <span className="text-[#ff9f0d]">{subTitle}</span>
          </nav>
        </div>
      </div>
    </header>
  )
}

