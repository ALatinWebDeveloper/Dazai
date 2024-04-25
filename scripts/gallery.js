const url = "https://ALatinWebDeveloper.github.io/Dazai/data/gallery.json";
const blenderGallery = document.querySelectorAll(".Gallery-container")[0];
const drawsGallery = document.querySelectorAll(".Gallery-container")[1];


async function getGallery() {

    response = await fetch(url);
    data = await response.json();

    display3dGallery(data.gallery);
}

const display3dGallery = (data) => {

    i = 0;
    
    data.blender.forEach(imageData => {
        
        //console.log(imageData);

        //Creating the elements to assemble the gallery

        div = document.createElement("div");
        img = document.createElement("img");

        //Populating the elements of the gallery

        div.addEventListener("onclick", abrirPopup(i));
        div.classList.add("img-container");

        img.classList.add("img-fit");
        img.src = imageData[i];
        img.alt = `Gallery image ${i}`;

        //Assembling the 3D gallery

        blenderGallery.appendChild(div);
        div.appendChild(img);

        //index counter
        i++;
    });
}

getGallery();