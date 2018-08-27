
let url = 'https://pokeapi.co/api/v2/pokemon/6/';
let url_img= 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
axios.get(url).then(function(response){
    //console.log(response.data.name);
    let num;
    if(response.data.id <100){
        if(response.data.id<10)
            num = '00'+response.data.id;
        else num = '0'+response.data.id;
    }
    document.getElementById('pokeResult-img').innerHTML = '<img src = '+url_img+num+'.png >';
    document.getElementById('pokeResult-num').innerHTML = '<h3>'+num+'</h3>';
    document.getElementById('pokeResult-name').innerHTML = '<h3>'+response.data.name.toUpperCase()+'</h3>';
    document.getElementById('pokeResult-type1').innerHTML = '<h3>'+response.data.types[0].type.name.toUpperCase()+'</h3>';
    document.getElementById('pokeResult-type2').innerHTML = '<h3>'+response.data.types[1].type.name.toUpperCase()+'</h3>';
});