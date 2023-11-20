(function () {
    const parent = document.querySelector(".demo");
    if (!parent) return;
    const options = {};

    const gallery = parent.querySelector(".demo__gallery");
    const paramsInput = parent.querySelectorAll("input");
    const paramsSelect = parent.querySelectorAll("select");
    const consoleStatus = parent.querySelector(".console__status");
    const consoleInnerBody = parent.querySelector(".console__inner--body code");

    getInitOptions();
    const demoGallery = new PmGallery(gallery, options);

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

        paramsSelect.forEach((select) => {
            setSelectValue(select);
        });

        printOptions(options);
    }

    function setSelectValue(select) {
        options[select.id] = String(select.value);
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
        demoGallery.update();
        printOptions(options);
    }

    function printOptions(options) {
        consoleInnerBody.innerHTML = "";
        consoleInnerBody.insertAdjacentHTML("beforeend", "{<br>");

        for (let key in options) {
            if (options.hasOwnProperty(key)) {
                let res;
                if (typeof options[key] === "string") {
                    res = `&nbsp&nbsp${key}: "${options[key]}", <br>`;
                } else {
                    res = `&nbsp&nbsp${key}: ${options[key]}, <br>`;
                }
                consoleInnerBody.insertAdjacentHTML("beforeend", res);
            }
        }
        consoleInnerBody.insertAdjacentHTML("beforeend", "}");
    }
})();
