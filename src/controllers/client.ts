import * as factory from '../services/factory'
import Client from '../models/client'

const getItem = factory.getOne(Client)
const getItems = factory.getAll(Client)
const updateItem = factory.updateOne(Client)
const postItem = factory.createOne(Client)
const deleteItem = factory.deleteOne(Client)

export { getItem, getItems, updateItem, postItem, deleteItem }
