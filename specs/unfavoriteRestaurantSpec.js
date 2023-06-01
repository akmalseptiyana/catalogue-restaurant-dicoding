import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Unfavoriting A Restaurant", () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = `<div id="favoriteButtonContainer"></div>`;
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should display unfavorite widget when the restaurant has been favorited", async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector(`[aria-label="remove favorite restaurant"]`)
    ).toBeTruthy();
  });

  it("should not display favorite widget when the restaurant has been favorited", async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector(`[aria-label="add to favorite"]`)
    ).toBeFalsy();
  });

  it("should be able to remove favorited restaurant from the list", async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector(`[aria-label="remove favorite restaurant"]`)
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it("should not throw error if unfavorite restaurant is not in the list", async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document
      .querySelector(`[aria-label="remove favorite restaurant"]`)
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
