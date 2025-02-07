"use client"

import { SiteHeader } from "@/components/SiteHeader";
import { Button, Checkbox, Slider, Input } from "@material-tailwind/react";
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Repeat2, Search, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import Link from "next/link";

interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number
  image: string
  rating: number
  category: string
  onSale?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Lime",
    price: 39.0,
    oldPrice: 45.0,
    image: "/fresh-lime.png?height=300&width=300",
    rating: 5,
    category: "Drinks",
  },
  {
    id: 2,
    name: "Chocolate Muffin",
    price: 28.0,
    image: "/chocolate-muffin.png?height=300&width=300",
    rating: 4,
    category: "Desserts",
    onSale: true,
  },
  {
    id: 3,
    name: "Burger",
    price: 21.0,
    oldPrice: 45.0,
    image: "/burger3.png?height=300&width=300",
    rating: 5,
    category: "Burger",
  },
  {
    id: 4,
    name: "Country Burger",
    price: 21.0,
    oldPrice: 45.0,
    image: "/country-burger.png?height=300&width=300",
    rating: 5,
    category: "Burger",
  },
  {
    id: 5,
    name: "Drink",
    price: 21.0,
    oldPrice: 45.0,
    image: "/drink.png?height=300&width=300",
    rating: 5,
    category: "Drinks",
  },
  {
    id: 6,
    name: "Pizza",
    price: 21.0,
    oldPrice: 45.0,
    image: "/pizza.png?height=300&width=300",
    rating: 5,
    category: "Pizza",
  },
  {
    id: 7,
    name: "Cheese Butter",
    price: 21.0,
    oldPrice: 45.0,
    image: "/cheese-butter.png?height=300&width=300",
    rating: 5,
    category: "Desserts",
  },
  {
    id: 8,
    name: "Sandwiches",
    price: 21.0,
    oldPrice: 45.0,
    image: "/sandwiches.png?height=300&width=300",
    rating: 5,
    category: "Sandwiches",
  },
  {
    id: 9,
    name: "Chicken Chupa",
    price: 21.0,
    oldPrice: 45.0,
    image: "/chicken-chup.png?height=300&width=300",
    rating: 5,
    category: "Chicken Chup",
  },
  {
    id: 10,
    name: "Country Burger",
    price: 21.0,
    oldPrice: 45.0,
    image: "/country-burger.png?height=300&width=300",
    rating: 5,
    category: "Burger",
  },
  {
    id: 11,
    name: "Drink",
    price: 21.0,
    oldPrice: 45.0,
    image: "/drink.png?height=300&width=300",
    rating: 5,
    category: "Drinks",
  },
  {
    id: 12,
    name: "Pizza",
    price: 21.0,
    oldPrice: 45.0,
    image: "/pizza.png?height=300&width=300",
    rating: 5,
    category: "Pizza",
  },
  {
    id: 13,
    name: "Cheese Butter",
    price: 21.0,
    oldPrice: 45.0,
    image: "/cheese-butter.png?height=300&width=300",
    rating: 5,
    category: "Desserts",
  },
  {
    id: 14,
    name: "Sandwiches",
    price: 21.0,
    oldPrice: 45.0,
    image: "/sandwiches.png?height=300&width=300",
    rating: 5,
    category: "Sandwiches",
  },
  {
    id: 15,
    name: "Chicken Chupa",
    price: 21.0,
    oldPrice: 45.0,
    image: "/chicken-chup.png?height=300&width=300",
    rating: 5,
    category: "Chicken Chup",
  },
]

const categories = ["Sandwiches", "Burger", "Chicken Chup", "Drink", "Pizza", "Thi", "Non Veg", "Uncategorized"]

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group relative">
    <Link href={`/shop/${product.id}`}>
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {product.onSale && (
          <div className="absolute top-2 right-2 bg-[#ff9f0d] text-[#333333] px-4 py-1 text-sm rounded">Sell</div>
        )}
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
    </Link>
    <div className="mt-4 space-y-1">
      <h3 className="text-[#333333] text-lg font-medium">{product.name}</h3>
      <div className="flex items-center gap-2">
        <span className="text-[#333333] font-bold">${product.price.toFixed(2)}</span>
        {product.oldPrice && <span className="text-[#828282] line-through">${product.oldPrice.toFixed(2)}</span>}
      </div>
    </div>
  </div>
)

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-[#ff9f0d] fill-[#ff9f0d]" : "text-[#828282]"}`} />
    ))}
  </div>
)

