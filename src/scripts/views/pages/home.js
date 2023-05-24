import "../components/hero-element";
import "../components/restaurant-list";
import RestaurantSource from "../../data/restaurant-source";

const Home = {
  async render() {
    return `
      <hero-element></hero-element>

      <section class="restaurants">
        <div class="container">
          <h2 class="title">Explore Restaurant</h2>
          <div class="restaurants__grid" id="restaurantList">
            <restaurant-list></restaurant-list>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurantList();
    const restaurantContainer = document.querySelector("restaurant-list");

    restaurantContainer.restaurants = restaurants;
  },
};

export default Home;
