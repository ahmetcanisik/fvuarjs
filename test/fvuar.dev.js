class feJS {
    constructor() {
        this.types = {
            success: 'success',
            error: 'error',
            default: 'default',
            warning: 'warning',
            info: 'info',
            orange: 'orange',
            alert: 'alert',
            code: {
                static: this.__randomSTRValue__FV(),
                dynamic: () => this.__randomSTRValue__FV()
            }
        };
        this.__incElement = document.createElement('div');
        this.__incElement.classList.add(`__incElement-${this.types.code.static}`);
        document.body.appendChild(this.__incElement);
        this.Count = {
            len: 0,
            maxCount: 4,
            maxTime: 4,
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
            }
        };
        this.__addStyleTag__FV(`

:root {
    --slate-bg: #020617;
    --slate-fg: #f8fafc;
    --red-bg: #450a0a;
    --red-b: #e66a6a;
    --red-fg: #fef7f7;
    --orange-bg: #5a1801;
    --orange-fg: #ff9020;
    --yellow-bg: #f0d465;
    --yellow-fg: #422006;
    --green-bg: #134d14;
    --green-fg: #bdf0b3;
    --blue-bg: #0e214d;
    --blue-fg: #38bdf8;
}
@media (prefers-color-scheme: dark) {
    --slate-bg: #f8fafc;
    --slate-fg: #020617;
}
body {
    min-height: 100vh;
}
.__incElement-${this.types.code.static} {
    z-index: 9997 !important;
    pointer-events: none;
    user-select: none;
    width: 100%;
    height: auto;
    min-height: 100% !important;
    font-family: -apple-system,system-ui,'Ubuntu',BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif !important;
}
.__alertMessage__FV-${this.types.code.static} {
    position: fixed;
    pointer-events: auto;
    user-select: auto;
    -webkit-user-select: auto;
    -moz-user-select: auto;
    min-width: 20%;
    max-width: 20%;
    z-index: 9998 !important;
    display: flex !important;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    border-radius: 4px !important;
    padding: 10px !important; /* Bu değeri sabit yaptım */
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22) !important;
    flex-direction: row-reverse !important;
    color: var(--slate-fg) !important;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
.__spanAlertFV__FV-${this.types.code.static} {
    pointer-events: none !important;
    user-select: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
}
.__closeAlertFV__FV-${this.types.code.static} {
    background: var(--red-bg) !important;
    border: none !important;
    border-radius: 8px;
    outline-offset: none;
    color: var(--red-fg) !important;
    padding: 4px 8px !important;
    cursor: pointer !important;
    &:hover {
        outline-offset: 1px;
        outline: 1px solid var(--red-bg);
    }
}
.alert-default-${this.types.code.static} {
    background: var(--slate-bg) !important;
    color: var(--slate-fg) !important;
}
.alert-success-${this.types.code.static} {
    background: var(--green-fg) !important;
    color: var(--green-bg) !important;
}
.alert-warning-${this.types.code.static} {
    background: var(--yellow-bg) !important;
    color: var(--yellow-fg) !important;
}
.alert-error-${this.types.code.static} {
    background: var(--red-b) !important;
    color: var(--red-bg) !important;
}
.alert-info-${this.types.code.static} {
    background-color: var(--blue-fg) !important;
    color: var(--blue-bg) !important;
}
.alert-orange-${this.types.code.static} {
    background-color: var(--orange-fg) !important;
    color: var(--orange-bg) !important;
}

.top-left-${this.types.code.static} {
    top: 10px;
    left: 10px;
    bottom: auto;
    right: auto;
}

.top-center-${this.types.code.static} {
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    bottom: auto;
    right: auto;
}

.top-right-${this.types.code.static} {
    top: 10px;
    right: 10px;
    left: auto;
    bottom: auto;
}

.center-left-${this.types.code.static} {
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    bottom: auto;
    right: auto;
}

.center-${this.types.code.static} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: auto;
    right: auto;
}

.center-right-${this.types.code.static} {
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    bottom: auto;
    left: auto;
}

.bottom-left-${this.types.code.static} {
    bottom: 10px;
    left: 10px;
    top: auto;
    right: auto;
}

.bottom-center-${this.types.code.static} {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    top: auto;
    right: auto;
}

.bottom-right-${this.types.code.static} {
    bottom: 10px;
    right: 10px;
    top: auto;
    left: auto;
}

@media (max-width: 628px) {
    .__alertMessage__FV-${this.types.code.static} {
        min-width: 60%;
        max-width: 60%;
        padding: calc(100% / 40) !important;
    }
}

`);
    }

    __randomSTRValue__FV() {
        const c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += c.charAt(Math.floor(Math.random() * c.length));
        }
        return result;
    }

    __addStyleTag__FV(content) {
        const styleTag = document.createElement('style');
        document.head.appendChild(styleTag);
        styleTag.textContent = content;
    }

    __c__FV(e, d = undefined) {
        if (e === 1) {
            return `${this.types.alert}-${this.types.error}-${this.types.code.static}`;
        } else {
            return `${this.types.alert}-${d}-${this.types.code.static}`;
        }
    }

    repositionAlerts(elem, toWhere, pos, rm = false) {
        if (rm) {
            this.Count.pos[toWhere] -= 50;
            return;
        }

        switch (pos) {
            case 'top':
                elem.style.top = `${this.Count.pos[toWhere]}px`;
                break;
            case 'bottom':
                elem.style.bottom = `${this.Count.pos[toWhere]}px`;
                break;
            case 'center':
                elem.style.top = `calc(50% + ${this.Count.pos[toWhere]}px)`;
                elem.style.left = '50%';
                elem.style.transform = 'translate(-50%, -50%)';
                break;
            default:
                break;
        }
        this.Count.pos[toWhere] += elem.offsetHeight + 50;
    }

    alert({type, position, text, closeButtonText, time}) {
        let alertElement = document.createElement("article");
        let closeButton = document.createElement("button");
        let spanAlert = document.createElement("span");
        let displayTime = time * 1000;

        alertElement.id = `alertMessageFV_${this.types.code.dynamic()}`;
        closeButton.id = `closeAlertFV_${this.types.code.dynamic()}`;
        spanAlert.id = `spanAlertFV_${this.types.code.dynamic()}`;

        const __setVisibility__FV = (visibility, counter = false) => {
            if (visibility === 'none') {
                closeButton.remove();
                alertElement.remove();
                if (counter) {
                    this.Count.len -= 1;
                    this.repositionAlerts(alertElement, position, position.split('-')[0], true);
                }
            } else if (visibility === 'flex') {
                this.Count.len += 1;
                alertElement.style.display = 'flex';
            } else {
                console.log("__setVisibility__FV() fonksiyonu iki parametre alır: ['flex','none'], Counter(boolean)")
            }
        };

        switch (type) {
            case this.types.error:
                alertElement.className = this.__c__FV(1);
                break;
            case this.types.default:
                alertElement.className = this.__c__FV(0, this.types.default);
                break;
            case this.types.warning:
                alertElement.className = this.__c__FV(0, this.types.warning);
                break;
            case this.types.success:
                alertElement.className = this.__c__FV(0, this.types.success);
                break;
            case this.types.info:
                alertElement.className = this.__c__FV(0, this.types.info);
                break;
            case this.types.orange:
                alertElement.className = this.__c__FV(0, this.types.orange);
                break;
            default:
                console.log("Please write success, warning or error. usage should be createAlert({ e: 'success', a: 'Your message' })");
        }

        const activePosition = (position = position) => {
            alertElement.classList.remove('top-left-'+this.types.code.static);
            alertElement.classList.remove('top-center-'+this.types.code.static);
            alertElement.classList.remove('top-right-'+this.types.code.static);
            alertElement.classList.remove('center-left-'+this.types.code.static);
            alertElement.classList.remove('center-'+this.types.code.static);
            alertElement.classList.remove('center-right-'+this.types.code.static);
            alertElement.classList.remove('bottom-center-'+this.types.code.static);
            alertElement.classList.remove('bottom-center-'+this.types.code.static);
            alertElement.classList.remove('bottom-center-'+this.types.code.static);
            alertElement.classList.add(position+'-'+this.types.code.static);
            this.repositionAlerts(alertElement, position, position.split('-')[0]);
        }

        activePosition(position);

        alertElement.classList.add(`__alertMessage__FV-${this.types.code.static}`);
        closeButton.classList.add(`__closeAlertFV__FV-${this.types.code.static}`);
        spanAlert.classList.add(`__spanAlertFV__FV-${this.types.code.static}`);
        this.__incElement.appendChild(alertElement);
        alertElement.appendChild(closeButton);
        spanAlert.innerText = text;
        closeButton.innerText = closeButtonText;
        alertElement.appendChild(spanAlert);

        __setVisibility__FV('flex');
        let timer = setTimeout(() => {
            __setVisibility__FV('none', true);
        }, displayTime);
        closeButton.addEventListener("click", () => {
            __setVisibility__FV('none', true);
            clearTimeout(timer);
            displayTime = 0;
        });
    }

    newAlert({type = "success", position = "top-center" ,text = "Your Alert is here!", closeButtonText = '∅', time = this.Count.maxTime}) {
        if (this.Count.len >= this.Count.maxCount || time > this.Count.maxTime) {
            console.log(`Max alert count(${this.Count.maxCount}) reached!`);
            return null;
        } else {
            this.alert({type, position, text, closeButtonText, time});
        }
    }

    copiedClipboard({id = undefined, position = "top-center", type = "success", text = "Copied!", closeButtonText = 'X', time = 10}) {
        let element = document.getElementById(id);
        if (!element) {
            console.error("Element not found with the provided ID:", id);
            return;
        }
        element.select();
        element.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(element.value);
        this.newAlert({type, position, text, closeButtonText, time});
    }
}
