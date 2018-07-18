const firebase = require("firebase-admin");
const serviceAccount = require("../resource/serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://group-circle.firebaseio.com"
});
const db = firebase.database();

module.exports = {
    DEFAULT_DATA_PATH : 'restricted_access/secret_document',

    add : function(docName, json) {
        const ref = db.ref(this.DEFAULT_DATA_PATH);
        const usersRef = ref.child(docName);
        usersRef.set(json);
    },

    get : function() {
        const ref = db.ref(this.DEFAULT_DATA_PATH);
        return ref.once('value');
    }
};

