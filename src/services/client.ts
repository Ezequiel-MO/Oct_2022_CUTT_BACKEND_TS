import Client from '../models/client'

const deleteClient = async (id: string) => {
  const responseItem = await Client.findByIdAndDelete({ _id: id })
  return responseItem
}

export { deleteClient }
