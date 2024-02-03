import React from "react"

type Props = {
  children?: any
  title?: any
  desc?: any
  rightDec?: any
}

function FormCard({ children, title, desc, rightDec }: Props) {
  return (
    <div className="FormCard mb-[35px] rounded-[10px] bg-white px-6">
      <div className="title mb-6 lg:mb-8">
        <h3 className="mb-1 pt-6 text-base text-[#223B80] lg:text-xl">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-xs font-normal text-[#90A3BF] lg:text-sm">
            {desc}
          </p>
          <p className="text-xs font-normal text-[#90A3BF] lg:text-sm">
            {rightDec}
          </p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default FormCard
