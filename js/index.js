window.addEventListener("load",function(){


fetch('https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
/*fetch('https://api.themoviedb.org/3/movie/76341?api_key=1caaa22005845643c0863fd9677bc21c')*/
.then(function(response){
    return response.json();

}
)

.then(function(data){
    let nombresPeliculasPopulares = data.results[i].title;
   
    for  (let i = 0; i < 5; i++) {
        const cadaPelicula = nombresPeliculasPopulares[i];
        
        
        let peliculaNombre = cadaPelicula.title;
    }

   
console.log(nombresPeliculasPopulares);

}
)

.catch(function(error){
    console.log('el error fue:'+ error);
}
)

}
)




