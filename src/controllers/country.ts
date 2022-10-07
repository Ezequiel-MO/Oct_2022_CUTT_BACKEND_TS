import * as factory from '../services/factory'
import Country from '../models/country'

const getItem = factory.getOne(Country)
const getItems = factory.getAll(Country)
const updateItem = factory.updateOne(Country)
const postItem = factory.createOne(Country)
const deleteItem = factory.deleteOne(Country)

export { getItem, getItems, updateItem, postItem, deleteItem }
