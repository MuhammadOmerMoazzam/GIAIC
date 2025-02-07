"use client"

import { SiteHeader } from "@/components/SiteHeader";
import { useState } from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Star, Heart, ArrowLeftRight, ChevronLeft, ChevronRight, Minus, Plus, Share2, Repeat2, ShoppingBag } from "lucide-react"
import { Button, Badge, Input, Tabs, Carousel } from "@material-tailwind/react";
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs'
import useEmblaCarousel from "embla-carousel-react"
import React from "react";

interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Lime",
    price: 38.0,
    oldPrice: 45.0,
    image: "/fresh-lime.png?height=200&width=200",
  },
  {
    id: 2,
    name: "Chocolate Muffin",
    price: 28.0,
    image: "/cheese-butter.png?height=200&width=200",
  },
  {
    id: 3,
    name: "Burger",
    price: 21.0,
    image: "/country-burger.png?height=200&width=200",
  },
  {
    id: 4,
    name: "Fresh Lime",
    price: 38.0,
    oldPrice: 45.0,
    image: "/pizza.png?height=200&width=200",
  },
]

// This would normally come from your database
const product = {
  id: "1",
  name: "Yummy Chicken Chup",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
  price: 54.0,
  category: "Pizza",
  tags: ["Our Shop"],
  rating: 5.0,
  reviews: 22,
  images: [

    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ],
  inStock: true,
}

export default function ShopDetails() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  if (!product) {
    notFound()
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div>
      <SiteHeader title="Shop Details" subTitle="Shop details" />

      <section className="min-h-screen bg-white text-black p-6">
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <div className="flex justify-between mb-6">
            <Button className="text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <ChevronLeft className="w-5 h-5 mr-2" />
              Prev
            </Button>
            <Button className="text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 
                    ${selectedImage === index ? "border-[#ff9f0d]" : "border-transparent hover:border-[#ff9f0d]/50"}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="flex-1 aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h1 className="text-4xl font-bold">{product.name}</h1>
                {product.inStock ? (
                  <Badge className="bg-[#ff9f0d]">In stock</Badge>
                ) : (
                  <Badge >Out of stock</Badge>
                )}
              </div>

              <p className="text-[#4F4F4F]">{product.description}</p>

              <div className="text-3xl font-bold text-[#ff9f0d]">${product.price.toFixed(2)}</div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < product.rating ? "text-[#ff9f0d] fill-[#ff9f0d]" : "text-[#333333]"}`}
                    />
                  ))}
                </div>
                <div className="text-[#4F4F4F]">
                  <span className="text-[#4F4F4F]">{product.rating.toFixed(1)}</span> | Rating |{" "}
                  <span className="text-[#4F4F4F]">{product.reviews}</span> Review
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button onClick={() => updateQuantity(quantity - 1)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => updateQuantity(Number.parseInt(e.target.value) || 1)}
                    className="w-20 text-center" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                  <Button onClick={() => updateQuantity(quantity + 1)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  className="bg-[#ff9f0d] hover:bg-[#ff9f0d]/90 text-white px-8"
                  onClick={() => console.log(`Added ${quantity} to cart`)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  Add to cart
                </Button>
              </div>

              {/* Wishlist and Compare */}
              <div className="flex items-center gap-4">
                <Button
                  className="text-[#4F4F4F] hover:text-white"
                  onClick={() => console.log("Added to wishlist")} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Wishlist
                </Button>
                <Button
                  className="text-[#4F4F4F] hover:text-white"
                  onClick={() => console.log("Added to compare")} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  <ArrowLeftRight className="w-5 h-5 mr-2" />
                  Compare
                </Button>
              </div>

              {/* Category and Tags */}
              <div className="space-y-2 pt-6 border-t border-gray-800">
                <p className="text-[#4F4F4F]">
                  Category: <span className="text-[#4F4F4F]">{product.category}</span>
                </p>
                <p className="text-[#4F4F4F]">
                  Tag:{" "}
                  {product.tags.map((tag) => (
                    <span key={tag} className="text-[#4F4F4F]">
                      {tag}
                    </span>
                  ))}
                </p>
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-4 pt-6">
                <span className="text-[#4F4F4F]">Share:</span>
                <div className="flex gap-3">
                  {["youtube", "facebook", "twitter", "vk", "instagram"].map((social) => (
                    <Button
                      key={social}
                      className="text-white hover:text-[#FF9F0D]"
                      onClick={() => console.log(`Share on ${social}`)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 bg-white">
        <Root defaultValue="description" className="space-y-6 ">
          <List className="flex ">
            <Trigger
              value="description"
              className="px-8 py-4 data-[state=active]:bg-[#ff9f0d] data-[state=active]:text-white rounded-none"
            >
              Description
            </Trigger>
            <Trigger
              value="reviews"
              className="px-8 py-4 text-[#333333] border-b-2 border-transparent data-[state=active]:border-[#ff9f0d] data-[state=active]:text-[#ff9f0d] focus:outline-none"
            >
              Reviews (24)
            </Trigger>
          </List>

          <Content value="description" className="space-y-8">
            <div className="space-y-6 text-[#333333]">
              <p>
                Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam
                mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem
                auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam
                pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In
                nulla quam, lacinia eu aliquam ac, aliquam in nisl.
              </p>
              <p>
                Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est
                dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et
                sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat.
                Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales.
                Suspendisse eu fringilla leo, non aliquet sem.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
              <ul className="space-y-2 text-[#333333]">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#ff9f0d] rounded-full mr-3"></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#ff9f0d] rounded-full mr-3"></span>
                  Maecenas ullamcorper est et massa mattis condimentum.
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#ff9f0d] rounded-full mr-3"></span>
                  Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#ff9f0d] rounded-full mr-3"></span>
                  Etiam nec massa et lectus faucibus ornare congue in nunc.
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#ff9f0d] rounded-full mr-3"></span>
                  Mauris eget diam magna, in blandit turpis.
                </li>
              </ul>
            </div>
          </Content>

          <Content value="reviews" className="text-[#333333]">
            {/* Add your reviews content here */}
            <p>Reviews content coming soon...</p>
          </Content>
        </Root>
      </section>

      <section className="py-16 bg-white relative">
        <div className="container">
          <h2 className="text-[#333333] text-4xl mb-12">Similar Products</h2>
          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {products.map((product) => (
                  <div key={product.id} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
                    <div className="relative group">
                      <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />

                        {/* Action Buttons */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center m-auto gap-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 bg-white text-[#ff9f0d] rounded-full hover:bg-[#ff9f0d] hover:text-white transition-colors">
                            <Repeat2 className="h-5 w-5" />
                          </button>
                          <button className="p-2 bg-white text-[#ff9f0d] rounded-full hover:bg-[#ff9f0d] hover:text-white transition-colors">
                            <ShoppingBag className="h-5 w-5" />
                          </button>
                          <button className="p-2 bg-white text-[#ff9f0d] rounded-full hover:bg-[#ff9f0d] hover:text-white transition-colors">
                            <Heart className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h3 className="text-[#333333] text-xl font-medium mb-2">{product.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-[#ff9f0d] font-bold text-lg">${product.price.toFixed(2)}</span>
                          {product.oldPrice && (
                            <span className="text-[#333333] line-through">${product.oldPrice.toFixed(2)}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full hover:bg-[#ff9f0d] hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full hover:bg-[#ff9f0d] hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
}