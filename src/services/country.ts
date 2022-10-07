import { ICountry } from '../interfaces/country.interface'
import Country from '../models/country'

const insertCountry = async (item: ICountry) => {
  const responseInsert = await Country.create(item)
  return responseInsert
}

const getCountries = async () => {
  const responseItem = await Country.find({})
  return responseItem
}

const getCountry = async (id: string) => {
  const responseItem = await Country.findOne({ _id: id })
  return responseItem
}

const updateCountry = async (id: string, data: ICountry) => {
  const responseItem = await Country.findOneAndUpdate({ _id: id }, data, {
    new: true
  })
  return responseItem
}

const deleteCountry = async (id: string) => {
  const responseItem = await Country.deleteOne({ _id: id })
  return responseItem
}

export { insertCountry, getCountries, getCountry, updateCountry, deleteCountry }
