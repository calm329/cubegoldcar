"use client"

import React from "react"

import { cn } from "@/lib/utils"

import { Checkbox } from "../ui/checkbox"
import { Slider } from "../ui/slider"

type Props = {
  classname?: any
}

function FilterBar({ classname }: Props) {
  return (
    <div
      className={`filterBar ${classname} min-h-screen w-full bg-white p-8`}
      data-aos="fade-up"
    >
      <div className="sidebar">
        <p className="text-xs text-[#90A3BF]">TYPE</p>
        <div>
          <label
            htmlFor="terms"
            className="font-PlusJakartaSans mt-5 flex cursor-pointer items-center text-lg font-medium leading-none text-[#223B80] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Checkbox
              id="terms"
              className="mr-2 aspect-square h-5 w-5 border-2 border-[#90a3bf] border-black text-black data-[state=checked]:border-[#223B80] data-[state=checked]:bg-[#223B80]   "
            />
            Sport <span className="text-[#90a3bf]">&nbsp;(10)</span>
          </label>
          <label
            htmlFor="terms"
            className="font-PlusJakartaSans mt-5 flex cursor-pointer items-center text-lg font-medium leading-none text-[#223B80] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Checkbox
              id="terms"
              className="mr-2 aspect-square h-5 w-5 border-2 border-[#90a3bf] border-black text-black data-[state=checked]:border-[#223B80] data-[state=checked]:bg-[#223B80]   "
            />
            SUV <span className="text-[#90a3bf]">&nbsp;(10)</span>
          </label>

          <label
            htmlFor="terms"
            className="font-PlusJakartaSans mt-5 flex cursor-pointer items-center text-lg font-medium leading-none text-[#223B80] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Checkbox
              id="terms"
              className="mr-2 aspect-square h-5 w-5 border-2 border-[#90a3bf] border-black text-black data-[state=checked]:border-[#223B80] data-[state=checked]:bg-[#223B80]   "
            />
            MPV <span className="text-[#90a3bf]">&nbsp;(10)</span>
          </label>

          <label
            htmlFor="terms"
            className="font-PlusJakartaSans mt-5 flex cursor-pointer items-center text-lg font-medium leading-none text-[#223B80] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Checkbox
              id="terms"
              className="mr-2 aspect-square h-5 w-5 border-2 border-[#90a3bf] border-black text-black data-[state=checked]:border-[#223B80] data-[state=checked]:bg-[#223B80]   "
            />
            Sedan <span className="text-[#90a3bf]">&nbsp;(10)</span>
          </label>

          <label
            htmlFor="terms"
            className="font-PlusJakartaSans mt-5 flex cursor-pointer items-center text-lg font-medium leading-none text-[#223B80] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Checkbox
              id="terms"
              className="mr-2 aspect-square h-5 w-5 border-2 border-[#90a3bf] border-black text-black data-[state=checked]:border-[#223B80] data-[state=checked]:bg-[#223B80]   "
            />
            Coupe <span className="text-[#90a3bf]">&nbsp;(10)</span>
          </label>
          <label
            htmlFor="terms"
            className="font-PlusJakartaSans mt-5 flex cursor-pointer items-center text-lg font-medium leading-none text-[#223B80] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Checkbox
              id="terms"
              className="mr-2 aspect-square h-5 w-5 border-2 border-[#90a3bf] border-black text-black data-[state=checked]:border-[#223B80] data-[state=checked]:bg-[#223B80]   "
            />
            Hatchback <span className="text-[#90a3bf]">&nbsp;(10)</span>
          </label>
        </div>
        <p className="mt-14 text-xs text-[#90A3BF]">CAPACITY</p>
        <div>
          <label
            htmlFor="terms"
            className="font-PlusJakartaSans mt-5 flex cursor-pointer items-center text-lg font-medium leading-none text-[#223B80] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Checkbox
              id="terms"
              className="mr-2 aspect-square h-5 w-5 border-2 border-[#90a3bf] border-black text-black data-[state=checked]:border-[#223B80] data-[state=checked]:bg-[#223B80]   "
            />
            2 Person <span className="text-[#90a3bf]">&nbsp;(10)</span>
          </label>
          <label
            htmlFor="terms"
            className="font-PlusJakartaSans mt-5 flex cursor-pointer items-center text-lg font-medium leading-none text-[#223B80] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Checkbox
              id="terms"
              className="mr-2 aspect-square h-5 w-5 border-2 border-[#90a3bf] border-black text-black data-[state=checked]:border-[#223B80] data-[state=checked]:bg-[#223B80]   "
            />
            4 Person <span className="text-[#90a3bf]">&nbsp;(10)</span>
          </label>

          <label
            htmlFor="terms"
            className="font-PlusJakartaSans mt-5 flex cursor-pointer items-center text-lg font-medium leading-none text-[#223B80] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Checkbox
              id="terms"
              className="mr-2 aspect-square h-5 w-5 border-2 border-[#90a3bf] border-black text-black data-[state=checked]:border-[#223B80] data-[state=checked]:bg-[#223B80]   "
            />
            6 Person <span className="text-[#90a3bf]">&nbsp;(10)</span>
          </label>

          <label
            htmlFor="terms"
            className="font-PlusJakartaSans mt-5 flex cursor-pointer items-center text-lg font-medium leading-none text-[#223B80] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Checkbox
              id="terms"
              className="mr-2 aspect-square h-5 w-5 border-2 border-[#90a3bf] border-black text-black data-[state=checked]:border-[#223B80] data-[state=checked]:bg-[#223B80]   "
            />
            8 or More <span className="text-[#90a3bf]">&nbsp;(10)</span>
          </label>
        </div>
        <p className="mt-14 text-xs text-[#90A3BF]">PRICE</p>
        <div className="w-full">
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-full") + " mt-7"}
            // {...props}
          />
          <p className="mt-3 text-lg text-[#223B80]">Max. $100.00</p>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
