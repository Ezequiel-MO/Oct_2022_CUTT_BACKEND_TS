import { Schema, model } from 'mongoose'
import { ITransfer } from '../interfaces/transfer.interface'

const transferSchema = new Schema<ITransfer>(
  {
    city: String,
    company: {
      type: String,
      trim: true
    },
    transfer_in_out: Number,
    dispo_4h: Number,
    hextra: Number,
    hextra_night: Number,
    dispo_5h_out: Number,
    dispo_4h_airport: Number,
    dispo_4h_night: Number,
    transfer_in_out_night: Number,
    dispo_6h_night: Number,
    vehicleType: String,
    vehicleCapacity: Number,
    selectedService: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

transferSchema.methods.setImgUrl = function (files: any[]) {
  const arrImgUrl: any[] = []
  files.forEach((el) => arrImgUrl.push(el.location))
  this.imageContentUrl = arrImgUrl
}

const Transfer = model('Transfers', transferSchema)

export { Transfer, transferSchema }
