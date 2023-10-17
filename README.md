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
    <img src="./images/img-small-1.svg" data-src="./images/img-large-1.svg" alt="img" />
    <img src="./images/img-small-2.svg" data-src="./images/img-large-2.svg" alt="img" />
    <img src="./images/img-small-3.svg" data-src="./images/img-large-3.svg" alt="img" />
</div>
```

---

## Parameters

---

| Name     | type | Default |                        Value                         | Description |
| :------- | :--: | :-----: | :--------------------------------------------------: | :---------- |
| **test** | test | 'test'  | test &#124; test &#124; test &#124; test &#124; test | test        |
