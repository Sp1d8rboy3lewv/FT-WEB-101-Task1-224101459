
// Get the Dark Mode button
const themeButton = document.getElementById("theme-toggle");

// Listen for button clicks
themeButton.addEventListener("click", function () {

    // Toggle the dark class on the body
    document.body.classList.toggle("dark");

});
