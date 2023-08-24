const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
var pokeid = urlParams.get('pokeid');
console.log(pokeid);

// funcion para cuando la llamada es exitosa
function exito() {
    var datos = JSON.parse(this.responseText); //convertir a JSON
    console.log(datos);
    document.getElementById('pokelist').innerHTML = 
        '<li class="pokemon-entry"><img class="pokemon-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' 
        + pokeid 
        + '.png">' 
        + datos.name 
        + '<br>' 
        + datos.genera[7].genus 
        + '</li>'
    
    
}

// funcion para la llamada fallida
function error(err) {
    console.log('Solicitud fallida', err); //los detalles en el objecto "err"
}

var xhr = new XMLHttpRequest(); //invocar nueva instancia de XMLHttpRequest
xhr.onload = exito; // llamar a la funcion exito si exitosa
xhr.onerror = error;  // llamar a la funcion error si fallida
xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon-species/' + pokeid); // Abrir solicitud GET
xhr.send(); // mandar la solicitud al vervidor.