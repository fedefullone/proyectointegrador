// favoritos peliculas
window.addEventListener("load", function () {
    let listaPelis = window.localStorage.getItem('favoritos') 
    let pelis = JSON.parse(listaPelis)
    let contenedorFavoritos = document.querySelector('.section-favoritos')
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

let vaciar = document.querySelector('.vaciar-favoritos')
vaciar.addEventListener('click', function(){
    window.localStorage.clear('favoritos')
})


})