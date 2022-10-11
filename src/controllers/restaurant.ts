import * as factory from '../services/factory'
import Restaurant from '../models/restaurant'

const getItem = factory.getOne(Restaurant)
const getItems = factory.getAll(Restaurant)
const updateItem = factory.updateOne(Restaurant)
const postItem = factory.createOne(Restaurant)
const deleteItem = factory.deleteOne(Restaurant)

export { getItem, getItems, updateItem, postItem, deleteItem }
