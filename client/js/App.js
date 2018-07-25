import Facebook from './Facebook'
import CategoryView from './CategoryView'
import {APP_ID} from './const'

const SELECTOR = {
    CATEGORY_CONTAINER: ".categories",
    LIST_CONTAINER: ".listWrapper"
}

export default class App {
    constructor() {
        this.init()
    }
    init() {
        this.fb = new Facebook(APP_ID)

        // this.listView = new ListView(document.querySelector(SELECTOR.LIST_CONTAINER))
        this.categoryView = new CategoryView(document.querySelector(SELECTOR.CATEGORY_CONTAINER))
        this.categoryView.on("change", categoryKey => {
            console.log("Category Changed", categoryKey)
            // this.listView.startRenderWithCategory(categoryKey)
        })

        // $(window).on("scroll", debounce(function() {
        //     var scrollHeight = $(document).height();
        //     var scrollPosition = $(window).height() + $(window).scrollTop();
        //     if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        //         // when scroll to bottom of the page
        //         drawList(window.category, window.datalastKey);
        //     }
        // }, 1000));
    }
}

