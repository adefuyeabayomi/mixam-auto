async function signup (fastify,options){ // db and mailer mongoClient and the dbOptions
        fastify.get("/apiservice/signup",async (request,reply)=>{
            let dbClient = new options.client(options.dbOptions.url,options.dbOptions.options);
            let handler = new options.dbHandler(dbClient,options.dbOptions.dbname);
            let collection = "accountInformation";
            console.log(request.query);
            let email = request.query.email;
            let password = request.query.password;
            let loginType = request.query.loginType;
            let mid = email + String(Math.round(Math.random()*10000)) +"MID";
            console.log("Mixam User ID : ", mid);
            let dbOptions = {
                collection, 
                document : {
                    email,
                    password,
                    loginType,
                    profileImageLink : "",
                    username: "",
                    lastLoggedIn: "",
                    created : Date.now(),
                    verified: false,
                    __mid: mid,
                }
            }

            let userAdded = await handler.addEntry(dbOptions);

            if(userAdded){
                    let replyObj = {};
                    replyObj._userInfo = dbOptions.document;
                    replyObj.success = true;
                    replyObj.responseMessage = "Successfully added user " + email + " to mixam database";
                    reply.code(200);
                    reply.header("Content-Type", "application/json; charset=utf-8");
                    reply.send(JSON.stringify(replyObj));
                    console.log("response", JSON.stringify(replyObj));
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
                console.log("response", JSON.stringify(replyObj));
            }
            return;
        })
}

module.exports = signup;