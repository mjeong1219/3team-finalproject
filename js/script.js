window.addEventListener("load", function () {
  showInitialDashboard();

  document
    .getElementById("logout-button")
    .addEventListener("click", function () {
      // 로그아웃 로직을 처리하고 다시 초기 화면을 표시합니다.
      document.getElementById("login-section").style.display = "block";
      document.getElementById("dashboard-section").style.display = "none";
      document.getElementById("signup-section").style.display = "block";
    });

  // 대시보드 화면 표시
  function showInitialDashboard() {
    var params = new URLSearchParams(window.location.search);
    var username = params.get("username");

    if (username) {
      document.getElementById("login-section").style.display = "none";
      document.getElementById("dashboard-section").style.display = "flex";
      document.getElementById("username-display").textContent = `${username}`;
      // document.getElementById("logout-button").style.display = "block";
      document.getElementById("signup-section").style.display = "none";
    } else {
      document.getElementById("login-section").style.display = "block";
      document.getElementById("signup-section").style.display = "block";
      document.getElementById("dashboard-section").style.display = "none";
      // document.getElementById("logout-button").style.display = "none";
    }
  }
});
