
let url = 'https://pokeapi.co/api/v2/pokemon/';
let url_img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
let box = document.getElementById('sch-box');
let btn = document.getElementById('sch-btn');
let tab = document.getElementById('pokeResult');

 function callPokemon() {
    let table = '';
    if (box.value != '') {
        let busca = box.value.split(' ');
        box.value = '';

        for (let x of busca) {
            axios.get(url + x).then(function (result) {
                console.log(result.data.name);
                let num;
                if (result.data.id < 100) {
                    if (result.data.id < 10)
                        num = '00' + result.data.id;
                    else num = '0' + result.data.id;
                }
                 table += '<tr><td rowspan="3"><img src = '
                    + url_img + num + '.png ></td><td>Numero:</td><td><h4>'
                    + num + '</h4></td></tr><tr><td>Nome:</td><td><h4>'
                    + result.data.name.toUpperCase() + '</h4></td></tr><tr><td>Tipo:</td><td><h4>'
                    + result.data.types[0].type.name.toUpperCase() + '</h4></td>';
                /*if (result.data.types[1] !== undefined)
                        '<td"><h4>' + result.data.types[1].type.name.toUpperCase() + '</h4></td>';*/
                table+= '</tr>'
                console.log(table);
                tab.childNodes[3].innerHTML = table;
            });
        }
        tab.classList.remove('invisible');
    }
}

box.onkeypress = function (e) {
    if (e.which == 13) btn.click();
}

btn.addEventListener('click', callPokemon);