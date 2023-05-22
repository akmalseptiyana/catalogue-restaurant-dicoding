import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import AddReviewInitator from "../../utils/add-review-initiator";
import FavoriteButtonInitiator from "../../utils/favorite-button-initiator";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
      <section id="restaurantDetail" class="restaurant-detail"></section>
      <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurantDetail(url.id);
    const restaurantContainer = document.getElementById("restaurantDetail");
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

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
    });
  },
};

export default Detail;
