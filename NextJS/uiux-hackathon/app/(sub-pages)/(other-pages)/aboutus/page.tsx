import { SiteHeader } from "@/components/SiteHeader";
import Image from "next/image"
import { Play } from "lucide-react"
import Link from "next/link";
// import { Button } from "@material-tailwind/react";

export default function Aboutus() {
  return (
    <div>
      <SiteHeader title="About Us" subTitle="About" />

      <section className="min-h-screen bg-white text-[#333333]">
        <div className="container mx-auto px-4 py-12 md:py-24">
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

      <section className="bg-white text-[#333333] lg:py-16">
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
    </div>
  );
}


