const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

const selectElement = document.getElementById("product-names");
products.forEach(product =>{
  let option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  selectElement.appendChild(option);
});


const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;
document.getElementById('currentyear').textContent = `© ${currentYear}`;
document.getElementById('last-modified').textContent = `Last modified: ${lastModifiedDate}`;
