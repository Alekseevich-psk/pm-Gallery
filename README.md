# pm-Gallery

## Micro gallery for your project

pm-Gallery - being developed as a test project within the framework of learning JavaScript

With pm-Gallery, you can create professional-quality visual content.

1. [**Demo page**](https://alekseevich-psk.github.io/pm-Gallery/dist)
2. [**How install?**](#how-install)
3. [**Example**](#example)
4. [**Parameters**](#parameters)

---

## How install?

1. npm i pm-gallery
2. Add files: <br> HEAD - pm-gallery-style.css <br>
   Scripts - pm-gallery.js
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

| Name     | type | Default |                        Value                         | Description |
| :------- | :--: | :-----: | :--------------------------------------------------: | :---------- |
| **test** | test | 'test'  | test &#124; test &#124; test &#124; test &#124; test | test        |
