function fetchPersonnage(){
    return fetch('https://hp-api.lainocs.fr/characters'  )
        .then((response) => response.json())}

function fetchFilm(personnage){
    return fetch('https://hp-api.lainocs.fr/characters/' + personnage )
        .then((response) => response.json())
        
}
async function displayPersonnage(){
    const data=await fetchPersonnage()  // data devient une nouvelle base de donnée
    var i=0
    var y=0
    while (i<30) {
        const maison = data[i]
        console.log(maison)
        if (maison.house=="Gryffindor"){
            await displayFilm(maison.slug)
            i = i+1
            y=y+1
        }
        else{
            i=i+1
        }
        
        console.log(y)
    }
    
}

async function displayFilm(personnage){
    const data = await fetchFilm(personnage) // data devient une nouvelle base de donnée en partant du personnage
    var newDiv = document.createElement("div")
    newDiv.className="maison"
    newDiv.innerHTML =`
    <h2 class="name"> Nom et prénom: ${data.name}</h1>        
    <h4 class="house"> Maison: ${data.house}</h4>
    <h4 class="actor"> Acteur: ${data.actor}</h4>
    <h4 class="role"> Role: ${data.role}</h4>
    <h4 class="eyes">Yeux: ${data.eyes}</h4>
    <h4 class="hairs"> Cheveux: ${data.hairs}</h4>
    <h4 class="birthday"> date d'anniversaire: ${data.birthday}</h4>
    <h4 class="blood"> Origine: ${data.blood}</h4>
    <h4 class="patronus"> Patronus: ${data.patronus}</h4>
    <img class ="image" src="${data.image}" alt="${data.name}"></img>`;
    document.body.appendChild(newDiv);
    // la fonction envoie les données qu'il as récupérer dans l'ancienne base de donnée data du displayPersonnage, pour le remettre dans une nouvelle base de données.
}

