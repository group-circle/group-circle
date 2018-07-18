var firebase = require("firebase-admin");

var serviceAccount = require("../resource/serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://group-circle.firebaseio.com"
});
var db = firebase.database();

module.exports = {
    DEFAULT_DATA_PATH : 'restricted_access/secret_document',

    add : function(dataPath, docName, json) {
        var ref = db.ref(dataPath);
        var usersRef = ref.child(docName);
        usersRef.set(json);
    },

    get : function(dataPath) {
        if(!dataPath) {
            dataPath = this.DEFAULT_DATA_PATH;
        }

        var ref = db.ref(dataPath);
        return ref.once('value');
    }
};

