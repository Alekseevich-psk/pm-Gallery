# Pm-Gallery.js

Pm-Gallery.js - A simple yet powerful responsive image gallery

With pm-Gallery, you can create professional-quality visual content.

1. [**Demo page**](https://alekseevich-psk.github.io/pm-Gallery/dist)
2. [**How usage?**](#how-usage)
3. [**Example**](#example)
4. [**Parameters**](#parameters)

---

## How usage?

1. npm i pm-gallery
2. Add files: <br> HEAD - pm-gallery-style.css <br>
   Scripts - pm-gallery.js
3. Init:

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

| Name                 |         type          | Default |                                  Value                                  | Description                                           |
| :------------------- | :-------------------: | :-----: | :---------------------------------------------------------------------: | :---------------------------------------------------- |
| **positionPreviews** |        string         | 'left'  |            'top' &#124; 'bottom' &#124; 'left'&#124; 'right'            | Positioning of preview images relative to the gallery |
| **objectFitPicture** |        string         | 'cover' | 'fill' &#124; 'contain' &#124; 'cover' &#124; 'scaleDown' &#124; 'none' | Adds the 'object-fit' class for the main image        |
| **visiblePreviews**  |        boolean        |  true   |                            true &#124; false                            | Image preview visibility                              |
| **onCenterPreviews** |        boolean        |  true   |                            true &#124; false                            | Center previews in horizontal mode                    |
| **pagination**       |        boolean        |  false  |                            true &#124; false                            | Pagination visibility                                 |
| **swipeSlider**      |        boolean        |  true   |                            true &#124; false                            | Swipe on main picture                                 |
| **loop**             |        boolean        |  false  |                            true &#124; false                            | Set to true to enable continuous loop mode            |
| **countPreSlides**   |        number         |    4    |                                    -                                    | Number of preview images                              |
| **spaceBetween**     |        number         |   10    |                                    -                                    | Distance between preview images - px                  |
| **previewWidth**     |        number         |   100   |                                    -                                    | Width of the preview image - px                       |
| **previewHeight**    |        number         |   100   |                                    -                                    | Height of the preview image - px                      |
| **speedAnimScroll**  |        number         |   300   |                                    -                                    | Scrolling speed of preview images                     |
| **breakpoints**      |        object         |   {}    |                                    -                                    | Adaptive Parameters                                   |
| **fullScreen**       |        object         |   {}    |                                    -                                    | FullScreen Parameters                                 |
| **borderRadius**     | number &#124; boolean |    4    |                           false &#124; count                            | The options adds border radius for images             |
| **autoPlay**         | number &#124; boolean |  false  |                           false &#124; count                            | Automatic slide change                                |
