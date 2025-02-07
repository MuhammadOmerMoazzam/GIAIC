import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { headers } from "next/headers";
import NotFound from "@/components/NotFound";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Foodtuck",
  description: "Restaurant",
};

const validRoutes = [
  "/",
  "/signin",
  "/signup",
  "/aboutus",
  "/blog",
  "/blog/[:id]",
  "/contact",
  "/faq",
  "/menu",
  "/our-chefs",
  "/shop",
  "/shop/[:id]",
  "/checkout",
  "/cart",
]

// function isValidRoute(path: string): boolean {
//   // Check exact matches
//   if (validRoutes.includes(path)) return true

//   // Check dynamic routes
//   if (path.startsWith("/blog/") || path.startsWith("/shop/")) return true

//   return false
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers()
  const pathname = headersList.get("x-invoke-path") || "/"
  const isValidRoute = validRoutes.includes(pathname)

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isValidRoute ? children : <NotFound />}
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
