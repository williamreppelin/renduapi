


function fetchFilm(personnage){
    return fetch('https://hp-api.lainocs.fr/characters/' + personnage )
        .then((response) => response.json())

}

function fetchPersonnage(){
    return fetch('https://hp-api.lainocs.fr/characters'  )
        .then((response) => response.json())

}

async function displayPersonnage(){
    const data=await fetchPersonnage()  // data devient une nouvelle base de donnée
    const id = data[entierAleatoire(0,29)] // data prend les informations d'un personnage aléatoire
    var personnage = id.slug   // personnage est une variable prenant le nom du personnage
   
    displayFilm(personnage)     
}

async function displayFilm(personnage){
    const data = await fetchFilm(personnage) // data devient une nouvelle base de donnée en partant du personnage
    await changeCouleur(personnage)
    document.getElementById("Harry-potter").innerHTML =`
        <h2 class="name">${data.name}</h1>        
        <h4 class="house">${data.house}</h4>
        <h4 class="actor">${data.actor}</h4>
        <h4 class="role">${data.role}</h4>
        <img class ="image" src="${data.image}" alt="${data.name}"></img>`;

    // la fonction envoie les données qu'il as récupérer dans l'ancienne base de donnée data du displayPersonnage, pour le remettre dans une nouvelle base de données.
}

function entierAleatoire(min, max){
    var nombre = Math.floor(Math.random() * (max - min + 1)) + min ;
    
    return nombre
    // récupère un nombre alétoire.
   }

async function changeCouleur(personnage){
    const data =  await fetchFilm(personnage)
    console.log("youpi", data.house)
    if(data.house=="Gryffindor"){
        document.getElementById("Harry-potter").style.backgroundColor = "#ae0001"
        console.log("g")
    }
    else if(data.house=="Slytherin"){
        document.getElementById("Harry-potter").style.backgroundColor = "#367c54"
        console.log("s")
    }

    else if (data.house == "Ravenclaw"){
        document.getElementById("Harry-potter").style.backgroundColor = "#222f5b"
        console.log("r")
    }
    else if (data.house == "Hufflepuff"){
        document.getElementById("Harry-potter").style.backgroundColor = "#ecb939"
        console.log("h")
    }
    else{
        document.getElementById("Harry-potter").style.backgroundColor = "#F5F5DC"
        console.log("v")
    }   
    
}


