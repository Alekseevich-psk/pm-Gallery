import eventChangeItem from "../modules/change-index/event-change-index";

function clickPreviews(pmGallery: any) {
    const previews = pmGallery.previews;

    for (let i = 0; i < previews.length; i++) {
        const element = previews[i];

        element.addEventListener('click', () => {
            eventChangeItem(pmGallery, i);
        })
    };
}

export default clickPreviews;