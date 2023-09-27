window.addEventListener("load", function () {
    // 헤더
    const menuToggleBtn = document.getElementById("menuToggleBtn");
    const mobileMenubox = document.getElementById("mobile-menu-box");
    menuToggleBtn.addEventListener("click", function () {
    // Toggle the 'active' class to show/hide the mobile menu
    mobileMenubox.classList.toggle("active");
    }); 
});

