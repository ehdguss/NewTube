const uploadArea = document.querySelector(".uploadArea");
const fileUpload = document.querySelector("#fileUpload");

const HIGHLIGHT = "highlight";

function addHighLight() {
    uploadArea.classList.add(HIGHLIGHT);
}
function removeHighLight() {
    uploadArea.classList.remove(HIGHLIGHT);
}

function preventEvent(event) {
    event.preventDefault();
}

function handleFileDrop(event) {
    const dropedFile = event.dataTransfer.files[0];
    const video = document.createElement("video");
    
    video.src = URL.createObjectURL(dropedFile);
    video.setAttribute("controls", "controls");
    uploadArea.appendChild(video);
}

function init() {
    ["dragenter", "dragover"].forEach(event => {
        uploadArea.addEventListener(event, addHighLight);
    });
    ["dragleave", "drop"].forEach(event => {
        uploadArea.addEventListener(event, removeHighLight);
    });


    ["dragenter", "dragover", "dragleave", "drop"].forEach(event => {
        uploadArea.addEventListener(event, preventEvent);
    });

    uploadArea.addEventListener("drop", handleFileDrop);
};
init();