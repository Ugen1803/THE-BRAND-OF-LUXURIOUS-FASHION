'use strict';

/**
 * Подключение Стилей
 */
import '../css/style.css';

/**
 * Сервер с БД товаров
 */
import { getGoodsItems } from './constants.js';

/**
 * Метод (FETCH) запрос-ответа данных с сервера:
 * @param {http} url Источник
 * @returns {json} Вернет объект с данными в формате json
 */
import { getFromService } from './getFromService.js';

/**
 * Компоненты VUEJS
 */

/**
 * HEADER и МЕНЮ сайта
 */
import { siteHeader } from './components/siteHeader.js';

/* ПРОМО-БЛОК главной страницы */
import { promoBlock } from './components/promoBlock.js';

/**
 * MAIN
 */
/* Раздел КАТЕГОРИИ товаров */
import { categoriesProduct } from './components/categoriesProduct.js';
/* Фильтр товаров */
import { filterProducts } from './components/filterProducts.js';
/* Фильтр по параметрам */
import { filterParameters } from './components/filterParameters.js';
/* КАРТОЧКА товара */
import { productCard } from './components/productCard.js';

/**
 * Нижняя часть страниц сайта
 */
/* Раздел ОСОБЕННОСТИ и РАЗНОЕ */
import { siteFeatures } from './components/siteFeatures.js';
/* Раздел ОБРАТНАЯ СВЯЗЬ */
import { siteFeedback } from './components/siteFeedback.js';

/**
 * FOOTER
 */
import { siteFooter } from './components/siteFooter.js';

function init() {
  /**
   * Инстанс VUEJS
   */

  const app = new Vue({
    // ПОДКЛЮЧЕНИЕ к странице html с помощью элемента .app
    el: '#app',
    // Регистрируем дочерние компоненты:
    components: {
      siteHeader,
      promoBlock,
      categoriesProduct,
      filterProducts,
      filterParameters,
      productCard,
      siteFeatures,
      siteFeedback,
      siteFooter,
    },
    // Настройка СОСТОЯНИЯ и Свойств элемента .app
    data: {
      // резервуар с помещаемыми элементами товаров (БД)
      items: [],
      // отображение списка:
      sandwichVisibleList: false,
      cartVisibleList: false,
    },

    mounted() {
      /**
       * Сохраняем себе полученные данные с сервера или иного источника данных
       * с помощью fetch:
       */
      setTimeout(() => {
        getFromService(getGoodsItems).then((data) => {
          this.items = data;
        });
      }, 1000);

      /**
       * Слайдер товаров
       */
      class Slider {
        constructor(selector) {
          this.sliderEl = document.querySelector(selector);
          if (!this.sliderEl) {
            throw new Error('Wrong slide selector');
          }
        }

        /* функционирование слайдера */
        actionsInit() {
          /* инициализация элементов слайдера */
          this.slides = this.sliderEl.querySelectorAll('.slide-item');
          this.slideIdx = 0;
          this.leftArrow = document.querySelector('.left-arrow');
          this.rightArrow = document.querySelector('.right-arrow');

          /* действия при загрузке слайдов */
          this.slides[this.slideIdx].classList.remove('hidden-slide');

          /* действия при нажатии кнопок "следующий слайд"/"предыдущий слайд" */
          this.rightArrow.addEventListener('click', () => {
            this.setNextRightImage();
          });
          this.leftArrow.addEventListener('click', () => {
            this.setNextLeftImage();
          });
        }

        /* метод при нажатии кнопки "следующий слайд" */
        setNextRightImage() {
          this.slides[this.slideIdx].classList.add('hidden-slide');

          if (this.slideIdx === this.slides.length - 1) {
            this.slideIdx = 0;
          } else {
            this.slideIdx++;
          }

          this.slides[this.slideIdx].classList.remove('hidden-slide');
        }

        /* метод при нажатии кнопки "предыдущий слайд" */
        setNextLeftImage() {
          this.slides[this.slideIdx].classList.add('hidden-slide');

          if (this.slideIdx === 0) {
            this.slideIdx = this.slides.length - 1;
          } else {
            this.slideIdx--;
          }

          this.slides[this.slideIdx].classList.remove('hidden-slide');
        }
      }
      const slider = new Slider('.slide-wrap');
      slider.actionsInit();
    },

    /**
     * МЕТОДЫ
     */

    methods: {
      // Отображение/скрытие Списка:
      sandwichChangeList(event) {
        if (event.target.classList.value === 'sandwich header-icon-svg') {
          this.sandwichVisibleList = !this.sandwichVisibleList;
          this.cartVisibleList = false;
        }
      },
      cartChangeList(event) {
        if (event.target.classList.value === 'cart header-icon-svg') {
          this.cartVisibleList = !this.cartVisibleList;
          this.sandwichVisibleList = false;
        }
      },

      // Иконка Close:
      closeList() {
        if (this.sandwichVisibleList || this.cartVisibleList) {
          this.sandwichVisibleList = false;
          this.cartVisibleList = false;
        }
      },
    },
  });
}

window.onload = init;
