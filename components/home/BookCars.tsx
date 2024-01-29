import React from 'react'
import ScheduleForm from './../constants/ScheduleForm'
import { Button } from '../ui/button'
import { Icons } from '../icons'
import CarCard from '../constants/CarCard'


type Props = {}

function BookCars({ }: Props) {
    return (
        <div className='w-[calc(100%-130px)] my-0 mx-auto flex justify-between items-center flex-col'>
            <div className='scheduleData flex justify-between items-center w-full px-[18px] mb-5'>
                <ScheduleForm />
                <Button className='aspect-square bg-[#223B80] p-1'>
                    <Icons.changeIcon />
                </Button>
                <ScheduleForm />
            </div>
            <div className='w-full font-PlusJakartaSans text-base'>
                <p className='ml-6 mb-5 font-semibold'>Popular Car</p>
                <div className='flex w-full justify-between items-center flex-wrap'>
                    {[1, 2, 3, 4].map((a, i) => (
                        <CarCard />
                    ))}
                </div>
                <div className='flex justify-center items-center mt-11'>
                    <Button className='bg-[#223B80] font-PlusJakartaSans text-base text-white'>
                        Show more car
                    </Button>
                </div>
            </div>
            <div className='offerHeading mt-[52px] text-center'>
                <h2 className='offerHeading text-5xl font-semibold text-[#223B80]'>OFFERS<br />Get 20% off on This Cars</h2>
            </div>
            <div className='flex w-full justify-evenly items-center flex-wrap mt-12'>
                {[1, 2, 3].map((a, i) => (
                    <CarCard />
                ))}
            </div>
        </div>
    )
}

export default BookCars