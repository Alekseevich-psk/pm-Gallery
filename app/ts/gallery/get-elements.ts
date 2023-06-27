export default function getElements(wrapper: string): object | null {
    getMainWrapper();

    let mainWrapper: Element;

    function getMainWrapper() {
        mainWrapper = document.querySelector(wrapper) as HTMLFormElement;
    }

    if (mainWrapper === null) return null;

    type Elements = {
        mainWrapper: Element,
        previewPictures: NodeList,
        wrapperPreviewPictures: Element
    }

    const result: Elements = {
        mainWrapper: mainWrapper,
        previewPictures: mainWrapper.querySelectorAll('.pm-gallery__preview-picture') as NodeList,
        wrapperPreviewPictures: document.querySelector('.pm-gallery__inner--previews') as HTMLFormElement
    };

    // for (const iterator in result) {
    //     if (result[iterator] === null) return null;
    // }

    return result;
}