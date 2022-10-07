import { Schema, Types, model, Model } from 'mongoose'
import { Car } from '../interfaces/car.interface'
import { ICountry } from '../interfaces/country.interface'

const countrySchema = new Schema<ICountry>(
  {
    name: {
      type: String,
      required: [true, 'A country must have a denomination'],
      unique: true
    },
    accessCode: {
      type: String,
      required: [true, 'A country must have an access code']
    },
    quoteLanguage: {
      type: String,
      enum: ['EN', 'ES', 'FR', 'DE']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Country = model('Countries', countrySchema)

export default Country
