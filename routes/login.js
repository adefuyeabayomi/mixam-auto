async function login (fastify,options) {
    fastify.get("/apiservice/login/", async ( request , reply ) => {
        let dbClient = new options.client(options.dbOptions.url,options.dbOptions.options);
        let handler = new options.dbHandler(dbClient,options.dbOptions);
        let collection = "accountInformation";
        let email = request.query.email;
        let password = request.query.password;
        let dbOptions = {
            collection , 
            query : {
                email
            },
            findMultiple : false
        }
        let userAccountInfo = await handler.retrieve(dbOptions);
        let userExist = typeof userAccountInfo == "object";
        console.log("userExists", userAccountInfo);
        if(userExist){
            let replyObj = {};
           let passwordMatch = userAccountInfo.password == password; 
           if(passwordMatch){
            //reply.send the data 
            replyObj.success = true;
            replyObj.responseMessage = "Retrieved Successfully from db",
            replyObj.userData = userAccountInfo;
            reply.code(200);
            reply.header("Content-Type", "application/json; charset=utf-8");
            reply.send(JSON.stringify(replyObj));
            console.log(JSON.stringify(replyObj));
            }
           else{
            // reply.send 
            let replyObj = {
                success : false,
                responseMessage : "Password does not match, please check the password and try again"
            };
            reply.code(200);
            reply.header("Content-Type", "application/json; charset=utf-8");
            reply.send(JSON.stringify(replyObj));
            console.log(JSON.stringify(replyObj));
           }
        }
        else{
            console.log(userAccountInfo, "userAccountInfo");
            if(userAccountInfo == null){
                let replyObj = {
                success : false,
                responseMessage : "No account has been registered with this email yet, Check the email again or Sign Up for a new account",
                }
                reply.code(200);
                reply.header("Content-Type", "application/json; charset=utf-8");
                reply.send(JSON.stringify(replyObj));
                console.log(JSON.stringify(replyObj));
            }
            else{
                let replyObj = {
                    success : false,
                    msg : "Unable to complete operation, We apologise for any inconvinience, our team is working to make sure you get up and running in no time.",
                }
                console.log("retrievalOp failed", email ,":",userAccountInfo);
                reply.code(200);
                reply.header("Content-Type", "application/json; charset=utf-8");
                reply.send(JSON.stringify(replyObj));
                console.log(JSON.stringify(replyObj));
            }
        }
        return ;
    })
}

module.exports = login;