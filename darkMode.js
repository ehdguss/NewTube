const optionBtn = document.getElementById("optionBtn");
const optionMenu = document.getElementById("optionMenu");
const SHOW = "showing";

const mode = document.getElementById("mode");
const body = document.querySelector("body");
const main = document.getElementById("main");
const img = document.getElementById("logo");

let MenuOnOff = 0;
let ModeOnOff = 0;

function handleDarkMode() {
    if(ModeOnOff == 0) {
        body.style.backgroundColor = "#1C1C1C";
        main.style.backgroundColor = "black";
        body.style.color = "white";
        main.style.color = "white";
        logo.src = "image/logoBlack.png";

        ModeOnOff = 1;
    } else {
        body.style.backgroundColor = "white";
        main.style.backgroundColor = "whitesmoke";
        body.style.color = "black";
        main.style.color = "black";
        logo.src = "image/logo.png";

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