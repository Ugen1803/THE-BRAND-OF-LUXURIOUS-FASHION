/**
 * Сервер с БД товаров:
 */
import { getGoodsItems, getBasketGoods } from '../constants.js';

// Метод (FETCH) запрос-ответа данных с сервера:
import { getFromService } from '../getFromService.js';

/**
 * Карточка ТОВАРА
 */

export const productCard = Vue.component('product-card', {
  props: ['item_card'],
  template: `

    <li class="card">

      <!-- выезжающая маска -->
      <div class="product-overlay">
        <!-- кнопка Добавить в Корзину -->
        <button class="btn-add" @click="addGood">
          <img class="btn-add-img" src="images/header/cart-ico.svg" alt="btn-add" />
          Add to Cart
        </button>
      </div>

      <!-- Фото товара -->
      <div class="goods-item">
        <img :src="item_card.product_image" alt="goods-item" />
      </div>

      <!-- Информация о товаре -->
      <a href="catalog.html" class="information-product">

        <h3 class="name-item">{{item_card.product_name}}</h3>
        <p class="description-item">{{item_card.product_description}}</p>
        <p class="price-item">{{item_card.price}} &#x584;</p>

      </a>
    </li>

  `,

  // Метод добавления выбранного товара в корзину:
  methods: {
    addGood() {
      getFromService(getBasketGoods, 'PUT', { id: this.item_card.id });
    },
  },
});
