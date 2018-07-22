import App from './App'

const app = new App()
let url;

app.attachFBLogin();

getMetaData('http://www.daum.net').then((data) => {
    console.log(data); // data is HERE
});
$( document ).ready(() => {
    //let category = 0;
    //let lastKey = null;
    //let url = 'posts?category=' + category + (lastKey ? 'lastKey=' + lastKey: '');
    //$.ajax({
    //    url: url,
    //    dataType: 'json'
    //}).done((json) => {
    //    let lastKey = json.lastKey;
    //    let lists = json.list;
    //    $.each(lists, (key, item) => {
    //        console.log(item.category);
    //        console.log(item.url);
    //        console.log('');
    //    });
    //})
});

function getMetaData(url){
    return $.get('https://query.yahooapis.com/v1/public/yql', {
        q: 'SELECT content FROM data.headers WHERE url=\"' + url + '\" and ua=\"' + navigator.userAgent + '\"',
        format: 'json',
        env: 'store://datatables.org/alltableswithkeys'
    }).then((json) => {
        var content = $(json.query.results.resources.content);

        var title = content.filter('title').text()!= null && content.filter('title').text() != undefined ? content.filter('title').text() : '';
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