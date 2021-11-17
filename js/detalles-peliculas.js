let queryStringObj = new URLSearchParams(location.search);
let id = queryStringObj.get('id');

fetch('https://api.themoviedb.org/3/movie/' + id +'?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US')

.then(function (response) {
    return response.json();
})


.then(function (data) {
    console.log(data);
   let infoPeliculas = document.querySelector('section');
   infoPeliculas.innerHTML = ` <h2 class="h2-titulos">${data.title}</h2>
    
   <div class="section-detail-movie">
       <article class="article-img">
           <img class="imagen-detail-movie" src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="${data.title}">
       </article>
       <article class="articulo-detail-movie">
           <ul class="clase-texto-detail-movie">
              <li>Califacion: ${data.vote_average}</li>
              <li>Estreno: ${data.release_date}
              <li>Duración: ${data.runtime}</li>
              <li>
                   <a class="a-li-detail-serie"href="detail-accion.html">Género: Acción</a>
               </li>
              <li>Sinopsis: ${data.overview}</li>
              <li><a class="a-li-detail-movie" href="favoritos.html">♥</a></li>
               </ul>
           
       </article>
</div>`
})

.catch(function(error){
    console.log('El error fue: ' + error)
})