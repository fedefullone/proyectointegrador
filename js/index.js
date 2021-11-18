
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
            for (let i = 0; i < 5; i++) {
                console.log(data.results[i]);

            let peliculasPopulares = document.querySelector(".lista-cartelera")
            peliculasPopulares.innerHTML +=

                    `<article class="listados">
            <div>
            <a href="detail-movie.html?id=${data.results[i].id}">
                <img class="portadas"src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}"alt="${data.results[i].title}">
                </a>
            </div>

        <h3 class="titulos-peliculas"><a href="detail-movie.html?id=${data.results[i].id}" class="a-titulo">${data.results[i].title}</a></h3>
        <p class="generos-texto"><a href="detail-movie.html?id=${data.results[i].id}" class="a-titulo">${data.results[i].release_date}</a></p>
        <p class="generos-texto"><a href="detail-movie.html?id=${data.results[i].id}" class="a-titulo"> See more ✓ </a>


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
            for (let i = 0; i < 5; i++) {
                console.log(data.results[i]);

                let seriesPopulares = document.querySelector(".lista-cartelera-series")
                seriesPopulares.innerHTML +=

                    `<article class="listados">
        <div>
        <a href="detail-serie.html?id=${data.results[i].id}">
            <img class="portadas"src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}"alt="${data.results[i].name}">
        </img>
            </div>

        <h3 class="titulos-peliculas"><a href="detail-serie.html?id=${data.results[i].id}" class="a-titulo">${data.results[i].name}</a></h3>

        <p class="generos-texto"><a href="detail-serie.html?id=${data.results[i].id}" class="a-titulo">${data.results[i].first_air_date}</a></p>

    <p class="generos-texto"><a href="detail-serie.html?id=${data.results[i].id}" class="a-titulo"> See more ✓ </a></p>


</article> `

            }

        })

}
)

// fetch para lo mas visto en peliculas


fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')

    // transformo de json a objeto literal
    .then(function (response) {
        return response.json();
    })

    //una vez recibidos los datos trabajo con ellos
    .then(function (data) {
        for (let i = 0; i < 5; i++) {
            console.log(data.results[i]);

            let peliculasMasValoradas = document.querySelector(".lista-cartelera-peliculas-vistas")
            peliculasMasValoradas.innerHTML +=

                `<article class="listados">
    <div>
    <a href="detail-movie.html?id=${data.results[i].id}">
        <img class="portadas"src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}"alt="${data.results[i].title}">
  </a>
        </div>

<h3 class="titulos-peliculas"><a href="detail-movie.html?id=${data.results[i].id}" class="a-titulo">${data.results[i].title}</a></h3>
<p class="generos-texto"><a href="detail-movie.html?id=${data.results[i].id}" class="a-titulo">${data.results[i].release_date}</a></p>
<p class="generos-texto"><a href="detail-movie.html?id=${data.results[i].id}" class="a-titulo"> See more ✓ </a></p>


</article> `

        }
    })

//fetch para proximamente

fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')

    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log(data)
        for (let i = 0; i<1; i++) {
            console.log(data.results[i]);
            let proximamente = document.querySelector('section')
            proximamente.innerHTML = `
            <h2 class="h2-proximamente">Upcoming</h2>
            <img class="foto-proximamente" src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="${data.results[i].title}">
        `

        }
    })