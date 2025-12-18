import teamImage from "../database/team.jpg";

function getImage() {
  const image = document.createElement("div");
  image.classList.add("image");

  const img = document.createElement("img");
  img.src = teamImage;

  const photoCredit = document.createElement("p");
  photoCredit.classList.add("photoCredit");
  photoCredit.textContent = "Photo by ";
  
  const creditLink1 = document.createElement("a");
  creditLink1.setAttribute("href", "https://unsplash.com/@soymeraki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");
  creditLink1.textContent = "Javier Allegue Barros";

  const text = document.createTextNode(" on ");

  const creditLink2 = document.createElement("a");
  creditLink2.setAttribute("href", "https://unsplash.com/photos/silhouette-photography-of-people-gathered-together-on-cliff-i5Kx0P8A0d4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")
  creditLink2.textContent = "Unsplash";

  photoCredit.append(creditLink1, text, creditLink2);
  image.append(img, photoCredit);

  return image;
}

function getShortSummary() {
  const shortSummary = document.createElement("div");
  shortSummary.classList.add("short-summary");

  const h1 = document.createElement("h1");
  h1.textContent = "Around Us";

  const p = document.createElement("p");
  p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At illo labore possimus, sint quasi ipsum architecto aliquid totam itaque cupiditate error alias rem veritatis voluptatum accusantium maxime dolorem. Tempora asperiores eaque praesentium itaque consequatur sunt accusantium odit saepe perspiciatis facere fugit nihil, quis dolor quidem veniam alias magni";

  shortSummary.append(h1, p);

  return shortSummary;
}

function getLongSummary() {
  const longSummary = document.createElement("div");
  longSummary.classList.add("long-summary");

  const h2 = document.createElement("h2");
  h2.textContent = "Between Us";

  const p = document.createElement("p");
  p.textContent = "tibus quas debitis. Officia necessitatibus nisi esse molestias tempore nulla at molestiae tempora, dignissimos nam, saepe enim amet debitis eligendi ut explicabo repellat. Dolorem repellat praesentium sapiente numquam dignissimos veniam reiciendis fugiat quaerat, esse est? Velit placeat facere impedit cum ratione, tempore amet quibusdam eligendi aliquam, assumenda odit explicabo veritatis perspiciatis beatae qui expedita et minima iusto delectus molestiae numquam. Hic ipsum voluptas esse odit quos, modi sit mollitia laboriosam delectus unde autem architecto saepe natus suscipit, sunt consectetur rem, eius aperiam libero ipsa? Nihil necessitatibus optio repellat adipisci totam, a officiis ex vel ipsam voluptate tempore sunt. Illo repellat ab harum minus a dignissimos unde, quia, ipsa odit nulla recusandae fugiat eos accusantium expedita nostrum vero quis itaque inventore commodi sit vitae quod. Dicta nisi ipsam reiciendis quam dolore quidem voluptatum adipisci eum consectetur? At qui consequuntur deleniti distinctio recusandae eveniet sunt quia cupiditate molestiae ut amet eaque eius saepe quis accusamus corrupti minus reiciendis voluptate ducimus, culpa eum ab. Expedita placeat eius soluta explicabo.";

  longSummary.append(h2, p);

  return longSummary;
}

function getLinks() {
  const links = document.createElement("div");
  links.classList.add("links");

  const h2 = document.createElement("h2");
  h2.textContent = "Follow Us";

  const ul = document.createElement("ul");

  for (let n = 0; n < 4; n++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = "Social Link " + (n+1);

    li.appendChild(a);
    ul.appendChild(li);
  }

  links.append(h2, ul);
  return links;
}

function aboutContent() {
  const content = document.querySelector("#content");

  const about = document.createElement("div");
  about.classList.add("about");

  const image = getImage();
  const shortSummary = getShortSummary();
  const longSummary = getLongSummary();
  const links = getLinks();
  
  about.append(image, shortSummary, longSummary, links);
  content.appendChild(about);
}

export { aboutContent };