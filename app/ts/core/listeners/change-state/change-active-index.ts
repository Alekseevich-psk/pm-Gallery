import sliderScrollPreviews from "../../../previews/scroll-previews/slider-scroll-previews";
import changeActivePreview from "../../modules/change-slide/change-active-preview";
import changeMainPicture from "../../modules/change-slide/change-main-picture";
import changeActivePaginationItem from "../../../modules/pagination/change-active-item";
import initAutoPlay from "../../../modules/autoplay/init-auto-play";
import changeActiveControls from "../../modules/controls/change-active-controls";

function changeActiveIndex(pmGallery: any) {
    pmGallery.wrapper.addEventListener('changeIndex', (event: CustomEvent) => {
        initAutoPlay(pmGallery);

        changeActiveControls(pmGallery, event.detail.activeIndex);
        changeActivePreview(pmGallery, event.detail.activeIndex);
        changeActivePaginationItem(pmGallery, event.detail.activeIndex);
        changeMainPicture(pmGallery, event.detail.activeIndex);

        pmGallery.activeIndex = event.detail.activeIndex;
        sliderScrollPreviews(pmGallery);
    });
}

export default changeActiveIndex;