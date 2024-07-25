/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/css/style.css":
      /*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookshop/./src/css/style.css?"
        );

        /***/
      },

    /***/ "./src/api.js":
      /*!********************!*\
  !*** ./src/api.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   booksLoader: () => (/* binding */ booksLoader)\n/* harmony export */ });\nfunction booksLoader(method, url) {\r\n  return new Promise((resolve, reject) => {\r\n    const xhr = new XMLHttpRequest();\r\n    xhr.open(method, url);\r\n    xhr.responseType = "json";\r\n    xhr.onload = () => {\r\n      if (xhr.status >= 400) {\r\n        reject(xhr.response);\r\n      } else {\r\n        resolve(xhr.response);\r\n      }\r\n    };\r\n    xhr.onerror = function () {\r\n      reject("Ошибка! Статус ответа: " + xhr.status);\r\n    };\r\n    xhr.send();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://bookshop/./src/api.js?'
        );

        /***/
      },

    /***/ "./src/cart.js":
      /*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeCart: () => (/* binding */ initializeCart),\n/* harmony export */   updateCart: () => (/* binding */ updateCart)\n/* harmony export */ });\nlet cart = JSON.parse(localStorage.getItem("cart") ?? "[]");\r\n\r\nfunction updateCartDisplay() {\r\n  const cartInfo = document.querySelector(".header-icon__cart-info");\r\n  const infoNumber = document.querySelector(".cart-info-text");\r\n  infoNumber.innerHTML = cart.length;\r\n  if (cart.length > 0) {\r\n    cartInfo.style.display = "flex";\r\n  } else {\r\n    cartInfo.style.display = "none";\r\n  }\r\n}\r\n\r\nfunction updateCart(book, allBooks, index) {\r\n  const bookId = allBooks[index].id;\r\n  const button = document.querySelectorAll(".book-button-buy")[index];\r\n  if (cart.some((b) => b.id === bookId)) {\r\n    cart = cart.filter((b) => b.id !== bookId);\r\n    button.classList.remove("book-button-in-the-cart");\r\n  } else {\r\n    cart.push(book);\r\n    button.classList.add("book-button-in-the-cart");\r\n  }\r\n  localStorage.setItem("cart", JSON.stringify(cart));\r\n  updateCartDisplay();\r\n  return cart;\r\n}\r\n\r\nfunction initializeCart() {\r\n  cart = JSON.parse(localStorage.getItem("cart") ?? "[]");\r\n  updateCartDisplay();\r\n  return cart;\r\n}\r\n\n\n//# sourceURL=webpack://bookshop/./src/cart.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/css/style.css */ "./src/css/style.css");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ "./src/slider.js");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ "./src/api.js");\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.js */ "./src/cart.js");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener("DOMContentLoaded", function () {\r\n  (0,_slider_js__WEBPACK_IMPORTED_MODULE_1__.initializeSlider)();\r\n\r\n  let currentCategory = "Architecture";\r\n  let allBooks = [];\r\n  let cart = (0,_cart_js__WEBPACK_IMPORTED_MODULE_3__.initializeCart)();\r\n\r\n  let n = 0;\r\n  const bookShop = document.querySelector(".book-cards");\r\n\r\n  function showReviewText(item) {\r\n    return item.volumeInfo.ratingsCount || "0";\r\n  }\r\n\r\n  function showReviewStars(index, item) {\r\n    const percent = (item.volumeInfo.averageRating || 0) * 20;\r\n    const starsBg = document.getElementById(`stars-bg-${index}`);\r\n    if (starsBg) {\r\n      starsBg.style.width = `${percent}%`;\r\n    }\r\n  }\r\n\r\n  function showDescription(item) {\r\n    return item.volumeInfo.description || "Description not found";\r\n  }\r\n\r\n  function showPrice(item) {\r\n    if (item.saleInfo.retailPrice) {\r\n      const rubToDollar = item.saleInfo.retailPrice.amount / 94;\r\n      return `&#36; ${rubToDollar.toFixed(2)}`;\r\n    }\r\n    return "For free";\r\n  }\r\n\r\n  function addBookInfo(apiData) {\r\n    return apiData.items\r\n      .map(\r\n        (item, index) => `\r\n      <div class="book">\r\n          <div class="book-img">\r\n              <div class="book-shadow"></div>\r\n              <img src="${\r\n                item.volumeInfo.imageLinks?.thumbnail ||\r\n                "./images/default-thumbnail.png"\r\n              }" alt="imgBook" class="book-img-content"/>\r\n          </div>\r\n          <div class="book-specification">\r\n              <div class="book-info">\r\n                  <p class="book-author">${\r\n                    item.volumeInfo.authors?.[0] || "Unknown"\r\n                  }</p>\r\n                  <h2 class="book-name">${item.volumeInfo.title}</h2>\r\n                  <div class="review">\r\n                    <div class="review-rating">\r\n                      <div class="stars-bg" id="stars-bg-${index}"></div>\r\n                      <img src="./images/stars.svg" alt="stars" class="rating-stars">\r\n                    </div>\r\n                    <p class="review-text">${showReviewText(item)} review</p>\r\n                  </div>\r\n              </div>\r\n              <p class="book-description">${showDescription(item)}</p>\r\n              <h3 class="book-price">${showPrice(item)}</h3>\r\n              <button class="book-button-buy">Buy now</button>\r\n          </div>\r\n      </div>`\r\n      )\r\n      .join("");\r\n  }\r\n\r\n  function loadBooks(category) {\r\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.booksLoader)(\r\n      "GET",\r\n      `https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=AIzaSyDhnTHVN2FNAu7EUR0830VPm6BsCGkXgSc&printType=books&startIndex=${n}&maxResults=6&langRestrict=en`\r\n    )\r\n      .then((apiData) => {\r\n        allBooks = apiData.items;\r\n        bookShop.innerHTML = addBookInfo(apiData);\r\n        apiData.items.forEach((item, index) => showReviewStars(index, item));\r\n        attachEventListenersToBuyButtons();\r\n      })\r\n      .catch((error) => {\r\n        console.error(error);\r\n        bookShop.innerHTML =\r\n          "<p>Error loading books. Please try again later.</p>";\r\n      });\r\n  }\r\n\r\n  function attachEventListenersToBuyButtons() {\r\n    const buttonBuy = document.querySelectorAll(".book-button-buy");\r\n    buttonBuy.forEach((button, index) => {\r\n      button.addEventListener("click", function () {\r\n        cart = (0,_cart_js__WEBPACK_IMPORTED_MODULE_3__.updateCart)(allBooks[index], allBooks, index);\r\n        document.querySelector(".cart-info-text").innerHTML = cart.length;\r\n      });\r\n    });\r\n  }\r\n\r\n  loadBooks(currentCategory);\r\n\r\n  const loadMoreBooks = document.querySelector(".load-more-button");\r\n  loadMoreBooks.addEventListener("click", () => {\r\n    n += 6;\r\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.booksLoader)(\r\n      "GET",\r\n      `https://www.googleapis.com/books/v1/volumes?q="subject:${currentCategory}"&key=AIzaSyDhnTHVN2FNAu7EUR0830VPm6BsCGkXgSc&printType=books&startIndex=${n}&maxResults=6&langRestrict=en`\r\n    )\r\n      .then((moreApiData) => {\r\n        allBooks.push(...moreApiData.items);\r\n        const newDiv = document.createElement("div");\r\n        newDiv.className = "book-cards-new";\r\n        bookShop.append(newDiv);\r\n        newDiv.innerHTML = addBookInfo(moreApiData);\r\n        attachEventListenersToBuyButtons();\r\n      })\r\n      .catch((error) => {\r\n        console.error(error);\r\n        bookShop.innerHTML +=\r\n          "<p>Error loading more books. Please try again later.</p>";\r\n      });\r\n  });\r\n\r\n  function getCategoryBooks(category) {\r\n    currentCategory = category;\r\n    n = 0;\r\n    loadBooks(category);\r\n  }\r\n\r\n  function changeCategory() {\r\n    const categoryList = document.querySelectorAll(".genre-text");\r\n    categoryList.forEach((category) => {\r\n      category.addEventListener("click", () =>\r\n        getCategoryBooks(category.textContent)\r\n      );\r\n    });\r\n  }\r\n\r\n  changeCategory();\r\n});\r\n\n\n//# sourceURL=webpack://bookshop/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/slider.js":
      /*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeSlider: () => (/* binding */ initializeSlider)\n/* harmony export */ });\nfunction initializeSlider() {\r\n  const dotOne = document.querySelector(".dot-one");\r\n  const dotTwo = document.querySelector(".dot-two");\r\n  const dotThree = document.querySelector(".dot-three");\r\n  const coverSlide = document.querySelector(".cover-slide");\r\n\r\n  const toSlideOne = function () {\r\n    coverSlide.innerHTML = \'<img src="./images/banner1.png" alt="black friday sale up to 60%" class="slide-one-img">\';\r\n    dotOne.classList.add("dot-active");\r\n    dotTwo.classList.remove("dot-active");\r\n    dotThree.classList.remove("dot-active");\r\n  };\r\n\r\n  const toSlideTwo = function () {\r\n    coverSlide.innerHTML = \'<img src="./images/banner2.png" alt="top 10 books for entrepreneurs" class="slide-two-img">\';\r\n    dotOne.classList.remove("dot-active");\r\n    dotTwo.classList.add("dot-active");\r\n    dotThree.classList.remove("dot-active");\r\n  };\r\n\r\n  const toSlideThree = function () {\r\n    coverSlide.innerHTML = \'<img src="./images/banner3.png" alt="check out our cozy books selection" class="slide-three-img">\';\r\n    dotOne.classList.remove("dot-active");\r\n    dotTwo.classList.remove("dot-active");\r\n    dotThree.classList.add("dot-active");\r\n  };\r\n\r\n  dotOne.addEventListener("click", toSlideOne);\r\n  dotTwo.addEventListener("click", toSlideTwo);\r\n  dotThree.addEventListener("click", toSlideThree);\r\n\r\n  let currentIndex = 0;\r\n  setInterval(function () {\r\n    if (currentIndex === 0) {\r\n      currentIndex = 1;\r\n      toSlideTwo();\r\n    } else if (currentIndex === 1) {\r\n      currentIndex = 2;\r\n      toSlideThree();\r\n    } else if (currentIndex === 2) {\r\n      currentIndex = 0;\r\n      toSlideOne();\r\n    }\r\n  }, 5000);\r\n}\r\n\n\n//# sourceURL=webpack://bookshop/./src/slider.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
