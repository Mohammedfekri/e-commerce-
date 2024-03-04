// JavaScript code for the e-commerce landing page

// Function to handle product search
function searchProducts() {
    // Retrieve the search input value
    var searchInput = document.getElementById("searchInput").value;
    // Implement product search logic (replace console.log with actual search implementation)
    console.log("Searching for: " + searchInput);
}

// Event listener for page load
document.addEventListener("DOMContentLoaded", function() {
    // Event listener for hamburger menu icon click
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // Toggle navigation menu visibility
        nav.classList.toggle('active');

        // Toggle hamburger menu icon animation
        burger.classList.toggle('toggle');
    });

    // Event listeners for displaying product info on slide click
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            // Toggle product info display
            slide.querySelector('.product-info').classList.toggle('show');
        });
    });
});
