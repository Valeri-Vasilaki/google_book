let cart = JSON.parse(localStorage.getItem("cart") ?? []);

function updateCartDisplay() {
  const cartInfo = document.querySelector(".header-icon__cart-info");
  const infoNumber = document.querySelector(".cart-info-text");
  infoNumber.innerHTML = cart.length;
  if (cart.length > 0) {
    cartInfo.style.display = "flex";
  } else {
    cartInfo.style.display = "none";
  }
}

export function updateCart(book, allBooks, index) {
  const bookId = allBooks[index].id;
  const button = document.querySelectorAll(".book-button-buy")[index];
  if (cart.some((b) => b.id === bookId)) {
    cart = cart.filter((b) => b.id !== bookId);
    button.classList.remove("book-button-in-the-cart");
  } else {
    cart.push(book);
    button.classList.add("book-button-in-the-cart");
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
  return cart;
}

export function initializeCart() {
  cart = JSON.parse(localStorage.getItem("cart") ?? []);
  updateCartDisplay();
  return cart;
}
