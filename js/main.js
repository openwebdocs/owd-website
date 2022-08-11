const toggleThemeBtn = document.getElementById("toggleTheme");
const currentTheme = localStorage.getItem("theme");
const sysIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function getSavedTheme(savedTheme) {
    if (localStorage.getItem("overRideSysColour") === "true") {
        document.body.classList.remove('systemDarkPreference');
        document.body.classList.toggle(savedTheme);
    }
}

function toggleTheme(currentSysIsDark) {
    const hasSystemDarkClass = document.body.classList.contains('systemDarkPreference');
    const isDark = (hasSystemDarkClass && currentSysIsDark) || document.body.classList.contains('dark');

    document.body.classList.remove('systemDarkPreference');
    document.body.classList.toggle('dark', !isDark);
}

function getThemeBtnText(theme, currentSysIsDark) {
    if((theme === "dark") || (currentSysIsDark && theme !== "light")){
        assignThemeBtnTextLight();
    } else {
        assignThemeBtnTextDark();
    }
}

function setAndSaveTheme() {
    let theme;
    if (document.body.classList.contains("dark")) {
        theme = "dark";
        assignThemeBtnTextLight();
    } else {
        theme = "light";
        assignThemeBtnTextDark();
    }
    localStorage.setItem("theme", theme);
    localStorage.setItem("overRideSysColour", "true")
}

function assignThemeBtnTextLight() {
    toggleThemeBtn.innerText = "Go Light 🌞"
}

function assignThemeBtnTextDark() {
    toggleThemeBtn.innerText = "Go Dark 🌚"
}

getSavedTheme(currentTheme);
getThemeBtnText(currentTheme, sysIsDark);
toggleThemeBtn.addEventListener("click", function () {
    toggleTheme(sysIsDark);
    setAndSaveTheme();
});