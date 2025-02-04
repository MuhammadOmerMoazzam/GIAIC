import { SiteHeader } from "@/components/SiteHeader";
import Image from "next/image"
import { Coffee } from "lucide-react"
import StatsSection from "@/components/StatsSection";

interface Item {
  name: string
  description: string
  calories: number
  price: number
}

const starters: Item[] = [
  {
    name: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32
  },
  {
    name: "Berries and creme tart",
    description: "Gorgonzola, ricotta, mozzarella, taleggio",
    calories: 700,
    price: 43,
  },
  {
    name: "Tormentoso Bush Pizza Pintoage",
    description: "Ground cumin, avocados, peeled and cubed",
    calories: 1000,
    price: 14,
  },
  {
    name: "Spicy Vegan Potato Curry",
    description: "Spreadable cream cheese, crumbled blue cheese",
    calories: 560,
    price: 35,
  },
]

const mainCourse: Item[] = [
  {
    name: "Optic Big Breakfast Combo Menu",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32
  },
  {
    name: "Cashew Chicken With Stir-Fry",
    description: "Gorgonzola, ricotta, mozzarella, taleggio",
    calories: 700,
    price: 43,
  },
  {
    name: "Vegetables & Green Salad",
    description: "Ground cumin, avocados, peeled and cubed",
    calories: 1000,
    price: 14,
  },
  {
    name: "Spicy Vegan Potato Curry",
    description: "Spreadable cream cheese, crumbled blue cheese",
    calories: 560,
    price: 35,
  },
]

const desserts: Item[] = [
  {
    name: "Fig and lemon cake",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    name: "Creamy mascarpone cake",
    description: "Gorgonzola, ricotta, mozzarella, taleggio",
    calories: 700,
    price: 43,
  },
  {
    name: "Pastry, blueberries, lemon juice",
    description: "Ground cumin, avocados, peeled and cubed",
    calories: 1000,
    price: 14,
  },
  {
    name: "Pain au chocolat",
    description: "Spreadable cream cheese, crumbled blue cheese",
    calories: 560,
    price: 35,
  },
]

const drinks: Item[] = [
  {
    name: "Caffè macchiato",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    name: "Aperol Spritz Capacianno",
    description: "Gorgonzola, ricotta, mozzarella, taleggio",
    calories: 700,
    price: 43,
  },
  {
    name: "Caffe Latte Campuri",
    description: "Ground cumin, avocados, peeled and cubed",
    calories: 1000,
    price: 14,
  },
  {
    name: "Tormentoso BushTea Pintoage",
    description: "Spreadable cream cheese, crumbled blue cheese",
    calories: 560,
    price: 35,
  },
]

const partners = [
  {
    name: "Restaurant",
    logo: "/partner1.png?height=100&width=180",
  },
  {
    name: "Bakery",
    logo: "/partner2.png?height=100&width=180",
  },
  {
    name: "Fork & Spoon",
    logo: "/partner3.png?height=100&width=180",
  },
  {
    name: "Wolf Coffee",
    logo: "/partner4.png?height=100&width=180",
  },
  {
    name: "Bistro",
    logo: "/partner5.png?height=100&width=180",
  },
  {
    name: "Bakery Delights",
    logo: "/partner6.png?height=100&width=180",
  },
]

