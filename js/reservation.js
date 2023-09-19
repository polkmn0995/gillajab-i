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
  let walk = document.querySelector("#walk");
  let noChair1 = document.querySelector("#no-chair1");
  let yesChair1 = document.querySelector("#yes-chair1");

  // 차량 이용
  let drive = document.querySelector("#drive");
  let driverOnly = document.querySelector("#driveronly");
  let driverAndManager = document.querySelector("#driverandmanager");
  let noChair2 = document.querySelector("#no-chair2");
  let yesChair2 = document.querySelector("#yes-bathchair2");

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

  // alert 창에 띄울 확인 값
  let dateVal = document.getElementById("date").value;
  let timeVal = document.getElementById("time").value;
  let walkVal = document.getElementById("walk").checked ? "도보 동행" : "";
  let driveVal = document.getElementById("drive").checked ? "차량 동행" : "";
  let driveronlyVal = document.getElementById("driveronly").checked
    ? "드라이버 1명"
    : "";
  let driverandmanagerVal = document.getElementById("driverandmanager").checked
    ? "드라이버 1명 + 동행 매니저 1명"
    : "";
  let noChair1Val = document.getElementById("no-chair1").checked
    ? "휠체어 무"
    : "";
  let yesChair1Val = document.getElementById("yes-chair1").checked
    ? "휠체어 유"
    : "";
  let noChair2Val = document.getElementById("no-chair2").checked
    ? "휠체어 무"
    : "";
  let yesChair2Val = document.getElementById("yes-chair2").checked
    ? "휠체어 유"
    : "";
  let guardianNameVal = document.getElementById("guardian-name").value;
  let guardianNumberVal = document.getElementById("guardian-number").value;
  let userNameVal = document.getElementById("user-name").value;
  let userGenderVal = document.querySelector('input[name="gen"]:checked').value;
  let userBirthVal = document.getElementById("user-birth").value;
  let userNumberVal = document.getElementById("user-number").value;

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
      alert("비어있는 입력란이 존재합니다.");
      event.preventDefault(); // 제출 이벤트를 중지
    }
    let result = confirm(
      `예약 날짜/시간 : ${dateVal} ${timeVal}
이용항목 : ${walkVal} ${driveVal} ${driveronlyVal} ${driverandmanagerVal}
휠체어 유/무 : ${noChair1Val} ${yesChair1Val} ${noChair2Val} ${yesChair2Val} 
보호자 정보 : ${guardianNameVal} ${guardianNumberVal}
이용자 정보 : ${userNameVal} (${userGenderVal},${userBirthVal},${userNumberVal})

해당 정보로 예약하시겠습니까?`
    );

    if (result === true) {
      alert(`예약이 완료되었습니다. 15분 이내로 직원이 전화드릴 예정입니다.`);
      location.href = "index.html";
    } else {
      // alert(`예약이 취소되었습니다.`);
    }
  });
});
