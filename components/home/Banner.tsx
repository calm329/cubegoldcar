"use client"

import React, { useState } from "react"

import { addTodo } from "@/lib/features/todos/todosSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"

type Props = {}

function Banner({}: Props) {
  const dispatch = useAppDispatch()
  const [data, setData] = useState()
  const todos = useAppSelector((state) => state.todoSlice.todos)
  return (
    <section
      className="firstSection w-full h-screen hidden lg:flex items-center mb-11"
      style={{
        backgroundImage: `url(/static/images/background.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      data-aos="fade-in"
    >
      <div className="flex max-w-[980px] flex-col items-start gap-2 px-8">
        <div className="">
          <p
            className="driveHEading text-[64px]"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            data-aos="fade-down"
            onClick={() => {
              console.log(todos, "todos")
            }}
          >
            Drive the Experience:
            <br />
            Your Journey, Your Car, <br />
            Your Way!
          </p>
          <input type="file" onChange={(ev) => console.log(ev.target.files)} />
          <button
            data-aos="zoom-out"
            className="bg-[#F90000] w-[120px] h-11 text-[16px] text-white mt-[38px] rounded-sm"
            onClick={() => {
              dispatch(addTodo({ data: { id: 1, text: "hello world" } }))
            }}
          >
            Rental Car
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner
