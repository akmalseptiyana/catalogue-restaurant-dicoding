import "../components/restaurant-list";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Favorite = {
  async render() {
    return `
      <section class="restaurants" id="/content">
        <div class="container" id="favoriteRestaurant">
          <h2 class="title">Your Favorite Restaurant</h2>
          <div class="restaurants__grid" id="favoriteRestaurant">
            <restaurant-list></restaurant-list>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const favoriteRestaurantContainer =
      document.getElementById("favoriteRestaurant");
    const restaurantsContainer = document.querySelector("restaurant-list");

    if (restaurants.length > 0) {
      restaurantsContainer.restaurants = restaurants;
    } else {
      favoriteRestaurantContainer.innerHTML = `
        <div class="empty-message">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-frown"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
            <line x1="9" x2="9.01" y1="9" y2="9"></line>
            <line x1="15" x2="15.01" y1="9" y2="9"></line>
          </svg>
          <p>Favorite restaurant empty...</p>
        </div>
      `;
    }
  },
};

export default Favorite;
