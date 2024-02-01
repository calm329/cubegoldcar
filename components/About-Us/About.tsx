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
  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
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

  const handleSliderItemClickTestimonial = (index: number) => {
    if (api) {
      setActiveSlide(index)
      // Move the slider to the clicked item
      api.scrollTo(index)
      setCurrent(index + 1)
    }
  }
  return (
    <>
      {/* first section */}
      <div className=" flex flex-row ">
        <div className="billing pt-[13px] px-[3px] flex justify-between about-us-image h-[90%]" data-aos="fade-right" data-aos-offset="200">
          <Image
            width={660}
            height={9}
            alt="AboutUs"
            src={"/static/images/about-us-car.png"}
          />
        </div>

        <div className="about-us-text " data-aos="fade-left">
          <div className="text-header w-[500px] h-[93px] ">
            <h2 className=" text-black drop-shadow-sm text-[48px] pt-[100px] offer-Heading">
              Rent a car now{" "}
              <span className="text-[#223B80]">in your hand.</span> Try it now!
            </h2>
          </div>

          <div className="w-[739px]  pt-[200px] pb-[30px] text-[#223B80]  font-semibold text-[36px] leading-[43.88px]">
            <p className="offer-Heading  ">
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
      <div className="card-slider-about bg-white w-[100%] ">
        <div className="outer flex flex-row relative">
          <div className="absolute">
            <Image
              width={301}
              height={100}
              alt="carousel"
              src={"/static/images/Ellipse 2.png"}
            />
          </div>

          <div className="offersub-Heading pt-[100px] m-auto  text-[#223B80]  flex justify-center flex-col text-center">
            <h3 className="text-[48px] font-semibold  ">
              What people are saying?
            </h3>
            <p className="text-[20px] text-black font-medium ">
              What our lovely customer sold for our service
            </p>
          </div>

          <div className="absolute right-0">
            <Image
              width={200}
              height={400}
              alt="carousel"
              src={"/static/images/Group 3.png"}
            />
          </div>
        </div>

        {/* testominal carousel content */}

        <div className="testominal-carousel flex flex-row justify-center items-center mt-[86px] mb-[160px]">
          {/* carousel */}

          <div className="slider-carousel flex flex-row bg-red w-[761px] h-[325px]">
            <Carousel setApi={setApi} className="w-full ">
              <CarouselContent>
                <CarouselItem
                  data-aos="fade-right"
                  className=" w-full rounded-[10px]  flex items-center justify-center ml-10 top-4"
                >
                  <div className=" bg-white  h-[325px] rounded-lg  shadow-xl ">
                    <p className="text-black italic offer-Heading font-semibold m-10 w-[633px] h-[119px] text-[20px] leading-[35px]">
                      RoadTripRent made exploring the city stress-free. The
                      compact car was perfect for navigating tight streets, and
                      the fuel efficiency saved me money. Excellent service, and
                      the return was a snap. Two thumbs up!
                    </p>

                    <p className="text-[#223B80] text-[32px] ml-10 mb-5 ">
                      Sophie L
                    </p>
                    <p className="text-[#223B80] ml-10  ">City Explorer</p>
                  </div>
                </CarouselItem>

                <CarouselItem className=" w-full rounded-[10px] flex items-center justify-center ml-10">
                  <div className=" bg-white  h-[325px] rounded-lg  shadow-xl ">
                    <p className="text-black italic offer-Heading font-semibold m-10 w-[633px] h-[119px] text-[20px] leading-[35px]">
                      RoadTripRent made exploring the city stress-free. The
                      compact car was perfect for navigating tight streets, and
                      the fuel efficiency saved me money. Excellent service, and
                      the return was a snap. Two thumbs up!
                    </p>

                    <p className="text-[#223B80] text-[32px] ml-10 mb-5 ">
                      Sophie L
                    </p>
                    <p className="text-[#223B80] ml-10  ">City Explorer</p>
                  </div>
                </CarouselItem>

                <CarouselItem className=" w-full rounded-[10px] flex items-center justify-center ml-10">
                  <div className=" bg-white  h-[325px] rounded-lg  shadow-xl ">
                    <p className="text-black italic offer-Heading font-semibold m-10 w-[633px] h-[119px] text-[20px] leading-[35px]">
                      RoadTripRent made exploring the city stress-free. The
                      compact car was perfect for navigating tight streets, and
                      the fuel efficiency saved me money. Excellent service, and
                      the return was a snap. Two thumbs up!
                    </p>

                    <p className="text-[#223B80] text-[32px] ml-10 mb-5 ">
                      Sophie L
                    </p>
                    <p className="text-[#223B80] ml-10  ">City Explorer</p>
                  </div>
                </CarouselItem>

                <CarouselItem className=" w-full rounded-[10px] flex items-center justify-center ml-10">
                  <div className=" bg-white  h-[325px] rounded-lg  shadow-xl ">
                    <p className="text-black italic offer-Heading font-semibold m-10 w-[633px] h-[119px] text-[20px] leading-[35px]">
                      RoadTripRent made exploring the city stress-free. The
                      compact car was perfect for navigating tight streets, and
                      the fuel efficiency saved me money. Excellent service, and
                      the return was a snap. Two thumbs up!
                    </p>

                    <p className="text-[#223B80] text-[32px] ml-10 mb-5 ">
                      Sophie L
                    </p>
                    <p className="text-[#223B80] ml-10  ">City Explorer</p>
                  </div>
                </CarouselItem>

                <CarouselItem className=" w-full rounded-[10px] flex items-center justify-center ml-10">
                  <div className=" bg-white  h-[325px] rounded-lg  shadow-xl ">
                    <p className="text-black italic offer-Heading font-semibold m-10 w-[633px] h-[119px] text-[20px] leading-[35px]">
                      RoadTripRent made exploring the city stress-free. The
                      compact car was perfect for navigating tight streets, and
                      the fuel efficiency saved me money. Excellent service, and
                      the return was a snap. Two thumbs up!
                    </p>

                    <p className="text-[#223B80] text-[32px] ml-10 mb-5 ">
                      Sophie L
                    </p>
                    <p className="text-[#223B80] ml-10  ">City Explorer</p>
                  </div>
                </CarouselItem>

                <CarouselItem className=" w-full rounded-[10px] flex items-center justify-center ml-10">
                  <div className=" bg-white  h-[325px] rounded-lg  shadow-xl ">
                    <p className="text-black italic offer-Heading font-semibold m-10 w-[633px] h-[119px] text-[20px] leading-[35px]">
                      RoadTripRent made exploring the city stress-free. The
                      compact car was perfect for navigating tight streets, and
                      the fuel efficiency saved me money. Excellent service, and
                      the return was a snap. Two thumbs up!
                    </p>

                    <p className="text-[#223B80] text-[32px] ml-10 mb-5 ">
                      Sophie L
                    </p>
                    <p className="text-[#223B80] ml-10  ">City Explorer</p>
                  </div>
                </CarouselItem>

                <CarouselItem className=" w-full rounded-[10px] flex items-center justify-center ml-10">
                  <div className=" bg-white  h-[325px] rounded-lg  shadow-xl ">
                    <p className="text-black italic offer-Heading font-semibold m-10 w-[633px] h-[119px] text-[20px] leading-[35px]">
                      RoadTripRent made exploring the city stress-free. The
                      compact car was perfect for navigating tight streets, and
                      the fuel efficiency saved me money. Excellent service, and
                      the return was a snap. Two thumbs up!
                    </p>

                    <p className="text-[#223B80] text-[32px] ml-10 mb-5 ">
                      Sophie L
                    </p>
                    <p className="text-[#223B80] ml-10  ">City Explorer</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          {/* carousel pointers */}
          <div className="carouselPointers flex  flex-col h-[325px] mr-[40px]">
            <div
              className={`w-[8px] h-[50px]   mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 0 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClickTestimonial(0)}
            ></div>
            <div
              className={`w-[8px] h-[50px]   mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 1 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClickTestimonial(1)}
            ></div>
            <div
              className={`w-[8px] h-[50px]   mb-[5px]  cursor-pointer  rounded-full ${
                activeSlide === 2 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClickTestimonial(2)}
            ></div>
            <div
              className={`w-[8px] h-[50px]   mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 3 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClickTestimonial(3)}
            ></div>
            <div
              className={`w-[8px] h-[50px]   mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 4 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClickTestimonial(4)}
            ></div>
            <div
              className={`w-[8px] h-[50px]   mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 5 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClickTestimonial(5)}
            ></div>
            <div
              className={`w-[8px] h-[50px]   mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 6 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClickTestimonial(6)}
            ></div>
          </div>

          {/* testimonial  images */}
          <div className="images-div flex flex-row ml-[40px] relative bg-transparent w-[336px] h-[370px]">
            <div className="image1 absolute top-[51px]" data-aos="fade-up">
              <Image
                width={91}
                height={91}
                src={"/static/images/testimonial1.png"}
                alt="image1"
              />
            </div>

            <div
              className="image2 absolute right-[40px] left-[193px] "
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
              className="image3  absolute top-[155px] left-[276px] bottom-[154px] "
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
              className="image4 absolute top-[127px] right-[118px] "
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

      {/* third section */}

      <div className="bg-white w-[100%] third-section">
        <div className="text-third-section mt-[6px] ">
          <h2 className="text-[red] text-[36px] offer-Heading font-semibold text-left ml-[112px]" data-aos="fade-down">
            Our strengths are:
          </h2>
          <ul className="list-disc text-[#223B80] text-left ml-[110px] text-[24px] leading-loose">
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

        <div className="team-banner ml-[30px] mt-[50px] flex flex-col justify-center items-center">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              <CarouselItem className=" w-full rounded-[10px]  flex items-center justify-center ml-10 top-4 " data-aos="zoom-out-left">
                <Image
                  width={1181}
                  height={699}
                  alt="carousel"
                  src={"/static/images/team.png"}
                />
              </CarouselItem>

              <CarouselItem  data-aos="zoom-out-left"  className=" w-full rounded-[10px] flex items-center justify-center ml-10">
                <Image
                  width={1181}
                  height={699}
                  alt="carousel"
                  src={"/static/images/team.png"}
                />
              </CarouselItem>

              <CarouselItem  data-aos="zoom-out-left" className=" w-full rounded-[10px] flex items-center justify-center ml-10">
                <Image
                  width={1181}
                  height={699}
                  alt="carousel"
                  src={"/static/images/team.png"}
                />
              </CarouselItem>

              <CarouselItem  data-aos="zoom-out-left" className=" w-full rounded-[10px]  flex items-center justify-center ml-10 top-4">
                <Image
                  width={1181}
                  height={699}
                  alt="carousel"
                  src={"/static/images/team.png"}
                />
              </CarouselItem>

              <CarouselItem data-aos="zoom-out-left"  className=" w-full rounded-[10px]  flex items-center justify-center ml-10 top-4">
                <Image
                  width={1181}
                  height={699}
                  alt="carousel"
                  src={"/static/images/team.png"}
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <div className="carouselPointers flex  flex-row mt-[20px] ">
            <div
              className={`h-[8px] w-[50px] ml-[7px] mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 0 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(0)}
            ></div>

            <div
              className={`h-[8px] w-[50px] ml-[7px] mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 1 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(1)}
            ></div>
            <div
              className={`h-[8px] w-[50px] ml-[7px] mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 2 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(2)}
            ></div>
            <div
              className={`h-[8px] w-[50px] ml-[7px] mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 3 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(3)}
            ></div>
            <div
              className={`h-[8px] w-[50px] ml-[7px] mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 4 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(4)}
            ></div>
            <div
              className={`h-[8px] w-[50px] ml-[7px] mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 5 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(5)}
            ></div>
            <div
              className={`h-[8px] w-[50px] ml-[7px] mb-[5px] cursor-pointer  rounded-full ${
                activeSlide === 6 ? "bg-[#223B80]" : "bg-[#E8E8E8]"
              }`}
              onClick={() => handleSliderItemClick(6)}
            ></div>
          </div>
        </div>

        <div className="bottom-text mt-[100px] text-center text-[#223B80] text-[24px] w-[1020px] m-auto">
          <p>
            At CUBAGOLDCAR we work to make your Car Rental experience in Cuba
            the best, we take care of all the details so that you are satisfied,
            whether you book with us again or recommend us to a friend. If you
            would like to request a quote or for any questions or concerns,
            please contact us through our contacts.
          </p>

          <div className="red-footer flex flex-row justify-between mt-[40px]" data-aos="fade-right">
            <ul className="list-none text-[#F90000] offer-Heading text-left text-[24px] leading-normal">
              <li>PHONE: +1 786 7961412 </li>
              <li>WHASTAPP: +1 8143008332</li>
              <li>EMAIL: booking@cubagoldcar.com</li>
            </ul>

            <ul className="list-none text-[#F90000] offer-Heading text-left text-[24px] leading-normal" data-aos="fade-right">
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
