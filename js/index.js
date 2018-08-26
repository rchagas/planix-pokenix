//const axios = require("axios");
let url = 'https://pokeapi.co/api/v2/pokemon/1/';
axios.get(url).then(function(response){console.log(response.data.name);});
