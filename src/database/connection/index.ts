
import mongoose from 'mongoose'
import * as dotenv from "dotenv";

dotenv.config();

const {DB_NAME, DB_URL, DB_USER, DB_PASSWORD} = process.env
console.log(DB_NAME)
console.log(DB_URL)
console.log(DB_USER)
const user = 'hotels-api'
const password = 'hotelsapi123'
const db = 'almundo_hotels'
const dbUrl = '@ds037155.mlab.com:37155'
 const url = `mongodb://${DB_USER}:${DB_PASSWORD}${DB_URL}/${DB_NAME}`
// const url = `mongodb://${user}:${password}${dbUrl}/${db}`
console.log(url)
 // const url2 = `${localDatabase.url}/${localDatabase.db}`

mongoose.set('debug', true)
try {
    mongoose.connect(url)
} catch (err) {
    mongoose.createConnection(url)
}
export const connection = () => {
    mongoose.connection
        .once('open', () => console.log('MongoDB connection success'))
        .on('error', error => {
            throw error
        })
}
