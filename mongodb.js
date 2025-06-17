const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'ecomerce';
const client = new MongoClient(url);

async function getdata() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let response = await collection.find({brand:"apple"}).toArray();
    // console.log(response);
}

getdata();

module.exports = getdata;