const toggleThemeBtn = document.getElementById("toggleTheme");
const toggleLogo = document.getElementById("logo");
const gitHubLogoList = document.getElementsByClassName("gh");
const metaLogoList = document.getElementsByClassName("meta");
const mozLogo = document.getElementById("moz");
const samLogo = document.getElementById("sam");

function getCurrentTheme() {
  return (
    document.body.dataset.theme ||
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
}

function setTheme() {
  const theme = getCurrentTheme();

  document.body.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

function assignEls() {
  if (getCurrentTheme() === "dark") {
    assignDarkThemeEl();
  } else {
    assignLightThemeEl();
  }
}

function assignDarkThemeEl() {
  toggleThemeBtn.innerText = "Go Light 🌞";
  toggleLogo.src = "/img/webdocs_logo_dark.svg";
  if (window.location.pathname == "/team/") {
    mozLogo.src = "/img/mozilla-light.png";
    samLogo.src = "/img/samsung-light.png";
  }
  for (let i in gitHubLogoList) {
    gitHubLogoList[i].src = "/img/github-light.png";
  }
  for (let i in metaLogoList) {
    metaLogoList[i].src = "/img/meta-dark.svg";
  }
}

function assignLightThemeEl() {
  toggleThemeBtn.innerText = "Go Dark 🌚";
  toggleLogo.src = "/img/webdocs_logo_light.svg";
  if (window.location.pathname == "/team/") {
    mozLogo.src = "/img/mozilla-dark.png";
    samLogo.src = "/img/samsung-dark.png";
  }

  for (let i in gitHubLogoList) {
    gitHubLogoList[i].src = "/img/github-dark.png";
  }
  for (let i in metaLogoList) {
    metaLogoList[i].src = "/img/meta-light.svg";
  }
}

// Set the data-theme attr and update local storage before document loads
setTheme();

window.onload = function () {
  assignEls();

  toggleThemeBtn.addEventListener("click", function () {
    const isDark = document.body.dataset.theme == "dark";
    document.body.dataset.theme = isDark ? "light" : "dark";

    setTheme();
    assignEls();
  });

  setTimeout(() => {
    // Prevent flash of dark while switching to light theme variables
    document.body.classList.add("loaded");
  }, 1);
};
