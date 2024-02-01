import React from 'react'
import { Icons } from '../icons'

type Props = {
  classname?: any;
}

function Rating({ classname }: Props) {
  return (
    <div className={`Rating flex items-center mt-[10px] ${classname}`}>
      <div className='flex w-full mb-1 lg:mb-auto'>
        <Icons.filldedStar className='mr-[2px]' />
        <Icons.filldedStar className='mr-[2px]' />
        <Icons.filldedStar className='mr-[2px]' />
        <Icons.filldedStar className='mr-[2px]' />
        <Icons.blankStar className='mr-[2px]' />
      </div>
      <p className='ml-2 text-[12px] lg:text-[14px] text-[#223B80] w-full'>440+ Reviewer</p>
    </div>
  )
}

export default Rating