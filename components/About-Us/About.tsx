"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

import "animate.css"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel"

// import { Filter } from "lucide-react"

type Props = {}

function About({}: Props) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const [apiTestino, setApiTestino] = useState<CarouselApi>()
  const [currentTestino, setCurrentTestino] = useState(0)
  const [countTestino, setCountTestino] = useState(0)
  const [activeSlideTestino, setActiveSlideTestino] = useState(0)
  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    setActiveSlide(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setActiveSlide(api.selectedScrollSnap() + 1)
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const handleSliderItemClick = (index: number) => {
    if (api) {
      setActiveSlide(index)
      // Move the slider to the clicked item
      api.scrollTo(index)
      setCurrent(index + 1)
    }
  }

  useEffect(() => {
    if (!apiTestino) {
      return
    }

    setCountTestino(apiTestino.scrollSnapList().length)
    setCurrentTestino(apiTestino.selectedScrollSnap() + 1)
    setActiveSlideTestino(apiTestino.selectedScrollSnap() + 1)

    apiTestino.on("select", () => {
      setActiveSlideTestino(apiTestino.selectedScrollSnap() + 1)
      setCurrent(apiTestino.selectedScrollSnap() + 1)
    })
  }, [apiTestino])

  const handleSliderItemClickTestimonial = (index: number) => {
    if (apiTestino) {
      setActiveSlideTestino(index)
      // Move the slider to the clicked item
      apiTestino.scrollTo(index)
      setCurrentTestino(index + 1)
    }
  }
  return (
    <>
      {/* first section */}
      <div className=" flex flex-col items-center justify-center bg-white lg:flex-row">
        <div
          className="billing about-us-image mb-11 flex h-auto w-full justify-between pt-[13px] lg:mb-0 lg:h-screen lg:w-[40%] xl:w-[606px]"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <Image
            width={606}
            height={9}
            alt="AboutUs"
            src={"/static/images/about-us-car.png"}
            className="h-full object-contain object-left lg:w-full"
          />
        </div>

        <div
          className="about-us-text w-full px-6 lg:w-[60%] lg:p-0 xl:w-[calc(100%-606px)]"
          data-aos="fade-left"
        >
          <div className="text-header ">
            <h2 className=" offer-Heading text-center text-3xl text-black drop-shadow-sm">
              Rent a car now{" "}
              <span className="text-[#223B80]">in your hand.</span> Try it now!
            </h2>
          </div>

          <div className="mt-8 pb-[30px] text-2xl font-semibold  text-[#223B80] lg:mt-4 ">
            <p className="offer-Heading   text-center">
              CUBAGOLDCAR is a travel agency specialized in car rentals in Cuba.
              We provide Car Rental services in Cuba in all cities on the
              island. Our team has been working for years and helping Cubans
              living abroad who need to Rent a Car in Cuba to visit family and
              tourists who want to get to know Cuba. So we know very well how to
              help you during the preparations for your trip to Cuba and above
              all how to guarantee that the service you have contracted is
              really the service you are going to receive when you have arrived
              in Cuba, without surprises or worries.
            </p>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="card-slider-about relative w-[100%] bg-white">
        <div className="outer flex flex-row ">
          <div className="absolute top-[50%] h-full">
            <Image
              width={301}
              height={100}
              alt="carousel"
              className=" h-full object-contain object-left"
              src={"/static/images/Ellipse 2.png"}
            />
          </div>

          <div className="offersub-Heading m-auto flex flex-col justify-center  px-6  pt-[100px] text-center text-[#223B80] lg:px-0">
            <h3 className="text-3xl font-semibold  ">
              What people are saying?
            </h3>
            <p className="text-[20px] font-medium text-black ">
              What our lovely customer sold for our service
            </p>
          </div>

          <div className="absolute right-0 top-[50%] h-full">
            <Image
              width={200}
              height={400}
              alt="carousel"
              className=" h-full object-contain object-right"
              src={"/static/images/Group 3.png"}
            />
          </div>
        </div>

        {/* testominal carousel content */}

        <div className="testominal-carousel mt-28 flex flex-col items-center justify-center px-6 lg:mt-0 lg:flex-row lg:px-0  lg:pb-[160px] lg:pt-[86px]">
          {/* carousel */}
          <div className="flex w-full flex-col items-center lg:w-[calc(100%-35%)]  lg:flex-row">
            <div className="slider-carousel bg-red flex h-auto w-full flex-row sm:w-[calc(100%-48px)] lg:h-[325px]">
              <Carousel setApi={setApiTestino} className="w-full">
                <CarouselContent className="w-full">
                  <CarouselItem
                    data-aos="fade-right"
                    className=" top-4 ml-auto  flex w-full items-center justify-center rounded-[10px] lg:ml-10"
                  >
                    <div className=" h-auto w-full rounded-lg  bg-white p-6 shadow-xl lg:h-[325px] lg:w-auto  lg:p-10 ">
                      <p className="offer-Heading w-full text-[20px] font-semibold  italic leading-[35px]  text-black lg:w-[633px]">
                        RoadTripRent made exploring the city stress-free. The
                        compact car was perfect for navigating tight streets,
                        and the fuel efficiency saved me money. Excellent
                        service, and the return was a snap. Two thumbs up!
                      </p>

                      <p className="mb-5 ml-0 text-[32px] text-[#223B80] lg:ml-10 ">
                        Sophie L
                      </p>
                      <p className="ml-0 text-[#223B80] lg:ml-10  ">
                        City Explorer
                      </p>
                    </div>
                  </CarouselItem>

                  <CarouselItem className=" ml-auto flex w-full items-center justify-center rounded-[10px] lg:ml-10">
                    <div className=" h-auto w-full rounded-lg  bg-white p-6 shadow-xl lg:h-[325px] lg:w-auto lg:p-10 ">
                      <p className="offer-Heading text-[20px] font-semibold italic leading-[35px]  text-black lg:w-[633px]">
                        RoadTripRent made exploring the city stress-free. The
                        compact car was perfect for navigating tight streets,
                        and the fuel efficiency saved me money. Excellent
                        service, and the return was a snap. Two thumbs up!
                      </p>

                      <p className="mb-5 ml-0 text-[32px] text-[#223B80] lg:ml-10 ">
                        Sophie L
                      </p>
                      <p className="ml-0 text-[#223B80] lg:ml-10  ">
                        City Explorer
                      </p>
                    </div>
                  </CarouselItem>

                  <CarouselItem className=" ml-auto flex w-full items-center justify-center rounded-[10px] lg:ml-10">
                    <div className=" h-auto w-full rounded-lg  bg-white p-6 shadow-xl lg:h-[325px] lg:w-auto lg:p-10 ">
                      <p className="offer-Heading text-[20px] font-semibold italic leading-[35px]  text-black lg:w-[633px]">
                        RoadTripRent made exploring the city stress-free. The
                        compact car was perfect for navigating tight streets,
                        and the fuel efficiency saved me money. Excellent
                        service, and the return was a snap. Two thumbs up!
                      </p>

                      <p className="mb-5 ml-0 text-[32px] text-[#223B80] lg:ml-10 ">
                        Sophie L
                      </p>
                      <p className="ml-0 text-[#223B80] lg:ml-10  ">
                        City Explorer
                      </p>
                    </div>
                  </CarouselItem>

                  <CarouselItem className=" ml-auto flex w-full items-center justify-center rounded-[10px] lg:ml-10">
                    <div className=" h-auto w-full rounded-lg  bg-white p-6 shadow-xl lg:h-[325px] lg:w-auto lg:p-10 ">
                      <p className="offer-Heading text-[20px] font-semibold italic leading-[35px]  text-black lg:w-[633px]">
                        RoadTripRent made exploring the city stress-free. The
                        compact car was perfect for navigating tight streets,
                        and the fuel efficiency saved me money. Excellent
                        service, and the return was a snap. Two thumbs up!
                      </p>

                      <p className="mb-5 ml-0 text-[32px] text-[#223B80] lg:ml-10 ">
                        Sophie L
                      </p>
                      <p className="ml-0 text-[#223B80] lg:ml-10  ">
                        City Explorer
                      </p>
                    </div>
                  </CarouselItem>

                  <CarouselItem className=" ml-auto flex w-full items-center justify-center rounded-[10px] lg:ml-10">
                    <div className=" h-auto w-full rounded-lg  bg-white p-6 shadow-xl lg:h-[325px] lg:w-auto lg:p-10 ">
                      <p className="offer-Heading text-[20px] font-semibold italic leading-[35px]  text-black lg:w-[633px]">
                        RoadTripRent made exploring the city stress-free. The
                        compact car was perfect for navigating tight streets,
                        and the fuel efficiency saved me money. Excellent
                        service, and the return was a snap. Two thumbs up!
                      </p>

                      <p className="mb-5 ml-0 text-[32px] text-[#223B80] lg:ml-10 ">
                        Sophie L
                      </p>
                      <p className="ml-0 text-[#223B80] lg:ml-10  ">
                        City Explorer
                      </p>
                    </div>
                  </CarouselItem>

                  <CarouselItem className=" ml-auto flex w-full items-center justify-center rounded-[10px] lg:ml-10">
                    <div className=" h-auto w-full rounded-lg  bg-white p-6 shadow-xl lg:h-[325px] lg:w-auto lg:p-10 ">
                      <p className="offer-Heading text-[20px] font-semibold italic leading-[35px]  text-black lg:w-[633px]">
                        RoadTripRent made exploring the city stress-free. The
                        compact car was perfect for navigating tight streets,
                        and the fuel efficiency saved me money. Excellent
                        service, and the return was a snap. Two thumbs up!
                      </p>

                      <p className="mb-5 ml-0 text-[32px] text-[#223B80] lg:ml-10 ">
                        Sophie L
                      </p>
                      <p className="ml-0 text-[#223B80] lg:ml-10  ">
                        City Explorer
                      </p>
                    </div>
                  </CarouselItem>

                  <CarouselItem className=" ml-auto flex w-full items-center justify-center rounded-[10px] lg:ml-10">
                    <div className=" h-auto w-full rounded-lg  bg-white p-6 shadow-xl lg:h-[325px] lg:w-auto lg:p-10 ">
                      <p className="offer-Heading text-[20px] font-semibold italic leading-[35px]  text-black lg:w-[633px]">
                        RoadTripRent made exploring the city stress-free. The
                        compact car was perfect for navigating tight streets,
                        and the fuel efficiency saved me money. Excellent
                        service, and the return was a snap. Two thumbs up!
                      </p>

                      <p className="mb-5 ml-0 text-[32px] text-[#223B80] lg:ml-10 ">
                        Sophie L
                      </p>
                      <p className="ml-0 text-[#223B80] lg:ml-10  ">
                        City Explorer
                      </p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>

            {/* carousel pointers */}
            <div className="carouselPointers z-10 mt-6 flex h-[8px] w-full flex-row justify-evenly lg:mr-[40px] lg:mt-0  lg:h-auto lg:w-[8px] lg:flex-col lg:items-center">
              <div
                className={`mb-[5px] h-[8px] w-[60px] cursor-pointer   rounded-full lg:h-[50px]  lg:w-[8px] ${
                  activeSlideTestino === 0 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
                }`}
                onClick={() => handleSliderItemClickTestimonial(0)}
              ></div>
              <div
                className={`mb-[5px] h-[8px] w-[60px] cursor-pointer   rounded-full lg:h-[50px]  lg:w-[8px] ${
                  activeSlideTestino === 1 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
                }`}
                onClick={() => handleSliderItemClickTestimonial(1)}
              ></div>
              <div
                className={`mb-[5px] h-[8px] w-[60px] cursor-pointer   rounded-full  lg:h-[50px]  lg:w-[8px] ${
                  activeSlideTestino === 2 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
                }`}
                onClick={() => handleSliderItemClickTestimonial(2)}
              ></div>
              <div
                className={`mb-[5px] h-[8px] w-[60px] cursor-pointer   rounded-full lg:h-[50px]  lg:w-[8px] ${
                  activeSlideTestino === 3 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
                }`}
                onClick={() => handleSliderItemClickTestimonial(3)}
              ></div>
              <div
                className={`mb-[5px] h-[8px] w-[60px] cursor-pointer   rounded-full lg:h-[50px]  lg:w-[8px] ${
                  activeSlideTestino === 4 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
                }`}
                onClick={() => handleSliderItemClickTestimonial(4)}
              ></div>
              <div
                className={`mb-[5px] h-[8px] w-[60px] cursor-pointer   rounded-full lg:h-[50px]  lg:w-[8px] ${
                  activeSlideTestino === 5 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
                }`}
                onClick={() => handleSliderItemClickTestimonial(5)}
              ></div>
              <div
                className={`mb-[5px] h-[8px] w-[60px] cursor-pointer   rounded-full lg:h-[50px]  lg:w-[8px] ${
                  activeSlideTestino === 6 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
                }`}
                onClick={() => handleSliderItemClickTestimonial(6)}
              ></div>
            </div>
          </div>

          {/* testimonial  images */}
          <div className="images-div  hidden h-[370px] w-[35%] flex-row bg-transparent lg:flex">
            <div className="relative w-full lg:w-[336px] ">
              <div className="image1 absolute top-[51px]" data-aos="fade-up">
                <Image
                  width={91}
                  height={91}
                  src={"/static/images/testimonial1.png"}
                  alt="image1"
                />
              </div>

              <div
                className="image2 absolute left-[193px] right-[40px] "
                data-aos="fade-up"
              >
                <Image
                  width={102}
                  height={102}
                  src={"/static/images/testimonial2.png"}
                  alt="image1"
                />
              </div>

              <div
                className="image3  absolute bottom-[154px] left-[276px] top-[155px] "
                data-aos="fade-up"
              >
                <Image
                  width={60}
                  height={60}
                  src={"/static/images/testimonial3.png"}
                  alt="image1"
                />
              </div>

              <div
                className="image4 absolute right-[118px] top-[127px] "
                data-aos="fade-up"
              >
                <Image
                  width={122}
                  height={122}
                  src={"/static/images/testimonial4.png"}
                  alt="image1"
                />
              </div>

              <div
                className="image5 absolute left-[198px] top-[262px]"
                data-aos="fade-up"
              >
                <Image
                  width={107}
                  height={107}
                  src={"/static/images/testimonial5.png"}
                  alt="image1"
                />
              </div>

              <div className="image6 absolute top-[244px]" data-aos="fade-up">
                <Image
                  width={99}
                  height={99}
                  src={"/static/images/testimonial6.png"}
                  alt="image1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}

      <div className="third-section w-[100%] bg-white p-6 lg:p-0  lg:pt-64 ">
        <div className="text-third-section pt-[6px] ">
          <h2
            className="offer-Heading ml-auto text-center text-2xl font-semibold text-[red] lg:ml-[112px] lg:text-left"
            data-aos="fade-down"
          >
            Our strengths are:
          </h2>
          <ul className="ml-auto flex list-disc flex-col items-center justify-center text-center text-base leading-loose text-[#223B80] lg:ml-[110px] lg:block lg:text-left lg:text-[24px] ">
            <li>
              Advice and personalized attention during the reservation phase.{" "}
            </li>
            <li>Office in Havana with 24-hour assistance for any need. </li>
            <li>
              Direct contracts and consolidated relationships with suppliers.
            </li>
            <li>Simple,fast and always updated reservation system.</li>
            <li>90% application confirmation rate.</li>
            <li>
              The best prices! If you find a better price, call us and we will
              agree.
            </li>
          </ul>
        </div>

        <div className="team-banner mt-[50px] flex w-full flex-col items-center justify-center lg:ml-[30px]">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              <CarouselItem
                className=" top-4 ml-auto  flex w-full items-center justify-center rounded-[10px] lg:ml-10 "
                data-aos="zoom-out-left"
              >
                <Image
                  width={1181}
                  height={699}
                  alt="carousel"
                  src={"/static/images/team.png"}
                />
              </CarouselItem>

              <CarouselItem
                data-aos="zoom-out-left"
                className=" ml-auto flex w-full items-center justify-center rounded-[10px] lg:ml-10"
              >
                <Image
                  width={1181}
                  height={699}
                  alt="carousel"
                  src={"/static/images/team.png"}
                />
              </CarouselItem>

              <CarouselItem
                data-aos="zoom-out-left"
                className=" ml-auto flex w-full items-center justify-center rounded-[10px] lg:ml-10"
              >
                <Image
                  width={1181}
                  height={699}
                  alt="carousel"
                  src={"/static/images/team.png"}
                />
              </CarouselItem>

              <CarouselItem
                data-aos="zoom-out-left"
                className=" top-4 ml-auto  flex w-full items-center justify-center rounded-[10px] lg:ml-10"
              >
                <Image
                  width={1181}
                  height={699}
                  alt="carousel"
                  src={"/static/images/team.png"}
                />
              </CarouselItem>

              <CarouselItem
                data-aos="zoom-out-left"
                className=" top-4 ml-auto  flex w-full items-center justify-center rounded-[10px] lg:ml-10"
              >
                <Image
                  width={1181}
                  height={699}
                  alt="carousel"
                  src={"/static/images/team.png"}
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <div className="carouselPointers mt-[20px]  flex flex-row ">
            <div
              className={`mb-[5px] ml-[7px] h-[8px] cursor-pointer  rounded-full ${
                activeSlide === 0
                  ? "w-[50px] bg-[#223B80]"
                  : "w-[33px] bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(0)}
            ></div>

            <div
              className={`mb-[5px] ml-[7px] h-[8px] cursor-pointer  rounded-full ${
                activeSlide === 1
                  ? "w-[50px] bg-[#223B80]"
                  : "w-[33px] bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(1)}
            ></div>
            <div
              className={`mb-[5px] ml-[7px] h-[8px] cursor-pointer  rounded-full ${
                activeSlide === 2
                  ? "w-[50px] bg-[#223B80]"
                  : "w-[33px] bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(2)}
            ></div>
            <div
              className={`mb-[5px] ml-[7px] h-[8px] cursor-pointer  rounded-full ${
                activeSlide === 3
                  ? "w-[50px] bg-[#223B80]"
                  : "w-[33px] bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(3)}
            ></div>
            <div
              className={`mb-[5px] ml-[7px] h-[8px] cursor-pointer  rounded-full ${
                activeSlide === 4
                  ? "w-[50px] bg-[#223B80]"
                  : "w-[33px] bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(4)}
            ></div>
            <div
              className={`mb-[5px] ml-[7px] h-[8px] cursor-pointer  rounded-full ${
                activeSlide === 5
                  ? "w-[50px] bg-[#223B80]"
                  : "w-[33px] bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(5)}
            ></div>
            <div
              className={`mb-[5px] ml-[7px] h-[8px] cursor-pointer  rounded-full ${
                activeSlide === 6
                  ? "w-[50px] bg-[#223B80]"
                  : "w-[33px] bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(6)}
            ></div>
          </div>
        </div>

        <div className="bottom-text m-auto mt-[100px] w-full text-center text-base  text-[#223B80] lg:w-[1020px] lg:text-[24px]">
          <p>
            At CUBAGOLDCAR we work to make your Car Rental experience in Cuba
            the best, we take care of all the details so that you are satisfied,
            whether you book with us again or recommend us to a friend. If you
            would like to request a quote or for any questions or concerns,
            please contact us through our contacts.
          </p>

          <div
            className="red-footer mt-[40px] flex flex-col justify-between lg:flex-row"
            data-aos="fade-right"
          >
            <ul className="offer-Heading w-full list-none text-left text-base text-[#F90000]  lg:text-[24px] lg:leading-normal">
              <li>PHONE: +1 786 7961412 </li>
              <li>WHASTAPP: +1 8143008332</li>
              <li>EMAIL: booking@cubagoldcar.com</li>
            </ul>

            <ul
              className="offer-Heading w-full list-none text-left text-base text-[#F90000]  lg:text-[24px] lg:leading-normal"
              data-aos="fade-right"
            >
              <li>Havana Office-Cuba </li>
              <li>7A and 20 Street</li>
              <li>Miramar – Havana</li>
              <li>Tel +53 72042479</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
