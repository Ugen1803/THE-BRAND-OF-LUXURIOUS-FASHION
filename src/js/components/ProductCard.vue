<!-- Карточка Товара -->

<template>
  <li class="card">

    <!-- выезжающая маска -->
    <div class="product-overlay">
      <!-- кнопка Добавить в Корзину -->
      <button class="btn-add" @click="addGood(item_card)" type="button">
        <img class="btn-add-img" src="images/header/cart-ico.svg" alt="btn-add" />
        Add to Cart
      </button>
    </div>

    <!-- Фото товара -->
    <div class="goods-item">
      <img :src="item_card.product_image" alt="goods-item" />
    </div>

    <!-- Информация о товаре -->
    <div class="wrap-description-item">
      <h3 class="name-item">{{ item_card.product_name }}</h3>
      <p class="description-item">{{ item_card.product_description }}</p>
      <p class="price-item">{{ item_card.price }} &#x584;</p>
    </div>

  </li>
</template>

<script setup name="ProductCard">
import { getGoodsItems, getBasketGoods } from '../constants.js'; // Сервер с БД товаров
import { getFromService } from '../getFromService.js'; //Метод (FETCH) запрос-ответа данных с сервера. Источник {http} url. Вернет объект с данными в формате json

defineProps({
  item_card: {
    type: Object,
    required: true,
  },
});

// Метод добавления выбранного товара в корзину:
function addGood(item) {
  try {
    getFromService(getBasketGoods, 'PUT', { id: item.id });
  }

  catch (error) {
    console.error('Ошибка добавления товара в корзину:', error);
  }
};

</script>