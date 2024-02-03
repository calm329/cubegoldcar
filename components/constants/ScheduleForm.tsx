"use client"

import React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./../ui/select"

type Props = {
  classnames?: string
  title?: string
}

const ScheduleForm = (props: Props) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div
      className={`m-0 rounded-xl bg-white lg:mt-10 ${props.classnames} overflow-auto `}
    >
      <div className="mr-2 flex items-center">
        <div className="mr-2 w-4">
          <div className="liveIcon flex items-center justify-center rounded-full bg-[#fdadad]">
            <div className="aspect-square h-2 w-2 rounded-full bg-[#F90000]"></div>
          </div>
        </div>
        <p className="font-PlusJakartaSans text-base font-semibold text-black">
          {props.title}
        </p>
      </div>
      <div className="formInputs flex flex-col justify-between sm:flex-row">
        <label className=" flex flex-row justify-between sm:flex-col">
          <p className="font-PlusJakartaSans mt-4 px-3 text-base font-semibold text-black">
            Location
          </p>
          <Select>
            <SelectTrigger className="w-4/2 border-none bg-transparent text-black">
              <SelectValue
                placeholder="Select your city"
                className="text-left  text-xs font-medium text-black placeholder:text-left  placeholder:text-[#90A3BF] "
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </label>
        <label className=" flex flex-row justify-between sm:flex-col">
          <p className="font-PlusJakartaSans mt-4 px-3 text-base font-semibold text-black">
            Date
          </p>
          <Popover>
            <PopoverTrigger asChild className="">
              <Button
                variant={"outline"}
                className={cn(
                  " w-4/2 line-clamp-1 justify-start whitespace-nowrap border-none text-left font-normal text-black",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "d MMM yyyy") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </label>
        <label className=" flex flex-row justify-between sm:flex-col">
          <p className="font-PlusJakartaSans mt-4 px-3 text-base font-semibold text-black">
            Time
          </p>
          <Select>
            <SelectTrigger className="w-4/2 border-none bg-transparent text-black">
              <SelectValue
                placeholder="Select your city"
                className="text-left text-xs font-medium text-black placeholder:text-left placeholder:text-[#90A3BF]"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </label>
      </div>
    </div>
  )
}

export default ScheduleForm
