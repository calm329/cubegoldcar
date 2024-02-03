import React, { useEffect, useState } from "react"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

type Props = {}

function CarouselComponent({}: Props) {
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
    setActiveSlide(api.selectedScrollSnap())

    api.on("select", () => {
      setActiveSlide(api.selectedScrollSnap())
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

  return (
    <>
      <Carousel setApi={setApi} className="mb-[38px] w-full">
        <CarouselContent>
          <CarouselItem
            data-aos="fade-right"
            className="flex aspect-[1.37]  w-full items-center justify-center rounded-[10px]"
          >
            <Image
              className="aspect-[1.37] w-full  object-contain"
              alt="car"
              src={"/static/images/car2.png"}
              width={200}
              height={100}
            />
          </CarouselItem>
          <CarouselItem
            data-aos="fade-right"
            className="aspect-[1.37] w-full  rounded-[10px] "
          >
            <Image
              className="aspect-[1.37] h-full w-full "
              alt="car"
              src={"/static/images/intView.png"}
              width={200}
              height={100}
            />
          </CarouselItem>
          <CarouselItem
            data-aos="fade-right"
            className="aspect-[1.37] w-full  rounded-[10px] "
          >
            <Image
              className="aspect-[1.37] h-full w-full "
              alt="car"
              src={"/static/images/intView2.png"}
              width={200}
              height={100}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="carouselImages flex w-full justify-between">
        <div
          className={`w-[calc(33%-12px)] cursor-pointer ${activeSlide === 0 ? "rounded-[10px] border-2 border-[#223B80] p-2" : ""}`}
          onClick={() => handleSliderItemClick(0)}
        >
          <Image
            className="aspect-[1.19] w-full rounded-[10px]"
            src={"/static/images/car2.png"}
            alt="car"
            width={200}
            height={100}
          />
        </div>
        <div
          className={`w-[calc(33%-12px)] cursor-pointer ${activeSlide === 1 ? "rounded-[10px] border-2 border-[#223B80] p-2" : ""}`}
          onClick={() => handleSliderItemClick(1)}
        >
          <Image
            className="aspect-[1.19] w-full rounded-[10px]"
            src={"/static/images/intView.png"}
            alt="car"
            width={200}
            height={100}
          />
        </div>
        <div
          className={`w-[calc(33%-12px)] cursor-pointer ${activeSlide === 2 ? "rounded-[10px] border-2 border-[#223B80] p-2" : ""}`}
          onClick={() => handleSliderItemClick(2)}
        >
          <Image
            className="aspect-[1.19] w-full rounded-[10px]"
            src={"/static/images/intView2.png"}
            alt="car"
            width={200}
            height={100}
          />
        </div>
      </div>
    </>
  )
}

export default CarouselComponent
