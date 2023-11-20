(function () {
    const menu = document.querySelector(".menu");
    if (!menu) return;

    const btn = menu.querySelector(".menu__btn");

    btn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
    
})();
