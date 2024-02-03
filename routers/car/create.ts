import Car from "@/models/car"

import client from "../../lib/db"


let createCarPayload = (val: any) => {
  let obj = {
    // id: "String",
    car_title: val.car_title,
    car_slug: val.car_slug,
    car_desc: val.car_desc,
    car_is_featured: val.car_is_featured,
    car_type: val.car_type,
    car_passengers: val.car_passengers,
    car_doors: val.car_doors,
    car_transmission: val.car_transmission,
    car_baggage: val.car_baggage,
    car_conditioner: val.car_conditioner,
    isBestPrice: val.isBestPrice,
    car_images: val.car_images,
    isActive: val.isActive,
    car_tank: val.car_tank,
    car_address: val.car_address,
    car_latitude: val.car_latitude,
    car_longitude: val.car_longitude,
    car_location: val.car_location,
    car_mapaddress: val.car_mapaddress,
    car_country: val.car_country,
    car_city_address: val.car_city_address,
    car_city: val.car_city,
    car_zip: val.car_zip,
    car_status: val.car_status,
    checkin_offset_days: val.checkin_offset_days,
    price: {
      USD: {
        High: {
          days6: val.usd_high_days6,
          days15: val.usd_high_days15,
          days30: val.usd_high_days30,
          days45: val.usd_high_days45,
        },
        Low: {
          days6: val.usd_low_days6,
          days15: val.usd_low_days15,
          days30: val.usd_low_days30,
          days45: val.usd_low_days45,
        },
      },
      EUR: {
        High: {
          days6: val.eur_high_days6,
          days15: val.eur_high_days15,
          days30: val.eur_high_days30,
          days45: val.eur_high_days45,
        },
        Low: {
          days6: val.eur_low_days6,
          days15: val.eur_low_days15,
          days30: val.eur_low_days30,
          days45: val.eur_low_days45,
        },
      },
    },
  }
  return obj
}
export default async (req: any, res: any) => {
  const clientNew = await client
  const val = await req.json()
  //   const rawBody = await getRawBody(req)
  //   const body = JSON.parse(rawBody.toString())
  let obj = createCarPayload(val)
  try {
    let car = await Car.create(obj)
    return { succes: true, message: "success" }
  } catch (error) {
    console.log(error)

    return { message: "Something went wrong" }
  }
  // .then(() => {
  //   return { succes: true, message: "success" }
  // })
  // .catch((err: any) => {
  //   //   return { error: err, message: "Something went wrong" }
  //   return { message: "Something went wrong" }
  // })
  //   let carObj =  new Car(
  //    )
  //    await carObj.save()
  //    return {carObj: "carObj"}
  //   const db = clientNew.db
  //   const car = await db.collection("car").find({}).toArray()
  //   return car
}
