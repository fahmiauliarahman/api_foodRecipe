import "../components/search.js";
import DataSource from "./DataSource.js";

const main = () => {
  const searchBar = document.querySelector("search-console");
  const recipeParent = document.querySelector("#recipe-parent");

  const onButtonSearchClicked = async () => {
    try {
      recipeParent.textContent = "";
      const results = await DataSource.searchRecipes(searchBar.value);
      results.forEach((result) => {
        const recipeItemElement = document.createElement("recipe-item");
        recipeItemElement.setAttribute("class", "col-md-4 p-3 card-deck");
        recipeItemElement.recipe = result;
        recipeParent.appendChild(recipeItemElement);
      });
    } catch (message) {
      recipeParent.textContent = "";
      recipeParent.innerHTML = message;
    }
  };

  searchBar.clickEvent = onButtonSearchClicked;
};

export default main;
