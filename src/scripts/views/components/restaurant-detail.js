import CONFIG from "../../globals/config";
import { createCustomerReviews } from "../templates/template-creator";

class RestaurantDetail extends HTMLElement {
  connectedCallback() {
    this._renderLoading();
  }

  set restaurantDetail(restaurantDetail) {
    this._restaurant = restaurantDetail;
    this._render();
  }

  _renderLoading() {
    this.innerHTML = `
    <div class="restaurant-detail__loading">
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 28 28"
        fill="none"
        class="spinner"
      >
        <circle
          opacity="0.2"
          cx="14"
          cy="14"
          r="13"
          stroke="#2a2f4f"
          stroke-width="2"
        />
        <path
          d="M14 1C21.1797 1 27 6.8203 27 14C27 18.0209 25.1745 21.6154 22.3071 24"
          stroke="#2a2f4f"
          stroke-width="2"
        />
      </svg>
    </div>
    `;
  }

  _render() {
    this.innerHTML = `
    <div class="container">
      <figure class="img-wrapper">
        <img
          src="${CONFIG.BASE_IMAGE_URL}/large/${this._restaurant.pictureId}"
          alt="${this._restaurant.name}"
          class="img-cover"
        />
      </figure>
      <div class="restaurant-detail__wrapper">
        <div class="restaurant-detail__content">
          <h2 class="restaurant-detail__content--title">${
            this._restaurant.name
          }</h2>
          <p class="restaurant-detail__content--description">
            ${this._restaurant.description}
          </p>
  
          <div class="restaurant-detail__content--menu">
            <h3>Daftar Menu</h3>
            <div class="wrapper">
              <div>
                <h4>Makanan</h4>
                <ul>
                  ${this._restaurant.menus.foods
                    .map((food) => `<li class="food-name">${food.name}</li>`)
                    .join("")}
                </ul>
              </div>
              <div>
                <h4>Minuman</h4>
                <ul>
                  ${this._restaurant.menus.drinks
                    .map((drink) => `<li class="food-name">${drink.name}</li>`)
                    .join("")}
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        <div class="restaurant-detail__info">
          <h3>Informasi</h3>
          <div>
            <h4 class="restaurant-detail__info--title">Alamat</h4>
            <p class="restaurant-detail__info--description">
              ${this._restaurant.address}
            </p>
          </div>
          <div>
            <h4 class="restaurant-detail__info--title">Kota</h4>
            <p class="restaurant-detail__info--description">${
              this._restaurant.city
            }</p>
          </div>
          <div>
            <h4 class="restaurant-detail__info--title">Rating</h4>
            <p class="restaurant-detail__info--description">
              ${this._restaurant.rating}
            </p>
          </div>
          <div>
            <h4 class="restaurant-detail__info--title">Kategori menu</h4>
            <ul>
              ${this._restaurant.categories
                .map(
                  (category) =>
                    `<li class="restaurant-detail__info--description">${category.name}</li>`
                )
                .join("")}
            </ul>
          </div>
        </div>
      </div>
  
      <div class="restaurant-detail__review">
        <h3>Review Pelanggan</h3>
        <div class="wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-circle-2"
          >
            <path d="M18 20a6 6 0 0 0-12 0"></path>
            <circle cx="12" cy="10" r="4"></circle>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <form class="restaurant-detail__review--form" id="form-review">
            <input
              type="text"
              class="restaurant-detail__review--form-input"
              placeholder="Input Name..."
              id="input-name"
              name="name"
              required
            />
            <textarea
              class="restaurant-detail__review--form-textarea"
              placeholder="Input Review..."
              id="input-review"
              name="review"
              required
            ></textarea>
            <button type="submit" class="restaurant-detail__review--form-submit">
              Submit
            </button>
          </form>
        </div>
        <ul class="restaurant-detail__review--list" id="restaurantReview">
          ${createCustomerReviews(this._restaurant.customerReviews)}
        </ul>
      </div>
    </div>
  `;
  }
}

customElements.define("restaurant-detail", RestaurantDetail);
