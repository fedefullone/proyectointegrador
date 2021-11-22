// favoritos peliculas
window.addEventListener("load", function () {


})
/*let listaPelis = window.localStorage.getItem('favoritos')
let pelis = JSON.parse(listaPelis)
let contenedorFavoritos = document.querySelector('.section-favoritos-peliculas')
for (let i = 0; i < pelis.length; i++) {
    const element = pelis[i];
    contenedorFavoritos.innerHTML += `
        <article class="listados">
    <div>
    <a href="detail-movie.html?id=${element.id}">
        <img class="portadas"src="https://image.tmdb.org/t/p/w342/${element.poster_path}"alt="${element.title}">
  </a>
        </div>

<h3 class="titulos-peliculas"><a href="detail-movie.html?id=${element.id}" class="a-titulo">${element.title}</a></h3>
<p class="generos-texto"><a href="detail-movie.html?id=${element.id}" class="a-titulo">${element.release_date}</a></p>
<p class="generos-texto"><a href="detail-movie.html?id=${element.id}" class="a-titulo"> See more ✓ </a></p>


</article> `

}

/*let vaciar = document.querySelector('.vaciar-favoritos')
vaciar.addEventListener('click', function () {
    window.localStorage.clear('favoritos')
})*/



/*let listaSeries = window.localStorage.getItem('favoritos')
let series = JSON.parse(listaSeries)
let seriesFavoritos = document.querySelector('.section-favoritos-series')
for (let i = 0; i < series.length; i++) {
    const elemento = series[i];
    seriesFavoritos.innerHTML += `
        <article class="listados">
    <div>
    <a href="detail-serie.html?id=${elemento.id}">
        <img class="portadas"src="https://image.tmdb.org/t/p/w342/${elemento.poster_path}"alt="${elemento.name}">
  </a>
        </div>

<h3 class="titulos-peliculas"><a href="detail-serie.html?id=${elemento.id}" class="a-titulo">${elemento.name}</a></h3>
<p class="generos-texto"><a href="detail-serie.html?id=${elemento.id}" class="a-titulo">${elemento.first_air_date}</a></p>
<p class="generos-texto"><a href="detail-serie.html?id=${elemento.id}" class="a-titulo"> See more ✓ </a></p>


</article> `

}

let vaciar = document.querySelector('.vaciar-favoritos')
vaciar.addEventListener('click', function () {
    window.localStorage.clear('favoritos')
    alert("You clear all your favorites!")
}) */

