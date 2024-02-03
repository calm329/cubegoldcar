import React from "react"

type Props = {
  image?: any
  text?: any
  classnames?: any
}

function PromoCard({ text, image, classnames }: Props) {
  return (
    <div
      data-aos="flip-right"
      className={`PromoCard relative flex w-full  justify-center rounded-[10px] bg-white pb-[73px] pt-9 lg:w-4/12 ${classnames}`}
    >
      <div className="absolute top-[-30px] mb-0 w-fit bg-[#F90000] px-16 py-3 text-xl text-white shadow-[0px_9px_16px_0px_#f9000031] lg:text-2xl">
        <p>Promo Friend</p>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <img
          alt="friends"
          src={image}
          width={98}
          height={89}
          data-aos="fade-down"
        />
        {/* <p>{text}</p> */}
        {text}
      </div>
    </div>
  )
}

export default PromoCard
