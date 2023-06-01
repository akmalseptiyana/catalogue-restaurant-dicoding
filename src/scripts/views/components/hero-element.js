class HeroElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `<section class="hero" id="/content">
      <div class="container">
        <div class="hero__inner">
          <div class="wrapper">
            <h1 class="hero__title">Urban Kitchen</h1>
            <p class="hero__description">
              Find the best restaurants with our recommendation
            </p>
          </div>
          <picture class="img-wrapper">
            <source
              type="image/webp"
              srcset="images/heros/hero-image_4-small.webp"
              media="(max-width: 640px)"
              class="lazyload img-cover"
            />
            <img
              data-src="images/heros/hero-image_4-large.webp"
              alt="cookies"
              class="lazyload img-cover"
            />
          </picture>
        </div>
      </div>
    </section>`;
  }
}

customElements.define("hero-element", HeroElement);
