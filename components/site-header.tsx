"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import AOS from "aos"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import "aos/dist/aos.css"

type Props = {
  classNames?: string
}
const NavTools = ({ classNames }: Props) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div
            className={`rounded-full cursor-pointer border-[#223B80] p-2 border-2 aspect-square w-11 ml-5 ${classNames} text-black`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.44 3.09985C14.63 3.09985 13.01 3.97985 12 5.32985C10.99 3.97985 9.36998 3.09985 7.55998 3.09985C4.48998 3.09985 1.99998 5.59985 1.99998 8.68985C1.99998 9.87985 2.18998 10.9799 2.51998 11.9999C4.09998 16.9999 8.96998 19.9899 11.38 20.8099C11.72 20.9299 12.28 20.9299 12.62 20.8099C15.03 19.9899 19.9 16.9999 21.48 11.9999C21.81 10.9799 22 9.87985 22 8.68985C22 5.59985 19.51 3.09985 16.44 3.09985Z"
                fill="#223B80"
              />
            </svg>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div
            className={`rounded-full cursor-pointer border-[#223B80] p-2 border-2 aspect-square w-11 ml-5 ${classNames} text-black`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.34 14.4899L18.34 12.8299C18.13 12.4599 17.94 11.7599 17.94 11.3499L17.94 8.81988C17.94 6.46988 16.56 4.43988 14.57 3.48988C14.05 2.56988 13.09 1.99988 11.99 1.99988C10.9 1.99988 9.91999 2.58988 9.39999 3.51988C7.44999 4.48988 6.09999 6.49988 6.09999 8.81988L6.09999 11.3499C6.09999 11.7599 5.90999 12.4599 5.69999 12.8199L4.68999 14.4899C4.28999 15.1599 4.19999 15.8999 4.44999 16.5799C4.68999 17.2499 5.25999 17.7699 5.99999 18.0199C7.93999 18.6799 9.97999 18.9999 12.02 18.9999C14.06 18.9999 16.1 18.6799 18.04 18.0299C18.74 17.7999 19.28 17.2699 19.54 16.5799C19.8 15.8899 19.73 15.1299 19.34 14.4899Z"
                fill="#223B80"
              />
              <path
                d="M14.83 20.0099C14.41 21.1699 13.3 21.9999 12 21.9999C11.21 21.9999 10.43 21.6799 9.87998 21.1099C9.55998 20.8099 9.31998 20.4099 9.17998 19.9999C9.30998 20.0199 9.43998 20.0299 9.57998 20.0499C9.80998 20.0799 10.05 20.1099 10.29 20.1299C10.86 20.1799 11.44 20.2099 12.02 20.2099C12.59 20.2099 13.16 20.1799 13.72 20.1299C13.93 20.1099 14.14 20.0999 14.34 20.0699C14.5 20.0499 14.66 20.0299 14.83 20.0099Z"
                fill="#223B80"
              />
            </svg>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div
            className={`rounded-full cursor-pointer border-[#223B80] p-2 border-2 aspect-square w-11 ml-5 ${classNames} text-black`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1 9.21994C18.29 9.21994 17.55 7.93994 18.45 6.36994C18.97 5.45994 18.66 4.29994 17.75 3.77994L16.02 2.78994C15.23 2.31994 14.21 2.59994 13.74 3.38994L13.63 3.57994C12.73 5.14994 11.25 5.14994 10.34 3.57994L10.23 3.38994C9.78 2.59994 8.76 2.31994 7.97 2.78994L6.24 3.77994C5.33 4.29994 5.02 5.46994 5.54 6.37994C6.45 7.93994 5.71 9.21994 3.9 9.21994C2.86 9.21994 2 10.0699 2 11.1199L2 12.8799C2 13.9199 2.85 14.7799 3.9 14.7799C5.71 14.7799 6.45 16.0599 5.54 17.6299C5.02 18.5399 5.33 19.6999 6.24 20.2199L7.97 21.2099C8.76 21.6799 9.78 21.3999 10.25 20.6099L10.36 20.4199C11.26 18.8499 12.74 18.8499 13.65 20.4199L13.76 20.6099C14.23 21.3999 15.25 21.6799 16.04 21.2099L17.77 20.2199C18.68 19.6999 18.99 18.5299 18.47 17.6299C17.56 16.0599 18.3 14.7799 20.11 14.7799C21.15 14.7799 22.01 13.9299 22.01 12.8799L22.01 11.1199C22 10.0799 21.15 9.21994 20.1 9.21994ZM12 15.2499C10.21 15.2499 8.75 13.7899 8.75 11.9999C8.75 10.2099 10.21 8.74994 12 8.74994C13.79 8.74994 15.25 10.2099 15.25 11.9999C15.25 13.7899 13.79 15.2499 12 15.2499Z"
                fill="#223B80"
              />
            </svg>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
export function SiteHeader() {
  const pathname = usePathname()
  const [navbarSticy, setNavbarSticky] = useState(false)
  const [selectedLang, setSelectedLang] = useState("esp")
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 800,
    })
  })
  useEffect(() => {
    console.log(`Route changed to: ${pathname}`)
    if (pathname != "/") {
      setNavbarSticky(true)
    } else {
      setNavbarSticky(false)
    }
    // setChanges((prev) => prev + 1);
  }, [pathname])
  return (
    <header
      className={` bg-white sticky top-0 shadow-md relative ${navbarSticy
          ? "bg-white sticky top-0 shadow-md relative"
          : "lg:shadow-none lg:bg-transparent lg:absolute"
        }  p-[22px] py-0 h-[87px]  top-0 w-full z-20 `}
    >
      <div className="nav flex justify-between relative items-center h-full">
        <div className="flex items-center h-full">
          <Image
            alt="logo"
            src={"/static/images/logo.png"}
            width={282}
            height={86}
            className="h-full object-contain object-left lg:w-[190px] xl:w-auto"
          />
          <div className="ml-0 xl:ml-10 hidden lg:flex">
            <Link
              href={"/"}
              className={`text-xl font-bold ${pathname === "/" ? "text-[#F90000] underline-offset-8 underline" : "text-[#223B80]"} ml-4 xl:mr-7 navLinks`}
            >
              Home
            </Link>
            <Link
              href={"/Cars"}
              className={`text-xl font-bold ${pathname === "/Cars" ? "text-[#F90000] underline-offset-8 underline" : "text-[#223B80]"} ml-4 xl:mr-7 navLinks`}
            >
              Cars
            </Link>
            <Link
              href={"/about-us"}
              className={`text-xl font-bold ${pathname === "/about-us" ? "text-[#F90000] underline-offset-8 underline" : "text-[#223B80]"} ml-4 xl:mr-7 navLinks`}
            >
              About Us
            </Link>
            <Link
              href={"/how-it-works"}
              className={`text-xl font-bold ${pathname === "/how-it-works" ? "text-[#F90000] underline-offset-8 underline" : "text-[#223B80]"} ml-4 xl:mr-7 navLinks`}
            >
              How It Works
            </Link>
          </div>
        </div>
        {/* <div
          className="searchInput flex justify-between max-w-[518px] w-full py-3 px-5 rounded-full border-2 border-[#223B80] absolute left-[50%] top-[50%]"
          style={{ transform: `translate(-50%,-50%)` }}
        >
          <svg
            className="mr-5"
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1646 21C17.6886 21 22.1667 16.7467 22.1667 11.5C22.1667 6.25329 17.6886 2 12.1646 2C6.64066 2 2.1626 6.25329 2.1626 11.5C2.1626 16.7467 6.64066 21 12.1646 21Z"
              stroke="#223B80"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.2195 22L21.1138 20"
              stroke="#223B80"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            className="max-w-96 w-full outline-none"
            placeholder="Search something here"
          />
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8378 6.5H17.5207"
              stroke="#223B80"
              strokeWidth="1.5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.99224 6.5H2.78086"
              stroke="#223B80"
              strokeWidth="1.5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.2036 10C13.2388 10 14.8886 8.433 14.8886 6.5C14.8886 4.567 13.2388 3 11.2036 3C9.16848 3 7.51867 4.567 7.51867 6.5C7.51867 8.433 9.16848 10 11.2036 10Z"
              stroke="#223B80"
              strokeWidth="1.5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.8378 17.5H19.6264"
              stroke="#223B80"
              strokeWidth="1.5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09793 17.5H2.78086"
              stroke="#223B80"
              strokeWidth="1.5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.415 21C17.4502 21 19.1 19.433 19.1 17.5C19.1 15.567 17.4502 14 15.415 14C13.3799 14 11.73 15.567 11.73 17.5C11.73 19.433 13.3799 21 15.415 21Z"
              stroke="#223B80"
              strokeWidth="1.5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div> */}
        <div className="flex items-center ">
          <Select
            onValueChange={(ev) => {
              console.log(ev, "evevev")
              setSelectedLang(ev)
            }}
          >
            <SelectTrigger className="w-fit border-none outline-none active:outline-none focus-within:outline-none focus:outline-none focus-visible:outline-none bg-transparent">
              {/* <SelectValue placeholder="Theme" /> */}

              <div className="languageSelect flex items-center">
                <Image
                  alt="esp"
                  src={`/static/images/${selectedLang}.png`}
                  width={41}
                  height={31}
                />
                {/* <Icons.espIcon /> */}
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="esp">
                <p className="flex text-base"><Image alt="esp" src={'/static/images/esp.png'} className="mr-2" width={31} height={21} />{" "}Es</p>
              </SelectItem>
              <SelectItem value="eng">
                <p className="flex text-base">
                  <Image alt="eng" src={'/static/images/eng.png'} className="mr-2" width={31} height={21} />{" "} En
                </p>
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="ml-3 flex items-center  lg:hidden">
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <button>
                  <Icons.burgerMenu />
                </button>
              </DrawerTrigger>
              <DrawerContent className="flex flex-col justify-between pb-4 bg-white">
                <div>
                  <Image
                    alt="logo"
                    src={"/static/images/logo.png"}
                    width={180}
                    height={86}
                  />
                  <div className=" flex flex-col px-3 mt-4">
                    <Link href={'/'} className={`text-xl font-bold text-[#223B80] mr-7 mb-2 navLinks flex p-2 mb-4 rounded-[4px] ${pathname === '/' ? 'bg-[#a9b5d8]' : ''}`}><span className="mr-2 "><Icons.homeIcon /></span> Home</Link>
                    <Link href={'/Cars'} className={`text-xl font-bold text-[#223B80] mr-7 mb-2 navLinks flex p-2 mb-4 rounded-[4px] ${pathname === '/Cars' ? 'bg-[#a9b5d8]' : ''}`}><span className="mr-2 "><Icons.carIcon /></span> Cars</Link>
                    <Link href={'/about-us'} className={`text-xl font-bold text-[#223B80] mr-7 mb-2 navLinks flex p-2 mb-4 rounded-[4px] ${pathname === '/about-us' ? 'bg-[#a9b5d8]' : ''}`}><span className="mr-2 "><Icons.aboutIcon /></span>About Us</Link>
                    <Link href={'/how-it-works'} className={`text-xl font-bold text-[#223B80] mr-7 mb-2 navLinks flex p-2 mb-4 rounded-[4px] ${pathname === '/how-it-works' ? 'bg-[#a9b5d8]' : ''}`}><span className="mr-2 "><Icons.docsIcon /></span> How It Works</Link>
                  </div>
                </div>
                <div className="flex justify-evenly mt-4">
                  <NavTools classNames={"flex ml-0"} />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <NavTools classNames={"hidden lg:flex"} />
        </div>
      </div>
    </header>
  )
}
