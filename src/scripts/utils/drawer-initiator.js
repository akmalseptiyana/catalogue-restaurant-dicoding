const DrawerInitiator = {
  init({ menuButton, closeButton, drawer, content }) {
    menuButton.addEventListener("click", (event) => {
      this._openDrawer(event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });

    closeButton.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _openDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add("show-drawer");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("show-drawer");
  },
};

export default DrawerInitiator;
