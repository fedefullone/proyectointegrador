let queryStringObj = new URLSearchParams(location.search);
let id = queryStringObj.get('id');

fetch('https://api.themoviedb.org/3/movie/'+ id +'}?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US')

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
              <li>Estreno: 26/08/2021</li>
              <li>Duración: 1h 58m</li>
              <li>
                   <a class="a-li-detail-serie"href="detail-accion.html">Género: Acción</a>
               </li>
              <li>Sinopsis: Harry es el misterioso tipo que se incorpora como guardia de seguridad en una compañía de blindados. Durante un intento de atraco a su camión, sorprende a sus compañeros mostrando habilidades de un soldado profesional, dejando al resto preguntándose quién es realmente y de dónde viene. Pronto se hará claro el verdadero motivo por el cual Harry está buscando un ajuste de cuentas.</li>
              <li><a class="a-li-detail-movie" href="favoritos.html">♥</a></li>
               </ul>
           
       </article>
</div>`
})