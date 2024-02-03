"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import CarCard from "../constants/CarCard"
import { Icons } from "../icons"
import { Button } from "../ui/button"
import ScheduleForm from "./../constants/ScheduleForm"
import "swiper/css"

type Props = {}

function BookCars({}: Props) {
  return (
    <div className="mx-auto my-0 flex w-full flex-col items-center justify-between text-black lg:w-[calc(100%-130px)]">
      <div className="scheduleData g:px-[18px] mb-5 flex w-full flex-col items-center justify-between px-6 py-6 lg:flex-row lg:p-0">
        <ScheduleForm
          title={"Pick - Up"}
          classnames="w-full lg:w-[calc(50%-50px)] px-4 py-2 lg:px-12 lg:py-6 mb-8 lg:mb-0"
        />
        <Button className="hidden aspect-square bg-[#223B80] p-0 lg:block">
          <Icons.changeIcon />
        </Button>
        <ScheduleForm
          title={"Drop - Off"}
          classnames="w-full lg:w-[calc(50%-50px)] px-4 py-2 lg:px-12 lg:py-6 "
        />
      </div>
      <div className="font-PlusJakartaSans w-full text-base">
        <p className="mb-5 ml-6 flex items-center justify-between font-semibold">
          Popular Car{" "}
          <span className="text-xs text-[#223B80] lg:hidden">View All</span>
        </p>
        <div className="hidden w-full flex-nowrap items-center justify-between overflow-auto lg:flex lg:flex-wrap lg:overflow-hidden">
          {[1, 2, 3, 4].map((a, i) => (
            <CarCard
              key={i}
              className="ml-6 w-full min-w-[calc(100%-111px)] max-w-[calc(100%-111px)] lg:ml-0 lg:min-w-[calc((100%/2)-32px)] lg:max-w-[calc((100%/2)-32px)] xl:min-w-[calc((100%/4)-32px)] xl:max-w-[calc((100%/4)-32px)]"
            />
          ))}
        </div>
        <div className="flex w-full flex-nowrap items-center justify-between overflow-auto lg:hidden lg:flex-wrap lg:overflow-hidden">
          <Swiper
            className="mySwiper"
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
          >
            {[1, 2, 3, 4].map((a, i) => (
              <SwiperSlide
                key={i}
                className="ml-6 w-full min-w-[calc(100%-111px)] max-w-[calc(100%-111px)] lg:ml-0 lg:min-w-[calc((100%/2)-32px)] lg:max-w-[calc((100%/2)-32px)] xl:min-w-[calc((100%/4)-32px)] xl:max-w-[calc((100%/4)-32px)]"
              >
                <CarCard className="w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-11 flex items-center justify-center">
          <Button className="font-PlusJakartaSans bg-[#223B80] text-base text-white">
            Show more car
          </Button>
        </div>
      </div>
      <div className="offerHeading mb-5 mt-[52px] text-center">
        <h2 className="offerHeading text-3xl font-semibold text-[#223B80] lg:text-5xl">
          OFFERS
          <br />
          Get 20% off on This Cars
        </h2>
      </div>
      <div className="hidden w-full flex-nowrap items-center justify-between overflow-auto lg:flex lg:flex-wrap lg:overflow-hidden">
        {[1, 2, 3].map((a, i) => (
          <CarCard
            key={i}
            className="ml-6 w-full min-w-[calc(100%-111px)] max-w-[calc(100%-111px)] lg:ml-0 lg:min-w-[calc((100%/2)-32px)] lg:max-w-[calc((100%/2)-32px)] xl:min-w-[calc((100%/4)-32px)] xl:max-w-[calc((100%/4)-32px)]"
          />
        ))}
      </div>
      <div className="flex w-full flex-nowrap items-center justify-between overflow-auto lg:hidden lg:flex-wrap lg:overflow-hidden">
        <Swiper
          className="mySwiper"
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
        >
          {[1, 2, 3].map((a, i) => (
            <SwiperSlide
              key={i}
              className="ml-6 w-full min-w-[calc(100%-111px)] max-w-[calc(100%-111px)] lg:ml-0 lg:min-w-[calc((100%/2)-32px)] lg:max-w-[calc((100%/2)-32px)] xl:min-w-[calc((100%/4)-32px)] xl:max-w-[calc((100%/4)-32px)]"
            >
              <CarCard className="w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BookCars
