const { MongoClient } = require("mongodb");
const dbhandler = require("./dbhandler");
const devClient = new MongoClient("mongodb://127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb",{ useUnifiedTopology: true });
const options = {
    dbName : "mixamDEV"
}
const devDBOperationHandler = new dbhandler(devClient,options);
module.exports = devDBOperationHandler;