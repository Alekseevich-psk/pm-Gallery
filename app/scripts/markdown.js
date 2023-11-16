import readmeFile from "./../../README.md";

(function () {
    const markdown = document.querySelector(".markdown");
    if (!markdown) return;
    markdown.innerHTML = readmeFile;
})();
