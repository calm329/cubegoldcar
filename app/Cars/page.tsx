"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import FilterBar from "@/components/Cars/FilterBar"
import CarCard from "@/components/constants/CarCard"
import ScheduleForm from "@/components/constants/ScheduleForm"
import { Icons } from "@/components/icons"

type Props = {}

function CarPage({}: Props) {
  return (
    <div className="CarPage ">
      <div className="innerCarPage flex justify-between ">
        <FilterBar classname="hidden lg:block max-w-[280px]" />
        <div className="cars w-full p-6 pb-[34px] lg:w-[calc(100%-280px)] lg:p-3">
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
          <div className="flex w-full flex-col items-center justify-between xl:flex-row ">
            <ScheduleForm
              title="Pick - Up"
              classnames="w-full xl:w-[calc(50%-21px)] px-4 py-2 xl:px-12 lg:py-6 mb-8 lg:mb-0"
            />
            <ScheduleForm
              title="Drop - Off"
              classnames="w-full xl:w-[calc(50%-21px)] px-4 py-2 xl:px-12 lg:py-6 "
            />
          </div>
          <div className="mt-6 flex w-full flex-wrap items-center justify-between">
            {[1, 2, 3, 4, 1, 2, 3, 4, 1].map((a, i) => (
              <CarCard
                key={i}
                className="mb-6 sm:max-w-[calc((100%/2)-32px)]  lg:max-w-[calc((100%/2)-32px)] xl:max-w-[calc((100%/3)-32px)] 2xl:max-w-[calc((100%/4)-32px)]"
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Button className="font-PlusJakartaSans bg-[#223B80] text-base text-white">
              Show more car
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarPage
