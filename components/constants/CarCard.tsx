"use client"
import React from 'react'
import { Icons } from '../icons'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

type Props = {
    className?: any
}

function CarCard({ className }: Props) {
    const router = useRouter()
    return (
        <div className={`CarCard font-PlusJakartaSans p-4 lg:p-6 bg-white  w-full rounded-xl ${className} cursor-pointer`} onClick={() => router.push('/car-details')}>
            <div className='nameFav flex justify-between'>
                <div className='name'>
                    <p className='font-PlusJakartaSans font-bold text-base lg:text-xl mb-1 text-black'>Koenigsegg</p>
                    <p className='font-PlusJakartaSans font-bold text-sm text-[#90A3BF] '>Sport</p>
                </div>
                <div>
                    <Icons.blankHeart data-aos="fade-down-left" />
                </div>
            </div>
            <Image  data-aos="fade-right" className='mt-8 lg:mt-16 w-full' alt='car' src={'/static/images/car.png'} width={200} height={100} />
            <div className='flex flex-col pt-8 relative z-10 shadow-[0px_-19px_16px_white]'>
                <div className='flex justify-between items-center'>
                    <p className="text-xs lg:text-sm font-PlusJakartaSans flex items-center font-normal text-[#90A3BF]"><span className='mr-1'><Icons.fuelPump /></span>90L</p>
                    <p className="text-xs lg:text-sm font-PlusJakartaSans flex items-center font-normal text-[#90A3BF]"><span className='mr-1'><Icons.steeringWheel /></span>Manual</p>
                    <p className="text-xs lg:text-sm font-PlusJakartaSans flex items-center font-normal text-[#90A3BF]"><span className='mr-1'><Icons.public /></span>2 People</p>
                </div>
                <div className='mt-5 hidden lg:block'>
                    <div className='w-full flex justify-between flex-wrap mt-3'>
                        <div className='w-[calc(50%-10px)] flex items-center justify-between mb-4'>
                            <p className='text-[#223B80] text-sm flex items-center'><span className='mr-[5px]'><Image alt='verified' src={'/static/images/tic.png'} width={15} height={16} /></span>Full Tank (60 €)</p>
                        </div>
                        <div className='w-[calc(50%-10px)] flex items-center justify-between mb-4'>
                            <p className='text-[#223B80] text-sm flex items-center'><span className='mr-[5px]'><Image alt='verified' src={'/static/images/tic.png'} width={15} height={16} /></span>Unlimited Km</p>
                        </div>
                        <div className='w-[calc(50%-10px)] flex items-center justify-between mb-4'>
                            <p className='text-[#223B80] text-sm flex items-center'><span className='mr-[5px]'><Image alt='verified' src={'/static/images/tic.png'} width={15} height={16} /></span>Insurance Included</p>
                        </div>
                        <div className='w-[calc(50%-10px)] flex items-center justify-between mb-4'>
                            <p className='text-[#223B80] text-sm flex items-center'><span className='mr-[5px]'><Image alt='verified' src={'/static/images/tic.png'} width={15} height={16} /></span>Airport Pickup(60 €)</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-4 mb-3'>
                    <p className='text-base lg:text-sm font-PlusJakartaSans font-bold'>$99.00/ <span className='text-[14px] text-[#90A3BF]'>day</span></p>
                    <Button className='bg-[#223B80] font-PlusJakartaSans text-xs lg:text-base text-white'>
                        Rent Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CarCard