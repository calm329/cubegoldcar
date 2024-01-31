import Image from 'next/image'
import React from 'react'
import Rating from '../constants/Rating'

type Props = {}

function CardCar({ }: Props) {
    return (
        <div className='CardCar flex items-center mb-8'>
            <Image className='w-[132px] aspect-[1.22] mr-4 object-contain rounded-[8px]' alt='car' src={'/static/images/car2.png'} width={200} height={100} />
            <div>
                <h3 className='text-[#223B80] text-[32px] mb-2'>Nissan GT - R</h3>
                <Rating />
            </div>
        </div>
    )
}

export default CardCar