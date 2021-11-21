let queryStringObjS = new URLSearchParams(location.search);
let id = queryStringObjS.get('id');
console.log(id);

fetch('https://api.themoviedb.org/3/tv/'+ id +'?api_key=1caaa22005845643c0863fd9677bc21c')

.then(function(response){
    return response.json()
})

.then(function(data){
    let arrayFav = [data];
    console.log(data);
    let infoSeries = document.querySelector('section')
    infoSeries.innerHTML = 
    ` <h2 class="h2-titulos">${data.name}</h2>
    
    <div class="section-detail-movie">
        <article class="article-img">
            <img class="imagen-detail-movie" src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="${data.name}">
        </article>
        <article class="articulo-detail-movie">
            <ul class="clase-texto-detail-movie">
               <li>Calification: ${data.vote_average}</li>
               <li>Release date: ${data.first_air_date}</li>
                
               <li> <a class="a-li-detail-serie">Genre:${data.genres[0].name} </a> </li>
                
               <li>Synopsis: ${data.overview}</li>
                </ul>
                <h3><a class="boton-favoritos">Add to favorites ♥ ♥ ♥</a></h3>

            
        </article>
 </div>`
    

})


 let favS = document.querySelector('.boton-favoritos') //agarro boton favoritos
favS.addEventListener('click', function(){ //creo un evento para ese boton
    if(window.localStorage.getItem('favoritos') == null){ //me fijo que no tenga nada el localstorage de favoritos
    window.localStorage.setItem('favoritos', JSON.stringify(arrayFav)) //lo paso a un string (cadena de texto)
    console.log(arrayFav)
    } else{
        let serieObjeto = JSON.parse(window.localStorage.getItem('favoritos')) 
        serieObjeto.push(data) //agrego elemento al array
        window.localStorage.setItem('favoritos', JSON.stringify(serieObjeto))
        console.log(serieObjeto);
    } 
}) 

