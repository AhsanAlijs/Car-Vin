import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/app/_components/ui/sheet"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 px-4 py-8 w-full bg-black/40 backdrop-blur-sm z-50 max-md:py-4">
      <nav className="max-md:hidden">
        <ul className="flex gap-8 items-center justify-center hover:[&_a]:text-red-500 [&_a]:transition-colors">
          <li><Link href="/">Home</Link></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><Link href="/contact-us">Contact</Link></li>
        </ul>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <button variant="outline" className="hidden max-md:block ml-auto">
            <Menu className="size-8" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="hidden max-md:block">
          <nav className="">
            <ul className="flex flex-col gap-8 items-center hover:[&_a]:text-red-700 [&_a]:transition-colors">
              <li><Link href="/">Home</Link></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><Link href="/contact-us">Contact</Link></li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}