"use client"
import FilterBar from '@/components/Cars/FilterBar'
import CarCard from '@/components/constants/CarCard'
import ScheduleForm from '@/components/constants/ScheduleForm'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import React from 'react'

type Props = {}

function CarPage({ }: Props) {
    return (
        <div className='CarPage '>
            <div className='innerCarPage flex justify-between '>
                <FilterBar classname="hidden lg:block max-w-[280px]" />
                <div className='cars w-full lg:w-[calc(100%-280px)] p-6 lg:p-3 pb-[34px]'>
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
                    <div className='flex flex-col xl:flex-row justify-between items-center w-full '>
                        <ScheduleForm title='Pick - Up' classnames="w-full xl:w-[calc(50%-21px)] px-4 py-2 xl:px-12 lg:py-6 mb-8 lg:mb-0" />
                        <ScheduleForm title='Drop - Off' classnames="w-full xl:w-[calc(50%-21px)] px-4 py-2 xl:px-12 lg:py-6 " />
                    </div>
                    <div className='flex w-full justify-between items-center flex-wrap mt-6'>
                        {[1, 2, 3, 4, 1, 2, 3, 4, 1].map((a, i) => (
                            <CarCard className="sm:max-w-[calc((100%/2)-32px)] lg:max-w-[calc((100%/2)-32px)]  xl:max-w-[calc((100%/3)-32px)] 2xl:max-w-[calc((100%/4)-32px)] mb-6" />
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <Button className='bg-[#223B80] font-PlusJakartaSans text-base text-white'>
                            Show more car
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarPage