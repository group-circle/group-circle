import App from './App'

const app = new App()
let url;

$( document ).ready(() => {
    $('.requestUrl').on('click', (e) => {
        url = $('#url').val();
        getMetaData(url);
    })
});

function getMetaData(url){
    $.get("https://query.yahooapis.com/v1/public/yql", {
        q: "SELECT content FROM data.headers WHERE url=\"" + url + "\" and ua=\"" + navigator.userAgent + "\"",
        format: "json",
        env: "store://datatables.org/alltableswithkeys"
    }).done((json) => {
        var content = $(json.query.results.resources.content);

        var title = content.filter('title').text()!= null && content.filter("title").text() != undefined ? content.filter("title").text() : '';
        var description = content.filter('meta[name="description"]').attr("content") != null && content.filter('meta[name="description"]').attr("content") != undefined ? content.filter('meta[name="description"]').attr("content") : (content.filter('meta[property="og:description"]').attr("content") != null && content.filter('meta[property="og:description"]').attr("content") != undefined ? content.filter('meta[property="og:description"]').attr("content") : '');
        var image = content.filter('meta[property="og:image"]').attr("content") != null && content.filter('meta[property="og:image"]').attr("content") != undefined ? content.filter('meta[property="og:image"]').attr("content") : (content.find("img:eq(0)").attr("src") != null && content.find("img:eq(0)").attr("src") != undefined ? content.find("img:eq(0)").attr("src") : '');
        var domain = url.toString().split("/")[2];

        $('.name').text(title);
        $('.desc').text(description);
        $('.img').attr('src', image);
        $('.domain').text(domain);
        $('.url').attr('href', url);
    });
}