/**
 * Подключение библиотек
 */
const express = require('express'); // Создание простого сервера на express (Node.js)
const cors = require('cors'); // Защита, смотрящая, с какого домена приходит запрос (домен запроса=домену сервера)

/**
 * Настройка работы сервера
 */
const app = express();
app.use(cors());
app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen('8000', () => {
  console.log('server start');
});

/**
 * Метод работы с файловой системой. Чтение/запись из БД
 */
const { readFile, writeFile } = require('fs/promises');
const { countReset } = require('console');

/**
 * Методы:
 */

// Получение ОБЩЕГО списка товаров:
function getGoods() {
  return readFile('./static/goods.json', 'utf-8').then((text) => {
    return JSON.parse(text);
  });
}

// Получение списка товаров в КОРЗИНЕ:
function getRawBasketGoods() {
  return readFile('./static/basket-goods.json', 'utf-8').then((text) => {
    return JSON.parse(text);
  });
}

// Метод получения корзиной ОБОБЩЕННОГО массива товаров из всех источников по их id:
function getBasketGoods() {
  return Promise.all([getGoods(), getRawBasketGoods()]).then(([goods, rawBasketGoods]) => {
    return rawBasketGoods.map((rawBasketGood) => {
      const { id, count } = rawBasketGood;

      const good = goods.find(({ id: goodsId }) => {
        return goodsId === id;
      });
      return {
        ...rawBasketGood,
        data: good,
        total: good.price * count,
        // all: goods.map((item) => item.price * count).reduce((a, b) => a + b, 0),
      };
    });
  });
}

// ОТВЕТ сервера с динамически сформированными данными для корзины с товарами:
app.get('/basketGoods', (req, res) => {
  getBasketGoods().then((data) => {
    res.send(data);
  });
});

// Запрос на сервер для ИЗМЕНЕНИЯ данных в корзине с товарами:
app.put('/basketGoods', (req, res) => {
  addBasketGood(req.body.id).then(() => {
    getBasketGoods().then((data) => {
      res.send(data);
    });
  });
});

// Запрос на сервер для УДАЛЕНИЯ данных в корзине с товарами:
app.delete('/basketGoods', (req, res) => {
  deleteBasketGood(req.body.id).then(() => {
    getBasketGoods().then((data) => {
      res.send(data);
    });
  });
});

// Метод "ДОБАВИТЬ" для получения нового/измененного элемента товара при нажатии кнопки:
function addBasketGood(_id) {
  return getRawBasketGoods()
    .then((basketGoods) => {
      if (basketGoods.find(({ id }) => id === _id)) {
        const result = basketGoods.map((basketGood) => {
          if (basketGood.id === _id) {
            return { ...basketGood, count: basketGood.count + 1 };
          } else {
            return basketGood;
          }
        });
        return result;
      } else {
        return [...basketGoods, { id: _id, count: 1 }];
      }
    })
    .then((result) => {
      return writeFile('./static/basket-goods.json', JSON.stringify(result)).then(() => {
        return result;
      });
    });
}

// Метод "УДАЛИТЬ" для удаления элемента товара из корзины при нажатии кнопки:
function deleteBasketGood(_id) {
  return getRawBasketGoods()
    .then((basketGoods) => {
      return basketGoods
        .map((basketGood) => {
          if (basketGood.id === _id) {
            return { ...basketGood, count: basketGood.count - 1 };
          } else {
            return basketGood;
          }
        })
        .filter(({ count }) => count > 0);
    })
    .then((result) => {
      return writeFile('./static/basket-goods.json', JSON.stringify(result)).then(() => {
        return result;
      });
    });
}
