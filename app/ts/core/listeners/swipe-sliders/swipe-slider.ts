import nextIndex from "../../modules/change-index/next-index";
import prevIndex from "../../modules/change-index/prev-index";
import pmGalleryClasses from "../../setting/pmgClasses";

function swipeSlider(pmGallery: any, slider: HTMLElement) {
    const delta = 8;

    function pointerDownHandler(event: PointerEvent) {

        const checkVerticalPreviews = () => {
            return pmGallery.posPreviews === pmGalleryClasses['vertical'] ? true : false
        }

        const touchStart = (checkVerticalPreviews() ? event.clientY : event.clientX);
        slider.addEventListener('pointerup', pointerUpHandler);

        function pointerUpHandler(event: PointerEvent) {
            let touchEnd = (checkVerticalPreviews() ? event.clientY : event.clientX);
            let newDelta = Math.abs(touchEnd - touchStart);

            if (touchStart < touchEnd && newDelta > delta) {
                prevIndex(pmGallery);
            }

            if (touchStart > touchEnd && newDelta > delta) {
                nextIndex(pmGallery);
            }

            slider.removeEventListener('pointerup', pointerUpHandler);
        }
    }

    slider.ondragstart = function () { return false; };
    slider.onselectstart = function () { return false; };
    slider.addEventListener('pointerdown', pointerDownHandler);
}

export default swipeSlider;