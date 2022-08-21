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
  const theme = getCurrentTheme();

  document.getElementById("toggleTheme").innerText =
    theme === "dark" ? "Go Light 🌞" : "Go Dark 🌚";

  const imgs = document.querySelectorAll("img");
  for (let img of imgs) {
    if (theme === "light") {
      if (img.dataset.lightsrc) {
        img.dataset.darksrc = img.src;
        img.src = img.dataset.lightsrc;
      }
    } else {
      if (img.dataset.darksrc) {
        img.src = img.dataset.darksrc;
      }
    }
  }
}

// Set the data-theme attr and update local storage before document loads
setTheme();

window.onload = function () {
  assignEls();

  document.getElementById("toggleTheme").addEventListener("click", function () {
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
