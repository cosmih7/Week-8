// Wait 5 seconds, then remove the notice
setTimeout(function () {
  const notice = document.getElementById("maintenance-notice");
  notice.style.display = "none";
}, 5000);
