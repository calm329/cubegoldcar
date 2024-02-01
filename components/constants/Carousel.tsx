import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import Image from 'next/image'

type Props = {}

function CarouselComponent({ }: Props) {
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
        setActiveSlide(api.selectedScrollSnap() )

        api.on("select", () => {
            setActiveSlide(api.selectedScrollSnap() )
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const handleSliderItemClick = (index: number) => {
        if (api) {
            setActiveSlide(index)
            // Move the slider to the clicked item
            api.scrollTo(index);
            setCurrent(index + 1);
        }
    };

    return (
        <>
            <Carousel setApi={setApi} className='w-full mb-[38px]'>
                <CarouselContent>
                    <CarouselItem  data-aos="fade-right" className="w-full aspect-[1.37]  rounded-[10px] flex items-center justify-center">
                        <Image className='w-full aspect-[1.37]  object-contain' alt='car' src={'/static/images/car2.png'} width={200} height={100} />
                    </CarouselItem>
                    <CarouselItem  data-aos="fade-right"className="w-full aspect-[1.37]  rounded-[10px] ">
                        <Image className='w-full h-full aspect-[1.37] ' alt='car' src={'/static/images/intView.png'} width={200} height={100} />
                    </CarouselItem>
                    <CarouselItem  data-aos="fade-right"className="w-full aspect-[1.37]  rounded-[10px] ">
                        <Image className='w-full h-full aspect-[1.37] ' alt='car' src={'/static/images/intView2.png'} width={200} height={100} />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            <div className='carouselImages flex justify-between w-full'>
                <div className={`w-[calc(33%-12px)] cursor-pointer ${activeSlide === 0 ? 'p-2 border-[#223B80] border-2 rounded-[10px]' : ''}`} onClick={() => handleSliderItemClick(0)}>
                    <Image className='rounded-[10px] w-full aspect-[1.19]' src={'/static/images/car2.png'} alt='car' width={200} height={100} />
                </div>
                <div className={`w-[calc(33%-12px)] cursor-pointer ${activeSlide === 1 ? 'p-2 border-[#223B80] border-2 rounded-[10px]' : ''}`} onClick={() => handleSliderItemClick(1)}>
                    <Image className='rounded-[10px] w-full aspect-[1.19]' src={'/static/images/intView.png'} alt='car' width={200} height={100} />
                </div>
                <div className={`w-[calc(33%-12px)] cursor-pointer ${activeSlide === 2 ? 'p-2 border-[#223B80] border-2 rounded-[10px]' : ''}`} onClick={() => handleSliderItemClick(2)}>
                    <Image className='rounded-[10px] w-full aspect-[1.19]' src={'/static/images/intView2.png'} alt='car' width={200} height={100} />
                </div>
            </div>
        </>
    )
}

export default CarouselComponent