import { IClient } from '../interfaces/client.interface'
import Client from '../models/client'

const insertClient = async (item: IClient) => {
  const responseInsert = await Client.create(item)
  return responseInsert
}

/* const getCars = async () => {
  const responseItem = await ItemModel.find({})
  return responseItem
}

const getCar = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id })
  return responseItem
}

const updateCar = async (id: string, data: Car) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true
  })
  return responseItem
}

const deleteCar = async (id: string) => {
  const responseItem = await ItemModel.remove({ _id: id })
  return responseItem
} */

export { insertClient /* , getCars, getCar, updateCar, deleteCar */ }
