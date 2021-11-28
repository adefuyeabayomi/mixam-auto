const fastifyPlugin = require('fastify-plugin')
async function dbConnector (fastify, options) {  fastify.register(require('fastify-mongodb'),
 {    url: process.env.DB_URL, forceClose: true }) }
// Wrapping a plugin function with fastify-plugin exposes the decorators    
// and hooks, declared inside the plugin to the parent scope. 
module.exports = fastifyPlugin(dbConnector);