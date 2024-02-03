import React from "react"
import Image from "next/image"

import Rating from "../constants/Rating"

type Props = {}

function CardCar({}: Props) {
  return (
    <div className="CardCar mb-8 flex items-center">
      <Image
        className="mr-4 aspect-[1.22] w-[116px] rounded-[8px] object-contain lg:w-[132px]"
        alt="car"
        src={"/static/images/car2.png"}
        width={200}
        height={100}
      />
      <div>
        <h3 className="mb-2 text-xl text-[#223B80] lg:text-[32px]">
          Nissan GT - R
        </h3>
        <Rating classname={"flex-col lg:flex-row"} />
      </div>
    </div>
  )
}

export default CardCar
