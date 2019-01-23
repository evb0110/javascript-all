axios.get('https://www.cryptocompare.com/api/data/coinlist/')
  .then(function (response) {
    console.log(response);
  })