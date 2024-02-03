"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {
  const router = useRouter()
  return (
    <footer
      className="footer bg-white p-6 pb-9 text-black lg:h-[480px]"
      style={{
        background: `url('/static/images/Footer.png')`,
        backgroundSize: "contain",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mb-9 flex flex-wrap justify-between pb-[60px] pt-14">
        <div className="w-full max-w-full lg:max-w-[50%]">
          <Image
            alt="logo"
            src={"/static/images/logo.png"}
            width={282}
            height={86}
          />
          <p className="m-0 lg:ml-16">
            Our vision is to provide convenience
            <br />
            and help increase your sales business.
          </p>
        </div>
        <div>
          <h4
            className="mb-8 text-xl font-semibold text-[#223B80]"
            onClick={() => router.push("/about-us")}
          >
            About
          </h4>
          <p
            className="mb-6 text-base font-semibold text-[#131313] opacity-60"
            onClick={() => router.push("/how-it-works")}
          >
            How it works
          </p>
          <p className="mb-6 text-base font-semibold text-[#131313] opacity-60">
            Featured
          </p>
          <p className="mb-6 text-base font-semibold text-[#131313] opacity-60">
            Partnership
          </p>
          <p className="mb-6 text-base font-semibold text-[#131313] opacity-60">
            Bussiness Relation
          </p>
        </div>

        <div>
          <h4 className="mb-8 text-xl font-semibold text-[#223B80]">
            Community
          </h4>
          <p className="mb-6 text-base font-semibold text-[#131313] opacity-60">
            Events
          </p>
          <p className="mb-6 text-base font-semibold text-[#131313] opacity-60">
            Blog
          </p>
          <p className="mb-6 text-base font-semibold text-[#131313] opacity-60">
            Podcast
          </p>
          <p className="mb-6 text-base font-semibold text-[#131313] opacity-60">
            Invite a friend
          </p>
        </div>

        <div className="mr-[60px]">
          <h4 className="mb-8 text-xl font-semibold text-[#223B80]">Socials</h4>
          <p className="mb-6 text-base font-semibold text-[#131313] opacity-60">
            Discords
          </p>
          <p className="mb-6 text-base font-semibold text-[#131313] opacity-60">
            Instagrams
          </p>
          <p className="mb-6 text-base font-semibold text-[#131313] opacity-60">
            Twitters
          </p>
          <p className="mb-6 text-base font-semibold text-[#131313] opacity-60">
            Facebooks
          </p>
        </div>
      </div>
      <div className="mx-auto  my-0  flex w-full flex-col-reverse flex-wrap items-center justify-between pt-6 lg:w-[calc(100%-120px)] lg:flex-row  ">
        <div className="w-full lg:mb-0  lg:w-auto">
          <p className="text-xs text-white lg:text-base">
            ©2024 CUBAGOLDCAR. All rights reserved
          </p>
        </div>
        <div className="mb-8 flex w-full justify-between lg:mb-0 lg:flex lg:w-auto ">
          <div className="mr-14 cursor-pointer text-xs text-white">
            Privacy & Policy
          </div>
          <div
            className="cursor-pointer text-xs text-white"
            onClick={() => router.push("/terms-and-conditions")}
          >
            Terms & Condition
          </div>
        </div>
      </div>
      {/* <hr className="bg-black border-black w-[calc(100% - 120px)] my-0 mx-auto mb-6"/> */}
    </footer>
  )
}
