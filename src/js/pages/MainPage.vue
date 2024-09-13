<!-- ГЛАВНАЯ СТРАНИЦА САЙТА - "MainPage" -->

<template>
  <div class="page-wrapper">
    <h1 class="hidden">Магазин товаров</h1>

    <!-- ПРОМО-БЛОК главной страницы -->
    <section class="promo">
      <PromoBlock />
    </section>

    <!-- Раздел КАТЕГОРИИ товаров -->
    <section class="categories">
      <CategoriesProduct />
    </section>

    <!-- Раздел КАТАЛОГ товаров на Главной -->
    <section class="products">
      <div class="container">
        <h2 class="hidden">Товары</h2>

        <!-- Заголовки секции -->
        <div class="products-header-wrap">
          <h2 class="h2-featured-items">Featured Items</h2>
          <p class="p-featured-items">
            Shop for items based on what we featured in this week
          </p>
        </div>

        <!-- ТОВАРЫ -->
        <section class="products-items">
          <!-- Товары из базы данных -->
          <ul class="items" v-if="items && items.length">
            <ProductCard v-for="item_arr in items.slice(0, 6)" :item_card="item_arr" :key="item_arr.id" />
          </ul>

          <!-- Если нет товаров в базе -->
          <div class="no-goods-list" v-else-if="!items || items.length === 0">
            <svg width="512" height="512" viewBox="0 0 512 512" style="color: currentColor"
              xmlns="http://www.w3.org/2000/svg" class="h-full w-full">
              <rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0"
                stroke-opacity="100%"></rect>
              <svg width="256px" height="256px" viewBox="0 0 24 24" fill="currentColor" x="128" y="128" role="img"
                style="display: inline-block; vertical-align: middle" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <g>
                    <rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".14" />
                    <rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".29"
                      transform="rotate(30 12 12)" />
                    <rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".43"
                      transform="rotate(60 12 12)" />
                    <rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".57"
                      transform="rotate(90 12 12)" />
                    <rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".71"
                      transform="rotate(120 12 12)" />
                    <rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".86"
                      transform="rotate(150 12 12)" />
                    <rect width="2" height="5" x="11" y="1" fill="currentColor" transform="rotate(180 12 12)" />
                    <animateTransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12" />
                  </g>
                </g>
              </svg>
            </svg>
          </div>
        </section>

        <!-- КНОПКА все товары -->
        <div class="button-wrapper">
          <router-link to="/catalog" class="all-product">
            Browse All Products
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup name="MainPage">

import PromoBlock from '../components/PromoBlock.vue'; // Блок Промо
import CategoriesProduct from '../components/CategoriesProduct.vue'; // Блок Категории товаров
import ProductCard from '../components/ProductCard.vue'; // Карточка Товара

defineProps({
  items: {
    type: Array,
    default: () => [], // инициализируем items с пустым массивом
  },
});

</script>
