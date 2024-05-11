# Create your alert messages with fvuarJS.

### Example of alert messages presented by the browser:
```javascript
alert("This is alert without taking advantage of fvuarJS.")
```

### This is an example of the alert messages you created with us:
```javascript
const create = new feJS()
create.newAlert({
    text: "This is alert without taking advantage of fvuarJS.",
})
```


## Installation

### Manuel intallation
Go to [latest](https://github.com/ahmetcanisik/fvuarJS/releases/latest) version.

### or CDN

#### Copy this script and paste your html file.
```javascript
<script src="https://cdn.jsdelivr.net/npm/fvuarjs@1.2/fvuar.min.js"></script>
```

### The use of copiedClipboard() function is as in the example below:

##### index.html
```html
<!-- ... -->
<head>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/fvuarjs@1.2/fvuar.min.js"></script>
</head>
<body>
    <input id="myInput" type="text" value="Test value">
    <button type="button" id="copy">Copy clipboard</button>
    <script>
        const create = new feJS();
        const copyBtn = document.getElementById('copy');

        copyBtn.addEventListener('click', () => {
            create.copiedClipboard({
                id: 'myInput',
                text: 'Copied!',
                type: 'success',
                closeButtonText: 'done',
                time: 3
            });
        });

    </script>
</body>
<!-- ... -->
```

| Functions | Parameters | Details |
| ----------| ------------- | -------- |
| `newAlert()` | `type`, `text`, `closeButtonText`, `time` | - `type`: You can determine the theme of your alert by choosing one of the following types: success, default, error, orange, info, warning. <br> - `text`: The articles you want to appear in the alert will be located here. <br> - `closeButtonText`: You can specify the text to be written on the button that terminates your alert. <br> - `time`: You can specify the survival time of your alert (the value in seconds you enter, after which the alert will disappear). |
| `copiedClipboard()` | `id`, `type`, `text`, `closeButtonText`, `time` | - `id`: Since we get `id` with `getElementById`, do not use letters and symbols unrelated to id, such as #, at the beginning or end of id. <br> - `type`: You can determine the theme of your alert by choosing one of the following types: success, default, error, orange, info, warning. <br> - `text`: The articles you want to appear in the alert will be located here. <br> - `closeButtonText`: You can specify the text to be written on the button that terminates your alert. <br> - `time`: You can specify the survival time of your alert (the value in seconds you enter, after which the alert will disappear). |


# What's next?

- [x] [minify-js](https://minify-js.com/) should release its compressed version.
- [ ] A code will be added so that the user can change the color of the text on the alert to the color he/she chooses.
- [ ] A piece of code will be added where the user can change the font size as he wishes.
- [ ] There will be a restriction on the maximum value of the text on the Alert close button.
- [ ] An animation will be added to Alert's existence and disappearance using css.
