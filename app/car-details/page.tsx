"use client"
import FilterBar from '@/components/Cars/FilterBar'
import CarCard from '@/components/constants/CarCard'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import { Icons } from '@/components/icons'
import Rating from '@/components/constants/Rating'
import { Button } from '@/components/ui/button'
import CarouselComponent from '@/components/constants/Carousel'
import { useRouter } from 'next/navigation'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
type Props = {}

function page({ }: Props) {
    const router = useRouter()


    return (
        <div className='cardetails text-black'>
            <div className='innercardetails flex justify-between'>
                <FilterBar classname="hidden lg:block max-w-[280px]" />
                <div className='cars w-full lg:w-[calc(100%-280px)] p-3 pb-[34px]'>
                    <p className='mb-5 text-[#223B80] font-semibold flex justify-between items-center lg:hidden'>Filter
                        <Drawer direction="left" fixed dismissible >
                            <DrawerTrigger asChild>
                                <span className='lg:hidden border-[1px] border-[#223B80] p-1 rounded-sm cursor-pointer bg-white text-[#223B80] [&>svg]:text-xl'><Icons.filterIcon /></span>
                            </DrawerTrigger>
                            <DrawerContent className="flex flex-col justify-between pb-4 overflow-auto bg-white">
                                <FilterBar classname="block lg:hidden max-w-[280px]" />
                            </DrawerContent>
                        </Drawer>
                    </p>
                    <div className='carDetailBox flex w-full justify-between flex-wrap'>
                        <div className='w-full lg:w-[calc(50%-16px)]'>
                            <CarouselComponent /> 
                        </div>
                        <div className='w-full lg:w-[calc(50%-16px)] bg-white rounded-[10px] mt-8 lg:mt-0'>
                            <div className='details p-4 lg:p-6'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h3 className='text-xl lg:text-[32px]'>Nissan GT - R</h3>
                                        <Rating />
                                    </div>
                                    <Icons.blankHeart />
                                </div>
                                <div className=' mt-3 mb-[14px]'>
                                    <p className='text-base lg:text-xl font-light text-[#223B80]'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                                    <div className='w-full flex justify-between flex-wrap mt-3'>
                                        <div className='w-[calc(50%-22px)] flex items-center justify-between mb-4'>
                                            <p className='text-[#90A3BF] text-base lg:text-xl  font-light'>Type Car</p>
                                            <p className='text-[#223B80] text-base lg:text-xl '><b>Sport</b></p>
                                        </div>
                                        <div className='w-[calc(50%-22px)] flex items-center justify-between mb-4'>
                                            <p className='text-[#90A3BF] text-base lg:text-xl  font-light'>Capacity</p>
                                            <p className='text-[#202431] text-base lg:text-xl '><b>2 Person</b></p>
                                        </div>
                                        <div className='w-[calc(50%-22px)] flex items-center justify-between mb-4'>
                                            <p className='text-[#90A3BF] text-base lg:text-xl  font-light'>Steering</p>
                                            <p className='text-[#223B80] text-base lg:text-xl '><b>Manual</b></p>
                                        </div>
                                        <div className='w-[calc(50%-22px)] flex items-center justify-between mb-4'>
                                            <p className='text-[#90A3BF] text-base lg:text-xl  font-light'>Gasoline</p>
                                            <p className='text-[#223B80] text-base lg:text-xl '><b>70L</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' mt-3 mb-[14px]'>
                                    <div className='w-full flex justify-between flex-wrap mt-3'>
                                        <div className='w-[calc(50%-22px)] flex items-center justify-between mb-4'>
                                            <p className='text-[#223B80] text-sm lg:text-base flex items-center'><span className='mr-[10px]'><Image alt='verified' src={'/static/images/tic.png'} width={20} height={21} /></span>Full Tank (60 €)</p>
                                        </div>
                                        <div className='w-[calc(50%-22px)] flex items-center justify-between mb-4'>
                                            <p className='text-[#223B80] text-sm lg:text-base flex items-center'><span className='mr-[10px]'><Image alt='verified' src={'/static/images/tic.png'} width={20} height={21} /></span>Unlimited Km</p>
                                        </div>
                                        <div className='w-[calc(50%-22px)] flex items-center justify-between mb-4'>
                                            <p className='text-[#223B80] text-sm lg:text-base flex items-center'><span className='mr-[10px]'><Image alt='verified' src={'/static/images/tic.png'} width={20} height={21} /></span>Insurance Included</p>
                                        </div>
                                        <div className='w-[calc(50%-22px)] flex items-center justify-between mb-4'>
                                            <p className='text-[#223B80] text-sm lg:text-base flex items-center'><span className='mr-[10px]'><Image alt='verified' src={'/static/images/tic.png'} width={20} height={21} /></span>Airport Pickup(60 €)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center mt-4 mb-3'>
                                    <div>
                                        <p className='text-xl lg:text-[28px] font-PlusJakartaSans font-bold'>$99.00/ <span className='text-[14px] text-[#90A3BF]'>day</span></p>
                                        <p className='text-[14px] text-[#90A3BF]'><s>$100.00</s></p>
                                    </div>
                                    <Button className='bg-[#223B80] w-[140px] h-[56px] font-PlusJakartaSans text-base text-white' onClick={() => {
                                        router.push('/billing')
                                    }}>
                                        Rent Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-between items-center flex-wrap mt-6'>
                        {[1, 2, 3, 4, 1, 2, 3, 4, 1].map((a, i) => (
                            <CarCard className="lg:max-w-[calc((100%/3)-32px)] xl:max-w-[calc((100%/3)-32px)] mb-6" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page