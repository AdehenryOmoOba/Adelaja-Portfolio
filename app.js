const filterContainer = document.querySelector(".portfolio-filter");
const filterBtns = filterContainer.children;
const totalFilterBtn = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", filter);
}
function filter() {
  filterContainer.querySelector(".active").classList.remove("active");
  this.classList.add("active");
  const filterValue = this.getAttribute("data-filter");

  for (let j = 0; j < totalPortfolioItem; j++) {
    if (filterValue === portfolioItems[j].getAttribute("data-category")) {
      portfolioItems[j].classList.add("show");
      portfolioItems[j].classList.remove("hide");
    } else {
      portfolioItems[j].classList.add("hide");
      portfolioItems[j].classList.remove("show");
    }
    if (filterValue === "all") {
      portfolioItems[j].classList.add("show");
      portfolioItems[j].classList.remove("hide");
    }
  }
}

// Portfolio LightBox //////////////
const lightBox = document.querySelector(".lightbox");
const lightBoxImg = document.querySelector(".lightbox-img");
const lightBoxText = document.querySelector(".caption-text");
const lightBoxCounter = document.querySelector(".caption-counter");
const lightBoxClose = document.querySelector(".lightbox-close");
let itemIndex = 0;

for (let k = 0; k < totalPortfolioItem; k++) {
  portfolioItems[k].addEventListener("click", function () {
    itemIndex = k;
    changeItem();
    toggleLightBox();
  });
}
function changeItem() {
  imgSrc = portfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  lightBoxImg.src = imgSrc;
  lightBoxText.innerHTML = portfolioItems[itemIndex].querySelector(
    "h4"
  ).innerHTML;
  lightBoxCounter.innerHTML = `${itemIndex + 1} of ${totalPortfolioItem}`;
}
function toggleLightBox() {
  lightBox.classList.toggle("open");
}
function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}
function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItem - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}

// Close LightBox //
lightBox.addEventListener("click", function (e) {
  if (e.target === lightBoxClose || e.target === lightBox) {
    toggleLightBox();
  }
});
