import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantSource {
  static async getRestaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    if (response.ok) return responseJson.restaurants;

    throw new Error(JSON.stringify(responseJson));
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
    const responseJson = await response.json();
    if (response.ok) return responseJson.restaurant;

    throw new Error(JSON.stringify(responseJson));
  }

  static async addRestaurantReview(data) {
    const response = await fetch(API_ENDPOINT.ADD_RESTAURANT_REVIEW, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    if (response.ok) return responseJson;

    throw new Error(JSON.stringify(responseJson));
  }
}

export default RestaurantSource;
