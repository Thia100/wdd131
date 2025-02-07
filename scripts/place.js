// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Output the current year in the footer's first paragraph
document.getElementById('currentyear').textContent = `© ${currentYear}`;

// Output the last modified date in the footer's second paragraph
document.getElementById('last-modified').textContent = `Last modified: ${lastModifiedDate}`;


const temperature = 5;
const windSpeed = 10;

function calculateWindChill(temp, speed){
    return (13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16).toFixed(2);
}


function displayWindChill() {
    let windChill = "N/A";  
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed) + "°C";
    }
    document.getElementById("windChill").innerHTML = `<strong>Wind Chill:</strong> ${windChill}`;
}
window.onload = displayWindChill;