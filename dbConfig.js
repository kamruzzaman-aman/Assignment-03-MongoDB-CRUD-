require('dotenv').config();
const { MongoClient } = require('mongodb');

const cloudClient = new MongoClient(process.env.DATABASE_CLOUD_SERVER);  //for cloud atlas server

console.log('Database Connected');

module.exports = {cloudClient};