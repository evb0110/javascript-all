// const axios = require("axios");

const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300/`;

document.querySelector(".form").addEventListener("submit", event => {
  event.preventDefault();

  const searchPattern = document.querySelector(".movie-title").value;
  const quieryUrl = `${apiUrl}${searchPattern}`;
  axios
    .get(quieryUrl)
    .then(val => {
      document.querySelector(".movies-list").innerHTML = "";
      for (record of val.data.results) {
        console.log(record.title);
        let node = document.createElement("li");
        let textnode = document.createTextNode(
          `${record.title}, 
        ${record.original_title || ""}, 
        ${record.release_date.split("-")[0]}`
        );
        node.appendChild(textnode);
        const poster = document.createElement("img");
        poster.src = `${imgUrl}${record.poster_path}`;
        node.appendChild(poster);

        document.querySelector(".movies-list").appendChild(node);
      }
    })
    .catch(err => console.error(err));
  console.log(quieryUrl);
});
