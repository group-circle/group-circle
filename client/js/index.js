import App from './App'

const app = new App()
const FBLoginStatus = {
  CONNECTED: 'connected', //사용자가 Facebook에 로그인하고 앱에 로그인
  NOT_AUTHORIZED: 'not_authorized', //Facebook에는 로그인했지만 앱에 로그인하지 않음
  UNKNOWN: 'unknown' // Facebook에 로그인 하지 않음. 또는 이전에 FB.logout()이 호출되어 Fackebook에 연결 불가
};
let url;

$(document).ready(() => {
    loginCheck();
    $('.category').on('click', function (e) {
        var key = $(e.currentTarget).data('key');
        drawList(key, null);
    });
});

window.checkFBLogin = () => {
    loginCheck();
}

window.openNewWindow = (dom) => {
    let url = $(dom).data('url');
    window.open(url,'Share to Facebook','width=550,height=500');
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
                showList(false);
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
    category = category || 0;
    lastKey = lastKey || null;
    let url = 'posts?category=' + category + (lastKey ? 'lastKey=' + lastKey: '');
    $.ajax({
        url: url,
        dataType: 'json'
    }).done((json) => {
        let lastKey = json.lastKey;
        let lists = json.list;
        let listHtml = '';
        let postTemplate = _.template('<div class="list" data-category=<%= category %>><span class="url"> <%= url %> </span><img class="img" src=<%= image %>>' +
          '<div class="domain"><%= domain %></div><div class="title"><%= title %></div><div class="desc"><%= description %></div>' +
          '<div class="fb-share-button" data-href=<%= url %> data-layout="button_count" data-size="small" data-mobile-iframe="true"><a href="javascript:;" onClick="openNewWindow(this)" data-url=<%= shareUrl %> class="fb-xfbml-parse-ignore">공유하기</a></div></div>');

        $.each(lists, (key, item) => {
            let meta = item.metadata;
            meta.category = item.category;
            meta.domain = item.url.split('://')[1].split('/')[0];
            meta.shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(item.url) + '&amp;src=sdkpreparse'
            listHtml += postTemplate(meta);
        });
        if (lastKey) {
            $('.lists').append(listHtml);
        } else {
            window.mint = listHtml;
            $('.lists').html(listHtml);
        }
    });
}