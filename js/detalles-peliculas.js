let queryStringObj = new URLSearchParams(location.search);
let id = queryStringObj.get('id');

fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=1caaa22005845643c0863fd9677bc21c')

    .then(function (response) {
        return response.json();
    })


    .then(function (data) {
        console.log(data);

        let arrayFav = [data];
        let infoPeliculas = document.querySelector('section');
        console.log(data.genres[1])
        infoPeliculas.innerHTML =
            ` <h2 class="h2-titulos">${data.title}</h2>
    
   <div class="section-detail-movie">
       <article class="article-img">
           <img class="imagen-detail-movie" src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="${data.title}">
       </article>
       <article class="articulo-detail-movie">
           <ul class="clase-texto-detail-movie">
              <li>Calification: ${data.vote_average}</li>
              <li>Release date: ${data.release_date}
              <li>Duration: ${data.runtime} minutes</li>
              <li>
                   <a class="a-li-detail-serie"href="detail-accion.html">Género: ${data.genres[1].name}</a>
               </li>
              <li>Synopsis: ${data.overview}</li>
            
               </ul>
               <h3><a class="boton-favoritos">Agregar a favoritos ♥ ♥ ♥</a></h3>
             
       </article>
   
</div>`

        let fav = document.querySelector('.boton-favoritos')
        fav.addEventListener('click', function(){
            if(window.localStorage.getItem('favoritos')== null){
            window.localStorage.setItem('favoritos', JSON.stringify(arrayFav))
            console.log(arrayFav)
            } else{
                let peliculaObjeto = JSON.parse(window.localStorage.getItem('favoritos'))
                peliculaObjeto.push(data)
                window.localStorage.setItem('favoritos', JSON.stringify(peliculaObjeto))
                console.log(peliculaObjeto);
            }
        })
       
    })

    .catch(function (error) {
        console.log('El error fue: ' + error)
    })