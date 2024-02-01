import { Inter } from "next/font/google"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import Banner from "@/components/home/Banner"
import AddCard from "@/components/home/AddCard"
import BookCars from "@/components/home/BookCars"
import Promo from "@/components/home/Promo"

export default function IndexPage() {
  return (
    <>
      <Banner />
      <AddCard />
      <BookCars />
      <Promo />
    </>
  )
}
