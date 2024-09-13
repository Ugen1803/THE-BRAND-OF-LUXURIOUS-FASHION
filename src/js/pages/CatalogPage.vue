<!-- СТРАНИЦА КАТАЛОГ ТОВАРОВ -->

<template>
  <div class="page-wrapper">
    <h1 class="hidden">Страница товаров</h1>

    <!-- Блок информации о данной странице -->
    <section class="page-title">
      <div class="container">
        <h2 class="hidden">О данной странице</h2>

        <div class="page-wrap">
          <h1 class="page-name">ALL PRODUCTS</h1>

          <!-- Навигация хлебные крошки -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">HOME</router-link>
              </li>

              <li class="breadcrumb-item-active" aria-current="page">ALL PRODUCTS</li>
            </ol>

          </nav>
        </div>
      </div>
    </section>

    <!-- Блок с товарами -->
    <section class="products">
      <div class="container">
        <h2 class="hidden">Каталог товаров</h2>

        <!-- Фильтр товаров -->
        <section class="filter-box">
          <FilterProducts />
          <FilterParameters />
        </section>

        <!-- ТОВАРЫ -->
        <section class="products-items">
          <!-- Товары из базы данных -->
          <ul class="items" v-if="items && items.length">
            <ProductCard v-for="item_arr in items" :item_card="item_arr" :key="item_arr.id" />
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

        <!-- Пагинация товаров -->
        <section class="pagination-wrap">
          <nav class="pagination-border">
            <div class="pagination">
              <button class="bracket">
                <svg width="9" height="14" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z" />
                </svg>
              </button>

              <button class="page-active">1</button>
              <button class="page">2</button>
              <button class="page">3</button>
              <button class="page">4</button>
              <button class="page">5</button>
              <button class="page">6</button>
              <span class="page-separator">.....</span>
              <button class="page">10</button>

              <button class="bracket">
                <svg width="9" height="14" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z" />
                </svg>
              </button>
            </div>
          </nav>
        </section>
      </div>
    </section>

  </div>
</template>

<script setup name="CatalogPage">

import FilterProducts from '../components/FilterProducts.vue';
import FilterParameters from '../components/FilterParameters.vue';
import ProductCard from '../components/ProductCard.vue'; // Карточка Товара

defineProps({
  items: {
    type: Array,
    default: () => [], // инициализируем items с пустым массивом
  },
});

</script>
