import React from 'react'
import { Icons } from '../icons'
import Image from 'next/image'
import { Button } from '../ui/button'

type Props = {}

function CarCard({ }: Props) {
    return (
        <div className='CarCard font-PlusJakartaSans p-6 bg-white lg:max-w-[calc((100%/3)-32px)] xl:max-w-[calc((100%/4)-32px)]  w-full rounded-xl'>
            <div className='nameFav flex justify-between'>
                <div className='name'>
                    <p className='font-PlusJakartaSans font-bold text-xl mb-1'>Koenigsegg</p>
                    <p className='font-PlusJakartaSans font-bold text-sm text-[#90A3BF]'>Sport</p>
                </div>
                <div>
                    <Icons.blankHeart />
                </div>
            </div>
            <Image className='mt-16 w-full' alt='car' src={'/static/images/car.png'} width={200} height={100} />
            <div className='flex flex-col pt-8'>
                <div className='flex justify-between items-center'>
                    <p className="text-sm font-PlusJakartaSans flex items-center font-normal text-[#90A3BF]"><span className='mr-1'><Icons.fuelPump /></span>90L</p>
                    <p className="text-sm font-PlusJakartaSans flex items-center font-normal text-[#90A3BF]"><span className='mr-1'><Icons.steeringWheel /></span>Manual</p>
                    <p className="text-sm font-PlusJakartaSans flex items-center font-normal text-[#90A3BF]"><span className='mr-1'><Icons.public /></span>2 People</p>
                </div>
                <div className='mt-5'>
                    <p className='flex font-PlusJakartaSans justify-center items-center text-[#223B80] font-semibold text-sm'><span className='mr-2'><Image alt='verified' src={'/static/images/tic.png'} width={32} height={28}/></span>Insurance Included</p>
                </div>
                <div className='flex justify-between items-center mt-4 mb-3'>
                    <p className='text-sm font-PlusJakartaSans font-bold'>$99.00/ <span className='text-[14px] text-[#90A3BF]'>day</span></p>
                    <Button className='bg-[#223B80] font-PlusJakartaSans text-base text-white'>
                    Rent Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CarCard