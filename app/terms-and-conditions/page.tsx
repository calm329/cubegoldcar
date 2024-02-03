import React from "react"
import Image from "next/image"

import TermsAndCondtions from "@/components/terms-and-condions/TermsAndCondtions"

type Props = {}

function page({}: Props) {
  return (
    <>
      <TermsAndCondtions />
    </>
  )
}

export default page
