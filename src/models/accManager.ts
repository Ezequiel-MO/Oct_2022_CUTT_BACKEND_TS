import { Schema, model } from 'mongoose'
import { IAccManager } from '../interfaces/accManager.interface'

const accManagerSchema = new Schema<IAccManager>(
  {
    firstName: {
      type: String,
      required: [true, 'An Account Manager must have a name'],
      trim: true
    },
    familyName: {
      type: String,
      required: [true, 'An Account Manager must have a name'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'An Account Manager must have an email'],
      unique: true
    },
    imageContentUrl: [String]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

accManagerSchema.methods.setImgUrl = function (files: any[]) {
  const arrImgUrl: any[] = []
  files.forEach((el) => arrImgUrl.push(el.location))
  this.imageContentUrl = arrImgUrl
}

const AccManager = model('AccManagers', accManagerSchema)

export default AccManager
