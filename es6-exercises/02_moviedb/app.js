// const axios = require("axios");

const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w200/`;

document.querySelector(".form").addEventListener("submit", event => {
  event.preventDefault();

  const searchPattern = document.querySelector(".movie-title").value;
  const quieryUrl = `${apiUrl}${searchPattern}`;
  axios
    .get(quieryUrl)
    .then(val => {
      let listNode = document.querySelector(".movies-list");

      listNode.innerHTML = "";
      for (record of val.data.results) {
        console.log(record.title);
        let card = document.createElement("div");
        card.className = "card";
        let node = document.createElement("div");
        node.className = "movie-info";
        let text1 = document.createElement("h2");
        text1.className = "eng-title";
        let text2 = document.createElement("p");
        text2.className = "orig-title";
        let text3 = document.createElement("p");
        text3.className = "year";
        let textnode1 = document.createTextNode(
          `${record.title}`
          );
        let textnode2 = document.createTextNode(
          `${record.original_title || ""}`
        );
        let textnode3 = document.createTextNode(
          `${record.release_date.split("-")[0]}`
        );
        text1.appendChild(textnode1);
        text2.appendChild(textnode2);
        text3.appendChild(textnode3);
        
        node.appendChild(text1);
        node.appendChild(text2);
        node.appendChild(text3);
        const poster = document.createElement("img");
        poster.src = `${imgUrl}${record.poster_path}`;
        poster.alt = `poster for "${record.title}"`;
        card.appendChild(node);
        card.appendChild(poster);

        listNode.appendChild(card);
      }
    })
    .catch(err => console.error(err));
  console.log(quieryUrl);
});
