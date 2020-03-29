const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.getElementById("profileMenu");
const SHOW = "showing";

const body = document.querySelector("body"),
    logo = document.getElementById("logo"),
    searchBar = document.getElementById("searchBar"),
    searchBtn = document.getElementById("searchBtn"),
    upload = document.querySelector(".xi-upload"),
    main = document.getElementById("main"),
    video = document.querySelectorAll(".videoLink"),
    mode = document.getElementById("darkMode");

const DARK = "dark",
    LIGHTDARK = "lightDark",
    BRIGHT = "bright",
    DARKBRIGHT = "darkbright";

let MenuOnOff = 0;
let ModeOnOff = 0;

function handleDarkMode() {
    if(ModeOnOff == 0) {
        body.classList.add(LIGHTDARK);
        logo.src = "image/logoBlack.png";
        searchBar.classList.add(DARK);
        searchBtn.classList.add(LIGHTDARK);
        upload.style.color = "white";
        main.classList.add(DARK);
        video.forEach(element => {
            element.classList.add(DARK);
        });
        mode.classList.add(LIGHTDARK);

        mode.innerText = "밝은 테마 적용";
        ModeOnOff = 1;
    } else {
        body.classList.remove(LIGHTDARK);
        logo.src = "image/logo.png";
        searchBar.classList.remove(DARK);
        searchBtn.classList.remove(LIGHTDARK);
        upload.style.color = "black";
        main.classList.remove(DARK);
        video.forEach(element => {
            element.classList.remove(DARK);
        });
        mode.classList.remove(LIGHTDARK);

        mode.innerText = "어두운 테마 적용";
        ModeOnOff = 0;
    }
}

function handleMenuShow() {
    if(MenuOnOff == 0) {
        profileMenu.classList.add(SHOW);
        MenuOnOff = 1;
    } else {
        profileMenu.classList.remove(SHOW);
        MenuOnOff = 0;
    }
}

function inint() {
    profileBtn.addEventListener("click", handleMenuShow);
    mode.addEventListener("click", handleDarkMode);

}
inint();