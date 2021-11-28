async function auth (fastify,options) {
    fastify.get("/apiservice/auth/",async ( request , reply ) => {
        let collection = fastify.mongo.db.collection("usersAccountInformation");
        let email = request.query.email;
        let password = request.query.password;
        let loginType = request.query.loginType;
        let authType = request.query.authType;
        let query = {
            email
        }
        let response = {};
        let userAccountInfo = await collection.findOne(query); //handler.retrieve returns either an object or null when it actually finished the database operations and false if an error occured
        let userExist = userAccountInfo !== null;
        console.log("userAccountInfo",userAccountInfo, typeof userAccountInfo);
        // handles condition where the user exists and the authType is login userAccountInfo is of type object.
        if(userExist && authType == "login"){
            console.log("user" + email + "exists");
            console.log("retrieved Info : ", userAccountInfo);
            if(loginType == userAccountInfo.loginType){
                if(loginType == "manual"){
                    console.log("logintype == userAccountInfo.loginType");
                    if(userAccountInfo.password == password){
                        console.log("userAccountInfo.password = password")
                        response.status = "success";
                        response.successMessage = "Okay";
                        response.__userAccountData = userAccountInfo;
                        response.new_user = false;
                    }
                    else{
                        console.log("login password not equal userAcount info password")
                        response.status = "request_denied";
                        response.errorMessage = "Password does not match. Did you forget your password? Kindly use the forgot password link to recover your password.";
                    }
                }
                else{
                    console.log("loginType is not manual and the userExists")
                    response.status = "success";
                    response.successMessage = "Okay";
                    response.__userAccountData = userAccountInfo;
                    response.new_user = false;
                }                
            }
            else {
                console.log("user did not login with the method used to open account");
                response.status = "request_denied";
                response.errorMessage = "The User with email " + email + " signed up with " + String(userAccountInfo.loginType == "manual" ? "an Email and password combination" : userAccountInfo.loginType).toUpperCase()+ " not " + loginType == "manual" ? " an Email and password combination" : userAccountInfo.loginType + ". For security reasons, this login request has to be declined. Please use " + userAccountInfo.loginType == "manual" ? " The Email and password form " : userAccountInfo.loginType + " to login to your Mixam Business Account."
            }
        }
        if(userExist && authType == "signup" && loginType !== "manual" ){
            response.status = "success";
            response.successMessage = "Okay";
            response.__userAccountData = userAccountInfo;
            response.new_user = false;
        }
        if(userExist && authType == "signup" && loginType == "manual"){
            console.log("user exists in database and authtype is signup and login type is manual")
            response.status = "request_denied";
            response.errorMessage = "This account " + email + " has already been registered with our service. Kindly use our login page to login to your account.";
        }
        //handles case where the user does not exist in our database
        if(userAccountInfo == null){
            console.log("user doesnt exist in db")
            if(authType == "login" & loginType == "manual"){
                console.log("request denied because the authtype is login and the logintype is manual")
                response.status = "request_denied";
                response.errorMessage = "This email has not been registered on this website. Please Go to the sign up page and Sign up with preferred method";

            }
            else {
                console.log("Adding new user to the database");
                let mid = email + String(Math.round(Math.random()*10000)) +"MID";
                console.log("Mixam User ID : ", mid);

                let document = {
                        email,
                        password,
                        loginType,
                        recoveryEmail : "",
                        securityQuestion : "",
                        answerToSecurityQuestion : "",
                        profileImageLink : "",
                        username: "",
                        lastLoggedIn: "",
                        created : Date.now(),
                        verified: false,
                        __mid: mid,
                    }
                let userAdded = await collection.insertOne(document);
                console.log("userAdded",userAdded)
                if(userAdded.acknowledged){
                    console.log("user Added to the database")
                    response.status = "success";
                    response.__userAccountData = document;
                    response.new_user = true;
                    response.successMessage="Okay";

                }
                else{
                    console.log("db operation was unable to be completed");
                    response.status = "request_denied";
                    response.errorMessage = "Sorry, We are unable to log you in now. Our technical team are working make sure you get up and running as soon as possible.";
                    console.log("addEntry operation failed");

                }
            }
        }
        console.log("response", response);
        return response;
    })
}

module.exports = auth;