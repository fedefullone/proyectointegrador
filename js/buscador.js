
window.addEventListener("load", function(){

    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let resultadoDeBusqueda = queryStringObj.get("busqueda");
    
    if (resultadoDeBusqueda != null) {
        fetch(`https://api.themoviedb.org/3/search/movie}`)
            .then(function (response){
                return response.json();
            })
            .then (function(data){
                console.log(data);
                document.querySelector('.resultado').innerHTML = `
                
                <div>
                <img class="portadas" src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}">
                <ul>
                    <li>
                    <a ><h1>Movies</h1></a>
                    </li> 
                    
                    <li>
                    <a href="detail-serie.html?id=${data.results[i].id}">
                    </li>
                </ul> 
            </div>
                `;
            })


            .catch(function(error){
                console.log("el error es:" + error)
            })

           
    }
     
    document.getElementById("form-busqueda").addEventListener("submit", function(e){
        e.preventDefault();
        let textoBuscado = document.getElementById("busqueda-text").value;
        let tieneErrores = false;

        if (textoBuscado == "") {
            alert("Debes escribir algo!");
            tieneErrores = true;
         }else if (textoBuscado.length <= 2){
            tieneErrores = true;
            alert("Debes escribir al menos tres caracteres!");
        }
        
        if(!tieneErrores){
            this.submit();
        }
        
    });
});
