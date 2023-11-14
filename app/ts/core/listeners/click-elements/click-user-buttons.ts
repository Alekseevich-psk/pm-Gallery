import nextIndex from "../../modules/change-index/next-index";
import prevIndex from "../../modules/change-index/prev-index";
import fullScreen from "../../modules/full-screen/full-screen";

function clickUserButtons(pmGallery: any) {

    if (!pmGallery.userControls) return;

    const userBtnPrev = pmGallery.userControls.btnPrev;
    const userBtnNext = pmGallery.userControls.btnNext;
    const userBtnScreen = pmGallery.userControls.btnScreen;

    if (userBtnPrev) {
        userBtnPrev.addEventListener('click', () => {
            prevIndex(pmGallery);
        });
    }

    if (userBtnNext) {
        userBtnNext.addEventListener('click', () => {
            nextIndex(pmGallery);
        });
    }

    if (userBtnScreen) {
        userBtnScreen.addEventListener('click', () => {
            fullScreen(pmGallery);
        });
    }

}

export default clickUserButtons;