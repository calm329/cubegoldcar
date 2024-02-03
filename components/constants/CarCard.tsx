"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Icons } from "../icons"
import { Button } from "../ui/button"

type Props = {
  className?: any
}

function CarCard({ className }: Props) {
  const router = useRouter()
  return (
    <div
      className={`CarCard font-PlusJakartaSans mb-2 w-full rounded-xl bg-white  p-4 lg:p-6 ${className} cursor-pointer`}
      onClick={() => router.push("/car-details")}
    >
      <div className="nameFav flex justify-between">
        <div className="name">
          <p className="font-PlusJakartaSans mb-1 text-base font-bold text-black lg:text-xl">
            Koenigsegg
          </p>
          <p className="font-PlusJakartaSans text-sm font-bold text-[#90A3BF] ">
            Sport
          </p>
        </div>
        <div>
          <Icons.blankHeart data-aos="fade-down-left" />
        </div>
      </div>
      <Image
        data-aos="fade-right"
        className="mt-8 w-full lg:mt-16"
        alt="car"
        src={"/static/images/car.png"}
        width={200}
        height={100}
      />
      <div className="relative z-10 flex flex-col pt-8 shadow-[0px_-19px_16px_white]">
        <div className="flex items-center justify-between">
          <p className="font-PlusJakartaSans flex items-center text-xs font-normal text-[#90A3BF] lg:text-sm">
            <span className="mr-1">
              <Icons.fuelPump />
            </span>
            90L
          </p>
          <p className="font-PlusJakartaSans flex items-center text-xs font-normal text-[#90A3BF] lg:text-sm">
            <span className="mr-1">
              <Icons.steeringWheel />
            </span>
            Manual
          </p>
          <p className="font-PlusJakartaSans flex items-center text-xs font-normal text-[#90A3BF] lg:text-sm">
            <span className="mr-1">
              <Icons.public />
            </span>
            2 People
          </p>
        </div>
        <div className="mt-5 hidden lg:block">
          <div className="mt-3 flex w-full flex-wrap justify-between">
            <div className="mb-4 flex w-[calc(50%-10px)] items-center justify-between">
              <p className="flex items-center text-sm text-[#223B80]">
                <span className="mr-[5px]">
                  <Image
                    alt="verified"
                    src={"/static/images/tic.png"}
                    width={15}
                    height={16}
                  />
                </span>
                Full Tank (60 €)
              </p>
            </div>
            <div className="mb-4 flex w-[calc(50%-10px)] items-center justify-between">
              <p className="flex items-center text-sm text-[#223B80]">
                <span className="mr-[5px]">
                  <Image
                    alt="verified"
                    src={"/static/images/tic.png"}
                    width={15}
                    height={16}
                  />
                </span>
                Unlimited Km
              </p>
            </div>
            <div className="mb-4 flex w-[calc(50%-10px)] items-center justify-between">
              <p className="flex items-center text-sm text-[#223B80]">
                <span className="mr-[5px]">
                  <Image
                    alt="verified"
                    src={"/static/images/tic.png"}
                    width={15}
                    height={16}
                  />
                </span>
                Insurance Included
              </p>
            </div>
            <div className="mb-4 flex w-[calc(50%-10px)] items-center justify-between">
              <p className="flex items-center text-sm text-[#223B80]">
                <span className="mr-[5px]">
                  <Image
                    alt="verified"
                    src={"/static/images/tic.png"}
                    width={15}
                    height={16}
                  />
                </span>
                Airport Pickup(60 €)
              </p>
            </div>
          </div>
        </div>
        <div className="mb-3 mt-4 flex items-center justify-between">
          <p className="font-PlusJakartaSans text-base font-bold lg:text-sm">
            $99.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
          </p>
          <Button className="font-PlusJakartaSans bg-[#223B80] text-xs text-white lg:text-base">
            Rent Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CarCard
