Feature("Review Restaurant");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("Reviewing a Restaurant", async ({ I }) => {
  I.click(locate(".restaurants__title a").last());
  I.seeElement("#form-review");

  const name = "Gojo";
  const review =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  I.fillField("#input-name", name);
  I.fillField("#input-review", review);
  I.click(`button[type="submit"]`);

  I.see(name, ".restaurant-detail__review--item h4");
  I.see(review, ".restaurant-detail__review--item p");
});
