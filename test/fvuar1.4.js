class feJS {
    constructor({ maxCount = 4, maxTime = 4 } = {}) {
        this.__randomSTRValue__FV = function(length) {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        };
        this.code = {
            static: this.__randomSTRValue__FV(9),
            dynamic: (count = 6) => this.__randomSTRValue__FV(count)
        };
        this.options = {
            len: 0,
            maxCount: maxCount,
            maxTime: maxTime,
            incRandom: ['div', 'aside'],
            themes: {
                success: 'success',
                error: 'error',
                default: 'default',
                warning: 'warning',
                info: 'info',
                orange: 'orange',
                alert: 'alert'
            },
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
            colors: {
                "slate-bg": this.code.dynamic(12),
                "slate-fg": this.code.dynamic(12),
                "red-bg": this.code.dynamic(12),
                "red-b": this.code.dynamic(12),
                "red-fg": this.code.dynamic(12),
                "orange-bg": this.code.dynamic(12),
                "orange-fg": this.code.dynamic(12),
                "yellow-bg": this.code.dynamic(12),
                "yellow-fg": this.code.dynamic(12),
                "green-bg": this.code.dynamic(12),
                "green-fg": this.code.dynamic(12),
                "blue-bg": this.code.dynamic(12),
                "blue-fg": this.code.dynamic(12)
            }
        };
        this.__incElement = document.createElement(this.options.incRandom[Math.floor(Math.random() * this.options.incRandom.length)]);
        this.__incElement.classList.add('i'+this.code.static);
        document.body.appendChild(this.__incElement);
        this.__addStyleTag__FV(`

:root {
    --s${this.options.colors["slate-bg"]}: #020617;
    --s${this.options.colors["slate-fg"]}: #f8fafc;
    --s${this.options.colors["red-bg"]}: #450a0a;
    --s${this.options.colors["red-b"]}: #e66a6a;
    --s${this.options.colors["red-fg"]}: #fef7f7;
    --s${this.options.colors["orange-bg"]}: #5a1801;
    --s${this.options.colors["orange-fg"]}: #ff9020;
    --s${this.options.colors["yellow-bg"]}: #f0d465;
    --s${this.options.colors["yellow-fg"]}: #422006;
    --s${this.options.colors["green-bg"]}: #134d14;
    --s${this.options.colors["green-fg"]}: #bdf0b3;
    --s${this.options.colors["blue-bg"]}: #0e214d;
    --s${this.options.colors["blue-fg"]}: #38bdf8;
}
@media (prefers-color-scheme: dark) {
    --s${this.options.colors["slate-bg"]}: #ffffff;
    --s${this.options.colors["slate-fg"]}: #000000;
}
body {
    min-height: 100vh !important;
}
.i${this.code.static} {
    z-index: 9997 ;
    pointer-events: none;
    user-select: none;
    width: 100%;
    height: auto;
    min-height: 100% ;
    font-family: -apple-system,system-ui,'Ubuntu',BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif ;
}
.__alertMessage__FV-${this.code.static} {
    position: fixed;
    pointer-events: auto;
    user-select: auto;
    -webkit-user-select: auto;
    -moz-user-select: auto;
    min-width: 20%;
    max-width: 20%;
    z-index: 9998 ;
    display: flex ;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    border-radius: 4px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22) ;
    flex-direction: row-reverse ;
    animation: shake 500ms ease-out;
}
.__spanAlertFV__FV-${this.code.static} {
    pointer-events: none ;
    user-select: none ;
    -webkit-user-select: none ;
    -moz-user-select: none ;
    padding: 10px;
}
.__closeAlertFV__FV-${this.code.static} {
    background: var(--s${this.options.colors["red-b"]}) ;
    border: none ;
    outline-offset: none;
    border-radius: 0 4px 4px 0;
    color: var(--s${this.options.colors["red-bg"]});
    padding: 4px 8px ;
    cursor: pointer ;
    &:hover {
        outline-offset: 1px;
        outline: 1px solid var(--s${this.options.colors["red-bg"]});
    }
}
.alert-default-${this.code.static} {
    background: var(--s${this.options.colors["slate-bg"]}) ;
    color: var(--s${this.options.colors["slate-fg"]}) ;
}
.alert-success-${this.code.static} {
    background: var(--s${this.options.colors["green-fg"]}) ;
    color: var(--s${this.options.colors["green-bg"]}) ;
}
.alert-warning-${this.code.static} {
    background: var(--s${this.options.colors["yellow-bg"]}) ;
    color: var(--s${this.options.colors["yellow-fg"]}) ;
}
.alert-error-${this.code.static} {
    background: var(--s${this.options.colors["red-b"]}) ;
    color: var(--s${this.options.colors["red-bg"]}) ;
}
.alert-info-${this.code.static} {
    background-color: var(--s${this.options.colors["blue-fg"]}) ;
    color: var(--s${this.options.colors["blue-bg"]}) ;
}
.alert-orange-${this.code.static} {
    background-color: var(--s${this.options.colors["orange-fg"]}) ;
    color: var(--s${this.options.colors["orange-bg"]}) ;
}

.top-left-${this.code.static} {
    top: 10px;
    left: 10px;
    bottom: auto;
    right: auto;
}

.top-center-${this.code.static} {
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    bottom: auto;
    right: auto;
}

.top-right-${this.code.static} {
    top: 10px;
    right: 10px;
    left: auto;
    bottom: auto;
}

.center-${this.code.static} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: auto;
    right: auto;
}

.center-left-${this.code.static} {
    top: 50% ;
    left: 10px ;
    transform: translateY(-50%) ;
    bottom: auto ;
    right: auto ;
}

.center-right-${this.code.static} {
    top: 50% ;
    right: 10px ;
    transform: translateY(-50%) ;
    bottom: auto ;
    left: auto ;
}

.bottom-left-${this.code.static} {
    bottom: 10px;
    left: 10px;
    top: auto;
    right: auto;
}

.bottom-center-${this.code.static} {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    top: auto;
    right: auto;
}

.bottom-right-${this.code.static} {
    bottom: 10px;
    right: 10px;
    top: auto;
    left: auto;
}

@keyframes shake {
	0% {
		transform: translateY(0);
	}
	20% {
		transform: translateY(-2px);
	}
	40% {
		transform: translateY(2px);
	}
	60% {
		transform: translateY(-2px);
	}
	80% {
		transform: translateY(2px);
	}
	100% {
		transform: translateY(0);
	}
}

@media (max-width: 628px) {
    .__alertMessage__FV-${this.code.static} {
        display: flex ;
        flex-direction: row-reverse ;
        min-width: 60%;
        max-width: 60%;
        padding: calc(100% / 40) ;
    }
}

`);
    }

    __addStyleTag__FV = (content) => {
        const styleTag = document.createElement('style');
        document.head.appendChild(styleTag);
        styleTag.textContent = content;
    };

    __c__FV(e, d = undefined) {
        if (e === 1) {
            return `${this.options.themes.alert}-${this.options.themes.error}-${this.code.static}`;
        } else {
            return `${this.options.themes.alert}-${d}-${this.code.static}`;
        }
    }

    repositionAlerts(elem, toWhere, pos, rm = false) {
        if (rm) {
            this.options.pos[toWhere] -= 50;
            return;
        }

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
        this.options.pos[toWhere] += elem.offsetHeight + 50;
    }

    alert({type, position, text, closeButtonText, time}) {
        let alertElement = document.createElement("article");
        let closeButton = document.createElement("button");
        let spanAlert = document.createElement("span");
        let displayTime = time * 1000;

        alertElement.id = `alertMessageFV_${this.code.dynamic()}`;
        closeButton.id = `closeAlertFV_${this.code.dynamic()}`;
        spanAlert.id = `spanAlertFV_${this.code.dynamic()}`;

        const __setVisibility__FV = (visibility, counter = false) => {
            if (visibility === 'none') {
                closeButton.remove();
                alertElement.remove();
                if (counter) {
                    this.options.len -= 1;
                    this.repositionAlerts(alertElement, position, position.split('-')[0], true);
                }
            } else if (visibility === 'flex') {
                this.options.len += 1;
                alertElement.style.display = 'flex';
            } else {
                console.log("__setVisibility__FV() fonksiyonu iki parametre alır: ['flex','none'], Counter(boolean)")
            }
        };

        switch (type) {
            case this.options.themes.error:
                alertElement.className = this.__c__FV(1);
                break;
            case this.options.themes.default:
                alertElement.className = this.__c__FV(0, this.options.themes.default);
                break;
            case this.options.themes.warning:
                alertElement.className = this.__c__FV(0, this.options.themes.warning);
                break;
            case this.options.themes.success:
                alertElement.className = this.__c__FV(0, this.options.themes.success);
                break;
            case this.options.themes.info:
                alertElement.className = this.__c__FV(0, this.options.themes.info);
                break;
            case this.options.themes.orange:
                alertElement.className = this.__c__FV(0, this.options.themes.orange);
                break;
            default:
                console.log("Please write success, warning or error. usage should be createAlert({ e: 'success', a: 'Your message' })");
        }

        const activePosition = (position = position) => {
            const positions = ['top-left', 'top-center', 'top-right', 'center-left', 'center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'];
            positions.forEach(pos => alertElement.classList.remove(`${pos}-${this.code.static}`));
            alertElement.classList.add(`${position}-${this.code.static}`);
            this.repositionAlerts(alertElement, position, position.split('-')[0]);
        }        

        activePosition(position);

        alertElement.classList.add(`__alertMessage__FV-${this.code.static}`);
        closeButton.classList.add(`__closeAlertFV__FV-${this.code.static}`);
        spanAlert.classList.add(`__spanAlertFV__FV-${this.code.static}`);
        this.__incElement.appendChild(alertElement);
        alertElement.appendChild(closeButton);
        spanAlert.innerHTML = text;
        closeButton.innerHTML = closeButtonText;
        alertElement.appendChild(spanAlert);

        __setVisibility__FV('flex');
        let timer = setTimeout(() => {
            __setVisibility__FV('none', true);
        }, displayTime);
        closeButton.addEventListener("click", () => {
            __setVisibility__FV('none', true);
            clearTimeout(timer);
            displayTime = 0;
        }, {once: true});

        console.log("Alert created:", { type, position, text, closeButtonText, time });
    }

    newAlert({type = "success", position = "top-center" ,text = "Your Alert is here!", closeButtonText = '&#x2715;', time = this.options.maxTime}) {
        if (this.options.len >= this.options.maxCount || time > this.options.maxTime) {
            console.log(`Max alert count(${this.options.maxCount}) reached!`);
            return null;
        } else {
            this.alert({type, position, text, closeButtonText, time});
        }
    }

    typeTarget(target) {
        if (typeof target === "string") {
            const elem = document.querySelector(target);
            if (!elem) {
                console.error("Element not found with the provided Target:", target);
                return;
            }
            return elem.localName;
        } else {
            return target.localName;
        }
    }

    isInp(target) {
        if (this.typeTarget(target) === 'input' && typeof target === "string") {
            return document.querySelector(target).value;
        } else if(typeof target === "string") {
            return document.querySelector(target).innerText;
        } else {
            return target.innerText;
        }
    }

    copiedClipboard({target, position = "top-center", type = "success", text = "Copied!", closeButtonText = '&#x2715;', time = 10}) {
        // general operations
        if (!target) {
            console.error("Element not found with the provided Target:", target);
            return;
        }
        
        navigator.clipboard.writeText(this.isInp(target))
            .then(() => {
                this.newAlert({type, position, text, closeButtonText, time});
            })
            .catch((err) => {
                console.error('Text could not be copied: ', err);
            });
    }
}

/*
position özelliğine flex'i dahil edeceğim. bu sayede target ile belirlenen elementin top,left,bottom ve right konumlarını alıp
alert i bu konumlara çapırabileceğiz.
*/