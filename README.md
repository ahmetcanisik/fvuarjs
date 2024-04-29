# Create your alert messages with fvuarJS.

### Example of alert messages presented by the browser:
```javascript
alert("Bu, fvuarJS'in nimetlerinden yararlanmamış alert.")
```

### This is an example of the alert messages you created with us:
```javascript
const create = new feJS()
create.newAlert({
    text: "Bu, fvuarJS'in nimetlerinden yararlanmamış alert.",
})
```

| Functions | Parameters | Details |
| ----------| ------------- | -------- |
| `newAlert()` | `type`, `text`, `closeButtonText`, `time` | - `type`: You can determine the theme of your alert by choosing one of the following types: success, default, error, orange, info, warning. <br> - `text`: The articles you want to appear in the alert will be located here. <br> - `closeButtonText`: You can specify the text to be written on the button that terminates your alert. <br> - `time`: You can specify the survival time of your alert (the value in seconds you enter, after which the alert will disappear). |
| `copiedClipboard()` | `id`, `type`, `text`, `closeButtonText`, `time` | - `id`: Since we get `id` with `getElementById`, do not use letters and symbols unrelated to id, such as #, at the beginning or end of id. <br> - `type`: You can determine the theme of your alert by choosing one of the following types: success, default, error, orange, info, warning. <br> - `text`: The articles you want to appear in the alert will be located here. <br> - `closeButtonText`: You can specify the text to be written on the button that terminates your alert. <br> - `time`: You can specify the survival time of your alert (the value in seconds you enter, after which the alert will disappear). |
