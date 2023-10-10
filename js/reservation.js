window.addEventListener("load", function () {
  // 예약자 선택하기
  let guardianBtn = document.querySelector(".guardianbtn");
  let userBtn = document.querySelector(".userbtn");
  let guardianInfo = document.querySelector(".guardian-info");

  // 날짜/시간
  let date = document.querySelector("#date");
  let time = document.querySelector("#time");

  // 이용 항목 선택 객체들
  // 도보 이용
  let walk = document.querySelector("#walk");
  let noChair1 = document.querySelector("#no-chair1");
  let yesChair1 = document.querySelector("#yes-chair1");

  // 차량 이용
  let drive = document.querySelector("#drive");
  let driverOnly = document.querySelector("#driveronly");
  let driverAndManager = document.querySelector("#driverandmanager");
  let noChair2 = document.querySelector("#no-chair2");
  let yesChair2 = document.querySelector("#yes-chair2");

  // 보호자 정보
  let guardianName = document.querySelector("#guardian-name");
  let guardianNumber = document.querySelector("#guardian-number");

  // 이용자 정보
  let userName = document.querySelector("#user-name");
  let male = document.querySelector("#male");
  let female = document.querySelector("#female");
  let userBirth = document.querySelector("#user-birth");
  let userNumber = document.querySelector("#user-number");

  // 예약하기 버튼
  let reservateBtn = document.querySelector("#reservatebtn");

  // 이용항목 선택
  let reservationContent = document.querySelector(".reservation-content");
  let reservationContentMobile = document.querySelector(
    ".reservation-content-mobile"
  );

  // 이용자로 예약하기 버튼을 누를 시 아래에 있던 보호자 정보 섹션이 숨겨진다.
  userBtn.addEventListener("click", function () {
    guardianInfo.style.display = "none";
    guardianBtn.style.backgroundColor = "#f0f0f0";
    guardianBtn.style.color = "#333";
    userBtn.style.backgroundColor = "#34c987";
    userBtn.style.color = "#fff";
  });
  // 보호자로 예약하기 버튼을 누르면 보호자 정보 섹션이 다시 보인다/
  guardianBtn.addEventListener("click", function () {
    guardianInfo.style.display = "block";
    guardianBtn.style.backgroundColor = "#34c987";
    guardianBtn.style.color = "#fff";
    userBtn.style.backgroundColor = "#f0f0f0";
    userBtn.style.color = "#333";
  });

  // 예약하기 버튼을 눌렀을 때
  reservateBtn.addEventListener("click", function (event) {
    // 정보를 덜 기입하고 예약하기 버튼을 눌렀을 때
    // 선택한 값을 가져오기
    let walkVal = walk.checked ? "도보 동행" : "";
    let driveVal = drive.checked ? "차량 동행" : "";
    let driveronlyVal = driverOnly.checked ? "드라이버 1명" : "";
    let driverandmanagerVal = driverAndManager.checked
      ? "드라이버 1명 + 동행 매니저 1명"
      : "";
    let noChair1Val = noChair1.checked ? "무" : "";
    let yesChair1Val = yesChair1.checked ? "유" : "";
    let noChair2Val = noChair2.checked ? "무" : "";
    let yesChair2Val = yesChair2.checked ? "유" : "";
    let userGenderVal = male.checked ? "남성" : "여성";

    if (guardianInfo.style.display === "block") {
      if (
        date.value.trim() === "" ||
        time.value.trim() === "" ||
        (walk.checked === false &&
          drive.checked === false &&
          driverOnly.checked === false &&
          driverAndManager.checked === false) ||
        (walk.checked &&
          noChair1.checked === false &&
          yesChair1.checked === false) ||
        (drive.checked &&
          driverOnly.checked === false &&
          driverAndManager.checked === false &&
          noChair2.checked === false &&
          yesChair2.checked === false) ||
        guardianName.value.trim() === "" ||
        guardianNumber.value.trim() === "" ||
        userName.value.trim() === "" ||
        (male.checked === false && female.checked === false) ||
        userBirth.value.trim() === "" ||
        userNumber.value.trim() === ""
      ) {
        // 필수 정보가 누락되었을 때 확인 창 띄우기
        alert("필수 정보가 누락되었습니다.");
        event.preventDefault(); // 제출 이벤트를 중지
        return;
      }

      let result1 = confirm(
        `예약 날짜 : ${date.value}
예약 시간 : ${time.value}
이용항목 : ${walkVal} ${driveVal} ${driveronlyVal} ${driverandmanagerVal}
휠체어 유/무 : ${noChair1Val} ${yesChair1Val} ${noChair2Val} ${yesChair2Val} 
보호자 정보 : ${guardianName.value} / ${guardianNumber.value}
이용자 정보 : ${userName.value} ( ${userGenderVal} / ${userBirth.value} / ${userNumber.value} )

해당 정보로 예약하시겠습니까?`
      );

      if (result1 === true) {
        alert(`예약이 완료되었습니다. 10분 이내로 직원이 전화드릴 예정입니다.`);
        location.href = "index.html";
      } else {
        // 예약 취소 시 동작
      }
    } else {
      if (
        date.value.trim() === "" ||
        time.value.trim() === "" ||
        (walk.checked === false &&
          drive.checked === false &&
          driverOnly.checked === false &&
          driverAndManager.checked === false) ||
        (walk.checked &&
          noChair1.checked === false &&
          yesChair1.checked === false) ||
        (drive.checked &&
          driverOnly.checked === false &&
          driverAndManager.checked === false &&
          noChair2.checked === false &&
          yesChair2.checked === false) ||
        userName.value.trim() === "" ||
        (male.checked === false && female.checked === false) ||
        userBirth.value.trim() === "" ||
        userNumber.value.trim() === ""
      ) {
        // 필수 정보가 누락되었을 때 확인 창 띄우기
        alert("필수 정보가 누락되었습니다.");
        event.preventDefault(); // 제출 이벤트를 중지
        return;
      }

      let result2 = confirm(
        `예약 날짜 : ${date.value}
예약 시간 : ${time.value}
이용항목 : ${walkVal} ${driveVal} ${driveronlyVal} ${driverandmanagerVal}
휠체어 유/무 : ${noChair1Val} ${yesChair1Val} ${noChair2Val} ${yesChair2Val}
이용자 정보 : ${userName.value} ( ${userGenderVal} / ${userBirth.value} / ${userNumber.value} )

해당 정보로 예약하시겠습니까?`
      );

      if (result2 === true) {
        alert(`예약이 완료되었습니다. 10분 이내로 직원이 전화드릴 예정입니다.`);
        location.href = "index.html";
      } else {
        // 예약 취소 시 동작
      }
    }
  });
  
  function setDisplayBasedOnWindowWidth() {
    // 현재 윈도우 너비 확인
    let windowWidth = window.innerWidth;

    // 너비가 600px 이하일 때
    if (windowWidth <= 600) {
      reservationContentMobile.style.display = "block";
      reservationContent.style.display = "none";
    } else {
      reservationContentMobile.style.display = "none";
      reservationContent.style.display = "block";
    }
  }
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
