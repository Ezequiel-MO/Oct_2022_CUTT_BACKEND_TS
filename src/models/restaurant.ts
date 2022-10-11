import { Schema, model } from 'mongoose'
import { IRestaurant } from '../interfaces/restaurant.interface'
import { transferSchema } from './transfer'

const restaurantSchema = new Schema<IRestaurant>(
  {
    name: {
      type: String,
      required: [true, 'A Restaurant must have a name'],
      minlength: [3, 'A Restaurant Name must have at least 3 characters'],
      unique: true,
      trim: true
    },
    city: String,
    textContent: [String],
    imageContentUrl: [String],
    price: Number,
    location: {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point']
      },
      coordinates: [Number],
      address: String,
      description: String
    },
    introduction: [String],
    isVenue: {
      type: Boolean,
      default: false
    },
    venue_price: [
      {
        rental: Number,
        cocktail_units: Number,
        cocktail_price: Number,
        catering_units: Number,
        catering_price: Number,
        staff_units: Number,
        staff_menu_price: Number,
        audiovisuals: Number,
        cleaning: Number,
        security: Number,
        entertainment: Number
      }
    ],
    transfer: [transferSchema]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

restaurantSchema.methods.setImgUrl = function (files: any[]) {
  const arrImgUrl: any[] = []
  files.forEach((el) => arrImgUrl.push(el.location))
  this.imageContentUrl = arrImgUrl
}

const Restaurant = model('Restaurants', restaurantSchema)

export default Restaurant
