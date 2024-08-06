# `fvuarJS v0.0.5`
Create your alert messages with fvuarJS!

![Logo](https://cdn.jsdelivr.net/gh/fvuarjs/fvuarjs/static/img/logo.svg)

<br>

### This is an example of the alert messages you created with us:
```javascript
Fvuar.new({
    text: "This is alert without taking advantage of fvuarJS.",
})
```

<br><br>

## Installation

### NPM

#### Paste these codes into the terminal where you are sure you are in your project directory. It will include the latest version of fvuarjs as a package for you in your project. or `yarn add fvuarjs`
```bash
npm install fvuarjs@latest
```

### CDN

#### Copy this script and paste your html file.
```html
<!-- add in head tag -->
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fvuarjs@0.0.5/styles/fvuar.min.css" />

<!-- add in body tag -->
<script src="https://cdn.jsdelivr.net/npm/fvuarjs@0.0.5/fvuar.min.js"></script>
```

<br><br>

## Examples

### Basic Example in React

```jsx
import 'fvuarjs/styles/fvuar.css';
import Fvuar from 'fvuarjs';

const App = () => {
    // optional
    Fvuar.configure({
        MAXTIME: 10
    })
    
    const showAlert = () => {
        Fvuar.new({
            theme: "success",
            position: "top-right",
            text: "This is a message of success!",
            time: 10, // time
            css: { backgroundColor: 'lightgreen', color: 'darkgreen' }, // If you don't like our theme, you can add your own css rules, most css rules are available.
            clickToClose: true
        });
    };

    return (
        <div>
            <button onClick={showAlert}>Show Alert</button>
        </div>
    );
};

export default App;
```

### Basic Example CDN

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- include css file -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fvuarjs@0.0.5/styles/fvuar.min.css" />
    </head>
    <body>
        <button type="button" id="copy">Copy clipboard</button>

        <!-- include js file -->
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/fvuarjs@0.0.5/fvuar.min.js"></script>
        <script>
            const copyBtn = document.getElementById('copy');

            copyBtn.addEventListener('click', () => {
                Fvuar.new({
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

### The use of (Deprecated as of version 0.0.5)~~`copy()`~~ function is as in the example below:

##### index.html
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- ... -->
    </head>
    <body>
        <button type="button" id="copy">Copy clipboard</button>
        
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/fvuarjs@0.0.4/fvuar.min.js"></script>
        <script>
            const fv = new Fvuar();
            const copyBtn = document.getElementById('copy');

            copyBtn.addEventListener('click', () => {
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

| Methods        | Parameters                                                                                                                                                 | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `configure()`  | `MAXCOUNT`, `MAXTIME`, `DEFAULTTIME`, `DEFAULTTHEME`, `DEFAULTPOSITION`, `CPALERT`, `ALERTOFFSET`, `CLOSEMETHOD`, `HOVERTOTOP`, `CLICKTOCLOSE`, `MULTIPLY` | - `MAXCOUNT`: Determine the maximum number of alerts to be shown on the page. --default value: 4 <br> - `MAXTIME`: Set the maximum time that alerts will remain on the screen. --default value: 4 <br> - `DEFAULTTIME`: Determine the time that alerts will remain on the screen, --default value: 4 <br> - `DEFAULTTHEME`: It determines the default theme of the alerts on the screen, --default value: "default" <br> - `DEFAULTPOSITION`: It determines the default location of alerts on the screen, --default value: "top-right" <br> - `CPALERT`: It takes two values: true or false, if true, the copy function also calls alert. If false, it does not call. --default value: false <br> - `ALERTOFFSET`: You set the distance between alerts (in px) --default value: 70 <br> - `CLOSEMETHOD`: How to turn off alerts? you specify. The value you give will be processed as an event in addEventListener. --default value: "click" <br> - `HOVERTOTOP`: When alerts overlap, the bottom one may not be visible. To fix this situation, set this value to true. This setting highlights the alert you hover over. --default value: false <br> - `CLICKTOCLOSE`: If you want alerts to close when clicked before they expire, set this property to true. --default value: true <br> - `MULTIPLY`: If you want to prevent the old alert from disappearing every time you request a new alert. If you do not want this setting? Set it to true. Is this setting the same on the screen? Allows more than one alert to appear at a time. --default value: false <br> - |
| `new()`        | `theme`, `position`, `text`, `displayTime`, `css`, `clickToClose`                                                                                          | - `theme`: You can determine the theme of your alert by choosing one of the following types: success, default, error, orange, info, warning. --default value : "default" <br> - `text`: The articles you want to appear in the alert will be located here. --default value : "Your Alert is here!" <br> - `position`: top-left, top-center, top-right, center-left, center, center-right, bottom-left, bottom-center, bottom-right --default value : "top-right" <br> - `displayTime`: You can specify the survival time of your alert (the value in seconds you enter, after which the alert will disappear). --default value: 4 <br> - `css`: You can change the alert CSS rules you don't like according to your needs. It supports all [javascript style reference](https://www.w3schools.com/jsref/prop_html_style.asp) features. --default value : none. <br> - `clickToClose`: If you want alerts to close when clicked before they expire, set this property to true. --default value: true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ~~`copy()`~~   | ~~`target`, `alert`, `alertOptions`~~                                                                                                                      | - ~~`target`: If you give the target itself or its id, the copy() function copies the text in that targeted element for you. --default value : none <br> - `alert`: If you want to show alert, set true here. See the next parameter to change alert settings. --default value: false <br> - `alertOptions`: To access here, you must provide true in the previous parameter. It is the parameter where you can set alerts. It takes an object and supports all new() function parameters. --default value: new() function parameters~~                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

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
