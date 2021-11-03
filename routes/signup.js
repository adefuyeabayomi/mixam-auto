async function signup (fastify,options){ // db and mailer mongoClient and the dbOptions
        fastify.get("/apiservice/signup",async (request,reply)=>{
            let dbClient = new options.client(options.dbOptions.url,options.dbOptions.options);
            let handler = new options.dbHandler(dbClient,options.dbOptions);
            let collection = "accountInformation";
            let email = request.query.email;
            let password = request.query.password;
            let id = email + String(Math.round(Math.random()*10000)) +"MID";
            let dbOptions = {
                collection, 
                document : {
                    email,
                    password,
                    __mid: id,
                }
            }
            let userAdded = await handler.addEntry(dbOptions);
            if(userAdded){
              let replyObj = {
                            success: true,
                            email,
                            password,
                            __mid : dbOptions.id,
                            responseMessage : "Successfully added user " + email + " to mixam database"
                        };
                        reply.code(200);
                        reply.header("Content-Type", "application/json; charset=utf-8");
                        reply.send(JSON.stringify(replyObj));
                        console.log(JSON.stringify(replyObj));
                //notify user
            }
            else {
                // apologise for operation failure.
                let replyObj = {
                    success : false,
                    responseMessage : "Unable to complete operation, We apologise for any inconvinience, our team is working to make sure you get up and running in no time.",
                }
                console.log("addEntry failed signup", email);
                reply.code(500);
                reply.header("Content-Type", "application/json; charset=utf-8");
                reply.send(JSON.stringify(replyObj));
                console.log(JSON.stringify(replyObj));
            }
            return;
        })
}

module.exports = signup;