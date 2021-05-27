import { getFermentables, getSingleFermentable, addFermentable, updateFermentable, deleteFermentable } from '../../../controllers/fermentablesController.js'

export default async function(fastify, opts) {
    fastify.get('/', opts, getFermentables);
    fastify.get('/:id', opts, getSingleFermentable);
    fastify.post('/', opts, addFermentable);
    fastify.put('/', opts, updateFermentable);
    fastify.delete('/:id', opts, deleteFermentable);
}