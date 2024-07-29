/**
 * Элементы ДАННЫХ для Корзины:
 */
export const basketGoodsItem = Vue.component('basket-goods-item', {
  props: ['item'],

  template: `

    <div class="basket-card-content-item">

      <h3> {{item?.data?.product_name}} </h3>
      <div> {{item?.data?.price}} &#x584; </div>
      <div> {{item?.count}} </div>
      <div> {{item?.total}} &#x584; </div>
      <div>

        <button class="cart-button default-button" @click="$emit('add', item.data.id)" type="button">
          +
        </button>

        <button class="cart-button default-button"  @click="$emit('delete', item.data.id)" type="button">
          -
        </button>

      </div>

    </div>

  `,
});
