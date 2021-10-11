# EMCOR.accessibility

The accessibility tool for EMCOR sites.

## Background & Text Colors

`bg` & `text` colors can be imported with `rgb`, `rgba`, `hex` formats.

```js
<script src="js/helper.js?bg=rgbA(0,0,0,0.1)&bg1=#ABC&text=#00f"></script>
```

Colors are applied when use clicks "Background" button.

## Fonts

`Roboto` & `Source Sans Pro` are being used in this module for now.
Additional fonts can be added in `APP_FONTS` variable.

- 0: element's font
- 1: Roboto
- 2: Source Sans Pro

## Font Size

We have 9 options `ZOOM_SETTINGS` variable for font size.

- 0: use element's original size
- 1: 125% of element's original size
- 2: 150%
- 3: 175%
- 4: 200%
- 5: 225%
- 6: 250%
- 7: 275%
- 8: 300%

## Line Height

Use the same flow to Font Size.

## Letter Spacing

We have 9 options `LETTER_SPACINGS` variable for letter spacing.

- 0: use element's original size
- 1: 2px
- 2: 4px
- 3: 6px
- 4: 8px
- 5: 10px
- 6: 12px
- 7: 14px
- 8: 16px

## Text Reader

For reading text, we use [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).
