const mongoose = require('mongoose');
const fs = require('fs');
mongoose.set('strictQuery', false);
const team = require('../models/team.js');

const data = JSON.parse(fs.readFileSync('./db/team.json'));

async function insertData() {
    try {
        await mongoose.connect('mongodb://mongo:27017', {
            //await mongoose.connect('mongodb://localhost:27017', {
            dbName: "shoart",
            autoCreate: false
        });
        if ((await team.find({})).length === 0) {
            team.insertMany(data)
            console.log("Data INSERT!")
        }
        console.log("Success")
        process.exit(0)
    } catch (e) {
        console.log(e)
    }
}
insertData()