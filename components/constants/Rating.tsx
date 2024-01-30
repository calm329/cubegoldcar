import React from 'react'
import { Icons } from '../icons'

type Props = {}

function Rating({}: Props) {
  return (
    <div className='Rating flex items-center mt-[10px]'>
        <Icons.filldedStar className='mr-[2px]'/>
        <Icons.filldedStar className='mr-[2px]'/>
        <Icons.filldedStar className='mr-[2px]'/>
        <Icons.filldedStar className='mr-[2px]'/>
        <Icons.blankStar className='mr-[2px]'/>
        <p className='mr-2 text-[14px] text-[#223B80]'>440+ Reviewer</p>
    </div>
  )
}

export default Rating