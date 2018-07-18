var express = require('express');
var router = express.Router();
var path = require('path');

let postRepository= require("../src/PostRepository");

/**
 * 포스트 목록을 반환한다.
 * category 가 undefined 인 경우는 없고, 최초호출시 lastPostId 는 undefined 일수 있다.
 */
router.get('/', async function(req, res, next) {
    const lastPostId = req.query.lastPostId
    let category = req.query.category

    if(typeof category === 'undefined') {
        res.send(null) // TODO check error
        return
    }

    category = Number.parseInt(category)

    if(typeof lastPostId === 'undefined') {
        const r = await postRepository.findAllPostList(category)
        res.send(r.val())
        return
    }

    const r = await postRepository.findPostListByLastPostIdAndCategory(lastPostId, category)
    res.send(r.val())
});

/**
 * 더미 데이터를 insert 한다. 데이터는 총 50개이다.
 */
router.get('/sample', function (req, res) {
    postRepository.addDummyPostList();
});

module.exports = router;
