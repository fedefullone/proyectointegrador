// favoritos peliculas
window.addEventListener("load", function () {

    let queryStringObj = new URLSearchParams(location.search);
    let id = queryStringObj.get('id');

    // selecciono el boton de favoritos
    let botonFavoritos = document.querySelector('.boton-favoritos')

    // defino el array para guardas las peliculas favoritas
    let favoritos = [];
    let traigoStorage = localStorage.getItem('favoritos');
    if(traigoStorage){
        favoritos = JSON.parse(traigoStorage);

    }
    






})
