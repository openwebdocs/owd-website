function getCurrentTheme() {
  return (
    document.body.dataset.theme ||
    (window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark")
  );
}

function setThemeAttr(theme) {
  document.body.dataset.theme = theme;
}

function assignEls() {
  const theme = getCurrentTheme();

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
setThemeAttr(getCurrentTheme());

window.onload = function () {
  assignEls();

  setTimeout(() => {
    // Prevent flash of dark while switching to light theme variables
    document.body.classList.add("loaded");
  }, 1);
};
