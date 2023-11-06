import onChangeIndex from "../event/on-change-index";

function clickPreviews(pmGallery: any) {
    const previews = pmGallery.previews;

    for (let i = 0; i < previews.length; i++) {
        const element = previews[i];

        element.addEventListener('click', () => {
            onChangeIndex(pmGallery, i);
        })
    };
}

export default clickPreviews;