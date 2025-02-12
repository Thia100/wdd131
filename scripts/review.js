document.addEventListener("DOMContentLoaded", function () {
    let reviewCount = localStorage.getItem("reviewCount") ? parseInt(localStorage.getItem("reviewCount")) : 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    const countDisplay = document.getElementById("review-count");
    if (countDisplay) {
        countDisplay.textContent = `Total Reviews Submitted: ${reviewCount}`;
    }
});
