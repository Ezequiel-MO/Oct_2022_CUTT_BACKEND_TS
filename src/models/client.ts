import { Schema, model } from 'mongoose'
import { IClient } from '../interfaces/client.interface'

const clientSchema = new Schema<IClient>(
  {
    firstName: {
      type: String,
      required: [true, 'A client must have a name']
    },
    familyName: {
      type: String,
      required: [true, 'A client must have a name']
    },
    email: {
      type: String,
      required: [true, 'A client must have an email'],
      unique: true
    },
    phone: String,
    country: {
      type: String,
      required: [true, 'A client must have a country']
    },
    quoteLanguage: {
      type: String,
      enum: ['EN', 'ES', 'FR', 'DE']
    },
    clientCompany: {
      type: String,
      required: [true, 'A client must have a company']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Client = model('Clients', clientSchema)

export default Client
