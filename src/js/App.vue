<!-- APP -->

<template>
  <div id="app">

    <!-- HEADER и МЕНЮ сайта -->
    <header class="header">
      <HeaderSite :sandwichList="sandwichVisibleList" :cartList="cartVisibleList" :hideList="hideVisibleLists"
        @changeList="changeVisibleList" />
    </header>

    <!-- MAIN -->
    <main class="main">
      <RouterView :items="items" />
    </main>

    <!-- ОСОБЕННОСТИ и РАЗНОЕ -->
    <section class="features">
      <FeaturesSite />
    </section>

    <!-- ОБРАТНАЯ СВЯЗЬ -->
    <section class="feedback">
      <FeedbackSite />
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <FooterSite />
    </footer>

  </div>
</template>

<!-- Подключение Стилей -->
<style scoped>
@import '../css/style.css';
</style>

<!-- Настройка СОСТОЯНИЯ и Свойств элемента .app -->
<script setup name="App">

import { ref, onMounted } from 'vue'; //onMounted / хук из Composition API для выполнения кода после монтирования компонента
import { getGoodsItems, getBasketGoods } from './constants.js'; // Сервер с БД товаров
import { getFromService } from './getFromService.js'; //Метод (FETCH) запрос-ответа данных с сервера. Источник {http} url. Вернет объект с данными в формате json

/**
 * Компоненты VUEJS
 */

/* shared */
import HeaderSite from './shared/HeaderSite.vue';
import FeaturesSite from './shared/FeaturesSite.vue';
import FeedbackSite from './shared/FeedbackSite.vue';
import FooterSite from './shared/FooterSite.vue';

/**
 * Инициализация свойств приложения
 */
const items = ref([]); // массив-резервуар с помещаемыми элементами товаров (БД)
const sandwichVisibleList = ref(false); // отображение меню-сендвич
const cartVisibleList = ref(false); // отображение списка покупок в корзине

/**
 * onMounted / хук из Composition API для выполнения кода ПОСЛЕ монтирования компонента;
 * Сохраняем себе полученные данные с сервера или иного источника данных с помощью fetch
 */
onMounted(() => {
  setTimeout(() => {
    getFromService(getGoodsItems).then((data) => {
      items.value = data;
    });
  }, 500);
});

/**
 * МЕТОДЫ / использование Composition API для определения методов
 */

// Отображение / скрытие Списка:
const changeVisibleList = (event) => {
  if (event.target.classList.value === 'sandwich-ico header-icon-svg') {
    sandwichVisibleList.value = !sandwichVisibleList.value;
    cartVisibleList.value = false;
  }

  if (event.target.classList.value === 'cart header-icon-svg') {
    cartVisibleList.value = !cartVisibleList.value;
    sandwichVisibleList.value = false;
  }
};

// Иконка Close:
const hideVisibleLists = () => {
  sandwichVisibleList.value = false;
  cartVisibleList.value = false;
};

</script>
