<!-- СТРАНИЦА КОРЗИНА ТОВАРОВ -->

<template>
  <div class="page-wrapper">
    <h1 class="hidden">Страница корзина товаров</h1>

    <!-- Блок информации о данной странице -->
    <section class="page-title">
      <div class="container">
        <h2 class="hidden">О данной странице</h2>

        <div class="page-wrap">
          <h1 class="page-name">SHOPPING CART</h1>

          <!-- Навигация хлебные крошки -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">HOME</router-link>
              </li>

              <li class="breadcrumb-item-active" aria-current="page">SHOPPING CART</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>

    <!-- Блок Оформления Покупки -->
    <section class="purchases">
      <div class="container">
        <h2 class="hidden">Оформление покупок</h2>

        <div class="purchases-wrap">

          <!-- Список покупки -->
          <section class="purchases-cards">

            <ul class="purchases-items">

              <li class="purchases-item">
                <div class="purchases-item-img1"></div>

                <div class="information-product description-item-cart">
                  <h3 class="description-item-name">
                    ELLERY X M'O <br />
                    CAPSULE
                  </h3>
                  <p class="description-item-content">
                    Price: <span class="price-300">3000 &#x584;</span> <br />
                    Color: Gray <br />
                    Size: XL <br />
                  </p>
                  <div class="description-item-content">
                    Quantity: <input class="quantity-cart" id="quantity-id-one" type="number" />
                  </div>
                </div>

                <div class="close-icon-wrap-cart">
                  <svg class="close-icon-svg close-icon" width="15" height="15" viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467832C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" />
                  </svg>
                </div>
              </li>

              <li class="purchases-item">
                <div class="purchases-item-img2"></div>

                <div class="information-product description-item-cart">
                  <h3 class="description-item-name">
                    ELLERY X M'O <br />
                    CAPSULE
                  </h3>
                  <p class="description-item-content">
                    Price: <span class="price-300">2000 &#x584;</span> <br />
                    Color: Red <br />
                    Size: L <br />
                  </p>
                  <div class="description-item-content">
                    Quantity: <input class="quantity-cart" id="quantity-id-two" type="number" />
                  </div>
                </div>

                <div class="close-icon-wrap-cart">
                  <svg class="close-icon-svg close-icon" width="15" height="15" viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467832C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" />
                  </svg>
                </div>
              </li>

            </ul>

            <!-- Кнопки действий над покупкой -->
            <div class="purchases-button">
              <button class="press-button">CLEAR SHOPPING CART</button>
              <button class="press-button">CONTINUE SHOPPING</button>
            </div>
          </section>

          <!-- Блок Совершение покупки -->
          <section class="checkout">

            <div class="shipping-adress-wrap">
              <h3 class="shipping-adress-name">SHIPPING ADRESS</h3>

              <form action="#">
                <input class="shipping-adress-grey" id="state-id" placeholder="Bangladesh" required />
                <input class="shipping-adress" id="city-id" placeholder="City" required />
                <input class="shipping-adress" id="postcode-id" placeholder="Postcode / Zip" required />
                <button class="button-getaquote">GET A QUOTE</button>
              </form>
            </div>

            <div class="checkout-wrap">
              <div class="total-price-name">
                <p class="sub-total">SUB TOTAL <span>5000 &#x584;</span></p>
                <p class="grand-total">
                  GRAND TOTAL <span class="grand-total-700">5000 &#x584;</span>
                </p>
              </div>

              <div class="streak-button-wrap">
                <div class="button-checkout-wrap">
                  <button class="button-checkout">PROCEED TO CHECKOUT</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup name="CartPage">
</script>