export default function Shop() {
  const [priceRange, setPriceRange] = useState([0, 8000])

  return (
    <div className="bg-white">
      <SiteHeader title="Our Shop" subTitle="Shop" />

      <div className="bg-inherit min-h-screen py-8 lg:px-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-4">
            {/* Main Content */}
            <div className="flex-1">
              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-8 items-center justify-between">
                <div className="flex gap-4">
                  <Select defaultValue="newest" >
                    <SelectTrigger className="w-[180px] bg-transparent text-[#333333] border-[#333333]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="default" >
                    <SelectTrigger className="w-[180px] bg-transparent text-[#333333] border-gray-700">
                      <SelectValue placeholder="Show" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="12">12 Per Page</SelectItem>
                      <SelectItem value="24">24 Per Page</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#333333]">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8 gap-2">
                <Button variant="outlined" size="sm" className="border-gray-700 text-[#333333] p-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outlined" className="border-gray-700 text-[#333333]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  1
                </Button>
                <Button variant="filled" className="bg-[#ff9f0d] text-[#333333]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  2
                </Button>
                <Button variant="outlined" className="border-gray-700 text-[#333333]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  3
                </Button>
                <Button variant="outlined" size="sm" className="border-gray-700 text-[#333333] p-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 space-y-8 lg:ml-4 p-4 border-2 border-[#F2F2F2]">
              {/* Search */}
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search Product"
                  className="bg-transparent text-[#333333] pr-10"
                  containerProps={{
                    className: "min-w-0",
                  }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#333333] h-5 w-5" />
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-[#333333] text-xl mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox color="amber" className="border-gray-700 checked:border-[#ff9f0d]" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                      <label className="text-[#333333] ml-2">{category}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-[248px] h-[286px] group overflow-hidden m-auto">
                <Image
                  src="/side-banner.png"
                  alt="Perfect taste - seasoning being sprinkled over fresh vegetables"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-white">Perfect Taste</h2>
                    <p className="text-2xl font-bold text-white">Classic Restaurant</p>
                    <p className="text-[#ff9f0d] text-xl font-bold">45.00$</p>
                  </div>

                  {/* Shop Now Button */}
                  <Link href="#" className="inline-flex items-center text-white group-hover:text-[#ff9f0d] transition-colors">
                    <span className="text-xl font-medium">Shop Now</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Price Filter */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#333333]">Filter By Price</h2>
                <Slider
                  defaultValue={0}
                  max={8000}
                  step={1}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="[&_[role=slider]]:bg-[#ff9f0d] text-[#ff9f0d]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                />
                <div className="text-sm text-[#828282]">
                  From ${priceRange[0]} to ${priceRange[1]}
                </div>
              </div>

              {/* Latest Products */}
              <div>
                <h3 className="text-[#333333] text-xl mb-4">Latest Products</h3>
                <div className="space-y-4">
                  {products.slice(0, 4).map((product) => (
                    <div key={product.id} className="flex gap-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="text-[#333333]">{product.name}</h4>
                        <StarRating rating={product.rating} />
                        <p className="text-[#333333]">${product.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Tags */}
              <div>
                <h3 className="text-[#333333] text-xl mb-4">Product Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["Services", "Our Menu", "Pizza", "Cupcake", "Burger", "Cookies", "Our Shop", "Tandoori Chicken"].map(
                    (tag) => (
                      <Button
                        key={tag}
                        variant="outlined"
                        className="border-[#333333]-700 text-[#333333] hover:text-[#ff9f0d] hover:border-[#ff9f0d]"
                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                        {tag}
                      </Button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}