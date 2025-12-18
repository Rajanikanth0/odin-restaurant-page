import searchIcon from "../database/search.svg";
import foodImage from "../database/food.jpg";

function getImage() {
  const image = document.createElement("div");
  image.classList.add("food-image");

  const img = document.createElement("img");
  img.src = foodImage;

  const p = document.createElement("p");
  p.textContent = "Image by ";

  const creditLink1 = document.createElement("a");
  creditLink1.setAttribute("href", "https://pixabay.com/users/biancavandijk-9606149/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=9083822");
  creditLink1.textContent = "Bianca Van Dijk";

  const text = document.createTextNode(" from ");

  const creditLink2 = document.createElement("a");
  creditLink2.setAttribute("href", "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=9083822");
  creditLink2.textContent = "Pixabay";

  p.append(creditLink1, text, creditLink2);
  image.append(img, p);

  return image;
}

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

  const foodImage = getImage();

  // assign elements

  search.append(icon, input);
  heroSection.append(title, description, search, foodImage);
  content.append(heroSection);
}

export { homeContent };