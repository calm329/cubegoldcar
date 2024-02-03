import Car from "@/models/car"

import client from "../../lib/db"

export default async (req: any, res: any) => {
  const clientNew = await client

  // const db = clientNew.db
  const car = await Car.find({})
  return car
}
