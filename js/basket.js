"use strict";

// Находим нужные элементы
const basketEl = document.querySelector(".basket");
const basketCounterEl = document.querySelector(".cart_number");
const basketTotalEl = document.querySelector(".basketTotal");
const basketTotalValueEl = document.querySelector(".basketTotalValue");

// Открываем/скрываем содержимое покупок
document.querySelector(".cart_wrap").addEventListener("click", () => {
  basketEl.classList.toggle("hidden");
});

// Создаем пустой объект, в котором будут храниться данные выбраных товаров
class basket {}

// Обработка клика по выбраному объекту
document.querySelector(".fetured_items").addEventListener("click", (ev) => {
  if (!ev.target.closest(".btn_add")) {
    return;
  }
  const fetureItem = ev.target.closest(".btn_add");
  const id = +fetureItem.dataset.id;
  const name = fetureItem.dataset.name;
  const price = +fetureItem.dataset.price;

  addToCart(id, name, price);
});

// Метод добавления объекта в корзину
function addToCart(id, name, price) {
  if (!(id in basket)) {
    basket[id] = {
      id: id,
      name: name,
      price: price,
      count: 0,
    };
  }
  basket[id].count++;
  basketCounterEl.textContent = getTotalBasketCount();
  basketTotalValueEl.textContent = getTotalBasketPrice();
  renderProductInBasket(id);
}

// Метод подсчета количества выбраных товаров
function getTotalBasketCount() {
  // Вариант через метод Массива:
  // return Object.values(basket).reduce((acc, product) => acc + product.count, 0);

  // Вариант через Цикл for of:
  const productArr = Object.values(basket);
  let count = 0;
  for (const product of productArr) {
    count += product.count;
  }
  return count;
}

// Метод подсчета общей суммы выбраных товаров
function getTotalBasketPrice() {
  // Вариант через метод Массива:
  // return Object.values(basket).reduce(
  //   (acc, product) => acc + product.count * product.price,
  //   0
  // );

  // Вариант через Цикл for of:
  const productArr = Object.values(basket);
  let count = 0;
  for (const product of productArr) {
    count += product.count * product.price;
  }
  return count;
}

// Метод по добавлению нового выбраного товара в список, либо увеличению количества
function renderProductInBasket(id) {
  const basketRowEl = basketEl.querySelector(
    `.basketRow[data-productId="${id}"]`
  );
  if (!basketRowEl) {
    renderNewProductInBasket(id);
    return;
  }

  basketRowEl.querySelector(".productCount").textContent = basket[id].count;
  basketRowEl.querySelector(".productTotalRow").textContent =
    basket[id].count * basket[id].price;
}

// Метод по добавлению новой строки с данными о товаре
function renderNewProductInBasket(productId) {
  const productRow = `
    <div class="basketRow" data-productId="${productId}">
      <div>${basket[productId].name}</div>
        <div>
          <span class="productCount">
            ${basket[productId].count} 
          </span> шт.
        </div>
        <div>
          $${basket[productId].price}
        </div>
        <div>
          $<span class="productTotalRow">
            ${basket[productId].price * basket[productId].count}
          </span>
        </div>
    </div>
  `;
  basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}
