(function () {


    class PmGallery {
        private wrapper: HTMLFormElement;
        private wrapperForPreviewElements: HTMLFormElement;
        private previews: NodeList;
        private activeIndex: number = 0;
        private scrollElem: number = 0;

        constructor(parent: string, options: object) {
            this.wrapper = this.getParentElement(parent);
            this.previews = this.getPreviewPictures(this.wrapper);
            this.wrapperForPreviewElements = this.getWrapperForPreviewElements(this.wrapper);

            this.init();
        }

        getParentElement(element: string) {
            return document.querySelector(element) as HTMLFormElement;
        }

        getPreviewPictures(parent: HTMLFormElement) {
            return parent.querySelectorAll('.pm-gallery__preview-picture') as NodeList;
        }

        getWrapperForPreviewElements(parent: HTMLFormElement) {
            return document.querySelector('.pm-gallery__inner--previews') as HTMLFormElement;
        }

        addListenerForPreviewElements(elements: NodeList) {
            elements.forEach((element: any, index: number) => {
                element.addEventListener('click', () => {
                    this.changeActiveElem(index);
                })
            });
        }

        changeActiveElem(index: number) {

            if (this.activeIndex !== index) {
                (this.previews[this.activeIndex] as Element).classList.remove('active');
                this.activeIndex = index;
                (this.previews[this.activeIndex] as Element).classList.add('active');

                this.scrollParent(
                    this.wrapperForPreviewElements,
                    this.heightActiveElem(index),
                    index
                );
            }

        }

        scrollParent(parent: HTMLFormElement, heightActiveElem: number, index: number) {
            parent.scrollTop = (index * heightActiveElem) - heightActiveElem;
        }

        heightActiveElem(elem: number): number {
            return (
                (this.previews[elem] as Element).getBoundingClientRect().bottom -
                (this.previews[elem] as Element).getBoundingClientRect().top
            );
        }

        init() {
            (this.previews[this.activeIndex] as Element).classList.add('active');
            this.addListenerForPreviewElements(this.previews);



            setTimeout(() => {
                this.wrapperForPreviewElements.addEventListener('wheel', (evt) => {

                    if (evt.deltaY > 0) {
                        this.scrollElem = this.scrollElem + 200;

                        this.wrapperForPreviewElements.scrollTop = this.scrollElem;

                        console.log(this.scrollElem);

                    }

                });
            }, 100);
        }

    }


    new PmGallery(".pm-gallery", {

    })


}());