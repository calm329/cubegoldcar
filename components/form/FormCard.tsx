import React from 'react'

type Props = {
    children?: any;
    title?: any;
    desc?: any;
    rightDec?: any;
}

function FormCard({ children, title, desc, rightDec }: Props) {
    return (
        <div className='FormCard bg-white rounded-[10px] px-6 mb-[35px]'>
            <div className='title mb-6 lg:mb-8'>
                <h3 className='text-[#223B80] text-base lg:text-xl mb-1 pt-6'>{title}</h3>
                <div className='flex items-center justify-between'>
                    <p className='text-xs lg:text-sm text-[#90A3BF] font-normal'>{desc}</p>
                    <p className='text-xs lg:text-sm text-[#90A3BF] font-normal'>{rightDec}</p>
                </div>
            </div>
            {children}
        </div>
    )
}

export default FormCard