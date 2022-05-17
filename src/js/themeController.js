const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const themeControlEl = document.querySelector("#theme-switch-toggle");
const bodyEl = document.querySelector(`body`);
// ------------------------------------------------------------------------

function themeController() {
  populateTheme();

  themeControlEl.addEventListener("change", onChangingTheme);

  function onChangingTheme() {
    if (bodyEl.classList.contains(Theme.LIGHT)) {
      bodyEl.classList.remove(Theme.LIGHT);
      bodyEl.classList.add(Theme.DARK);
      localStorage.setItem("Theme", Theme.DARK);
    } else {
      bodyEl.classList.remove(Theme.DARK);
      bodyEl.classList.add(Theme.LIGHT);
      localStorage.setItem("Theme", Theme.LIGHT);
    }
  }

  function populateTheme() {
    const savedTheme = localStorage.getItem("Theme");

    if (savedTheme === Theme.DARK) {
      themeControlEl.checked = true;
      bodyEl.classList.add(Theme.DARK);
    } else {
      themeControlEl.checked = false;
      bodyEl.classList.add(Theme.LIGHT);
    }
  }
}

export default themeController