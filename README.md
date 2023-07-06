# pm-Gallery

## Микро галерея

pm-Gallery - разрабатывается в качестве тестового проекта в рамках изучения javaScript

С pm-Gallery Вы можете создавать визуальный контент профессионального качества.

---

[**Demo page**](https://alekseevich-psk.github.io/pm-Gallery/dist) - Тестовая страница

---

Пример разметки:

```html
<div class="pm-gallery">
    <div class="pm-gallery__wrapper">

        <div class="pm-gallery__inner pm-gallery__inner--previews">
            <div class="pm-gallery__preview-picture">
                <img src="./images/1.jpg" data-pm-gallery-src="./images/1.jpg" alt="" />
            </div>
            <div class="pm-gallery__preview-picture">
                <img src="./images/2.jpg" alt="" />
            </div>
        </div>

        <div class="pm-gallery__inner pm-gallery__inner--picture">
            <img src="./images/1.jpg" class="pm-gallery__main-picture" alt="" />
        </div>

    </div>
</div>
```
