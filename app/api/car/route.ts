import type { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import carCreate from "@/routers/car/create"
import carGet from "@/routers/car/get"

// import nextConnect from 'next-connect';

// const handler = nextConnect();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  let data = await carGet(req, res)
  console.log(data)
  return NextResponse.json(data)
}
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  let data = await carCreate(req, res)

  return NextResponse.json(data)
}
