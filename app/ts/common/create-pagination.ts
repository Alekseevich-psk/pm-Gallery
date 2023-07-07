export default function createPagination(wrapper: Element, count: number, activeSlide: number = 0) {
    wrapper.insertAdjacentHTML('afterbegin', `<div class="pm-gallery__pagination pagination"><ul class="pagination__list"></ul></div>`);

    const paginationList = wrapper.querySelector('.pagination__list');

    for (let index = 0; index < count; index++) {
        paginationList.insertAdjacentHTML('afterbegin', `<li class="pagination__item"></li>`);
    }
    console.log(activeSlide);
    
    const items = wrapper.querySelectorAll('.pagination__item');
    items[activeSlide].classList.add('active');

    items.forEach((element, index) => {
        element.addEventListener('click', ()=> {
            wrapper.dispatchEvent(new CustomEvent("changeSlide", {
                detail: { activeSlide:  index}
            }));
        })
    })

    return items;
}