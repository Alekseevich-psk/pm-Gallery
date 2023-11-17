import changeIndex from "../../events/on-change-index";

function clickPreviews(pmGallery: any) {
    const previews = pmGallery.previews;
    const delta = 6;

    for (let i = 0; i < previews.length; i++) {
        const element = previews[i];
        let startX: number;
        let startY: number;

        element.addEventListener('pointerdown', function (event: PointerEvent) {
            startX = event.clientX;
            startY = event.clientY;
        });

        element.addEventListener('pointerup', function (event: PointerEvent) {
            let endX = Math.abs(event.clientX - startX);
            let endY = Math.abs(event.clientY - startY);

            if (endX < delta && endY < delta) {
                changeIndex(pmGallery, i);
            }
        });
    };
}

export default clickPreviews;