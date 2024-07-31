import { en_US } from "../localization/en-US";
import { langs } from "../localization/langs";

if (!localStorage.getItem('preferences')) {
    localStorage.setItem('preferences', JSON.stringify({ lang: 'en-US', theme: 'system', colors: "static" }));
}
//export const themes = ["default", "error", "success", "info", "warning", "orange"];
export const posX = ["top-left", "top-center", "top-right", "center-left", "center", "center-right", "bottom-left", "bottom-center", "bottom-right"];
export const themeButtons = [
    {
        type: "default",
        text: "Your Alert is here!",
        time: 4,
        position: "top-left"
    },
    {
        type: "error",
        text: "Your Alert is here!",
        time: 4,
        position: "bottom-left"
    },
    {
        type: "success",
        text: "Your Alert is here!",
        time: 4,
        position: "top-center"
    },
    {
        type: "info",
        text: "Your Alert is here!",
        time: 3,
        position: "bottom-center"
    },
    {
        type: "warning",
        text: "Your Alert is here!",
        time: 1,
        position: "top-right"
    },
    {
        type: "orange",
        text: "Your Alert is here!",
        time: 2,
        position: "bottom-right"
    }
]
export const content = {
    project_name: "fvuarjs",
    version: "0.0.5",
    langs: langs,
    "en-US": en_US
}
export const preferences = JSON.parse(localStorage.getItem('preferences'));