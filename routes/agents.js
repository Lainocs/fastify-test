'use strict'

module.exports = async function (fastify, opts) {
	fastify.get('/agents', async function (request, reply) {
		return [
			{ id: 1, name: 'John' },
			{ id: 2, name: 'Mary' },
		]
	})

	fastify.get('/agents/:id', async function (request, reply) {
		return { id: request.params.id, name: 'John' }
	})

	fastify.post('/agents', async function (request, reply) {
		const id = Math.ceil(Math.random() * 100)
		return { id, name: request.body.name }
	})

	fastify.put('/agents/:id', async function (request, reply) {
		return { id: request.params.id, name: request.body.name }
	})

	fastify.delete('/agents/:id', async function (request, reply) {
		return { id: request.params.id, name: 'John' }
	})
}
