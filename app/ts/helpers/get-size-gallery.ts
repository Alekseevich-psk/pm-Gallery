interface obj {
    width: number,
    height: number,
}

function getSizeGallery(pmGallery: any) {
    const res = new Object() as obj;
    
    res.width = pmGallery.wrapper.getBoundingClientRect().width;
    res.height = pmGallery.wrapper.getBoundingClientRect().height;

    return res;
}


export default getSizeGallery;