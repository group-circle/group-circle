const db = require("./Firebase");

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

