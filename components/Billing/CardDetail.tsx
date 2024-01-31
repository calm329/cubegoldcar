import React from 'react'
import CardCar from './CardCar'

type Props = {}

function CardDetail({ }: Props) {
    return (
        <div className='w-full bg-white rounded-[10px] p-6'>
            <h3 className='text-[#223B80] mb-1 text-xl'>Rental Summary</h3>
            <p className='text-[#90A3BF] text-sm mb-8'>Prices may change depending on the length of the rental and the price of your rental car.</p>
            <div className='border-t-0 border-x-0 border-b-[1px] border-[#C3D4E9] border-solid'>
                <CardCar />
            </div>
            <div className='amountDetail w-full py-9'>
                <div className='w-full flex justify-between items-center mb-6'>
                    <p className='text-[#90A3BF] text-base'>Subtotal</p>
                    <p className='text-[#223B80] text-base'><b>$80.00</b></p>
                </div>
                <div className='w-full flex justify-between items-center '>
                    <p className='text-[#90A3BF] text-base'>Tax</p>
                    <p className='text-[#223B80] text-base'><b>$0</b></p>
                </div>
            </div>
            <div className=' bg-[#F6F7F9] py-4  px-8 rounded-[10px] mt-4 flex justify-between items-center mb-8'>
                <p className='text-[#90A3BF] text-base'>Apply promo code</p>
                <p className='text-[#223B80] text-base'><b>Apply now</b></p>
            </div>
            
            <div className='w-full flex justify-between items-center '>
                <div>
                    <p className='text-[#223B80] text-xl'><b>Total Rental Price</b></p>
                    <p className='text-[#90A3BF] text-sm'>Overall price and includes rental discount</p>
                </div>
                    <p className='text-[#223B80] text-base'><b>$80.00</b></p>
                </div>
        </div>
    )
}

export default CardDetail