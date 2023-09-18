// $(document).ready(function () {});
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
  let walk = document.querySelector(".walk");
  let noChair1 = document.querySelector(".no-chair1");
  let yesChair1 = document.querySelector(".yes-chair1");

  // 차량 이용
  let drive = document.querySelector(".drive");
  let driverOnly = document.querySelector(".driveronly");
  let driverAndManager = document.querySelector(".driverandmanager");
  let noChair2 = document.querySelector(".no-chair2");
  let yesChair2 = document.querySelector(".yes-bathchair2");

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

  // 이용 항목 선택 부분
  // 도보 동행 선택 시 옆의 사진들의 opacity가 1이 된다.

  // 예약하기 버튼을 눌렀을 때
  reservateBtn.addEventListener("click", function (event) {
    // 정보를 덜 기입하고 예약하기 버튼을 눌렀을 때
    if (
      date.value.trim() === "" ||
      time.value.trim() === "" ||
      guardianName.value.trim() === "" ||
      guardianNumber.value.trim() === "" ||
      userName.value.trim() === "" ||
      userBirth.value.trim() === "" ||
      userNumber.value.trim() === ""
    ) {
      // 이름 또는 이메일 입력란이 비어있을 때 확인 창 띄우기
      event.preventDefault(); // 제출 이벤트를 중지
      if (confirm("비어있는 입력란이 존재합니다.")) {
      } else {
      }
    }
  });
});
