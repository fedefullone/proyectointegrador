let queryStringObjS = new URLSearchParams(location.search);
let id = queryStringObjS.get('id');
console.log(id);

fetch('https://api.themoviedb.org/3/tv/'+ id +'?api_key=1caaa22005845643c0863fd9677bc21c')

.then(function(response){
    return response.json()
})

.then(function(data){
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
                
               <li> <a class="a-li-detail-serie"href="detail-accion.html">Género: Acción</a> </li>
                
               <li>Synopsis: ${data.overview}</li>
               <li><a class="a-li-detail-movie" href="favoritos.html">♥</a></li>
                </ul>
            
        </article>
 </div>`
    

})
