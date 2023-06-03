import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
import DrawerInitiator from "../utils/drawer-initiator";

class App {
  constructor({ menuButton, closeButton, drawer, content }) {
    this._menuButton = menuButton;
    this._closeButton = closeButton;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      menuButton: this._menuButton,
      closeButton: this._closeButton,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parserActiveUrlWithCombiner();

    if (url !== "/content") {
      const page = routes[url];
      this._content.innerHTML = await page.render();
      window.scrollTo(0, 0);
      await page.afterRender();
    }
  }
}

export default App;
