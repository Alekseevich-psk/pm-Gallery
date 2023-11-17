(function () {
    const parent = document.querySelector(".demo");
    if (!parent) return;
    const options = {};

    const paramsInput = parent.querySelectorAll("input");
    const paramsSelect = parent.querySelectorAll("select");

    const gallery = new PmGallery(".demo__gallery", options);

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

    function setSelectValue(select) {
        options[select.id] = select.value;
    }

    function setInputValue(input) {
        if (input.type === "checkbox") {
            options[input.name] = input.checked ? true : false;
        }

        if (input.type === "range") {
            options[input.name] = Number(input.value);
        }
    }

    function updateGallery(options) {
        // gallery.update();
    }

})();
