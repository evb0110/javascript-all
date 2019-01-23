const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(res => console.log(res.data.map((r, i) => `${i}. ${r.title}`)))
  .catch(err => console.error(err));
