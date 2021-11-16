
window.addEventListener("load",function(){

fetch('https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')

.then(function(response){
    return response.json();
})



.then(function(data){

    let peliculasPopulares = document.querySelector(".lista-cartelera")

for (let i = 0; i <5; i++)
console.log(data.results[i].title)
})



.catch(function(error){
    console.log('El error fue: ' + error);
})

}
)

        