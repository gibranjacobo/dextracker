import fetch from "node-fetch";

let pokeres = {};
let pokenum = Math.floor(Math.random() * (898 - 1 + 1)) + 1;

fetch('https://pokeapi.co/api/v2/pokemon/' + pokenum)
.then(response => response.json())
.then(data => {
    console.log(data.name);
    for (let i = 0; i < data.types.length; i++) {
        console.log("Type " + (i+1) + ": " + data.types[i].type.name);
    }
    for (let i = 0; i < data.abilities.length; i++) {
        console.log("Ability " + (i+1) + ": " + data.abilities[i].ability.name);
    }
    for (let i = 0; i < data.stats.length; i++) {
        console.log(data.stats[i].stat.name + ": " + data.stats[i].base_stat);
    }
})
.catch(err => console.log('Solicitud fallida', err));
