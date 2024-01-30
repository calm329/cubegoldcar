"use client"

import Billing from '@/components/Billing/Billing'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className='billing pt-[35px] px-[32px] flex justify-between'>
            <Billing />
            <div className='w-[492px]'></div>
        </div>
    )
}