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
        
});