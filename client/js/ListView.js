
import {CATEGORIES} from './const'

const SELECTOR = {
    ITEM: ".category"
}
const EVENT = {
    CHANGE: "change"
}

export default class ListView extends EventEmitter {
    constructor(container) {
        super()
        this.container = container
        this.datalastKey = null
        this.categoryKey = null
    }
    renderItem(categoryKey = 0, lastKey)  {
        console.log("renderItem", categoryKey, lastKey)
        if (lastKey === -1) return

        const url = 'posts?category=' + categoryKey + (lastKey ? '&lastKey=' + lastKey: '');

        $.ajax({
            url: url,
            dataType: 'json'
        }).done((json) => {
            // this.lastKey = json.lastKey;
            // const previousCategory = this.categoryKey
            // let isLastContents = this.lastKey === null && (previousCategory !== null && categoryKey !== previousCategory)
            
            // this.categoryKey = categoryKey
            // let listHTML
            // if (json.list) {
            //     const list = Object.keys(json.list)
            //     const postTemplate = _.template('<div class="list" data-category=<%= category %>><span class="url"> <%= url %> </span><img class="img" src=<%= image %>>' +
            //       '<div class="domain"><%= domain %></div><div class="title"><%= title %></div><div class="desc"><%= description %></div>' +
            //       '<div class="fb-share-button" data-href=<%= url %> data-layout="button_count" data-size="small" data-mobile-iframe="true"><a href="javascript:;" onClick="openNewWindow(this)" data-url=<%= shareUrl %> class="fb-xfbml-parse-ignore">공유하기</a></div></div>');
        
            //     listHTML = list.map(key => {
            //         const item = json.list[key]
            //         let meta = item.metadata
            //         meta.category = item.category
            //         meta.domain = item.url.split('://')[1].split('/')[0]
            //         meta.shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(item.url) + '&amp;src=sdkpreparse'
            //         return postTemplate(meta)
            //       }).join("")
                
            //       if (isLastContents) {
            //         listHTML += "<p> That's all. ;)</p>"
            //     }
            // } else {
            //     listHTML = "<p> Nothing here. ;O</p>"
            // }
            
            let datalastKey = json.lastKey;
            this.datalastKey = datalastKey ? datalastKey : -1
            this.categoryKey = categoryKey
            let listHTML = '';
            if (json.list) {

                const list = Object.keys(json.list)
                let postTemplate = _.template('<div class="list" data-category=<%= category %>><span class="url"> <%= url %> </span><img class="img" src=<%= image %>>' +
                '<div class="domain"><%= domain %></div><div class="title"><%= title %></div><div class="desc"><%= description %></div>' +
                '<div class="fb-share-button" data-href=<%= url %> data-layout="button_count" data-size="small" data-mobile-iframe="true"><a href="javascript:;" onClick="openNewWindow(this)" data-url=<%= shareUrl %> class="fb-xfbml-parse-ignore">공유하기</a></div></div>');
        
                listHTML = list.map(key => {
                    const item = json.list[key]
                    let meta = item.metadata
                    meta.category = item.category
                    meta.domain = item.url.split('://')[1].split('/')[0]
                    meta.shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(item.url) + '&amp;src=sdkpreparse'
                    return postTemplate(meta)
                    }).join("")

                
                if (!datalastKey) {
                    listHTML += "<p> That's all. ;)</p>";
                }
            } else {
                listHTML = "<p> Nothing here. ;O</p>"
            }
    
            if (lastKey && !json.list) {
                $(this.container).append(listHTML);
            } else {
                $(this.container).html(listHTML);
            }
        })
    }
}

function drawList(category, lastKey) {
    if (lastKey=== -1) return

    category = category || 0;
    lastKey = lastKey || null;
    let url = 'posts?category=' + category + (lastKey ? '&lastKey=' + lastKey: '');
    $(`.category`).removeClass("selected")
    $(`[data-key=${category}]`).addClass("selected")
    $.ajax({
        url: url,
        dataType: 'json'
    }).done((json) => {
        let datalastKey = json.lastKey;
        window.datalastKey = datalastKey ? datalastKey : -1

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

        if (!datalastKey) {
            listHtml += "<p> That's all. ;)</p>";
        }

        if (lastKey) {
            $('.lists').append(listHtml);
        } else {
            $('.lists').html(listHtml);
        }
    });
}
