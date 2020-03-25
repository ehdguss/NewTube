const optionBtn = document.getElementById("optionBtn");
const optionMenu = document.getElementById("optionMenu");
const SHOW = "showing";

const mode = document.getElementById("mode");
const body = document.querySelector("body");
const main = document.getElementById("main");
const img = document.getElementById("logo");
const searchBar = document.getElementById("searchBar");

let MenuOnOff = 0;
let ModeOnOff = 0;

function handleDarkMode() {
    const lightDark = "#1C1C1C";
    const dark = "black";
    const lightGray = "whitesmoke";
    const bright = "white";

    if(ModeOnOff == 0) {
        body.style.backgroundColor = lightDark;
        main.style.backgroundColor = dark;
        body.style.color = bright;
        main.style.color = bright;
        logo.src = "image/logoBlack.png";

        mode.style.backgroundColor = lightDark;
        mode.style.color = bright;

        searchBar.style.backgroundColor = lightDark;

        mode.innerText = "밝은 테마 적용";

        ModeOnOff = 1;
    } else {
        body.style.backgroundColor = bright;
        main.style.backgroundColor = lightGray;
        body.style.color = dark;
        main.style.color = dark;
        logo.src = "image/logo.png";

        mode.style.backgroundColor=bright;
        mode.style.color = dark;

        searchBar.style.backgroundColor = bright;

        mode.innerText = "어두운 테마 적용";

        ModeOnOff = 0;
    }
}

function handleMenuShow() {
    if(MenuOnOff == 0) {
        optionMenu.classList.add(SHOW);
        MenuOnOff = 1;
    } else {
        optionMenu.classList.remove(SHOW);
        MenuOnOff = 0;
    }

}

function inint() {
    optionBtn.addEventListener("click", handleMenuShow);
    mode.addEventListener("click", handleDarkMode);

}
inint();