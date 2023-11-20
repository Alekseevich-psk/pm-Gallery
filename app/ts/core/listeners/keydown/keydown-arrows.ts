import nextIndex from "../../modules/change-index/next-index";
import prevIndex from "../../modules/change-index/prev-index";

export default function keydownArrows(pmGallery: any) {
    document.addEventListener('keydown', (e) => {

        if (e.key === 'ArrowRight') {
            nextIndex(pmGallery);
        }

        if (e.key === 'ArrowLeft') {
            prevIndex(pmGallery);
        }
    });
};