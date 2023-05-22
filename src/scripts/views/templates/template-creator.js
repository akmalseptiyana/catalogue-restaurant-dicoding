import CONFIG from "../../globals/config";

const createRestaurantItemTemplate = (restaurant) => `<div
  class="card"
  tabindex="0"
>
  <figure class="img-wrapper">
    <img
      src="${CONFIG.BASE_IMAGE_URL}/small/${restaurant.pictureId}"
      alt="${restaurant.name}"
      class="img-cover"
    />
  </figure>
  <div class="city">${restaurant.city}</div>
  <div class="card__body">
    <div class="restaurants__rating">
      Rating: <span>${restaurant.rating}</span>
    </div>
    <h3 class="restaurants__title">
      <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
    </h3>
    <p class="restaurants__description" title="${restaurant.description}">
      ${restaurant.description}
    </p>
  </div>
</div>`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="container">
    <figure class="img-wrapper">
      <img
        src="${CONFIG.BASE_IMAGE_URL}/large/${restaurant.pictureId}"
        alt="${restaurant.name}"
        class="img-cover"
      />
    </figure>
    <div class="restaurant-detail__wrapper">
      <div class="restaurant-detail__content">
        <h2 class="restaurant-detail__content--title">${restaurant.name}</h2>
        <p class="restaurant-detail__content--description">
          ${restaurant.description}
        </p>

        <div class="restaurant-detail__content--menu">
          <h3>Daftar Menu</h3>
          <div class="wrapper">
            <div>
              <h4>Makanan</h4>
              <ul>
                ${restaurant.menus.foods
                  .map((food) => `<li class="food-name">${food.name}</li>`)
                  .join("")}
              </ul>
            </div>
            <div>
              <h4>Minuman</h4>
              <ul>
                ${restaurant.menus.drinks
                  .map((drink) => `<li class="food-name">${drink.name}</li>`)
                  .join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="restaurant-detail__info">
        <h3>Informasi</h3>
        <div>
          <h4 class="restaurant-detail__info--title">Alamat</h4>
          <p class="restaurant-detail__info--description">
            ${restaurant.address}
          </p>
        </div>
        <div>
          <h4 class="restaurant-detail__info--title">Kota</h4>
          <p class="restaurant-detail__info--description">${restaurant.city}</p>
        </div>
        <div>
          <h4 class="restaurant-detail__info--title">Rating</h4>
          <p class="restaurant-detail__info--description">
            ${restaurant.rating}
          </p>
        </div>
        <div>
          <h4 class="restaurant-detail__info--title">Kategori menu</h4>
          <ul>
            ${restaurant.categories
              .map(
                (category) =>
                  `<li class="restaurant-detail__info--description">${category.name}</li>`
              )
              .join("")}
          </ul>
        </div>
      </div>
    </div>

    <div class="restaurant-detail__review">
      <h3>Review Pelanggan</h3>
      <div class="wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-user-circle-2"
        >
          <path d="M18 20a6 6 0 0 0-12 0"></path>
          <circle cx="12" cy="10" r="4"></circle>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <form class="restaurant-detail__review--form" id="form-review">
          <input
            type="text"
            class="restaurant-detail__review--form-input"
            placeholder="Input Name..."
            id="input-name"
            name="name"
          />
          <textarea
            class="restaurant-detail__review--form-textarea"
            placeholder="Input Review..."
            id="input-review"
            name="review"
          ></textarea>
          <button type="submit" class="restaurant-detail__review--form-submit">
            Submit
          </button>
        </form>
      </div>
      <ul class="restaurant-detail__review--list">
        ${restaurant.customerReviews
          .map(
            ({ name, review, date }) => `
           <li class="restaurant-detail__review--item">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="40"
               height="40"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               class="lucide lucide-user-circle-2"
             >
               <path d="M18 20a6 6 0 0 0-12 0"></path>
               <circle cx="12" cy="10" r="4"></circle>
               <circle cx="12" cy="12" r="10"></circle>
             </svg>
             <div class="card">
               <div>
                 <h4>${name}</h4>
                 <span>${date}</span>
               </div>
               <p>${review}</p>
             </div>
           </li>
         `
          )
          .join("")}
      </ul>
    </div>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button id="favoriteButton" class="favorite">
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-heart"
    >
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      ></path>
    </svg>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button id="favoriteButton" class="favorite">
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-heart-fill"
    >
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      ></path>
    </svg>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
