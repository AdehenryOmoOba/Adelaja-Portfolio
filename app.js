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
