const catCard = document.querySelector(".cat-card");
const dogCard = document.querySelector(".dog-card");
const foxCard = document.querySelector(".fox-card");
const viewedCard = document.querySelector(".viewed-card");

const catBtn = document.querySelector("[data-cat]");
const dogBtn = document.querySelector("[data-dog]");
const foxBtn = document.querySelector("[data-fox]");
const nextBtn = document.querySelector("[data-next]");


let catURI = "https://aws.random.cat/meow";
let dogURI = "https://dog.ceo/api/breeds/image/random";
let foxURI = "https://randomfox.ca/floof/";


let catElem = document.createElement("img");
let dogElem = document.createElement("img");
let foxElem = document.createElement("img");
let viewedElem = document.createElement("img");
let prevElem = document.createElement("img");
let nextElem = document.createElement("img");

let animalHistory = [];
let i = 0;

//  <img src="./assets/dog.jpg" class="card-img-top dog-img"  alt="...">

catBtn.addEventListener("click", fetchRandomCat);
dogBtn.addEventListener("click", fetchRandomDog);
foxBtn.addEventListener("click", fetchRandomFox);
nextBtn.addEventListener("click", function (e) {
  viewedElem.src = nextItem();
  viewedCard.appendChild(viewedElem)
  e.preventDefault(); // prevent link to navigate
});
prevBtn.addEventListener("click", choosePreviousImage);



function fetchRandomCat() {
  fetch(catURI)
    .then((res) => res.json())
    .then((data) => {
      catElem.src = data.file;
      animalHistory.push(data.file);
      catCard.appendChild(catElem);
      
  viewedElem.src = animalHistory[i];
  viewedCard.appendChild(viewedElem)
  i++
    });
}

function fetchRandomDog() {
  // let elem = document.createElement("img");
  fetch(dogURI)
    .then((res) => res.json())
    .then((data) => {
      dogElem.src = data.message;
      animalHistory.push(data.message);
      dogCard.appendChild(dogElem);
      
  viewedElem.src = animalHistory[i];
  viewedCard.appendChild(viewedElem)
  i++
    });
}

function fetchRandomFox() {
  // let elem = document.createElement("img");
  fetch(foxURI)
    .then((res) => res.json())
    .then((data) => {
      foxElem.src = data.image;
      animalHistory.push(data.image);
      foxCard.appendChild(foxElem);
      console.log(animalHistory)
      
  viewedElem.src = animalHistory[i];
  viewedCard.appendChild(viewedElem)
  i++
    });
}


function nextItem() {
  i++;
  i = i + 1;
    i = i % animalHistory.length;
    return animalHistory[i];
}
