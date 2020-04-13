class Title extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h1 class="text-center mt-4">Resep Makanan API</h1>
        <h6 class="text-center">
            Sumber API: <a href="https://edamam.com" target="_blank">Edamam</a>
        </h6>`;
  }
}
customElements.define("judul-page", Title);
