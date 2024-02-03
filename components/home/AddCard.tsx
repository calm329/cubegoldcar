import React from "react"

import { Button } from "../ui/button"

type Props = {}

function AddCard({}: Props) {
  return (
    <section className="mx-auto my-0 flex w-full flex-col items-center justify-between p-6 lg:w-[calc(100%-130px)] lg:flex-row lg:p-0">
      <div
        data-aos="flip-right"
        className="aspect-auto h-[232px] w-full rounded-[10px] bg-[url('/static/images/blueAdd.png')] bg-cover bg-center p-4 lg:aspect-[1.41] lg:h-auto  lg:w-[calc(50%-12px)] lg:p-6"
      >
        <h3
          data-aos="fade-right"
          className="font-PlusJakartaSans mb-3 text-[16px] font-bold text-white lg:mb-auto lg:text-[32px]"
        >
          The Best Platform
          <br className="hidden lg:block" /> for Car Rental
        </h3>
        <p
          data-aos="fade-right"
          className="font-PlusJakartaSans  text-sm text-white lg:text-base"
        >
          Ease of doing a car rental safely and <br /> reliably. Of course at a
          low price.
        </p>
        <Button
          data-aos="fade-right"
          className="mt-[20px] h-11 w-[120px] rounded-sm bg-[#F90000] text-sm text-white lg:text-[16px]"
        >
          Rental Car
        </Button>
      </div>
      <div
        data-aos="flip-left"
        className="hidden aspect-auto h-[232px] w-full rounded-[10px] bg-[url('/static/images/redAdd.png')] bg-cover bg-center p-4 lg:block  lg:aspect-[1.41] lg:h-auto lg:w-[calc(50%-12px)] lg:p-6"
      >
        <h3
          data-aos="fade-left"
          className="font-PlusJakartaSans mb-3 text-[16px] font-bold text-white lg:mb-auto lg:text-[32px]"
        >
          The Best Platform
          <br className="hidden lg:block" /> for Car Rental
        </h3>
        <p
          data-aos="fade-left"
          className="font-PlusJakartaSans  text-sm text-white lg:text-base"
        >
          Ease of doing a car rental safely and <br /> reliably. Of course at a
          low price.
        </p>
        <Button
          data-aos="fade-left"
          className="mt-[20px] h-11 w-[120px] rounded-sm bg-[#223B80] text-sm text-white lg:text-[16px]"
        >
          Rental Car
        </Button>
      </div>
    </section>
  )
}

export default AddCard
