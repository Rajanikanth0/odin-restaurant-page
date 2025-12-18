function getCard() {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("div");
  image.classList.add("image");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = "Recipe Name";

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = "a brief sentence about the recipe";

  card.append(image, title, description);

  return card;
}

function menuContent() {
  const content = document.querySelector("#content");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  for (let n = 0; n < 10; n++) {
    const card = getCard();
    menu.appendChild(card);
  }

  content.appendChild(menu);
}

export { menuContent };