import React from "react"

import CardCar from "./CardCar"

type Props = {}

function CardDetail({}: Props) {
  return (
    <div className="w-full rounded-[10px] bg-white p-6 text-black">
      <h3 className="mb-1 text-base text-[#223B80] lg:text-xl">
        Rental Summary
      </h3>
      <p className="mb-8 text-xs text-[#90A3BF] lg:text-sm">
        Prices may change depending on the length of the rental and the price of
        your rental car.
      </p>
      <div className="border-x-0 border-b-[1px] border-t-0 border-solid border-[#C3D4E9]">
        <CardCar />
      </div>
      <div className="amountDetail w-full py-9">
        <div className="mb-6 flex w-full items-center justify-between">
          <p className="text-xs text-[#90A3BF] lg:text-base">Subtotal</p>
          <p className="text-xs text-[#223B80] lg:text-base">
            <b>$80.00</b>
          </p>
        </div>
        <div className="flex w-full items-center justify-between ">
          <p className="text-xs text-[#90A3BF] lg:text-base">Tax</p>
          <p className="text-xs text-[#223B80] lg:text-base">
            <b>$0</b>
          </p>
        </div>
      </div>
      <div className=" mb-8 mt-4  flex items-center justify-between rounded-[10px] bg-[#F6F7F9] px-8 py-4">
        <p className="text-xs text-[#90A3BF] lg:text-base">Apply promo code</p>
        <p className="text-xs text-[#223B80] lg:text-base">
          <b>Apply now</b>
        </p>
      </div>

      <div className="flex w-full items-center justify-between ">
        <div>
          <p className="text-base text-[#223B80] lg:text-xl">
            <b>Total Rental Price</b>
          </p>
          <p className="text-xs text-[#90A3BF] lg:text-sm">
            Overall price and includes rental discount
          </p>
        </div>
        <p className="text-base text-[#223B80]">
          <b>$80.00</b>
        </p>
      </div>
    </div>
  )
}

export default CardDetail
