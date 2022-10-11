import * as factory from '../services/factory'
import AccManager from '../models/accManager'

const getItem = factory.getOne(AccManager)
const getItems = factory.getAll(AccManager)
const updateItem = factory.updateOne(AccManager)
const postItem = factory.createOne(AccManager)
const deleteItem = factory.deleteOne(AccManager)

export { getItem, getItems, updateItem, postItem, deleteItem }
