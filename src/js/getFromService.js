/**
 * Метод (FETCH) запрос-ответа данных с сервера:
 * @param {http} url Источник
 * @returns {json} Вернет объект с данными в формате json
 */
export function getFromService(url, method = 'GET', body) {
  return fetch(url, {
    headers: Object.assign(
      {},
      body
        ? {
            'Content-Type': 'application/json; charset=utf-8',
          }
        : {},
    ),
    method,
    body: JSON.stringify(body),
  }).then((res) => res.json());
}
