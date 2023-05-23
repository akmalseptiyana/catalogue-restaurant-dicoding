import RestaurantSource from "../data/restaurant-source";
import {
  createAlertMessage,
  createCustomerReviews,
} from "../views/templates/template-creator";

const AddReviewInitator = {
  init({ form, id, container }) {
    this._alertMessageContainer = container;

    form.addEventListener("submit", (event) => {
      this._submitHandler(event, form, id);
    });
  },

  async _submitHandler(event, form, id) {
    event.preventDefault();

    try {
      const data = this._fieldHandler(form);
      const response = await RestaurantSource.addRestaurantReview({
        id,
        ...data,
      });

      this._renderReview(response);
    } catch (error) {
      this._renderErrorMessage(error);
    }

    return true;
  },

  _fieldHandler(form) {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData) {
      data[key] = value;
    }

    return data;
  },

  _renderReview(data) {
    const customerReviewsContainer =
      document.getElementById("restaurantReview");
    customerReviewsContainer.innerHTML = createCustomerReviews(
      data.customerReviews
    );
  },

  _renderErrorMessage(response) {
    const message = response && "failed add review";
    this._alertMessageContainer.innerHTML = createAlertMessage(message);
    setTimeout(() => {
      this._alertMessageContainer.removeChild(
        document.querySelector(".alert-message")
      );
    }, 2000);
  },
};

export default AddReviewInitator;
