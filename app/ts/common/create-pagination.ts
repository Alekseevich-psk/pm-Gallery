export default function createPagination(wrapper: Element, count: number, activeSlide: number = 0, galleryWrap: Element) {
    wrapper.insertAdjacentHTML('afterbegin', `<div class="pm-gallery__pagination pagination"><ul class="pagination__list"></ul></div>`);

    const paginationList = wrapper.querySelector('.pagination__list');

    for (let index = 0; index < count; index++) {
        paginationList.insertAdjacentHTML('afterbegin', `<li class="pagination__item"></li>`);
    }

    const items = wrapper.querySelectorAll('.pagination__item');
    items[activeSlide].classList.add('active');

    items.forEach((element, index) => {
        element.addEventListener('click', () => {
            galleryWrap.dispatchEvent(new CustomEvent("changeSlide", {
                detail: { activeSlide: index }
            }));
        })
    })

    return items;
}