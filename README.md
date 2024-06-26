<div align="center">
    <image src="./banner.webp" width="512" height="512" alt="fvuarjs" />
</div>

# `fvuarJS v1.4.2`
Create your alert messages with fvuarJS!

<br><br>

### This is an example of the alert messages you created with us:
```javascript
const create = new feJS()
create.newAlert({
    text: "This is alert without taking advantage of fvuarJS.",
})
```

<br><br>

## Installation

### CDN

#### Copy this script and paste your html file.
```javascript
<script src="https://cdn.jsdelivr.net/npm/fvuarjs@1.4.2/fvuar.min.js"></script>
```

<br><br>

## Examples

### The use of copiedClipboard() function is as in the example below:

##### index.html
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- ... -->
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/fvuarjs@1.4.2/fvuar.min.js"></script>
    </head>
    <body>
        <button type="button" id="copy">Copy clipboard</button>
        <script>
            const create = new feJS();
            const copyBtn = document.getElementById('copy');

            copyBtn.addEventListener('click', () => {
                create.copiedClipboard({
                    target: copyBtn, // copies the text in the given target or you can also give the element id, for example: '#copy'.
                    text: 'Copied!', // The text to display on the alert.
                    type: 'success', // Alert theme, this could also be one of these: error, orange, info, default, warning
                    position: 'top-center', // The alert location will be displayed at the top and far right of the page.
                    closeButtonText: 'done', // The text that will appear on the button that closes the alert.
                    time: 3 // Alert's existence time.
                });
            });

        </script>
    </body>
</html>
```

<br><br>

| Functions | Parameters | Details |
| ----------| ------------- | -------- |
| `newAlert()` | `type`, `text`, `position`, `closeButtonText`, `time` | - `type`: You can determine the theme of your alert by choosing one of the following types: success, default, error, orange, info, warning. <br> - `text`: The articles you want to appear in the alert will be located here. <br> - `position`: top-left, top-center, top-right, center-left, center, center-right, bottom-left, bottom-center, bottom-right <br> - `closeButtonText`: You can specify the text to be written on the button that terminates your alert. <br> - `time`: You can specify the survival time of your alert (the value in seconds you enter, after which the alert will disappear). |
| `copiedClipboard()` | `target`, `type`, `text`, `position`,`closeButtonText`, `time` | - `target`: hedefin kendisini veya id sini verdiğiniz takdirde fonksiyon gidip o hedeflenen elementin içerisindeki metni kopyalar. <br> - `type`: You can determine the theme of your alert by choosing one of the following types: success, default, error, orange, info, warning. <br> - `text`: The articles you want to appear in the alert will be located here. <br>  - `position`: top-left, top-center, top-right, center-left, center, center-right, bottom-left, bottom-center, bottom-right <br> - `closeButtonText`: You can specify the text to be written on the button that terminates your alert. <br> - `time`: You can specify the survival time of your alert (the value in seconds you enter, after which the alert will disappear). |

<br><br>


# What's next?

- [x] [minify-js](https://minify-js.com/) should release its compressed version.
- [x] A piece of code will be added that will allow the user to change the warning message location according to his needs.
- [x] copyToClipboard fonksiyonu id ile seçebilirken artık hem id si ile hem class'ı ile hemde kendisi ile bir seçim işlemi yapılabilsin.
- [ ] A code will be added so that the user can change the color of the text on the alert to the color he/she chooses.
- [ ] A piece of code will be added where the user can change the font size as he wishes.
- [ ] There will be a restriction on the maximum value of the text on the Alert close button.
- [ ] An animation will be added to Alert's existence and disappearance using css.
