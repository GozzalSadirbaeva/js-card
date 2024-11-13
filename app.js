let cardDatas = [
  {
    image:
      "https://images.pexels.com/photos/13618926/pexels-photo-13618926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Card 1",
    description: "This is a card",
    more: "See more",
  },
  {
    image:
      "https://images.pexels.com/photos/13618926/pexels-photo-13618926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Card 2",
    description: "This is a card",
    more: "See more",
  },
];

let container = document.querySelector(".container");
function createCards() {
  cardDatas.forEach((val) => {
    let cardDiv = document.createElement("div");
    let card = document.createElement("div");
    card.classList.add("card");
    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    let img = document.createElement("img");
    let title = document.createElement("h4");
    let description = document.createElement("p");
    let more = document.createElement("button");
    more.classList.add("more");
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("fa-solid", "fa-trash", "absolute-block");
    removeBtn.addEventListener("click", () => {
      card.remove();
    });

    img.src = val.image;
    title.textContent = val.title;
    description.textContent = val.description;
    more.textContent = val.more;
    cardContent.append(title, description, more);
    card.append(img, removeBtn, cardContent);
    container.append(card);
  });
  cardDatas = [];
}
createCards();

let imgLink = document.querySelector("#img_link");
let addTitle = document.querySelector("#add_title");
let addDescription = document.querySelector("#add_description");

let addBtn = document.querySelector(".addBtn");
let addNewCard = document.querySelector(".modal-body");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let isValidInputs = imgLink.value && addTitle.value && addDescription.value;

  if (!isValidInputs) return alert("Formani to'ldiring");

  let data = {
    image: imgLink.value,
    title: addTitle.value,
    description: addDescription.value,
    more: "See more",
  };
  cardDatas.push(data);
  createCards();
  addNewCard.reset();
});
