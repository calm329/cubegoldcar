import FilterBar from '@/components/Cars/FilterBar'
import CarCard from '@/components/constants/CarCard'
import ScheduleForm from '@/components/constants/ScheduleForm'
import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

function CarPage({ }: Props) {
    return (
        <div className='CarPage'>
            <div className='innerCarPage flex justify-between'>
                <FilterBar />
                <div className='cars w-[calc(100%-280px)] p-3 pb-[34px]'>
                    <div className='flex justify-between w-full'>
                        <ScheduleForm classnames="w-[calc(50%-21px)]" />
                        <ScheduleForm classnames="w-[calc(50%-21px)]" />
                    </div>
                    <div className='flex w-full justify-between items-center flex-wrap mt-6'>
                        {[1, 2, 3, 4, 1, 2, 3, 4, 1].map((a, i) => (
                            <CarCard className="lg:max-w-[calc((100%/3)-32px)]  xl:max-w-[calc((100%/3)-32px)] 2xl:max-w-[calc((100%/4)-32px)] mb-6" />
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