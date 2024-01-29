import React from 'react'
import PromoCard from './PromoCard'

type Props = {}

function Promo({ }: Props) {
    return (
        <div className='Promo w-[calc(100%-130px)] my-0 mx-auto flex justify-between items-center flex-col'>
            <div className='offerHeading mt-[52px] text-center'>
                <h2 className='offerHeading text-5xl font-semibold text-[#223B80]'>PROMO</h2>
            </div>
            <div className='flex justify-around w-full mt-[77px] mb-7'>
                <PromoCard
                    image={'/static/images/friends.png'}
                    text={
                        <p className='font-semibold text-[26.54px] text-[#223B80] text-center'>$50 for you
                            <br />
                            -
                            <br />
                            $25 for him
                        </p>
                    }
                />
                <PromoCard
                    image={'/static/images/bitcoin.png'}
                    text={
                        <p className='font-semibold text-[26.54px] text-[#223B80] text-center'>You save 10%
                            <br />
                            -
                            <br />
                            Quick Confirmation
                        </p>
                    }
                />
            </div>
        </div>
    )
}

export default Promo