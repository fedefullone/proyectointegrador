window.addEventListener("load", function(){

    let queryString = location.search
    let queryStringObj = new URLSearchParams(queryString)
    let resultadoDeBusqueda = queryStringObj.get("buscador")
    
    if (resultadoDeBusqueda != null){

        fetch(`${proxy}https://developers.themoviedb.org/3/search/search-movies`)
            .then(function (response){
                return response.json();
            })
            .then (function(data){
                console.log(data);
                document.querySelector('.resultado').innerHTML = `
                <h2>${datos.data[0].artist.name}</h2>
                <div>
                    <img src="${datos.data[0].artist.picture_big}"> 
                    <ul>
                        <li>
                        <a href="" ><h1>Canciones</h1></a>
                        </li> 
                        
                        <li>
                        <h1>Album</h1>
                        </li>
                    </ul> 
                </div>`;
            })
            .catch(function(error){
                console.log("el error es:" + error)
            })

            if (resultadoDeBusqueda == "") {
                this.alert("Debes escribir algo!");
            }else if (resultadoDeBusqueda.length <= 3)
                    this.alert("Debes escribir al menos tres caracteres!");

    }
});