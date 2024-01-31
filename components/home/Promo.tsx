import React from 'react'
import PromoCard from './PromoCard'

type Props = {}

function Promo({ }: Props) {
    return (
        <div className='Promo w-full p-6 lg:p-0 lg:w-[calc(100%-130px)] my-0 mx-auto flex justify-between items-center flex-col'>
            <div className='offerHeading mt-[52px] text-center'>
                <h2 className='offerHeading text-3xl lg:text-5xl font-semibold text-[#223B80]'>Gold Services</h2>
            </div>
            <div className='flex flex-col lg:flex-row justify-around w-full mt-[77px] mb-7'>
                <PromoCard
                    classnames="mb-14"
                    image={'/static/images/friends.png'}
                    text={
                        <p className='font-semibold text-base lg:text-2xl text-[#223B80] text-center'>Support during <br /> car Pick-up at <br /> all office in <br /> Cuba
                        </p>
                    }
                />
                <PromoCard
                    classnames=""
                    image={'/static/images/bitcoin.png'}
                    text={
                        <p className='font-semibold text-base lg:text-2xl text-[#223B80] text-center'>First fuel tank included & guranteed

                        </p>
                    }
                />
            </div>
        </div>
    )
}

export default Promo