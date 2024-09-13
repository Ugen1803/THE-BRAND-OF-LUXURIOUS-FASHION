'use strict';

/**
 * Компоненты VUEJS
 */
/* APP */
import App from './App.vue';
/* pages */
import MainPage from './pages/MainPage.vue';
import RegistrationPage from './pages/RegistrationPage.vue';
import CartPage from './pages/CartPage.vue';
import ForWomanPage from './pages/ForWomanPage.vue';
import CatalogPage from './pages/CatalogPage.vue';

/**
 * Импорт модуля vue-router
 */
import { createRouter, createWebHashHistory, RouterLink } from 'vue-router';

/**
 * Экземпляр VueRouter с Маршрутами для страниц
 * history: createWebHistory():
 * Более мощный и гибкий способ настроить историю маршрутизации
 * Использует HTML5 History API для сохранения состояния приложения
 * Требует настройки сервера для обслуживания маршрутов
 * Позволяет использовать относительные ссылки и имеет лучшую поддержку SEO
 */
const router = createRouter({  // Экземпляр:
  // history: createWebHistory(), // Более мощный и гибкий способ настроить историю маршрутизации
  history: createWebHashHistory(), // Метод управления историей маршрутов Vue Router
  components: { MainPage, RegistrationPage, CartPage, ForWomanPage, CatalogPage }, // Используемые страницы-компоненты
  routes: [  // Маршруты между страницами:
    {
      path: '/',
      name: 'main-page',
      component: () => import('@/pages/MainPage.vue'),
    },
    {
      path: '/registration',
      name: 'registration-page',
      component: () => import('@/pages/RegistrationPage.vue')
    },
    {
      path: '/cart',
      name: 'cart-page',
      component: () => import('@/pages/CartPage.vue')
    },
    {
      path: '/for-woman',
      name: 'for-woman-page',
      component: () => import('@/pages/ForWomanPage.vue')
    },
    {
      path: '/catalog',
      name: 'catalog-page',
      component: () => import('@/pages/CatalogPage.vue')
    },
  ],
});

/**
 * Подключение приложения VUEJS к проекту
 */
import { createApp } from 'vue';

/* Настройка приложения */
const app = createApp(App); // в Vue 3 нет конструктора Vue, используется fu createApp для создания экземпляра приложения
app.use(router); // Подключение роутинга между страницами в приложении
app.mount('#app'); // Подключение приложения к элементу id="app"
