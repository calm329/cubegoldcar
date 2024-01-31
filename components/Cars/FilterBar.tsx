"use client"
import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Slider } from '../ui/slider'
import { cn } from '@/lib/utils'

type Props = {
    classname?: any;
}

function FilterBar({ classname }: Props) {
    return (
        <div className={`filterBar ${classname} w-full min-h-screen bg-white p-8`}>
            <div className='sidebar'>
                <p className='text-[#90A3BF] text-xs'>TYPE</p>
                <div>
                    <label
                        htmlFor="terms"
                        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center mt-5 text-[#223B80] font-PlusJakartaSans cursor-pointer"
                    >
                        <Checkbox id="terms" className='text-black border-black w-5 h-5 mr-2 aspect-square data-[state=checked]:bg-[#223B80] data-[state=checked]:border-[#223B80] border-[#90a3bf] border-2   ' />
                        Sport <span className='text-[#90a3bf]'>&nbsp;(10)</span>
                    </label>
                    <label
                        htmlFor="terms"
                        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center mt-5 text-[#223B80] font-PlusJakartaSans cursor-pointer"
                    >
                        <Checkbox id="terms" className='text-black border-black w-5 h-5 mr-2 aspect-square data-[state=checked]:bg-[#223B80] data-[state=checked]:border-[#223B80] border-[#90a3bf] border-2   ' />
                        SUV <span className='text-[#90a3bf]'>&nbsp;(10)</span>
                    </label>

                    <label
                        htmlFor="terms"
                        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center mt-5 text-[#223B80] font-PlusJakartaSans cursor-pointer"
                    >
                        <Checkbox id="terms" className='text-black border-black w-5 h-5 mr-2 aspect-square data-[state=checked]:bg-[#223B80] data-[state=checked]:border-[#223B80] border-[#90a3bf] border-2   ' />
                        MPV <span className='text-[#90a3bf]'>&nbsp;(10)</span>
                    </label>

                    <label
                        htmlFor="terms"
                        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center mt-5 text-[#223B80] font-PlusJakartaSans cursor-pointer"
                    >
                        <Checkbox id="terms" className='text-black border-black w-5 h-5 mr-2 aspect-square data-[state=checked]:bg-[#223B80] data-[state=checked]:border-[#223B80] border-[#90a3bf] border-2   ' />
                        Sedan <span className='text-[#90a3bf]'>&nbsp;(10)</span>
                    </label>

                    <label
                        htmlFor="terms"
                        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center mt-5 text-[#223B80] font-PlusJakartaSans cursor-pointer"
                    >
                        <Checkbox id="terms" className='text-black border-black w-5 h-5 mr-2 aspect-square data-[state=checked]:bg-[#223B80] data-[state=checked]:border-[#223B80] border-[#90a3bf] border-2   ' />
                        Coupe <span className='text-[#90a3bf]'>&nbsp;(10)</span>
                    </label>
                    <label
                        htmlFor="terms"
                        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center mt-5 text-[#223B80] font-PlusJakartaSans cursor-pointer"
                    >
                        <Checkbox id="terms" className='text-black border-black w-5 h-5 mr-2 aspect-square data-[state=checked]:bg-[#223B80] data-[state=checked]:border-[#223B80] border-[#90a3bf] border-2   ' />
                        Hatchback <span className='text-[#90a3bf]'>&nbsp;(10)</span>
                    </label>
                </div>
                <p className='text-[#90A3BF] text-xs mt-14'>CAPACITY</p>
                <div>
                    <label
                        htmlFor="terms"
                        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center mt-5 text-[#223B80] font-PlusJakartaSans cursor-pointer"
                    >
                        <Checkbox id="terms" className='text-black border-black w-5 h-5 mr-2 aspect-square data-[state=checked]:bg-[#223B80] data-[state=checked]:border-[#223B80] border-[#90a3bf] border-2   ' />
                        2 Person <span className='text-[#90a3bf]'>&nbsp;(10)</span>
                    </label>
                    <label
                        htmlFor="terms"
                        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center mt-5 text-[#223B80] font-PlusJakartaSans cursor-pointer"
                    >
                        <Checkbox id="terms" className='text-black border-black w-5 h-5 mr-2 aspect-square data-[state=checked]:bg-[#223B80] data-[state=checked]:border-[#223B80] border-[#90a3bf] border-2   ' />
                        4 Person <span className='text-[#90a3bf]'>&nbsp;(10)</span>
                    </label>

                    <label
                        htmlFor="terms"
                        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center mt-5 text-[#223B80] font-PlusJakartaSans cursor-pointer"
                    >
                        <Checkbox id="terms" className='text-black border-black w-5 h-5 mr-2 aspect-square data-[state=checked]:bg-[#223B80] data-[state=checked]:border-[#223B80] border-[#90a3bf] border-2   ' />
                        6 Person <span className='text-[#90a3bf]'>&nbsp;(10)</span>
                    </label>

                    <label
                        htmlFor="terms"
                        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center mt-5 text-[#223B80] font-PlusJakartaSans cursor-pointer"
                    >
                        <Checkbox id="terms" className='text-black border-black w-5 h-5 mr-2 aspect-square data-[state=checked]:bg-[#223B80] data-[state=checked]:border-[#223B80] border-[#90a3bf] border-2   ' />
                        8 or More <span className='text-[#90a3bf]'>&nbsp;(10)</span>
                    </label>
                </div>
                <p className='text-[#90A3BF] text-xs mt-14'>PRICE</p>
                <div className='w-full'>
                    <Slider
                        defaultValue={[50]}
                        max={100}
                        step={1}
                        className={cn("w-full") + ' mt-7'}
                    // {...props}
                    />
                    <p className='text-lg text-[#223B80] mt-3'>Max. $100.00</p>
                </div>
            </div>
        </div>
    )
}

export default FilterBar