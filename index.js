import express from 'express'
import routes from './src/routes/routes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3009

/* Mongoose connection */
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/patientDB1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

/* Body parser setup */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.get('/', (req, res) =>
    res.send(`Node and server running on port ${PORT}`)
)

app.listen(PORT, () => {
    require('log-timestamp')
    console.log(`Server is running on http://localhost:${PORT}/`)
    console.log("--------------- End Points -----------");
    console.log("Get All Patients [POST]: http://localhost:3009/patients/");
    console.log("Add Patient [POST]: http://localhost:3009/addPatient/");
    console.log("Get Patient Details By Id [POST]: http://localhost:3009/patients/detail");
    console.log("Doctor SignUp [POST]: http://localhost:3009/doctor/signup");
    console.log("Add Patient Record [POST]: http://localhost:3009/patients/addRecord");
    console.log("Get Patient Records [POST]: http://localhost:3009/patients/getRecords");
})