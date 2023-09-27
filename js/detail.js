window.addEventListener("load", function () {
    var swiper = new Swiper(".reservation-slide", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        });
        AOS.init();
        // 헤더
        const menuToggleBtn = document.getElementById("menuToggleBtn");
        const mobileMenubox = document.getElementById("mobile-menu-box");
        menuToggleBtn.addEventListener("click", function () {
        // Toggle the 'active' class to show/hide the mobile menu
        mobileMenubox.classList.toggle("active");
        });
});