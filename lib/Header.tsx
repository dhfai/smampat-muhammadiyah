"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

import Navigation from "./Navigation"
import ThemeToggle from "./ThemeToggle"

export default function Header() {

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex items-center justify-between p-2 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SMAMPAT</span>
            <Image
              src="/favicon.ico"
              alt="SMAMPAT-Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Navigation />
        </div>
        <div className="flex flex-1 justify-end">
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  )
}