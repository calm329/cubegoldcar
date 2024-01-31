import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from '../ui/calendar';


type Props = {
    input?: boolean;
    select?: boolean;
    label?: string;
    inputClasses?: string;
    labelClasses?: string;
    placeholder?: string;
    dateSelector?: boolean;
}

export default function InputForm({ input, select, label, inputClasses, labelClasses, placeholder, dateSelector }: Props) {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <label className='InputForm w-full lg:w-[calc(50%-16px)] mb-6'>
            <p className={`text-[#223B80] mb-3 lg:mb-4 text-sm lg:text-base ${labelClasses}`}>{label}</p>
            {select ?
                <Select>
                    <SelectTrigger className={` w-full py-4 px-8 border-none outline-none ${inputClasses} m-0  text-sm leading-6 h-14`}>
                        <SelectValue placeholder={placeholder} className='placeholder:text-[#90A3BF] text-xs font-medium' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
                : dateSelector ?
                    <Popover>
                        <PopoverTrigger asChild className=''>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    " w-4/2 justify-start text-left font-normal border-none line-clamp-1 whitespace-nowrap",
                                    !date && "text-muted-foreground"
                                ) + ` w-full py-4 px-8 border-none outline-none ${inputClasses} m-0  text-sm leading-6 h-14`}
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
                    :
                    <Input className={`py-4 px-8 border-none outline-none ${inputClasses} m-0  text-sm leading-6 h-14`} placeholder={placeholder} />
            }
        </label>
    )
}