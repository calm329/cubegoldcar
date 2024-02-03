import React from "react"

import PromoCard from "./PromoCard"

type Props = {}

function Promo({}: Props) {
  return (
    <div className="Promo mx-auto my-0 flex w-full flex-col items-center justify-between p-6 lg:w-[calc(100%-130px)] lg:p-0">
      <div className="offerHeading mt-[52px] text-center">
        <h2 className="offerHeading text-3xl font-semibold text-[#223B80] lg:text-5xl">
          Gold Services
        </h2>
      </div>
      <div className="mb-7 mt-[77px] flex w-full flex-col justify-around lg:flex-row">
        <PromoCard
          classnames="mb-14"
          image={"/static/images/friends.png"}
          text={
            <p className="text-center text-base font-semibold text-[#223B80] lg:text-2xl">
              Support during <br /> car Pick-up at <br /> all office in <br />{" "}
              Cuba
            </p>
          }
        />
        <PromoCard
          classnames=""
          image={"/static/images/bitcoin.png"}
          text={
            <p className="text-center text-base font-semibold text-[#223B80] lg:text-2xl">
              First fuel tank included & guranteed
            </p>
          }
        />
      </div>
    </div>
  )
}

export default Promo
