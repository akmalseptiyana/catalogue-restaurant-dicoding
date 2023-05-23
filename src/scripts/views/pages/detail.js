import "../components/restaurant-detail";
import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import AddReviewInitator from "../../utils/add-review-initiator";
import FavoriteButtonInitiator from "../../utils/favorite-button-initiator";

const Detail = {
  async render() {
    return `
      <section id="restaurantDetail" class="restaurant-detail">
        <restaurant-detail></restaurant-detail>
      </section>
      <div id="favoriteButtonContainer"></div>
      <div id="alertMessageContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurantDetail(url.id);
    const restaurantContainer = document.querySelector("restaurant-detail");
    restaurantContainer.restaurantDetail = restaurant;

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.getElementById(
        "favoriteButtonContainer"
      ),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        rating: restaurant.rating,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
      },
    });
    AddReviewInitator.init({
      form: document.getElementById("form-review"),
      id: restaurant.id,
      container: document.getElementById("alertMessageContainer"),
    });
  },
};

export default Detail;
