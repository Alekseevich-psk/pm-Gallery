import pmgClasses from "../types/pmgClasses";
import getSizeElement from "../helpers/get-size-element";

function fullScreen(pmGallery: any) {
    const wrapper = pmGallery.wrapper;
    const btnScreen = wrapper.querySelector('.' + pmgClasses['btnScreen']);
    let flagFullScreen = false;

    btnScreen.addEventListener('click', () => {
        wrapper.classList.toggle(pmgClasses['fullScreen']);
        (!flagFullScreen) ? onFullScreen() : offFullScreen();
    });

    function onFullScreen() {
        let sizeWrapper = getSizeElement(wrapper);
        console.log(sizeWrapper);
        
        // pmGallery.innerPicture.style.width = sizeWrapper.width - pmGallery.initOptions.widthSlide + 'px';
        // pmGallery.innerPicture.style.left = pmGallery.initOptions.widthSlide + 'px';
        flagFullScreen = true;
    }

    function offFullScreen() {
        let sizeWrapper = getSizeElement(wrapper);
        // pmGallery.innerPicture.style.width = sizeWrapper.width - pmGallery.initOptions.widthSlide + 'px';
        // pmGallery.innerPicture.style.left = pmGallery.initOptions.widthSlide + 'px';
        flagFullScreen = false;
    }

}

export default fullScreen;