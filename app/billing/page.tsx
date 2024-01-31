"use client"

import Billing from '@/components/Billing/Billing'
import CardDetail from '@/components/Billing/CardDetail'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className='billing p-6 lg:pt-[35px] lg:px-[32px] flex justify-between text-black flex-wrap flex-row flex-col-reverse'>
            <Billing />
            <div className='w-full lg:w-[492px]'>
                <CardDetail />
            </div>
        </div>
    )
}