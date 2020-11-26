import {
    addNewPatient,
    getAllPatients,
    getPatientById, signUp, login, addPatientRecord, getPatientRecords
} from '../controllers/controller'

const routes = (app) => {
    app.route('/patients')
        .post(getAllPatients)

    app.route('/addPatient')
        .post(addNewPatient)

    app.route('/patients/detail')
        .post(getPatientById)

    app.route('/doctor/signup')
        .post(signUp)

    app.route('/doctor/login')
        .post(login)

    app.route('/patients/addRecord')
        .post(addPatientRecord)

    app.route('/patients/getRecords')
        .post(getPatientRecords)

}

export default routes;