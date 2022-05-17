import menuData from "../menu.json";
import createMenuTemplate from "../hbs/menuTemplate.hbs";

function renderMenuMurkup() {
  const menuList = document.querySelector(".js-menu");
  const menuItemsMurkup = createMenuTemplate(menuData);

  menuList.innerHTML = menuItemsMurkup;
}

export default renderMenuMurkup