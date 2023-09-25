function countPreSlides(pmGallery: any) {
    console.log(pmGallery);
    
    const countSlides = pmGallery.initOptions.countPreSlides;
    const previews = pmGallery.initOptions.previews as NodeList;

    const widthWrapper = pmGallery.wrapper.getBoundingClientRect().width;

    console.log(widthWrapper);
    
    
}


export default countPreSlides;