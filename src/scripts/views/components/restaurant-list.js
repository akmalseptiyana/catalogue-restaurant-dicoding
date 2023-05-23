import "./restaurant-item";

class RestaurantList extends HTMLElement {
  connectedCallback() {
    this._renderLoadingSkeleton();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this._render();
  }

  _renderLoadingSkeleton() {
    const skeletonLength = 9;
    for (let index = 0; index < skeletonLength; index += 1) {
      const restaurantItem = document.createElement("restaurant-item");
      restaurantItem._renderSkeleton();
      this.appendChild(restaurantItem);
    }
  }

  _render() {
    this.innerHTML = "";
    this._restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement("restaurant-item");
      restaurantItem.restaurant = restaurant;
      this.appendChild(restaurantItem);
    });
  }
}

customElements.define("restaurant-list", RestaurantList);
