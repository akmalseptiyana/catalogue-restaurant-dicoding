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
          <figure class="img-wrapper">
            <img
              src="images/heros/hero-image_4.jpg"
              alt="cookies"
              class="img-cover"
            />
          </figure>
        </div>
      </div>
    </section>`;
  }
}

customElements.define("hero-element", HeroElement);
