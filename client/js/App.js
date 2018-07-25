import Facebook from './Facebook'
import CategoryView from './CategoryView'
import ListView from './ListView'
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

        this.listView = new ListView(document.querySelector(SELECTOR.LIST_CONTAINER))
        this.categoryView = new CategoryView(document.querySelector(SELECTOR.CATEGORY_CONTAINER))
        this.categoryView.on("change", categoryKey => {
            console.log("Category Changed", categoryKey)
            this.listView.renderItem(categoryKey)
        })

        this.listView.renderItem(0)

        $(window).on("scroll", debounce(() => {
            var scrollHeight = $(document).height()
            var scrollPosition = $(window).height() + $(window).scrollTop()
            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                console.log("Need Update")
                this.listView.renderItem(this.listView.categoryKey, this.listView.datalastKey)
            }
        }, 200))
    }
}

window.openNewWindow = (dom) => {
    let url = $(dom).data('url');
    window.open(url,'Share to Facebook','width=550,height=500');
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};