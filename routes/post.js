var express = require('express');
var router = express.Router();
var path = require('path');
const LIMIT = require("../src/const").LIMIT;

let postRepository= require("../src/PostRepository");

/**
 * 포스트 목록을 반환한다.
 * category 가 undefined 인 경우는 없고, 최초호출시 lastKey 는 undefined 일수 있다.
 */
router.get('/', async function(req, res, next) {
    const lastKey = req.query.lastKey
    let category = req.query.category

    if(typeof category === 'undefined') {
        res.send(null) // TODO check error
        return
    }

    category = Number.parseInt(category)

    if(typeof lastKey === 'undefined') {
        const r = await postRepository.findAllPostList(category)
        res.send(toResponse(r))
        return
    }

    const r = await postRepository.findPostListByLastKeyAndCategory(lastKey, category)
    res.send(toResponse(r))
});

const toResponse = (r) => {
    const result = {}
    r.forEach((each) => {
        result[each.key] = each.val()
    })

    if(Object.keys(result).length === 0 && result.constructor === Object) {
        return {
            "list" : null,
            "lastKey" : null
        }
    }

    return {
        "list" : result,
        "lastKey" : makeLastKey(result)
    }
}

const makeLastKey = (result) => {
    console.log("makeLastKey", Object.keys(result).length, LIMIT)
    if(Object.keys(result).length < LIMIT) {
        return null;
    }

    return Object.keys(result)[Object.keys(result).length - 1]
}

/**
 * 더미 데이터를 insert 한다.
 */
router.get('/sample', function (req, res) {
    postRepository.addDummyPostList();
    res.send("success")
});

module.exports = router;
