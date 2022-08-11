const toggleThemeBtn = document.getElementById("toggleTheme");
const toggleLogo = document.getElementById("logo")
const gitHubLogoList = document.getElementsByClassName("gh")
const metaLogoList = document.getElementsByClassName("meta")
const mozLogo = document.getElementById("moz")
const samLogo = document.getElementById("sam")
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
        assignDarkThemeEl();
    } else {
        assignLightThemeEl();
    }
}

function setAndSaveTheme() {
    let theme;
    if (document.body.classList.contains("dark")) {
        theme = "dark";
        assignDarkThemeEl();
    } else {
        theme = "light";
        assignLightThemeEl();
    }
    localStorage.setItem("theme", theme);
    localStorage.setItem("overRideSysColour", "true")
}

function assignDarkThemeEl() {
    toggleThemeBtn.innerText = "Go Light 🌞"
    toggleLogo.src = "/img/webdocs_logo_dark.svg"
    if(window.location.pathname == "/team/"){
        mozLogo.src = "/img/mozilla-light.png"
        samLogo.src = "/img/samsung-light.png"
    }
    for(let i in gitHubLogoList){
        gitHubLogoList[i].src = "/img/github-light.png"
    }
    for(let i in metaLogoList){
        metaLogoList[i].src = "/img/meta-dark.svg"
    }
}

function assignLightThemeEl() {
    toggleThemeBtn.innerText = "Go Dark 🌚"
    toggleLogo.src = "/img/webdocs_logo_light.svg"
    if(window.location.pathname == "/team/"){
        mozLogo.src = "/img/mozilla-dark.png"
        samLogo.src = "/img/samsung-dark.png"
    }

    for(let i in gitHubLogoList){
        gitHubLogoList[i].src = "/img/github-dark.png"
    }
    for(let i in metaLogoList){
        metaLogoList[i].src = "/img/meta-light.svg"
    }
}

getSavedTheme(currentTheme);
getThemeBtnText(currentTheme, sysIsDark);
toggleThemeBtn.addEventListener("click", function () {
    toggleTheme(sysIsDark);
    setAndSaveTheme();
});