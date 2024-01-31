import Image from 'next/image'
import React from 'react'

type Props = {}

function Confirmation({ }: Props) {
    return (
    <div className='Confirmation h-[calc(100vh-87px)] w-full flex items-center justify-center bg-[#F90000]'>
            <div className='flex flex-col items-center justify-center'>
                <Image alt='verified' src={'/static/images/tic.png'} className='mb-4' width={80} height={80} />
                <h1 className='text-4xl text-white mb-4'>
                Booking Done!
                </h1>
                <p className='text-white text-xl font-medium'>We have received your booking!</p>
                <p className='text-white text-xl font-medium'>You will get an email with payment instructions.</p>
            </div>
        </div>
    )
}

export default Confirmation