export default function Menu() {
  return (
    <div>
      <SiteHeader title="Our Menu" subTitle="Menu" />
      {/* starter */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32 py-8 lg:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Image */}
            <div className="relative w-full max-w-[448px] mx-auto md:mx-0">
              <div className="relative h-[600px]">
                <Image
                  src="/starter.png"
                  alt="A boul of salad"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Right side - Menu */}
            <div className="flex flex-col h-full max-h-[600px] sm:px-6 ">
              {/* Heading */}
              <div className="flex items-center gap-3 mb-4 md:mb-6 lg:mb-8">
                <Coffee className="text-[#ff9f0d] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                <h2 className="text-[#333333] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Starter Menu</h2>
              </div>

              {/* Menu items */}
              <div className="space-y-4 md:space-y-4.5 lg:space-y-8 xl:space-y-10">
                {starters.map((starter, index) => (
                  <div key={index} className="relative  ">
                    <div className="flex justify-between items-start mb:1 md:mb-2">
                      <h3 className="text-[#333333] text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold pr-2 flex-grow">
                        {starter.name}
                      </h3>
                      <span className="text-[#ff9f0d] text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold whitespace-nowrap">
                        {starter.price}$
                      </span>
                    </div>
                    <p className="text-[#4F4F4F] text-sm sm:text-sm md:text-base lg:text-lg mb-1">
                      {starter.description}
                    </p>
                    <p className="text-[#828282] text-sm sm:text-sm md:text-base">{starter.calories} CAL</p>
                    {index !== desserts.length - 1 && (
                      <div className="absolute bottom-0 left-0 right-0 border-b border-dotted border-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* main course */}
      <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32 py-8 lg:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - Menu */}
          <div className="flex flex-col h-full max-h-[600px] sm:px-6 order-2 md:order-1">
            {/* Heading */}
            <div className="flex items-center gap-3 mb-4 md:mb-6 lg:mb-8">
              <Coffee className="text-[#ff9f0d] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              <h2 className="text-[#333333] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Main Course</h2>
            </div>

            {/* Menu items */}
            <div className="space-y-4 md:space-y-4.5 lg:space-y-8 xl:space-y-10">
              {mainCourse.map((meal, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between items-start mb-1 md:mb-2">
                    <h3 className="text-[#333333] text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold pr-2 flex-grow">
                      {meal.name}
                    </h3>
                    <span className="text-[#ff9f0d] text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold whitespace-nowrap">
                      {meal.price}$
                    </span>
                  </div>
                  <p className="text-[#4F4F4F] text-sm sm:text-sm md:text-base lg:text-lg mb-1">
                    {meal.description}
                  </p>
                  <p className="text-[#828282] text-sm sm:text-sm md:text-base">{meal.calories} CAL</p>
                  {index !== desserts.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 border-b border-dotted border-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full max-w-[448px] mx-auto md:mx-0 md:ml-auto order-1 md:order-2">
            <div className="relative h-[600px]">
              <Image
                src="/main-course.png?height=600&width=600"
                alt="A buger with double beed patty"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
      
      <StatsSection />

      {/* deserts */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32 py-8 lg:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Image */}
            <div className="relative w-full max-w-[448px] mx-auto md:mx-0">
              <div className="relative h-[600px]">
                <Image
                  src="/dessert.png"
                  alt="Chocolate cupcake with nuts"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Right side - Menu */}
            <div className="flex flex-col h-full max-h-[600px] sm:px-6 ">
              {/* Heading */}
              <div className="flex items-center gap-3 mb-4 md:mb-6 lg:mb-8">
                <Coffee className="text-[#ff9f0d] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                <h2 className="text-[#333333] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Dessert</h2>
              </div>

              {/* Menu items */}
              <div className="space-y-4 md:space-y-4.5 lg:space-y-8 xl:space-y-10">
                {desserts.map((dessert, index) => (
                  <div key={index} className="relative  ">
                    <div className="flex justify-between items-start mb:1 md:mb-2">
                      <h3 className="text-[#333333] text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold pr-2 flex-grow">
                        {dessert.name}
                      </h3>
                      <span className="text-[#ff9f0d] text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold whitespace-nowrap">
                        {dessert.price}$
                      </span>
                    </div>
                    <p className="text-[#4F4F4F] text-sm sm:text-sm md:text-base lg:text-lg mb-1">
                      {dessert.description}
                    </p>
                    <p className="text-[#828282] text-sm sm:text-sm md:text-base">{dessert.calories} CAL</p>
                    {index !== desserts.length - 1 && (
                      <div className="absolute bottom-0 left-0 right-0 border-b border-dotted border-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* drinks */}
      <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32 py-8 lg:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - Menu */}
          <div className="flex flex-col h-full max-h-[600px] sm:px-6 order-2 md:order-1">
            {/* Heading */}
            <div className="flex items-center gap-3 mb-4 md:mb-6 lg:mb-8">
              <Coffee className="text-[#ff9f0d] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              <h2 className="text-[#333333] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Drinks</h2>
            </div>

            {/* Menu items */}
            <div className="space-y-4 md:space-y-4.5 lg:space-y-8 xl:space-y-10">
              {drinks.map((drink, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between items-start mb-1 md:mb-2">
                    <h3 className="text-[#333333] text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold pr-2 flex-grow">
                      {drink.name}
                    </h3>
                    <span className="text-[#ff9f0d] text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold whitespace-nowrap">
                      {drink.price}$
                    </span>
                  </div>
                  <p className="text-[#4F4F4F] text-sm sm:text-sm md:text-base lg:text-lg mb-1">
                    {drink.description}
                  </p>
                  <p className="text-[#828282] text-sm sm:text-sm md:text-base">{drink.calories} CAL</p>
                  {index !== desserts.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 border-b border-dotted border-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full max-w-[448px] mx-auto md:mx-0 md:ml-auto order-1 md:order-2">
            <div className="relative h-[600px]">
              <Image
                src="/drinks.png?height=600&width=600"
                alt="Colorful cocktails with garnish"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Headings */}
        <div className="text-center mb-12">
          <h2 className="text-[#333333] text-lg mb-3">Partners & Clients</h2>
          <p className="text-[#333333] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto">
            We work with the best people
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-items-center px-4 sm:px-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full max-w-[180px] h-[129px] relative grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>    
    </div>
  );
}