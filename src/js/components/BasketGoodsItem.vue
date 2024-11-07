<!-- Элементы ДАННЫХ для Корзины -->

<template>
  <div class="basket-card-content-item">

    <h3> {{ item?.data?.product_name }} </h3>
    <div> {{ item?.data?.price }} &#x584; </div>
    <div> {{ item?.count }} </div>
    <div> {{ item?.total }} &#x584; </div>
    <div>

      <button class="basket-button default-button" @click="$emit('add', item.data.id)" type="button">
        +
      </button>

      <button class="basket-button default-button" @click="$emit('delete', item.data.id)" type="button">
        -
      </button>

    </div>

  </div>
</template>

<script setup name="BasketGoodsItem">

defineProps({
  item: Object,
  clickCloseIcon: Function,
  delete: Function,
  add: Function,
});

defineEmits([
  'clickCloseIcon',
  'delete',
  'add',
]);

</script>
