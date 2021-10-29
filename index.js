const body = document.getElementById("body");
btn = document.querySelector("input[name=theme]");

btn.addEventListener("change", changeTheme);

theme = localStorage.getItem("statuss");

if (theme === "dark-mode") {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");
} else {
  body.classList.add("light-mode");
  body.classList.remove("dark-mode");
}

function changeTheme(e) {
  if (this.checked) {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    localStorage.setItem("statuss", "dark-mode");
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    localStorage.setItem("statuss", "light-mode");
  }
}
