import searchIcon from "../database/search.svg";

function homeContent() {
  // elements to append on
  const content = document.querySelector("#content");

  // elements creation
  
  const heroSection = document.createElement("div");
  heroSection.classList.add("hero-section");

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Restaurant Page";

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = "Discover the best food & drinks around the corder";

  const search = document.createElement("div");
  search.classList.add("search");

  const icon = document.createElement("img");
  icon.classList.add("icon");
  icon.src = searchIcon;

  const input = document.createElement("input");
  input.setAttribute("type", "search");
  input.setAttribute("placeholder", "Search for food...");

  // assign elements

  search.append(icon, input);
  heroSection.append(title, description, search);
  content.appendChild(heroSection);
}

export { homeContent };