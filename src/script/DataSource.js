class DataSource {
  static searchRecipes(keyword) {
    const app_id = "YOUR_APP_ID_HERE";
    const app_key = "YOUR_APP_KEY HERE";
    return fetch(
      `https://api.edamam.com/search?q=${keyword}&app_id=${app_id}&app_key=${app_key}&from=0&to=6`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.hits.length > 0) {
          console.log(responseJson.hits);
          return Promise.resolve(responseJson.hits);
        } else {
          return Promise.reject(`${keyword} Tidak Ditemukan`);
        }
      });
  }
}

export default DataSource;
