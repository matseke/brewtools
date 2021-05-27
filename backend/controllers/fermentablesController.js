// External Dependancies
import boom from 'boom';

// Get Data Models
import Fermentables from '../models/Fermentables.js';

// Get all fermentables
const getFermentables = async (req, reply) => {
  try {
    const fermentables = await Fermentables.find()
    return fermentables
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single fermentable by ID
const getSingleFermentable = async (req, reply) => {
  try {
    const id = req.params.id
    const fermentable = await Fermentables.findById(id)
    return fermentable
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new fermentable
const addFermentable = async (req, reply) => {
  try {
    const fermentable = new Fermentables(req.body)
    return fermentable.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing fermentable
const updateFermentable = async (req, reply) => {
  try {
    const id = req.params.id
    const fermentable = req.body
    const { ...updateData } = fermentable
    const update = await Fermentables.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a fermentable
const deleteFermentable = async (req, reply) => {
  try {
    const id = req.params.id
    console.log('Deleting fermentable with id='+id)
    const fermentable = await Fermentables.findByIdAndRemove(id)
    return fermentable
  } catch (err) {
    throw boom.boomify(err)
  }
}
export { getFermentables, getSingleFermentable, addFermentable, updateFermentable, deleteFermentable };