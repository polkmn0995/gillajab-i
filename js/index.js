// ============================================
// ========================
// 스크롤 시 상단으로 이동
// 문서가 로드될 때 실행되는 함수
$(function () {
  // 스크롤 이벤트 처리
  $(window).scroll(function () {
    // 스크롤이 800 이상일 때
    if ($(this).scrollTop() > 800) {
      // 모달 요소들을 표시
      $(".modal-top").fadeIn();
      $(".modal").fadeIn();
    } else {
      // 모달 요소들을 숨김
      $(".modal-top").fadeOut();
      $(".modal").fadeOut();
    }
  });
  // 모달 상단 버튼 클릭 시
  $(".modal-top").click(function () {
    // 페이지 상단으로 부드럽게 스크롤 이동
    $("html, body").animate(
      {
        scrollTop: 0, // 페이지 상단으로 이동
      },
      400 // 애니메이션 속도 (400 milliseconds)
    );
    return false; // 이벤트 전파 방지
  });
});
// 수동스크롤할때 각섹션에 도착했을때 모달메뉴의 섹상 변경
$(document).ready(function () {
  $(window).scroll(function () {
    // Get the scroll position with a slight offset
    var scrollPos = $(this).scrollTop() + 50; // Adjust the offset as needed

    // Iterate through each section and determine the active section
    $("section").each(function () {
      var sectionOffset = $(this).offset().top;
      var sectionHeight = $(this).outerHeight();

      if (
        scrollPos >= sectionOffset &&
        scrollPos < sectionOffset + sectionHeight
      ) {
        var targetId = $(this).attr("id");
        $(".modal-menu a").removeClass("active");
        $('.modal-menu a[href="#' + targetId + '"]').addClass("active");
      }
    });
  });
});
// ==============================================================================
window.addEventListener("load", function () {
  // AOS적용
  AOS.init();
  // a태그 클릭시 해당페이지의 해당위치값 정해주는 기능
  const hash = window.location.hash.substring(1); // URL에서 # 제거
  if (hash) {
    console.log("Hash found:", hash); // 확인을 위해 콘솔에 출력
    const targetElement = document.getElementById(hash);
    if (targetElement) {
      console.log("Target element found:", targetElement); // 확인을 위해 콘솔에 출력
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.error("Target element not found");
    }
  }
  // 헤더바 스크롤시 색강 변경
  document.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");

    // Change the background color when scrolling down
    if (window.scrollY > 100) {
      // Adjust the scroll position as needed
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  });
  // 스크롤시 헤더 메뉴바 컬러변경
  document.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");

    // Change the background color when scrolling down
    if (window.scrollY > 100) {
      // Adjust the scroll position as needed
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  });
  // 헤더의 메뉴 글자 컬러변경
  document.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");

    // Change the text color when scrolling down
    if (window.scrollY > 100) {
      // Adjust the scroll position as needed
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  // =============================================
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
  // ===================================================
  // ==============================================================
  // 비주얼 슬라이드
  // 1.슬라이드 (.swiper-slide)개수 만큼 li생성하기v
  const swSlideCount = document.querySelectorAll(
    ".sw-visual .swiper-slide"
  ).length;
  // 2.li태그 출력 장소(ul태그 )저장
  const swSlidePgUl = document.querySelector(".sw-visual-pg-list");
  //3.li에 html로 작성할 글자를 생성한다.
  let swVisualHtml = ``;
  for (let i = 0; i < swSlideCount; i++) {
    swVisualHtml = swVisualHtml + `<li>${i + 1}</li>`;
  }
  // 4.html을 추가한다
  swSlidePgUl.innerHTML = swVisualHtml;
  // 5.페이지네이션 관련(코딩으로 생성한 li태그 저장)
  const swVisualPgLi = document.querySelectorAll(".sw-visual-pg-list > li");
  console.log(swVisualPgLi);
  var visualswiper = new Swiper(".sw-visual", {
    effect: "fade",
    // fadeEffect: {
    //   crossFade: true,
    // },
    loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 1500,
    autoplay: {
      delay: 1000,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplya 가 해제되므로
      // 이것을 방지해 주기위한 처리
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
  });
  // swiper 가 최초 실행될때
  // 1번 li 의 흰색 라인이 늘어나는 모션을 실행
  swVisualPgLi[0].classList.add("active");
  // swiper가 바뀔때 마다 실행
  // 슬라이더가 바뀌는 상태를 찾아서
  // 우리가 적용하고자 하는 처리를 하고
  // swiper의 API를 참조해서 작성
  visualswiper.on("slideChange", function () {
    swVisualPgLi.forEach(function (item, index) {
      if (visualswiper.realIndex === index) {
        // realIndex는 진짜 html태그의 순서값
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
  // ==========================================================
  document.addEventListener("DOMContentLoaded", function () {
    var skrollrInstance = skrollr.init();
  });
  // Initial call to set active slide
  // updateActiveSlide();
  // =============================================================
  // 앱서비스
  var swiperMobile = new Swiper(".swiper-container.swiper-full-mobile", {
    slidesPerView: 5,
    spaceBetween: 50,
    slideToClickedSlide: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-container.swiper-full-mobile .swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 800,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: ".swiper-container.swiper-full-mobile .swiper-button-next",
      prevEl: ".swiper-container.swiper-full-mobile .swiper-button-prev",
    },
    breakpoints: {
      1650: {
        // freemode: true,
        slidesPerView: 3,
        spaceBetween: 50,
      },
      769: {
        // freemode: true,
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        // freemode: true,
        slidesPerView: 2,
        spaceBetween: 10,
      },
      531: {
        // freemode: true,
        slidesPerView: 2,
        spaceBetween: 10,
      },
      530: {
        // freemode: true,
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        // freemode: true,
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        // freemode: true,
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  // ================================================================
  //이용후기
  var reviewswiper = new Swiper(".reviewswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000, // 3초마다 자동 슬라이딩
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    speed: 900, // 슬라이드 이동 속도 (밀리초)
    grabCursor: true, // 마우스 커서를 손가락 모양으로 변경
    // preventInteractionOnTransition: true, // 슬라이딩 중에 사용자의 상호 작용을 방지하여 끊김 없는 슬라이딩
    pagination: {
      el: ".reviewswiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      769: {
        // freemode: true,
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        // freemode: true,
        slidesPerView: 2,
        spaceBetween: 10,
      },
      481: {
        // freemode: true,
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        // freemode: true,
        slidesPerView: 1,
        spaceBetween: 10,
      },
      380: {
        // freemode: true,
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        // freemode: true,
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }
    // direction: getDirection(),
    // // navigation: {
    // //   nextEl: '.swiper-button-next',
    // //   prevEl: '.swiper-button-prev',
    // // },
    // on: {
    //   resize: function () {
    //     reviewswiper.changeDirection(getDirection());
    //   },
    // },
  });
  // function getDirection() {
  //   var windowWidth = window.innerWidth;
  //   var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";
  //   return direction;
  // }
  // ======================================================================================================================
  // '서비스소개'
  // JavaScript 파일에서 메뉴 항목과 섹션 간의 스크롤 연결
  var menuItems = document.querySelectorAll(".modal-menu li a");
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (e) {
      e.preventDefault();
      var targetSectionId = this.getAttribute("data-section");
      var targetSection = document.getElementById(targetSectionId);
      // 해당 섹션으로 스크롤
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
      // 클릭한 메뉴 항목에 'active' 클래스 추가
      // 클릭한 메뉴 항목에 포커스 주기
    });
  });
  // Get all the menu links
  // const menuLinks = document.querySelectorAll(".menu-link");

  // Add a click event listener to each menu link
  // menuLinks.forEach((link) => {
  //   link.addEventListener("click", (event) => {
  // Prevent the default link behavior (page scroll)
  // event.preventDefault();

  // Remove the "active" class from all menu links
  // menuLinks.forEach((link) => {
  //   link.classList.remove("active");
  // });

  // Add the "active" class to the clicked menu link
  //     link.classList.add("active");
  //   });
  // });
});
