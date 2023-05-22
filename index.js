const personajes = document.getElementById('data-container')

fetch(`https://gateway.marvel.com:443/v1/public/characters?
ts=1&apikey=7c3793f00a63abf77335e2dd39427d9c&hash=46ab9fa0d9448707a06e98b672ea3587`)
    // Exito
    .then(response => response.json())  // convertir a json
    .then((json) => {
        for (let hero of json.data.results) {
            const card = document.createElement("div");
            card.innerHTML += `        
        <img src=${hero.thumbnail.path}.${hero.thumbnail.extension} alt=${hero.name}>
        <h2>${hero.name}</h2>`;
            personajes.appendChild(card);
        }
    })    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores


