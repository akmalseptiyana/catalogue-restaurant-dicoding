const assert = require("assert");

Feature("Favoriting Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty favorited restaurants", ({ I }) => {
  I.seeElement("#favoriteRestaurant");
  I.see("Favorite restaurant empty...", ".empty-message");
});

Scenario("favoriting one restaurant", async ({ I }) => {
  I.amOnPage("/");

  I.seeElement(".restaurants__title a");

  const firstRestaurant = locate(".restaurants__title a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurants-item");
  const favoritedRestaurantTitle = await I.grabTextFrom(
    ".restaurants__title a"
  );

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario("unfavoriting one restaurant", async ({ I }) => {
  I.amOnPage("/");

  I.seeElement(".restaurants__title a");
  I.click(locate(".restaurants__title a").first());

  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurants__title a");
  const firstFavoritedRestaurant = locate(".restaurants__title a").first();
  const firstFavoritedRestaurantTitle = await I.grabTextFrom(
    firstFavoritedRestaurant
  );
  I.click(firstFavoritedRestaurant);

  I.seeElement(".restaurant-detail");
  const favoritedRestaurantTitle = await I.grabTextFrom(
    ".restaurant-detail__content--title"
  );
  assert.strictEqual(firstFavoritedRestaurantTitle, favoritedRestaurantTitle);

  I.seeElement(`[aria-label="remove favorite restaurant"]`);
  I.click(`[aria-label="remove favorite restaurant"]`);

  I.amOnPage("/#/favorite");
  I.see("Favorite restaurant empty...", ".empty-message");
});
