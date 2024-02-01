import React from 'react'

type Props = {}

function Banner({}: Props) {
  return (
    <section
    className="firstSection w-full h-screen hidden lg:flex items-center mb-11"  
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
        <button data-aos="zoom-out" className="bg-[#F90000] w-[120px] h-11 text-[16px] text-white mt-[38px] rounded-sm">Rental Car</button>
      </div>
    </div>
  </section>
  )
}

export default Banner