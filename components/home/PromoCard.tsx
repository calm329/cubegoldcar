import React from 'react'

type Props = {
    image?: any;
    text?: any;
    classnames?:any;
}

function PromoCard({ text, image, classnames }: Props) {
    return (
        <div data-aos="flip-right" className={`PromoCard relative w-full lg:w-4/12  justify-center flex pt-9 rounded-[10px] pb-[73px] bg-white ${classnames}`}>
            <div className='bg-[#F90000] shadow-[0px_9px_16px_0px_#f9000031] text-white px-16 py-3 mb-0 w-fit absolute top-[-30px] text-xl lg:text-2xl'><p>Promo Friend</p></div>
            <div className='flex flex-col items-center justify-center ' >
                <img alt='friends' src={image} width={98} height={89} data-aos="fade-down"/>
                {/* <p>{text}</p> */}
                {text}
            </div>
        </div>
    )
}

export default PromoCard