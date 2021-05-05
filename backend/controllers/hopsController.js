// External Dependancies
import boom from 'boom';

// Get Data Models
import Hops from '../models/Hops.js';

// Get all hops
const getHops = async (req, reply) => {
  try {
    const hops = await Hops.find()
    return hops
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single hops by ID
const getSingleHops = async (req, reply) => {
  try {
    const id = req.params.id
    const hops = await Hops.findById(id)
    return hops
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new hops
const addHops = async (req, reply) => {
  try {
    const hops = new Hops(req.body)
    return hops.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing hops
const updateHops = async (req, reply) => {
  try {
    const id = req.params.id
    const hops = req.body
    const { ...updateData } = hops
    const update = await Hops.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a hops
const deleteHops = async (req, reply) => {
  try {
    const id = req.params.id
    const hops = await Hops.findByIdAndRemove(id)
    return hops
  } catch (err) {
    throw boom.boomify(err)
  }
}
export { getHops, getSingleHops, addHops, updateHops, deleteHops };