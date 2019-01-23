const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/photos")
  .then(res => console.log(res.data.map((r, i) => `${i}. ${r.url}`)))
  .catch(err => console.error(err));
