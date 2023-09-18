function queryPrefersColorScheme() {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getCurrentTheme() {
  return (
    document.body.dataset.theme ||
    localStorage.getItem("theme") ||
    queryPrefersColorScheme()
  );
}

function setThemeAttr(theme) {
  document.body.dataset.theme = theme;
}

function prepareImgs() {
  const imgs = document.querySelectorAll("img");
  for (let img of imgs) {
    if (img.dataset.lightsrc) {
      img.dataset.darksrc = img.src;
    }
  }
}

function assignEls() {
  const theme = getCurrentTheme();

  const imgs = document.querySelectorAll("img");
  for (let img of imgs) {
    if (theme === "light") {
      if (img.dataset.lightsrc) {
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

window.onload = () => {
  prepareImgs();
  assignEls();

  // Set the selected theme in the theme selection dropdown
  document
    .querySelector(
      `#toggleTheme ul li[data-value="${localStorage.getItem("theme") || ""}"]`,
    )
    .classList.add("selected");

  // Attach selector logic
  const themeToggleEls = Array.from(
    document.getElementById("toggleTheme").children[0].children,
  );
  themeToggleEls.forEach((el) => {
    el.addEventListener("click", () => {
      const newTheme = el.dataset.value;

      localStorage.setItem("theme", newTheme);
      setThemeAttr(newTheme || queryPrefersColorScheme());

      themeToggleEls.forEach((e) => e.classList.remove("selected"));
      el.classList.add("selected");

      assignEls();
    });
  });

  setTimeout(() => {
    // Prevent flash of dark while switching to light theme variables
    document.body.classList.add("loaded");
  }, 1);
};
