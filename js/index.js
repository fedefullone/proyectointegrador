fetch('https://api.themoviedb.org/3/movie/76341?api_key=1caaa22005845643c0863fd9677bc21c')
.then(function(response){
    return response.json();
}
)

.then(function(data){
    console.log(data);
}
)

.catch(function(error){
    console.log('el error fue:'+ error);
}
)

