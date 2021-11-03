class DatabaseOperations {
    constructor(client,dbName){
        this.dbName = dbName;
        this.client = client; //mongoClient
    } 
    // adding entry to the collection.
    async addEntry (options) { // returns a boolean depending on the operations success.
        // options : {collection : String, document : Object}
        let operationSuccess;
        let operationInformation;
        try{
            await this.client.connect();
            console.log("connected to the database server successfully");
            let database = await this.client.db(this.dbName);
            let col = await database.collection(options.collection);
            let addEntryOperation = await col.insertOne(options.document);
            console.log("Successfully added entry with id", options.id, "to the database", this.dbName , "in collection", options.collection);
            operationSuccess = true;
        }
        catch (error){
            operationInformation = error.message;
        }
        finally{
        if(operationSuccess) {
            await this.client.close();
            console.log("disconnected from database server succcessfully");
            return operationSuccess;
        }
            else {
                if(this.client.connected){
                    console.log("an error occured while trying to add entry", "this is the operation information", operationInformation);
                    await this.client.close();
                    console.log("disconnected from server successfully");
                }
                else{
                    console.log("Unable to connect to the database server");
                }
                return false;
            }
        }
    }
    async retrieve(options) { // returns an object or array of objects if successful or for other kinds of errors, it simply logs the problem and returns false. returns <data : Object> or false;
        // options : {collection : "String : the place to search from", queryDocument : "Object: specifying certain properties that would match in the document that your're looking for."}
        // {collection , query, findMultiple : boolean, defalut : false}
        let operationSuccess;
        let operationInformation;
        let retrieved;
        try{
            await this.client.connect();
            console.log("connected to the database server successfully");
            let database = await this.client.db(this.dbName);
            let col = await database.collection(options.collection);
            if(options.findMultiple){
                let store = [];
                let retrievalOperation =col.find(options.query);
                await retrievalOperation.forEach( retrievedDocument=>{
                retrieved.push(retrievedDocument);
                });
                retrieved = store;
            }
            else{
                let retrievalOperation = await col.findOne(options.query);
                retrieved = retrievalOperation;
                operationSuccess = true;
            }
        }
        catch(error){
            operationInformation = error.message;
        }
        finally{
            if(operationSuccess){
                console.log("Retrieval Operation Complete : Successfully retrieved data from the database");
                await this.client.close();
                console.log("Disconnected from database Server successfully");
                return retrieved;
            }
            else{
                if(this.client.connected){
                    console.log("an error occured while trying to retrieve data", "this is the operation information", operationInformation);
                    await this.client.close();
                    console.log("disconnected from server successfully");
                }
                else{
                    console.log("unable to connect to the database server");
                }
                return false;
            }
        }
    }
    async modify(options){ // returns a boolean depending on the operations success. 
        // options { collection , query, updateDocument };
        let operationSuccess;
        let operationInformation;
        try{
            await this.client.connect();
            console.log("connected to the database server successfully");
            let db = await this.client.db(this.dbName);
            let col = await db.collection(options.collection);
            let updateOperation =await col.updateOne(options.query,options.updateDocument);
            operationSuccess = true;
        }
        catch (error){
            operationInformation = error.message;
        }
        finally{
            if(operationSuccess){
                console.log("Modification Operation Complete : Successfully updated data in the database");
                await this.client.close();
                console.log("Disconnected from database Server successfully");
                return true;
            }
            else{
                if(this.client.connected){
                    console.log("an error occured while trying to update data", "this is the operation information", operationInformation);
                    await this.client.close();
                    console.log("disconnected from server successfully");
                }
                else{
                    console.log("unable to connect to the database server");
                }
                return false;
            }
        }
    }
    async delete(options){ // returns true or false depending on the success of the operation.
        //options {query: {object},collection}
        let operationSuccess;
        let operationInformation;
        try{
            await this.client.connect();
            console.log("connected to the database server successfully");
            let db = await this.client.db(this.dbName);
            let col = await db.collection(options.collection);
            // using deleteOne.
            await col.deleteOne(options.query);
            operationSuccess = true;
        }
        catch( error ){
            operationInformation = error.message;
        }
        finally{
            if(operationSuccess){
                console.log("Delete Operation Complete : Successfully deleted from the database");
                await this.client.close();
                console.log("Disconnected from database Server successfully");
                return true;
            }
            else{
                if(this.client.connected){
                    console.log("an error occured while trying to delete data", "this is the operation information", operationInformation);
                    await this.client.close();
                    console.log("disconnected from server successfully");
                }
                else{
                    console.log("unable to connect to the database server");
                }
                return false;
            }
        }
    }
}
module.exports = DatabaseOperations;