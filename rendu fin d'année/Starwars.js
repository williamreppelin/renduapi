
async function fetchStarWars(){
    
    return fetch('https://api.themoviedb.org/3/movie/1895?api_key=169c6f8b86ca184883e159d37a3cdaf4&language=fr-FR')
    .then((response) => response.json())

}

async function displayStarWars(){
    const data = await fetchStarWars()
    document.getElementById("starwars").innerHTML=`
    <h1>${data.title}</h1>
    <img class ="image" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}"></img>
    
    
    `
}

displayStarWars()