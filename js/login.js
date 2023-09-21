window.addEventListener("load", function () {
  let userlegend = document.querySelector(".userlegend");
  let guardlegend = document.querySelector(".guardlegend");
  let volunteerlegend = document.querySelector(".volunteerlegend");

  let legends = [userlegend, guardlegend, volunteerlegend];
  let form = document.querySelector("form"); // form 요소 선택
  let submit = document.querySelector(".submitbtn");
  let usernameInput = document.querySelector(".textinput");
  let passwordInput = document.querySelector(".passwordinput");

  legends.forEach((legend) => {
    legend.addEventListener("click", function () {
      // 모든 legends 요소를 초기 상태로 리셋
      legends.forEach((otherLegend) => {
        otherLegend.style.backgroundColor = "#fff";
        otherLegend.style.color = "#333";
        otherLegend.style.border = "1px solid #ccc";
      });

      // 클릭된 요소를 강조 표시
      legend.style.backgroundColor = "#34c987";
      legend.style.color = "#fff";
      legend.style.border = "1px solid #34c987";
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // form의 기본 동작 중지

    let selectedLegend = legends.find(
      (legend) => legend.style.backgroundColor === "rgb(52, 201, 135)"
    );

    if (selectedLegend) {
      let legendText = selectedLegend.textContent;
      let message = "";

      switch (legendText) {
        case "이용자":
          message = "이용자로 로그인 되었습니다.";
          break;
        case "보호자":
          message = "보호자로 로그인 되었습니다.";
          break;
        case "지원자":
          message = "지원자로 로그인 되었습니다.";
          break;
      }

      alert(message);

      // 아이디와 비밀번호 입력 필드를 지움
      usernameInput.value = "";
      passwordInput.value = "";
    } else {
      alert("선택된 역할이 없습니다. 역할을 선택해 주세요.");
    }
  });
});
