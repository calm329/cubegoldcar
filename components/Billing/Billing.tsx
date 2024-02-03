"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import FormCard from "@/components/form/FormCard"
import InputForm from "@/components/form/InputForm"

import { Icons } from "../icons"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"

type Props = {}

function Billing({}: Props) {
  const router = useRouter()
  return (
    <div className="form w-full max-w-full lg:max-w-[calc(100%-492px-34px)]">
      <FormCard
        title={"Billing Info"}
        desc={"Please enter your billing info"}
        rightDec={"Step 1 of 4"}
      >
        <div className="flex w-full flex-wrap items-center justify-between">
          <InputForm
            label="Name"
            inputClasses="bg-[#F6F7F9] text-xs text-[#90A3BF] font-normal "
            placeholder={"Your name"}
          />
          <InputForm
            label="Phone Number"
            inputClasses="bg-[#F6F7F9] text-xs text-[#90A3BF] font-normal "
            placeholder={"Phone number"}
          />
          <InputForm
            label="Address"
            inputClasses="bg-[#F6F7F9] text-xs text-[#90A3BF] font-normal"
            placeholder={"Address"}
          />
          <InputForm
            label="Town / City"
            inputClasses="bg-[#F6F7F9] text-xs text-[#90A3BF] font-normal"
            placeholder={"Town or city"}
          />
        </div>
      </FormCard>
      <FormCard
        title={"Rental Info"}
        desc={"Please select your rental date"}
        rightDec={"Step 2 of 4"}
      >
        <div className="mb-6 flex  items-center">
          <div className="liveIcon mr-2 flex h-3 w-3 items-center  justify-center rounded-full bg-[#fdadad]">
            <div className="aspect-square h-2 w-2 rounded-full bg-[#F90000]"></div>
          </div>
          <p className="font-semibold text-[#223B80] ">Pick - Up</p>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between">
          <InputForm
            label="Locations"
            select
            inputClasses="bg-[#F6F7F9] text-[#90A3BF] font-normal "
            placeholder={"Your name"}
          />
          <InputForm
            label="Date"
            dateSelector
            inputClasses="bg-[#F6F7F9] text-[#90A3BF] font-normal "
          />
          <InputForm
            label="Time"
            select
            inputClasses="bg-[#F6F7F9] text-[#90A3BF] font-normal"
            placeholder={"Select your time"}
          />
        </div>
        <div className="mb-6 flex  items-center">
          <div className="liveIcon mr-2 flex h-3 w-3 items-center  justify-center rounded-full bg-[#fdadad]">
            <div className="aspect-square h-2 w-2 rounded-full bg-[#F90000]"></div>
          </div>
          <p className="font-semibold text-[#223B80] ">Drop - Off</p>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between">
          <InputForm
            label="Locations"
            select
            inputClasses="bg-[#F6F7F9] text-[#90A3BF] font-normal "
            placeholder={"Your name"}
          />
          <InputForm
            label="Date"
            dateSelector
            inputClasses="bg-[#F6F7F9] text-[#90A3BF] font-normal "
          />
          <InputForm
            label="Time"
            select
            inputClasses="bg-[#F6F7F9] text-[#90A3BF] font-normal"
            placeholder={"Select your time"}
          />
        </div>
      </FormCard>
      <FormCard
        title={"Payment Method"}
        desc={"Please enter your payment method"}
        rightDec={"Step 3 of 4"}
      >
        <div className="rounded-[10px] bg-[#F6F7F9] p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className=" flex  items-center">
              <div className="liveIcon mr-2 flex h-3 w-3 items-center  justify-center rounded-full bg-[#fdadad]">
                <div className="aspect-square h-2 w-2 rounded-full bg-[#F90000]"></div>
              </div>
              <p className="font-semibold text-[#223B80] ">Credit Card</p>
            </div>
            <Image
              alt="card name"
              src={"/static/images/visa.png"}
              width={92}
              height={20}
            />
          </div>
          <div className="flex w-full flex-wrap items-center justify-between">
            <InputForm
              label="Card Number"
              inputClasses="bg-[#fff] text-[#90A3BF] font-normal "
              placeholder={"Card number"}
            />
            <InputForm
              label="Expration Date"
              inputClasses="bg-[#fff] text-[#90A3BF] font-normal "
              placeholder={"DD / MM / YY"}
            />
            <InputForm
              label="Card Holder"
              inputClasses="bg-[#fff] text-[#90A3BF] font-normal"
              placeholder={"Card holder"}
            />
            <InputForm
              label="CVC"
              inputClasses="bg-[#fff] text-[#90A3BF] font-normal"
              placeholder={"CVC"}
            />
          </div>
        </div>
        <div className="pb-6">
          <div className="bankTransfer mt-4 flex  items-center justify-between rounded-[10px] bg-[#F6F7F9] px-6 py-2">
            <div className="flex items-center ">
              <Checkbox
                id="terms"
                className="mr-5 h-6 w-6 rounded-full border-black text-black"
              />
              <p className="text-base text-[#223B80]">Bank Transfer</p>
            </div>
            <Image
              alt="banktransferIcon"
              src="/static/images/bankTransferIcon.png"
              width={58}
              height={51}
            />
          </div>
        </div>
      </FormCard>
      <FormCard
        title={"Optional Services"}
        desc={
          "We are getting to the end. Just few clicks and your rental is ready!"
        }
        rightDec={"Step 4 of 4"}
      >
        {/* <div className='pb-6'> */}
        <div className="bankTransfer mt-4 flex  items-center justify-between rounded-[10px] bg-[#F6F7F9] px-6 py-4">
          <div className="flex items-center ">
            <Checkbox
              id="terms"
              className="mr-5 h-6 w-6 border-black text-black"
            />
            <p className="text-base text-[#223B80]">Additional driver</p>
          </div>
        </div>
        <div className="bankTransfer mt-4 flex  items-center justify-between rounded-[10px] bg-[#F6F7F9] px-6 py-4">
          <div className="flex items-center ">
            <Checkbox
              id="terms"
              className="mr-5 h-6 w-6 border-black text-black"
            />
            <p className="text-base text-[#223B80]">Vip assistance</p>
          </div>
        </div>
        <Button
          className="font-PlusJakartaSans my-8 h-14 w-[140px] bg-[#223B80] text-base text-white"
          onClick={() => router.push("/confirmation")}
        >
          Rent Now
        </Button>
        <div className="pb-6">
          <Icons.safeIcon />
          <p className="mb-2 mt-4 text-base font-semibold text-[#223B80]">
            All your data are safe
          </p>
          <p className="text-sm text-[#90A3BF]">
            We are using the most advanced security to provide you the best
            experience ever.
          </p>
        </div>
        {/* </div> */}
      </FormCard>
    </div>
  )
}

export default Billing
