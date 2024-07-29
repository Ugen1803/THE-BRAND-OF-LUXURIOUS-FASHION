/**
 * Раздел Категорий товаров
 */

export const categoriesProduct = Vue.component('categories-product', {
  template: `
      <section class="categories">
        <h2 class="hidden">Категории товаров</h2>
        <div class="container">
          <div class="categories-wrap">
            <div class="categories-product">
              <a class="cat-women" href="for-woman.html">
                <h3 class="cat-text">
                  <span class="subtitle-cat-text"> 30% OFF </span> <br />
                  FOR WOMAN
                </h3>
              </a>
              <a class="cat-men" href="#">
                <h3 class="cat-text">
                  <span class="subtitle-cat-text"> HOT DEAL </span> <br />
                  FOR MAN
                </h3>
              </a>
              <a class="cat-kids" href="#">
                <h3 class="cat-text">
                  <span class="subtitle-cat-text"> NEW ARRIVALS </span> <br />
                  FOR KIDS
                </h3>
              </a>
              <a class="cat-accesories" href="#">
                <h3 class="cat-text">
                  <span class="subtitle-cat-text"> LUXIROUS & TRENDY </span>
                  <br />
                  ACCESORIES
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    `,
});
