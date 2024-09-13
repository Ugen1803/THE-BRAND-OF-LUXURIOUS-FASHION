<!-- Раздел КАТЕГОРИИ товаров -->

<template>
  <div class="container">
    <h2 class="hidden">Категории товаров</h2>

    <div class="categories-wrap">
      <ul class="categories-product">

        <!-- FOR WOMAN -->
        <li class="cat-women">
          <router-link to="/for-woman" class="information-product">
            <h3 class="cat-text">
              <span class="subtitle-cat-text">
                30% OFF
              </span>
              <br />
              FOR WOMAN
            </h3>
          </router-link>
        </li>

        <!-- FOR MAN -->
        <li class="cat-men">
          <a href="#" class="information-product">
            <h3 class="cat-text">
              <span class="subtitle-cat-text">
                HOT DEAL
              </span>
              <br />
              FOR MAN
            </h3>
          </a>
        </li>

        <!-- FOR KIDS -->
        <li class="cat-kids">
          <a href="#" class="information-product">
            <h3 class="cat-text">
              <span class="subtitle-cat-text">
                NEW ARRIVALS
              </span>
              <br />
              FOR KIDS
            </h3>
          </a>
        </li>

        <!-- ACCESORIES -->
        <li class="cat-accesories">
          <a href="#" class="information-product">
            <h3 class="cat-text">
              <span class="subtitle-cat-text">
                LUXIROUS & TRENDY
              </span>
              <br />
              ACCESORIES
            </h3>
          </a>
        </li>

      </ul>
    </div>

  </div>
</template>

<script setup name="CategoriesProduct">
</script>
