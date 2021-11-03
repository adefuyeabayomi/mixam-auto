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
cloudinary.config({ 
  cloud_name: 'mixam', 
  api_key: '157387573584254', 
  api_secret: 'f9b7Qm_MNw7Xgg2OH-HCO2OxsMw' 
});
//const fastifyPlugin = require("fastify-plugin");
//imoport my custom db handler v1.0.0;
const dbInterface = require("./db/dbhandler");
// import monoclilent from nongodb to pass to my handler
const { MongoClient } = require("mongodb");
const dbOptions = {
    dbname : "main@mixam",
    url : process.env.DB_URL,
    options : { 
        useUnifiedTopology: true 
    }
}
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

// register fastify mailer 
fastify.register(fastifyMailer,{
    defaults : {
        from : "Mixam <mixam.com>"
    },
    transport : {
        service: "gmail",
        auth : {
            user : "adefuyeabayomi16@gmail.com",
            pass : "youarestupid"
        }
    }
});

// send test mail here

// import routes.
const homeRoute = require("./routes/home");
const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");
const forgotpasswordRoute = require("./routes/forgotpassword");

//register routes
fastify.register(homeRoute);
fastify.register(loginRoute,{client : MongoClient,dbOptions,dbHandler : dbInterface});
fastify.register(signupRoute,{client : MongoClient,dbOptions,dbHandler : dbInterface});
fastify.register(forgotpasswordRoute,{ client : MongoClient,dbOptions,dbHandler : dbInterface, generatePassword: utils.generatePassword})

// start server.
async function start(){
    try{
        await fastify.listen(80,(err,addr)=>{
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
start();
