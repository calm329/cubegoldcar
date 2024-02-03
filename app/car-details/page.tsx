"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Swiper, SwiperSlide } from "swiper/react"

import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import FilterBar from "@/components/Cars/FilterBar"
import CarCard from "@/components/constants/CarCard"
import CarouselComponent from "@/components/constants/Carousel"
import Rating from "@/components/constants/Rating"
import { Icons } from "@/components/icons"

type Props = {}

function page({}: Props) {
  const router = useRouter()

  return (
    <div className="cardetails text-black">
      <div className="innercardetails flex justify-between">
        <FilterBar classname="hidden lg:block max-w-[280px]" />
        <div className="cars w-full p-3 pb-[34px] lg:w-[calc(100%-280px)]">
          <p className="mb-5 flex items-center justify-between font-semibold text-[#223B80] lg:hidden">
            Filter
            <Drawer direction="left" fixed dismissible>
              <DrawerTrigger asChild>
                <span className="cursor-pointer rounded-sm border-[1px] border-[#223B80] bg-white p-1 text-[#223B80] lg:hidden [&>svg]:text-xl">
                  <Icons.filterIcon />
                </span>
              </DrawerTrigger>
              <DrawerContent className="flex flex-col justify-between overflow-auto bg-white pb-4">
                <FilterBar classname="block lg:hidden max-w-[280px]" />
              </DrawerContent>
            </Drawer>
          </p>
          <div className="carDetailBox flex w-full flex-wrap justify-between">
            <div className="w-full xl:w-[calc(50%-16px)]">
              <CarouselComponent />
            </div>
            <div className="mt-8 w-full rounded-[10px] bg-white lg:mt-0 xl:w-[calc(50%-16px)]">
              <div className="details p-4 lg:p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl lg:text-[32px]">Nissan GT - R</h3>
                    <Rating />
                  </div>
                  <Icons.blankHeart />
                </div>
                <div className=" mb-[14px] mt-3">
                  <p className="text-base font-light text-[#223B80] lg:text-xl">
                    NISMO has become the embodiment of Nissan's outstanding
                    performance, inspired by the most unforgiving proving
                    ground, the "race track".
                  </p>
                  <div className="mt-3 flex w-full flex-wrap justify-between">
                    <div className="mb-4 flex w-[calc(50%-22px)] items-center justify-between">
                      <p className="text-base font-light text-[#90A3BF]  lg:text-xl">
                        Type Car
                      </p>
                      <p className="text-base text-[#223B80] lg:text-xl ">
                        <b>Sport</b>
                      </p>
                    </div>
                    <div className="mb-4 flex w-[calc(50%-22px)] items-center justify-between">
                      <p className="text-base font-light text-[#90A3BF]  lg:text-xl">
                        Capacity
                      </p>
                      <p className="text-base text-[#202431] lg:text-xl ">
                        <b>2 Person</b>
                      </p>
                    </div>
                    <div className="mb-4 flex w-[calc(50%-22px)] items-center justify-between">
                      <p className="text-base font-light text-[#90A3BF]  lg:text-xl">
                        Steering
                      </p>
                      <p className="text-base text-[#223B80] lg:text-xl ">
                        <b>Manual</b>
                      </p>
                    </div>
                    <div className="mb-4 flex w-[calc(50%-22px)] items-center justify-between">
                      <p className="text-base font-light text-[#90A3BF]  lg:text-xl">
                        Gasoline
                      </p>
                      <p className="text-base text-[#223B80] lg:text-xl ">
                        <b>70L</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" mb-[14px] mt-3">
                  <div className="mt-3 flex w-full flex-wrap justify-between">
                    <div className="mb-4 flex w-[calc(50%-22px)] items-center justify-between">
                      <p className="flex items-center text-sm text-[#223B80] lg:text-base">
                        <span className="mr-[10px]">
                          <Image
                            alt="verified"
                            src={"/static/images/tic.png"}
                            width={20}
                            height={21}
                          />
                        </span>
                        Full Tank (60 €)
                      </p>
                    </div>
                    <div className="mb-4 flex w-[calc(50%-22px)] items-center justify-between">
                      <p className="flex items-center text-sm text-[#223B80] lg:text-base">
                        <span className="mr-[10px]">
                          <Image
                            alt="verified"
                            src={"/static/images/tic.png"}
                            width={20}
                            height={21}
                          />
                        </span>
                        Unlimited Km
                      </p>
                    </div>
                    <div className="mb-4 flex w-[calc(50%-22px)] items-center justify-between">
                      <p className="flex items-center text-sm text-[#223B80] lg:text-base">
                        <span className="mr-[10px]">
                          <Image
                            alt="verified"
                            src={"/static/images/tic.png"}
                            width={20}
                            height={21}
                          />
                        </span>
                        Insurance Included
                      </p>
                    </div>
                    <div className="mb-4 flex w-[calc(50%-22px)] items-center justify-between">
                      <p className="flex items-center text-sm text-[#223B80] lg:text-base">
                        <span className="mr-[10px]">
                          <Image
                            alt="verified"
                            src={"/static/images/tic.png"}
                            width={20}
                            height={21}
                          />
                        </span>
                        Airport Pickup(60 €)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-PlusJakartaSans text-xl font-bold lg:text-[28px]">
                      $99.00/{" "}
                      <span className="text-[14px] text-[#90A3BF]">day</span>
                    </p>
                    <p className="text-[14px] text-[#90A3BF]">
                      <s>$100.00</s>
                    </p>
                  </div>
                  <Button
                    className="font-PlusJakartaSans h-[56px] w-[140px] bg-[#223B80] text-base text-white"
                    onClick={() => {
                      router.push("/billing")
                    }}
                  >
                    Rent Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 hidden w-full flex-wrap items-center justify-between lg:flex">
            {[1, 2, 3, 4, 1, 2, 3, 4, 1].map((a, i) => (
              <CarCard
                key={i}
                className="mb-6 lg:max-w-[calc((100%/2)-32px)] xl:max-w-[calc((100%/3)-32px)]"
              />
            ))}
          </div>
          <div className="mt-6 flex w-full flex-wrap items-center justify-between lg:hidden">
            <Swiper
              className="mySwiper"
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
            >
              {[1, 2, 3, 4, 1, 2, 3, 4, 1].map((a, i) => (
                <SwiperSlide className="mb-6 lg:max-w-[calc((100%/2)-32px)] xl:max-w-[calc((100%/3)-32px)]">
                  <CarCard key={i} className="w-full" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
