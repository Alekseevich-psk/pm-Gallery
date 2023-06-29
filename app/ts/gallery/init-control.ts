export default function initControl(wrapper: Element) {
    const pmGalleryInnerPicture = wrapper.querySelector('.pm-gallery__inner--picture') as Element;

    const controlElements: string = `    
    <div class="pm-gallery__control">
        <div class="pm-gallery__arrows">
            <div class="pm-gallery__arrow pm-gallery__arrow--prev"></div>
            <div class="pm-gallery__arrow pm-gallery__arrow--next"></div>
        </div>
        <div class="pm-gallery__btn-size"></div>
    </div>`;

    pmGalleryInnerPicture.insertAdjacentHTML('afterbegin', controlElements);

    const btnPrevSlide: Element = wrapper.querySelector('.pm-gallery__arrow--prev');
    const btnNextSlide: Element = wrapper.querySelector('.pm-gallery__arrow--next');

    btnPrevSlide.addEventListener('click', function () {
        wrapper.dispatchEvent(new CustomEvent("changeSlide", {
            detail: { btn: "prev" }
        }));
    })

    btnNextSlide.addEventListener('click', function () {
        wrapper.dispatchEvent(new CustomEvent("changeSlide", {
            detail: { btn: "next" }
        }));
    })

}