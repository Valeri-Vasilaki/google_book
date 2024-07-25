import "../src/css/style.css";
import { initializeSlider } from "./slider.js";
import { booksLoader } from "./api.js";
import { updateCart, initializeCart } from "./cart.js";

document.addEventListener("DOMContentLoaded", function () {
  initializeSlider();

  let currentCategory = "Architecture";
  let allBooks = [];
  let cart = initializeCart();

  let n = 0;
  const bookShop = document.querySelector(".book-cards");

  function showReviewText(item) {
    return item.volumeInfo.ratingsCount || "0";
  }

  function showReviewStars(index, item) {
    const percent = (item.volumeInfo.averageRating || 0) * 20;
    const starsBg = document.getElementById(`stars-bg-${index}`);
    if (starsBg) {
      starsBg.style.width = `${percent}%`;
    }
  }

  function showDescription(item) {
    return item.volumeInfo.description || "Description not found";
  }

  function showPrice(item) {
    if (item.saleInfo.retailPrice) {
      const rubToDollar = item.saleInfo.retailPrice.amount / 94;
      return `&#36; ${rubToDollar.toFixed(2)}`;
    }
    return "For free";
  }

  function addBookInfo(apiData) {
    return apiData.items
      .map(
        (item, index) => `
      <div class="book">
          <div class="book-img">
              <div class="book-shadow"></div>
              <img src="${
                item.volumeInfo.imageLinks?.thumbnail ||
                "./images/default-thumbnail.png"
              }" alt="imgBook" class="book-img-content"/>
          </div>
          <div class="book-specification">
              <div class="book-info">
                  <p class="book-author">${
                    item.volumeInfo.authors?.[0] || "Unknown"
                  }</p>
                  <h2 class="book-name">${item.volumeInfo.title}</h2>
                  <div class="review">
                    <div class="review-rating">
                      <div class="stars-bg" id="stars-bg-${index}"></div>
                      <img src="./images/stars.svg" alt="stars" class="rating-stars">
                    </div>
                    <p class="review-text">${showReviewText(item)} review</p>
                  </div>
              </div>
              <p class="book-description">${showDescription(item)}</p>
              <h3 class="book-price">${showPrice(item)}</h3>
              <button class="book-button-buy">Buy now</button>
          </div>
      </div>`
      )
      .join("");
  }

  function loadBooks(category) {
    booksLoader(
      "GET",
      `https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=AIzaSyDhnTHVN2FNAu7EUR0830VPm6BsCGkXgSc&printType=books&startIndex=${n}&maxResults=6&langRestrict=en`
    )
      .then((apiData) => {
        allBooks = apiData.items;
        bookShop.innerHTML = addBookInfo(apiData);
        apiData.items.forEach((item, index) => showReviewStars(index, item));
        attachEventListenersToBuyButtons();
      })
      .catch((error) => {
        console.error(error);
        bookShop.innerHTML =
          "<p>Error loading books. Please try again later.</p>";
      });
  }

  function attachEventListenersToBuyButtons() {
    const buttonBuy = document.querySelectorAll(".book-button-buy");
    buttonBuy.forEach((button, index) => {
      button.addEventListener("click", function () {
        cart = updateCart(allBooks[index], allBooks, index);
        document.querySelector(".cart-info-text").innerHTML = cart.length;
      });
    });
  }

  loadBooks(currentCategory);

  const loadMoreBooks = document.querySelector(".load-more-button");
  loadMoreBooks.addEventListener("click", () => {
    n += 6;
    booksLoader(
      "GET",
      `https://www.googleapis.com/books/v1/volumes?q="subject:${currentCategory}"&key=AIzaSyDhnTHVN2FNAu7EUR0830VPm6BsCGkXgSc&printType=books&startIndex=${n}&maxResults=6&langRestrict=en`
    )
      .then((moreApiData) => {
        allBooks.push(...moreApiData.items);
        const newDiv = document.createElement("div");
        newDiv.className = "book-cards-new";
        bookShop.append(newDiv);
        newDiv.innerHTML = addBookInfo(moreApiData);
        attachEventListenersToBuyButtons();
      })
      .catch((error) => {
        console.error(error);
        bookShop.innerHTML +=
          "<p>Error loading more books. Please try again later.</p>";
      });
  });

  function getCategoryBooks(category) {
    currentCategory = category;
    n = 0;
    loadBooks(category);
  }

  function changeCategory() {
    const categoryList = document.querySelectorAll(".genre-text");
    categoryList.forEach((category) => {
      category.addEventListener("click", () =>
        getCategoryBooks(category.textContent)
      );
    });
  }

  changeCategory();
});
