import nextIndex from "../change-index/next-index";
import prevIndex from "../change-index/prev-index";

function swipeSlider(pmGallery: any, slider: HTMLElement) {
    slider.addEventListener('pointerdown', pointerDownHandler);

    function pointerDownHandler(event: PointerEvent) {
        const touchStart = event.clientX;

        slider.addEventListener('pointerup', pointerUpHandler);

        function pointerUpHandler(event: PointerEvent) {
            let touchEnd = event.clientX;

            if(touchStart < touchEnd) {
                prevIndex(pmGallery);
            }

            if(touchStart > touchEnd) {
                nextIndex(pmGallery);
            }
            
            slider.removeEventListener('pointerup', pointerUpHandler);
        }
    }

    slider.ondragstart = function () { return false; };
    slider.onselectstart = function () { return false; };
}

export default swipeSlider;