# pm-Gallery

## Micro gallery for your project

pm-Gallery - being developed as a test project within the framework of learning JavaScript

With pm-Gallery, you can create professional-quality visual content.

1. [**Demo page**](https://alekseevich-psk.github.io/pm-Gallery/dist)
2. [**How instal?**](#how-instal)
3. [**Example**](#example)
4. [**Parameters**](#parameters)

---

## How instal?

1. [**pm-gallery-style.css**](https://github.com/Alekseevich-psk/pm-Gallery/blob/main/dist/pm-gallery-style.css)
2. [**pm-gallery.js**](https://github.com/Alekseevich-psk/pm-Gallery/blob/main/dist/pm-gallery.js)
3. Init

```js
new PmGallery(".pm-gallery", {});
```

## Example:

```html
<div class="pm-gallery">
    <div class="pm-gallery__wrapper">
        <div class="pm-gallery__inner pm-gallery__inner--previews">
            <div class="pm-gallery__preview-picture">
                <img src="./images/1.jpg" alt="" />
            </div>
            <div class="pm-gallery__preview-picture">
                <img src="./images/2.jpg" alt="" />
            </div>
        </div>

        <div class="pm-gallery__inner pm-gallery__inner--picture"></div>
    </div>
</div>
```

---

## Parameters

---

| Name          |  type  | Default |                            Value                             | Description                                                                   |
| :------------ | :----: | :-----: | :----------------------------------------------------------: | :---------------------------------------------------------------------------- |
| **objectFit** | string | 'cover' | cover &#124; contain &#124; none &#124; fill &#124; scaleDown | The 'object-fit' CSS property sets how the content of a replaced main picture |
| **positionPreviews** | string | 'verticalLeft' | horizontalBottom &#124; horizontalTop &#124; verticalRight | managing the position of preview images relative to the main picture|
| **animationSlide** | string | 'none' | zoom &#124; fade &#124; slide &#124; flip | Add animation for slide|
| **pagination** | boolean | false | false &#124; true | Parameter add pagination |
| **fullScreenMode** | boolean | false | false &#124; true | Parameter add fullScreen mode. Preview main picture on all screen |
| **autoPlay** | number | false | >1000 | Parameter add autoPlay. |
| **activeSlide** | number | 0 | number > 0 &#124; number < arr.count | Active slide by the set value |
