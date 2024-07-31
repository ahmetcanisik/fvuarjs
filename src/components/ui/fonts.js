import 'fvonts/ubuntu-title.css';
const styles = `
@font-face {
    font-family: "Ubuntu Sans";
    src: url("${process.env.PUBLIC_URL}/fonts/UbuntuSans.ttf");
}

@font-face {
    font-family: "Ubuntu Sans Italic";
    src: url("${process.env.PUBLIC_URL}/fonts/UbuntuSans-Italic.ttf");
    font-style: italic;
}
`

const styleSheet = document.createElement("style");
styleSheet.innerHTML = styles;
document.head.appendChild(styleSheet);