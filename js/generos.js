// fetch para generos de  peliculas

fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US')

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for (let i = 0; i < data.genres.length; i++) {
            console.log(data.genres[i]);

            document.querySelector(".lista-generos-peliculas").innerHTML +=

                `<article class="listados-generos">
            <a href="detail-genero-movies.html?id=${data.genres[i].id}"<h2 class="h2-titulos-generos">${data.genres[i].name}</h2></a>
            
        </article>
            `


        }
    })

// fetch para generos de  series

fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US')

    // transformo de json a objeto literal
    .then(function (response) {
        return response.json();
    })

    //una vez recibidos los datos trabajo con ellos
    .then(function (data) {
        for (let i = 0; i < data.genres.length; i++) {
            console.log(data.genres[i]);

            document.querySelector(".lista-generos-series").innerHTML +=

                `<article class="listados-generos">
        <a href="detail-genero-series.html?id=${data.genres[i].id}"><h2 class="h2-titulos-generos">${data.genres[i].name}</h2></a>
        
    </article>
        `


        }
    })
