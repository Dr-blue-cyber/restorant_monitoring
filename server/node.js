const timezonSchema = require("../src/models/timezoneSchema")
const fs = require('fs');
const { parse } = require('csv-parse');
const csv = require('csv-parser');

const {MongoClient} = require("mongodb")

const MONGO_URL = "mongodb+srv://surajbhanarkar08:suraj162@surajbhanarkar.uobtiag.mongodb.net/"
const client = new MongoClient(MONGO_URL);



client.connect()
    .then(() => {
        console.log("mongodb connected")
    })
    .catch(() => {
        console.log("error")
    })


// const collection = new mongoose.model('timezone', timezonSchema);
const getCsvdata = require("../src/services/timezoneService");


function insertData(){
    getCsvdata()
    .then(async (data) => {
        console.log(data)
        try {
            const document = await timezonSchema.insertMany(data);
            console.log(document)

        } catch (error) {
            console.log(error.message);
        }
    })
    .catch((error) => {
        console.error("Error getting CSV data:", error)
    })
}

const databaseA = client.db("test"); 
const collectionA = databaseA.collection("timezones")

const deleteDuplicate = async()=>{
    try {
        const rema = await databaseA.collectionA.aggregate([
            {
                $group: {
                    _id: {
                        store_i: "$store_id",
                        timezone_str: "$timezone_str",
                        // Add all fields here
                    },
                    duplicates: { $push: "$_id" },
                    count: { $sum: 1 }
                }
            },
            {
                $match: {
                    count: { $gt: 1 }
                }
            }
        ]).forEach(function(doc) {
            doc.duplicates.shift(); // Keep the first _id and remove the rest
            db.yourCollection.deleteMany({ _id: { $in: doc.duplicates } });
        });
    
    console.log(rema);
    } catch (error) {
        console.log(error);
    }
}

const showData = async()=>{
    
    try {
        const docs = await collectionA.find({}).toArray();
        console.log(docs)
    } catch (error) {
        console.log(error);
    }
}

deleteDuplicate()
// showData()