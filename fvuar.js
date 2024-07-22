// fvuar = Fast Visual User Alerts Resource

class fvuar {
    constructor({
                    maxCount = 4,
                    maxTime = 4,
                    defaultTime = 4,
                    defaultTheme = "default",
                    defaultPosition = "top-right",
                    cpAlert = false,
                    alertOffset = 70,
                    closeMethod = "dblclick",
                    hoverToTop = true
                } = {}) {
        // clear all localStorage keys
        localStorage.clear()


        // defines
        this.cpAlert = cpAlert;
        this.alertOffset = alertOffset;
        this.closeMethod = closeMethod;
        this.hoverToTop = hoverToTop;
        this.defaultTheme = defaultTheme;
        this.defaultPosition = defaultPosition;


        // generate random values
        this.gnRand = function (length) {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let prc = [];
            let result;

            try {
                const storedPrc = localStorage.getItem("prc");
                if (!storedPrc) {
                    localStorage.setItem("prc", JSON.stringify([]));
                } else {
                    prc = JSON.parse(storedPrc);
                }
            } catch (e) {
                console.error("Error accessing localStorage", e);
                prc = [];
            }

            do {
                result = Array.from({length}, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
            } while (prc.includes(result));

            prc.push(result);
            try {
                localStorage.setItem('prc', JSON.stringify(prc));
            } catch (e) {
                console.error("Error setting localStorage", e);
            }
            return result;
        };


        // Static and dynamic code functions to be applied to alert elements and styles on the page.
        this.code = {
            static: this.gnRand(9),
            dynamic: (count = 6) => this.gnRand(count)
        };


        // all options
        this.options = {
            // general options
            len: 0,                         // fv-alert count on the screen
            defaultTime: defaultTime,       // Default time for fv-alert to stay on screen
            maxCount: maxCount,             // max fv-alert count on the screen
            maxTime: maxTime,               // Maximum time fv-alert can stay on screen


            // all alert themes
            themes: {
                success: 'success',
                error: 'error',
                default: 'default',
                warning: 'warning',
                info: 'info',
                orange: 'orange',
                alert: 'alert'
            },


            // The location values ​​of all fv-alerts on the screen will be updated with each new added or removed alert.
            pos: {
                "top-left": 10,
                "top-center": 10,
                "top-right": 10,
                "center-left": 10,
                "center": 10,
                "center-right": 10,
                "bottom-left": 10,
                "bottom-center": 10,
                "bottom-right": 10
            },


            // fv-alert color names.
            colors: {
                "default-bg": this.code.dynamic(),
                "default-fg": this.code.dynamic(),
                "default-b": this.code.dynamic(),
                "error-bg": this.code.dynamic(),
                "error-fg": this.code.dynamic(),
                "error-b": this.code.dynamic(),
                "orange-bg": this.code.dynamic(),
                "orange-fg": this.code.dynamic(),
                "orange-b": this.code.dynamic(),
                "warning-bg": this.code.dynamic(),
                "warning-fg": this.code.dynamic(),
                "warning-b": this.code.dynamic(),
                "success-bg": this.code.dynamic(),
                "success-fg": this.code.dynamic(),
                "success-b": this.code.dynamic(),
                "info-bg": this.code.dynamic(),
                "info-fg": this.code.dynamic(),
                "info-b": this.code.dynamic(),
            }
        };


        // main fv-alert element
        this.fvAlert = document.createElement("fv-alert");
        this.fvAlert.id = 'fva-' + this.code.static;
        document.body.appendChild(this.fvAlert);


        // We load fv-alert stylings into dom.
        this.addStyle(`

:root {
    --border-colors: #000;
    --s${this.options.colors["default-bg"]}: #ffffff;
    --s${this.options.colors["default-fg"]}: #020617;
    --s${this.options.colors["default-b"]}: #475569;
    --s${this.options.colors["error-bg"]}: #e66a6a;
    --s${this.options.colors["error-fg"]}: #450a0a;
    --s${this.options.colors["error-fg"]}: #fef7f7;
    --s${this.options.colors["orange-bg"]}: #5a1801;
    --s${this.options.colors["orange-fg"]}: #ff9020;
    --s${this.options.colors["warning-bg"]}: #f0d465;
    --s${this.options.colors["warning-fg"]}: #422006;
    --s${this.options.colors["success-bg"]}: #6ee7b7;
    --s${this.options.colors["success-fg"]}: #134d14;
    --s${this.options.colors["info-bg"]}: #0e214d;
    --s${this.options.colors["info-fg"]}: #38bdf8;
}
@media (prefers-color-scheme: dark) {
    :root {
        --border-colors: #fff;
        --s${this.options.colors["default-bg"]}: #020617;
        --s${this.options.colors["default-fg"]}: #f8fafc;
    }
}
#fva-${this.code.static} {
    z-index: 8669 !important;
    pointer-events: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    width: 100%;
    min-height: 100vh;
    font-family: -apple-system,system-ui,'Ubuntu',BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif ;
    background: transparent;
    transition: visibility 0.3s, opacity 0.3s, backdrop-filter 0.3s;
}
.fvc-${this.code.static} {
    position: fixed;
    min-width: 20%;
    max-width: 20%;
    z-index: 9998;
    display: flex;
    justify-content: space-between;
    outline: 1px solid #000;
    border-bottom: 8px solid var(--border-colors);
    visibility: visible;
    opacity: 1;
    border-radius: 8px;
    pointer-events: auto;
    user-select: auto;
    -webkit-user-select: auto;
    -moz-user-select: auto;
    cursor: pointer;
    font-weight: 500;
    background: white;
    padding: 10px;
    &:hover {
        outline-width: 2px;
    }
    &:active {
        border-bottom-width: 4px;
    }
}
.fvt-${this.code.static} {
    width: 100%;
    text-align: center;
    padding: 10px;
}
.alert-default-${this.code.static} {
    background: var(--s${this.options.colors["default-bg"]}) ;
    color: var(--s${this.options.colors["default-fg"]});
    border-bottom-color: var(--s${this.options.colors["default-bg"]});
}
.alert-success-${this.code.static} {
    background: var(--s${this.options.colors["success-bg"]}) ;
    color: var(--s${this.options.colors["success-fg"]});
    border-bottom-color: var(--s${this.options.colors["success-fg"]});
}
.alert-warning-${this.code.static} {
    background: var(--s${this.options.colors["warning-bg"]}) ;
    color: var(--s${this.options.colors["warning-fg"]});
    border-bottom-color: var(--s${this.options.colors["warning-fg"]});
}
.alert-error-${this.code.static} {
    background: var(--s${this.options.colors["error-bg"]});
    color: var(--s${this.options.colors["error-fg"]});
    border-bottom-color: var(--s${this.options.colors["error-fg"]});
}
.alert-info-${this.code.static} {
    background-color: var(--s${this.options.colors["info-fg"]}) ;
    color: var(--s${this.options.colors["info-bg"]});
    border-bottom-color: var(--s${this.options.colors["info-bg"]});
}
.alert-orange-${this.code.static} {
    background-color: var(--s${this.options.colors["orange-fg"]}) ;
    color: var(--s${this.options.colors["orange-bg"]});
    border-bottom-color: var(--s${this.options.colors["orange-bg"]});
}

.fvc-${this.code.static}.top-left-${this.code.static} {
    top: 10px;
    left: 10px;
    bottom: auto;
    right: auto;
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        border-width: 10px 10px 10px 0;
        border-style: solid;
        border-color: transparent var(--border-colors) transparent transparent;
        display: block;
        width: 0;
    }
}

.fvc-${this.code.static}.top-center-${this.code.static} {
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    bottom: auto;
    right: auto;
    &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 0 10px 10px;
        border-style: solid;
        border-color: transparent transparent var(--border-colors) transparent;
        display: block;
        width: 0;
    }
}

.fvc-${this.code.static}.top-right-${this.code.static} {
    top: 10px;
    right: 10px;
    left: auto;
    bottom: auto;
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        border-width: 10px 0 10px 10px;
        border-style: solid;
        border-color: transparent transparent transparent var(--border-colors);
        display: block;
        width: 0;
    }
}

.fvc-${this.code.static}.center-${this.code.static} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: auto;
    right: auto;
    &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 0 10px 10px;
        border-style: solid;
        border-color: transparent transparent var(--border-colors) transparent;
        display: block;
        width: 0;
    }
} 

.fvc-${this.code.static}.center-left-${this.code.static} {
    top: 50% ;
    left: 10px ;
    transform: translateY(-50%) ;
    bottom: auto ;
    right: auto ;
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        border-width: 10px 10px 10px 0;
        border-style: solid;
        border-color: transparent var(--border-colors) transparent transparent;
        display: block;
        width: 0;
    }
}

.fvc-${this.code.static}.center-right-${this.code.static} {
    top: 50% ;
    right: 10px ;
    transform: translateY(-50%) ;
    bottom: auto ;
    left: auto ;
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        border-width: 10px 0 10px 10px;
        border-style: solid;
        border-color: transparent transparent transparent var(--border-colors);
        display: block;
        width: 0;
    }
}

.fvc-${this.code.static}.bottom-left-${this.code.static} {
    bottom: 10px;
    left: 10px;
    top: auto;
    right: auto;
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        border-width: 10px 10px 10px 0;
        border-style: solid;
        border-color: transparent var(--border-colors) transparent transparent;
        display: block;
        width: 0;
    }
}

.fvc-${this.code.static}.bottom-center-${this.code.static} {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    top: auto;
    right: auto;
    &::after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 10px 10px 0;
        border-style: solid;
        border-color: var(--border-colors) transparent transparent transparent;
        display: block;
        width: 0;
    }
}

.fvc-${this.code.static}.bottom-right-${this.code.static} {
    bottom: 10px;
    right: 10px;
    top: auto;
    left: auto;
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        border-width: 10px 0 10px 10px;
        border-style: solid;
        border-color: transparent transparent transparent var(--border-colors);
        display: block;
        width: 0;
    }
}

@media (max-width: 628px) {
    .fvc-${this.code.static} {
        display: flex ;
        flex-direction: row-reverse ;
        min-width: 60%;
        max-width: 60%;
        padding: calc(100% / 40) ;
    }
}

`);
    }


    // function that will apply a styling tag to the dom as soon as it is called
    addStyle = (content) => {
        const styleTag = document.createElement('style');
        styleTag.id = `fvuarStyle_${this.code.static}`
        document.head.appendChild(styleTag);
        styleTag.textContent = content;
    };


    // tota = typofthealerts, It parses all alert elements according to their types and classifies them.
    tota(e, d = undefined) {
        if (e === 1) {
            return `${this.options.themes.alert}-${this.options.themes.error}-${this.code.static}`;
        } else {
            return `${this.options.themes.alert}-${d}-${this.code.static}`;
        }
    }


    // reposAlert = reposition alert, It repositions alerts according to the values ​​in this.options.pos.
    reposAlert(elem, toWhere, pos, rm = false) {
        // If a delete call is sent, i.e. rm === true, reduce the alert's position to 50.
        if (rm) {
            this.options.pos[toWhere] -= this.alertOffset;
            return;
        }


        // classification according to the given position.
        switch (pos) {
            case 'top':
                elem.style.top = `${this.options.pos[toWhere]}px`;
                break;
            case 'bottom':
                elem.style.bottom = `${this.options.pos[toWhere]}px`;
                break;
            case 'center':
                elem.style.top = `calc(50% + ${this.options.pos[toWhere]}px)`;
                if (toWhere === "center-left") {
                    elem.style.left = '10px';
                    elem.style.right = 'auto';
                    elem.style.transform = 'translateY(-50%)';
                } else if (toWhere === "center-right") {
                    elem.style.right = '10px';
                    elem.style.left = 'auto';
                    elem.style.transform = 'translateY(-50%)';
                } else {
                    elem.style.left = '50%';
                    elem.style.right = 'auto';
                    elem.style.transform = 'translate(-50%, -50%)';
                }
                break;
            default:
                break;
        }
        elem.classList.add(`bubble-${pos}-${this.code.static}`);
        this.options.pos[toWhere] += elem.offsetHeight + this.alertOffset;
    }


    // Here is our main alert function. It is not recommended that the user access it (recommended newAlert) but the user has the authority to access it.
    alert({theme, position, text, time, css}) {
        try {
            /* options
        * dt : display time
        */
            let dt = time * 1000;


            // create Elements
            let fvContainer = document.createElement("fv-container");
            let fvText = document.createElement("fv-text");


            // set created elements id
            fvContainer.id = `fvc_${this.code.dynamic()}`;
            fvText.id = `fvt_${this.code.dynamic()}`;


            // sav = setAlertVisibility, Our function to control whether alert exists or disappears: setAlertVisibility
            const sav = (visibility, counter = false) => {
                if (visibility === 'none') {
                    fvContainer.remove();
                    if (counter) {
                        this.options.len -= 1;
                        this.reposAlert(fvContainer, position, position.split('-')[0], true);
                    }
                } else if (visibility === 'flex') {
                    this.options.len += 1;
                    fvContainer.style.display = 'flex';
                } else {
                    console.error("sav() fonksiyonu iki parametre alır: ['flex','none'], Counter(boolean)")
                }
            };


            // Style the alert according to the given theme.
            switch (theme) {
                case this.options.themes.error:
                    fvContainer.className = this.tota(1);
                    break;
                case this.options.themes.default:
                    fvContainer.className = this.tota(0, this.options.themes.default);
                    break;
                case this.options.themes.warning:
                    fvContainer.className = this.tota(0, this.options.themes.warning);
                    break;
                case this.options.themes.success:
                    fvContainer.className = this.tota(0, this.options.themes.success);
                    break;
                case this.options.themes.info:
                    fvContainer.className = this.tota(0, this.options.themes.info);
                    break;
                case this.options.themes.orange:
                    fvContainer.className = this.tota(0, this.options.themes.orange);
                    break;
                default:
                    console.error("Please write success, warning or error. usage should be createAlert({ e: 'success', a: 'Your message' })");
            }


            // user prefences
            if (css) {
                Object.assign(fvContainer.style, css);
            }


            // rattpgbtu = reposition according to the position given by the user, Our function where we reposition our alert element according to the position given by the user.
            Object.keys(this.options.pos).forEach(pos => fvContainer.classList.remove(`${pos}-${this.code.static}`));
            fvContainer.classList.add(`${position}-${this.code.static}`);
            this.reposAlert(fvContainer, position, position.split('-')[0]);


            // We classify our elements.
            fvContainer.classList.add(`fvc-${this.code.static}`);
            fvText.classList.add(`fvt-${this.code.static}`);

            // We place the elements into their parents.
            this.fvAlert.appendChild(fvContainer);
            fvText.innerHTML = text;
            fvContainer.appendChild(fvText);


            // alert'imizin görünürlüğünü sav(set alert visibility) ile görünür kılıyoruz.
            sav('flex');


            // timer ile dt(display time) içerisinde yer alan süre kadar görünür kılınsın ardından yok olsun diyoruz.
            let timer = setTimeout(() => {
                sav('none', true);
            }, dt);


            // fvContainer mouseover olayı gerçekleştiğinde elemenın z-index ini 1 arttıracağım, mouseleave olayında ise z-index 1 azalacak.
            if (this.hoverToTop) {
                fvText.addEventListener('mouseover', () => {
                    fvContainer.style.zIndex += 20;
                });


                fvText.addEventListener('mouseleave', () => {
                    fvContainer.style.zIndex -= (20).toString();
                })
            }


            // When fvContainer(exit/closed alert button) is doubleclicked, we destroy the alert.
            fvContainer.addEventListener(this.closeMethod, () => {
                sav('none', true);
                clearTimeout(timer);
                dt = 0;
            }, {once: true});
        } catch (err) {
            console.error("Ups! There was a problem creating the alert.", err)
        }
    }


    // We check the type of target given. I use this function in the copy function.
    typeTarget(target) {
        let result;
        try {
            if (typeof target === "string") {
                const elem = document.querySelector(target);
                if (!elem) {
                    console.error("Element not found with the provided Target:", target);
                    return;
                }
                result = elem.localName;
            } else {
                result = target.localName;
            }
        } catch (err) {
            console.error("Ups! A problem occurred while detecting the target's type.", err);
        }
        return result;
    }


    // We check whether the given target is an input element. I use this function in the copy function.
    isInp(target) {
        let result;

        try {
            if (this.typeTarget(target) === 'input' && typeof target === "string") {
                result = document.querySelector(target).value;
            } else if (typeof target === "string") {
                result = document.querySelector(target).innerText;
            } else {
                if (target.value) {
                    result = target.value;
                } else {
                    result = target.innerText;
                }
            }
        } catch (err) {
            console.error("Ups! An error occurred while checking whether the target is an input element!", err);
        }

        return result;
    }


    /* public functions */

    // new = new alert, kullanıcı bazı parametreler vererek fv-alert'in ana fonksiyonu olan new'e ulaşabilir.
    new({
            theme = this.defaultTheme,
            position = this.defaultPosition,
            text = "Your Alert is here!",
            displayTime = this.options.defaultTime,
            css = undefined
        }) {
        const time = displayTime;
        if (this.options.len >= this.options.maxCount || time > this.options.maxTime) {
            console.error(`Max alert count(${this.options.maxCount}) reached!`);
            return null;
        } else {
            this.alert({theme, position, text, time, css});
        }
    }


    // The copy to clipboard function copies the values and innerText ​​of the target parameter given by the user.
    copy(target = undefined, alert = this.cpAlert, alertOptions = {
        position: "top-right",
        theme: "default",
        text: "Copied!",
        fvButtonText: '&#x2715;',
        displayTime: this.options.defaultTime,
        css: undefined
    }) {
        try {
            // eğer kullanıcı target belirtmemişse ise o zaman fonksiyon iptal edilir.
            if (!target) {
                console.error("Element not found with the provided Target:", target);
                return;
            }


            // copy to clipboard
            navigator.clipboard.writeText(this.isInp(target))
                .then(() => {
                    alert && this.new(alertOptions);
                })
                .catch((err) => {
                    console.error('Text could not be copied: ', err);
                });
        } catch (err) {
            console.error("Ups! An error occurred during the copy function.", err);
        }
    }
}