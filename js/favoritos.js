// favoritos peliculas
window.addEventListener("load", function () {
let favPelis = []; //este es mi array de peliculas favoritas

if (localStorage.getItem("favoritos")){ // pongo la condicion de que si fue creada la lista favoritos 
let agarroStorage = localStorage.getItem('favoritos'); //guardo datos del storage
favPelis = JSON.parse(agarroStorage); //transformo el string en formato json a obejto literal

}
console.log(favPelis);

let seccionFavoritos = document.querySelector('.section-favoritos-peliculas') //selecciono la section donde estan las peliculas favoritas

if(favPelis.length ==0){
    seccionFavoritos.innerHTML += `
    <h3>No movies in your favorite list</h3>
    <h4> <a href="index.html">Go back<h4>
    `
} else {
    for (let i = 0; i < favPelis.length; i++) {
         search (favPelis[i])
        
    }
function search (id){
    fetch("https://api.themoviedb.org/3/movie/"+ id +"?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US")

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        
    })
}
}

// cominezo de favoritos series

let favSeries = []; // array de favoritos de series
//creo una condicion para que en el caso de que haya sido creada la lista, traigo los datos del storage, los guardo y luego los transformo de string en json a obejeto literal
if(localStorage.getItem('favoritos')){
    let recuperoStorage = localStorage.getItem('favoritos');
    favSeries = JSON.parse(recuperoStorage);

}
console.log(favSeries)

let seccionFavoritosSeries = document.querySelector('.section-favoritos-series')
if(favSeries.length == 0){
    seccionFavoritosSeries.innerHTML += `
<h3> No series in your favorite list </h3>
<h4> <a href"index.html">Go back</h4>
`
} else {
    for (let i = 0; i < favSeries.length; i++) {
        searchSeries(favSeries[i]);
        
    }

function searchSeries(idS){
    fetch("https://api.themoviedb.org/3/tv/"+ idS +"?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US")
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
    })
}
}

})


