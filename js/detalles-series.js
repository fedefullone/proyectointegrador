let queryStringObj = new URLSearchParams(location.search);
let id = queryStringObj.get('id');

fetch('https://api.themoviedb.org/3/tv/'+id+'?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US')

.then(function (response) {
    return response.json();
})

.then(function (data) {
    console.log(data);
    let infoSeries = document.querySelector('section')
    infoSeries.innerHTML = ` <div class="section-detail-movie">
    <article class="article-img">
        <img class="imagen-detail-series"src="./img/series/lacasadepapel.jpeg" alt="lacasadepapel">
    </article>
    <article class="articulo-detail-movie">
        <ul class="clase-texto-detail-serie">
           <li>Calificación: ★★★★★  </li>
           <li>Estreno: 02/05/2017</li>
           <li>
               <a class="a-li-detail-serie"href="detail-accion.html">Géneros: Acción</a>
           </li>
           <li>Sinopsis: Sergio Marquina, alias El Profesor, ha planeado de forma minuciosa desde su infancia el atraco de la Fábrica Nacional de la Moneda y Timbre. Con la ayuda de un grupo de ocho delincuentes, de nombre ficticio y el rostro enmascarado, pretende ocupar el edificio durante 11 días, a fin de fabricar 2.400 millones de euros.</li>
           <li>
               <a class="a-li-detail-serie" href="favoritos.html">♥</a>
            </li>
        </ul>
    </article>
</div>
    
    
    `

})
