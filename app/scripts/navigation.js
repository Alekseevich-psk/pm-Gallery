(function () {
    const menu = document.querySelector(".menu");
    if (!menu) return;

    const buttons = menu.querySelectorAll(".menu__link");
    const sections = document.querySelectorAll("section");
    const mainPage = "#main";

    for (let i = 0; i < buttons.length; i++) {
        const btn = buttons[i];

        btn.addEventListener("click", (e) => {
            e.preventDefault();

            sections.forEach((section) => {
                if (section.classList.contains("active")) {
                    section.classList.remove("active");
                }
            });

            onSection(btn);
        });
    }

    function onSection(el, hash = null) {
        const link = hash ? hash : "#" + getLink(el);
        const section = document.querySelector(link);

        if (section && !section.classList.contains("active")) {
            section.classList.add("active");

            window.location.hash = link;
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0);
        }
    }

    function getLink(el) {
        return el.href.split("/").pop();
    }
})();
