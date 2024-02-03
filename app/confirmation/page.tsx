import React from "react"
import Image from "next/image"

type Props = {}

function Confirmation({}: Props) {
  return (
    <div className="Confirmation flex h-[calc(100vh-87px)] w-full items-center justify-center bg-[#F90000] text-black">
      <div className="flex flex-col items-center justify-center">
        <Image
          alt="verified"
          src={"/static/images/tic.png"}
          className="mb-4 h-[60px] w-[60px] lg:h-20 lg:w-20"
          width={80}
          height={80}
        />
        <h1 className="mb-4 text-2xl text-white lg:text-4xl">Booking Done!</h1>
        <p className="text-center text-xl font-medium text-white lg:text-xl">
          We have received your booking!
        </p>
        <p className="text-center text-xl font-medium text-white lg:text-xl">
          You will get an email with payment instructions.
        </p>
      </div>
    </div>
  )
}

export default Confirmation
