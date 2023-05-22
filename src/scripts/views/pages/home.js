import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `<section class="hero">
        <div class="container">
          <div class="hero__inner">
            <div class="wrapper">
              <h1 class="hero__title">Urban Kitchen</h1>
              <p class="hero__description">
                Find the best restaurants with our recommendation
              </p>
            </div>
            <figure class="img-wrapper">
              <img
                src="images/heros/hero-image_4.jpg"
                alt="cookies"
                class="img-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      <section class="restaurants">
        <div class="container">
          <h2 class="title">Explore Restaurant</h2>
          <div class="restaurants__grid" id="restaurantList"></div>
        </div>
      </section>`;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurantList();
    const restaurantsContainer = document.getElementById("restaurantList");
    restaurantsContainer.innerHTML = restaurants
      .map((restaurant) => createRestaurantItemTemplate(restaurant))
      .join("");
  },
};

export default Home;
