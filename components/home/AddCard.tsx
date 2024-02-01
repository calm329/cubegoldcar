import React from 'react'
import { Button } from '../ui/button'

type Props = {

}

function AddCard({ }: Props) {
    return (
        <section className="w-full p-6 lg:p-0 lg:w-[calc(100%-130px)] my-0 mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-[calc(50%-12px)] h-[232px] lg:h-auto bg-[url('/static/images/blueAdd.png')] p-4 lg:p-6 bg-center bg-cover aspect-auto  lg:aspect-[1.41] rounded-[10px]">
                <h3 className="font-PlusJakartaSans font-bold mb-3 lg:mb-auto text-[16px] lg:text-[32px] text-white">The Best Platform<br className='hidden lg:block' /> for Car Rental</h3>
                <p className="font-PlusJakartaSans  text-sm lg:text-base text-white">
                    Ease of doing a car rental safely and <br /> reliably. Of course at a low price.
                </p>
                <Button className="bg-[#F90000] w-[120px] h-11 text-sm lg:text-[16px] text-white mt-[20px] rounded-sm">Rental Car</Button>
            </div>
            <div className="w-full lg:w-[calc(50%-12px)] h-[232px] lg:h-auto bg-[url('/static/images/redAdd.png')] p-4 lg:p-6 bg-center bg-cover aspect-auto  lg:aspect-[1.41] rounded-[10px] hidden lg:block">
                <h3 className="font-PlusJakartaSans font-bold mb-3 lg:mb-auto text-[16px] lg:text-[32px] text-white">The Best Platform<br className='hidden lg:block' /> for Car Rental</h3>
                <p className="font-PlusJakartaSans  text-sm lg:text-base text-white">
                    Ease of doing a car rental safely and <br /> reliably. Of course at a low price.
                </p>
                <Button className="bg-[#223B80] w-[120px] h-11 text-sm lg:text-[16px] text-white mt-[20px] rounded-sm">Rental Car</Button>
            </div>
        </section>
    )
}

export default AddCard