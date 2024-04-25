const url = "https://ALatinWebDeveloper.github.io/Dazai/data/gallery.json";

const blenderGallery = document.querySelectorAll(".Gallery-container")[0];
const drawsGallery = document.querySelectorAll(".Gallery-container")[1];


async function getGallery() {

    let response = await fetch(url);
    let data = await response.json();

    display3dGallery(data.gallery);
    display2dGallery(data.gallery);
}

const display3dGallery = (data) => {

    let i = 0;
    
    data.blender.forEach(imageData => {

        //Creating the elements to assemble the gallery

        let div = document.createElement("div");
        let img = document.createElement("img");

        //Populating the elements of the gallery

        div.classList.add("img-container");
        div.addEventListener('click', abrirPopup);
        

        img.classList.add("img-fit");
        img.src = imageData;
        img.alt = `Gallery image ${i}`;

        //Assembling the 3D gallery

        blenderGallery.appendChild(div);
        div.appendChild(img);

        //index counter
        i++;
    });
}

function display2dGallery(data) {

    let i = 0;
    
    data.draws.forEach(imageData => {

        //Creating the elements to assemble the gallery

        let div = document.createElement("div");
        let img = document.createElement("img");

        //Populating the elements of the gallery

        div.classList.add("img-container");
        div.addEventListener('click', abrirPopup);

        img.classList.add("img-fit");
        img.src = imageData;
        img.alt = `Gallery image ${i}`;

        //Assembling the 3D gallery

        drawsGallery.appendChild(div);
        div.appendChild(img);

        //index counter
        i++;
    });
}

var indicePopup = 0;

const cerrarDiv = document.querySelector("#cerrar-popup");
cerrarDiv.addEventListener("click", function cerrarPopup () {

    document.querySelector("#popup").style.display = "none";
});

const spanCerrar = document.querySelector(".cerrar");
spanCerrar.addEventListener("click", function cerrarPopup () {

    document.querySelector("#popup").style.display = "none";
});

const leftButton = document.querySelector(".l-b-popup");
leftButton.addEventListener("click", goLeft);

const rightButton = document.querySelector(".r-b-popup");
rightButton.addEventListener("click", goRight);

function abrirPopup(i) {

    
    document.querySelector("#popup").style.display = "block";
    document.querySelector(".popup-img").src = imageData[i];
}

async function goLeft() {

    let response = await fetch(url);
    let data = await response.json();
    let dataBlender = data.gallery.blender;
    
    indicePopup += -1;
    if (indicePopup < 0) {
        indicePopup = dataBlender.length - 1;
    } else if (indicePopup >= dataBlender.length) {
        indicePopup = 0;
    }
    document.querySelector(".popup-img").src = dataBlender[indicePopup];
}

async function goRight() {

    let response = await fetch(url);
    let data = await response.json();
    let dataBlender = data.gallery.blender;
    console.log(dataBlender);
    
    indicePopup += 1;
    if (indicePopup < 0) {
        indicePopup = dataBlender.length + 1;
    } else if (indicePopup >= dataBlender.length) {
        indicePopup = 0;
    }
    document.querySelector(".popup-img").src = dataBlender[indicePopup];
}


getGallery();