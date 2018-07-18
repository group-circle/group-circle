const db = require("./Firebase");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    DEFAULT_DATA_PATH : 'contents',
    ref : db.ref(this.DEFAULT_DATA_PATH).child('posts'),
    LIMIT : 20,

    add : function(postId, data) {
        if(Number.isInteger(postId)) {
            postId = postId.toString();
        }

        const postRef = this.ref.child(postId);
        postRef.set(data);
    },

    /**
     * 더미 데이터 만드는 용도로 사용
     * 실제 컨트롤러에서는 호출하지 말 것
     */
    addDummyPostList : function () {
        for(let i = 1; i<51; i++) {
            const key = Number.MAX_SAFE_INTEGER - i;
            let data = {
                postId: i,
                url: "http://www.daum.com",
                createdAt: new Date().getTime(),
                category: getRandomInt(0, 27)
            }

            const postRef = this.ref.child(key.toString())
            postRef.set(data);
        }
    },

    get : function() {
        return this.ref.once('value');
    },
    
    findPostListByLastPostIdAndCategory : function (lastPostId, category) {

        const key = (Number.MAX_SAFE_INTEGER - lastPostId).toString()

        if(category === 0) {
            console.log(key);
            return this.ref.orderByChild("postId").startAt(lastPostId).once("value")
        }

        return this.ref.orderByChild('category').equalTo(category).orderByValue().startAt(key).limitToFirst(this.LIMIT).once("value")
    },

    findAllPostList : function(category) {
        if(category === 0) {
            return this.ref.orderByValue().limitToFirst(this.LIMIT).once("value")
        }

        return this.ref.orderByChild("category").equalTo(category).limitToFirst(this.LIMIT).once("value")
    }
};

