import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
      <section class="restaurants">
        <div class="container">
          <h2 class="title">Your Favorite Restaurant</h2>
          <div class="restaurants__grid" id="restaurantList"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.getElementById("restaurantList");

    restaurantsContainer.innerHTML = restaurants
      .map((restaurant) => createRestaurantItemTemplate(restaurant))
      .join("");
  },
};

export default Favorite;
