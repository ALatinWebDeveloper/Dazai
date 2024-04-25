const url = "https://github.com/ALatinWebDeveloper/Dazai/data/galery.json";

async function getGallery() {

    response = await fetch(url);
    data = await response.json();

    displayGallery(data);
}

const displayGallery = (data) => {

    console.table(data);
}

getGallery();