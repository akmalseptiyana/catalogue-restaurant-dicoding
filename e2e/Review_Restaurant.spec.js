const assert = require("assert");

Feature("Review Restaurant");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("Reviewing a Restaurant", async ({ I }) => {
  I.click(locate(".restaurants__title a").first());
  I.seeElement("#form-review");

  const name = "Gojo";
  const review =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  I.fillField("#input-name", name);
  I.fillField("#input-review", review);
  I.click(`button[type="submit"]`);

  const submittedName = await I.grabTextFrom(
    locate(".restaurant-detail__review--item h4").last()
  );
  const submittedReview = await I.grabTextFrom(
    locate(".restaurant-detail__review--item p").last()
  );

  assert.strictEqual(name, submittedName);
  assert.strictEqual(review, submittedReview);
});
