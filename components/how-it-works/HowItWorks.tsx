import React from "react"
import Image from "next/image"

import { Icons } from "../icons"

type Props = {}

function HowItWorks({}: Props) {
  return (
    <div className="HowItWorks bg-white pt-6">
      <div
        className='rentInHand relative mb-5 w-full bg-[url("/static/images/halfCarImageBlue.png")] bg-contain bg-right-top bg-no-repeat pt-36 sm:mb-0 sm:bg-right sm:pt-0 '
        data-aos="fade-left"
      >
        <h2 className="driveHEading text-medium mb-[15px] p-6 pt-9 text-center text-2xl text-[#2B2B2B] sm:px-8 sm:pb-24 sm:pt-16 sm:text-left sm:text-3xl">
          Rent a car now{" "}
          <span className="text-[#223B80] ">
            in your
            <br className="hidden sm:block" data-aos="fade-right" />
            hand.
          </span>{" "}
          Try it now!
        </h2>
        {/* <Image alt="car" src="/static/images/halfCarImageBlue.png" className='absolute right-0 top-6 sm:top-8 w-1/2 object-contain' width={300} height={300}/> */}
      </div>
      <div className="content p-16 px-6 sm:px-8">
        <h2
          className="driveHEading text-medium mb-[7px] text-center text-2xl text-[#223B80] sm:text-left sm:text-3xl"
          data-aos="flip-right"
        >
          HOW IT WORKS
        </h2>
        <h3 className="driveHEading text-medium mb-8 text-center text-2xl text-[#F90000] sm:text-left sm:text-3xl">
          Follow these steps to rent a car in Cuba:
        </h3>
        <div
          className="mb-6 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left"
          data-aos="fade-right"
        >
          <div className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F90000]">
            <Icons.badgeIcon />
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-[#223B80]">
              Choose Cart:
            </h4>
            <p className="font-Montserrat-Regular text-xl font-medium text-[#223B80]">
              Choose a cart on the site. Availability and
              <br />
              prices visible in real time.
            </p>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          <div className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F90000]">
            <Icons.badgeIcon />
          </div>
          <div data-aos="fade-right">
            <h4 className="text-2xl font-semibold text-[#223B80]">Pay Cart:</h4>
            <p className="font-Montserrat-Regular text-xl  font-medium text-[#223B80]">
              You can pay by credit card, bank transfer,
              <br />
              Zelle and Bitcoin.
            </p>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          <div className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F90000]">
            <Icons.badgeIcon />
          </div>
          <div data-aos="fade-right">
            <h4 className="text-2xl font-semibold text-[#223B80]">
              Download Voucher:
            </h4>
            <p className="font-Montserrat-Regular text-xl font-medium text-[#223B80]">
              Visit the Client portal and download the
              <br />
              reservation voucher
            </p>
          </div>
        </div>
        <div>
          <h3
            data-aos="fade-right"
            className="driveHEading text-medium mb-6 mt-10 text-2xl text-[#F90000] sm:text-left sm:text-3xl"
          >
            More details
          </h3>
          <ol className="list-disc pl-7">
            <li
              data-aos="fade-right"
              data-aos-duration="10"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              On this site you can check the availability and prices of rental
              cars.
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="20"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              All prices include Insurance
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="30"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              60 EUR for the first tank of gasoline are added to the price of
              the car (you can return the car without gasoline)
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="40"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              Picking up the car at an airport costs 25 EUR .
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="50"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              Adding a second driver costs 35 EUR
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="60"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              Returning in a different city costs 35 EUR
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="70"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              You can reserve a car without obligation and we will block it for
              you for 48 hours
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="80"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              You will receive an email with all the details of the reservation
              and instructions to pay
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="90"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              You have 48 hours to pay.
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="100"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              If you do not pay, the reservation is automatically canceled. You
              do not have to do anything.
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="110"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              If you want to finalize the reservation, follow the instructions
              in the email to make the payment. Then, you will receive the
              Voucher.
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="120"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              The VOUCHER is the document that you will need to pick up the car
              in Cuba.
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="130"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              Along with the VOUCHER, you will have to present your passport and
              a driver's license.
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="140"
              className="mb-2 list-disc text-xl font-semibold text-[#223B80] sm:text-2xl"
            >
              Only people between 21 and 80 years old can rent cars.
            </li>
          </ol>
        </div>
      </div>
      <div className='h-[122px] w-full bg-[url("/static/images/termsBottomShade.png")] bg-[length:60%_auto] bg-left-bottom bg-no-repeat pb-9'></div>
    </div>
  )
}

export default HowItWorks
