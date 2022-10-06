import { IClient } from '../interfaces/client.interface'
import Client from '../models/client'

const insertClient = async (item: IClient) => {
  const responseInsert = await Client.create(item)
  return responseInsert
}

const getClients = async () => {
  const responseItem = await Client.find({})
  return responseItem
}

const updateClient = async (id: string, data: IClient) => {
  const responseItem = await Client.findOneAndUpdate({ _id: id }, data, {
    new: true
  })
  return responseItem
}

const getClient = async (id: string) => {
  const responseItem = await Client.findOne({ _id: id })
  return responseItem
}

const deleteClient = async (id: string) => {
  const responseItem = await Client.remove({ _id: id })
  return responseItem
}

export { insertClient, getClients, getClient, updateClient, deleteClient }
