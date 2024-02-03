import React, { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import { Input } from "../ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

type Props = {
  input?: boolean
  select?: boolean
  label?: string
  inputClasses?: string
  labelClasses?: string
  placeholder?: string
  dateSelector?: boolean
}

export default function InputForm({
  input,
  select,
  label,
  inputClasses,
  labelClasses,
  placeholder,
  dateSelector,
}: Props) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <label className="InputForm mb-6 w-full lg:w-[calc(50%-16px)]">
      <p
        className={`mb-3 text-sm text-[#223B80] lg:mb-4 lg:text-base ${labelClasses}`}
      >
        {label}
      </p>
      {select ? (
        <Select>
          <SelectTrigger
            className={` w-full border-none px-8 py-4 outline-none ${inputClasses} m-0  h-14 text-sm leading-6`}
          >
            <SelectValue
              placeholder={placeholder}
              className="text-xs font-medium placeholder:text-[#90A3BF]"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      ) : dateSelector ? (
        <Popover>
          <PopoverTrigger asChild className="">
            <Button
              variant={"outline"}
              className={
                cn(
                  " w-4/2 line-clamp-1 justify-start whitespace-nowrap border-none text-left font-normal",
                  !date && "text-muted-foreground"
                ) +
                ` w-full border-none px-8 py-4 outline-none ${inputClasses} m-0  h-14 text-sm leading-6`
              }
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
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
      ) : (
        <Input
          className={`border-none px-8 py-4 outline-none ${inputClasses} m-0  h-14 text-sm leading-6`}
          placeholder={placeholder}
        />
      )}
    </label>
  )
}
