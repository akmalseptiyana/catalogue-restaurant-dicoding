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

const createAlertMessage = (message) => `
  <p class="alert-message">${message}</p>
`;

const createCustomerReviews = (customerReviews) => `
  ${customerReviews
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
`;

export {
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createAlertMessage,
  createCustomerReviews,
};
