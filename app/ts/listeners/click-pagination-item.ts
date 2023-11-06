import onChangeIndex from "../event/on-change-index";

function clickPaginationItem(pmGallery: any) {
    const paginationItems = pmGallery.paginationItems;

    for (let i = 0; i < paginationItems.length; i++) {
        const element = paginationItems[i];

        element.addEventListener('click', () => {
            onChangeIndex(pmGallery, i);
        });
    };
}

export default clickPaginationItem;