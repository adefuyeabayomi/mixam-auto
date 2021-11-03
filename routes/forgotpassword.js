async function forgotpassword ( fastify , options ) { // options db and mailer new password generator function
    let dbClient = new options.client(options.dbOptions.url,options.dbOptions.options);
    let handler = new options.dbHandler(dbClient,options.dbOptions);
    fastify.get("/apiservice/forgotpassword",async (request,reply)=>{
        let collection = "accountInformation";
        let email = request.query.email;
        let newPassword = options.generatePassword();
        let dbOptions = {
            collection , 
            query: {email}, 
            updateDocument : {
                $set : {
                    password : newPassword
                }
            } 
        };
        let setPassword = await handler.modify(dbOptions);
        if(setPassword){
            // mail user
            let mailOptions = {
                to : email,
                subject : "Mixam, password reset",
                text : "Your new password is " + newPassword + "Login to your account with this password. If you didn't perform this action, kindly notify our customer care : +2348136243796"
             }
             options.mailer.sendMail(mailOptions,(errors,info)=>{
                if(errors){
                    fastify.log.error(errors)
                    let replyObj = {
                        success : false,
                        msg : "Unable to complete operation, We apologise for any inconvinience, our team is working to make sure you get up and running in no time.",
                    }
                    console.log("forgotPasswordOp failed", email ,":");
                    reply.code(200);
                    reply.header("Content-Type", "application/json; charset=utf-8");
                    reply.send(JSON.stringify(replyObj));
                } else{//notify user of the change
                    let replyObj = {
                        success : true,
                        msg : "An email with your new password has been sent to " + email + ". Use your new password to login and make sure you change in after you login"
                    }
                    reply.code(200);
                    reply.header("Content-Type", "application/json; charset=utf-8");
                    reply.send(JSON.stringify(replyObj));
                }
             })
            //notify user of the change
        }else{
            //apologize for the inconvienence caused
            let replyObj = {
                success : false,
                msg : "Unable to complete operation, We apologise for any inconvinience, our team is working to make sure you get up and running in no time.",
            }
            console.log("forgotPasswordOp failed", email ,":");
            reply.code(200);
            reply.header("Content-Type", "application/json; charset=utf-8");
            reply.send(JSON.stringify(replyObj));
        }
        return;
    })
};

module.exports = forgotpassword;