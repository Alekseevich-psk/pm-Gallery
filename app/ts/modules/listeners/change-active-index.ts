import sliderScrollPreviews from "../scroll-previews/slider-scroll-previews";
import changeActivePreview from "../change-slide/change-active-preview";
import changeMainPicture from "../change-slide/change-main-picture";

function changeActiveIndex(pmGallery: any) {
    pmGallery.wrapper.addEventListener('changeActiveIndex', (event: CustomEvent) => {
        changeActivePreview(pmGallery, event.detail.activeIndex);
        changeMainPicture(pmGallery, event.detail.activeIndex);
        pmGallery.activeIndex = event.detail.activeIndex;
        
        sliderScrollPreviews(pmGallery);
    });
}

export default changeActiveIndex;