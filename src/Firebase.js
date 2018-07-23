/**
 * firebase setting
 */
const firebase = require("firebase-admin");
const serviceAccount = require("../resource/serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://group-circle.firebaseio.com"
});

const db = firebase.database();

module.exports = db;

