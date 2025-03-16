"use client"
import { ChevronDown, ChevronsDown, Github, Menu } from "lucide-react"
import React from "react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Separator } from "../ui/separator"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import { ToggleTheme } from "./toogle-theme"
import { cn } from "@/lib/utils"

interface RouteProps {
  href: string
  label: string
}


interface DropdownItemProps {
  title: string
  href: string
  description: string
}

const routeList: RouteProps[] = [
  {
    href: "#events",
    label: "Events",
  },
  {
    href: "#alumni",
    label: "Alumni",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
]

// New dropdown items for Features
const dropdownItems: DropdownItemProps[] = [
  {
    title: "Struktur Akademik",
    href: "#struktur",
    description: "Struktur Akademik SMA 4 Muhammadiyah Makassar.",
  },
  {
    title: "Visi & Misi",
    href: "#visi-misi",
    description: "Visi & Misi SMA 4 Muhammadiyah Makassar Dalam Membentuk Karakter Siswa.",
  },
  {
    title: "Sejarah Sekolah",
    href: "#sejarahsekolah",
    description: "Sejarah Sekolah SMA 4 Muhammadiyah Makassar, dari awal berdiri hingga sekarang.",
  },
  {
    title: "Tentang",
    href: "#tentang",
    description: "Tentang SMA 4 Muhammadiyah Makassar, profil sekolah, dan lainnya yang berkaitan.",
  }
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = React.useState(false)

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Image src={"/favicon.ico"} alt="SMAMPAT-Logo" className="mr-2" width={40} height={40} />
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer lg:hidden" />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between p-0 rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <SheetHeader>
                  <div className="flex items-center">
                    <Image src={"/favicon.ico"} alt="Logo" width={32} height={32} className="mr-2" />
                    <SheetTitle>SMAMPAT</SheetTitle>
                  </div>
                </SheetHeader>
              </div>

              <div className="flex flex-col py-2">
                <Link
                  href="/"
                  className="px-4 py-3 text-base font-medium hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Beranda
                </Link>

                {/* Mobile dropdown menu */}
                <div className="relative">
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium hover:bg-accent"
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  >
                    <span>Profiles</span>
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform", mobileDropdownOpen ? "rotate-180" : "")}
                    />
                  </button>

                  {mobileDropdownOpen && (
                    <div className="bg-muted/50">
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex flex-col px-6 py-3 hover:bg-accent"
                          onClick={() => {
                            setMobileDropdownOpen(false)
                            setIsOpen(false)
                          }}
                        >
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Regular menu items */}
                {routeList.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="px-4 py-3 text-base font-medium hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <SheetFooter className="border-t p-4">
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <Link href={'/'}>
          Beranda
          </Link>
          {/* Features dropdown menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Profiles</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {dropdownItems.map((item) => (
                  <li key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.description}</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Regular menu items */}
          <NavigationMenuItem className="flex items-center">
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link aria-label="View on GitHub" href="https://github.com/dhfai" target="_blank">
            <Github className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  )
}

