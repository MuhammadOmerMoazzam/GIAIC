import { SiteHeader } from "@/components/SiteHeader";
import Link from "next/link"

export default function NotFound() {
  return (
    <div>
      <SiteHeader title="404 Error" subTitle="404" />

      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-[#ff9f0d] text-8xl font-bold mb-6">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Oops! Look likes something going wrong</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl">
            Page Cannot be found! we'll have it figured out in no time. Meanwhile, cheek out these fresh ideas:
          </p>
          <Link className="bg-[#ff9f0d] hover:bg-[#ff9f0d]/90 text-white px-8 py-6 text-lg rounded-xl" href="/">
          Go to home
          </Link>
        </div>
      </div>
    </div>
  );
}