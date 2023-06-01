import CONFIG from "../../globals/config";

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this._render();
  }

  _renderSkeleton() {
    this.innerHTML = `
      <div class="skeleton">
        <div class="skeleton__figure"></div>
        <div class="skeleton__body">
          <div class="skeleton__title"></div>
          <div class="skeleton__copy"></div>
        </div>
      </div>
    `;
  }

  _render() {
    this.innerHTML = `<div class="restaurants-item card" tabindex="0">
      <figure class="img-wrapper">
        <img
          data-src="${CONFIG.BASE_IMAGE_URL}/small/${this._restaurant.pictureId}"
          alt="${this._restaurant.name}"
          class="lazyload img-cover"
        />
      </figure>
      <div class="city">${this._restaurant.city}</div>
      <div class="card__body">
        <div class="restaurants__rating">
          Rating: <span>${this._restaurant.rating}</span>
        </div>
        <h3 class="restaurants__title">
          <a href="/#/detail/${this._restaurant.id}"
            >${this._restaurant.name}</a
          >
        </h3>
        <p
          class="restaurants__description"
          title="${this._restaurant.description}"
        >
          ${this._restaurant.description}
        </p>
      </div>
    </div>`;
  }
}

customElements.define("restaurant-item", RestaurantItem);
