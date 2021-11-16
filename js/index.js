
// esto sirve para que me carguen todos los elementos de la pagina aunque aparezca una alerta

window.addEventListener("load", function () {
    
    // fetch para peliculas populares


    fetch('https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')

        // transformo de json a objeto literal
        .then(function (response) {
            return response.json();
        })

        //una vez recibidos los datos trabajo con ellos
        .then(function (data) {
            for (let i = 0; i < 5; i++){
                console.log(data.results[i]);

            document.querySelector(".lista-cartelera").innerHTML +=

                `<article class="listados">
            <div>
                <img class="portadas"src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}"alt="${data.results[i].title}">
            </div>

        <h3 class="titulos-peliculas">${data.results[i].title}</h3><a href="detail-movie.html?id=${data.results[i].id}
        <p class="generos-texto">${data.results[i].release_date}</p>
        <p class="generos-texto"><a href="detail-movie.html?id=${data.results[i].id}" class="a-titulo"> Ver más ✓ </a>


    </article> `

            }
        })

    // fetch para series populares

    fetch('https://api.themoviedb.org/3/tv/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')

    // transformo de json a objeto literal
    .then(function (response) {
        return response.json();
    })

    //una vez recibidos los datos trabajo con ellos
    .then(function (data) {
        for (let i = 0; i < 5; i++){
            console.log(data.results[i]);

        document.querySelector(".lista-cartelera-series").innerHTML +=

            `<article class="listados">
        <div>
            <img class="portadas"src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}"alt="${data.results[i].title}">
        </div>

    <h3 class="titulos-peliculas">${data.results[i].name}</h3><a href="detail-movie.html?id=${data.results[i].id}
    <p class="generos-texto">${data.results[i].first_air_date}</p>
    <p class="generos-texto"><a href="detail-movie.html?id=${data.results[i].id}" class="a-titulo"> Ver más ✓ </a>


</article> `

}

    })

}
)

