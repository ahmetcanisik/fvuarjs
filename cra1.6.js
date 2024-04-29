class feJS {
    constructor() {
        this.__incElement = document.createElement('div');
        this.__incElement.classList.add('__incElement');
        document.body.appendChild(this.__incElement);
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
        this.Count = {
            len: 0,
            maxCount: 4,
            maxTime: 4
        };
        this.__addStyleTag__FV(`
:root {
    --twnam: #f44336;
    --jade: #0c8d64;
    --saffron: #f2ca36;
    --white: #ffffff;
    --black: #000000;
    --info: rgb(32, 32, 248);
    --orange: #ff6000;
}
.__incElement {
    position: fixed !important;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 9997 !important;
}
.__alertMessage__FV {
    z-index: 9998 !important;
    display: flex !important;
    justify-content: space-between;
    border-bottom: 1px solid black;
    opacity: 80%;
    border-radius: 4px !important;
    padding: calc(100% / 50) !important;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22) !important;
    font-family: Arial, monospace, "Franklin Gothic Medium", Calibri, "Times New Roman", SansSerif, 'Courier New', Courier !important;
    transition: 50ms all !important;
    flex-direction: row-reverse !important;
    color: var(--white) !important;
}
.__spanAlertFV__FV {
    pointer-events: none !important;
    user-select: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
}
.__closeAlertFV__FV {
    background: var(--white) !important;
    border: none !important;
    border-radius: 8px;
    outline: none !important;
    color: var(--black) !important;
    padding: 4px 8px !important;
    cursor: pointer !important;
}
.alert-default-${this.types.code.static} {
    background: var(--black) !important;
}
.alert-success-${this.types.code.static} {
    background: var(--jade) !important;
}
.alert-warning-${this.types.code.static} {
    background: var(--saffron) !important;
}
.alert-error-${this.types.code.static} {
    background: var(--twnam) !important;
}
.alert-info-${this.types.code.static} {
    background-color: var(--info) !important;
}
.alert-orange-${this.types.code.static} {
    background-color: var(--orange) !important;
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

    newAlert({type = "success", text = "Your Alert is here!", closeButtonText = 'X', time = this.Count.maxTime}) {
        if (this.Count.len >= this.Count.maxCount || time > this.Count.maxTime) {
            console.error(`[newAlert]
Maximum number of warning messages (newAlert) that can be created on this page: ${this.Count.maxCount},
Maximum visible time for warning messages: ${this.Count.maxTime}
fix your code like this: newAlert({type: 'success', text: 'your text message', closeButtonText: 'Ok', time: 10})
            `);
            return null;
        }
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
        alertElement.classList.add("__alertMessage__FV");
        closeButton.classList.add("__closeAlertFV__FV");
        spanAlert.classList.add("__spanAlertFV__FV");
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

    copiedClipboard({id = undefined, type = "success", text = "Copied!", closeButtonText = 'X', time = 10}) {
        let element = document.getElementById(id);
        if (!element) {
            console.error("Element not found with the provided ID:", id);
            return;
        }
        element.select();
        element.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(element.value);
        this.newAlert({type, text, closeButtonText, time});
    }
}
