import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import formRoutes from './routes/formRoutes.js'
import dotenv from 'dotenv'
import path from 'path'
const app = express()
app.use(bodyParser.json({limit: "30mb" , extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}))
app.use('/formdata', formRoutes)
const __dirname = path.resolve();

dotenv.config()
app.use(express.static(path.join(__dirname, "../build")))
app.use(express.static("public"))

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT,() => console.log(`Server is running on ${PORT}`)))
    .catch((error) => console.log(error.message))
    mongoose.set('useFindAndModify',false)