import { pmgAnimSlide } from "../../types/pmgAnimSlide";

function changeMainPicture(pmGallery: any, index: number) {
    const picture = pmGallery.mainPicture;
    const preview = pmGallery.previews[index].querySelector('img');
    if (!preview) return;



    const animSlide = pmGallery.animSlide;

    let animation = pmgAnimSlide.includes(animSlide);

    console.log(animSlide, animation);
    if(animation) {

    }

    

    


    picture.src = preview.src;
    picture.classList.add('anim-fade');

    setTimeout(() => {
        picture.classList.remove('anim-fade');
    }, 500);

}

export default changeMainPicture;