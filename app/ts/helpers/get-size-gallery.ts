interface obj {
    width: number,
    height: number,
}

function getSizeGallery(pmGallery: HTMLElement) {
    const res = new Object() as obj;
    res.width = Math.round(pmGallery.getBoundingClientRect().width * 100) / 100;
    res.height = Math.round(pmGallery.getBoundingClientRect().height * 100) / 100;
    return res;
}

export default getSizeGallery;