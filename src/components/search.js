class Search extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get value() {
    return this.querySelector("#keyword").value;
  }

  set clickEvent(e) {
    this._clickEvent = e;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="form-inline justify-content-center my-4">
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">Password</label>
                <input id="keyword" type="search" class="form-control" placeholder="keyword... example: rice" />
            </div>
            <button id="search" class="btn btn-success mb-2">
                Search
            </button>
        </div>
      `;
    this.querySelector("#search").addEventListener("click", this._clickEvent);
  }
}
customElements.define("search-console", Search);
