<div align="center">
    <image src="./banner.webp" width="192" height="192" alt="fvuarjs" />
</div>

# `fvuarJS v0.0.3`
Create your alert messages with fvuarJS!

<br><br>

### This is an example of the alert messages you created with us:
```javascript
const fv = new Fvuar()
fv.new({
    text: "This is alert without taking advantage of fvuarJS.",
})
```

<br><br>

## Installation

### NPM

#### Paste these codes into the terminal where you are sure you are in your project directory. It will include the latest version of fvuarjs as a package for you in your project. or `yarn add fvuarjs`
```bash
npm install fvuarjs
```

### CDN

#### Copy this script and paste your html file.
```javascript
<script src="https://cdn.jsdelivr.net/npm/fvuarjs@0.0.3/fvuar.min.js"></script>
```

<br><br>

## Examples

### The use of `copy()` function is as in the example below:

##### index.html
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- ... -->
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/fvuarjs@0.0.3/fvuar.min.js"></script>
    </head>
    <body>
        <button type="button" id="copy">Copy clipboard</button>
        <script>
            const fv = new Fvuar();
            const copyBtn = document.getElementById('copy');

            copyBtn.addEventListener('click', () => {
                //      element  alert 
                fv.copy(copyBtn, true, {
                    text: 'Copied!', // The text to display on the alert.
                    theme: 'success', // Alert theme, this could also be one of these: error, orange, info, default, warning
                    position: 'top-center', // The alert location will be displayed at the top and far right of the page.
                    displayTime: 3 // Alert's existence time.
                });
            });

        </script>
    </body>
</html>
```

<br><br>

| Methods   | Parameters                                                                                                                                                 | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Fvuar()` | `maxCount`, `maxTime`, `defaultTime`, `defaultTheme`, `defaultPosition`, `cpAlert`, `alertOffset`, `closeMethod`, `hoverToTop`, `clickToClose`, `multiply` | - `maxCount`: Determine the maximum number of alerts to be shown on the page. --default value: 4 <br> - `maxTime`: Set the maximum time that alerts will remain on the screen. --default value: 4 <br> - `defaultTime`: Determine the time that alerts will remain on the screen, --default value: 4 <br> - `defaultTheme`: It determines the default theme of the alerts on the screen, --default value: "default" <br> - `defaultPosition`: It determines the default location of alerts on the screen, --default value: "top-right" <br> - `cpAlert`: It takes two values: true or false, if true, the copy function also calls alert. If false, it does not call. --default value: false <br> - `alertOffset`: You set the distance between alerts (in px) --default value: 70 <br> - `closeMethod`: How to turn off alerts? you specify. The value you give will be processed as an event in addEventListener. --default value: "click" <br> - `hoverToTop`: When alerts overlap, the bottom one may not be visible. To fix this situation, set this value to true. This setting highlights the alert you hover over. --default value: false <br> - `clickToClose`: If you want alerts to close when clicked before they expire, set this property to true. --default value: true <br> - `multiply`: If you want to prevent the old alert from disappearing every time you request a new alert. If you do not want this setting? Set it to true. Is this setting the same on the screen? Allows more than one alert to appear at a time. --default value: false <br> - |
| `new()`   | `theme`, `position`, `text`, `displayTime`, `css`, `clickToClose`                                                                                          | - `theme`: You can determine the theme of your alert by choosing one of the following types: success, default, error, orange, info, warning. --default value : "default" <br> - `text`: The articles you want to appear in the alert will be located here. --default value : "Your Alert is here!" <br> - `position`: top-left, top-center, top-right, center-left, center, center-right, bottom-left, bottom-center, bottom-right --default value : "top-right" <br> - `displayTime`: You can specify the survival time of your alert (the value in seconds you enter, after which the alert will disappear). --default value: 4 <br> - `css`: You can change the alert CSS rules you don't like according to your needs. It supports all [javascript style reference](https://www.w3schools.com/jsref/prop_html_style.asp) features. --default value : none. <br> - `clickToClose`: If you want alerts to close when clicked before they expire, set this property to true. --default value: true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `copy()`  | `target`, `alert`, `alertOptions`                                                                                                                          | - `target`: If you give the target itself or its id, the copy() function copies the text in that targeted element for you. --default value : none <br> - `alert`: If you want to show alert, set true here. See the next parameter to change alert settings. --default value: false <br> - `alertOptions`: To access here, you must provide true in the previous parameter. It is the parameter where you can set alerts. It takes an object and supports all new() function parameters. --default value: new() function parameters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

<br><br>


# What's next?

- [x] [minify-js](https://minify-js.com/) should release its compressed version.
- [x] A piece of code will be added that will allow the user to change the warning message location according to his needs.
- [x] While you can select the copy() function with its id, now you can make a selection with its id, its class and itself.
- [ ] Color codes will be rearranged according to dark and light themes.
- [ ] A code will be added so that the user can change the color of the text on the alert to the color he/she chooses.
- [ ] A piece of code will be added where the user can change the font size as he wishes.
- [ ] There will be a restriction on the maximum value of the text on the Alert close button.
- [ ] An animation will be added to Alert's existence and disappearance using css.
