import "./styles.css";
import { homeContent } from "./tabs/home.js";
import { menuContent } from "./tabs/menu.js";
import { aboutContent } from "./tabs/about.js";

// initial content
homeContent();

const header = document.querySelector("header");
const content = document.querySelector("#content");

function changeTab(e) {
  const target = e.target.dataset;
  if (!target) return;

  // clean page content
  content.textContent = "";

  switch(target.button) {
    case "home": homeContent(); break;
    case "menu": menuContent(); break;
    case "about": aboutContent(); break;
  }
}

header.addEventListener("click", changeTab);