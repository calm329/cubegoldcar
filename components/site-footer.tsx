import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {
  return (
    <footer
      className="lg:h-[480px] p-6"
      style={{
        background: `url('/static/images/Footer.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pt-14 pb-[60px] flex justify-between mb-9 flex-wrap">
        <div className="max-w-full lg:max-w-[50%] w-full">
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
          <h4 className="text-[#223B80] text-xl font-semibold mb-8">About</h4>
          <p className="text-[#131313] opacity-60 font-semibold text-base mb-6">How it works</p>
          <p className="text-[#131313] opacity-60 font-semibold text-base mb-6">Featured</p>
          <p className="text-[#131313] opacity-60 font-semibold text-base mb-6">Partnership</p>
          <p className="text-[#131313] opacity-60 font-semibold text-base mb-6">Bussiness Relation</p>
        </div>

        <div>
          <h4 className="text-[#223B80] text-xl font-semibold mb-8">Community</h4>
          <p className="text-[#131313] opacity-60 font-semibold text-base mb-6">Events</p>
          <p className="text-[#131313] opacity-60 font-semibold text-base mb-6">Blog</p>
          <p className="text-[#131313] opacity-60 font-semibold text-base mb-6">Podcast</p>
          <p className="text-[#131313] opacity-60 font-semibold text-base mb-6">Invite a friend</p>
        </div>

        <div className="mr-[60px]">
          <h4 className="text-[#223B80] text-xl font-semibold mb-8">Socials</h4>
          <p className="text-[#131313] opacity-60 font-semibold text-base mb-6">Discords</p>
          <p className="text-[#131313] opacity-60 font-semibold text-base mb-6">Instagrams</p>
          <p className="text-[#131313] opacity-60 font-semibold text-base mb-6">Twitters</p>
          <p className="text-[#131313] opacity-60 font-semibold text-base mb-6">Facebooks</p>
        </div>
      </div>
      <div className="w-full  lg:w-[calc(100%-120px)] border-black border-t-[1px] my-0 mx-auto flex justify-between items-center pt-6 flex-wrap lg:flex-row flex-col-reverse ">
        <div className="w-full lg:w-auto  lg:mb-0">
          <p className="text-white text-xs lg:text-base">©2022 CUBAGOLDCAR. All rights reserved</p>
        </div>
        <div className="flex justify-between lg:block w-full lg:w-auto mb-8 lg:mb-0 ">
          <a className="text-white text-xs mr-14">Privacy & Policy</a>
          <a className="text-white text-xs">Terms & Condition</a>
        </div>
      </div>
      {/* <hr className="bg-black border-black w-[calc(100% - 120px)] my-0 mx-auto mb-6"/> */}
    </footer>
  )
}
