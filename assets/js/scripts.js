// SWUP initialization
const swup = new Swup({
    containers: ["#swup", "#scripts"]
});

// Mobile menu toggle
function changeMobileGlobalNavState() {
    $(".sp-menu .menu-trigger").toggleClass("active");
    $(".g-nav-container.mobileOnly").slideToggle(200);
}

// Close mobile menu on page change
swup.on('pageView', function () {
    if ($(".sp-menu .menu-trigger").hasClass("active")) {
        $(".g-nav-container.mobileOnly").slideToggle(200);
    }
    
    // Run page-specific functions if they exist
    if (typeof topOnloadFunction === "function") {
        topOnloadFunction();
    } else {
        let elem = document.getElementById("top-panel-text-change");
        if (elem !== null) {
            elem.innerText = "「やってみたい」";
        }
    }
});