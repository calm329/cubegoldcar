import React from 'react'
import FormCard from '@/components/form/FormCard'
import InputForm from '@/components/form/InputForm'
import Image from 'next/image'
import { Checkbox } from '../ui/checkbox'
type Props = {}

function Billing({ }: Props) {
    return (
        <div className='form max-w-[100%-492px-34px] w-full'>
            <FormCard title={'Billing Info'} desc={'Please enter your billing info'} rightDec={'Step 1 of 4'}>
                <div className='flex items-center justify-between flex-wrap w-full'>
                    <InputForm label="Name" inputClasses='bg-[#F6F7F9] text-[#90A3BF] font-normal ' placeholder={'Your name'} />
                    <InputForm label="Phone Number" inputClasses='bg-[#F6F7F9] text-[#90A3BF] font-normal ' placeholder={'Phone number'} />
                    <InputForm label="Address" inputClasses='bg-[#F6F7F9] text-[#90A3BF] font-normal' placeholder={'Address'} />
                    <InputForm label="Town / City" inputClasses='bg-[#F6F7F9] text-[#90A3BF] font-normal' placeholder={'Town or city'} />
                </div>
            </FormCard>
            <FormCard title={'Rental Info'} desc={'Please select your rental date'} rightDec={'Step 2 of 4'}>
                <div className='mb-6 flex  items-center'>

                    <div className='liveIcon flex items-center h-3 w-3 mr-2  justify-center bg-[#fdadad] rounded-full'>
                        <div className='bg-[#F90000] h-2 w-2 aspect-square rounded-full'></div>
                    </div>
                    <p className='font-semibold text-[#223B80] '>
                        Pick - Up
                    </p>
                </div>
                <div className='flex items-center justify-between flex-wrap w-full'>
                    <InputForm label="Locations" select inputClasses='bg-[#F6F7F9] text-[#90A3BF] font-normal ' placeholder={'Your name'} />
                    <InputForm label="Date" dateSelector inputClasses='bg-[#F6F7F9] text-[#90A3BF] font-normal ' />
                    <InputForm label="Time" select inputClasses='bg-[#F6F7F9] text-[#90A3BF] font-normal' placeholder={'Select your time'} />
                </div>
                <div className='mb-6 flex  items-center'>

                    <div className='liveIcon flex items-center h-3 w-3 mr-2  justify-center bg-[#fdadad] rounded-full'>
                        <div className='bg-[#F90000] h-2 w-2 aspect-square rounded-full'></div>
                    </div>
                    <p className='font-semibold text-[#223B80] '>
                        Drop - Off
                    </p>
                </div>
                <div className='flex items-center justify-between flex-wrap w-full'>
                    <InputForm label="Locations" select inputClasses='bg-[#F6F7F9] text-[#90A3BF] font-normal ' placeholder={'Your name'} />
                    <InputForm label="Date" dateSelector inputClasses='bg-[#F6F7F9] text-[#90A3BF] font-normal ' />
                    <InputForm label="Time" select inputClasses='bg-[#F6F7F9] text-[#90A3BF] font-normal' placeholder={'Select your time'} />
                </div>
            </FormCard>
            <FormCard title={'Payment Method'} desc={'Please enter your payment method'} rightDec={'Step 3 of 4'}>
                <div className='bg-[#F6F7F9] rounded-[10px] p-6'>
                    <div className='mb-6 flex justify-between items-center'>
                        <div className=' flex  items-center'>
                            <div className='liveIcon flex items-center h-3 w-3 mr-2  justify-center bg-[#fdadad] rounded-full'>
                                <div className='bg-[#F90000] h-2 w-2 aspect-square rounded-full'></div>
                            </div>
                            <p className='font-semibold text-[#223B80] '>
                                Credit Card
                            </p>
                        </div>
                        <Image alt='card name' src={'/static/images/visa.png'} width={92} height={20} />
                    </div>
                    <div className='flex items-center justify-between flex-wrap w-full'>
                        <InputForm label="Card Number" inputClasses='bg-[#fff] text-[#90A3BF] font-normal ' placeholder={'Card number'} />
                        <InputForm label="Expration Date" inputClasses='bg-[#fff] text-[#90A3BF] font-normal ' placeholder={'DD / MM / YY'} />
                        <InputForm label="Card Holder" inputClasses='bg-[#fff] text-[#90A3BF] font-normal' placeholder={'Card holder'} />
                        <InputForm label="CVC" inputClasses='bg-[#fff] text-[#90A3BF] font-normal' placeholder={'CVC'} />
                    </div>
                </div>
                <div className='pb-6'>
                <div className='bankTransfer bg-[#F6F7F9] py-2  px-6 rounded-[10px] mt-4 flex justify-between items-center'>
                    <div className='flex items-center '>
                    <Checkbox id="terms" className='rounded-full mr-5' />
                    <p className='text-[#223B80] text-base'>Bank Transfer</p>
                    </div>
                    <Image alt='banktransferIcon' src='/static/images/bankTransferIcon.png' width={58} height={51}/>
                </div>
                </div>
            </FormCard>
        </div>
    )
}

export default Billing