const { MongoClient } = require("mongodb");
const dbhandler = require("./dbhandler");
const mixamMongoClient = new MongoClient(process.env.PRODUCTION_DB_URL);
const options = {
    dbName : process.env.PRODUCTION_DB_NAME
}
const mixamDBOperationHandler = new dbHandler(mixamMongoClient,options);
module.exports = mixamDBOperationHandler;