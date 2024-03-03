fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })

async function fetchPokemon(pokemon){
    return await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then((response) => response.json())

}

async function displayPokemon(pokemon){
    const data = await fetchPokemon(pokemon)
    document.getElementById("pokemon").innerHTML =`
        <h1>${data.name}</h1>
        <img src="$data.sprites.front_default}" alt="${data.name}"></img>`;
    
}



