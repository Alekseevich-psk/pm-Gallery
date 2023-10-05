import prevItem from "../change-item/prev-item";
import nextItem from "../change-item/next-item";

function swipeOnPreviews(pmGallery: any) {
    const previews = pmGallery.innerPreviews;
    const minDistance = 30;

    let xTouchStart: number = null;
    let xTouchEnd: number = null;
    let yTouchStart: number = null;
    let yTouchEnd: number = null;

    previews.addEventListener('touchstart', function (e: TouchEvent) {
        xTouchStart = e.targetTouches[0].clientX;
        yTouchStart = e.targetTouches[0].clientY;

        console.log(e);
        
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