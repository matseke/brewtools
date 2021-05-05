/**
 * @param {import ('fastify').FastifyInstance} fastify
 * @param {*} opts
 */

export default async function(fastify, opts) {
    fastify.get('/mats', async function(request, reply) {
        reply.code(200).send('Got to mats route');
    });
}