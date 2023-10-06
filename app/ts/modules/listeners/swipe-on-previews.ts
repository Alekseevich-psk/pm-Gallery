import prevItem from "../change-index/prev-index";
import nextItem from "../change-index/next-index";

function swipeOnPreviews(pmGallery: any) {
    const previews = pmGallery.innerPreviews;
    const minDistance = 30;

    let xTouchStart: number = 0;
    let xTouchEnd: number = 0;
    let yTouchStart: number = 0;
    let yTouchEnd: number = 0;

    previews.addEventListener('touchstart', function (e: TouchEvent) {
        xTouchStart = e.targetTouches[0].clientX;
        yTouchStart = e.targetTouches[0].clientY;
    });

    previews.addEventListener('touchend', (e: TouchEvent) => {
        xTouchEnd = e.changedTouches[0].clientX;
        yTouchEnd = e.changedTouches[0].clientY;


        if ((Math.abs(xTouchStart - xTouchEnd)) <= minDistance) return;

        if (xTouchStart < xTouchEnd || yTouchStart < yTouchEnd) prevItem(pmGallery);
        if (xTouchStart > xTouchEnd || yTouchStart > yTouchEnd) nextItem(pmGallery);
    });

}

export default swipeOnPreviews;