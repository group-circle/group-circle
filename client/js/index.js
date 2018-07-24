import App from './App'

const app = new App()
const FBLoginStatus = {
  CONNECTED: 'connected', //사용자가 Facebook에 로그인하고 앱에 로그인
  NOT_AUTHORIZED: 'not_authorized', //Facebook에는 로그인했지만 앱에 로그인하지 않음
  UNKNOWN: 'unknown' // Facebook에 로그인 하지 않음. 또는 이전에 FB.logout()이 호출되어 Fackebook에 연결 불가
};
let url;

getMetaData('http://www.daum.net').then((data) => {
    console.log(data); // data is HERE
});
$(document).ready(() => {
    loginCheck();
});

window.checkFBLogin = () => {
    loginCheck();
}

function loginCheck () {
    FB.getLoginStatus((response) => {
        switch (response.status) {
            case FBLoginStatus.CONNECTED:
                toggleWelcome(false);
                showList(true);
                drawList();
                break;
            case FBLoginStatus.NOT_AUTHORIZED:
            case FBLoginStatus.UNKNOWN:
                toggleWelcome(true);
                //showList(false);
                break;
            default:
                break;
        }
    });
}

function toggleWelcome(isShow) {
    $('.welcome').toggle(isShow);
}

function showList(isShow) {
    $('.listWrapper').toggle(isShow);
}

function drawList(category, lastKey) {
    //category = category || 0;
    //lastKey = lastKey || null;
    //let url = 'posts?category=' + category + (lastKey ? 'lastKey=' + lastKey: '');
    //$.ajax({
    //    url: url,
    //    dataType: 'json'
    //}).done((json) => {
    //    let lastKey = json.lastKey;
    //    let lists = json.list;
    //    $.each(lists, (key, item) => {
    //        //console.log(item.category);
    //        //console.log(item.url);
    //        //console.log('');
    //
    //      //  item에 있는 정보들...
    //      //  category
    //      //  url,
    //      //  img,
    //      //  domain,
    //      // title,
    //      // desc
    //    });
    //})
    let mock = {
        category: 1,
        url: 'https://www.daum.net',
        img: '//i1.daumcdn.net/svc/image/U03/common_icon/5587C4E4012FCD0001',
        domain: 'www.daum.net',
        title: 'DAUM',
        desc: '나의 관심 콘텐츠를 가장 즐겁게 볼 수 있는 Daum'
    }

    //let postTemplate = _.template("");
    //let html = postTemplate({mock});
}



//var compiled = _.template("hello: <%= name %>");
//compiled({name: 'moe'});

function getMetaData(url) {
    return $.get('https://query.yahooapis.com/v1/public/yql', {
        q: 'SELECT content FROM data.headers WHERE url=\"' + url + '\" and ua=\"' + navigator.userAgent + '\"',
        format: 'json',
        env: 'store://datatables.org/alltableswithkeys'
    }).then((json) => {
        var content = $(json.query.results.resources.content);

        var title = content.filter('title').text() != null && content.filter('title').text() != undefined ? content.filter('title').text() : '';
        var description = content.filter('meta[name="description"]').attr('content') != null && content.filter('meta[name="description"]').attr('content') != undefined ? content.filter('meta[name="description"]').attr('content') : (content.filter('meta[property="og:description"]').attr('content') != null && content.filter('meta[property="og:description"]').attr('content') != undefined ? content.filter('meta[property="og:description"]').attr('content') : '');
        var image = content.filter('meta[property="og:image"]').attr('content') != null && content.filter('meta[property="og:image"]').attr('content') != undefined ? content.filter('meta[property="og:image"]').attr('content') : (content.find('img:eq(0)').attr('src') != null && content.find('img:eq(0)').attr('src') != undefined ? content.find('img:eq(0)').attr('src') : '');
        var domain = url.toString().split('/')[2];

        return {
            url: url,
            img: image,
            domain: domain,
            title: title,
            desc: description
        };
    });
}