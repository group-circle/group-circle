
import {CATEGORIES} from './const'

const SELECTOR = {
    ITEM: ".category"
}
const EVENT = {
    CHANGE: "change"
}
export default class CategoryView extends EventEmitter {
    constructor(container) {
        super()
        this.container = container
        this.init()
    }
    init() {
        const that = this
        const container = this.container

        this.container.innerHTML = Object.keys(CATEGORIES).map(categoryKey => {
            const category = CATEGORIES[categoryKey]
            const emoji = category.EMOJI === null ? "" : category.EMOJI
            return `<li class="category" data-key="${category.INDEX}">${emoji} ${category.VALUE}</li>`
        }).join("")
        $(this.container).slick( {dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true})
// On before slide change
$(this.container).on('beforeChange', function(event, slick, currentSlide, nextSlide){
    const nextItem = $(container).find(`[data-key=${nextSlide}]`).get(0)
    nextItem.click()
  });
        $(this.container).delegate(SELECTOR.ITEM, "click", function() {
            const currentCategoryKey = $(container).find(".selected").data("key")
            $(container).find(SELECTOR.ITEM).removeClass("selected")
            $(this).addClass("selected")
            this.classList.add("selected")

            const newCategoryKey = $(this).data("key")
            console.log(this)
            console.log(currentCategoryKey, newCategoryKey)            
            $(container).slick('slickGoTo', newCategoryKey);

            // 이벤트 Emit
            if (currentCategoryKey !== newCategoryKey) {
                console.log(EVENT.CHANGE, newCategoryKey)
                that.emit(EVENT.CHANGE, newCategoryKey)
            }
        })

        // 첫번째 카테고리 선택
        $(container).find(`[data-key=0]`).get(0).click()
    }
}
