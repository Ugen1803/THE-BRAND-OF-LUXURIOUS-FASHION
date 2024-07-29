/**
 * Раздел подвал сайта
 */

export const siteFooter = Vue.component('site-footer', {
  template: `

    <div class="container">
      <div class="footer-wrap">
        <p class="p-footer">© 2024 Brand All Rights Reserved</p>

        <!-- Элементы способов связи -->

        <ul class="icons-wrap">

          <li>
            <a href="https://t.me/telegram" target="_blank" class="social-link">
              <i class="fab fa-telegram"></i>
            </a>
          </li>

          <li>
            <a href="https://www.whatsapp.com/" target="_blank" class="social-link">
              <i class="fab fa-whatsapp"></i>
            </a>
          </li>

          <li>
            <a href="https://vk.com/" target="_blank" class="social-link">
              <i class="fab fa-vk"></i>
            </a>
          </li>

          <li>
            <a href="https://ok.ru/" target="_blank" class="social-link">
              <i class="fab fa-odnoklassniki"></i>
            </a>
          </li>

        </ul>
      </div>
    </div>
  `,
});
