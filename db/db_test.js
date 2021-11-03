// this is a node console program to test my db module to make sure it does what it is meant to do. it features four tests.
// using local mongo db servers.
// adding entry to the database.
// first require the devdb;
const dbOps = require("./devdb");
// dbOps exposes an addEntry method i.e dbOps.addEntry(options) options : {collection: String, document : Object}
let entrySuccess, retrievalSuccess, modificationSuccess, deletionSuccess;
function add(){
    const entryOptions = {
        collection : "test_collection",
        document: {
            id : 234,
            email : "adefuyeabayomi16@gmail.com",
            age : 24
        }
    }
    dbOps.addEntry(entryOptions).then((done)=>{
        if(done){
            console.log("great Job");
            entrySuccess = true;
        }else console.log("!Oops");
    });    
}

// retrieving data

function retrieve(){
    const retrievalOptions = {
        collection: "test_collection",
        query: {
            email : { 
                $eq : "adefuyeabayomi16@gmail.com"
            }
        },
        findMultiple : false
    }
    dbOps.retrieve(retrievalOptions).then(data=>{
        console.log(data);
        retrievalSuccess = true;
    }).catch(err=>{
        retrievealSuccess = false;
    })
}

// modifying data

function modify(){
    const modificationOptions = {
        collection : "test_collection",
        query: {
            email: "adefuyeabayomi16@gmail.com"
        },
        updateDocument : {
            $set : {
                age : 500
            }
        }
    }
    dbOps.modify(modificationOptions).then((done)=>{
        console.log("modification status : ", done);

        const retrievalOptions = {
            collection: "test_collection",
            query: {
                email : { 
                    $eq : "adefuyeabayomi16@gmail.com"
                }
            },
            findMultiple : false
        }
        dbOps.retrieve(retrievalOptions).then(data=>{
            console.log(data);
            retrievalSuccess = true;
        })
    }).catch(()=>{
        console.log("opps modification");
    })
}

// deleting data

function deleteData (){
    const deleteOptions = {
        collection : "test_colletion",
        query : {
            email : "adefuyeabayomi16@gmail.com"
        }
    }
    dbOps.delete(deleteOptions).then(()=>{
   
    }).catch(()=>{
        console.log("!dang")
    });
}

// start 
retrieve();

