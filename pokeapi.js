console.log("hello world");

// funcion para cuando la llamada es exitosa
function exito() {
    var datos = JSON.parse(this.responseText); //convertir a JSON
    console.log(datos.pokemon_entries);
    for (let i = 0; i < datos.pokemon_entries.length; i++) {
        //console.log(datos.results[i].name);
        document.getElementById('pokelist').innerHTML += '<li class="pokemon-entry">' + datos.pokemon_entries[i].pokemon_species.name + '</li>';
    }
    
}

// funcion para la llamada fallida
function error(err) {
    console.log('Solicitud fallida', err); //los detalles en el objecto "err"
}

var xhr = new XMLHttpRequest(); //invocar nueva instancia de XMLHttpRequest
xhr.onload = exito; // llamar a la funcion exito si exitosa
xhr.onerror = error;  // llamar a la funcion error si fallida
xhr.open('GET', 'https://pokeapi.co/api/v2/pokedex/2'); // Abrir solicitud GET
xhr.send(); // mandar la solicitud al vervidor.