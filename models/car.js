import mongoose from "mongoose"

const carSchema = new mongoose.Schema({
  //   id: mongoose,
  car_title: String,
  car_slug: String,
  car_desc: String,
  car_is_featured: String,
  car_type: String,
  car_passengers: Number,
  car_doors: Number,
  car_transmission: String,
  car_baggage: String,
  car_conditioner: Boolean,
  isBestPrice: Boolean,
  isActive: Boolean,
  car_tank: String,
  car_address: String,
  car_latitude: String,
  car_longitude: String,
  car_location: String,
  car_mapaddress: String,
  car_country: String,
  car_city_address: String,
  car_city: String,
  car_images: Array,
  car_zip: String,
  car_status: String,
  checkin_offset_days: Number,
  price: {
    USD: {
      High: {
        days6: Number,
        days15: Number,
        days30: Number,
        days45: Number,
      },
      Low: {
        days6: Number,
        days15: Number,
        days30: Number,
        days45: Number,
      },
    },
    EUR: {
      High: {
        days6: Number,
        days15: Number,
        days30: Number,
        days45: Number,
      },
      Low: {
        days6: Number,
        days15: Number,
        days30: Number,
        days45: Number,
      },
    },
  },
})
// const carSchema = new mongoose.Schema({
//   hello: String,
// })
const Car = mongoose.models.Car || mongoose.model("Car", carSchema)
export default Car
