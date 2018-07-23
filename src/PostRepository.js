const db = require("./Firebase");
const LIMIT = 20;
const categories = require("./Category")

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {

    ref : db.ref('contents/posts'),
    /**
     * 더미 데이터 만드는 용도로 사용
     * 실제 컨트롤러에서는 호출하지 말 것
     */
    addDummyPostList : function () {
        for(let i = 1; i<101; i++) {
            const now = new Date().getTime();
            let data = {
                url : "http://www.daum.net",
                createdAt : now,
                category : getRandomInt(0, 27)
            }

            this.ref.child(Number.MAX_SAFE_INTEGER - now).set(data)
        }
    },

    addPost : function (url, category) {
        const now = new Date().getTime();
        this.ref.child(Number.MAX_SAFE_INTEGER - now).set({
            url, category, createdAt: now
        })
    },

    findPostListByLastKeyAndCategory : function (lastKey, category) {

        if(category === categories["all"]) {
            return this.ref.orderByKey().startAt(lastKey).limitToFirst(LIMIT).once("value")
        }

        return this.ref.orderByChild('category').equalTo(category).startAt(lastKey).limitToFirst(LIMIT).once("value")
    },

    findAllPostList : function(category) {

        if(category === categories["all"]) {
            return this.ref.orderByKey().limitToFirst(LIMIT).once("value")
        }

        return this.ref.orderByChild("category").equalTo(category).limitToFirst(LIMIT).once("value")
    }
};

