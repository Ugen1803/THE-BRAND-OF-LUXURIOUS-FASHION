/**
 * Особенности и Разное сайта
 */

export const siteFeatures = Vue.component('site-features', {
  template: `

    <div class="container">
      <h2 class="hidden">Особенности и Разное</h2>

        <!-- Рекламные Элементы -->
        <div class="categories-features">

          <div class="feature-item">
            <div class="feature-img">
              <img src="images/section-features/delivery-ico.svg" alt="delivery" />
            </div>
            <h3 class="h3-features">Free Delivery</h3>
            <p class="p-features">Worldwide delivery on all</p>
          </div>

          <div class="feature-item">
            <div class="feature-img">
              <img src="images/section-features/sales-ico.svg" alt="sales" />
            </div>
            <h3 class="h3-features">Sales & discounts</h3>
            <p class="p-features">Flexible approach</p>
          </div>

          <div class="feature-item">
            <div class="feature-img">
              <img src="images/section-features/assurance-ico.svg" alt="assurance" />
            </div>
            <h3 class="h3-features">Quality assurance</h3>
            <p class="p-features">Next generation innovation with extensive models</p>
          </div>

        </div>
    </div>
  `,
});
