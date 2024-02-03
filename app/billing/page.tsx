"use client"

import React from "react"

import Billing from "@/components/Billing/Billing"
import CardDetail from "@/components/Billing/CardDetail"

type Props = {}

export default function page({}: Props) {
  return (
    <div className="billing flex flex-row flex-col-reverse flex-wrap justify-between p-6 text-black lg:px-[32px] lg:pt-[35px]">
      <Billing />
      <div className="w-full lg:w-[492px]">
        <CardDetail />
      </div>
    </div>
  )
}
