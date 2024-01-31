"use client"
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./../ui/select"
import { format } from "date-fns"
import { CalendarIcon } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type Props = {
    classnames?: string;
    title?: string;
}

const ScheduleForm = (props: Props) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <div className={`bg-white m-0 lg:mt-10 rounded-xl ${props.classnames}`}>
            <div className='flex mr-2 items-center'>
                <div className='w-4 mr-2'>
                    <div className='liveIcon flex items-center justify-center bg-[#fdadad] rounded-full'>
                        <div className='bg-[#F90000] h-2 w-2 aspect-square rounded-full'></div>
                    </div>
                </div>
                <p className='font-PlusJakartaSans font-semibold text-base'>{props.title}</p>
            </div>
            <div className='formInputs flex justify-between'>
                <label className=''>
                    <p className='font-PlusJakartaSans font-semibold text-base mt-4'>Locations</p>
                    <Select>
                        <SelectTrigger className="border-none w-4/2">
                            <SelectValue placeholder="Select your city" className='placeholder:text-[#90A3BF] text-xs font-medium' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </label>
                <label className=''>
                    <p className='font-PlusJakartaSans font-semibold text-base mt-4'>Date</p>
                    <Popover>
                        <PopoverTrigger asChild className=''>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    " w-4/2 justify-start text-left font-normal border-none line-clamp-1 whitespace-nowrap",
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
                <label className=''>
                    <p className='font-PlusJakartaSans font-semibold text-base mt-4'>Locations</p>
                    <Select>
                        <SelectTrigger className="border-none w-4/2">
                            <SelectValue placeholder="Select your city" className='placeholder:text-[#90A3BF] text-xs font-medium' />
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