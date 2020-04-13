class RecipeChild extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["class"];
  }

  set recipe(recipe) {
    this._recipe = recipe;
    this.render();
  }

  render() {
    const ingredients = this._recipe.recipe.ingredients;
    let bahan = "";
    let kalori = parseInt(this._recipe.recipe.calories);
    ingredients.forEach((ingredient) => {
      bahan += `<li class="list-group-item">${ingredient.text}</li>`;
    });
    this.innerHTML = `
    <div class="card">
      <img src="${this._recipe.recipe.image}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${this._recipe.recipe.label}</h5>
          <p class="card-text">Total Kalori: ${kalori} kkal</p>
          <h6 class="font-weight-bold text-success">Ingredients</h6>
          <ul class="list-group list-group-flush">
              ${bahan}
          </ul>
      </div>
      <div class="card-footer">
          <a href="${this._recipe.recipe.shareAs}" class="btn btn-success" target="_blank">Detail Lebih Lengkap</a>
      </div>
  </div>
    `;
  }
}
customElements.define("recipe-item", RecipeChild);
