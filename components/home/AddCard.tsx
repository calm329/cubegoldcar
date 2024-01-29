import React from 'react'
import { Button } from '../ui/button'

type Props = {

}

function AddCard({}: Props) {
    return (
        <section className="w-[calc(100%-130px)] my-0 mx-auto flex justify-between items-center">
            <div className="w-[calc(50%-12px)] bg-[url('/static/images/blueAdd.png')] p-6 bg-center bg-cover aspect-[1.7] rounded-[10px]">
                <h3 className="font-PlusJakartaSans font-bold text-[32px] text-white">The Best Platform<br /> for Car Rental</h3>
                <p className="font-PlusJakartaSans  text-base text-white">
                    Ease of doing a car rental safely and <br /> reliably. Of course at a low price.
                </p>
                <Button className="bg-[#F90000] w-[120px] h-11 text-[16px] text-white mt-[20px] rounded-sm">Rental Car</Button>
            </div>
            <div className="w-[calc(50%-12px)] bg-[url('/static/images/redAdd.png')] p-6 bg-center bg-cover aspect-[1.7] rounded-[10px]">
                <h3 className="font-PlusJakartaSans font-bold text-[32px] text-white">The Best Platform<br /> for Car Rental</h3>
                <p className="font-PlusJakartaSans  text-base text-white">
                    Ease of doing a car rental safely and <br /> reliably. Of course at a low price.
                </p>
                <Button className="bg-[#223B80] w-[120px] h-11 text-[16px] text-white mt-[20px] rounded-sm">Rental Car</Button>
            </div>
        </section>
    )
}

export default AddCard