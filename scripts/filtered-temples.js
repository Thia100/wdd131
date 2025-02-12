const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;
document.getElementById('currentyear').textContent = `© ${currentYear}`;
document.getElementById('last-modified').textContent = `Last modified: ${lastModifiedDate}`;

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active'); 
});



const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2022, May, 22",
      area: 6861,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"

    },
    {
      templeName: "Feather River",
      location: "Yuba City, California",
      dedicated: "2023, October, 8",
      area: 41665,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/feather-river-california-temple/feather-river-california-temple-39697-main.jpg"
    },
    {
      templeName: "Belem Brazil",
      location: "Belem, Brazil",
      dedicated: "2022, November, 20",
      area: 26675,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
    }
    
  ];
function createTempleCard(templesList = temples){
    document.querySelector("#gallery").innerHTML = "";
    templesList.forEach(temple =>{
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class = "label">Location:</span>${temple.location}`;
        dedication.innerHTML = `<span class = "label">Dedicated:</span>${temple.dedicated}`;
        area.innerHTML = `<span class = "label">Size:</span>${temple.area} sgft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "450");
        img.setAttribute("height", "300");


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.append(img);

        document.querySelector("#gallery").appendChild(card);

    })
}
createTempleCard(temples);
const oldtemples =  document.querySelector("#old");
oldtemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    const year = parseInt(temple.dedicated.match(/\d{4}/)[0]);
    return year < 1900;
  }));
});


const newtemples =  document.querySelector("#new");
newtemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    const year = parseInt(temple.dedicated.match(/\d{4}/)[0]);
    return year > 2000;
  }));
});

const largetemples =  document.querySelector("#large");
largetemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    const size = temple.area;
    return size > 90000;
  }));
});

const smalltemples =  document.querySelector("#small");
smalltemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    const size = temple.area;
    return size < 10000;
  }));
});

const alltemples =  document.querySelector("#home");
alltemples.addEventListener("click", () => {
  createTempleCard(temples);
});

