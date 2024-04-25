const url = "https://ALatinWebDeveloper.github.io/Dazai/data/gallery.json";

async function getGallery() {

    response = await fetch(url);
    data = await response.json();

    displayGallery(data);
}

const displayGallery = (data) => {

    console.table(data);
}

getGallery();