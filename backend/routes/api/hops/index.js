import { getHops, getSingleHops, addHops, updateHops, deleteHops } from '../../../controllers/hopsController.js'

export default async function(fastify, opts) {
    fastify.get('/', opts, getHops);
}