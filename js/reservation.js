// $(document).ready(function () {});
window.addEventListener("load", function () {
  // 예약자 선택하기
  let guardianBtn = document.querySelector(".guardianbtn");
  let userBtn = document.querySelector(".userbtn");
  let guardianInfo = document.querySelector(".guardian-info");

  // 이용자로 예약하기 버튼을 누를 시 아래에 있던 보호자 정보 섹션이 숨겨진다.
  userBtn.addEventListener("click", function () {
    guardianInfo.style.display = "none";
    guardianBtn.style.backgroundColor = "#f0f0f0";
    userBtn.style.backgroundColor = "#34c987";
  });
  // 보호자로 예약하기 버튼을 누르면 보호자 정보 섹션이 다시 보인다/
  guardianBtn.addEventListener("click", function () {
    guardianInfo.style.display = "block";
    guardianBtn.style.backgroundColor = "#34c987";
    userBtn.style.backgroundColor = "#f0f0f0";
  });
});
