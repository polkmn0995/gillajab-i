window.addEventListener("load", function () {
  // 모바일 메뉴버튼 기능
  const navbarBurger = document.querySelector(".navbar_burger");
  const navbarburgerback = document.querySelector(".navbar_burger_back");
  const navbarMenu = document.querySelector(".navbar_menu");
  const navbarOverlay = document.querySelector(".navbar_overlay");

  navbarBurger.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    navbarOverlay.classList.toggle("active");
  });

  navbarburgerback.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
    navbarOverlay.classList.remove("active");
  });

  navbarOverlay.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
    navbarOverlay.classList.remove("active");
  });
});

