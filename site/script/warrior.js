function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
  function hideSidebar(){
    const hidebar = document.querySelector(".sidebar");
    hidebar.style.display = "none";
}



document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.querySelector("#countries");

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      
      let output = `<option value="" disabled selected>Select a country</option>`;
      
      
      data.sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        return nameA.localeCompare(nameB);
      });

      data.forEach((country) => {
        output += `<option value="${country.name.common}">${country.name.common}</option>`;
      });
      
      selectDrop.innerHTML = output;
    })
    .catch((error) => {
      console.error("Error fetching countries:", error);
    });
});
