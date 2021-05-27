import { getHops, getSingleHops, addHops, updateHops, deleteHops } from '../../../controllers/hopsController.js'

export default async function(fastify, opts) {
    fastify.get('/', opts, getHops);
    fastify.get('/:id', opts, getSingleHops);
    fastify.post('/', opts, addHops);
    fastify.put('/', opts, updateHops);
    fastify.delete('/:id', opts, deleteHops);
}