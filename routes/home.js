async function startRoute (fastify,options){
    fastify.get("/",async (request, reply)=>{
        return reply.sendFile('index.html');
    })
}
module.exports = startRoute;