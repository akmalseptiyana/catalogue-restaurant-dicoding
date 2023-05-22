import RestaurantSource from "../data/restaurant-source";

const AddReviewInitator = {
  init({ form, id }) {
    form.addEventListener("submit", (event) => {
      this._submitHandler(event, form, id);
    });
  },

  async _submitHandler(event, form, id) {
    event.preventDefault();

    const data = this._fieldHandler(form);
    const response = await RestaurantSource.addRestaurantReview({
      id,
      ...data,
    });

    return response;
  },

  _fieldHandler(form) {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData) {
      data[key] = value;
    }

    return data;
  },
};

export default AddReviewInitator;
