(function () {
    const parent = document.querySelector(".demo");
    if (!parent) return;
    const options = {};

    const gallery = document.querySelector(".demo__gallery");
    const paramsInput = parent.querySelectorAll("input");
    const paramsSelect = parent.querySelectorAll("select");
    
    getInitOptions();

    paramsInput.forEach((input) => {
        setInputValue(input);

        input.addEventListener("change", (e) => {
            setInputValue(input);
            updateGallery(options);
        });
    });

    paramsSelect.forEach((select) => {
        setSelectValue(select);

        select.addEventListener("change", (e) => {
            setSelectValue(select);
            updateGallery(options);
        });
    });

    function getInitOptions() {
        paramsInput.forEach((input) => {
            setInputValue(input);
        });

        paramsInput.forEach((select) => {
            setSelectValue(select);
        });
    }

    function setSelectValue(select) {
        options[select.id] = select.value;
    }

    function setInputValue(input) {
        if (input.type === "checkbox") {
            options[input.name] = input.checked ? true : false;
        }

        if (input.type === "range") {
            options[input.name] = input.value;
        }
    }

    function updateGallery(options) {
        demoGallery.update();
    }

    const demoGallery = new PmGallery(gallery, options);
})();
