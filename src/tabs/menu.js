import recipes from "../database/recipes.json";

function getCard(recipe) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("div");
  image.classList.add("image");
  image.style.backgroundColor = recipe.color;

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = recipe.name;

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = recipe.description;

  card.append(image, title, description);

  return card;
}

function menuContent() {
  const content = document.querySelector("#content");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  for (const recipe of recipes) {
    const card = getCard(recipe);
    menu.appendChild(card);
  }

  content.appendChild(menu);
}

export { menuContent };