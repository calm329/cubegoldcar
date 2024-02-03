import React from "react"

type Props = {}

function Banner({}: Props) {
  return (
    <section
      className="firstSection mb-11 hidden h-screen w-full items-center lg:flex"
      style={{
        backgroundImage: `url(/static/images/background.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      data-aos="fade-in"
    >
      <div className="flex max-w-[980px] flex-col items-start gap-2 px-8">
        <div className="">
          <p
            className="driveHEading text-[64px]"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            data-aos="fade-down"
          >
            Drive the Experience:
            <br />
            Your Journey, Your Car, <br />
            Your Way!
          </p>
          <button
            data-aos="zoom-out"
            className="mt-[38px] h-11 w-[120px] rounded-sm bg-[#F90000] text-[16px] text-white"
          >
            Rental Car
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner
