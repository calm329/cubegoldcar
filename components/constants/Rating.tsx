import React from "react"

import { Icons } from "../icons"

type Props = {
  classname?: any
}

function Rating({ classname }: Props) {
  return (
    <div className={`Rating mt-[10px] flex items-center ${classname}`}>
      <div className="mb-1 flex w-full lg:mb-auto">
        <Icons.filldedStar className="mr-[2px]" />
        <Icons.filldedStar className="mr-[2px]" />
        <Icons.filldedStar className="mr-[2px]" />
        <Icons.filldedStar className="mr-[2px]" />
        <Icons.blankStar className="mr-[2px]" />
      </div>
      <p className="ml-2 w-full text-[12px] text-[#223B80] lg:text-[14px]">
        440+ Reviewer
      </p>
    </div>
  )
}

export default Rating
