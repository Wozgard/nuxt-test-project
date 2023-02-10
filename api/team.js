const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const team = require('../models/team');

async function getDataFromMongo() {
    try {
        await mongoose.connect('mongodb://localhost:27017', {
            dbName: "shoart",
            autoCreate: false
        })
        const req = await team.find({});
        return req
    } catch (e) {
        console.log(e)
    }
}

async function add(body) {
    try {
        await mongoose.connect('mongodb://localhost:27017', {
            dbName: "shoart",
            autoCreate: false
        })
        const newteam = new team(body);
        await newteam.save()
    } catch (e) {
        console.log(e)
    }

}

async function del(element) {
    try {
        await mongoose.connect('mongodb://localhost:27017', {
            dbName: "shoart",
            autoCreate: false
        })
        await team.deleteOne(element)
    } catch (e) {
        console.log(e)
    }

}

async function index() {
    let res = await getDataFromMongo();
    return res
}

export { index, add, del };