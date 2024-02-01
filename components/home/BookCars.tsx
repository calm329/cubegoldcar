"use client"
import React from 'react'
import ScheduleForm from './../constants/ScheduleForm'
import { Button } from '../ui/button'
import { Icons } from '../icons'
import CarCard from '../constants/CarCard'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {}

function BookCars({ }: Props) {
    return (
        <div className='w-full lg:w-[calc(100%-130px)] my-0 mx-auto flex justify-between items-center flex-col text-black'>
            <div className='scheduleData py-6 px-6 lg:p-0 flex flex-col lg:flex-row justify-between items-center w-full g:px-[18px] mb-5'>
                <ScheduleForm title={"Pick - Up"} classnames="w-full lg:w-[calc(50%-50px)] px-4 py-2 lg:px-12 lg:py-6 mb-8 lg:mb-0" />
                <Button className='aspect-square bg-[#223B80] p-0 hidden lg:block'>
                    <Icons.changeIcon />
                </Button>
                <ScheduleForm title={"Drop - Off"} classnames="w-full lg:w-[calc(50%-50px)] px-4 py-2 lg:px-12 lg:py-6 " />
            </div>
            <div className='w-full font-PlusJakartaSans text-base'>
                <p className='ml-6 mb-5 font-semibold flex justify-between items-center'>Popular Car <span className='lg:hidden text-[#223B80] text-xs'>View All</span></p>
                <div className='hidden lg:flex w-full justify-between items-center flex-nowrap lg:flex-wrap overflow-auto lg:overflow-hidden'>
                    {[1, 2, 3, 4].map((a, i) => (
                        <CarCard key={i} className="max-w-[calc(100%-111px)] min-w-[calc(100%-111px)] w-full ml-6 lg:ml-0 lg:min-w-[calc((100%/2)-32px)] lg:max-w-[calc((100%/2)-32px)] xl:min-w-[calc((100%/4)-32px)] xl:max-w-[calc((100%/4)-32px)]" />
                    ))}
                </div>
                <div className='flex lg:hidden w-full justify-between items-center flex-nowrap lg:flex-wrap overflow-auto lg:overflow-hidden'>
                    <Swiper className="mySwiper" slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}>
                        {[1, 2, 3, 4].map((a, i) => (
                            <SwiperSlide key={i} className="max-w-[calc(100%-111px)] min-w-[calc(100%-111px)] w-full ml-6 lg:ml-0 lg:min-w-[calc((100%/2)-32px)] lg:max-w-[calc((100%/2)-32px)] xl:min-w-[calc((100%/4)-32px)] xl:max-w-[calc((100%/4)-32px)]" >
                                <CarCard className="w-full" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='flex justify-center items-center mt-11'>
                    <Button className='bg-[#223B80] font-PlusJakartaSans text-base text-white'>
                        Show more car
                    </Button>
                </div>
            </div>
            <div className='offerHeading mt-[52px] mb-5 text-center'>
                <h2 className='offerHeading text-3xl lg:text-5xl font-semibold text-[#223B80]'>OFFERS<br />Get 20% off on This Cars</h2>
            </div>
            <div className='hidden lg:flex w-full justify-between items-center flex-nowrap lg:flex-wrap overflow-auto lg:overflow-hidden'>
                {[1, 2, 3].map((a, i) => (
                    <CarCard key={i} className="max-w-[calc(100%-111px)] min-w-[calc(100%-111px)] w-full ml-6 lg:ml-0 lg:min-w-[calc((100%/2)-32px)] lg:max-w-[calc((100%/2)-32px)] xl:min-w-[calc((100%/4)-32px)] xl:max-w-[calc((100%/4)-32px)]" />
                ))}
            </div>
            <div className='flex lg:hidden w-full justify-between items-center flex-nowrap lg:flex-wrap overflow-auto lg:overflow-hidden'>
                <Swiper className="mySwiper" slidesPerView={'auto'}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}>
                    {[1, 2, 3].map((a, i) => (
                        <SwiperSlide key={i} className="max-w-[calc(100%-111px)] min-w-[calc(100%-111px)] w-full ml-6 lg:ml-0 lg:min-w-[calc((100%/2)-32px)] lg:max-w-[calc((100%/2)-32px)] xl:min-w-[calc((100%/4)-32px)] xl:max-w-[calc((100%/4)-32px)]" >
                            <CarCard  className="w-full" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

    </div>
  )
}

export default BookCars
