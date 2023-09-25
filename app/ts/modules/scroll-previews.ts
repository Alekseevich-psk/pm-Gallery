function scrollPreviews(pmGallery: any) {
    const innerPreviews = pmGallery.innerPreviews;
    const track = pmGallery.track;

    let distance = 0;

    innerPreviews.addEventListener('wheel', (event: any) => {
        console.log(event.wheelDeltaY);

        track.style.transform = `translate(0, ${distance + 'px'})`;

        if(event.wheelDeltaY < 0) {
            distance += event.clientY / 10;
        } else {
            distance -= event.clientY / 10;
        }
        
    })

}

export default scrollPreviews;