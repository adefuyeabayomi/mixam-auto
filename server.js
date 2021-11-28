//init dotenv
const dotenv = require("dotenv").config();
//init fastify
const fastify = require("fastify")({logger: true});
//init fastifyfileupload
const fastifyFileUpload = require("fastify-file-upload");
//init fastify static
const fastifyStatic = require("fastify-static");
// init fastify mailer
const fastifyMailer = require("fastify-mailer");
//init fastify cors
const fastifyCors = require("fastify-cors");
// init cloudinary
const cloudinary = require("cloudinary").v2;
//const fastifyPlugin = require("fastify-plugin");
//imoport my custom db handler v1.0.0;
const dbInterface = require("./db/dbhandler");
// import monoclilent from nongodb to pass to my handler
const dbconnnector = require("./db/db-connector");

fastify.register(dbconnnector);

const path = require("path");

const utils = require("./utils/utils");

// register fastify cors 
fastify.register (fastifyCors,{
    origin : true,
    methods : ["GET","POST"],
    credentials : true,
    maxAge : 36000,
});

// register fastify-static.
fastify.register(fastifyStatic,{
    root : path.join(__dirname,'ui-by-cli/dist')
});

// send test mail here

// import routes.
const homeRoute = require("./routes/home");
const authRoute = require("./routes/auth");

//register routes
fastify.register(homeRoute);
fastify.register(authRoute);

// start server.
async function start(){
    try{
        await fastify.listen(process.env.PORT,"0.0.0.0",(err,addr)=>{
            if(err){
                throw err;
            }
            else {
                console.log(`server running on ${addr}`)
            }
        })
    }
    catch (error){
        console.error(error.message);
    }
}
start()
