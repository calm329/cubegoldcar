import Image from 'next/image'
import React from 'react'
import { Icons } from '../icons'

type Props = {}

function HowItWorks({ }: Props) {
    return (
        <div className='HowItWorks bg-white pt-6'>
            <div className='rentInHand w-full relative bg-[url("/static/images/halfCarImageBlue.png")] pt-36 mb-5 sm:pt-0 sm:mb-0 bg-right-top sm:bg-right bg-contain bg-no-repeat ' data-aos="fade-left">
                <h2 className='driveHEading text-medium mb-[15px] text-2xl sm:text-3xl text-center sm:text-left text-[#2B2B2B] p-6 pt-9 sm:px-8 sm:pt-16 sm:pb-24' >
                    Rent a car now <span className='text-[#223B80] '>in your<br className='hidden sm:block' data-aos="fade-right" />
                        hand.</span> Try it now!
                </h2>
                {/* <Image alt="car" src="/static/images/halfCarImageBlue.png" className='absolute right-0 top-6 sm:top-8 w-1/2 object-contain' width={300} height={300}/> */}
            </div>
            <div className='content p-16 px-6 sm:px-8'>
                <h2 className='driveHEading text-medium mb-[7px] text-2xl text-center sm:text-left sm:text-3xl text-[#223B80]' data-aos="flip-right">HOW IT WORKS</h2>
                <h3 className='driveHEading text-medium text-2xl text-center sm:text-left sm:text-3xl text-[#F90000] mb-8'>Follow these steps to rent a car in Cuba:</h3>
                <div className='flex flex-col sm:flex-row mb-6 items-center text-center sm:items-start sm:text-left' data-aos="fade-right">
                    <div className='h-[50px] w-[50px] bg-[#F90000] rounded-full flex items-center justify-center mr-4'>
                        <Icons.badgeIcon />
                    </div>
                    <div >
                        <h4 className='text-[#223B80] text-2xl font-semibold'>Choose Cart:</h4>
                        <p className='text-[#223B80] text-xl font-medium font-Montserrat-Regular'>Choose a cart on the site. Availability and<br />prices visible in real time.</p>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row mb-6 items-center sm:items-start text-center sm:text-left'>
                    <div className='h-[50px] w-[50px] bg-[#F90000] rounded-full flex items-center justify-center mr-4'>
                        <Icons.badgeIcon />
                    </div>
                    <div data-aos="fade-right">
                        <h4 className='text-[#223B80] text-2xl font-semibold'>Pay Cart:</h4>
                        <p className='text-[#223B80] text-xl  font-medium font-Montserrat-Regular'>You can pay by credit card, bank transfer,<br />Zelle and Bitcoin.</p>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row mb-6 items-center sm:items-start text-center sm:text-left'>
                    <div className='h-[50px] w-[50px] bg-[#F90000] rounded-full flex items-center justify-center mr-4'>
                        <Icons.badgeIcon />
                    </div>
                    <div data-aos="fade-right">
                        <h4 className='text-[#223B80] text-2xl font-semibold'>Download Voucher:</h4>
                        <p className='text-[#223B80] text-xl font-medium font-Montserrat-Regular'>Visit the Client portal and download the<br />reservation voucher</p>
                    </div>
                </div>
                <div >
                    <h3 data-aos="fade-right" className='driveHEading text-medium text-2xl sm:text-left sm:text-3xl text-[#F90000] mb-6 mt-10'>More details</h3>
                    <ol className='list-disc pl-7'>
                        <li data-aos="fade-right" data-aos-duration="10" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>On this site you can check the availability and prices of rental cars.</li>
                        <li data-aos="fade-right" data-aos-duration="20" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>All prices include Insurance</li>
                        <li data-aos="fade-right" data-aos-duration="30" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>60 EUR for the first tank of gasoline are added to the price of the car (you can return the car without gasoline)</li>
                        <li data-aos="fade-right" data-aos-duration="40" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>Picking up the car at an airport costs 25 EUR .</li>
                        <li data-aos="fade-right" data-aos-duration="50" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>Adding a second driver costs 35 EUR</li>
                        <li data-aos="fade-right" data-aos-duration="60" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>Returning in a different city costs 35 EUR</li>
                        <li data-aos="fade-right" data-aos-duration="70" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>You can reserve a car without obligation and we will block it for you for 48 hours</li>
                        <li data-aos="fade-right" data-aos-duration="80" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>You will receive an email with all the details of the reservation and instructions to pay</li>
                        <li data-aos="fade-right" data-aos-duration="90" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>You have 48 hours to pay.</li>
                        <li data-aos="fade-right" data-aos-duration="100" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>If you do not pay, the reservation is automatically canceled. You do not have to do anything.</li>
                        <li data-aos="fade-right" data-aos-duration="110" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>If you want to finalize the reservation, follow the instructions in the email to make the payment. Then, you will receive the Voucher.</li>
                        <li data-aos="fade-right" data-aos-duration="120" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>The VOUCHER is the document that you will need to pick up the car in Cuba.</li>
                        <li data-aos="fade-right" data-aos-duration="130" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>Along with the VOUCHER, you will have to present your passport and a driver's license.</li>
                        <li data-aos="fade-right" data-aos-duration="140" className='text-[#223B80] font-semibold list-disc text-xl sm:text-2xl mb-2'>Only people between 21 and 80 years old can rent cars.</li>
                    </ol>
                </div>

            </div>
            <div className='bg-[url("/static/images/termsBottomShade.png")] pb-9 h-[122px] w-full bg-left-bottom bg-[length:60%_auto] bg-no-repeat'>

            </div>
        </div>
    )
}

export default HowItWorks